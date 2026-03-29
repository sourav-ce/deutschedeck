// Builds an importable DeutscheDeck database JSON by merging:
// - Existing embedded datasets (vocab.js, tenses.js, quiz-data.js)
// - CodingFriends basic-vocabulary-word-lists de-en CSVs
//
// Source: https://github.com/CodingFriends/basic-vocabulary-word-lists
// License (per repo): CC BY-NC 4.0 (NonCommercial). Ensure your use complies.
//
// Output: imports/codingfriends/deutschedeck_database_codingfriends.json

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = __dirname;
const CODINGFRIENDS_DIR = path.join(ROOT, 'imports', 'codingfriends');
const OUT_PATH = path.join(CODINGFRIENDS_DIR, 'deutschedeck_database_codingfriends.json');

function readText(p) {
  return fs.readFileSync(p, 'utf8');
}

function runBrowserScriptToGetGlobals(filePath) {
  const code = readText(filePath);
  const sandbox = {
    window: {},
    console,
    // Some files might reference Date/Math/etc
    Date,
    Math,
    JSON,
    Array,
    Object,
    String,
    Number,
    Boolean,
    RegExp,
    Map,
    Set
  };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: path.basename(filePath) });
  return sandbox.window;
}

// Minimal CSV parser for semicolon-separated files with optional quotes.
function parseSemiCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  const pushField = () => {
    row.push(field);
    field = '';
  };
  const pushRow = () => {
    // ignore empty lines
    if (row.length === 1 && row[0].trim() === '') return;
    rows.push(row);
    row = [];
  };

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '"') {
      // handle escaped quotes ""
      if (inQuotes && text[i + 1] === '"') {
        field += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }
    if (!inQuotes && ch === ';') {
      pushField();
      continue;
    }
    if (!inQuotes && (ch === '\n' || ch === '\r')) {
      // finalize field and row
      // handle \r\n
      if (ch === '\r' && text[i + 1] === '\n') i++;
      pushField();
      pushRow();
      continue;
    }
    field += ch;
  }
  // last field/row
  pushField();
  if (row.length) pushRow();
  return rows;
}

function normalizeSpaces(s) {
  return String(s || '').trim().replace(/\s+/g, ' ');
}

function extractArticle(de) {
  const s = normalizeSpaces(de);
  const m = s.match(/^(der|die|das)\s+(.+)$/i);
  if (!m) return { article: null, de: s };
  return { article: m[1].toLowerCase(), de: normalizeSpaces(m[2]) };
}

function normalizeKey(de, en) {
  return `${normalizeSpaces(de).toLowerCase()}::${normalizeSpaces(en).toLowerCase()}`;
}

function guessTypeFromTags(tagsArr, deRaw) {
  const tags = new Set((tagsArr || []).map(t => String(t).trim().toLowerCase()).filter(Boolean));
  if (tags.has('verb')) return 'verb';
  if (tags.has('adjective')) return 'adjective';
  if (tags.has('sentences') || tags.has('sentence')) return 'phrase';
  // if German includes an article, treat as noun
  const { article } = extractArticle(deRaw);
  if (article) return 'noun';
  // fallback: phrase for multiword, noun otherwise
  const w = normalizeSpaces(deRaw);
  if (w.includes(' ')) return 'phrase';
  return 'noun';
}

function loadCodingFriendsRows() {
  const files = fs.readdirSync(CODINGFRIENDS_DIR).filter(f => f.endsWith('.csv'));
  const out = [];
  for (const f of files) {
    const p = path.join(CODINGFRIENDS_DIR, f);
    const rows = parseSemiCsv(readText(p));
    for (const r of rows) {
      // Observed format: en;de;;taglist
      const en = normalizeSpaces(r[0]);
      const deRaw = normalizeSpaces(r[1]);
      const taglist = normalizeSpaces(r[3] || '');
      const tagsArr = taglist.split(',').map(x => x.trim()).filter(Boolean);
      if (!en || !deRaw) continue;
      out.push({ en, deRaw, tagsArr, sourceFile: f });
    }
  }
  return out;
}

