const fs = require('fs');

const regularVerbs = [
  { de: 'arbeiten', en: 'to work', level: 'A1', present: ['arbeite','arbeitest','arbeitet','arbeiten','arbeitet','arbeiten'], past: ['arbeitete','arbeitetest','arbeitete','arbeiteten','arbeitetet','arbeiteten'], perfect: ['hat','gearbeitet'], imper: ['arbeite!','arbeitet!','arbeiten Sie!'] },
  { de: 'spielen', en: 'to play', level: 'A1', present: ['spiele','spielst','spielt','spielen','spielt','spielen'], past: ['spielte','spieltest','spielte','spielten','spieltet','spielten'], perfect: ['hat','gespielt'], imper: ['spiel!','spielt!','spielen Sie!'] },
  { de: 'lernen', en: 'to learn', level: 'A1', present: ['lerne','lernst','lernt','lernen','lernt','lernen'], past: ['lernte','lerntest','lernte','lernten','lerntet','lernten'], perfect: ['hat','gelernt'], imper: ['lern!','lernt!','lernen Sie!'] },
  { de: 'kaufen', en: 'to buy', level: 'A1', present: ['kaufe','kaufst','kauft','kaufen','kauft','kaufen'], past: ['kaufte','kauftest','kaufte','kauften','kauftet','kauften'], perfect: ['hat','gekauft'], imper: ['kauf!','kauft!','kaufen Sie!'] },
  { de: 'wohnen', en: 'to live', level: 'A1', present: ['wohne','wohnst','wohnt','wohnen','wohnt','wohnen'], past: ['wohnte','wohntest','wohnte','wohnten','wohntet','wohnten'], perfect: ['hat','gewohnt'], imper: ['wohn!','wohnt!','wohnen Sie!'] },
  { de: 'machen', en: 'to do/make', level: 'A1', present: ['mache','machst','macht','machen','macht','machen'], past: ['machte','machtest','machte','machten','machtet','machten'], perfect: ['hat','gemacht'], imper: ['mach!','macht!','machen Sie!'] },
  { de: 'fragen', en: 'to ask', level: 'A1', present: ['frage','fragst','fragt','fragen','fragt','fragen'], past: ['fragte','fragtest','fragte','fragten','fragtet','fragten'], perfect: ['hat','gefragt'], imper: ['frag!','fragt!','fragen Sie!'] },
  { de: 'sagen', en: 'to say', level: 'A1', present: ['sage','sagst','sagt','sagen','sagt','sagen'], past: ['sagte','sagtest','sagte','sagten','sagtet','sagten'], perfect: ['hat','gesagt'], imper: ['sag!','sagt!','sagen Sie!'] },
  { de: 'hören', en: 'to hear', level: 'A1', present: ['höre','hörst','hört','hören','hört','hören'], past: ['hörte','hörtest','hörte','hörten','hörtet','hörten'], perfect: ['hat','gehört'], imper: ['hör!','hört!','hören Sie!'] },
  { de: 'zeigen', en: 'to show', level: 'A1', present: ['zeige','zeigst','zeigt','zeigen','zeigt','zeigen'], past: ['zeigte','zeigtest','zeigte','zeigten','zeigtet','zeigten'], perfect: ['hat','gezeigt'], imper: ['zeig!','zeigt!','zeigen Sie!'] },
  { de: 'lachen', en: 'to laugh', level: 'A1', present: ['lache','lachst','lacht','lachen','lacht','lachen'], past: ['lachte','lachtest','lachte','lachten','lachtet','lachten'], perfect: ['hat','gelacht'], imper: ['lach!','lacht!','lachen Sie!'] },
  { de: 'leben', en: 'to live', level: 'A1', present: ['lebe','lebst','lebt','leben','lebt','leben'], past: ['lebte','lebtest','lebte','lebten','lebtet','lebten'], perfect: ['hat','gelebt'], imper: ['leb!','lebt!','leben Sie!'] },
  { de: 'brauchen', en: 'to need', level: 'A1', present: ['brauche','brauchst','braucht','brauchen','braucht','brauchen'], past: ['brauchte','brauchtest','brauchte','brauchten','brauchtet','brauchten'], perfect: ['hat','gebraucht'], imper: ['brauch!','braucht!','brauchen Sie!'] },
  { de: 'suchen', en: 'to search', level: 'A1', present: ['suche','suchst','sucht','suchen','sucht','suchen'], past: ['suchte','suchtest','suchte','suchten','suchtet','suchten'], perfect: ['hat','gesucht'], imper: ['such!','sucht!','suchen Sie!'] },
  { de: 'lieben', en: 'to love', level: 'A1', present: ['liebe','liebst','liebt','lieben','liebt','lieben'], past: ['liebte','liebtest','liebte','liebten','liebtet','liebten'], perfect: ['hat','geliebt'], imper: ['lieb!','liebt!','lieben Sie!'] },
  { de: 'hoffen', en: 'to hope', level: 'A1', present: ['hoffe','hoffst','hofft','hoffen','hofft','hoffen'], past: ['hoffte','hofftest','hoffte','hofften','hofftet','hofften'], perfect: ['hat','gehofft'], imper: ['hoff!','hofft!','hoffen Sie!'] },
  { de: 'tanzen', en: 'to dance', level: 'A1', present: ['tanze','tanzt','tanzt','tanzen','tanzt','tanzen'], past: ['tanzte','tanztest','tanzte','tanzten','tanztet','tanzten'], perfect: ['hat','getanzt'], imper: ['tanz!','tanzt!','tanzen Sie!'] },
  { de: 'antworten', en: 'to answer', level: 'A1', present: ['antworte','antwortest','antwortet','antworten','antwortet','antworten'], past: ['antwortete','antwortetest','antwortete','antworteten','antwortetet','antworteten'], perfect: ['hat','geantwortet'], imper: ['antworte!','antwortet!','antworten Sie!'] },
  { de: 'reisen', en: 'to travel', level: 'A1', present: ['reise','reist','reist','reisen','reist','reisen'], past: ['reiste','reistest','reiste','reisten','reistet','reisten'], perfect: ['ist','gereist'], imper: ['reis!','reist!','reisen Sie!'] },
  { de: 'warten', en: 'to wait', level: 'A1', present: ['warte','wartest','wartet','warten','wartet','warten'], past: ['wartete','wartetest','wartete','warteten','wartetet','warteten'], perfect: ['hat','gewartet'], imper: ['warte!','wartet!','warten Sie!'] },
  { de: 'schmecken', en: 'to taste', level: 'A1', present: ['schmecke','schmeckst','schmeckt','schmecken','schmeckt','schmecken'], past: ['schmeckte','schmecktest','schmeckte','schmeckten','schmecktet','schmeckten'], perfect: ['hat','geschmeckt'], imper: ['schmeck!','schmeckt!','schmecken Sie!'] },
  { de: 'danken', en: 'to thank', level: 'A1', present: ['danke','dankst','dankt','danken','dankt','danken'], past: ['dankte','danktest','dankte','dankten','danktet','dankten'], perfect: ['hat','gedankt'], imper: ['dank!','dankt!','danken Sie!'] },
  { de: 'erklären', en: 'to explain', level: 'A2', present: ['erkläre','erklärst','erklärt','erklären','erklärt','erklären'], past: ['erklärte','erklärtest','erklärte','erklärten','erklärtet','erklärten'], perfect: ['hat','erklärt'], imper: ['erklär!','erklärt!','erklären Sie!'] },
  { de: 'verkaufen', en: 'to sell', level: 'A2', present: ['verkaufe','verkaufst','verkauft','verkaufen','verkauft','verkaufen'], past: ['verkaufte','verkauftest','verkaufte','verkauften','verkauftet','verkauften'], perfect: ['hat','verkauft'], imper: ['verkauf!','verkauft!','verkaufen Sie!'] },
  { de: 'passieren', en: 'to happen', level: 'A2', present: ['passiere','passierst','passiert','passieren','passiert','passieren'], past: ['passierte','passiertest','passierte','passierten','passiertet','passierten'], perfect: ['ist','passiert'], imper: ['passier!','passiert!','passieren Sie!'] },
  { de: 'studieren', en: 'to study', level: 'A1', present: ['studiere','studierst','studiert','studieren','studiert','studieren'], past: ['studierte','studiertest','studierte','studierten','studiertet','studierten'], perfect: ['hat','studiert'], imper: ['studier!','studiert!','studieren Sie!'] },
  { de: 'kochen', en: 'to cook', level: 'A1', present: ['koche','kochst','kocht','kochen','kocht','kochen'], past: ['kochte','kochtest','kochte','kochten','kochtet','kochten'], perfect: ['hat','gekocht'], imper: ['koch!','kocht!','kochen Sie!'] },
  { de: 'putzen', en: 'to clean', level: 'A1', present: ['putze','putzt','putzt','putzen','putzt','putzen'], past: ['putzte','putztest','putzte','putzten','putztet','putzten'], perfect: ['hat','geputzt'], imper: ['putz!','putzt!','putzen Sie!'] },
  { de: 'kosten', en: 'to cost', level: 'A1', present: ['koste','kostest','kostet','kosten','kostet','kosten'], past: ['kostete','kostetest','kostete','kosteten','kostetet','kosteten'], perfect: ['hat','gekostet'], imper: ['koste!','kostet!','kosten Sie!'] },
  { de: 'feiern', en: 'to celebrate', level: 'A2', present: ['feiere','feierst','feiert','feiern','feiert','feiern'], past: ['feierte','feiertest','feierte','feierten','feiertet','feierten'], perfect: ['hat','gefeiert'], imper: ['feier!','feiert!','feiern Sie!'] },
];

