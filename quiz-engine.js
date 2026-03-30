// quiz-engine.js — Goethe-Institut Exam Simulator Engine
// ──────────────────────────────────────────────────────
// Standalone quiz engine. Reads from QUIZ_BANK (quiz-data.js).
// Integrates with the LinguaDeutsch nav system via nav('quiz').

(function(){
  'use strict';

  // ── QUIZ STATE ──
  const QS={
    activeQuiz:null,   // current quiz object
    qIdx:0,            // current question index
    answers:[],        // user answers for current quiz
    score:0,           // correct count
    total:0,           // total questions
    filterLevel:'all',
    filterSection:'all',
    history:JSON.parse(localStorage.getItem('quizHistory')||'[]'),
    // For matching/ordering sub-state
    matchAnswers:{},
    orderWords:[],
    rfAnswers:{}
  };

  function getAllQuizzes() {
    if (typeof QUIZ_BANK === 'undefined') return [];
    return [
      ...(QUIZ_BANK.lesen || []),
      ...(QUIZ_BANK.schreiben || []),
      ...(QUIZ_BANK.strukturen || []),
      ...(QUIZ_BANK.wortschatz || []),
      ...(QUIZ_BANK.hoeren || [])
    ];
  }

  function getQuizById(id) {
    return getAllQuizzes().find(q => q.id === id);
  }

  function saveQuizHistory(){
    try{localStorage.setItem('quizHistory',JSON.stringify(QS.history.slice(-50)))}catch(e){}
  }

  // ── RENDER QUIZ LIST (home screen of quiz module) ──
  window.renderQuizHome=function(){
    const container=document.getElementById('quizListContent');
    if(!container)return;
    const all=getAllQuizzes();
    console.log("renderQuizHome Trace:", { allQuizzesLen: all.length, filterLvl: QS.filterLevel, filterSec: QS.filterSection });
    const lvl=QS.filterLevel, sec=QS.filterSection;
    const filtered=all.filter(q=>{
      if(lvl!=='all'&&q.level!==lvl)return false;
      if(sec!=='all'&&q.section!==sec)return false;
      return true;
    });

    // Group by section
    const groups={};
    filtered.forEach(q=>{
      if(!groups[q.section])groups[q.section]=[];
      groups[q.section].push(q);
    });

    const sectionIcons={Lesen:'📖',Schreiben:'✍️',Strukturen:'🔧',Wortschatz:'📚',Hören:'🎧'};
    const sectionColors={Lesen:'var(--accent)',Schreiben:'var(--green)',Strukturen:'var(--purple)',Wortschatz:'var(--amber)',Hören:'var(--red)'};

    let h='';
    if(!filtered.length){
      h='<div style="text-align:center;padding:40px;color:var(--tx2)">Keine Quizze gefunden für diese Filter.</div>';
    } else {
      for(const[sec,quizzes]of Object.entries(groups)){
        h+=`<div class="qz-section-group">
          <div class="qz-section-header">
            <span class="qz-sec-icon">${sectionIcons[sec]||'📝'}</span>
            <span class="qz-sec-title">${sec}</span>
            <span class="qz-sec-count">${quizzes.length} Quiz${quizzes.length>1?'ze':''}</span>
          </div>
          <div class="qz-cards-grid">`;
        quizzes.forEach(q=>{
          const hist=QS.history.find(r=>r.id===q.id);
          const qCount=countQuizQuestions(q);
          const badge=hist?`<span class="qz-done-badge">${hist.pct}%</span>`:'';
          h+=`<div class="qz-card" onclick="startQuiz('${q.id}')">
            <div class="qz-card-top">
              <span class="qz-lvl-tag" style="background:${sectionColors[sec]||'var(--accent)'}15;color:${sectionColors[sec]||'var(--accent)'}">${q.level}</span>
              ${badge}
            </div>
            <div class="qz-card-title">${q.title}</div>
            <div class="qz-card-part">${q.part}</div>
            <div class="qz-card-meta">${qCount} Fragen</div>
          </div>`;
        });
        h+='</div></div>';
      }
    }

    // Past results summary
    if(QS.history.length){
      const avg=Math.round(QS.history.reduce((s,r)=>s+r.pct,0)/QS.history.length);
      h+=`<div class="qz-history-bar">
        <span>📊 Durchschnitt: <strong>${avg}%</strong></span>
        <span>${QS.history.length} Quiz${QS.history.length>1?'ze':''} absolviert</span>
        <button class="btn bo" onclick="clearQuizHistory()" style="padding:5px 12px;font-size:12px">Verlauf löschen</button>
      </div>`;
    }

    container.innerHTML=h;
  };

  function countQuizQuestions(q){
    let c=0;
    q.questions.forEach(qq=>{
      if(qq.type==='richtig_falsch') c+=qq.statements.length;
      else if(qq.type==='matching') c+=qq.situations.length;
      else c++;
    });
    return c;
  }

  window.setQuizLevel=function(v){
    QS.filterLevel=v;
    var select = document.getElementById('quizLevelSelect');
    if (select) select.value = v;
    renderQuizHome();
  };
  window.setQuizSection=function(v){
    QS.filterSection=v;
    document.querySelectorAll('.qz-sec-chip').forEach(b=>b.classList.toggle('active',b.dataset.qsec===v));
    renderQuizHome();
  };
  window.clearQuizHistory=function(){
    if(confirm('Alle Quiz-Ergebnisse löschen?')){QS.history=[];saveQuizHistory();renderQuizHome()}
  };

  // ── START A QUIZ ──
  window.startQuiz=function(quizId){
    const quiz=getQuizById(quizId);
    if(!quiz)return;
    QS.activeQuiz=quiz;
    QS.qIdx=0;
    QS.answers=[];
    QS.score=0;
    QS.total=countQuizQuestions(quiz);
    QS.matchAnswers={};
    QS.orderWords=[];
    QS.rfAnswers={};

    document.getElementById('quizListView').style.display='none';
    document.getElementById('quizPlayView').style.display='block';
    document.getElementById('quizResultView').style.display='none';
    renderQuizQuestion();
  };

  // ── RENDER CURRENT QUESTION ──
  function renderQuizQuestion(){
    const quiz=QS.activeQuiz;
    if(QS.qIdx>=quiz.questions.length){showQuizResults();return}
    const q=quiz.questions[QS.qIdx];
    const container=document.getElementById('quizPlayContent');
    const pct=Math.round((QS.qIdx/quiz.questions.length)*100);

    let h=`<div class="qz-play-header">
      <div class="qz-play-meta">
        <span class="qz-lvl-tag" style="background:var(--al);color:var(--accent)">${quiz.level}</span>
        <span style="font-size:13px;color:var(--tx2)">${quiz.section} · ${quiz.part}</span>
      </div>
      <button class="btn bo" onclick="exitQuiz()" style="padding:5px 12px;font-size:12px">✕ Beenden</button>
    </div>
    <div class="prog-bar" style="margin-bottom:8px"><div class="prog-fill" style="width:${pct}%"></div></div>
    <div style="font-size:12px;color:var(--tx3);margin-bottom:16px;text-align:right">Frage ${QS.qIdx+1} / ${quiz.questions.length}</div>`;

    if(q.type==='mcq') h+=renderMCQ(q);
    else if(q.type==='richtig_falsch') h+=renderRF(q);
    else if(q.type==='cloze') h+=renderCloze(q);
    else if(q.type==='matching') h+=renderMatching(q);
    else if(q.type==='ordering') h+=renderOrdering(q);
    else if(q.type==='situational') h+=renderSituational(q);

    container.innerHTML=h;

    // Focus input if cloze
    const ci=document.getElementById('qzClozeInput');
    if(ci)setTimeout(()=>ci.focus(),100);
  }

  function renderTextOrAudio(text) {
    if(!text) return '';
    if(QS.activeQuiz.section === 'Hören') {
      window.currentHorenText = text.replace(/^🎧\s*/, ''); // strip emoji for TTS
      return `<div class="qz-text-block" style="text-align:center;background:var(--surf2)">
        <button class="btn bp" onclick="speak(window.currentHorenText)" style="font-size:14px;padding:12px 20px"><span class="material-symbols-sharp" style="font-size:inherit;vertical-align:middle;">volume_up</span> Audio anhören</button>
        <div id="qzTranscript" style="display:none;margin-top:16px;padding-top:16px;border-top:1px dashed var(--border);text-align:left;font-size:14px;color:var(--tx2)">
          <strong>Transkript:</strong><br>${formatText(text)}
        </div>
      </div>`;
    }
    return `<div class="qz-text-block">${formatText(text)}</div>`;
  }

  // ── MCQ RENDERER ──
  function renderMCQ(q){
    let h='';
    if(q.text) h+=renderTextOrAudio(q.text);
    h+=`<div class="qz-question">${q.question}</div><div class="qz-options">`;
    q.options.forEach((opt,i)=>{
      h+=`<button class="qz-opt" data-idx="${i}" onclick="answerMCQ(${i},${q.answer})">${String.fromCharCode(65+i)}) ${opt}</button>`;
    });
    h+='</div>';
    return h;
  }

  window.answerMCQ=function(chosen,correct){
    const btns=document.querySelectorAll('.qz-opt');
    btns.forEach(b=>{
      b.disabled=true;
      const idx=parseInt(b.dataset.idx);
      if(idx===correct)b.classList.add('qz-correct');
      if(idx===chosen&&chosen!==correct)b.classList.add('qz-wrong');
    });
    if(chosen===correct)QS.score++;
    QS.answers.push({type:'mcq',chosen,correct,ok:chosen===correct});
    
    // Reveal transcript if Hören
    const tr = document.getElementById('qzTranscript');
    if(tr) tr.style.display = 'block';
    
    showNextButton();
  };

  // ── Situational (same as MCQ but with situation display) ──
  function renderSituational(q){
    let h=`<div class="qz-situation-box">💬 ${q.situation}</div>`;
    h+='<div class="qz-question">Was sagen Sie?</div><div class="qz-options">';
    q.options.forEach((opt,i)=>{
      h+=`<button class="qz-opt" data-idx="${i}" onclick="answerMCQ(${i},${q.answer})">${String.fromCharCode(65+i)}) ${opt}</button>`;
    });
    h+='</div>';
    return h;
  }

  // ── RICHTIG/FALSCH RENDERER ──
  function renderRF(q){
    QS.rfAnswers={};
    let h='';
    if(q.text) h+=renderTextOrAudio(q.text);
    h+='<div class="qz-question">Richtig oder Falsch?</div>';
    q.statements.forEach((st,i)=>{
      h+=`<div class="qz-rf-row" id="qzRF${i}">
        <span class="qz-rf-text">${st.s}</span>
        <div class="qz-rf-btns">
          <button class="qz-rf-btn" onclick="answerRF(${i},true,${st.answer})">Richtig</button>
          <button class="qz-rf-btn" onclick="answerRF(${i},false,${st.answer})">Falsch</button>
        </div>
        <span class="qz-rf-fb" id="qzRFFb${i}"></span>
      </div>`;
    });
    h+=`<div style="margin-top:16px;text-align:center"><button class="btn bp" id="qzRFSubmit" onclick="submitRF()" style="display:none">Weiter →</button></div>`;
    return h;
  }

  window.answerRF=function(idx,chosen,correct){
    QS.rfAnswers[idx]={chosen,correct};
    const row=document.getElementById('qzRF'+idx);
    const btns=row.querySelectorAll('.qz-rf-btn');
    btns.forEach(b=>b.disabled=true);
    const fb=document.getElementById('qzRFFb'+idx);
    if(chosen===correct){fb.textContent='✅';fb.style.color='var(--green)';QS.score++}
    else{fb.textContent='❌';fb.style.color='var(--red)'}
    QS.answers.push({type:'rf',idx,chosen,correct,ok:chosen===correct});

    // Check if all RF done
    const q=QS.activeQuiz.questions[QS.qIdx];
    if(Object.keys(QS.rfAnswers).length>=q.statements.length){
      document.getElementById('qzRFSubmit').style.display='inline-flex';
      const tr = document.getElementById('qzTranscript');
      if(tr) tr.style.display = 'block';
    }
  };

  window.submitRF=function(){
    QS.qIdx++;renderQuizQuestion();
  };

  // ── CLOZE RENDERER ──
  function renderCloze(q){
    const display=q.sentence.replace('___','<span class="qz-blank">_____</span>');
    let h=`<div class="qz-cloze-sentence">${display}</div>`;
    if(q.hint)h+=`<div class="qz-cloze-hint">💡 Tipp: ${q.hint}</div>`;
    h+=`<div class="qz-cloze-input-wrap">
      <input type="text" class="typ-input" id="qzClozeInput" placeholder="Antwort eingeben..." autocomplete="off" onkeydown="if(event.key==='Enter')checkCloze()">
      <button class="btn bp" onclick="checkCloze()" id="qzClozeCheck">Prüfen</button>
    </div>
    <div class="qz-cloze-fb" id="qzClozeFb" style="display:none"></div>`;
    return h;
  }

  window.checkCloze=function(){
    const q=QS.activeQuiz.questions[QS.qIdx];
    const input=document.getElementById('qzClozeInput').value.trim();
    const correct=q.answer;
    const fb=document.getElementById('qzClozeFb');
    fb.style.display='block';
    document.getElementById('qzClozeInput').disabled=true;
    document.getElementById('qzClozeCheck').style.display='none';

    if(input.toLowerCase()===correct.toLowerCase()){
      fb.className='qz-cloze-fb qz-fb-correct';
      fb.innerHTML=`✅ Richtig! <strong>${correct}</strong>`;
      QS.score++;
      QS.answers.push({type:'cloze',input,correct,ok:true});
    }else{
      fb.className='qz-cloze-fb qz-fb-wrong';
      fb.innerHTML=`❌ Richtige Antwort: <strong>${correct}</strong> (Sie: ${input||'—'})`;
      QS.answers.push({type:'cloze',input,correct,ok:false});
    }
    showNextButton();
  };

  // ── MATCHING RENDERER ──
  function renderMatching(q){
    const mq=q.questions[0]||q; // in case it's nested
    let h='<div class="qz-question">Ordnen Sie die Situationen den Anzeigen zu.</div>';
    h+='<div class="qz-match-grid">';

    // Situations
    h+='<div class="qz-match-sits">';
    mq.situations.forEach((s,i)=>{
      h+=`<div class="qz-match-sit" id="qzSit${i}">
        <span class="qz-match-num">${i+1}.</span>
        <span>${s}</span>
        <select class="sty qz-match-sel" id="qzMatchSel${i}" style="margin-left:auto;min-width:60px">
          <option value="">—</option>
          ${mq.ads.map(a=>`<option value="${a.id}">${a.id}</option>`).join('')}
        </select>
      </div>`;
    });
    h+='</div>';

    // Ads
    h+='<div class="qz-match-ads">';
    mq.ads.forEach(a=>{
      h+=`<div class="qz-match-ad"><strong>${a.id})</strong> ${a.text}</div>`;
    });
    h+='</div></div>';
    h+=`<div style="text-align:center;margin-top:16px"><button class="btn bp" onclick="checkMatching()">Antworten prüfen</button></div>`;
    return h;
  }

  window.checkMatching=function(){
    const quiz=QS.activeQuiz;
    const q=quiz.questions[QS.qIdx];
    const mq=q;
    let correct=0;
    mq.situations.forEach((_,i)=>{
      const sel=document.getElementById('qzMatchSel'+i);
      const chosen=sel.value;
      const correctAd=mq.ads[mq.answers[i]].id;
      sel.disabled=true;
      const sit=document.getElementById('qzSit'+i);
      if(chosen===correctAd){
        correct++;sit.classList.add('qz-match-ok');
      }else{
        sit.classList.add('qz-match-err');
        sit.innerHTML+=`<span style="font-size:12px;color:var(--red);margin-left:8px">→ ${correctAd}</span>`;
      }
    });
    QS.score+=correct;
    QS.answers.push({type:'matching',correct,total:mq.situations.length,ok:correct===mq.situations.length});
    showNextButton();
  };

  // ── ORDERING RENDERER ──
  function renderOrdering(q){
    QS.orderWords=[...q.words].sort(()=>Math.random()-0.5);
    let h=`<div class="qz-question">Ordnen Sie die Wörter zu einem Satz.</div>
    <div class="qz-order-bank" id="qzOrderBank">
      ${QS.orderWords.map((w,i)=>`<button class="qz-order-word" data-w="${w}" onclick="pickOrderWord(this)">${w}</button>`).join('')}
    </div>
    <div class="qz-order-result" id="qzOrderResult" onclick="unpickLastWord()"></div>
    <div style="margin-top:12px;text-align:center">
      <button class="btn bp" onclick="checkOrdering()">Prüfen</button>
      <button class="btn bo" onclick="resetOrdering()" style="margin-left:8px">↩ Zurücksetzen</button>
    </div>
    <div class="qz-cloze-fb" id="qzOrderFb" style="display:none"></div>`;
    return h;
  }

  let orderedSentence=[];
  window.pickOrderWord=function(btn){
    btn.style.display='none';
    const w=btn.dataset.w;
    orderedSentence.push(w);
    const result=document.getElementById('qzOrderResult');
    result.innerHTML=orderedSentence.map(x=>`<span class="qz-order-placed">${x}</span>`).join(' ');
  };
  window.unpickLastWord=function(){
    if(!orderedSentence.length)return;
    const w=orderedSentence.pop();
    const bank=document.getElementById('qzOrderBank');
    const btns=bank.querySelectorAll('.qz-order-word');
    for(const b of btns){if(b.dataset.w===w&&b.style.display==='none'){b.style.display='';break}}
    const result=document.getElementById('qzOrderResult');
    result.innerHTML=orderedSentence.map(x=>`<span class="qz-order-placed">${x}</span>`).join(' ');
  };
  window.resetOrdering=function(){
    orderedSentence=[];
    const bank=document.getElementById('qzOrderBank');
    bank.querySelectorAll('.qz-order-word').forEach(b=>b.style.display='');
    document.getElementById('qzOrderResult').innerHTML='<span style="color:var(--tx3);font-size:14px">Klicken Sie auf die Wörter...</span>';
  };
  window.checkOrdering=function(){
    const q=QS.activeQuiz.questions[QS.qIdx];
    const userAnswer=orderedSentence.join(' ');
    const fb=document.getElementById('qzOrderFb');
    fb.style.display='block';
    if(userAnswer===q.answer){
      fb.className='qz-cloze-fb qz-fb-correct';
      fb.innerHTML=`✅ Richtig! <strong>${q.answer}</strong>`;
      QS.score++;
      QS.answers.push({type:'ordering',user:userAnswer,correct:q.answer,ok:true});
    }else{
      fb.className='qz-cloze-fb qz-fb-wrong';
      fb.innerHTML=`❌ Richtig: <strong>${q.answer}</strong>`;
      QS.answers.push({type:'ordering',user:userAnswer,correct:q.answer,ok:false});
    }
    document.getElementById('qzOrderBank').querySelectorAll('.qz-order-word').forEach(b=>b.disabled=true);
    orderedSentence=[];
    showNextButton();
  };

  // ── NEXT BUTTON ──
  function showNextButton(){
    const existing=document.getElementById('qzNextInsert');
    if(existing)return;
    const div=document.createElement('div');
    div.id='qzNextInsert';
    div.style.cssText='text-align:center;margin-top:16px';
    div.innerHTML='<button class="btn bp" onclick="nextQuizQuestion()">Weiter →</button>';
    document.getElementById('quizPlayContent').appendChild(div);
  }

  window.nextQuizQuestion=function(){
    QS.qIdx++;
    renderQuizQuestion();
  };

  // ── RESULTS ──
  function showQuizResults(){
    const quiz=QS.activeQuiz;
    const pct=QS.total>0?Math.round(QS.score/QS.total*100):0;
    const passed=pct>=60;

    // Save to history
    QS.history=QS.history.filter(r=>r.id!==quiz.id);
    QS.history.push({id:quiz.id,title:quiz.title,level:quiz.level,section:quiz.section,score:QS.score,total:QS.total,pct,date:new Date().toISOString()});
    saveQuizHistory();

    document.getElementById('quizPlayView').style.display='none';
    document.getElementById('quizResultView').style.display='block';

    const emoji=pct>=90?'🏆':pct>=60?'✅':'📚';
    const msg=pct>=90?'Ausgezeichnet!':pct>=80?'Sehr gut!':pct>=60?'Bestanden!':'Weiter üben!';
    const passNote=passed?'<span style="color:var(--green);font-weight:600">Bestanden (≥60%)</span>':'<span style="color:var(--red);font-weight:600">Nicht bestanden (&lt;60%)</span>';

    document.getElementById('quizResultContent').innerHTML=`
      <div class="qz-result-card">
        <div class="qz-result-emoji">${emoji}</div>
        <div class="qz-result-title">${msg}</div>
        <div class="qz-result-subtitle">${quiz.title} — ${quiz.level}</div>
        <div class="qz-result-score-ring" style="--qpct:${pct}">
          <div class="qz-result-score-inner">
            <div class="qz-result-pct">${pct}%</div>
            <div class="qz-result-label">${QS.score}/${QS.total}</div>
          </div>
        </div>
        <div style="margin:12px 0">${passNote}</div>
        <div class="qz-result-info">
          ℹ️ Goethe-Institut: Zum Bestehen sind mindestens 60% erforderlich.
        </div>
        <div class="btns" style="justify-content:center;margin-top:20px">
          <button class="btn bp" onclick="startQuiz('${quiz.id}')">🔄 Nochmal</button>
          <button class="btn bo" onclick="exitQuiz()">📋 Alle Quizze</button>
        </div>
      </div>`;

    if(pct>=80&&typeof confetti==='function')confetti();
  }

  window.exitQuiz=function(){
    document.getElementById('quizListView').style.display='block';
    document.getElementById('quizPlayView').style.display='none';
    document.getElementById('quizResultView').style.display='none';
    renderQuizHome();
  };

  // ── TEXT FORMATTER ──
  function formatText(t){
    return t.replace(/\n/g,'<br>');
  }

  // ── Register nav hook (safe — no wrapping of window.nav) ──
  if (window._navHooks) {
    window._navHooks.push(function(name) {
      if (name === 'quiz') {
        document.getElementById('quizListView').style.display = 'block';
        document.getElementById('quizPlayView').style.display = 'none';
        document.getElementById('quizResultView').style.display = 'none';
        renderQuizHome();
      }
    });
  }

})();
