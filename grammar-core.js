/* German active-voice morphology. The legacy perfect field stores ingredients,
   not person forms. Keep that storage contract; expand it only at the boundary. */
(function (root) {
  'use strict';
  const persons = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'];
  const reflexives = ['mich', 'dich', 'sich', 'uns', 'euch', 'sich'];
  const aux = {
    haben: { present: ['habe','hast','hat','haben','habt','haben'], past: ['hatte','hattest','hatte','hatten','hattet','hatten'] },
    sein: { present: ['bin','bist','ist','sind','seid','sind'], past: ['war','warst','war','waren','wart','waren'] },
    werden: { present: ['werde','wirst','wird','werden','werdet','werden'] }
  };
  const tenses = [
    {key:'present',de:'Präsens',label:'Present',priority:'Start here',rule:'Conjugated verb in position 2.',use:'Now, habits, and future plans with a time expression.',example:['Ich lerne Deutsch.','I am learning German.']},
    {key:'perfect',de:'Perfekt',label:'Spoken past',priority:'Start here',rule:'Present haben/sein + Partizip II at the end.',use:'Your main way to tell someone what happened.',example:['Ich habe gestern Deutsch gelernt.','I learned German yesterday.']},
    {key:'past',de:'Präteritum',label:'Simple past',priority:'Useful next',rule:'Use the past-tense verb form in position 2.',use:'Stories and writing; sein, haben and modals are also very common in speech.',example:['Ich war gestern zu Hause.','I was at home yesterday.']},
    {key:'pluperfect',de:'Plusquamperfekt',label:'Past before past',priority:'Reference',rule:'Past hatte/war + Partizip II at the end.',use:'An event completed before another past event.',example:['Ich hatte gegessen, bevor der Kurs begann.','I had eaten before the course began.']},
    {key:'future',de:'Futur I',label:'Future',priority:'Useful next',rule:'Conjugated werden + infinitive at the end.',use:'Predictions, promises and intentions. For plans, Präsens + morgen is often simpler.',example:['Ich werde morgen lernen.','I will study tomorrow.']},
    {key:'futurePerfect',de:'Futur II',label:'Future perfect',priority:'Reference',rule:'Conjugated werden + Partizip II + haben/sein.',use:'Completion by a future point, or an assumption about the past. Low priority for beginners.',example:['Bis morgen werde ich das Buch gelesen haben.','By tomorrow I will have read the book.']},
    {key:'konjII',de:'Konjunktiv II',label:'Polite / hypothetical',priority:'Speaking essential',rule:'Often würde + infinitive; learn hätte, wäre, könnte and möchte.',use:'A mood, not a seventh indicative tense. Use it for polite requests and imagined situations.',example:['Könnten Sie mir bitte helfen?','Could you please help me?']}
  ];
  const modals = new Set(['können','müssen','wollen','dürfen','sollen','mögen']);
  function weak(de, en = '', auxiliary = 'hat') {
    const stem = de.replace(/en$|n$/, '');
    const extra = /[dt]$|(?:[bcdfgkpqvwxz]|ch)[mn]$/.test(stem);
    const sibilant = /[sßxz]$/.test(stem);
    const past = stem + (extra ? 'ete' : 'te');
    const pp = (/^(be|emp|ent|er|ge|miss|ver|zer)/.test(de) || /ieren$/.test(de) ? '' : 'ge') + stem + (extra ? 'et' : 't');
    return {id:de,de,en,level:'A1',irregular:false,
      present:[stem+'e',stem+(extra?'est':sibilant?'t':'st'),stem+(extra?'et':'t'),de,stem+(extra?'et':'t'),de],
      past:[past,past+'st',past,past+'n',past+'t',past+'n'],perfect:[auxiliary,pp],
      imperative:[stem+(extra?'e':'')+'!',stem+(extra?'et':'t')+'!',de+' Sie!'],
      note:'Regular verb. Learn the stem, personal endings and the past participle together.'};
  }
  const strong = {
    klingen:['klinge|klingst|klingt|klingen|klingt|klingen','klang|klangst|klang|klangen|klangt|klangen','geklungen','kling'],
    schneiden:['schneide|schneidest|schneidet|schneiden|schneidet|schneiden','schnitt|schnittest|schnitt|schnitten|schnittet|schnitten','geschnitten','schneide'],
    schwimmen:['schwimme|schwimmst|schwimmt|schwimmen|schwimmt|schwimmen','schwamm|schwammst|schwamm|schwammen|schwammt|schwammen','geschwommen','schwimm'],
    reiten:['reite|reitest|reitet|reiten|reitet|reiten','ritt|rittest|ritt|ritten|rittet|ritten','geritten','reite'],
    streichen:['streiche|streichst|streicht|streichen|streicht|streichen','strich|strichst|strich|strichen|stricht|strichen','gestrichen','streich'],
    vergleichen:['vergleiche|vergleichst|vergleicht|vergleichen|vergleicht|vergleichen','verglich|verglichst|verglich|verglichen|verglicht|verglichen','verglichen','vergleich'],
    verleihen:['verleihe|verleihst|verleiht|verleihen|verleiht|verleihen','verlieh|verliehst|verlieh|verliehen|verlieht|verliehen','verliehen','verleih'],
    werben:['werbe|wirbst|wirbt|werben|werbt|werben','warb|warbst|warb|warben|warbt|warben','geworben','wirb'],
    werfen:['werfe|wirfst|wirft|werfen|werft|werfen','warf|warfst|warf|warfen|warft|warfen','geworfen','wirf'],
    widersprechen:['widerspreche|widersprichst|widerspricht|widersprechen|widersprecht|widersprechen','widersprach|widersprachst|widersprach|widersprachen|widerspracht|widersprachen','widersprochen','widersprich'],
    wiegen:['wiege|wiegst|wiegt|wiegen|wiegt|wiegen','wog|wogst|wog|wogen|wogt|wogen','gewogen','wieg'],
    zwingen:['zwinge|zwingst|zwingt|zwingen|zwingt|zwingen','zwang|zwangst|zwang|zwangen|zwangt|zwangen','gezwungen','zwing'],
    betreten:['betrete|betrittst|betritt|betreten|betretet|betreten','betrat|betratest|betrat|betraten|betratet|betraten','betreten','betritt'],
    empfehlen:['empfehle|empfiehlst|empfiehlt|empfehlen|empfehlt|empfehlen','empfahl|empfahlst|empfahl|empfahlen|empfahlt|empfahlen','empfohlen','empfiehl'],
    lügen:['lüge|lügst|lügt|lügen|lügt|lügen','log|logst|log|logen|logt|logen','gelogen','lüg'],
    riechen:['rieche|riechst|riecht|riechen|riecht|riechen','roch|rochst|roch|rochen|rocht|rochen','gerochen','riech'],
    schließen:['schließe|schließt|schließt|schließen|schließt|schließen','schloss|schlossest|schloss|schlossen|schlosst|schlossen','geschlossen','schließ'],
    schreien:['schreie|schreist|schreit|schreien|schreit|schreien','schrie|schriest|schrie|schrien|schriet|schrien','geschrien','schrei'],
    heißen:['heiße|heißt|heißt|heißen|heißt|heißen','hieß|hießest|hieß|hießen|hießt|hießen','geheißen','heiße','to be called'],
    bleiben:['bleibe|bleibst|bleibt|bleiben|bleibt|bleiben','blieb|bliebst|blieb|blieben|bliebt|blieben','geblieben','bleib','to stay','ist'],
    treffen:['treffe|triffst|trifft|treffen|trefft|treffen','traf|trafst|traf|trafen|traft|trafen','getroffen','triff','to meet'],
    laufen:['laufe|läufst|läuft|laufen|lauft|laufen','lief|liefst|lief|liefen|lieft|liefen','gelaufen','lauf','to run','ist'],
    waschen:['wasche|wäschst|wäscht|waschen|wascht|waschen','wusch|wuschst|wusch|wuschen|wuscht|wuschen','gewaschen','wasch','to wash'],
    tragen:['trage|trägst|trägt|tragen|tragt|tragen','trug|trugst|trug|trugen|trugt|trugen','getragen','trag','to carry / wear'],
    ziehen:['ziehe|ziehst|zieht|ziehen|zieht|ziehen','zog|zogst|zog|zogen|zogt|zogen','gezogen','zieh','to pull'],
    bekommen:['bekomme|bekommst|bekommt|bekommen|bekommt|bekommen','bekam|bekamst|bekam|bekamen|bekamt|bekamen','bekommen','bekomm','to get / receive'],
    tun:['tue|tust|tut|tun|tut|tun','tat|tatest|tat|taten|tatet|taten','getan','tu','to do'],
    mögen:['mag|magst|mag|mögen|mögt|mögen','mochte|mochtest|mochte|mochten|mochtet|mochten','gemocht','—','to like']
  };
  const separated = {
    zuhören:['zu','hören'],zusammenfassen:['zusammen','fassen'],kennenlernen:['kennen','lernen'],
    vorbereiten:['vor','bereiten'],vorstellen:['vor','stellen'],zubereiten:['zu','bereiten'],
    zulassen:['zu','lassen'],zunehmen:['zu','nehmen'],zurückgeben:['zurück','geben'],
    zurückkommen:['zurück','kommen'],zusammenarbeiten:['zusammen','arbeiten'],zuschauen:['zu','schauen'],
    zuwerfen:['zu','werfen'],ankommen:['an','kommen'],anmachen:['an','machen'],anziehen:['an','ziehen'],
    ausfüllen:['aus','füllen'],aussehen:['aus','sehen'],ausziehen:['aus','ziehen'],
    mitbringen:['mit','bringen'],mitkommen:['mit','kommen'],abholen:['ab','holen'],aufmachen:['auf','machen']
  };
  const weakRepairs = 'tanzen reisen putzen passen setzen übersetzen zeichnen rechnen widmen vermissen verpassen verreisen würzen begrüßen grüßen pflanzen schützen'.split(' ');
  const noGe = {gehören:'gehört',übersetzen:'übersetzt',wiederholen:'wiederholt',übernachten:'übernachtet',überprüfen:'überprüft',unterrichten:'unterrichtet',untersuchen:'untersucht'};
  function prepare(input) {
    const db = input.map(v=>({...v}));
    const find = name => db.find(v=>v.de===name);
    const sip = find('sippen');
    if (sip) Object.assign(sip, weak('nippen', 'to sip'), {id:sip.id});
    const lost = find('verirren');
    if (lost) {
      lost.de='sich verirren';
      lost.present=lost.present.map((f,i)=>f+' '+reflexives[i]);
      lost.past=lost.past.map((f,i)=>f+' '+reflexives[i]);
      lost.perfect=['hat','sich verirrt'];
      lost.imperative=[];
      lost.note='Reflexive: ich verirre mich; ich habe mich verirrt (I got lost).';
    }
    const typo = find('verliehen');
    if(typo) { typo.de='verleihen'; typo.en='to lend / award'; }
    for(const name of weakRepairs) {
      const v=find(name); if(v) Object.assign(v,weak(name,v.en,v.perfect?.[0] || 'hat'),{id:v.id,level:v.level});
    }
    for(const [name,row] of Object.entries(strong)) {
      let v=find(name); if(!v) {v={id:name,de:name,en:row[4] || '',level:'A1'};db.push(v);}
      Object.assign(v,{present:row[0].split('|'),past:row[1].split('|'),perfect:[row[5] || (['schwimmen','reiten'].includes(name)?'ist':'hat'),row[2]],irregular:true,
        imperative:row[3]==='—'?[]:[row[3]+'!',row[0].split('|')[4]+'!',name+' Sie!'],
        konjII:['würde','würdest','würde','würden','würdet','würden'].map(f=>f+' '+name),
        note:'Strong or irregular verb. Learn its present stem changes, past form and Partizip II as a set.'});
    }
    find('mögen').konjII=['möchte','möchtest','möchte','möchten','möchtet','möchten'];
    for(const [name,pp] of Object.entries(noGe)) { const v=find(name); if(v) {v.perfect=['hat',pp];v.note='This use has no ge- in Partizip II. Learn the complete form: '+pp+'.';} }
    for(const [name,[prefix,base]] of Object.entries(separated)) {
      const b=find(base) || weak(base); let v=find(name);
      if(!v) {v={id:name,de:name,en:({mitbringen:'to bring along',mitkommen:'to come along',abholen:'to pick up',aufmachen:'to open'})[name],level:'A1'};db.push(v);}
      Object.assign(v,{separable:true,prefix,irregular:!!b.irregular,
        present:b.present.map(f=>f+' '+prefix),past:b.past.map(f=>f+' '+prefix),
        perfect:[['ankommen','zurückkommen','mitkommen'].includes(name)?'ist':'hat',prefix+b.perfect[1]],
        future:aux.werden.present.map(f=>f+' '+name),
        konjII:['würde','würdest','würde','würden','würdet','würden'].map(f=>f+' '+name),
        imperative:[b.imperative[0].replace('!','')+' '+prefix+'!',b.present[4]+' '+prefix+'!',b.present[5]+' Sie '+prefix+'!'],
        note:'Separable verb: the prefix goes to the end of a main clause. In the infinitive and participle it stays attached.'});
    }
    const introduce=find('sich vorstellen'); if(introduce) introduce.separable=true;
    const move=find('umziehen'); if(move) {move.perfect=['ist','umgezogen'];move.note='Tables use umziehen = move house (sein). To change clothes, use sich umziehen: ich habe mich umgezogen.';}
    const mo=find('möchten'); if(mo) {mo.note='Möchte is Konjunktiv II of mögen, used for “would like”. It has no separate indicative tense series. “Ich mochte” means “I liked”; “ich wollte” means “I wanted”.';delete mo.past;delete mo.perfect;delete mo.future;mo.imperative=[];}
    const hang=find('hängen'); if(hang) hang.note='Tables use the transitive meaning: etwas hängen (hängte, hat gehängt). For something hanging in a place: hing, hat gehangen.';
    const weigh=find('wiegen'); if(weigh) weigh.note='Tables use wiegen = weigh (wog, gewogen). Wiegen = rock a baby is regular (wiegte, gewiegt).';
    ['stehen','sitzen','liegen'].forEach(n=>{const v=find(n);if(v)v.note+=' These tables use haben; sein is also used regionally in southern German, Austria and Switzerland.';});
    return db;
  }
  function forms(v,key) {
    if(v.de==='möchten') return ['present','konjII'].includes(key)?v.present:[];
    if(['present','past'].includes(key)) return v[key] || [];
    const reflexive=/^sich /.test(v.de), inf=v.de.replace(/^sich /,''), pp=(v.perfect?.[1] || '').replace(/^sich /,'');
    const auxiliary=v.perfect?.[0]==='ist'?'sein':'haben';
    const ref=i=>reflexive?reflexives[i]+' ':'';
    if(['perfect','pluperfect'].includes(key)) return pp?aux[auxiliary][key==='perfect'?'present':'past'].map((f,i)=>`${f} ${ref(i)}${pp}`):[];
    if(key==='future') return aux.werden.present.map((f,i)=>`${f} ${ref(i)}${inf}`);
    if(key==='futurePerfect') return pp?aux.werden.present.map((f,i)=>`${f} ${ref(i)}${pp} ${auxiliary}`):[];
    if(key==='konjII') return reflexive?['würde','würdest','würde','würden','würdet','würden'].map((f,i)=>`${f} ${ref(i)}${inf}`):v.konjII || ['würde','würdest','würde','würden','würdet','würden'].map(f=>f+' '+inf);
    return [];
  }
  root.GrammarCore={persons,reflexives,aux,tenses,modals,prepare,forms};
})(typeof window !== 'undefined' ? window : globalThis);
