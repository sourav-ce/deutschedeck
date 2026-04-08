// quiz-engine.js - Goethe-Institut exam simulator engine
// Standalone quiz engine. Reads from QUIZ_BANK (quiz-data.js).
// Integrates with the LinguaDeutsch nav system via nav('quiz').

(function(){
  'use strict';

  const QS={
    activeQuiz:null,
    qIdx:0,
    answers:[],
    score:0,
    total:0,
    filterLevel:'all',
    filterSection:'all',
    searchQuery:'',
    filterTopic:'all',
    history:JSON.parse(localStorage.getItem('quizHistory')||'[]'),
    lastResult:null,
    matchAnswers:{},
    orderWords:[],
    rfAnswers:{}
  };

  let orderedSentence=[];

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
    return getAllQuizzes().find(q => String(q.id) === String(id));
  }

  function saveQuizHistory(){
    try {
      localStorage.setItem('quizHistory',JSON.stringify(QS.history.slice(-50)));
    } catch (e) {}
  }

  function cleanText(value) {
    const text = value == null ? '' : String(value);
    return typeof window.repairMojibake === 'function' ? window.repairMojibake(text) : text;
  }

  function escapeHtml(value) {
    return cleanText(value).replace(/[&<>"']/g, char => ({
      '&':'&amp;',
      '<':'&lt;',
      '>':'&gt;',
      '"':'&quot;',
      "'":'&#39;'
    }[char]));
  }

  function formatText(value){
    return escapeHtml(value).replace(/\n/g,'<br>');
  }

  function normalizeText(value) {
    return cleanText(value).toLowerCase();
  }

  function getMatchingQuestion(question) {
    return (question.questions && question.questions[0]) || question;
  }

  function questionBlob(question) {
    const matching = getMatchingQuestion(question);
    return normalizeText([
      question.text,
      question.question,
      question.situation,
      question.hint,
      question.sentence,
      ...(question.options || []),
      ...(question.words || []),
      ...(question.statements || []).map(st => st.s),
      ...(matching.situations || []),
      ...(matching.ads || []).map(ad => ad.text)
    ].join(' '));
  }

  function getQuizTopics(quiz) {
    if (quiz._ddTopics) return quiz._ddTopics;
    const blob = normalizeText([
      quiz.id,
      quiz.title,
      quiz.part,
      quiz.instructions,
      quiz.section,
      ...(quiz.questions || []).map(questionBlob)
    ].join(' '));

    const topics = [];
    const topicMap = [
      ['Akkusativ', [/akkusativ/, /\bf(?:\u00fcr|uer)\b/, /\bdurch\b/, /\bohne\b/, /\bgegen\b/]],
      ['Dativ', [/dativ/, /\bmit\b/, /\bnach\b/, /\bvon\b/, /\bbei\b/, /\bseit\b/]],
      ['Cases', [/kasus/, /wechselpr(?:\u00e4|ae)position/, /pr(?:\u00e4|ae)position/, /artikel/]],
      ['Phrases', [/phrase/, /redemittel/, /bahnhof/, /rechnung/, /termin/, /bestellen/, /alltag/]],
      ['Perfekt', [/perfekt/, /\bge\w+/, /gestern habe/]],
      ['Modal Verbs', [/modal/, /\bmuss\b/, /\bkann\b/, /\bsoll\b/, /\bdarf\b/, /\bm(?:\u00f6|oe)chte\b/, /\bwill\b/]],
      ['Pronouns', [/pronomen/, /\bihm\b/, /\bihn\b/, /\bihr\b/, /\bihnen\b/, /\beuch\b/]],
      ['Writing', [/mail/, /e-mail/, /nachricht/, /gr(?:\u00fc|ue)(?:ss|\u00df)en/, /anhang/, /best(?:\u00e4|ae)tigen/]],
      ['Word Order', [/ordnen/, /satz/, /ordering/, /reihenfolge/]],
      ['Listening', [/h(?:\u00f6|oe)ren/, /audio/, /durchsage/]],
      ['Reading', [/lesen/, /anzeige/, /aushang/, /formular/]]
    ];

    topicMap.forEach(([label, patterns]) => {
      if (patterns.some(pattern => pattern.test(blob))) topics.push(label);
    });

    if (!topics.length) topics.push(cleanText(quiz.section));
    quiz._ddTopics = topics.slice(0, 4);
    return quiz._ddTopics;
  }

  function quizMatchesSearch(quiz, query) {
    if (!query) return true;
    const blob = normalizeText([
      quiz.title,
      quiz.part,
      quiz.instructions,
      quiz.section,
      ...getQuizTopics(quiz),
      ...(quiz.questions || []).map(questionBlob)
    ].join(' '));
    return blob.includes(normalizeText(query));
  }

  function availableTopics(quizzes) {
    const counts = new Map();
    quizzes.forEach(quiz => {
      getQuizTopics(quiz).forEach(topic => counts.set(topic, (counts.get(topic) || 0) + 1));
    });
    return [...counts.entries()].sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }

  function countQuizQuestions(quiz){
    let count=0;
    (quiz.questions || []).forEach(question=>{
      if(question.type==='richtig_falsch') count+=(question.statements || []).length;
      else if(question.type==='matching') count+=(getMatchingQuestion(question).situations || []).length;
      else count++;
    });
    return count;
  }

  function renderTopicChips(topics) {
    const host=document.getElementById('quizTopicChips');
    if(!host) return;
    host.innerHTML = [
      `<button class="qz-topic-chip${QS.filterTopic==='all' ? ' active' : ''}" onclick="setQuizTopic('all')">Alle Themen</button>`,
      ...topics.slice(0, 12).map(([topic, count]) => (
        `<button class="qz-topic-chip${QS.filterTopic===topic ? ' active' : ''}" onclick='setQuizTopic(${JSON.stringify(topic)})'>${escapeHtml(topic)} <span>${count}</span></button>`
      ))
    ].join('');
    if (typeof window.repairDocumentText === 'function') window.repairDocumentText(host);
  }

  function resetQuizState(quiz) {
    QS.activeQuiz=quiz;
    QS.qIdx=0;
    QS.answers=[];
    QS.score=0;
    QS.total=countQuizQuestions(quiz);
    QS.matchAnswers={};
    QS.orderWords=[];
    QS.rfAnswers={};
    orderedSentence=[];
  }

  function startQuizObject(quiz){
    if(!quiz)return;
    resetQuizState(quiz);
    document.getElementById('quizListView').style.display='none';
    document.getElementById('quizPlayView').style.display='block';
    document.getElementById('quizResultView').style.display='none';
    renderQuizQuestion();
  }

  window.renderQuizHome=function(){
    const container=document.getElementById('quizListContent');
    if(!container)return;

    const all=getAllQuizzes();
    const levelSelect=document.getElementById('quizLevelSelect');
    const searchInput=document.getElementById('quizSearchInput');
    const filterMeta=document.getElementById('quizFilterMeta');

    if(levelSelect) levelSelect.value=QS.filterLevel;
    if(searchInput && searchInput.value!==QS.searchQuery) searchInput.value=QS.searchQuery;
    document.querySelectorAll('.qz-sec-chip').forEach(button => {
      button.classList.toggle('active',button.dataset.qsec===QS.filterSection);
    });

    const baseFiltered=all.filter(quiz=>{
      if(QS.filterLevel!=='all' && quiz.level!==QS.filterLevel) return false;
      if(QS.filterSection!=='all' && cleanText(quiz.section)!==QS.filterSection) return false;
      if(!quizMatchesSearch(quiz,QS.searchQuery)) return false;
      return true;
    });

    const topics=availableTopics(baseFiltered);
    if(QS.filterTopic!=='all' && !topics.some(([topic])=>topic===QS.filterTopic)) QS.filterTopic='all';
    renderTopicChips(topics);

    const filtered=baseFiltered.filter(quiz => QS.filterTopic==='all' || getQuizTopics(quiz).includes(QS.filterTopic));
    const groups={};
    filtered.forEach(quiz=>{
      const section=cleanText(quiz.section);
      if(!groups[section]) groups[section]=[];
      groups[section].push(quiz);
    });

    const sectionOrder=['Lesen','Schreiben','Strukturen','Wortschatz','H\u00f6ren'];
    const sectionIcons={Lesen:'book_2',Schreiben:'edit_note',Strukturen:'account_tree',Wortschatz:'style',H\u00f6ren:'hearing'};
    const sectionColors={Lesen:'var(--accent)',Schreiben:'var(--green)',Strukturen:'var(--purple)',Wortschatz:'var(--amber)',H\u00f6ren:'var(--red)'};

    if(filterMeta){
      const pieces=[
        `${filtered.length} Quiz${filtered.length===1?'':'ze'}`,
        `${topics.length} Thema${topics.length===1?'':'n'}`
      ];
      if(QS.searchQuery) pieces.push(`Suche: ${cleanText(QS.searchQuery)}`);
      filterMeta.textContent=pieces.join(' - ');
    }

    let html='';
    if(!filtered.length){
      html=`<div class="qz-empty">
        <div class="qz-empty-title">Keine Treffer</div>
        <div class="qz-empty-copy">Probieren Sie ein anderes Thema, Niveau oder einen allgemeineren Suchbegriff.</div>
      </div>`;
    } else {
      const orderedSections=[
        ...sectionOrder.filter(section=>groups[section]),
        ...Object.keys(groups).filter(section=>!sectionOrder.includes(section)).sort((a,b)=>a.localeCompare(b))
      ];

      orderedSections.forEach(section=>{
        const quizzes=groups[section].slice().sort((a,b)=>cleanText(a.title).localeCompare(cleanText(b.title)));
        html+=`<div class="qz-section-group">
          <div class="qz-section-header">
            <span class="material-symbols-sharp qz-sec-icon">${sectionIcons[section]||'quiz'}</span>
            <span class="qz-sec-title">${escapeHtml(section)}</span>
            <span class="qz-sec-count">${quizzes.length} Quiz${quizzes.length===1?'':'ze'}</span>
          </div>
          <div class="qz-cards-grid">`;

        quizzes.forEach(quiz=>{
          const historyItem=QS.history.find(item=>String(item.id)===String(quiz.id));
          const topicMarkup=getQuizTopics(quiz).slice(0,3).map(topic=>`<span class="qz-card-topic">${escapeHtml(topic)}</span>`).join('');
          html+=`<div class="qz-card" onclick='startQuiz(${JSON.stringify(String(quiz.id))})'>
            <div class="qz-card-top">
              <span class="qz-lvl-tag" style="background:${sectionColors[section]||'var(--accent)'}15;color:${sectionColors[section]||'var(--accent)'}">${escapeHtml(quiz.level)}</span>
              ${historyItem ? `<span class="qz-done-badge">Zuletzt ${historyItem.pct}%</span>` : ''}
            </div>
            <div class="qz-card-title">${escapeHtml(quiz.title)}</div>
            <div class="qz-card-part">${escapeHtml(quiz.part || section)}</div>
            <div class="qz-card-tags">${topicMarkup}</div>
            <div class="qz-card-meta">${countQuizQuestions(quiz)} Fragen - ${escapeHtml(section)}</div>
          </div>`;
        });

        html+='</div></div>';
      });
    }

    if(QS.history.length){
      const average=Math.round(QS.history.reduce((sum,item)=>sum+item.pct,0)/QS.history.length);
      html+=`<div class="qz-history-bar">
        <span>Durchschnitt: <strong>${average}%</strong></span>
        <span>${QS.history.length} Quiz${QS.history.length===1?'':'ze'} absolviert</span>
        <button class="btn bo" onclick="clearQuizHistory()" style="padding:5px 12px;font-size:12px">Verlauf l\u00f6schen</button>
      </div>`;
    }

    container.innerHTML=html;
    if(typeof window.repairDocumentText==='function') window.repairDocumentText(container);
  };

  window.setQuizLevel=function(value){
    QS.filterLevel=value;
    const select=document.getElementById('quizLevelSelect');
    if(select) select.value=value;
    renderQuizHome();
  };

  window.setQuizSection=function(value){
    QS.filterSection=value;
    document.querySelectorAll('.qz-sec-chip').forEach(button => {
      button.classList.toggle('active',button.dataset.qsec===value);
    });
    renderQuizHome();
  };

  window.setQuizSearch=function(value){
    QS.searchQuery=value || '';
    renderQuizHome();
  };

  window.setQuizTopic=function(value){
    QS.filterTopic=value || 'all';
    renderQuizHome();
  };

  window.clearQuizHistory=function(){
    if(confirm('Alle Quiz-Ergebnisse l\u00f6schen?')){
      QS.history=[];
      QS.lastResult=null;
      saveQuizHistory();
      renderQuizHome();
    }
  };

  window.startQuiz=function(quizId){
    startQuizObject(getQuizById(quizId));
  };

  function renderQuizQuestion(){
    const quiz=QS.activeQuiz;
    if(!quiz) return;
    if(QS.qIdx>=quiz.questions.length){
      showQuizResults();
      return;
    }

    const question=quiz.questions[QS.qIdx];
    const container=document.getElementById('quizPlayContent');
    const pct=Math.round((QS.qIdx/quiz.questions.length)*100);

    let html=`<div class="qz-play-header">
      <div class="qz-play-meta">
        <span class="qz-lvl-tag" style="background:var(--al);color:var(--accent)">${escapeHtml(quiz.level)}</span>
        <span style="font-size:13px;color:var(--tx2)">${escapeHtml(cleanText(quiz.section))} - ${escapeHtml(cleanText(quiz.part))}</span>
      </div>
      <button class="btn bo" onclick="exitQuiz()" style="padding:5px 12px;font-size:12px">Beenden</button>
    </div>
    <div class="prog-bar" style="margin-bottom:8px"><div class="prog-fill" style="width:${pct}%"></div></div>
    <div style="font-size:12px;color:var(--tx3);margin-bottom:16px;text-align:right">Frage ${QS.qIdx+1} / ${quiz.questions.length}</div>`;

    if(question.type==='mcq') html+=renderMCQ(question);
    else if(question.type==='richtig_falsch') html+=renderRF(question);
    else if(question.type==='cloze') html+=renderCloze(question);
    else if(question.type==='matching') html+=renderMatching(question);
    else if(question.type==='ordering') html+=renderOrdering(question);
    else if(question.type==='situational') html+=renderSituational(question);
    else html+='<div class="qz-empty"><div class="qz-empty-title">Unbekannter Fragetyp</div></div>';

    container.innerHTML=html;
    if(typeof window.repairDocumentText==='function') window.repairDocumentText(container);

    const clozeInput=document.getElementById('qzClozeInput');
    if(clozeInput) setTimeout(()=>clozeInput.focus(),100);
  }

  function renderTextOrAudio(text) {
    if(!text) return '';
    const cleaned=cleanText(text);
    const section=normalizeText(QS.activeQuiz && QS.activeQuiz.section);
    const isListening=section.includes('h\u00f6ren') || section.includes('hoeren');
    if(isListening) {
      window.currentHorenText = cleaned.replace(/^[^\p{L}\p{N}]+/u, '').trim();
      return `<div class="qz-text-block" style="text-align:center;background:var(--surf2)">
        <button class="btn bp" onclick="speak(window.currentHorenText)" style="font-size:14px;padding:12px 20px"><span class="material-symbols-sharp" style="font-size:inherit;vertical-align:middle;">volume_up</span> Audio anh\u00f6ren</button>
        <div id="qzTranscript" style="display:none;margin-top:16px;padding-top:16px;border-top:1px dashed var(--border);text-align:left;font-size:14px;color:var(--tx2)">
          <strong>Transkript:</strong><br>${formatText(cleaned)}
        </div>
      </div>`;
    }
    return `<div class="qz-text-block">${formatText(cleaned)}</div>`;
  }

  function renderMCQ(question){
    let html='';
    if(question.text) html+=renderTextOrAudio(question.text);
    html+=`<div class="qz-question">${escapeHtml(question.question)}</div><div class="qz-options">`;
    question.options.forEach((option,index)=>{
      html+=`<button class="qz-opt" data-idx="${index}" onclick="answerMCQ(${index},${question.answer})">${String.fromCharCode(65+index)}) ${escapeHtml(option)}</button>`;
    });
    html+='</div>';
    return html;
  }

  window.answerMCQ=function(chosen,correct){
    const buttons=document.querySelectorAll('.qz-opt');
    buttons.forEach(button=>{
      button.disabled=true;
      const idx=parseInt(button.dataset.idx,10);
      if(idx===correct) button.classList.add('qz-correct');
      if(idx===chosen && chosen!==correct) button.classList.add('qz-wrong');
    });
    if(chosen===correct) QS.score++;
    QS.answers.push({type:'mcq',qIdx:QS.qIdx,chosen,correct,ok:chosen===correct});

    const transcript=document.getElementById('qzTranscript');
    if(transcript) transcript.style.display='block';

    showNextButton();
  };

  function renderSituational(question){
    let html=`<div class="qz-situation-box">${formatText(question.situation)}</div>`;
    html+='<div class="qz-question">Was sagen Sie?</div><div class="qz-options">';
    question.options.forEach((option,index)=>{
      html+=`<button class="qz-opt" data-idx="${index}" onclick="answerMCQ(${index},${question.answer})">${String.fromCharCode(65+index)}) ${escapeHtml(option)}</button>`;
    });
    html+='</div>';
    return html;
  }

  function renderRF(question){
    QS.rfAnswers={};
    let html='';
    if(question.text) html+=renderTextOrAudio(question.text);
    html+='<div class="qz-question">Richtig oder falsch?</div>';
    question.statements.forEach((statement,index)=>{
      html+=`<div class="qz-rf-row" id="qzRF${index}">
        <span class="qz-rf-text">${escapeHtml(statement.s)}</span>
        <div class="qz-rf-btns">
          <button class="qz-rf-btn" onclick="answerRF(${index},true,${statement.answer})">Richtig</button>
          <button class="qz-rf-btn" onclick="answerRF(${index},false,${statement.answer})">Falsch</button>
        </div>
        <span class="qz-rf-fb" id="qzRFFb${index}"></span>
      </div>`;
    });
    html+=`<div style="margin-top:16px;text-align:center"><button class="btn bp" id="qzRFSubmit" onclick="submitRF()" style="display:none">Weiter ?</button></div>`;
    return html;
  }

  window.answerRF=function(idx,chosen,correct){
    QS.rfAnswers[idx]={chosen,correct};
    const row=document.getElementById(`qzRF${idx}`);
    if(!row) return;
    row.querySelectorAll('.qz-rf-btn').forEach(button=>button.disabled=true);
    const feedback=document.getElementById(`qzRFFb${idx}`);
    if(chosen===correct){
      if(feedback){
        feedback.textContent='OK';
        feedback.style.color='var(--green)';
      }
      QS.score++;
    } else if(feedback){
      feedback.textContent='X';
      feedback.style.color='var(--red)';
    }

    QS.answers.push({type:'rf',qIdx:QS.qIdx,statementIdx:idx,chosen,correct,ok:chosen===correct});

    const question=QS.activeQuiz.questions[QS.qIdx];
    if(Object.keys(QS.rfAnswers).length>=(question.statements || []).length){
      const submit=document.getElementById('qzRFSubmit');
      if(submit) submit.style.display='inline-flex';
      const transcript=document.getElementById('qzTranscript');
      if(transcript) transcript.style.display='block';
    }
  };

  window.submitRF=function(){
    QS.qIdx++;
    renderQuizQuestion();
  };

  function renderCloze(question){
    const display=escapeHtml(question.sentence).replace('___','<span class="qz-blank">_____</span>');
    let html=`<div class="qz-cloze-sentence">${display}</div>`;
    if(question.hint) html+=`<div class="qz-cloze-hint">Tipp: ${escapeHtml(question.hint)}</div>`;
    html+=`<div class="qz-cloze-input-wrap">
      <input type="text" class="typ-input" id="qzClozeInput" placeholder="Antwort eingeben..." autocomplete="off" onkeydown="if(event.key==='Enter')checkCloze()">
      <button class="btn bp" onclick="checkCloze()" id="qzClozeCheck">Pr\u00fcfen</button>
    </div>
    <div class="qz-cloze-fb" id="qzClozeFb" style="display:none"></div>`;
    return html;
  }

  window.checkCloze=function(){
    const question=QS.activeQuiz.questions[QS.qIdx];
    const input=document.getElementById('qzClozeInput').value.trim();
    const correct=cleanText(question.answer);
    const feedback=document.getElementById('qzClozeFb');
    feedback.style.display='block';
    document.getElementById('qzClozeInput').disabled=true;
    document.getElementById('qzClozeCheck').style.display='none';

    if(normalizeText(input)===normalizeText(correct)){
      feedback.className='qz-cloze-fb qz-fb-correct';
      feedback.innerHTML=`Richtig. <strong>${escapeHtml(correct)}</strong>`;
      QS.score++;
      QS.answers.push({type:'cloze',qIdx:QS.qIdx,input,correct,ok:true});
    }else{
      feedback.className='qz-cloze-fb qz-fb-wrong';
      feedback.innerHTML=`Richtige Antwort: <strong>${escapeHtml(correct)}</strong> (Sie: ${escapeHtml(input||'-')})`;
      QS.answers.push({type:'cloze',qIdx:QS.qIdx,input,correct,ok:false});
    }

    showNextButton();
  };

  function renderMatching(question){
    const matching=getMatchingQuestion(question);
    let html='<div class="qz-question">Ordnen Sie die Situationen den Anzeigen zu.</div>';
    html+='<div class="qz-match-grid">';
    html+='<div class="qz-match-sits">';
    matching.situations.forEach((situation,index)=>{
      html+=`<div class="qz-match-sit" id="qzSit${index}">
        <span class="qz-match-num">${index+1}.</span>
        <span>${escapeHtml(situation)}</span>
        <select class="sty qz-match-sel" id="qzMatchSel${index}" style="margin-left:auto;min-width:60px">
          <option value="">-</option>
          ${(matching.ads || []).map(ad=>`<option value="${escapeHtml(ad.id)}">${escapeHtml(ad.id)}</option>`).join('')}
        </select>
      </div>`;
    });
    html+='</div>';
    html+='<div class="qz-match-ads">';
    (matching.ads || []).forEach(ad=>{
      html+=`<div class="qz-match-ad"><strong>${escapeHtml(ad.id)})</strong> ${formatText(ad.text)}</div>`;
    });
    html+='</div></div>';
    html+=`<div style="text-align:center;margin-top:16px"><button class="btn bp" onclick="checkMatching()">Antworten pr\u00fcfen</button></div>`;
    return html;
  }

  window.checkMatching=function(){
    const question=QS.activeQuiz.questions[QS.qIdx];
    const matching=getMatchingQuestion(question);
    let correct=0;
    const items=[];

    (matching.situations || []).forEach((situation,index)=>{
      const select=document.getElementById(`qzMatchSel${index}`);
      if(!select) return;
      const chosen=select.value;
      const correctAd=String((matching.ads || [])[matching.answers[index]].id);
      select.disabled=true;
      const row=document.getElementById(`qzSit${index}`);
      const item={situation,chosen,correct:correctAd,ok:chosen===correctAd};
      items.push(item);
      if(chosen===correctAd){
        correct++;
        if(row) row.classList.add('qz-match-ok');
      }else if(row){
        row.classList.add('qz-match-err');
        row.innerHTML+=`<span style="font-size:12px;color:var(--red);margin-left:8px">? ${escapeHtml(correctAd)}</span>`;
      }
    });

    QS.score+=correct;
    QS.answers.push({
      type:'matching',
      qIdx:QS.qIdx,
      correct,
      total:(matching.situations || []).length,
      items,
      ok:correct===(matching.situations || []).length
    });
    showNextButton();
  };

  function renderOrdering(question){
    orderedSentence=[];
    QS.orderWords=[...(question.words || [])].sort(()=>Math.random()-0.5);
    return `<div class="qz-question">Ordnen Sie die W\u00f6rter zu einem Satz.</div>
    <div class="qz-order-bank" id="qzOrderBank">
      ${QS.orderWords.map(word=>`<button class="qz-order-word" data-w="${encodeURIComponent(word)}" onclick="pickOrderWord(this)">${escapeHtml(word)}</button>`).join('')}
    </div>
    <div class="qz-order-result" id="qzOrderResult" onclick="unpickLastWord()"><span style="color:var(--tx3);font-size:14px">Klicken Sie auf die W\u00f6rter...</span></div>
    <div style="margin-top:12px;text-align:center">
      <button class="btn bp" onclick="checkOrdering()">Pr\u00fcfen</button>
      <button class="btn bo" onclick="resetOrdering()" style="margin-left:8px">Zur\u00fccksetzen</button>
    </div>
    <div class="qz-cloze-fb" id="qzOrderFb" style="display:none"></div>`;
  }

  function syncOrderResult() {
    const result=document.getElementById('qzOrderResult');
    if(!result) return;
    result.innerHTML=orderedSentence.length
      ? orderedSentence.map(word=>`<span class="qz-order-placed">${escapeHtml(word)}</span>`).join(' ')
      : '<span style="color:var(--tx3);font-size:14px">Klicken Sie auf die W\u00f6rter...</span>';
  }

  window.pickOrderWord=function(button){
    button.style.display='none';
    orderedSentence.push(decodeURIComponent(button.dataset.w));
    syncOrderResult();
  };

  window.unpickLastWord=function(){
    if(!orderedSentence.length)return;
    const word=orderedSentence.pop();
    const bank=document.getElementById('qzOrderBank');
    if(bank){
      const buttons=bank.querySelectorAll('.qz-order-word');
      for(const button of buttons){
        if(decodeURIComponent(button.dataset.w)===word && button.style.display==='none'){
          button.style.display='';
          break;
        }
      }
    }
    syncOrderResult();
  };

  window.resetOrdering=function(){
    orderedSentence=[];
    const bank=document.getElementById('qzOrderBank');
    if(bank) bank.querySelectorAll('.qz-order-word').forEach(button=>button.style.display='');
    syncOrderResult();
  };

  window.checkOrdering=function(){
    const question=QS.activeQuiz.questions[QS.qIdx];
    const userAnswer=orderedSentence.join(' ');
    const feedback=document.getElementById('qzOrderFb');
    feedback.style.display='block';
    if(normalizeText(userAnswer)===normalizeText(question.answer)){
      feedback.className='qz-cloze-fb qz-fb-correct';
      feedback.innerHTML=`Richtig. <strong>${escapeHtml(question.answer)}</strong>`;
      QS.score++;
      QS.answers.push({type:'ordering',qIdx:QS.qIdx,user:userAnswer,correct:question.answer,ok:true});
    }else{
      feedback.className='qz-cloze-fb qz-fb-wrong';
      feedback.innerHTML=`Richtig: <strong>${escapeHtml(question.answer)}</strong>`;
      QS.answers.push({type:'ordering',qIdx:QS.qIdx,user:userAnswer,correct:question.answer,ok:false});
    }
    const bank=document.getElementById('qzOrderBank');
    if(bank) bank.querySelectorAll('.qz-order-word').forEach(button=>button.disabled=true);
    orderedSentence=[];
    showNextButton();
  };

  function showNextButton(){
    if(document.getElementById('qzNextInsert')) return;
    const wrapper=document.createElement('div');
    wrapper.id='qzNextInsert';
    wrapper.className='qz-next-wrap';
    wrapper.innerHTML='<button class="btn bp" onclick="nextQuizQuestion()">Weiter ?</button>';
    document.getElementById('quizPlayContent').appendChild(wrapper);
  }

  window.nextQuizQuestion=function(){
    QS.qIdx++;
    renderQuizQuestion();
  };

  function collectReviewItems(quiz){
    return QS.answers
      .filter(answer=>!answer.ok)
      .map(answer=>{
        const question=quiz.questions[answer.qIdx];
        if(!question) return null;
        if(answer.type==='mcq'){
          return {
            qIdx:answer.qIdx,
            label:'Multiple Choice',
            prompt:cleanText(question.question || question.situation || question.text || 'Antwort w\u00e4hlen'),
            correct:cleanText((question.options || [])[answer.correct] || ''),
            user:cleanText((question.options || [])[answer.chosen] || 'Keine Antwort')
          };
        }
        if(answer.type==='rf'){
          const statement=(question.statements || [])[answer.statementIdx];
          return {
            qIdx:answer.qIdx,
            label:'Richtig/Falsch',
            prompt:cleanText(statement && statement.s || question.question || 'Aussage'),
            correct:answer.correct ? 'Richtig' : 'Falsch',
            user:answer.chosen ? 'Richtig' : 'Falsch'
          };
        }
        if(answer.type==='cloze'){
          return {
            qIdx:answer.qIdx,
            label:'L\u00fcckentext',
            prompt:cleanText(question.sentence || question.question || 'L\u00fccke'),
            correct:cleanText(answer.correct),
            user:cleanText(answer.input || 'Keine Antwort')
          };
        }
        if(answer.type==='matching'){
          const missed=(answer.items || [])
            .filter(item=>!item.ok)
            .map(item=>`${cleanText(item.situation)} ? ${cleanText(item.correct)}`)
            .join(' | ');
          return {
            qIdx:answer.qIdx,
            label:'Zuordnen',
            prompt:'Diese Zuordnung war noch unsicher.',
            correct:missed || `${answer.correct}/${answer.total} korrekt`,
            user:`${answer.correct}/${answer.total} korrekt`
          };
        }
        if(answer.type==='ordering'){
          return {
            qIdx:answer.qIdx,
            label:'Wortstellung',
            prompt:cleanText(question.question || 'Ordnen Sie die W\u00f6rter zu einem Satz.'),
            correct:cleanText(answer.correct),
            user:cleanText(answer.user || 'Keine Antwort')
          };
        }
        return null;
      })
      .filter(Boolean);
  }

  function buildMistakeQuiz(sourceQuiz, reviewItems){
    const wrongIndexes=[...new Set((reviewItems || []).map(item=>item.qIdx))];
    if(!wrongIndexes.length) return null;
    const copy=JSON.parse(JSON.stringify(sourceQuiz));
    copy.id=`${sourceQuiz.id}__review__`;
    copy.title=`Review: ${cleanText(sourceQuiz.title)}`;
    copy.part='Fehler wiederholen';
    copy.questions=wrongIndexes.map(index=>JSON.parse(JSON.stringify(sourceQuiz.questions[index])));
    return copy;
  }

  window.reviewMistakes=function(){
    if(!QS.lastResult || !QS.lastResult.reviewQuiz) return;
    startQuizObject(JSON.parse(JSON.stringify(QS.lastResult.reviewQuiz)));
  };

  window.practiceSimilarQuiz=function(){
    if(!QS.lastResult) return;
    const topicSet=new Set(QS.lastResult.topics || []);
    const candidates=getAllQuizzes()
      .filter(quiz=>{
        if(String(quiz.id)===String(QS.lastResult.quizId)) return false;
        const sameSection=cleanText(quiz.section)===QS.lastResult.section;
        const sameLevel=quiz.level===QS.lastResult.level;
        const sharedTopic=getQuizTopics(quiz).some(topic=>topicSet.has(topic));
        return sameSection || (sameLevel && sharedTopic);
      })
      .sort((a,b)=>{
        const seenA=QS.history.some(item=>String(item.id)===String(a.id));
        const seenB=QS.history.some(item=>String(item.id)===String(b.id));
        if(seenA!==seenB) return Number(seenA)-Number(seenB);
        return countQuizQuestions(a)-countQuizQuestions(b);
      });

    const nextQuiz=candidates[0] || getQuizById(QS.lastResult.quizId);
    if(nextQuiz) startQuizObject(JSON.parse(JSON.stringify(nextQuiz)));
  };

  function showQuizResults(){
    const quiz=QS.activeQuiz;
    const pct=QS.total>0 ? Math.round(QS.score/QS.total*100) : 0;
    const passed=pct>=60;
    const topics=getQuizTopics(quiz);
    const reviewItems=collectReviewItems(quiz);
    const reviewQuiz=buildMistakeQuiz(quiz,reviewItems);

    QS.history=QS.history.filter(item=>String(item.id)!==String(quiz.id));
    QS.history.push({
      id:quiz.id,
      title:cleanText(quiz.title),
      level:quiz.level,
      section:cleanText(quiz.section),
      score:QS.score,
      total:QS.total,
      pct,
      date:new Date().toISOString()
    });
    saveQuizHistory();

    QS.lastResult={
      quizId:String(quiz.id),
      title:cleanText(quiz.title),
      level:quiz.level,
      section:cleanText(quiz.section),
      topics,
      pct,
      reviewItems,
      reviewQuiz
    };

    document.getElementById('quizPlayView').style.display='none';
    document.getElementById('quizResultView').style.display='block';

    const badge=pct>=90 ? 'TOP' : pct>=60 ? 'PASS' : 'DRILL';
    const title=pct>=90 ? 'Ausgezeichnet!' : pct>=80 ? 'Sehr gut!' : pct>=60 ? 'Bestanden!' : 'Weiter \u00fcben!';
    const passNote=passed
      ? '<span style="color:var(--green);font-weight:600">Bestanden (mindestens 60%)</span>'
      : '<span style="color:var(--red);font-weight:600">Noch nicht bestanden (unter 60%)</span>';

    const reviewMarkup=reviewItems.length
      ? `<div class="qz-review-list">
          ${reviewItems.slice(0,5).map(item=>`<div class="qz-review-item">
            <div class="qz-review-head">
              <span class="qz-card-topic">${escapeHtml(item.label)}</span>
              <span class="qz-lvl-tag" style="background:var(--surf2);color:var(--tx2)">Fehler</span>
            </div>
            <div class="qz-review-prompt">${formatText(item.prompt)}</div>
            <div class="qz-review-answer"><strong>Richtig:</strong> ${formatText(item.correct)}</div>
            <div class="qz-review-answer is-wrong"><strong>Ihre Antwort:</strong> ${formatText(item.user)}</div>
          </div>`).join('')}
          ${reviewItems.length>5 ? `<div class="qz-review-more">+ ${reviewItems.length-5} weitere Fehler im Review-Quiz</div>` : ''}
        </div>`
      : '<div class="qz-review-empty">Keine Fehler in dieser Runde. N\u00e4chster Schritt: ein \u00e4hnliches Thema auf h\u00f6herem Tempo.</div>';

    const host=document.getElementById('quizResultContent');
    host.innerHTML=`
      <div class="qz-result-card">
        <div class="qz-result-emoji">${badge}</div>
        <div class="qz-result-title">${title}</div>
        <div class="qz-result-subtitle">${escapeHtml(cleanText(quiz.title))}  -  ${escapeHtml(quiz.level)}</div>
        <div class="qz-result-score-ring" style="--qpct:${pct}">
          <div class="qz-result-score-inner">
            <div class="qz-result-pct">${pct}%</div>
            <div class="qz-result-label">${QS.score}/${QS.total}</div>
          </div>
        </div>
        <div style="margin:12px 0">${passNote}</div>
        <div class="qz-result-grid">
          <div class="qz-result-stat">
            <span>Themen</span>
            <strong>${escapeHtml(topics.map(topic=>cleanText(topic)).join(', '))}</strong>
          </div>
          <div class="qz-result-stat">
            <span>Review</span>
            <strong>${reviewItems.length ? `${reviewItems.length} Fehler` : 'Fehlerfrei'}</strong>
          </div>
          <div class="qz-result-stat">
            <span>N\u00e4chster Schritt</span>
            <strong>${reviewQuiz ? 'Fehler wiederholen' : '\u00c4hnliches Thema \u00fcben'}</strong>
          </div>
        </div>
        <div class="qz-result-info">Goethe-Institut: Zum Bestehen sind mindestens 60% erforderlich.</div>
        <div class="qz-result-actions">
          <button class="btn bp" onclick='startQuiz(${JSON.stringify(String(quiz.id))})'>Nochmal</button>
          ${reviewQuiz ? '<button class="btn bo" onclick="reviewMistakes()">Fehler wiederholen</button>' : ''}
          <button class="btn bo" onclick="practiceSimilarQuiz()">\u00c4hnliches Thema</button>
          <button class="btn bo" onclick="exitQuiz()">Alle Quizze</button>
        </div>
        ${reviewMarkup}
      </div>`;

    if(typeof window.repairDocumentText==='function') window.repairDocumentText(host);
    if(pct>=80 && typeof confetti==='function') confetti();
  }

  window.exitQuiz=function(){
    document.getElementById('quizListView').style.display='block';
    document.getElementById('quizPlayView').style.display='none';
    document.getElementById('quizResultView').style.display='none';
    renderQuizHome();
  };

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

