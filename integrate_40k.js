const fs = require('fs');

const inFile = 'c:/Users/ssmso/OneDrive/Desktop/GERMAN/Claude/files-gem - Copy/german.json';
const vocabFile = 'c:/Users/ssmso/OneDrive/Desktop/GERMAN/Claude/files-gem - Copy/vocab.js';
const outFile = 'c:/Users/ssmso/OneDrive/Desktop/GERMAN/Claude/files-gem - Copy/vocab_extra.js';

console.log('Loading existing DB to find duplicates...');
let vocabJs = fs.readFileSync(vocabFile, 'utf8');
let dbMatch = vocabJs.match(/window\.VOCAB_DB\s*=\s*\[([\s\S]*?)\];/);
let existingWords = new Set();
let maxId = 0;
if (dbMatch) {
    try {
        let existingDB = eval(`[${dbMatch[1]}]`);
        existingDB.forEach(w => {
            if(w.de) existingWords.add(w.de.toLowerCase());
            if(w.id > maxId) maxId = w.id;
        });
    } catch(e) {
        console.error("Failed to parse vocab.js", e);
    }
}

console.log(`Found ${existingWords.size} existing words. Next ID is ${maxId + 1}.`);

console.log('Reading german.json...');
const data = JSON.parse(fs.readFileSync(inFile, 'utf8'));

console.log(`Processing ${data.length} records...`);

let newWords = [];
let count = 0;
let nextId = maxId + 1;

data.forEach(item => {
    // Only import useful flashcards
    if (!item.useful_for_flashcard) return;
    
    let deWord = item.word;
    if (!deWord) return;
    deWord = deWord.trim();
    if (existingWords.has(deWord.toLowerCase())) return;
    
    // Map gender to article
    let article = "";
    if (item.gender === "masculine") article = "der";
    else if (item.gender === "feminine") article = "die";
    else if (item.gender === "neuter") article = "das";
    
    // Map example
    let examples = [];
    if (item.example_sentence_native && item.example_sentence_english) {
        examples.push({
            de: item.example_sentence_native,
            en: item.example_sentence_english
        });
    }

    let meta = {};
    if (item.gender) meta.gender = item.gender;
    if (item.romanization) meta.romanization = item.romanization;
    if (item.is_separable_verb === true) meta.is_separable = true;
    if (item.separable_prefix) meta.prefix = item.separable_prefix;
    if (item.base_verb) meta.base = item.base_verb;
    if (item.word_frequency) meta.frequency = item.word_frequency;

    let obj = {
        id: nextId++,
        de: deWord,
        en: item.english_translation || "",
        level: item.cefr_level || "",
        type: item.pos || "",
        tags: ["top40k"]
    };
    
    if (article) obj.article = article;
    if (examples.length > 0) obj.examples = examples;
    if (Object.keys(meta).length > 0) obj.meta = meta;
    // Map plural if exists (german.json seems not to have plural form out of the box per snippet, but we keep it safe)
    if (item.plural) obj.plural = item.plural;
    
    newWords.push(obj);
    existingWords.add(deWord.toLowerCase());
    count++;
});

console.log(`Successfully mapped ${count} new unique items!`);
console.log('Writing to vocab_extra.js...');

let outContent = `// Auto-generated 40k Flashcard DB
window.VOCAB_EXTRA_DB = ${JSON.stringify(newWords, null, 2)};
`;

fs.writeFileSync(outFile, outContent, 'utf8');

console.log('Done!');
