const assert = require('node:assert/strict');
global.window = global;
global.localStorage = {getItem: () => null};
require('../data/tenses.js');
for (const name of ['grammar-core','grammar-content','grammar-examples','grammar-ui']) require('../js/'+name+'.js');
const verbs = GrammarCore.prepare(VERB_DB);
const verb = name => verbs.find(v=>v.de===name);
assert.deepEqual(GrammarCore.forms(verb('gehen'),'perfect'), ['bin gegangen','bist gegangen','ist gegangen','sind gegangen','seid gegangen','sind gegangen']);
assert.equal(GrammarCore.forms(verb('lernen'),'futurePerfect')[0], 'werde gelernt haben');
assert.equal(verb('zeichnen').present[1], 'zeichnest');
assert.equal(verb('rechnen').perfect[1], 'gerechnet');
assert.equal(GrammarUI.sentenceFor(verb('sich vorstellen'),'present')[0], 'Ich stelle mich im Kurs vor.');
assert.equal(GrammarUI.sentenceFor(verb('sich verirren'),'perfect')[0], 'Ich habe mich in der Stadt verirrt.');
assert.deepEqual(GrammarUI.sentenceFor(verb('kosten'),'present'), ['Es kostet zehn Euro.', 'It costs ten euros.']);
assert.equal(GrammarUI.sentenceFor(verb('rauchen'),'perfect')[1], 'I have not smoked.');
for (const v of verbs) for (const t of GrammarCore.tenses) {
  if(v.de==='möchten' && !['present','konjII'].includes(t.key)) continue;
  assert.equal(GrammarCore.forms(v,t.key).length, 6, v.de+' '+t.key);
  const example=GrammarUI.sentenceFor(v,t.key);
  assert.ok(example?.every(s=>s&&!/undefined|NEG/.test(s)), v.de+' '+t.key);
}
console.log(`Passed: ${verbs.length} verbs, ${GRAMMAR_CONTENT.lessons.length} lessons, ${GRAMMAR_CONTENT.dialogues.length} dialogues; conjugations and example coverage.`);