function main() {
  // Load embedded datasets
  const vocabGlobals = runBrowserScriptToGetGlobals(path.join(ROOT, 'vocab.js'));
  const tensesGlobals = runBrowserScriptToGetGlobals(path.join(ROOT, 'tenses.js'));
  const quizSandbox = { console };
  vm.createContext(quizSandbox);
  vm.runInContext(readText(path.join(ROOT, 'quiz-data.js')), quizSandbox, { filename: 'quiz-data.js' });

  const baseVocab = Array.isArray(vocabGlobals.VOCAB_DB) ? vocabGlobals.VOCAB_DB : [];
  const baseTenses = Array.isArray(tensesGlobals.VERB_DB) ? tensesGlobals.VERB_DB : [];
  const baseQuiz = typeof quizSandbox.QUIZ_BANK === 'object' && quizSandbox.QUIZ_BANK ? quizSandbox.QUIZ_BANK : {};

  const maxId = baseVocab.reduce((m, v) => Math.max(m, Number(v.id) || 0), 0);
  let nextId = maxId + 1;

  // Build lookup sets for dedupe + verb linkage
  const existingKeys = new Set(baseVocab.map(v => normalizeKey(v.de, v.en)));
  const existingDe = new Set(baseVocab.map(v => normalizeSpaces(v.de).toLowerCase()));
  const tensesByDe = new Set(baseTenses.map(v => normalizeSpaces(v.de).toLowerCase()));

  const coding = loadCodingFriendsRows();
  const added = [];
  const seenCodingKeys = new Set();

  for (const row of coding) {
    const { article, de } = extractArticle(row.deRaw);
    const type = guessTypeFromTags(row.tagsArr, row.deRaw);

    // Normalize vocab entry shape
    const entry = {
      id: nextId,
      de,
      en: row.en,
      level: 'A1',
      type,
      tags: Array.from(new Set(row.tagsArr.map(t => t.toLowerCase()))),
      source: 'CodingFriends/basic-vocabulary-word-lists'
    };
    if (article) entry.article = article;

    // Deduping:
    // - Prefer exact de+en match
    // - Also skip if German headword already exists and English matches loosely
    const key = normalizeKey(entry.de, entry.en);
    if (existingKeys.has(key)) continue;
    if (seenCodingKeys.has(key)) continue;

    // Verb linkage: only add verbs that exist in tenses DB (so conjugation mode stays valid)
    if (entry.type === 'verb') {
      if (!tensesByDe.has(entry.de.toLowerCase())) continue;
    }

    // Avoid adding pure duplicates by German alone for very common items
    if (existingDe.has(entry.de.toLowerCase()) && entry.type !== 'phrase') {
      continue;
    }

    seenCodingKeys.add(key);
    existingKeys.add(key);
    existingDe.add(entry.de.toLowerCase());
    added.push(entry);
    nextId++;
  }

  const mergedVocab = baseVocab.concat(added);
  const payload = {
    meta: {
      generatedAt: new Date().toISOString(),
      sources: [
        {
          name: 'CodingFriends/basic-vocabulary-word-lists',
          url: 'https://github.com/CodingFriends/basic-vocabulary-word-lists',
          license: 'CC BY-NC 4.0',
          note: 'Imported wordlists/de-en/*.csv; deduped; verbs included only if present in existing tenses DB.'
        }
      ],
      counts: {
        baseVocab: baseVocab.length,
        addedFromCodingFriends: added.length,
        mergedVocab: mergedVocab.length,
        tenses: baseTenses.length
      }
    },
    vocab: mergedVocab,
    tenses: baseTenses,
    quiz: baseQuiz
  };

  fs.writeFileSync(OUT_PATH, JSON.stringify(payload, null, 2), 'utf8');
  process.stdout.write(
    `Wrote ${OUT_PATH}\n` +
    `Base vocab: ${baseVocab.length}\n` +
    `Added from CodingFriends: ${added.length}\n` +
    `Merged vocab: ${mergedVocab.length}\n`
  );
}

main();

