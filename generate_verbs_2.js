const fs = require('fs');

const path = 'c:/Users/ssmso/OneDrive/Desktop/GERMAN/Claude/files-gem/tenses.js';
let content = fs.readFileSync(path, 'utf8');

global.window = {};
eval(content);

const existingIds = new Set(window.VERB_DB.map(v => v.id));

function conjugateRegular(de, en, level, aux = 'hat') {
  const stem = de.endsWith('en') ? de.slice(0, -2) : (de.endsWith('n') ? de.slice(0, -1) : de);
  const is_t_d_stem = stem.endsWith('t') || stem.endsWith('d') || (stem.endsWith('n') && ['f','m','k','p','g'].includes(stem[stem.length-2]));
  const e = is_t_d_stem ? 'e' : '';
  const present = [stem + 'e', stem + e + 'st', stem + e + 't', de, stem + e + 't', de];
  const pastStem = stem + e + 'te';
  const past = [pastStem, pastStem + 'st', pastStem, pastStem + 'n', pastStem + 't', pastStem + 'n'];
  const partizip = de.startsWith('be') || de.startsWith('er') || de.startsWith('ver') || de.startsWith('ent') || de.startsWith('zer') || de.endsWith('ieren')
    ? stem + (is_t_d_stem ? 'et' : 't') : 'ge' + stem + (is_t_d_stem ? 'et' : 't');
  const perfect = [aux, partizip];
  const future = ['werde ' + de, 'wirst ' + de, 'wird ' + de, 'werden ' + de, 'werdet ' + de, 'werden ' + de];
  const konjII = ['würde ' + de, 'würdest ' + de, 'würde ' + de, 'würden ' + de, 'würdet ' + de, 'würden ' + de];
  const imperative = [stem + (is_t_d_stem ? 'e!' : '!'), stem + e + 't!', de + ' Sie!'];
  return { id: de, de, en, level, irregular: false, present, past, perfect, future, konjII, imperative, examples: [{ de: `Ich möchte ${de}.`, en: `I want to ${en}.` }] };
}

const newVerbs = [];
const extraVerbs = [
  ['ankommen', 'to arrive', 'A1', 'ist'], ['anmachen', 'to turn on', 'A1'], ['anrufen', 'to call (phone)', 'A1'],
  ['anziehen', 'to put on (clothes)', 'A1'], ['aufstehen', 'to stand up', 'A1', 'ist'], ['ausfüllen', 'to fill out', 'A1'],
  ['aussehen', 'to look like', 'A1'], ['ausziehen', 'to take off (clothes)', 'A1'], ['baden', 'to bathe', 'A1'],
  ['berichten', 'to report', 'A2'], ['bestätigen', 'to confirm', 'A2'], ['betreten', 'to enter', 'A2', 'ist'],
  ['bewegen', 'to move', 'A2'], ['bewundern', 'to admire', 'A2'], ['bilden', 'to form', 'A2'],
  ['buchen', 'to book', 'A1'], ['drucken', 'to print', 'A1'], ['drücken', 'to press/push', 'A2'],
  ['empfehlen', 'to recommend', 'A2'], ['entschuldigen', 'to apologize', 'A1'], ['erinnern', 'to remember', 'A2'],
  ['erlauben', 'to allow', 'A2'], ['erreichen', 'to reach', 'A2'], ['erzählen', 'to tell', 'A1'],
  ['fegen', 'to sweep', 'A2'], ['flüstern', 'to whisper', 'A2'], ['folgen', 'to follow', 'A2', 'ist'],
  ['fotografieren', 'to photograph', 'A1'], ['freuen', 'to be happy', 'A1'], ['füttern', 'to feed', 'A2'],
  ['gähnen', 'to yawn', 'A2'], ['grüßen', 'to greet', 'A1'], ['handeln', 'to act/deal', 'A2'],
  ['heilen', 'to heal', 'A2'], ['heiraten', 'to marry', 'A1'], ['kämmen', 'to comb', 'A1'],
  ['klopfen', 'to knock', 'A2'], ['lächeln', 'to smile', 'A2'], ['landen', 'to land', 'A2', 'ist'],
  ['lügen', 'to lie', 'A2'], ['mischen', 'to mix', 'A2'], ['naschen', 'to snack', 'A2'],
  ['nicken', 'to nod', 'A2'], ['öffnen', 'to open', 'A1'], ['pflanzen', 'to plant', 'A2'],
  ['plaudern', 'to chat', 'A2'], ['pusten', 'to blow', 'A2'], ['reagieren', 'to react', 'A2'],
  ['retten', 'to save/rescue', 'A2'], ['riechen', 'to smell', 'A2'], ['rühren', 'to stir', 'A2'],
  ['schauen', 'to look', 'A1'], ['schenken', 'to give as a gift', 'A1'], ['schicken', 'to send', 'A1'],
  ['schließen', 'to close', 'A2'], ['schmecken', 'to taste', 'A1'], ['schneiden', 'to cut', 'A2'],
  ['schreien', 'to scream', 'A2'], ['schützen', 'to protect', 'A2'], ['servieren', 'to serve', 'A2'],
  ['sippen', 'to sip', 'A2'], ['stärken', 'to strengthen', 'A2'], ['staunen', 'to be amazed', 'A2']
];

extraVerbs.forEach(v => {
  if (!existingIds.has(v[0])) {
    newVerbs.push(conjugateRegular(v[0], v[1], v[2], v[3] || 'hat'));
    existingIds.add(v[0]);
  }
});

window.VERB_DB.push(...newVerbs);

let out = '// tenses.js — German Verb Conjugation & Grammar Database\n\n';
out += 'window.PRONOUNS = ' + JSON.stringify(window.PRONOUNS) + ';\n\n';
out += 'window.TENSE_META = ' + JSON.stringify(window.TENSE_META) + ';\n\n';
out += 'window.VERB_DB = ' + JSON.stringify(window.VERB_DB, null, 2) + ';\n';

fs.writeFileSync(path, out.replace(/\\n/g, '\n'));
console.log(`Successfully added ${newVerbs.length} more verbs. Total: ${window.VERB_DB.length}`);
