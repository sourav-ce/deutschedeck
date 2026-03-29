const fs = require('fs');

const path = 'c:/Users/ssmso/OneDrive/Desktop/GERMAN/Claude/files-gem/tenses.js';
let content = fs.readFileSync(path, 'utf8');

// Mock window to eval existing data
global.window = {};
try {
  eval(content);
} catch (e) {
  console.error('Failed to eval existing tenses.js', e);
  process.exit(1);
}

const existingIds = new Set(window.VERB_DB.map(v => v.id));

// Helper for regular conjugation
function conjugateRegular(de, en, level, aux = 'hat') {
  const stem = de.endsWith('en') ? de.slice(0, -2) : (de.endsWith('n') ? de.slice(0, -1) : de);
  const is_t_d_stem = stem.endsWith('t') || stem.endsWith('d') || (stem.endsWith('n') && ['f','m','k','p','g'].includes(stem[stem.length-2]));
  const e = is_t_d_stem ? 'e' : '';

  const present = [
    stem + 'e',
    stem + e + 'st',
    stem + e + 't',
    de,
    stem + e + 't',
    de
  ];

  const pastStem = stem + e + 'te';
  const past = [
    pastStem,
    pastStem + 'st',
    pastStem,
    pastStem + 'n',
    pastStem + 't',
    pastStem + 'n'
  ];

  const partizip = de.startsWith('be') || de.startsWith('er') || de.startsWith('ver') || de.startsWith('ent') || de.startsWith('zer') || de.endsWith('ieren')
    ? stem + (is_t_d_stem ? 'et' : 't')
    : 'ge' + stem + (is_t_d_stem ? 'et' : 't');

  const perfect = [aux, partizip];

  const future = [
    'werde ' + de,
    'wirst ' + de,
    'wird ' + de,
    'werden ' + de,
    'werdet ' + de,
    'werden ' + de
  ];

  const konjII = [
    'würde ' + de,
    'würdest ' + de,
    'würde ' + de,
    'würden ' + de,
    'würdet ' + de,
    'würden ' + de
  ];

  const imperative = [
    stem + (is_t_d_stem ? 'e!' : '!'),
    stem + e + 't!',
    de + ' Sie!'
  ];

  return {
    id: de, de, en, level,
    irregular: false,
    present, past, perfect, future, konjII, imperative,
    examples: [{ de: `Ich möchte ${de}.`, en: `I want to ${en}.` }]
  };
}

const newVerbs = [];