let added = '';
for (let v of regularVerbs) {
  let future = `['werde ${v.de}','wirst ${v.de}','wird ${v.de}','werden ${v.de}','werdet ${v.de}','werden ${v.de}']`;
  let konj = `['würde ${v.de}','würdest ${v.de}','würde ${v.de}','würden ${v.de}','würdet ${v.de}','würden ${v.de}']`;
  let exDe = `Ich möchte ${v.de}.`;
  let exEn = `I want to ${v.en}.`;
  
  if(v.de === "helfen" || v.de === "kommen" || v.de === "gehen" || v.de === "sehen"){
      // Prevent duplicates if already exist, though we just filtered regular verbs above.
  }
  
  added += `{id:"${v.de}",de:"${v.de}",en:"${v.en}",level:"${v.level}",irregular:false,\npresent:${JSON.stringify(v.present)},past:${JSON.stringify(v.past)},perfect:${JSON.stringify(v.perfect)},\nfuture:${future},konjII:${konj},imperative:${JSON.stringify(v.imper)},\nexamples:[{de:"${exDe}",en:"${exEn}"}]},\n`;
}

let file = fs.readFileSync('c:/Users/ssmso/OneDrive/Desktop/GERMAN/Claude/files-gem/tenses.js', 'utf8');

// remove existing elements that match to avoid duplicates
for(let v of regularVerbs) {
   let re = new RegExp(`\\{id:"${v.de}".*?\\},?\\n?\\s*?`, 's'); // Note: naive duplicate removal, just append is fine since I am writing the DB mostly myself. Actually, let's just append.
}

file = file.replace('];', added + '];');
fs.writeFileSync('c:/Users/ssmso/OneDrive/Desktop/GERMAN/Claude/files-gem/tenses.js', file);
console.log('Added ' + regularVerbs.length + ' verbs successfully!');
