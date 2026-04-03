// app.js — DeutscheDeck Main Logic (v2.0.1 - RESTORED)
// Design: Bauhaus Modern (uni-weimar.de inspired)
// Features: Flashcards, Typing, Listening, Articles, Tenses, Browse, Progress.
// ──────────────────────────────────────────────────────────────────────────────

(function () {
  'use strict';

  // ── CORE STATE ────────────────────────────────────────────────────────────
  const ST = {
    screen: 'home',
    vocab: [],         // window.VOCAB_DB
    tenses: [],        // window.VERB_DB
    session: {         // active practicing session
      queue: [],       // list of items to practice
      idx: 0,          // current item index
      type: 'all',     // category
      mode: 'flash',   // 'flash', 'typing', 'listening', 'article', 'conj'
      correct: 0,
      wrong: 0,
    },
    progress: JSON.parse(localStorage.getItem('ld_progress') || '{}'), // {wordId: {rate, last, interval, ease}}
    stats: JSON.parse(localStorage.getItem('ld_stats') || '{"sessions":0, "streak":0, "lastDate":null, "dailyGoal":10, "todayCount":0}'),
    history: JSON.parse(localStorage.getItem('ld_history') || '[]'), // [{date: YYYY-MM-DD, count: N}]
    reverseMode: localStorage.getItem('dd_reverseMode') === 'true'
  };

  // ── INIT ──────────────────────────────────────────────────────────────────
  window.addEventListener('load', async () => {
    // Prefer imported datasets (IndexedDB), fall back to embedded JS globals.
    const loaded = await loadDatasets();
    if (loaded && (loaded.vocab || loaded.tenses || loaded.quiz)) {
      toast(`Loaded imported DB: ${(loaded.vocab || []).length} vocab · ${(loaded.tenses || []).length} verbs`);
    } else {
      // If user previously imported but we can't see it, it's usually because the app is opened via file://
      // where storage can be blocked or treated as an opaque origin in some browsers.
      const importedFlag = localStorage.getItem('dd_db_importedAt');
      if (importedFlag && location.protocol === 'file:') {
        toast('DB import not loading (file://). Run via http://localhost and re-import.');
      }
    }
    const embeddedQuiz = (typeof QUIZ_BANK !== 'undefined') ? QUIZ_BANK : undefined;
    window.QUIZ_BANK = loaded.quiz || embeddedQuiz || window.QUIZ_BANK;

    const baseVocab = loaded.vocab || window.VOCAB_DB || [];
    const extraVocab = Array.isArray(window.VOCAB_EXTRA_DB) ? window.VOCAB_EXTRA_DB : [];
    ST.vocab = baseVocab.concat(extraVocab).map(normalizeVocabEntry);
    ST.tenses = loaded.tenses || window.VERB_DB || [];
    
    // Check if progress items actually exist in DB (prevent ghost data)
    const validIds = new Set(ST.vocab.map(v => v.id.toString()));
    Object.keys(ST.progress).forEach(id => {
       if(!validIds.has(id)) delete ST.progress[id];
    });

    // Check streak & today count
    const today = new Date().toISOString().split('T')[0];
    if (ST.stats.lastDate !== today) {
        if(ST.stats.lastDate === getYesterday()) ST.stats.streak++; 
        else if(ST.stats.lastDate !== today) ST.stats.streak = 0;
        ST.stats.todayCount = 0;
        ST.stats.lastDate = today;
    }

    // Initial UI render
    renderHome();
    initKeyboard();
    initSettingsUI();
    
    // Auto-nav to starting screen (url fragment or home)
    const hash = window.location.hash.substring(1);
    nav(hash || 'home');

    // Visitor Counter (powered by counterapi.dev)
    try {
      fetch('https://api.counterapi.dev/v1/deutschdeck_ssmsourav/visits/up')
        .then(res => res.json())
        .then(data => {
           const el = document.getElementById('visitorCount');
           if (el && data.count) el.innerText = data.count.toLocaleString();
        })
        .catch(e => console.warn('Counter failed:', e));
    } catch(e) {}
  });

  // ── DATASETS (Vocab/Tenses/Quiz) via IndexedDB ─────────────────────────────
  const DS_DB_NAME = 'deutschedeck';
  const DS_DB_VERSION = 1;
  const DS_STORES = { vocab: 'vocab', tenses: 'tenses', quiz: 'quiz', meta: 'meta' };

  function openDsDb() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DS_DB_NAME, DS_DB_VERSION);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        Object.values(DS_STORES).forEach((s) => {
          if (!db.objectStoreNames.contains(s)) db.createObjectStore(s);
        });
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async function dsGetMeta(key) {
    const db = await openDsDb();
    return new Promise((resolve) => {
      const tx = db.transaction([DS_STORES.meta], 'readonly');
      const req = tx.objectStore(DS_STORES.meta).get(key);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(undefined);
    });
  }

  async function dsSetMeta(key, val) {
    const db = await openDsDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction([DS_STORES.meta], 'readwrite');
      const req = tx.objectStore(DS_STORES.meta).put(val, key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }

  async function dsSetStore(storeName, key, val) {
    const db = await openDsDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction([storeName], 'readwrite');
      const req = tx.objectStore(storeName).put(val, key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }

  async function dsGetStore(storeName, key) {
    const db = await openDsDb();
    return new Promise((resolve) => {
      const tx = db.transaction([storeName], 'readonly');
      const req = tx.objectStore(storeName).get(key);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(undefined);
    });
  }

  async function loadDatasets() {
    try {
      const importedAt = await dsGetMeta('importedAt');
      if (!importedAt) return {};
      const [vocab, tenses, quiz] = await Promise.all([
        dsGetStore(DS_STORES.vocab, 'v1'),
        dsGetStore(DS_STORES.tenses, 'v1'),
        dsGetStore(DS_STORES.quiz, 'v1')
      ]);
      return { vocab, tenses, quiz };
    } catch {
      return {};
    }
  }

  function validateDatabasePayload(payload) {
    if (!payload || typeof payload !== 'object') throw new Error('Invalid JSON root.');
    const { vocab, tenses, quiz } = payload;
    if (!Array.isArray(vocab) || !Array.isArray(tenses) || !quiz || typeof quiz !== 'object') {
      throw new Error('Database must be { vocab:[], tenses:[], quiz:{} }.');
    }
    const ids = new Set();
    for (const v of vocab) {
      if (!v || (typeof v.id === 'undefined')) throw new Error('Vocab entry missing id.');
      const id = String(v.id);
      if (ids.has(id)) throw new Error(`Duplicate vocab id: ${id}`);
      ids.add(id);
      if (typeof v.de !== 'string' || !v.de.trim()) throw new Error(`Vocab ${id} missing de.`);
      if (typeof v.en !== 'string') throw new Error(`Vocab ${id} missing en.`);
    }
    const tIds = new Set();
    for (const t of tenses) {
      if (!t || typeof t.id === 'undefined') throw new Error('Tenses entry missing id.');
      const id = String(t.id);
      if (tIds.has(id)) throw new Error(`Duplicate tense id: ${id}`);
      tIds.add(id);
      if (typeof t.de !== 'string' || !t.de.trim()) throw new Error(`Tenses ${id} missing de.`);
      if (typeof t.en !== 'string') throw new Error(`Tenses ${id} missing en.`);
    }
    const sections = ['lesen','schreiben','strukturen','wortschatz','hoeren'];
    for (const s of sections) {
      if (quiz[s] && !Array.isArray(quiz[s])) throw new Error(`QUIZ_BANK.${s} must be an array.`);
    }

    // Link check: conjugation mode matches by verb infinitive `de`
    const verbDe = new Set(tenses.map(x => x.de));
    const missing = vocab
      .filter(x => x && x.type === 'verb')
      .map(x => x.de)
      .filter(de => de && !verbDe.has(de))
      .slice(0, 30);
    if (missing.length) {
      throw new Error(`Some vocab verbs have no matching tenses entry (by de): ${missing.join(', ')}${missing.length >= 30 ? '…' : ''}`);
    }
  }

  window.showDbImportModal = () => openModal('dbImportModal');

  window.importDatabase = async (event) => {
    const file = event?.target?.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const payload = JSON.parse(e.target.result);
        validateDatabasePayload(payload);
        await dsSetStore(DS_STORES.vocab, 'v1', payload.vocab);
        await dsSetStore(DS_STORES.tenses, 'v1', payload.tenses);
        await dsSetStore(DS_STORES.quiz, 'v1', payload.quiz);
        await dsSetMeta('importedAt', new Date().toISOString());
        localStorage.setItem('dd_db_importedAt', new Date().toISOString());
        alert('Database imported successfully. The app will reload.');
        window.location.reload();
      } catch (err) {
        alert(`Database import failed: ${err?.message || err}`);
      }
    };
    reader.readAsText(file);
  };



  function toast(msg) {
    const el = document.getElementById('notif');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.classList.remove('show'), 2500);
  }

  function normalizeVocabEntry(v) {
    if (!v || typeof v !== 'object') return v;
    const out = v; // mutate in-place to keep references stable

    if (typeof out.de === 'string') {
      let de = out.de.trim().replace(/\s+/g, ' ');

      // If the headword includes an article, extract it.
      const m = de.match(/^(der|die|das)\s+(.+)$/i);
      if (m) {
        const art = m[1].toLowerCase();
        const rest = (m[2] || '').trim();
        if (!out.article) out.article = art;
        de = rest;
      }

      // If article is present separately, strip any repeated leading articles from `de`.
      if (out.article && typeof out.article === 'string') {
        const a = out.article.toLowerCase();
        if (a === 'der' || a === 'die' || a === 'das') {
          // Remove any number of leading articles (handles "der der Hund", "die das ...", etc.)
          de = de.replace(/^((der|die|das)\s+)+/i, '').trim();
        }
      }

      out.de = de;
    }

    // Normalize article casing if present
    if (typeof out.article === 'string') {
      const a = out.article.trim().toLowerCase();
      if (a === 'der' || a === 'die' || a === 'das') out.article = a;
    }

    return out;
  }

  // ── NAVIGATION ─────────────────────────────────────────────────────────────
  // Hook registry so modules (quiz-engine, etc.) can register callbacks
  // without dangerously wrapping window.nav.
  window._navHooks = window._navHooks || [];

  window.nav = function (id) {
    if (!id) id = 'home';
    ST.screen = id;
    if(window.location.hash !== '#' + id) window.location.hash = id;
    updateBadges();

    // Update Sidebar Buttons
    document.querySelectorAll('.nb').forEach(b => {
      b.classList.remove('active');
      if (b.id === `n-${id}`) b.classList.add('active');
    });

    // Toggle Screens — remove active AND fade-in from all, then add both to target
    document.querySelectorAll('.screen').forEach(s => {
      s.classList.remove('active', 'fade-in');
    });
    const target = document.getElementById(`sc-${id}`);
    if (target) {
      target.classList.add('active');
      // RAF ensures the browser has painted display:block before we transition opacity
      requestAnimationFrame(() => requestAnimationFrame(() => target.classList.add('fade-in')));
    }

    // Screen-specific inits
    try {
        if (id === 'browse') renderBrowse();
        else if (id === 'tenses') renderTenses();
        else if (id === 'progress') renderProgress();
        else if (id === 'home') renderHome();
        else if (id === 'cards') {
            // Display setup screen if no active session
            if (!ST.session || !ST.session.queue || ST.session.queue.length === 0) {
                if(!ST.pendingMode) ST.pendingMode = 'flash';
                if(document.getElementById('fc-setup')) document.getElementById('fc-setup').style.display = 'block';
                if(document.getElementById('fc-ui')) document.getElementById('fc-ui').style.display = 'none';
                if(document.getElementById('fc-done')) document.getElementById('fc-done').style.display = 'none';
            } else {
                if(document.getElementById('fc-setup')) document.getElementById('fc-setup').style.display = 'none';
                renderCard();
            }
        }
        
        // Connect Quiz routing
        if (id === 'quiz' && typeof window.renderQuizHome === 'function') {
            window.renderQuizHome();
        }
    } catch (e) {
        console.error("Navigation/Render error:", id, e);
    }

    // Run registered nav hooks (e.g. quiz-engine)
    window._navHooks.forEach(fn => { try { fn(id); } catch(e) { console.error('Nav hook error:', e); } });

    window.scrollTo(0, 0);
    // Close mobile sidebar on navigation
    document.body.classList.remove('menu-open');
  };

  function updateBadges() {
    const bBdg = document.querySelector('#n-browse .bdg');
    if (bBdg) bBdg.innerText = ST.vocab.length;
    
    const tBdg = document.querySelector('#n-tenses .bdg');
    if (tBdg) tBdg.innerText = ST.tenses.length;
    
    const tb = document.getElementById('tb');
    if (tb) tb.innerText = ST.vocab.length;

    const elC = document.getElementById('sC');
    const elW = document.getElementById('sW');
    const elS = document.getElementById('sSt');
    if (elC) elC.innerText = ST.session ? (ST.session.correct || 0) : 0;
    if (elW) elW.innerText = ST.session ? (ST.session.wrong || 0) : 0;
    if (elS) elS.innerText = ST.stats ? (ST.stats.streak || 0) : 0;
  }

  // ── HOME RENDER ────────────────────────────────────────────────────────────
  function renderHome() {
    updateBadges();

    const homeCount = document.getElementById('homeCount');
    if (homeCount) homeCount.innerText = ST.vocab.length;

    // Goal & Streak
    if(document.getElementById('goalText')) {
        document.getElementById('goalText').innerText = `${ST.stats.todayCount} / ${ST.stats.dailyGoal} words today`;
        document.getElementById('streakNum').innerText = ST.stats.streak;
        
        const due = Object.values(ST.progress).filter(p => isDue(p)).length;
        const db = document.getElementById('dueBadge');
        if(db) {
            db.innerText = due > 0 ? `${due} due` : '';
            db.style.display = due > 0 ? 'inline-block' : 'none';
        }

        // Streak bar (7 dots)
        const sb = document.getElementById('streakBar');
        if(sb) {
            sb.innerHTML = [0,1,2,3,4,5,6].map(i => `<div class="dot ${i < (ST.stats.todayCount / ST.stats.dailyGoal * 7) ? 'active' : ''}"></div>`).join('');
        }
    }
  }

  // ── KEYBOARD SHORTCUTS ──────────────────────────────────────────────────────
  function initKeyboard() {
    document.addEventListener('keydown', (e) => {
      // Don't block Enter while typing in a quiz mode
      const isQuizInput = (ST.screen === 'cards' && (ST.session.mode === 'typing' || ST.session.mode === 'listening' || ST.session.mode === 'conj'));
      if ((e.target.tagName === 'INPUT' || e.target.tagName === 'SEARCH') && (!isQuizInput || e.key !== 'Enter')) return;

      if (ST.screen === 'cards' && ST.session.mode === 'flash') {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          if(!ST.session.flipped) flip();
        }
        if (document.getElementById('ansBtns').style.display !== 'none') {
          if (e.key === '1') ans('w');
          if (e.key === '2') ans('h');
          if (e.key === '3') ans('c');
        }
      } else if(ST.screen === 'cards' && (ST.session.mode === 'typing' || ST.session.mode === 'listening')) {
         if (e.key === 'Enter') {
            const nextBtn = document.getElementById(ST.session.mode === 'typing' ? 'typNext' : 'listenNext');
            if(nextBtn && nextBtn.style.display !== 'none') {
                ST.session.mode === 'typing' ? nextTyping() : nextListening();
            } else {
                ST.session.mode === 'typing' ? checkTyping() : checkListening();
            }
         }
      }

      if (e.key === 'Escape') {
          if (document.getElementById('quickSearchOverlay').classList.contains('active')) closeQuickSearch();
          else nav('home');
      }
      if (e.key === '?' && e.shiftKey) openModal('shortcutsModal');
      
      // CMD+K or CTRL+K for Search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
          e.preventDefault();
          openQuickSearch();
      }
    });
  }

  // ── SESSIONS ────────────────────────────────────────────────────────────────
  window.lastST = 'all';

  window.openSetup = function(mode, defaultType) {
      if(ST.session) ST.session = null; // Clear existing session
      ST.pendingMode = mode;
      
      const titleEl = document.getElementById('setupTitle');
      const descEl = document.getElementById('setupDesc');
      if(titleEl && descEl) {
          const modeLabels = {
              'flash': 'Flashcard Session',
              'typing': 'Typing Quiz',
              'listening': 'Listening Quiz',
              'article': 'der/die/das Quiz',
              'conj': 'Conjugation Trainer'
          };
          const m = modeLabels[mode] || 'Study Session';
          titleEl.innerHTML = `<span class="material-symbols-sharp" style="font-size:inherit;vertical-align:middle;">manage_accounts</span> ${m} Setup`;
          descEl.innerText = `Configure your custom ${m.toLowerCase()} to master the database.`;
      }

    document.getElementById('setupLevel').value = defaultType || 'all';
    if(document.getElementById('setupType')) document.getElementById('setupType').value = 'all';
    if(document.getElementById('setupSize')) document.getElementById('setupSize').value = localStorage.getItem('ld_sessSize') || '20';
    if(document.getElementById('setupSizeVal')) document.getElementById('setupSizeVal').innerText = document.getElementById('setupSize').value;
    if(document.getElementById('setupStart')) document.getElementById('setupStart').value = 0;
    if(document.getElementById('setupStartVal')) document.getElementById('setupStartVal').innerText = '0';

    if(document.getElementById('fc-setup')) document.getElementById('fc-setup').style.display = 'block';
    if(document.getElementById('fc-ui')) document.getElementById('fc-ui').style.display = 'none';
    if(document.getElementById('fc-done')) document.getElementById('fc-done').style.display = 'none';
    
    window.updateSetupLimit();
    nav('cards');
  };

  // Direct Session Wrappers (Skip Setup)
  window.session = (type) => { setupSession(type || 'all', 'flash'); nav('cards'); };
  window.sessionTyping = (type) => { setupSession(type || 'all', 'typing'); nav('cards'); };
  window.sessionListening = (type) => { setupSession(type || 'all', 'listening'); nav('cards'); };
  window.sessionArticle = (type) => { setupSession(type || 'all', 'article'); nav('cards'); };
  window.sessionConj = (type) => { setupSession(type || 'all', 'conj'); nav('cards'); };

  window.updateSetupLimit = function() {
    const lvl = document.getElementById('setupLevel').value || 'all';
    const type = document.getElementById('setupType').value || 'all';
    const mode = ST.pendingMode || 'flash';
    
    // Quick count calculation
    let list = [...ST.vocab];
    
    // 1. Level Filter
    if (lvl !== 'all') {
      if (['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].includes(lvl)) list = list.filter(v => v.level === lvl);
      else if (lvl === 'weak') {
          const weakIds = Object.entries(ST.progress).filter(([id, p]) => p.rate < 2).map(([id,p])=>id);
          list = list.filter(v => weakIds.includes(v.id.toString()));
      }
      else if (lvl === 'due') {
          const dueIds = Object.entries(ST.progress).filter(([id, p]) => isDue(p)).map(([id,p])=>id);
          list = list.filter(v => dueIds.includes(v.id.toString()));
      }
    }

    // 2. Type Filter
    if (type !== 'all') {
      list = list.filter(v => v.type === type);
    }

    if (mode === 'article') list = list.filter(v => v.article);
    if (mode === 'conj') {
        const verbInfos = ST.tenses.map(v => v.de);
        list = list.filter(v => v.type === 'verb' && verbInfos.includes(v.de));
    }

    const totalEl = document.getElementById('setupTotalMatch');
    if(totalEl) totalEl.innerText = list.length;
    
    const slider = document.getElementById('setupStart');
    const label = document.getElementById('setupStartVal');
    if (slider) {
      const maxVal = Math.max(0, list.length - 1);
      slider.max = maxVal;
      if (parseInt(slider.value) > maxVal) {
          slider.value = 0;
          if(label) label.innerText = '0';
      }
    }
  };

  window.startCustomSession = function() {
      const lvl = document.getElementById('setupLevel').value || 'all';
      const type = document.getElementById('setupType').value || 'all';
      const size = parseInt(document.getElementById('setupSize').value, 10) || 20;
      const offsetInput = parseInt(document.getElementById('setupStart').value, 10);
      const startOffset = isNaN(offsetInput) ? 0 : offsetInput;
      
      window.lastST = lvl;
      const mode = ST.pendingMode || 'flash';
      setupSession(lvl, mode, startOffset, type, size);
      
      if(document.getElementById('fc-setup')) document.getElementById('fc-setup').style.display = 'none';
      if(typeof renderCard === 'function') renderCard();
  };

  function setupSession(type, mode, startOffset = 0, typeFilter = 'all', customSize = null) {
    let list = [...ST.vocab];
    
    // 1. Level / Category Filter
    if (type !== 'all' && type !== 'vocab') {
      if (['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].includes(type)) list = list.filter(v => v.level === type);
      else if (type === 'weak') {
          const weakIds = Object.entries(ST.progress).filter(([id, p]) => p.rate < 2).map(([id,p])=>id);
          list = list.filter(v => weakIds.includes(v.id.toString()));
      }
      else if (type === 'due') {
          const dueIds = Object.entries(ST.progress).filter(([id, p]) => isDue(p)).map(([id,p])=>id);
          list = list.filter(v => dueIds.includes(v.id.toString()));
      }
    }

    // 2. Word Type Filter
    if (typeFilter !== 'all') {
      list = list.filter(v => v.type === typeFilter);
    }
    
    if (mode === 'article') list = list.filter(v => v.article);
    if (mode === 'conj') {
        const verbInfos = ST.tenses.map(v => v.de);
        list = list.filter(v => v.type === 'verb' && verbInfos.includes(v.de));
    }

    // Session sizing + shuffle logic
    const sessSize = customSize || Math.max(5, Math.min(200, parseInt(localStorage.getItem('ld_sessSize') || '20', 10) || 20));
    const doShuffle = localStorage.getItem('ld_shuffle') === 'true';

    // If an offset is provided, we treat it as an ordered resume (skip shuffle)
    if (startOffset > 0) {
        list = list.slice(startOffset);
    } else if (doShuffle) {
        list = list.sort(() => Math.random() - 0.5);
    }
    
    list = list.slice(0, sessSize);

    ST.session = {
      queue: list,
      idx: 0,
      type: type,
      mode: mode,
      correct: 0,
      wrong: 0,
      flipped: false
    };

    // UI resets
    if(document.getElementById('fc-setup')) document.getElementById('fc-setup').style.display = 'none';
    document.getElementById('fc-ui').style.display = 'block';
    document.getElementById('fc-done').style.display = 'none';
    ['flashcardWrap', 'typingWrap', 'listeningWrap', 'articleWrap', 'conjWrap'].forEach(id => {
        document.getElementById(id).style.display = (id.startsWith(mode)) ? 'block' : 'none';
    });
    document.getElementById('ansBtns').style.display = 'none';
    document.getElementById('exPanel').style.display = 'none';
  }

  function renderCard() {
    updateBadges();
    const item = ST.session.queue[ST.session.idx];
    if (!item) { finishSession(); return; }

    const pct = Math.round((ST.session.idx / ST.session.queue.length) * 100);
    document.getElementById('pf').style.width = `${pct}%`;
    document.getElementById('ctr').innerText = `${ST.session.idx + 1}/${ST.session.queue.length}`;

    const navUI = document.getElementById('quickNav');
    if (navUI && ST.session) {
        navUI.style.display = 'flex';
        const sl = document.getElementById('quickNavSlider');
        if (sl) { 
            sl.max = ST.session.queue.length; 
            sl.value = ST.session.idx + 1; 
        }
    }

    if (ST.session.mode === 'flash') {
      ST.session.flipped = false;
      document.getElementById('inner').classList.remove('flipped');
      document.getElementById('ansBtns').style.display = 'none';
      document.getElementById('fn').style.opacity = '1';
      
      const frontText = ST.reverseMode ? item.en : item.de;
      const backText = ST.reverseMode ? item.de : item.en;

      document.getElementById('fword').innerText = frontText;
      document.getElementById('flvl').innerText = item.level || '';
      document.getElementById('ftag').innerText = item.type || '';
      document.getElementById('fart').innerText = (!ST.reverseMode && item.article) ? item.article : '';
      document.getElementById('fart').style.color = getArtColor(item.article);
      document.getElementById('fsub').innerText = (!ST.reverseMode && item.type === 'noun' && item.plural) ? `die ${item.plural}` : '';
      
      document.getElementById('btrans').innerText = backText || '';
      if (ST.reverseMode && item.article) {
          // If in reverse mode, show the article/word on the back
          document.getElementById('btrans').innerHTML = `<div style="color:var(--tx3); font-size:14px; margin-bottom:4px;">${item.en}</div><div style="font-size:24px;">${item.article ? `<span style="color:${getArtColor(item.article)}">${item.article}</span> ` : ''}${item.de}</div>`;
      }

      const blvlEl = document.getElementById('b-lvl');
      if (blvlEl) blvlEl.innerText = item.level || '';
      document.getElementById('btag').innerText = item.type || '';
      document.getElementById('bex').innerText = item.examples && item.examples[0] ? item.examples[0].de : '';
      document.getElementById('bexen').innerText = item.examples && item.examples[0] ? item.examples[0].en : '';
      document.getElementById('bpl').innerText = item.tip || '';

      // PHASE 2: IRREGULAR BADGE
      const irrContainer = document.getElementById('flvl').parentElement;
      const oldBadge = irrContainer.querySelector('.badge-irr');
      if(oldBadge) oldBadge.remove();

      if(item.type === 'verb') {
          const verbData = ST.tenses.find(v => v.de === item.de);
          if(verbData && verbData.irregular) {
              const badge = document.createElement('div');
              badge.className = 'badge-irr';
              badge.innerHTML = '<span class="material-symbols-sharp" style="font-size:12px">warning</span> Irregular';
              badge.title = 'Click to view conjugation';
              badge.onclick = (e) => {
                  e.stopPropagation();
                  nav('tenses');
                  if(typeof renderTenseDetail === 'function') renderTenseDetail(verbData.id);
              };
              irrContainer.appendChild(badge);
          }
      }
    }
    else if (ST.session.mode === 'typing') {
      const qText = ST.reverseMode ? item.en : item.de;
      document.getElementById('typQ').innerText = qText;
      document.getElementById('typHint').innerText = ST.reverseMode ? `Type the German word (${item.type})` : `${item.level} · ${item.type}`;
      document.getElementById('typInput').value = '';
      document.getElementById('typFeedback').style.display = 'none';
      document.getElementById('typCheck').style.display = 'block';
      document.getElementById('typNext').style.display = 'none';
      setTimeout(() => document.getElementById('typInput').focus(), 50);
    }
    else if (ST.session.mode === 'listening') {
      document.getElementById('listenQ').innerHTML = '<span class="material-symbols-sharp" style="font-size:48px;cursor:pointer" onclick="listenReplay()">headphones</span>';
      document.getElementById('listenInput').value = '';
      document.getElementById('listenFb').style.display = 'none';
      document.getElementById('listenCheck').style.display = 'block';
      document.getElementById('listenNext').style.display = 'none';
      speak(item.de);
      setTimeout(() => document.getElementById('listenInput').focus(), 50);
    }
    else if (ST.session.mode === 'article') {
        document.getElementById('artWord').innerText = item.de;
        document.getElementById('artHint').innerText = item.en;
        document.getElementById('artFb').style.display = 'none';
        document.getElementById('artNext').style.display = 'none';
    }
    else if (ST.session.mode === 'conj') {
        const verbData = ST.tenses.find(v => v.de === item.de) || ST.tenses[0];
        if (!verbData) { finishSession(); return; }
        
        const validTenses = (window.TENSE_META || []).filter(meta => Array.isArray(verbData[meta.key]));
        if (validTenses.length === 0) { finishSession(); return; }
        
        const randomMeta = validTenses[Math.floor(Math.random() * validTenses.length)];
        const forms = verbData[randomMeta.key];
        const randomIdx = Math.floor(Math.random() * forms.length);
        
        ST.session.currentConj = forms[randomIdx];
        document.getElementById('conjVerb').innerText = `${verbData.de} (${randomMeta.label})`;
        document.getElementById('conjPronoun').innerText = window.PRONOUNS[randomIdx] || 'ich';
        document.getElementById('conjInput').value = '';
        document.getElementById('conjFb').style.display = 'none';
        document.getElementById('conjCheck').style.display = 'block';
        document.getElementById('conjNext').style.display = 'none';
        setTimeout(() => document.getElementById('conjInput').focus(), 50);
    }

    // Auto-update examples panel if it's open
    const exPanel = document.getElementById('exPanel');
    if (exPanel && exPanel.style.display === 'block') {
        const exContent = document.getElementById('exContent');
        if (exContent) exContent.innerHTML = buildDetailsHTML(item);
    }
  }

  window.flip = function () {
    if (ST.session.mode !== 'flash') return;
    ST.session.flipped = true;
    document.getElementById('inner').classList.add('flipped');
    document.getElementById('ansBtns').style.display = 'flex';
    document.getElementById('fn').style.opacity = '0';
    speak(ST.session.queue[ST.session.idx].de);
  };

  window.ans = function (rating) {
    processAnswer(rating);
    ST.session.idx++;
    renderCard();
  };

  window.processAnswer = function(rating) {
    const item = ST.session.queue[ST.session.idx];
    if (rating === 'c') ST.session.correct++; else ST.session.wrong++;
    updateSM2(item.id, rating);
    updateBadges();
  };

  function updateSM2(id, rating) {
    const p = ST.progress[id] || { rate: 0, count: 0, last: 0, interval: 0 };
    if (rating === 'c') {
        p.rate = Math.min(5, p.rate + 1);
        p.interval = p.interval === 0 ? 1 : Math.ceil(p.interval * 2.5); 
    } else if (rating === 'w') {
        p.rate = 0;
        p.interval = 0;
    } else if (rating === 'h') {
        p.rate = Math.max(0, p.rate - 0.5);
        p.interval = Math.ceil(p.interval * 1.2) || 1;
    }
    p.count++;
    p.last = Date.now();
    ST.progress[id] = p;
    ST.stats.todayCount++;
    bumpHistory(1);
    saveAll();
  }

  function saveAll() {
    localStorage.setItem('ld_progress', JSON.stringify(ST.progress));
    localStorage.setItem('ld_stats', JSON.stringify(ST.stats));
    localStorage.setItem('ld_history', JSON.stringify(ST.history));
  }

  window.quickJump = function(delta) {
    if (!ST.session || !ST.session.queue) return;
    let newIdx = ST.session.idx + delta;
    if(newIdx < 0) newIdx = 0;
    if(newIdx >= ST.session.queue.length) newIdx = ST.session.queue.length - 1;
    ST.session.idx = newIdx;
    renderCard();
  };

  window.quickSliderJump = function(val) {
    if (!ST.session || !ST.session.queue) return;
    let newIdx = parseInt(val, 10) - 1;
    if(newIdx < 0) newIdx = 0;
    if(newIdx >= ST.session.queue.length) newIdx = ST.session.queue.length - 1;
    ST.session.idx = newIdx;
    renderCard();
  };

  // ── DATA MANAGEMENT ─────────────────────────────────────────────────────────

  window.exportProgress = function () {
    const payload = {
      progress: ST.progress,
      stats: ST.stats,
      history: ST.history
    };
    const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `deutschedeck_backup_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  window.showImportModal = () => openModal('importModal');

  window.importProgress = (event) => {
    const file = event?.target?.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        // Accept either full backup {progress,stats,history} or legacy {id->progress}
        if (imported && typeof imported === 'object' && (imported.progress || imported.stats || imported.history)) {
          if (imported.progress) ST.progress = imported.progress;
          if (imported.stats) ST.stats = imported.stats;
          if (imported.history) ST.history = imported.history;
        } else {
          ST.progress = imported;
        }
        saveAll();
        closeModal();
        nav('progress');
        alert('Progress imported successfully!');
      } catch {
        alert('Invalid JSON file format.');
      }
    };
    reader.readAsText(file);
  };

  window.resetProgress = () => {
    if (confirm("Are you sure you want to reset all progress? This cannot be undone.")) {
      ST.progress = {};
      ST.stats = {sessions:0, streak:0, lastDate:null, dailyGoal:10, todayCount:0};
      ST.history = [];
      saveAll();
      nav('home');
      alert('Progress has been reset.');
    }
  };

  function bumpHistory(n) {
    const today = new Date().toISOString().split('T')[0];
    const last = ST.history[ST.history.length - 1];
    if (last && last.date === today) last.count = (last.count || 0) + n;
    else ST.history.push({ date: today, count: n });
    if (ST.history.length > 365) ST.history = ST.history.slice(-365);
  }

  function isDue(p) {
      if(!p.last || p.interval === 0) return true;
      const dueAt = p.last + (p.interval * 86400000);
      return Date.now() > dueAt;
  }

  function finishSession() {
    document.getElementById('fc-ui').style.display = 'none';
    document.getElementById('fc-done').style.display = 'block';
    
    document.getElementById('dc').innerText = ST.session.correct;
    document.getElementById('dw').innerText = ST.session.wrong;
    const total = ST.session.correct + ST.session.wrong;
    const acc = total ? Math.round((ST.session.correct / total) * 100) : 0;
    document.getElementById('dp').innerText = `${acc}%`;

    ST.stats.sessions++;
    saveAll();
  }

  // ── MODE-SPECIFIC HANDLERS ──────────────────────────────────────────────────
  window.checkTyping = function() {
    const item = ST.session.queue[ST.session.idx];
    const input = document.getElementById('typInput').value.trim().toLowerCase();
    const target = item.de.toLowerCase().replace(/^(der |die |das )/, '');
    const fullTarget = item.de.toLowerCase();
    const isCorrect = (input === target || input === fullTarget);
    processAnswer(isCorrect ? 'c' : 'w');
    showFeedback(isCorrect, item.de, 'typFeedback', 'typCheck', 'typNext');
  };
  window.nextTyping = function() { ST.session.idx++; renderCard(); };

  window.checkListening = function() {
    const item = ST.session.queue[ST.session.idx];
    const input = document.getElementById('listenInput').value.trim().toLowerCase();
    const isCorrect = (input === item.de.toLowerCase());
    processAnswer(isCorrect ? 'c' : 'w');
    showFeedback(isCorrect, item.de, 'listenFb', 'listenCheck', 'listenNext');
  };
  window.nextListening = function() { ST.session.idx++; renderCard(); };

  window.ansArticle = function(art) {
    const item = ST.session.queue[ST.session.idx];
    const isCorrect = (art === item.article);
    processAnswer(isCorrect ? 'c' : 'w');
    showFeedback(isCorrect, `${item.article} ${item.de}`, 'artFb', '', 'artNext');
    document.querySelectorAll('.art-btn').forEach(b => b.disabled = true);
  };
  window.nextArticle = function() { document.querySelectorAll('.art-btn').forEach(b => b.disabled = false); ST.session.idx++; renderCard(); };

  window.checkConj = function() {
      const input = document.getElementById('conjInput').value.trim().toLowerCase();
      const isCorrect = (input === ST.session.currentConj.toLowerCase());
      processAnswer(isCorrect ? 'c' : 'w');
      showFeedback(isCorrect, ST.session.currentConj, 'conjFb', 'conjCheck', 'conjNext');
  };
  window.nextConj = function() { ST.session.idx++; renderCard(); };

  function showFeedback(isCorrect, reveal, fbId, btnId, nextId) {
    const fb = document.getElementById(fbId);
    fb.style.display = 'block';
    fb.className = 'typ-fb ' + (isCorrect ? 'correct' : 'wrong');
    fb.innerHTML = isCorrect ? '<span class="material-symbols-sharp">check_circle</span> Richtig!' : `Falsch. <br><span style="font-size:20px;font-weight:700">${reveal}</span>`;
    if(btnId) document.getElementById(btnId).style.display = 'none';
    document.getElementById(nextId).style.display = 'block';
  }

  // ── BROWSE ─────────────────────────────────────────────────────────────────
  ST.browseState = { page: 1, lastKey: '' };

  let browseDebounce = null;
  function scheduleBrowseRender() {
    clearTimeout(browseDebounce);
    browseDebounce = setTimeout(() => window.renderBrowse(), 120);
  }

  window.browsePage = function (delta) {
    ST.browseState.page = Math.max(1, (ST.browseState.page || 1) + delta);
    window.renderBrowse();
  };

  window.renderBrowse = function () {
    const container = document.getElementById('browse');
    if (!container) return;
    const lvlEl = document.getElementById('blvl');
    const catEl = document.getElementById('bcat');
    const queryEl = document.getElementById('sq');
    const pagesEl = document.getElementById('browsePages');
    
    if(!lvlEl || !catEl || !queryEl) return;
    
    const lvl = lvlEl.value;
    const cat = catEl.value;
    const query = queryEl.value.toLowerCase();

    // Ensure search input doesn't re-filter huge DB on every keystroke
    if (!queryEl._ddBound) {
      queryEl.addEventListener('input', scheduleBrowseRender);
      queryEl._ddBound = true;
    }

    const key = `${lvl}::${cat}::${query}`;
    if (key !== ST.browseState.lastKey) {
      ST.browseState.lastKey = key;
      ST.browseState.page = 1;
    }
    
    let filtered = ST.vocab.filter(v => {
      if (lvl !== 'all' && v.level !== lvl) return false;
      if (cat !== 'all' && v.type !== cat) return false;
      if (query && !v.de.toLowerCase().includes(query) && !v.en.toLowerCase().includes(query)) return false;
      return true;
    });

    filtered.sort((a,b) => (a.de || "").localeCompare(b.de || ""));

    // Pagination for scalability
    const pageSize = 200;
    const total = filtered.length;
    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    const page = Math.min(totalPages, Math.max(1, ST.browseState.page || 1));
    ST.browseState.page = page;
    const start = (page - 1) * pageSize;
    const slice = filtered.slice(start, start + pageSize);

    container.innerHTML = slice.map(v => `
        <div class="word-row" onclick="toggleBrowseDetails(${v.id}, this)">
          <div class="w-info">
            <div class="de">${v.article ? `<span class="art-b" style="color:${getArtColor(v.article)}">${v.article}</span> ` : ''}${v.de}</div>
            <div class="en">${v.en}</div>
          </div>
          <div class="w-meta">
            <span class="lvl">${v.level}</span>
            <span class="stars">${'★'.repeat(ST.progress[v.id]?.rate || 0)}${'☆'.repeat(5 - (ST.progress[v.id]?.rate || 0))}</span>
          </div>
        </div>
    `).join('') || '<div style="text-align:center;padding:40px;color:var(--tx3)">No words found matching the filters.</div>';

    if (pagesEl) {
      if (total <= pageSize) {
        pagesEl.innerHTML = '';
      } else {
        pagesEl.innerHTML = `
          <div class="pager">
            <button class="btn bo" onclick="browsePage(-1)" ${page <= 1 ? 'disabled' : ''}>← Prev</button>
            <div>${start + 1}-${Math.min(start + pageSize, total)} of ${total} · Page ${page}/${totalPages}</div>
            <button class="btn bo" onclick="browsePage(1)" ${page >= totalPages ? 'disabled' : ''}>Next →</button>
          </div>
        `;
      }
    }
  };

  // ── TENSES ────────────────────────────────────────────────────────────────
  window.renderTenses = function() {
    const grid = document.getElementById('vgrid');
    if(!grid) return;
    ST.tenses.sort((a,b) => (a.de || a.id || "").localeCompare(b.de || b.id || ""));
    grid.innerHTML = ST.tenses.map(v => `<div class="v-chip" onclick="showVerb('${v.id}')">${v.de || v.id}</div>`).join('');
    if(ST.tenses.length) showVerb(ST.tenses[0].id);
  };

  window.showVerb = function(id) {
    const v = ST.tenses.find(x => x.id === id);
    if (!v) return;
    document.querySelectorAll('.v-chip').forEach(c => {
      c.classList.remove('active');
      if (c.innerText === v.de) c.classList.add('active');
    });
    const container = document.getElementById('tdisp');
    if (!container) return;

    let tensesHtml = '';
    if (window.TENSE_META && Array.isArray(window.TENSE_META)) {
      window.TENSE_META.forEach(meta => {
        const forms = v[meta.key];
        if (forms && Array.isArray(forms)) {
          tensesHtml += `
            <div class="tense-col">
              <div class="t-name">${meta.label}</div>
              <div class="t-list">
                ${forms.map((f, idx) => `<div><span class="pron">${window.PRONOUNS[idx] || ''}</span> ${f}</div>`).join('')}
              </div>
            </div>`;
        }
      });
    }

    container.innerHTML = `
      <div class="v-card">
        <div class="v-header">
          <div class="v-title">${v.de} <span class="v-meaning">(${v.en})</span></div>
          <div class="v-type">${(v.group || "VERB").toUpperCase()}</div>
        </div>
        <div class="v-tenses-grid">
            ${tensesHtml || '<div style="color:var(--tx3);padding:10px">No tense tables found for this verb.</div>'}
        </div>
      </div>`;
    const g = document.getElementById('gnotes');
    if (g) g.innerHTML = v.note ? v.note.replace(/\n/g, '<br>') : '<div style="color:var(--tx3);padding:10px">No notes available.</div>';
  };

  // ── PROGRESS ──────────────────────────────────────────────────────────────
  window.renderProgress = function() {
    const mastered = Object.values(ST.progress).filter(p => p.rate >= 4).length;
    const seen = Object.keys(ST.progress).length;
    const total = ST.vocab.length;
    const pct = total ? Math.round((mastered / total) * 100) : 0;
    
    document.getElementById('progressRing').style.setProperty('--pct', pct);
    document.getElementById('progressPct').innerText = `${pct}%`;
    document.getElementById('pS').innerText = seen;
    document.getElementById('pM').innerText = mastered;
    document.getElementById('pW').innerText = seen - mastered;
    document.getElementById('pDue').innerText = Object.values(ST.progress).filter(p => isDue(p)).length;

    // Word List in progress
    const sorted = Object.entries(ST.progress).sort((a,b) => b[1].last - a[1].last).slice(0, 50);
    document.getElementById('wlistb').innerHTML = sorted.map(([id, p]) => {
        const v = ST.vocab.find(x => x.id.toString() === id);
        if(!v) return '';
        return `<div class="word-row">
            <span style="flex:1;font-weight:600">${v.de}</span>
            <span style="flex:1;color:var(--tx2)">${v.en}</span>
            <span style="width:80px;text-align:center">${'★'.repeat(Math.floor(p.rate))}</span>
            <span style="width:55px;text-align:center;color:var(--tx3)">${p.count}</span>
        </div>`;
    }).join('');
    
    renderHeatmap();
  };

  function renderHeatmap() {
      const hm = document.getElementById('hm');
      if(!hm) return;
      // 63-day visualization based on actual stored history
      const byDate = new Map((ST.history || []).map(x => [x.date, x.count || 0]));
      const days = [];
      const start = new Date();
      start.setDate(start.getDate() - 62);
      for (let i = 0; i < 63; i++) {
        const d = new Date(start);
        d.setDate(start.getDate() + i);
        const key = d.toISOString().split('T')[0];
        days.push(byDate.get(key) || 0);
      }
      const max = Math.max(1, ...days);
      const level = (c) => {
        const r = c / max;
        if (c === 0) return 0;
        if (r < 0.34) return 1;
        if (r < 0.67) return 2;
        return 3;
      };
      hm.innerHTML = days.map(c => `<div class="hc l${level(c)}" title="${c}"></div>`).join('');
  }

  // ── TTS (LINGVA + LOCAL FALLBACK + CACHE) ──────────────────────────────────
  window.ttsCache = null;
  const dbReq = indexedDB.open('audioCache', 1);
  dbReq.onupgradeneeded = e => e.target.result.createObjectStore('audio');
  dbReq.onsuccess = e => window.ttsCache = e.target.result;

  window.speak = async function (text) {
    if (!text) return;
    
    // Check if online voice (Lingva) is selected
    const sel = document.getElementById('voiceSelect');
    const isOnlineVoice = sel && sel.value === 'online';

    if (isOnlineVoice && navigator.onLine) {
        // Try Lingva cache first
        if (window.ttsCache) {
            const tx = window.ttsCache.transaction('audio', 'readonly');
            const store = tx.objectStore('audio');
            const req = store.get(text);
            req.onsuccess = () => {
                if (req.result) {
                    playBlob(req.result);
                } else {
                    fetchLingva(text);
                }
            };
        } else {
           fetchLingva(text);
        }
    } else {
        // Local synthesis
        if (!window.speechSynthesis) return;
        const msg = new SpeechSynthesisUtterance(text);
        msg.lang = 'de-DE';
        msg.rate = 0.85;
        if (sel && sel.value && sel.value !== 'online') {
            const vIdx = parseInt(sel.value, 10);
            if (window.voices && window.voices[vIdx]) {
                msg.voice = window.voices[vIdx];
            }
        }
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(msg);
    }
  };

  function fetchLingva(text) {
     fetch(`https://lingva.ml/api/v1/audio/de/${encodeURIComponent(text)}`)
       .then(r => r.json())
       .then(data => {
          if (data && data.audio) {
              const audioData = Uint8Array.from(atob(data.audio), c => c.charCodeAt(0));
              const blob = new Blob([audioData], { type: 'audio/mp3' });
              
              if (window.ttsCache) {
                  const tx = window.ttsCache.transaction('audio', 'readwrite');
                  tx.objectStore('audio').put(blob, text);
              }
              playBlob(blob);
          } else {
              fallbackTTS(text);
          }
       }).catch(() => fallbackTTS(text));
  }
  
  function playBlob(blob) {
      const url = URL.createObjectURL(blob);
      const au = new Audio(url);
      au.play();
  }
  
  function fallbackTTS(text) {
      if (!window.speechSynthesis) return;
      const msg = new SpeechSynthesisUtterance(text);
      msg.lang = 'de-DE';
      msg.rate = 0.85;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(msg);
  }

  window.voices = [];
  function loadVoices() {
      if(!window.speechSynthesis) return;
      window.voices = window.speechSynthesis.getVoices().filter(v => v.lang.startsWith('de'));
      const sel = document.getElementById('voiceSelect');
      if (sel) {
          sel.innerHTML = '<option value="">Default OS Voice (Auto)</option>' +
                          '<option value="online">Lingva API (Online High Quality)</option>' + 
                          window.voices.map((v, i) => `<option value="${i}">${v.name}</option>`).join('');
          
          let saved = localStorage.getItem('ld_voice');
          if (saved) sel.value = saved;
      }
  }
  if(window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
      setTimeout(loadVoices, 500);
  }
  
  window.setVoice = function() {
      const sel = document.getElementById('voiceSelect');
      if (sel) localStorage.setItem('ld_voice', sel.value);
  };
  
  window.testVoice = function() {
      speak("Guten Tag! Wie geht es dir?");
  };

  window.speakCurrent = function() { const item = ST.session.queue[ST.session.idx]; if(item) speak(item.de); };
  function buildDetailsHTML(item) {
    if(!item) return '';
    let html = '';
    if(item.meta) {
        html += `<div style="font-size:13px;color:var(--tx2);margin-bottom:16px;display:flex;flex-wrap:wrap;gap:16px;">`;
        if(item.meta.gender) html += `<span><span class="material-symbols-sharp" style="font-size:14px;vertical-align:middle;">male</span> ${item.meta.gender}</span>`;
        if(item.meta.romanization) html += `<span><span class="material-symbols-sharp" style="font-size:14px;vertical-align:middle;">record_voice_over</span> ${item.meta.romanization}</span>`;
        if(item.meta.base) html += `<span><span class="material-symbols-sharp" style="font-size:14px;vertical-align:middle;">account_tree</span> Base: ${item.meta.base}</span>`;
        if(item.meta.prefix) html += `<span><span class="material-symbols-sharp" style="font-size:14px;vertical-align:middle;">add_link</span> Prefix: ${item.meta.prefix}</span>`;
        if(item.meta.is_separable) html += `<span><span class="material-symbols-sharp" style="font-size:14px;vertical-align:middle;">call_split</span> Separable</span>`;
        if(item.meta.frequency) html += `<span><span class="material-symbols-sharp" style="font-size:14px;vertical-align:middle;">bar_chart</span> Freq Score: ${item.meta.frequency}</span>`;
        html += `</div>`;
    }
    if (item.examples && item.examples.length > 0) {
      item.examples.forEach(e => {
        // Make German words interactive
        const interactiveDe = e.de.replace(/[A-Za-zÄäÖöÜüß]+/g, (match) => {
            return `<span class="inter-word" onclick="handleWordClick(event, '${match}')">${match}</span>`;
        });

        html += `<div style="margin-bottom:12px; border-left: 3px solid var(--accent); padding-left:12px;">
            <div style="font-weight:600;margin-bottom:4px;color:var(--tx1); line-height:1.6;">${interactiveDe}</div>
            <div style="color:var(--tx2);font-size:13px;font-style:italic;">${e.en}</div>
          </div>`;
      });
    } else {
      if(!item.meta) html += `<div style="color:var(--tx3);font-size:13px;">No additional details or examples available.</div>`;
    }
    return html;
  }

  window.toggleBrowseDetails = function(id, el) {
    const v = ST.vocab.find(x => x.id === id);
    if(v && v.de) speak(v.de);

    let nextEl = el.nextElementSibling;
    if (nextEl && nextEl.classList.contains('w-details')) {
      nextEl.remove();
      return;
    }
    
    // Auto-close others
    document.querySelectorAll('.w-details').forEach(d => d.remove());
    
    let html = buildDetailsHTML(v);
    if (!html) return;
    const detailDiv = document.createElement('div');
    detailDiv.className = 'w-details';
    detailDiv.style.padding = '16px 20px 16px 48px';
    detailDiv.style.background = 'var(--bg)';
    detailDiv.style.borderBottom = '1px solid var(--border)';
    detailDiv.innerHTML = html;
    el.after(detailDiv);
  };

  window.showExamples = function() { 
      const p = document.getElementById('exPanel');
      if (p.style.display === 'block') { p.style.display = 'none'; return; }
      const item = ST.session.queue[ST.session.idx];
      document.getElementById('exContent').innerHTML = buildDetailsHTML(item);
      p.style.display = 'block'; 
  };

  // ── UI TOGGLES & SETTINGS ──────────────────────────────────────────────────
  window.toggleMobile = () => document.body.classList.toggle('menu-open');
  window.closeMobile = () => document.body.classList.remove('menu-open');
  window.toggleDark = () => {
      document.body.classList.toggle('dark');
      localStorage.setItem('ld_theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  };
  window.toggleShortcuts = () => openModal('shortcutsModal');
  
  window.toggleShuffle = () => {
    const tog = document.getElementById('shuffleToggle');
    if (tog) {
        tog.classList.toggle('on');
        localStorage.setItem('ld_shuffle', tog.classList.contains('on'));
    }
  };
  window.toggleAutoSpeak = () => {
    const tog = document.getElementById('autoSpeakToggle');
    if (tog) {
        tog.classList.toggle('on');
        localStorage.setItem('ld_autospeak', tog.classList.contains('on'));
    }
  };
  window.toggleReverse = () => {
    const tog = document.getElementById('reverseToggle');
    if (tog) {
        tog.classList.toggle('on');
        ST.reverseMode = tog.classList.contains('on');
        localStorage.setItem('dd_reverseMode', ST.reverseMode);
        toast(ST.reverseMode ? 'Reverse Mode: English → German' : 'Reverse Mode: German → English');
    }
  };
  window.setSessSize = () => {
    const slider = document.getElementById('sessSlider');
    const val = document.getElementById('sessVal');
    if (slider && val) {
       val.innerText = slider.value;
       localStorage.setItem('ld_sessSize', slider.value);
    }
  };
  window.setGoal = () => {    
    const slider = document.getElementById('goalSlider');
    const val = document.getElementById('goalVal');
    if (slider && val) {
       val.innerText = slider.value;
       ST.stats.dailyGoal = parseInt(slider.value, 10);
       saveAll();
       renderHome();
    }
  };

  window.listenReplay = function() {
      const item = ST.session.queue[ST.session.idx];
      if (item) speak(item.de);
  };
  
  window.showGrammarHelp = function() {
    const agp = document.getElementById('agp');
    if(agp) {
        agp.style.display = (agp.style.display === 'none' || agp.style.display === '') ? 'block' : 'none';
        const g = document.getElementById('gnotes');
        const agc = document.getElementById('agc');
        if(agc && g) {
            agc.innerHTML = g.innerHTML || '<div style="padding:20px;color:var(--tx3)">No grammar notes for this verb.</div>';
        }
    }
  };

  // ── HELPERS ───────────────────────────────────────────────────────────────
  function getArtColor(art) {
    if (art === 'der') return '#448aff';
    if (art === 'die') return '#ff4081';
    if (art === 'das') return '#4caf50';
    return 'inherit';
  }
  function getYesterday() {
      const d = new Date(); d.setDate(d.getDate() - 1);
      return d.toISOString().split('T')[0];
  }
  window.openModal = id => document.getElementById(id).classList.add('active');
  window.closeModal = () => document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));

  function initSettingsUI() {
    // Theme
    if(localStorage.getItem('ld_theme') === 'dark') document.body.classList.add('dark');

    // Toggles
    if(localStorage.getItem('ld_shuffle') === 'true') {
      const sh = document.getElementById('shuffleToggle');
      if(sh) sh.classList.add('on');
    }
    if(localStorage.getItem('ld_autospeak') === 'true') {
      const as = document.getElementById('autoSpeakToggle');
      if(as) as.classList.add('on');
    }
    if(localStorage.getItem('dd_reverseMode') === 'true') {
      const rev = document.getElementById('reverseToggle');
      if(rev) rev.classList.add('on');
      const revSetup = document.getElementById('revSetupToggle');
      if(revSetup) revSetup.classList.add('on');
    }

    // Session size slider
    const savedSzl = localStorage.getItem('ld_sessSize');
    if(document.getElementById('sessSlider')) {
      const v = savedSzl || '20';
      document.getElementById('sessSlider').value = v;
      document.getElementById('sessVal').innerText = v;
    }

    // Goal slider
    if(document.getElementById('goalSlider')) {
      document.getElementById('goalSlider').value = String(ST.stats.dailyGoal || 10);
      document.getElementById('goalVal').innerText = String(ST.stats.dailyGoal || 10);
    }
  }

  // ── QUICK SEARCH LOGIC ───────────────────────────────────────────────────
  window.openQuickSearch = function() {
      const os = document.getElementById('quickSearchOverlay');
      if(!os) return;
      os.classList.add('active');
      const input = document.getElementById('qsInput');
      input.value = '';
      input.focus();
      document.getElementById('qsResults').innerHTML = '';
  };

  window.closeQuickSearch = function() {
      const os = document.getElementById('quickSearchOverlay');
      if(os) os.classList.remove('active');
  };

  window.handleQuickSearchInput = function() {
      const q = document.getElementById('qsInput').value.toLowerCase().trim();
      const results = document.getElementById('qsResults');
      if (!q) { results.innerHTML = ''; return; }

      const matches = ST.vocab.filter(v => 
          (v.de && v.de.toLowerCase().includes(q)) || 
          (v.en && v.en.toLowerCase().includes(q))
      ).slice(0, 10);

      if (matches.length === 0) {
          results.innerHTML = '<div style="padding:20px; color:var(--tx3); text-align:center;">No matches found</div>';
          return;
      }

      results.innerHTML = matches.map(v => `
          <div class="qs-item" onclick="jumpToWord('${v.id}')">
              <div>
                  <div class="qs-de">${v.de}</div>
                  <div class="qs-en">${v.en}</div>
              </div>
              <div class="qs-tip">${v.level} · ${v.type}</div>
          </div>
      `).join('');
  };

  window.jumpToWord = function(id) {
      closeQuickSearch();
      const v = ST.vocab.find(x => x.id.toString() === id.toString());
      if(!v) return;
      
      nav('browse');
      const bSearch = document.getElementById('bsearch');
      if (bSearch) {
          bSearch.value = v.de;
          renderBrowse();
      }
  };

  window.toggleReverseInSetup = function() {
      const sTog = document.getElementById('revSetupToggle');
      const bTog = document.getElementById('reverseToggle');
      ST.reverseMode = !ST.reverseMode;
      localStorage.setItem('dd_reverseMode', ST.reverseMode);
      
      if(sTog) sTog.className = 'tog' + (ST.reverseMode ? ' on' : '');
      if(bTog) bTog.className = 'tog' + (ST.reverseMode ? ' on' : '');
      
      toast(ST.reverseMode ? 'Reverse Mode: ON' : 'Reverse Mode: OFF');
  };

  window.handleWordClick = function(e, word) {
      if(e) e.stopPropagation();
      speak(word);
      
      // Try to find exact or close match in vocab
      const match = ST.vocab.find(v => v.de.toLowerCase() === word.toLowerCase());
      if(match) {
          toast(`Jump to: ${match.de} (${match.en})`, 2500, () => jumpToWord(match.id));
      } else {
          toast(`Playing: ${word}`);
      }
  };

  // Improved toast to support callbacks (for action buttons)
  window.toast = function (msg, duration = 2000, actionCb = null) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.innerHTML = msg + (actionCb ? ' <span style="text-decoration:underline; cursor:pointer; margin-left:8px; font-weight:700">VIEW</span>' : '');
    t.classList.add('active');
    
    // Clear previous timeouts
    if(window._toastTimer) clearTimeout(window._toastTimer);
    
    if(actionCb) {
        t.onclick = () => {
            actionCb();
            t.classList.remove('active');
        };
    } else {
        t.onclick = null;
    }

    window._toastTimer = setTimeout(() => {
        t.classList.remove('active');
    }, duration);
  };

})();