// Adding ~150 common A1/A2 verbs
const commonRegulars = [
  ['lernen', 'to learn', 'A1'], ['spielen', 'to play', 'A1'], ['kaufen', 'to buy', 'A1'], ['wohnen', 'to live', 'A1'],
  ['machen', 'to do/make', 'A1'], ['sagen', 'to say', 'A1'], ['hören', 'to hear', 'A1'], ['zeigen', 'to show', 'A1'],
  ['lachen', 'to laugh', 'A1'], ['leben', 'to live', 'A1'], ['brauchen', 'to need', 'A1'], ['suchen', 'to search', 'A1'],
  ['kochen', 'to cook', 'A1'], ['lieben', 'to love', 'A1'], ['glauben', 'to believe', 'A1'], ['hoffen', 'to hope', 'A1'],
  ['tanzen', 'to dance', 'A1'], ['reisen', 'to travel', 'A1', 'ist'], ['warten', 'to wait', 'A1'], ['schmecken', 'to taste', 'A1'],
  ['danken', 'to thank', 'A1'], ['feiern', 'to celebrate', 'A1'], ['putzen', 'to clean', 'A1'], ['kosten', 'to cost', 'A1'],
  ['passen', 'to fit', 'A1'], ['erklären', 'to explain', 'A2'], ['verkaufen', 'to sell', 'A2'], ['passieren', 'to happen', 'A2', 'ist'],
  ['studieren', 'to study', 'A1'], ['fehlen', 'to be missing', 'A1'], ['gehören', 'to belong', 'A1'], ['gratulieren', 'to congratulate', 'A1'],
  ['klingen', 'to sound', 'A1'], ['malen', 'to paint/draw', 'A1'], ['rauchen', 'to smoke', 'A1'], ['schenken', 'to give (gift)', 'A1'],
  ['schicken', 'to send', 'A1'], ['setzen', 'to set/place', 'A1'], ['stellen', 'to stand/place', 'A1'], ['legen', 'to lay/place', 'A1'],
  ['hängen', 'to hang', 'A1'], ['holen', 'to fetch', 'A1'], ['füllen', 'to fill', 'A1'], ['schauen', 'to look', 'A1'],
  ['besuchen', 'to visit', 'A1'], ['übersetzen', 'to translate', 'A2'], ['ändern', 'to change', 'A2'], ['dauern', 'to last', 'A1'],
  ['mieten', 'to rent', 'A1'], ['diskutieren', 'to discuss', 'A2'], ['organisieren', 'to organize', 'A2'],
  ['parken', 'to park', 'A1'], ['planen', 'to plan', 'A1'], ['rauchen', 'to smoke', 'A1'], ['reparieren', 'to repair', 'A2'],
  ['reservieren', 'to reserve', 'A1'], ['sammeln', 'to collect', 'A2'], ['schicken', 'to send', 'A1'], ['schminken', 'to put on makeup', 'A2'],
  ['schneiden', 'to cut', 'A2'], ['schreiben', 'to write', 'A1'], ['schwimmen', 'to swim', 'A1', 'ist'], ['segeln', 'to sail', 'A2', 'ist'],
  ['surfen', 'to surf', 'A1'], ['telefonieren', 'to call', 'A1'], ['träumen', 'to dream', 'A1'], ['turnen', 'to do gymnastics', 'A1'],
  ['üben', 'to practice', 'A1'], ['wandern', 'to hike', 'A1', 'ist'], ['warten', 'to wait', 'A1'], ['weinen', 'to cry', 'A1'],
  ['wiederholen', 'to repeat', 'A2'], ['zeichnen', 'to draw', 'A1'], ['zelten', 'to camp', 'A1'], ['zuhören', 'to listen to', 'A2'],
  ['zusammenfassen', 'to summarize', 'A2'], ['fragen', 'to ask', 'A1'], ['antworten', 'to answer', 'A1'],
  ['arbeiten', 'to work', 'A1'], ['bestellen', 'to order', 'A1'], ['bezahlen', 'to pay', 'A1'], ['buchstabieren', 'to spell', 'A1'],
  ['duschen', 'to shower', 'A1'], ['einkaufen', 'to shop', 'A1'], ['frühstücken', 'to eat breakfast', 'A1'], ['grillen', 'to grill', 'A1'],
  ['joggen', 'to jog', 'A1', 'ist'], ['kennenlernen', 'to get to know', 'A1'], ['korrigieren', 'to correct', 'A1'],
  ['markieren', 'to mark', 'A1'], ['meinen', 'to mean/think', 'A1'], ['notieren', 'to note down', 'A1'], ['rechnen', 'to calculate', 'A2'],
  ['reiten', 'to ride', 'A1', 'ist'], ['rekonstruieren', 'to reconstruct', 'A2'], ['rollen', 'to roll', 'A1'], ['schütteln', 'to shake', 'A2'],
  ['sparen', 'to save', 'A2'], ['spülen', 'to rinse', 'A2'], ['stecken', 'to stick/put', 'A2'], ['stoppen', 'to stop', 'A1'],
  ['stören', 'to disturb', 'A2'], ['streichen', 'to paint/stroke', 'A2'], ['stricken', 'to knit', 'A2'], ['teilen', 'to share', 'A2'],
  ['testen', 'to test', 'A1'], ['töten', 'to kill', 'A2'], ['trauen', 'to trust', 'A2'], ['trennen', 'to separate', 'A2'],
  ['trocknen', 'to dry', 'A2'], ['übernachten', 'to stay overnight', 'A1'], ['überprüfen', 'to check', 'A2'],
  ['umziehen', 'to move house', 'A1', 'ist'], ['unterrichten', 'to teach', 'A2'], ['untersuchen', 'to examine', 'A2'],
  ['verabreden', 'to make an appointment', 'A2'], ['verbessern', 'to improve', 'A2'], ['verdienen', 'to earn', 'A2'],
  ['vereinbaren', 'to agree upon', 'A2'], ['verfolgen', 'to follow', 'A2'], ['vergleichen', 'to compare', 'A2'],
  ['vergrößern', 'to enlarge', 'A2'], ['verhungern', 'to starve', 'A2', 'ist'], ['verirren', 'to get lost', 'A2'],
  ['verkaufen', 'to sell', 'A2'], ['verkleinern', 'to reduce', 'A2'], ['verliehen', 'to lend', 'A2'],
  ['vermieten', 'to rent out', 'A2'], ['vermissen', 'to miss', 'A1'], ['verpassen', 'to miss (bus/train)', 'A2'],
  ['verreisen', 'to go on a trip', 'A2', 'ist'], ['verrutschen', 'to slip', 'A2', 'ist'], ['verstärken', 'to strengthen', 'A2'],
  ['verstecken', 'to hide', 'A2'], ['verteilen', 'to distribute', 'A2'], ['vertrauen', 'to trust', 'A2'],
  ['verursachen', 'to cause', 'A2'], ['vervollständigen', 'to complete', 'A2'], ['verwechseln', 'to mix up', 'A2'],
  ['verwenden', 'to use', 'A2'], ['verzichten', 'to do without', 'A2'], ['vorbereiten', 'to prepare', 'A2'],
  ['vorstellen', 'to introduce', 'A2'], ['wählen', 'to choose/vote', 'A1'], ['warnen', 'to warn', 'A2'],
  ['wechseln', 'to change/exchange', 'A2'], ['wecken', 'to wake someone up', 'A2'], ['wenden', 'to turn', 'A2'],
  ['werben', 'to advertise', 'A2'], ['werfen', 'to throw', 'A2'], ['widersprechen', 'to contradict', 'A2'],
  ['widmen', 'to dedicate', 'A2'], ['wiederholen', 'to repeat', 'A2'], ['wiegen', 'to weigh', 'A2'],
  ['winken', 'to wave', 'A1'], ['wirken', 'to work/effect', 'A2'], ['wünschen', 'to wish', 'A1'],
  ['würzen', 'to season', 'A2'], ['zahlen', 'to pay', 'A1'], ['zählen', 'to count', 'A1'],
  ['zeigen', 'to show', 'A1'], ['zerstören', 'to destroy', 'A2'], ['zittern', 'to tremble', 'A2'],
  ['zögern', 'to hesitate', 'A2'], ['zubereiten', 'to prepare (food)', 'A2'], ['zuhören', 'to listen', 'A1'],
  ['zulassen', 'to allow', 'A2'], ['zunehmen', 'to increase', 'A2'], ['zurückgeben', 'to return', 'A1'],
  ['zurückkommen', 'to come back', 'A1', 'ist'], ['zusammenarbeiten', 'to collaborate', 'A2'],
  ['zuschauen', 'to watch', 'A2'], ['zuwerfen', 'to throw to', 'A2'], ['zweifeln', 'to doubt', 'A2'],
  ['zwingen', 'to force', 'A2'], ['begrüßen', 'to welcome', 'A1'], ['verabschieden', 'to say goodbye', 'A1']
];

