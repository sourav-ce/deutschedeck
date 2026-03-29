const fs = require('fs');

const path = 'c:/Users/ssmso/OneDrive/Desktop/GERMAN/Claude/files-gem/tenses.js';
let content = fs.readFileSync(path, 'utf8');

global.window = {};
eval(content);

window.VERB_DB.forEach(v => {
  if (v.note) return;

  const stem = v.de.endsWith('en') ? v.de.slice(0, -2) : (v.de.endsWith('n') ? v.de.slice(0, -1) : v.de);
  const is_t_d_stem = stem.endsWith('t') || stem.endsWith('d') || (stem.endsWith('n') && ['f','m','k','p','g'].includes(stem[stem.length-2]));

  let note = '';
  if (v.id === 'sein' || v.id === 'haben' || v.id === 'werden') return; // Should already have notes

  if (v.de.endsWith('ieren')) {
    note = "Regular '-ieren' verb. Pattern: always weak/regular. Note: No 'ge-' prefix in the Perfekt (past participle). Examples: 'Ich habe studiert', NOT 'gestudiert'.";
  } else if (is_t_d_stem) {
    note = "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'.";
  } else if (v.de.startsWith('be') || v.de.startsWith('er') || v.de.startsWith('ver') || v.de.startsWith('ent') || v.de.startsWith('zer')) {
    note = "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'.";
  } else if (!v.irregular) {
    note = "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'.";
  }

  if (v.perfect && v.perfect[0] === 'ist') {
    note += "\n\nNote: This verb uses 'sein' as its auxiliary in the Perfekt because it indicates a change of position or state.";
  }

  if (note) v.note = note;
});

let out = '// tenses.js — German Verb Conjugation & Grammar Database\\n\\n';
out += 'window.PRONOUNS = ' + JSON.stringify(window.PRONOUNS) + ';\\n\\n';
out += 'window.TENSE_META = ' + JSON.stringify(window.TENSE_META) + ';\\n\\n';
out += 'window.VERB_DB = ' + JSON.stringify(window.VERB_DB, null, 2) + ';\\n';

fs.writeFileSync(path, out.replace(/\\n/g, '\n'));
console.log('Successfully updated grammar notes for ' + window.VERB_DB.length + ' verbs.');
