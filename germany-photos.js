/* Multi-Image Playful Liquid Glass Engine for DeutscheDeck
   Curated cultural photography from Germany across ALL screens:
   Home, Flashcards, Sentence Board, Tenses, Browse, Quiz, and Progress! */

(() => {
  'use strict';

  // --- HTML Builders for Each Screen ---

  window.germanyPostcards = () => `
    <aside class="germany-collage playful-glass-collage" aria-label="Visual postcards from Germany">
      <!-- Polaroid 1: Neuschwanstein Castle -->
      <div class="postcard postcard-castle" tabindex="0" role="button" aria-label="Schloss Neuschwanstein in Bavaria" title="Schloss Neuschwanstein, Bayern">
        <div class="postcard-tape" aria-hidden="true"></div>
        <div class="postcard-glass-sheen" aria-hidden="true"></div>
        <img src="Photos/optimized/krakaton-kivWihz4OqY-unsplash.webp" width="190" height="230" loading="lazy" decoding="async" alt="Schloss Neuschwanstein surrounded by alpine forest">
        <div class="postcard-caption">
          <span class="postcard-num">01</span>
          <span class="postcard-title">Schloss Neuschwanstein</span>
          <span class="postcard-sub">Bayern ↗</span>
        </div>
      </div>

      <!-- Polaroid 2: Berlin Cathedral -->
      <div class="postcard postcard-berlin" tabindex="0" role="button" aria-label="Berliner Dom in Berlin" title="Berliner Dom, Hauptstadt">
        <div class="postcard-glass-sheen" aria-hidden="true"></div>
        <img src="Photos/optimized/Berlin%20Cathedral%20(Berliner%20Dom).webp" width="170" height="200" loading="lazy" decoding="async" alt="Berliner Dom under open sky">
        <div class="postcard-caption">
          <span class="postcard-num">02</span>
          <span class="postcard-title">Berliner Dom</span>
          <span class="postcard-sub">Berlin Mitte ↗</span>
        </div>
      </div>

      <!-- Polaroid 3: Heidelberg Castle & Old Town -->
      <div class="postcard postcard-heidelberg" tabindex="0" role="button" aria-label="Heidelberg Altstadt and Castle" title="Heidelberg, Baden-Württemberg">
        <div class="postcard-pin" aria-hidden="true"></div>
        <div class="postcard-glass-sheen" aria-hidden="true"></div>
        <img src="Photos/optimized/Heidelberg,%20Germany.webp" width="160" height="190" loading="lazy" decoding="async" alt="Heidelberg Castle over Neckar River">
        <div class="postcard-caption">
          <span class="postcard-num">03</span>
          <span class="postcard-title">Heidelberg Altstadt</span>
          <span class="postcard-sub">Am Neckar ↗</span>
        </div>
      </div>

      <!-- Polaroid 4: Timbered Houses in Thuringia -->
      <div class="postcard postcard-timber" tabindex="0" role="button" aria-label="Historic half-timbered houses in Thuringia" title="Fachwerkidylle, Thüringen">
        <div class="postcard-glass-sheen" aria-hidden="true"></div>
        <img src="Photos/optimized/858127-Auleben-Thuringia-Germany-Houses-Fields.webp" width="150" height="175" loading="lazy" decoding="async" alt="Historic timbered houses and flowers in Auleben">
        <div class="postcard-caption">
          <span class="postcard-num">04</span>
          <span class="postcard-title">Fachwerkhaus</span>
          <span class="postcard-sub">Thüringen ↗</span>
        </div>
      </div>

      <!-- Tactile Playful Bundespost Stamp -->
      <div class="postcard-stamp post-seal" aria-label="Deutsche Bundespost stamp" title="Deutsche Bundespost">
        <div class="stamp-inner">
          <span class="stamp-country">DEUTSCHLAND</span>
          <span class="stamp-val">85<small>ct</small></span>
          <span class="stamp-tag">A1 · A2</span>
        </div>
      </div>

      <!-- Playful Sticker: Brezel & Audio -->
      <div class="postcard-sticker pretzel-sticker" onclick="if(window.speak) window.speak('Guten Appetit! Eine frische Brezel bitte.');" role="button" tabindex="0" title="Click to hear German!">
        <span class="sticker-emoji">🥨</span>
        <span class="sticker-text">Frisch &amp; lecker! <span class="sticker-sound">🔊</span></span>
      </div>

      <!-- Level Ribbon / Certificate Badge -->
      <div class="postcard-stamp level-badge-stamp" aria-hidden="true">
        <span>ZERTIFIKAT</span>
        <strong>A1 → B1</strong>
      </div>
    </aside>
  `;

  // Flashcards Setup Header Collage
  window.cardsSetupPostcards = () => `
    <div class="screen-photo-header fc-photo-cluster" aria-label="Study Germany Postcards">
      <div class="mini-polaroid polaroid-alps" title="Zugspitze & Eibsee, Bayern">
        <div class="mini-tape"></div>
        <img src="Photos/optimized/meduana-PdnseHuDFZU-unsplash.webp" alt="Eibsee, Bavaria" loading="lazy">
        <span>01 · Eibsee / Zugspitze</span>
      </div>
      <div class="mini-polaroid polaroid-pass" title="Bavarian Alpine Pass">
        <div class="mini-pin"></div>
        <img src="Photos/optimized/daniel-sessler-5qMYjPb_-Zg-unsplash.webp" alt="Alpine Road, Germany" loading="lazy">
        <span>02 · Alpenpass</span>
      </div>
      <div class="playful-stamp stamp-travel">
        <small>BUNDESBAHN</small>
        <strong>FAHRKARTE</strong>
        <span>A1 / A2 DECK</span>
      </div>
    </div>
  `;

  // Sentence Board Header Collage
  window.boardPostcards = () => `
    <div class="screen-photo-header board-photo-cluster" aria-label="Sentence Board Postcards">
      <div class="mini-polaroid polaroid-heidelberg" title="Heidelberg Altstadt">
        <div class="mini-tape"></div>
        <img src="Photos/optimized/Heidelberg,%20Germany.webp" alt="Heidelberg" loading="lazy">
        <span>Heidelberg · Neckar</span>
      </div>
      <div class="mini-polaroid polaroid-dom" title="Kölner Dom">
        <img src="Photos/optimized/dana-ward-UMNUlMEhqXQ-unsplash.webp" alt="Cologne Cathedral" loading="lazy">
        <span>Köln · Gotik</span>
      </div>
      <div class="playful-stamp stamp-board">
        <small>SATZBAU</small>
        <strong>DEUTSCH</strong>
        <span>WERKSTATT ↗</span>
      </div>
    </div>
  `;

  // Tenses & Grammar Header Collage
  window.tensesPostcards = () => `
    <div class="screen-photo-header tenses-photo-cluster" aria-label="Grammar Postcards">
      <div class="mini-polaroid polaroid-schiller" title="Schiller-Monument Weimar">
        <div class="mini-pin"></div>
        <img src="Photos/optimized/Schiller_monument_Weimar_Thuringia_Bing_4K_2560x1600.webp" alt="Weimar" loading="lazy">
        <span>Weimar · Schiller</span>
      </div>
      <div class="mini-polaroid polaroid-fields" title="Thuringia Countryside">
        <img src="Photos/optimized/landscape-grass-sky-field-clouds-yellow-847380-wallhere.com.webp" alt="German Fields" loading="lazy">
        <span>Thüringen · Natur</span>
      </div>
      <div class="playful-stamp stamp-grammar">
        <small>DEUTSCHE</small>
        <strong>GRAMMATIK</strong>
        <span>VERBEN &amp; ZEITEN</span>
      </div>
    </div>
  `;

  // Browse Words Header Collage
  window.browsePostcards = () => `
    <div class="screen-photo-header browse-photo-cluster" aria-label="Browse Words Postcards">
      <div class="mini-polaroid polaroid-berlin" title="Berlin Cathedral">
        <div class="mini-tape"></div>
        <img src="Photos/optimized/Berlin%20Cathedral%20(Berliner%20Dom).webp" alt="Berliner Dom" loading="lazy">
        <span>Berlin · Mitte</span>
      </div>
      <div class="mini-polaroid polaroid-timber" title="Fachwerk Timber Village">
        <img src="Photos/optimized/858127-Auleben-Thuringia-Germany-Houses-Fields.webp" alt="Fachwerkhaus" loading="lazy">
        <span>Fachwerk · Kultur</span>
      </div>
      <div class="playful-stamp stamp-dict">
        <small>BIBLIOTHEK</small>
        <strong>WÖRTERBUCH</strong>
        <span>20.000+ VOKABELN</span>
      </div>
    </div>
  `;

  // Quiz / Prüfungstrainer Header Collage
  window.quizPostcards = () => `
    <div class="screen-photo-header quiz-photo-cluster" aria-label="Exam Practice Postcards">
      <div class="mini-polaroid polaroid-neuschwanstein" title="Neuschwanstein">
        <div class="mini-pin"></div>
        <img src="Photos/optimized/krakaton-kivWihz4OqY-unsplash.webp" alt="Neuschwanstein Castle" loading="lazy">
        <span>Bayern · Schloss</span>
      </div>
      <div class="mini-polaroid polaroid-landmark" title="Historic German Landmark">
        <img src="Photos/optimized/martin-katler-38GqxGHP8lM-unsplash.webp" alt="German Landmark" loading="lazy">
        <span>Kulturerbe · DE</span>
      </div>
      <div class="playful-stamp stamp-exam">
        <small>GOETHE / TELC</small>
        <strong>PRÜFUNG</strong>
        <span>TRAINER · A1/A2</span>
      </div>
    </div>
  `;

  // Progress Header Collage
  window.progressPostcards = () => `
    <div class="screen-photo-header progress-photo-cluster" aria-label="Progress Achievements Postcards">
      <div class="mini-polaroid polaroid-hills" title="Rolling German Hills">
        <div class="mini-tape"></div>
        <img src="Photos/optimized/thumb-1920-1262444.webp" alt="German Hills" loading="lazy">
        <span>Wanderlust · Panorama</span>
      </div>
      <div class="mini-polaroid polaroid-cobble" title="Cobblestone Architecture">
        <img src="Photos/optimized/deniz-fuchidzhiev-Nq_VgwEnPwg-unsplash.webp" alt="Cobblestones" loading="lazy">
        <span>Tradition · Meisterschaft</span>
      </div>
      <div class="playful-stamp stamp-progress">
        <small>FORTSCHRITT</small>
        <strong>ERFOLG</strong>
        <span>DEUTSCHLERNEN 🏆</span>
      </div>
    </div>
  `;

  // --- Screen Decorator Engine ---

  function decorateScreen(id) {
    if (!id) return;

    // 1. Home Screen
    if (id === 'home') {
      const hero = document.querySelector('.welcome-hero');
      if (hero && !hero.querySelector('.germany-collage')) {
        hero.insertAdjacentHTML('beforeend', window.germanyPostcards());
      }
    }

    // 2. Flashcards Screen
    if (id === 'cards') {
      const setup = document.getElementById('fc-setup');
      if (setup && !setup.querySelector('.fc-photo-cluster')) {
        setup.insertAdjacentHTML('afterbegin', window.cardsSetupPostcards());
      }
    }

    // 3. Sentence Board Screen
    if (id === 'board') {
      const board = document.getElementById('sc-board');
      if (board && !board.querySelector('.board-photo-cluster')) {
        board.insertAdjacentHTML('afterbegin', window.boardPostcards());
      }
    }

    // 4. Tenses & Grammar Screen
    if (id === 'tenses') {
      const tenses = document.querySelector('#sc-tenses > div');
      if (tenses && !tenses.querySelector('.tenses-photo-cluster')) {
        tenses.insertAdjacentHTML('afterbegin', window.tensesPostcards());
      }
    }

    // 5. Browse Words Screen
    if (id === 'browse') {
      const browse = document.querySelector('#sc-browse > div');
      if (browse && !browse.querySelector('.browse-photo-cluster')) {
        browse.insertAdjacentHTML('afterbegin', window.browsePostcards());
      }
    }

    // 6. Quiz Screen
    if (id === 'quiz') {
      const quiz = document.querySelector('#sc-quiz > div, #sc-quiz');
      if (quiz && !quiz.querySelector('.quiz-photo-cluster')) {
        quiz.insertAdjacentHTML('afterbegin', window.quizPostcards());
      }
    }

    // 7. Progress Screen
    if (id === 'progress') {
      const progress = document.querySelector('#sc-progress > div');
      if (progress && !progress.querySelector('.progress-photo-cluster')) {
        progress.insertAdjacentHTML('afterbegin', window.progressPostcards());
      }
    }

    // Wire up image preview clicks
    document.querySelectorAll('.mini-polaroid, .postcard').forEach(card => {
      if (!card.dataset.hasClick) {
        card.dataset.hasClick = 'true';
        card.addEventListener('click', (e) => {
          const img = card.querySelector('img');
          if (img && img.src) window.open(img.src, '_blank');
        });
      }
    });
  }

  // Register in _navHooks so whenever user switches screens, the playful multi-photo collage is decorated
  window._navHooks = window._navHooks || [];
  window._navHooks.push(decorateScreen);

  // Initial decoration of active screen
  function initAll() {
    decorateScreen('home');
    const activeScreen = document.querySelector('.screen.active');
    if (activeScreen && activeScreen.id) {
      decorateScreen(activeScreen.id.replace('sc-', ''));
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