commonRegulars.forEach(v => {
  if (!existingIds.has(v[0])) {
    newVerbs.push(conjugateRegular(v[0], v[1], v[2], v[3] || 'hat'));
    existingIds.add(v[0]);
  }
});

// Irregular / Modal Verbs (most common)
const irregulars = [
  {
    id: "essen", de: "essen", en: "to eat", level: "A1", irregular: true,
    present: ["esse", "isst", "isst", "essen", "esst", "essen"],
    past: ["aß", "aßen", "aß", "aßen", "aßt", "aßen"],
    perfect: ["hat", "gegessen"],
    future: ["werde essen", "wirst essen", "wird essen", "werden essen", "werdet essen", "werden essen"],
    konjII: ["äße", "äßest", "äße", "äßten", "äßet", "äßten"],
    imperative: ["iss!", "esst!", "essen Sie!"],
    examples: [{ de: "Ich esse gern Pizza.", en: "I like eating pizza." }]
  },
  {
    id: "trinken", de: "trinken", en: "to drink", level: "A1", irregular: true,
    present: ["trinke", "trinkst", "trinkt", "trinken", "trinkt", "trinken"],
    past: ["trank", "trankst", "trank", "tranken", "trankt", "tranken"],
    perfect: ["hat", "getrunken"],
    future: ["werde trinken", "wirst trinken", "wird trinken", "werden trinken", "werdet trinken", "werden trinken"],
    konjII: ["tränke", "tränkest", "tränke", "tränken", "tränket", "tränken"],
    imperative: ["trink!", "trinkt!", "trinken Sie!"],
    examples: [{ de: "Ich trinke Wasser.", en: "I am drinking water." }]
  },
  {
    id: "sehen", de: "sehen", en: "to see", level: "A1", irregular: true,
    present: ["sehe", "siehst", "sieht", "sehen", "seht", "sehen"],
    past: ["sah", "sahst", "sah", "sahen", "saht", "sahen"],
    perfect: ["hat", "gesehen"],
    future: ["werde sehen", "wirst sehen", "wird sehen", "werden sehen", "werdet sehen", "werden sehen"],
    konjII: ["sähe", "sähest", "sähe", "sähen", "sähet", "sähen"],
    imperative: ["sieh!", "seht!", "sehen Sie!"],
    examples: [{ de: "Ich sehe dich.", en: "I see you." }]
  },
  {
    id: "lesen", de: "lesen", en: "to read", level: "A1", irregular: true,
    present: ["lese", "liest", "liest", "lesen", "lest", "lesen"],
    past: ["las", "lasest", "las", "lasen", "last", "lasen"],
    perfect: ["hat", "gelesen"],
    future: ["werde lesen", "wirst lesen", "wird lesen", "werden lesen", "werdet lesen", "werden lesen"],
    konjII: ["läse", "läsest", "läse", "läsen", "läset", "läsen"],
    imperative: ["lies!", "lest!", "lesen Sie!"],
    examples: [{ de: "Ich lese ein Buch.", en: "I am reading a book." }]
  },
  // Add more as needed, skipping for now to get the bulk done
];

irregulars.forEach(v => {
  if (!existingIds.has(v.id)) {
    newVerbs.push(v);
    existingIds.add(v.id);
  }
});

window.VERB_DB.push(...newVerbs);

// Serialize back
let out = '// tenses.js — German Verb Conjugation & Grammar Database\\n\\n';
out += 'window.PRONOUNS = ' + JSON.stringify(window.PRONOUNS) + ';\\n\\n';
out += 'window.TENSE_META = ' + JSON.stringify(window.TENSE_META) + ';\\n\\n';
out += 'window.VERB_DB = ' + JSON.stringify(window.VERB_DB, null, 2) + ';\\n';

fs.writeFileSync(path, out.replace(/\\n/g, '\n'));
console.log(`Successfully added ${newVerbs.length} verbs. Total: ${window.VERB_DB.length}`);
