(() => {
  'use strict';
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let source=[],cards=[],level='A1',count=1,reverse=false,duration=0,timer=null,deadline=0;
  const stop=()=>{clearInterval(timer);timer=null;};
  function pool(){const seen=new Set();return source.filter(v=>v.level===level).flatMap(v=>v.examples||[]).filter(e=>e.de&&e.en&&!seen.has(e.de)&&seen.add(e.de));}
  function draw(){
    stop();const all=pool(),previous=new Set(cards.map(c=>c.de));let available=all.filter(c=>!previous.has(c.de));if(available.length<count)available=all;
    cards=[];while(cards.length<count&&available.length){const i=Math.floor(Math.random()*available.length);cards.push(available.splice(i,1)[0]);}
    paint();start();
  }
  function start(){stop();if(!duration||!cards.length)return;deadline=Date.now()+duration*1000;tick();timer=setInterval(tick,250);}
  function tick(){const remaining=Math.max(0,Math.ceil((deadline-Date.now())/1000));const el=document.getElementById('board-clock');if(el)el.textContent=remaining+'s remaining';if(!remaining){stop();reveal();if(el)el.textContent='Time’s up — compare your answers.';}}
  function reveal(){document.querySelectorAll('#sc-board details').forEach(d=>d.open=true);}
  function paint(){
    const host=document.getElementById('sc-board');
    host.innerHTML=`<div class="sentence-board"><div class="board-photo-header"><div><div class="eyebrow">German · Sentence practice</div><h1>Think it. Say it. <em>Reveal it.</em></h1><p class="board-intro">Translate each sentence aloud, then check yourself. A little practice, one board at a time.</p></div>${window.germanyPostcards()}</div><div class="board-controls"><label>Level<select id="board-level">${['A1','A2','B1','B2','C1','C2'].map(l=>`<option ${level===l?'selected':''}>${l}</option>`).join('')}</select></label><label>Cards<select id="board-count">${[1,2,3,4,5].map(n=>`<option ${count===n?'selected':''}>${n}</option>`).join('')}</select></label><label>Prompt<select id="board-direction"><option value="de" ${!reverse?'selected':''}>German → English</option><option value="en" ${reverse?'selected':''}>English → German</option></select></label><label>Timer<select id="board-timer">${[0,30,60,120].map(n=>`<option value="${n}" ${duration===n?'selected':''}>${n?n+' seconds':'Off'}</option>`).join('')}</select></label></div><div class="board-status"><span>${level} · ${cards.length} card${cards.length===1?'':'s'} · ${pool().length} available sentences</span><span id="board-clock" role="status">Take your time</span></div><div class="board-grid ${cards.length===1?'board-single':''}">${cards.map((c,i)=>`<article class="sentence-card"><header><span>${String(i+1).padStart(2,'0')} / ${String(cards.length).padStart(2,'0')}</span><button class="btn bo" data-listen="${i}" aria-label="Listen to German sentence ${i+1}">Listen ↗</button></header><p class="board-prompt" lang="${reverse?'en':'de'}">${esc(reverse?c.en:c.de)}</p><details><summary>Reveal ${reverse?'German':'translation'}</summary><p lang="${reverse?'de':'en'}">${esc(reverse?c.de:c.en)}</p></details></article>`).join('')||'<p>No example sentences are available at this level. Choose another level.</p>'}</div><div class="board-actions"><button class="btn bp" data-new>New board →</button><button class="btn bo" data-reveal>Reveal all</button>${duration?'<button class="btn bo" data-restart>Restart timer</button>':''}</div><p class="board-footnote">Sentence levels follow the vocabulary entries in your current dataset. Pronunciation uses your browser’s German voice.</p></div>`;
    window.decoratePhotoPage?.("board");
    host.onchange=e=>{if(e.target.id==='board-level')level=e.target.value;else if(e.target.id==='board-count')count=Number(e.target.value);else if(e.target.id==='board-direction')reverse=e.target.value==='en';else if(e.target.id==='board-timer')duration=Number(e.target.value);else return;draw();};
    host.onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.hasAttribute('data-new'))draw();if(b.hasAttribute('data-reveal')){stop();reveal();document.getElementById('board-clock').textContent='Answers revealed';}if(b.hasAttribute('data-restart'))start();if(b.dataset.listen!==undefined)window.speak?.(cards[Number(b.dataset.listen)].de);};
  }
  window.SentenceBoard={render(vocab){source=vocab;draw();},stop};
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&timer){stop();const el=document.getElementById('board-clock');if(el)el.textContent='Timer stopped — restart when ready.';}});
})();
