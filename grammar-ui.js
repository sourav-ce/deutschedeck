(function () {
  'use strict';
  const C=window.GrammarCore, D=window.GRAMMAR_CONTENT;
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const normalize=s=>String(s).normalize('NFC').toLocaleLowerCase('de').replace(/[.!?,;:]/g,'').replace(/\s+/g,' ').trim();
  let saved={};try{saved=JSON.parse(localStorage.getItem('dd_grammar_progress')||'{}')||{};}catch{}
  const S={tab:'learn',lesson:0,verb:'sein',tense:'present',query:'',filter:'core',verbs:[],dialogue:0,completed:new Set(Array.isArray(saved.lessons)?saved.lessons:[]),drill:null,score:0,answered:0};
  const coreNames=new Set([...(D.coreVerbs||Object.keys(D.frames)),'heißen','können','müssen','wollen','dürfen','sollen','mögen','möchten']);
  function persist(){try{localStorage.setItem('dd_grammar_progress',JSON.stringify({lessons:[...S.completed]}));}catch{}}
  const listen=text=>`<button class="grammar-audio" type="button" data-say="${esc(text)}" aria-label="Listen: ${esc(text)}">Listen <span aria-hidden="true">↗</span></button>`;
  const sentence=(de,en)=>`<div class="grammar-example"><div><p lang="de">${esc(de)}</p><small>${esc(en)}</small></div>${listen(de)}</div>`;
  function sentenceFor(v,key){
    if(v.de==='möchten')return ['present','konjII'].includes(key)?['Ich möchte einen Kaffee bestellen.','I would like to order a coffee.']:null;
    if(C.modals.has(v.de)){
      const e={können:['Ich kann heute kommen.','I can come today.','Ich konnte heute kommen.','I was able to come today.','kommen'],müssen:['Ich muss heute arbeiten.','I have to work today.','Ich musste heute arbeiten.','I had to work today.','arbeiten'],wollen:['Ich will Deutsch lernen.','I want to learn German.','Ich wollte Deutsch lernen.','I wanted to learn German.','Deutsch lernen'],dürfen:['Ich darf hier parken.','I am allowed to park here.','Ich durfte hier parken.','I was allowed to park here.','hier parken'],sollen:['Ich soll heute arbeiten.','I am supposed to work today.','Ich sollte heute arbeiten.','I was supposed to work today.','heute arbeiten'],mögen:['Ich mag den Film.','I like the film.','Ich mochte den Film.','I liked the film.','den Film'] }[v.de];
      if(key==='present')return e.slice(0,2);if(key==='past')return e.slice(2,4);
      if(v.de==='mögen'){
        return {perfect:['Ich habe den Film gemocht.','I liked the film.'],pluperfect:['Ich hatte den Film gemocht.','I had liked the film.'],future:['Ich werde den Film mögen.','I will like the film.'],futurePerfect:['Ich werde den Film gemocht haben.','I will have liked the film.'],konjII:['Ich möchte einen Kaffee.','I would like a coffee.']}[key];
      }
      const action=e[4], en={können:['come','been able to come','be able to come'],müssen:['work','had to work','have to work'],wollen:['learn German','wanted to learn German','want to learn German'],dürfen:['park here','been allowed to park here','be allowed to park here'],sollen:['work today','been supposed to work today','be supposed to work today']}[v.de];
      if(key==='perfect')return [`Ich habe ${action} ${v.de}.`,`I have ${en[1]}.`];
      if(key==='pluperfect')return [`Ich hatte ${action} ${v.de}.`,`I had ${en[1]}.`];
      if(key==='future')return [`Ich werde ${action} ${v.de}.`,`I will ${en[2]}.`];
      if(key==='futurePerfect')return [`Ich werde haben ${action} ${v.de}.`,`I will have ${en[1]}.`];
      return {können:['Ich könnte morgen kommen.','I could come tomorrow.'],müssen:['Ich müsste heute arbeiten.','I would have to work today.'],wollen:['Ich wollte gern Deutsch lernen.','I would like to learn German.'],dürfen:['Ich dürfte hier parken.','I would be allowed to park here.'],sollen:['Ich sollte heute arbeiten.','I should work today.']}[v.de];
    }
    const frame=D.frames[v.de];if(!frame)return null;
    const [tail,base,past,pp,enTail,subject='Ich']=frame,f=C.forms(v,key)[subject==='Es'?2:0];if(!f)return null;
    let phrase;
    if(key==='present'||key==='past'){
      const words=f.split(' '), prefix=v.separable?words.pop():'';
      phrase=[words.join(' '),tail,prefix].filter(Boolean).join(' ');
    }else{
      const words=f.split(' '),finite=words.shift();
      const ref=/^sich /.test(v.de)?words.shift():'';
      phrase=[finite,ref,tail,words.join(' ')].filter(Boolean).join(' ');
    }
    const present=base.replace(/^be(?= |$)/,'am');
    const english={present:`I ${present} ${enTail}.`,past:`I ${past} ${enTail}.`,perfect:`I have ${pp} ${enTail}.`,pluperfect:`I had ${pp} ${enTail}.`,future:`I will ${base} ${enTail}.`,futurePerfect:`I will have ${pp} ${enTail}.`,konjII:`I would ${base} ${enTail}.`};
    let translation=english[key];
    if(subject==='Es') {
      const third=base==='cost'?'costs':base==='happen'?'happens':base==='last'?'lasts':'slips';
      translation=translation.replace(/^I /,'It ').replace(/^It have /,'It has ');
      if(key==='present')translation=`It ${third} ${enTail}.`;
    }
    if(enTail==='NEG') translation=({present:`I do not ${base}.`,past:`I did not ${base}.`,perfect:`I have not ${pp}.`,pluperfect:`I had not ${pp}.`,future:`I will not ${base}.`,futurePerfect:`I will not have ${pp}.`,konjII:`I would not ${base}.`})[key];
    return [`${subject} ${phrase}.`,translation];
  }
  function mount(verbs){
    S.verbs=verbs;
    const host=document.getElementById('sc-tenses');if(!host)return;
    host.innerHTML=`<div class="grammar-hub"><header class="grammar-heading"><div class="eyebrow">From knowing words to having conversations</div><h1>Make yourself <em>understood.</em></h1><p>A practical German speaking path. Start with the present, learn to tell your story in the past, then connect your ideas.</p>${window.germanyPostcards()}</header><nav class="grammar-nav" aria-label="Grammar sections">${[['learn','01 · Learn the essentials'],['verbs','02 · Verb explorer'],['speak','03 · Speak in real life'],['practice','04 · Practice']].map(([id,label])=>`<button class="btn bo" data-tab="${id}" aria-pressed="${S.tab===id}">${label}</button>`).join('')}</nav><div id="grammar-body"></div><footer class="grammar-sources"><strong>Grammar references</strong>${D.sources.map(([label,url])=>`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`).join('')}<span>Original examples and exercises · Active voice · A1/A2 path, with advanced tense reference</span></footer></div>`;
    host.onclick=onClick;host.oninput=onInput;host.onchange=onChange;host.onsubmit=onSubmit;
    paint();
  }
  function paint(){
    const body=document.getElementById('grammar-body');if(!body)return;
    document.querySelectorAll('[data-tab]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.tab===S.tab)));
    body.innerHTML=({learn:learnView,verbs:verbView,speak:speakView,practice:practiceView}[S.tab])();
  }
  function learnView(){
    const l=D.lessons[S.lesson];
    return `<div class="grammar-progress"><span><strong>${S.completed.size} / ${D.lessons.length}</strong> lessons marked practiced</span><progress value="${S.completed.size}" max="${D.lessons.length}" aria-label="Grammar lessons practiced"></progress><span>Try 10 minutes: learn → listen → say it yourself.</span></div><div class="grammar-learning"><aside class="grammar-lessons" aria-label="Lessons">${D.lessons.map((l,i)=>`<button data-lesson="${i}" aria-current="${i===S.lesson?'step':'false'}"><span>${S.completed.has(l.id)?'✓':String(i+1).padStart(2,'0')}</span><div>${esc(l.title)}<small>${l.level}</small></div></button>`).join('')}</aside><article class="grammar-lesson"><div class="eyebrow">${l.level} · Lesson ${S.lesson+1}</div><h2>${esc(l.title)}</h2><p class="grammar-lead">${esc(l.goal)}</p><div class="grammar-rule">${esc(l.rule)}</div><h3>Hear it. Say it. Make it yours.</h3>${l.examples.map(([de,en])=>sentence(de,en)).join('')}<div class="grammar-tip"><strong>Remember</strong><p>${esc(l.tip)}</p></div><h3>Check your understanding</h3><p class="grammar-muted">Fill in the missing word. Spelling matters; capitalization and final punctuation are flexible.</p>${l.questions.map(([q,,hint],i)=>`<form class="grammar-question" data-question="${i}"><label for="grammar-answer-${i}" lang="de">${esc(q)}</label><div class="grammar-answer-row"><input id="grammar-answer-${i}" name="answer" required autocomplete="off" autocapitalize="off" spellcheck="false" aria-describedby="grammar-feedback-${i}"><button class="btn bo" type="submit">Check</button><button class="grammar-link" type="button" data-hint="${i}">Hint</button></div><div id="grammar-feedback-${i}" class="grammar-feedback" role="status"></div></form>`).join('')}<div class="grammar-task"><div class="eyebrow">Your turn to speak</div><p>${esc(l.task)}</p><small>Say it aloud before moving on. These prompts are self-practice, not automatic pronunciation scoring.</small></div><div class="grammar-actions"><button class="btn bp" data-complete="${l.id}">${S.completed.has(l.id)?'Practiced ✓':'Mark as practiced'}</button>${S.lesson<D.lessons.length-1?`<button class="btn bo" data-lesson="${S.lesson+1}">Next lesson →</button>`:''}<button class="grammar-link" data-tab="verbs">Look up a verb ↗</button></div></article></div>`;
  }
  function filtered(){return S.verbs.filter(v=>(S.filter==='all'||coreNames.has(v.de))&&normalize(`${v.de} ${v.en}`).includes(normalize(S.query)));}
  function options(){return filtered().map(v=>`<option value="${esc(v.id)}" ${String(v.id)===S.verb?'selected':''}>${esc(v.de)} — ${esc(v.en)}</option>`).join('');}
  function verbView(){
    const matches=filtered();if(!matches.some(v=>String(v.id)===S.verb))S.verb=String(matches[0]?.id||'');
    return `<div class="grammar-intro"><h2>One verb. Every person. Every tense.</h2><p>${S.verbs.length} verbs · Six indicative tenses, plus Konjunktiv II and available imperatives. Everyday examples highlight how the forms fit into a sentence.</p></div><div class="grammar-filters"><label>Find a verb<input type="search" id="grammar-search" placeholder="German or English, e.g. gehen / go" value="${esc(S.query)}"></label><label>Collection<select id="grammar-filter"><option value="core" ${S.filter==='core'?'selected':''}>Speaking essentials</option><option value="all" ${S.filter==='all'?'selected':''}>All ${S.verbs.length} verbs</option></select></label><label>Verb<select id="grammar-verb">${options()||'<option>No matching verbs</option>'}</select></label></div><div id="grammar-verb-detail">${verbDetail()}</div>`;
  }
  function table(v,key){const f=C.forms(v,key);return f.length===6?`<table class="grammar-table"><caption>${esc(v.de)} · ${esc(C.tenses.find(t=>t.key===key)?.de||key)}</caption><thead><tr><th scope="col">Person</th><th scope="col">Conjugation</th></tr></thead><tbody>${f.map((form,i)=>`<tr><th scope="row">${C.persons[i]}</th><td lang="de">${esc(form)}${listen((i===2?'er':i===5?'Sie':C.persons[i])+' '+form)}</td></tr>`).join('')}</tbody></table>`:'<p class="grammar-muted">This is not an independent indicative tense form. Use mögen or wollen to express the intended meaning.</p>';}
  function verbDetail(){
    const v=S.verbs.find(v=>String(v.id)===S.verb);if(!v)return '<div class="grammar-empty">No verbs found. Try another word or choose “All verbs”.</div>';
    const meta=C.tenses.find(t=>t.key===S.tense),ex=sentenceFor(v,S.tense);
    return `<div class="grammar-verb-header"><div><span class="eyebrow">${esc(v.level||'Reference')} · ${v.separable?'Separable · ':''}${v.irregular?'Irregular':'Regular'}</span><h2 lang="de">${esc(v.de)}</h2><p>${esc(v.en)}</p></div>${v.perfect?`<div class="grammar-principal"><small>Memorize together</small><strong lang="de">${esc(v.de)} → ${esc(v.past?.[2]||'')} → ${esc(v.perfect.join(' '))}</strong></div>`:''}</div><p class="grammar-verb-note">${esc(v.note||'')}</p><div class="grammar-tense-tabs" aria-label="Choose a tense">${C.tenses.map(t=>`<button data-tense="${t.key}" aria-pressed="${t.key===S.tense}">${t.de}<small>${t.priority}</small></button>`).join('')}</div><div class="grammar-tense-layout"><div>${table(v,S.tense)}<p class="grammar-muted">er / sie / es share one form. Lowercase sie = they; capitalized Sie = formal you (singular or plural).</p></div><div class="grammar-tense-guide"><span class="eyebrow">${meta.priority}</span><h3>${meta.de} · ${meta.label}</h3><p>${meta.use}</p><div class="grammar-rule">${meta.rule}</div>${ex?`<h3>A complete sentence</h3>${sentence(...ex)}`:`<h3>Tense pattern</h3>${sentence(...meta.example)}<p class="grammar-muted">This pattern illustrates the tense with a familiar verb. The table gives ${esc(v.de)} forms.</p>`}${C.modals.has(v.de)?'<div class="grammar-tip"><strong>Modal + another verb</strong><p>The table shows the modal used alone. With another infinitive, use a double infinitive in Perfekt: ich habe arbeiten müssen. For everyday speaking, ich musste arbeiten is often simpler.</p></div>':''}<button class="btn bp" data-drill-selected="true">Practice these forms →</button></div></div><details class="grammar-compare"><summary>Compare all tenses</summary><div class="grammar-all-tenses">${C.tenses.filter(t=>C.forms(v,t.key).length===6).map(t=>`<section>${table(v,t.key)}${sentenceFor(v,t.key)?sentence(...sentenceFor(v,t.key)):sentence(...t.example)}</section>`).join('')}</div></details>${v.imperative?.filter(f=>f&&f!=='—').length?`<details class="grammar-compare"><summary>Give instructions · Imperativ</summary><div class="grammar-imperative">${v.imperative.map((f,i)=>`<div><small>${['du · one friend','ihr · several friends','Sie · formal'][i]}</small>${sentence(f,'Add bitte to make the instruction friendlier.')}</div>`).join('')}</div></details>`:''}`;
  }
  function speakView(){const d=D.dialogues[S.dialogue];return `<div class="grammar-intro"><h2>A little practice. A real conversation.</h2><p>Listen to a line, answer aloud, then reveal a model response. Change the details to fit your life.</p></div><div class="grammar-scenario-tabs">${D.dialogues.map((d,i)=>`<button class="btn bo" data-dialogue="${i}" aria-pressed="${i===S.dialogue}">${esc(d.title)}</button>`).join('')}</div><article class="grammar-dialogue"><div class="eyebrow">${esc(d.setting)}</div><h2>${esc(d.title)}</h2>${d.lines.map(([who,de,en])=>who==='You'?`<details class="grammar-your-line"><summary>Your turn · ${esc(en)}</summary>${sentence(de,en)}</details>`:`<div class="grammar-partner"><small>${esc(who)}</small>${sentence(de,en)}</div>`).join('')}<div class="grammar-task"><div class="eyebrow">Now make it yours</div><p>${esc(d.prompt)}</p></div></article>`;}
  function newDrill(selected=false){
    const pool=selected?S.verbs.filter(v=>String(v.id)===S.verb):S.verbs.filter(v=>coreNames.has(v.de)&&v.de!=='möchten');
    const keys=selected?[S.tense]:['present','perfect','past'];
    const v=pool[Math.floor(Math.random()*pool.length)];if(!v)return;
    const key=keys[Math.floor(Math.random()*keys.length)],f=C.forms(v,key);if(f.length!==6){S.drill=null;return;}
    const person=Math.floor(Math.random()*6);S.drill={id:String(v.id),key,person,answer:f[person],checked:false,selected};
  }
  function practiceView(){
    if(!S.drill)newDrill();const q=S.drill;if(!q)return '<p>Choose an available tense in the verb explorer to practice.</p>';
    const v=S.verbs.find(v=>String(v.id)===q.id),meta=C.tenses.find(t=>t.key===q.key);
    return `<div class="grammar-intro"><h2>Make the grammar stick.</h2><p>Practice all six persons. Type the complete verb phrase, including its auxiliary or reflexive pronoun when needed.</p></div><div class="grammar-drill"><div class="grammar-actions"><span class="eyebrow">${q.selected?'Selected verb & tense':'Mixed essentials · Präsens, Perfekt, Präteritum'}</span><span>${S.score} correct / ${S.answered} checked</span></div><h2 lang="de">${esc(v.de)} <small>${meta.de}</small></h2><p>${esc(v.en)}</p><form id="grammar-drill-form"><label for="grammar-drill-answer" class="grammar-drill-pronoun">${C.persons[q.person]} …</label><input id="grammar-drill-answer" name="answer" required autocomplete="off" autocapitalize="off" spellcheck="false" aria-describedby="grammar-drill-feedback" placeholder="Type the full verb form"><div class="grammar-actions"><button class="btn bp" type="submit" ${q.checked?'disabled':''}>Check answer</button><button type="button" class="btn bo" data-drill-reveal>Show answer</button><button type="button" class="btn bo" data-drill-next>Next →</button></div><div id="grammar-drill-feedback" class="grammar-feedback" role="status"></div></form><div class="grammar-tip"><strong>${meta.de}</strong><p>${meta.rule}</p></div><button class="grammar-link" data-drill-mixed>Switch to mixed essentials</button><button class="grammar-link" data-drill-table>See the full table</button></div>`;
  }
  function onInput(e){if(e.target.id!=='grammar-search')return;S.query=e.target.value;const matches=filtered();if(!matches.some(v=>String(v.id)===S.verb))S.verb=String(matches[0]?.id||'');document.getElementById('grammar-verb').innerHTML=options()||'<option>No matching verbs</option>';document.getElementById('grammar-verb-detail').innerHTML=verbDetail();}
  function onChange(e){if(e.target.id==='grammar-filter'){S.filter=e.target.value;paint();}if(e.target.id==='grammar-verb'){S.verb=e.target.value;document.getElementById('grammar-verb-detail').innerHTML=verbDetail();}}
  function onClick(e){
    const b=e.target.closest('button');if(!b)return;
    if(b.dataset.say!==undefined){window.speak?.(b.dataset.say);return;}
    if(b.dataset.tab){S.tab=b.dataset.tab;paint();return;}
    if(b.dataset.lesson!==undefined){S.lesson=Number(b.dataset.lesson);paint();return;}
    if(b.dataset.complete){S.completed.add(b.dataset.complete);persist();paint();return;}
    if(b.dataset.hint!==undefined){const i=Number(b.dataset.hint);document.getElementById('grammar-feedback-'+i).textContent=D.lessons[S.lesson].questions[i][2];return;}
    if(b.dataset.tense){S.tense=b.dataset.tense;document.getElementById('grammar-verb-detail').innerHTML=verbDetail();return;}
    if(b.dataset.dialogue!==undefined){S.dialogue=Number(b.dataset.dialogue);paint();return;}
    if(b.hasAttribute('data-drill-selected')){S.tab='practice';newDrill(true);paint();return;}
    if(b.hasAttribute('data-drill-next')){const selected=S.drill?.selected;if(selected&&S.drill){S.verb=S.drill.id;S.tense=S.drill.key;}newDrill(selected);paint();return;}
    if(b.hasAttribute('data-drill-mixed')){newDrill(false);paint();return;}
    if(b.hasAttribute('data-drill-table')){S.tab='verbs';S.verb=S.drill.id;S.tense=S.drill.key;S.filter='all';S.query='';paint();return;}
    if(b.hasAttribute('data-drill-reveal')){if(!S.drill.checked){S.drill.checked=true;S.answered++;}document.getElementById('grammar-drill-feedback').textContent='Model answer: '+S.drill.answer;document.querySelector('#grammar-drill-form button[type=submit]').disabled=true;document.querySelector('.grammar-drill>.grammar-actions>span:last-child').textContent=`${S.score} correct / ${S.answered} checked`;}
  }
  function onSubmit(e){
    if(!e.target.matches('.grammar-question,#grammar-drill-form'))return;e.preventDefault();
    const value=new FormData(e.target).get('answer');
    if(e.target.id==='grammar-drill-form'){
      const q=S.drill;if(q.checked)return;q.checked=true;S.answered++;const good=normalize(value)===normalize(q.answer);if(good)S.score++;
      const f=document.getElementById('grammar-drill-feedback');f.textContent=good?'Correct — say the whole phrase aloud.':'Model answer: '+q.answer+'. Say it aloud, then try another.';f.dataset.result=good?'correct':'review';
      e.target.querySelector('[type=submit]').disabled=true;
      document.querySelector('.grammar-drill>.grammar-actions>span:last-child').textContent=`${S.score} correct / ${S.answered} checked`;
    }else{
      const i=Number(e.target.dataset.question),q=D.lessons[S.lesson].questions[i],good=normalize(value)===normalize(q[1]);
      const f=document.getElementById('grammar-feedback-'+i);f.textContent=good?'Correct! '+q[2]:'Try again. '+q[2];f.dataset.result=good?'correct':'review';
    }
  }
  window.GrammarUI={render:mount,showVerb(id,verbs){S.tab='verbs';S.verb=String(id);S.query='';S.filter='all';mount(verbs||S.verbs);},sentenceFor,normalize};
})();
