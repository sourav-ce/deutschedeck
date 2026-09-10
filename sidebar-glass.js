(() => {
 const sidebar=document.querySelector('.sidebar');if(!sidebar)return;
 sidebar.id='study-sidebar';
 sidebar.querySelectorAll('.nb').forEach(item=>{
  const icon=item.querySelector('.ic');if(!icon)return;
  const label=document.createElement('span');label.className='sidebar-label';
  [...item.childNodes].filter(n=>n!==icon).forEach(n=>label.append(n));item.append(label);
  const name=label.textContent.replace(/\s+/g,' ').trim();item.title=name;if(item.matches('button,a'))item.setAttribute('aria-label',name);
 });
 sidebar.insertAdjacentHTML('afterbegin',`<button type="button" class="sidebar-collapse" aria-controls="study-sidebar" aria-expanded="true" aria-label="Collapse sidebar" title="Collapse sidebar">«</button><button class="nb sidebar-practice" onclick="openSetup('flash','all')" title="Start practice" aria-label="Start practice"><span class="ic material-symbols-sharp">add</span><span class="sidebar-label">Start practice</span></button>`);
 const toggle=sidebar.querySelector('.sidebar-collapse');
 function setCollapsed(collapsed){document.body.classList.toggle('sidebar-compact',collapsed);toggle.textContent=collapsed?'»':'«';toggle.setAttribute('aria-expanded',String(!collapsed));toggle.setAttribute('aria-label',collapsed?'Expand sidebar':'Collapse sidebar');toggle.title=toggle.getAttribute('aria-label');try{localStorage.setItem('dd_sidebar_compact',String(collapsed));}catch{}}
 toggle.onclick=()=>setCollapsed(!document.body.classList.contains('sidebar-compact'));
 try{setCollapsed(localStorage.getItem('dd_sidebar_compact')==='true');}catch{}
})();
