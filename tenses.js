// tenses.js — German Verb Conjugation & Grammar Database

window.PRONOUNS = ["ich","du","er/sie/es","wir","ihr","sie/Sie"];

window.TENSE_META = [{"key":"present","label":"Present","de":"Präsens","note":"Main tense for current & habitual actions"},{"key":"past","label":"Simple Past","de":"Präteritum","note":"Used in writing & for sein/haben/modals in speech"},{"key":"perfect","label":"Perfect","de":"Perfekt","note":"Main spoken past tense — sein/haben + Partizip II"},{"key":"future","label":"Future","de":"Futur I","note":"werden + infinitive — often replaced by present + time word"},{"key":"konjII","label":"Subjunctive II","de":"Konjunktiv II","note":"Polite requests, hypotheticals — ich wäre, ich hätte…"}];

window.VERB_DB = [
  {
    "id": "sein",
    "de": "sein",
    "en": "to be",
    "level": "A1",
    "irregular": true,
    "note": "The most important German verb. Highly irregular — must memorise. Used as auxiliary for motion/change-of-state verbs in Perfekt.",
    "present": [
      "bin",
      "bist",
      "ist",
      "sind",
      "seid",
      "sind"
    ],
    "past": [
      "war",
      "warst",
      "war",
      "waren",
      "wart",
      "waren"
    ],
    "perfect": [
      "ist",
      "gewesen"
    ],
    "future": [
      "werde sein",
      "wirst sein",
      "wird sein",
      "werden sein",
      "werdet sein",
      "werden sein"
    ],
    "konjII": [
      "wäre",
      "wärst",
      "wäre",
      "wären",
      "wärt",
      "wären"
    ],
    "imperative": [
      "sei!",
      "seid!",
      "seien Sie!"
    ],
    "examples": [
      {
        "de": "Ich bin müde.",
        "en": "I am tired."
      },
      {
        "de": "Wo bist du?",
        "en": "Where are you?"
      },
      {
        "de": "Das war eine gute Idee.",
        "en": "That was a good idea."
      },
      {
        "de": "Ich wäre gern dabei.",
        "en": "I would like to be there."
      }
    ]
  },
  {
    "id": "haben",
    "de": "haben",
    "en": "to have",
    "level": "A1",
    "irregular": true,
    "note": "Second key auxiliary. Used in Perfekt for most verbs. Also used to express states (hunger, pain, etc).",
    "present": [
      "habe",
      "hast",
      "hat",
      "haben",
      "habt",
      "haben"
    ],
    "past": [
      "hatte",
      "hattest",
      "hatte",
      "hatten",
      "hattet",
      "hatten"
    ],
    "perfect": [
      "hat",
      "gehabt"
    ],
    "future": [
      "werde haben",
      "wirst haben",
      "wird haben",
      "werden haben",
      "werdet haben",
      "werden haben"
    ],
    "konjII": [
      "hätte",
      "hättest",
      "hätte",
      "hätten",
      "hättet",
      "hätten"
    ],
    "imperative": [
      "hab!",
      "habt!",
      "haben Sie!"
    ],
    "examples": [
      {
        "de": "Ich habe Hunger.",
        "en": "I am hungry. (lit. I have hunger)"
      },
      {
        "de": "Hast du Zeit?",
        "en": "Do you have time?"
      },
      {
        "de": "Sie hat das Buch gelesen.",
        "en": "She has read the book."
      },
      {
        "de": "Ich hätte gern einen Kaffee.",
        "en": "I would like a coffee."
      }
    ]
  },
  {
    "id": "werden",
    "de": "werden",
    "en": "to become / will (future)",
    "level": "A1",
    "irregular": true,
    "note": "Doubles as a main verb ('to become') AND the future auxiliary. Also used for Passiv (passive voice) in A2.",
    "present": [
      "werde",
      "wirst",
      "wird",
      "werden",
      "werdet",
      "werden"
    ],
    "past": [
      "wurde",
      "wurdest",
      "wurde",
      "wurden",
      "wurdet",
      "wurden"
    ],
    "perfect": [
      "ist",
      "geworden"
    ],
    "future": [
      "werde werden",
      "wirst werden",
      "wird werden",
      "werden werden",
      "werdet werden",
      "werden werden"
    ],
    "konjII": [
      "würde",
      "würdest",
      "würde",
      "würden",
      "würdet",
      "würden"
    ],
    "imperative": [
      "werde!",
      "werdet!",
      "werden Sie!"
    ],
    "examples": [
      {
        "de": "Es wird kalt.",
        "en": "It is getting cold."
      },
      {
        "de": "Sie wird Ärztin.",
        "en": "She is becoming a doctor."
      },
      {
        "de": "Ich werde morgen kommen.",
        "en": "I will come tomorrow."
      },
      {
        "de": "Ich würde gern helfen.",
        "en": "I would like to help."
      }
    ]
  },
  {
    "id": "können",
    "de": "können",
    "en": "can / to be able to",
    "level": "A1",
    "irregular": true,
    "group": "modal",
    "note": "Modal verb — no -st in du-form in Präsens. Used with infinitive at end of sentence.",
    "present": [
      "kann",
      "kannst",
      "kann",
      "können",
      "könnt",
      "können"
    ],
    "past": [
      "konnte",
      "konntest",
      "konnte",
      "konnten",
      "konntet",
      "konnten"
    ],
    "perfect": [
      "hat",
      "gekonnt"
    ],
    "future": [
      "werde können",
      "wirst können",
      "wird können",
      "werden können",
      "werdet können",
      "werden können"
    ],
    "konjII": [
      "könnte",
      "könntest",
      "könnte",
      "könnten",
      "könntet",
      "könnten"
    ],
    "imperative": [
      "—",
      "—",
      "—"
    ],
    "examples": [
      {
        "de": "Ich kann gut Deutsch sprechen.",
        "en": "I can speak German well."
      },
      {
        "de": "Kannst du mir helfen?",
        "en": "Can you help me?"
      },
      {
        "de": "Als Kind konnte ich nicht schwimmen.",
        "en": "As a child I could not swim."
      },
      {
        "de": "Könnte ich bitte die Rechnung haben?",
        "en": "Could I have the bill please?"
      }
    ]
  },
  {
    "id": "müssen",
    "de": "müssen",
    "en": "must / have to",
    "level": "A1",
    "irregular": true,
    "group": "modal",
    "note": "Expresses necessity or compulsion. Konjunktiv II 'müsste' = should (softer than 'sollte').",
    "present": [
      "muss",
      "musst",
      "muss",
      "müssen",
      "müsst",
      "müssen"
    ],
    "past": [
      "musste",
      "musstest",
      "musste",
      "mussten",
      "musstet",
      "mussten"
    ],
    "perfect": [
      "hat",
      "gemusst"
    ],
    "future": [
      "werde müssen",
      "wirst müssen",
      "wird müssen",
      "werden müssen",
      "werdet müssen",
      "werden müssen"
    ],
    "konjII": [
      "müsste",
      "müsstest",
      "müsste",
      "müssten",
      "müsstet",
      "müssten"
    ],
    "imperative": [
      "—",
      "—",
      "—"
    ],
    "examples": [
      {
        "de": "Ich muss jetzt gehen.",
        "en": "I must go now."
      },
      {
        "de": "Du musst mehr schlafen.",
        "en": "You must sleep more."
      },
      {
        "de": "Er musste lange warten.",
        "en": "He had to wait a long time."
      },
      {
        "de": "Du müsstest mehr üben.",
        "en": "You should practise more."
      }
    ]
  },
  {
    "id": "wollen",
    "de": "wollen",
    "en": "to want to",
    "level": "A1",
    "irregular": true,
    "group": "modal",
    "note": "Expresses intention or desire. Stronger than 'möchten'. Do not confuse with 'möchten' which is more polite.",
    "present": [
      "will",
      "willst",
      "will",
      "wollen",
      "wollt",
      "wollen"
    ],
    "past": [
      "wollte",
      "wolltest",
      "wollte",
      "wollten",
      "wolltet",
      "wollten"
    ],
    "perfect": [
      "hat",
      "gewollt"
    ],
    "future": [
      "werde wollen",
      "wirst wollen",
      "wird wollen",
      "werden wollen",
      "werdet wollen",
      "werden wollen"
    ],
    "konjII": [
      "wollte",
      "wolltest",
      "wollte",
      "wollten",
      "wolltet",
      "wollten"
    ],
    "imperative": [
      "—",
      "—",
      "—"
    ],
    "examples": [
      {
        "de": "Ich will Arzt werden.",
        "en": "I want to become a doctor."
      },
      {
        "de": "Was willst du essen?",
        "en": "What do you want to eat?"
      },
      {
        "de": "Sie wollte nicht warten.",
        "en": "She didn't want to wait."
      }
    ]
  },
  {
    "id": "möchten",
    "de": "möchten",
    "en": "would like to",
    "level": "A1",
    "irregular": true,
    "group": "modal",
    "note": "Polite form of 'mögen' — the most common way to order or request in German. No present tense form 'ich möge' in everyday use.",
    "present": [
      "möchte",
      "möchtest",
      "möchte",
      "möchten",
      "möchtet",
      "möchten"
    ],
    "past": [
      "mochte",
      "mochtest",
      "mochte",
      "mochten",
      "mochtet",
      "mochten"
    ],
    "perfect": [
      "hat",
      "gemocht"
    ],
    "future": [
      "werde möchten",
      "—",
      "—",
      "—",
      "—",
      "—"
    ],
    "konjII": [
      "möchte",
      "möchtest",
      "möchte",
      "möchten",
      "möchtet",
      "möchten"
    ],
    "imperative": [
      "—",
      "—",
      "—"
    ],
    "examples": [
      {
        "de": "Ich möchte einen Kaffee, bitte.",
        "en": "I would like a coffee, please."
      },
      {
        "de": "Möchten Sie noch etwas?",
        "en": "Would you like anything else?"
      },
      {
        "de": "Sie möchte in Wien wohnen.",
        "en": "She would like to live in Vienna."
      }
    ]
  },
  {
    "id": "dürfen",
    "de": "dürfen",
    "en": "may / to be allowed to",
    "level": "A2",
    "irregular": true,
    "group": "modal",
    "note": "Used for permission. Negative 'darf nicht' = must not (stronger prohibition than 'nicht müssen').",
    "present": [
      "darf",
      "darfst",
      "darf",
      "dürfen",
      "dürft",
      "dürfen"
    ],
    "past": [
      "durfte",
      "durftest",
      "durfte",
      "durften",
      "durftet",
      "durften"
    ],
    "perfect": [
      "hat",
      "gedurft"
    ],
    "future": [
      "werde dürfen",
      "wirst dürfen",
      "wird dürfen",
      "werden dürfen",
      "werdet dürfen",
      "werden dürfen"
    ],
    "konjII": [
      "dürfte",
      "dürftest",
      "dürfte",
      "dürften",
      "dürftet",
      "dürften"
    ],
    "imperative": [
      "—",
      "—",
      "—"
    ],
    "examples": [
      {
        "de": "Darf ich hier rauchen?",
        "en": "May I smoke here?"
      },
      {
        "de": "Hier darf man nicht parken.",
        "en": "You must not park here."
      },
      {
        "de": "Als Kind durfte ich kein Eis essen.",
        "en": "As a child I was not allowed to eat ice cream."
      },
      {
        "de": "Dürfte ich kurz stören?",
        "en": "May I briefly interrupt?"
      }
    ]
  },
  {
    "id": "sollen",
    "de": "sollen",
    "en": "should / to be supposed to",
    "level": "A2",
    "irregular": true,
    "group": "modal",
    "note": "Expresses an external obligation or someone else's instruction. 'Du sollst' = you are supposed to (someone told you).",
    "present": [
      "soll",
      "sollst",
      "soll",
      "sollen",
      "sollt",
      "sollen"
    ],
    "past": [
      "sollte",
      "solltest",
      "sollte",
      "sollten",
      "solltet",
      "sollten"
    ],
    "perfect": [
      "hat",
      "gesollt"
    ],
    "future": [
      "werde sollen",
      "wirst sollen",
      "wird sollen",
      "werden sollen",
      "werdet sollen",
      "werden sollen"
    ],
    "konjII": [
      "sollte",
      "solltest",
      "sollte",
      "sollten",
      "solltet",
      "sollten"
    ],
    "imperative": [
      "—",
      "—",
      "—"
    ],
    "examples": [
      {
        "de": "Du sollst um 9 Uhr da sein.",
        "en": "You are supposed to be there at 9."
      },
      {
        "de": "Er soll sehr klug sein.",
        "en": "He is said to be very clever."
      },
      {
        "de": "Ich sollte mehr lernen.",
        "en": "I should study more."
      },
      {
        "de": "Was soll ich jetzt tun?",
        "en": "What am I supposed to do now?"
      }
    ]
  },
  {
    "id": "machen",
    "de": "machen",
    "en": "to make / do",
    "level": "A1",
    "irregular": false,
    "note": "Model regular -en verb. Pattern: stem + -e/-st/-t/-en/-t/-en. Partizip II: ge + stem + t.",
    "present": [
      "mache",
      "machst",
      "macht",
      "machen",
      "macht",
      "machen"
    ],
    "past": [
      "machte",
      "machtest",
      "machte",
      "machten",
      "machtet",
      "machten"
    ],
    "perfect": [
      "hat",
      "gemacht"
    ],
    "future": [
      "werde machen",
      "wirst machen",
      "wird machen",
      "werden machen",
      "werdet machen",
      "werden machen"
    ],
    "konjII": [
      "würde machen",
      "würdest machen",
      "würde machen",
      "würden machen",
      "würdet machen",
      "würden machen"
    ],
    "imperative": [
      "mach!",
      "macht!",
      "machen Sie!"
    ],
    "examples": [
      {
        "de": "Was machst du heute?",
        "en": "What are you doing today?"
      },
      {
        "de": "Ich mache Hausaufgaben.",
        "en": "I am doing homework."
      },
      {
        "de": "Er hat einen Fehler gemacht.",
        "en": "He made a mistake."
      },
      {
        "de": "Wir würden das gern machen.",
        "en": "We would like to do that."
      }
    ]
  },
  {
    "id": "wohnen",
    "de": "wohnen",
    "en": "to live / reside",
    "level": "A1",
    "irregular": false,
    "note": "Regular weak verb. Common in A1 — used to say where you live.",
    "present": [
      "wohne",
      "wohnst",
      "wohnt",
      "wohnen",
      "wohnt",
      "wohnen"
    ],
    "past": [
      "wohnte",
      "wohntest",
      "wohnte",
      "wohnten",
      "wohntet",
      "wohnten"
    ],
    "perfect": [
      "hat",
      "gewohnt"
    ],
    "future": [
      "werde wohnen",
      "wirst wohnen",
      "wird wohnen",
      "werden wohnen",
      "werdet wohnen",
      "werden wohnen"
    ],
    "konjII": [
      "würde wohnen",
      "würdest wohnen",
      "würde wohnen",
      "würden wohnen",
      "würdet wohnen",
      "würden wohnen"
    ],
    "imperative": [
      "wohn!",
      "wohnt!",
      "wohnen Sie!"
    ],
    "examples": [
      {
        "de": "Wo wohnst du?",
        "en": "Where do you live?"
      },
      {
        "de": "Ich wohne in Berlin.",
        "en": "I live in Berlin."
      },
      {
        "de": "Früher habe ich in München gewohnt.",
        "en": "I used to live in Munich."
      },
      {
        "de": "Ich würde gern in der Stadt wohnen.",
        "en": "I would like to live in the city."
      }
    ]
  },
  {
    "id": "arbeiten",
    "de": "arbeiten",
    "en": "to work",
    "level": "A1",
    "irregular": false,
    "note": "Stem ends in -t → add extra -e before endings: du arbeit-E-st. Watch for this pattern!",
    "present": [
      "arbeite",
      "arbeitest",
      "arbeitet",
      "arbeiten",
      "arbeitet",
      "arbeiten"
    ],
    "past": [
      "arbeitete",
      "arbeitetest",
      "arbeitete",
      "arbeiteten",
      "arbeitetet",
      "arbeiteten"
    ],
    "perfect": [
      "hat",
      "gearbeitet"
    ],
    "future": [
      "werde arbeiten",
      "wirst arbeiten",
      "wird arbeiten",
      "werden arbeiten",
      "werdet arbeiten",
      "werden arbeiten"
    ],
    "konjII": [
      "würde arbeiten",
      "würdest arbeiten",
      "würde arbeiten",
      "würden arbeiten",
      "würdet arbeiten",
      "würden arbeiten"
    ],
    "imperative": [
      "arbeite!",
      "arbeitet!",
      "arbeiten Sie!"
    ],
    "examples": [
      {
        "de": "Ich arbeite als Lehrer.",
        "en": "I work as a teacher."
      },
      {
        "de": "Er arbeitet von 8 bis 17 Uhr.",
        "en": "He works from 8 to 5."
      },
      {
        "de": "Sie hat lange in Berlin gearbeitet.",
        "en": "She worked in Berlin for a long time."
      }
    ]
  },
  {
    "id": "lernen",
    "de": "lernen",
    "en": "to learn / study",
    "level": "A1",
    "irregular": false,
    "note": "Regular weak verb. 'lernen' = to learn/study in general; 'studieren' = to study at university.",
    "present": [
      "lerne",
      "lernst",
      "lernt",
      "lernen",
      "lernt",
      "lernen"
    ],
    "past": [
      "lernte",
      "lerntest",
      "lernte",
      "lernten",
      "lerntet",
      "lernten"
    ],
    "perfect": [
      "hat",
      "gelernt"
    ],
    "future": [
      "werde lernen",
      "wirst lernen",
      "wird lernen",
      "werden lernen",
      "werdet lernen",
      "werden lernen"
    ],
    "konjII": [
      "würde lernen",
      "würdest lernen",
      "würde lernen",
      "würden lernen",
      "würdet lernen",
      "würden lernen"
    ],
    "imperative": [
      "lern!",
      "lernt!",
      "lernen Sie!"
    ],
    "examples": [
      {
        "de": "Ich lerne Deutsch.",
        "en": "I am learning German."
      },
      {
        "de": "Lernst du für die Prüfung?",
        "en": "Are you studying for the exam?"
      },
      {
        "de": "Sie hat viel gelernt.",
        "en": "She has learned a lot."
      }
    ]
  },
  {
    "id": "kaufen",
    "de": "kaufen",
    "en": "to buy",
    "level": "A1",
    "irregular": false,
    "note": "Regular weak verb. Common in shopping situations.",
    "present": [
      "kaufe",
      "kaufst",
      "kauft",
      "kaufen",
      "kauft",
      "kaufen"
    ],
    "past": [
      "kaufte",
      "kauftest",
      "kaufte",
      "kauften",
      "kauftet",
      "kauften"
    ],
    "perfect": [
      "hat",
      "gekauft"
    ],
    "future": [
      "werde kaufen",
      "wirst kaufen",
      "wird kaufen",
      "werden kaufen",
      "werdet kaufen",
      "werden kaufen"
    ],
    "konjII": [
      "würde kaufen",
      "würdest kaufen",
      "würde kaufen",
      "würden kaufen",
      "würdet kaufen",
      "würden kaufen"
    ],
    "imperative": [
      "kauf!",
      "kauft!",
      "kaufen Sie!"
    ],
    "examples": [
      {
        "de": "Ich kaufe ein neues Buch.",
        "en": "I am buying a new book."
      },
      {
        "de": "Was hast du gekauft?",
        "en": "What did you buy?"
      },
      {
        "de": "Ich würde gern ein Auto kaufen.",
        "en": "I would like to buy a car."
      }
    ]
  },
  {
    "id": "spielen",
    "de": "spielen",
    "en": "to play",
    "level": "A1",
    "irregular": false,
    "note": "Regular weak verb. Used for sports, instruments, and games.",
    "present": [
      "spiele",
      "spielst",
      "spielt",
      "spielen",
      "spielt",
      "spielen"
    ],
    "past": [
      "spielte",
      "spieltest",
      "spielte",
      "spielten",
      "spieltet",
      "spielten"
    ],
    "perfect": [
      "hat",
      "gespielt"
    ],
    "future": [
      "werde spielen",
      "wirst spielen",
      "wird spielen",
      "werden spielen",
      "werdet spielen",
      "werden spielen"
    ],
    "konjII": [
      "würde spielen",
      "würdest spielen",
      "würde spielen",
      "würden spielen",
      "würdet spielen",
      "würden spielen"
    ],
    "imperative": [
      "spiel!",
      "spielt!",
      "spielen Sie!"
    ],
    "examples": [
      {
        "de": "Ich spiele Gitarre.",
        "en": "I play guitar."
      },
      {
        "de": "Die Kinder spielen draußen.",
        "en": "The children are playing outside."
      },
      {
        "de": "Er hat früher Fußball gespielt.",
        "en": "He used to play football."
      }
    ]
  },
  {
    "id": "brauchen",
    "de": "brauchen",
    "en": "to need",
    "level": "A1",
    "irregular": false,
    "note": "Regular. In negation 'braucht nicht' + zu + infinitive = doesn't have to. Common alternative to 'nicht müssen'.",
    "present": [
      "brauche",
      "brauchst",
      "braucht",
      "brauchen",
      "braucht",
      "brauchen"
    ],
    "past": [
      "brauchte",
      "brauchtest",
      "brauchte",
      "brauchten",
      "brauchtet",
      "brauchten"
    ],
    "perfect": [
      "hat",
      "gebraucht"
    ],
    "future": [
      "werde brauchen",
      "wirst brauchen",
      "wird brauchen",
      "werden brauchen",
      "werdet brauchen",
      "werden brauchen"
    ],
    "konjII": [
      "würde brauchen",
      "würdest brauchen",
      "würde brauchen",
      "würden brauchen",
      "würdet brauchen",
      "würden brauchen"
    ],
    "imperative": [
      "brauch!",
      "braucht!",
      "brauchen Sie!"
    ],
    "examples": [
      {
        "de": "Ich brauche deine Hilfe.",
        "en": "I need your help."
      },
      {
        "de": "Was brauchst du?",
        "en": "What do you need?"
      },
      {
        "de": "Du brauchst nicht zu kommen.",
        "en": "You don't have to come."
      }
    ]
  },
  {
    "id": "gehen",
    "de": "gehen",
    "en": "to go",
    "level": "A1",
    "irregular": true,
    "note": "Strong verb. Perfekt with 'sein' (movement). Very common — essential for A1.",
    "present": [
      "gehe",
      "gehst",
      "geht",
      "gehen",
      "geht",
      "gehen"
    ],
    "past": [
      "ging",
      "gingst",
      "ging",
      "gingen",
      "gingt",
      "gingen"
    ],
    "perfect": [
      "ist",
      "gegangen"
    ],
    "future": [
      "werde gehen",
      "wirst gehen",
      "wird gehen",
      "werden gehen",
      "werdet gehen",
      "werden gehen"
    ],
    "konjII": [
      "würde gehen",
      "würdest gehen",
      "würde gehen",
      "würden gehen",
      "würdet gehen",
      "würden gehen"
    ],
    "imperative": [
      "geh!",
      "geht!",
      "gehen Sie!"
    ],
    "examples": [
      {
        "de": "Ich gehe in die Schule.",
        "en": "I am going to school."
      },
      {
        "de": "Wohin gehst du?",
        "en": "Where are you going?"
      },
      {
        "de": "Er ist ins Kino gegangen.",
        "en": "He went to the cinema."
      },
      {
        "de": "Wie geht es dir?",
        "en": "How are you? (lit. How goes it for you?)"
      }
    ]
  },
  {
    "id": "kommen",
    "de": "kommen",
    "en": "to come",
    "level": "A1",
    "irregular": true,
    "note": "Strong verb. Perfekt with 'sein'. Also used for origin: 'Ich komme aus...'",
    "present": [
      "komme",
      "kommst",
      "kommt",
      "kommen",
      "kommt",
      "kommen"
    ],
    "past": [
      "kam",
      "kamst",
      "kam",
      "kamen",
      "kamt",
      "kamen"
    ],
    "perfect": [
      "ist",
      "gekommen"
    ],
    "future": [
      "werde kommen",
      "wirst kommen",
      "wird kommen",
      "werden kommen",
      "werdet kommen",
      "werden kommen"
    ],
    "konjII": [
      "würde kommen",
      "würdest kommen",
      "würde kommen",
      "würden kommen",
      "würdet kommen",
      "würden kommen"
    ],
    "imperative": [
      "komm!",
      "kommt!",
      "kommen Sie!"
    ],
    "examples": [
      {
        "de": "Ich komme aus der Schweiz.",
        "en": "I come from Switzerland."
      },
      {
        "de": "Wann kommt der Zug?",
        "en": "When does the train come?"
      },
      {
        "de": "Er ist spät gekommen.",
        "en": "He came late."
      }
    ]
  },
  {
    "id": "fahren",
    "de": "fahren",
    "en": "to drive / travel",
    "level": "A1",
    "irregular": true,
    "stem_change": "a→ä",
    "note": "Strong verb with vowel change (a→ä) in du/er forms. Perfekt with 'sein'. Used for all transport.",
    "present": [
      "fahre",
      "fährst",
      "fährt",
      "fahren",
      "fahrt",
      "fahren"
    ],
    "past": [
      "fuhr",
      "fuhrst",
      "fuhr",
      "fuhren",
      "fuhrt",
      "fuhren"
    ],
    "perfect": [
      "ist",
      "gefahren"
    ],
    "future": [
      "werde fahren",
      "wirst fahren",
      "wird fahren",
      "werden fahren",
      "werdet fahren",
      "werden fahren"
    ],
    "konjII": [
      "würde fahren",
      "würdest fahren",
      "würde fahren",
      "würden fahren",
      "würdet fahren",
      "würden fahren"
    ],
    "imperative": [
      "fahr!",
      "fahrt!",
      "fahren Sie!"
    ],
    "examples": [
      {
        "de": "Ich fahre mit dem Zug.",
        "en": "I travel by train."
      },
      {
        "de": "Er fährt zu schnell!",
        "en": "He drives too fast!"
      },
      {
        "de": "Wir sind nach Berlin gefahren.",
        "en": "We travelled to Berlin."
      }
    ]
  },
  {
    "id": "fliegen",
    "de": "fliegen",
    "en": "to fly",
    "level": "A2",
    "irregular": true,
    "note": "Strong verb. Perfekt with 'sein'. Common for travel.",
    "present": [
      "fliege",
      "fliegst",
      "fliegt",
      "fliegen",
      "fliegt",
      "fliegen"
    ],
    "past": [
      "flog",
      "flogst",
      "flog",
      "flogen",
      "flogt",
      "flogen"
    ],
    "perfect": [
      "ist",
      "geflogen"
    ],
    "future": [
      "werde fliegen",
      "wirst fliegen",
      "wird fliegen",
      "werden fliegen",
      "werdet fliegen",
      "werden fliegen"
    ],
    "konjII": [
      "würde fliegen",
      "würdest fliegen",
      "würde fliegen",
      "würden fliegen",
      "würdet fliegen",
      "würden fliegen"
    ],
    "imperative": [
      "flieg!",
      "fliegt!",
      "fliegen Sie!"
    ],
    "examples": [
      {
        "de": "Wir fliegen nach Spanien.",
        "en": "We are flying to Spain."
      },
      {
        "de": "Das Flugzeug fliegt um 10 Uhr.",
        "en": "The plane flies at 10 o'clock."
      },
      {
        "de": "Ich bin noch nie geflogen.",
        "en": "I have never flown."
      }
    ]
  },
  {
    "id": "sprechen",
    "de": "sprechen",
    "en": "to speak",
    "level": "A1",
    "irregular": true,
    "stem_change": "e→i",
    "note": "Strong verb with vowel change e→i in du/er forms. Very common — essential for language learning.",
    "present": [
      "spreche",
      "sprichst",
      "spricht",
      "sprechen",
      "sprecht",
      "sprechen"
    ],
    "past": [
      "sprach",
      "sprachst",
      "sprach",
      "sprachen",
      "spracht",
      "sprachen"
    ],
    "perfect": [
      "hat",
      "gesprochen"
    ],
    "future": [
      "werde sprechen",
      "wirst sprechen",
      "wird sprechen",
      "werden sprechen",
      "werdet sprechen",
      "werden sprechen"
    ],
    "konjII": [
      "würde sprechen",
      "würdest sprechen",
      "würde sprechen",
      "würden sprechen",
      "würdet sprechen",
      "würden sprechen"
    ],
    "imperative": [
      "sprich!",
      "sprecht!",
      "sprechen Sie!"
    ],
    "examples": [
      {
        "de": "Sprechen Sie Deutsch?",
        "en": "Do you speak German?"
      },
      {
        "de": "Er spricht drei Sprachen.",
        "en": "He speaks three languages."
      },
      {
        "de": "Wir haben über das Problem gesprochen.",
        "en": "We spoke about the problem."
      },
      {
        "de": "Bitte sprechen Sie langsamer.",
        "en": "Please speak more slowly."
      }
    ]
  },
  {
    "id": "schreiben",
    "de": "schreiben",
    "en": "to write",
    "level": "A1",
    "irregular": true,
    "note": "Strong verb. Partizip II: geschrieben. Common in emails, letters, exams.",
    "present": [
      "schreibe",
      "schreibst",
      "schreibt",
      "schreiben",
      "schreibt",
      "schreiben"
    ],
    "past": [
      "schrieb",
      "schriebst",
      "schrieb",
      "schrieben",
      "schriebt",
      "schrieben"
    ],
    "perfect": [
      "hat",
      "geschrieben"
    ],
    "future": [
      "werde schreiben",
      "wirst schreiben",
      "wird schreiben",
      "werden schreiben",
      "werdet schreiben",
      "werden schreiben"
    ],
    "konjII": [
      "würde schreiben",
      "würdest schreiben",
      "würde schreiben",
      "würden schreiben",
      "würdet schreiben",
      "würden schreiben"
    ],
    "imperative": [
      "schreib!",
      "schreibt!",
      "schreiben Sie!"
    ],
    "examples": [
      {
        "de": "Ich schreibe eine E-Mail.",
        "en": "I am writing an email."
      },
      {
        "de": "Hast du den Brief geschrieben?",
        "en": "Have you written the letter?"
      },
      {
        "de": "Sie schreibt sehr schön.",
        "en": "She writes very nicely."
      }
    ]
  },
  {
    "id": "lesen",
    "de": "lesen",
    "en": "to read",
    "level": "A1",
    "irregular": true,
    "stem_change": "e→ie",
    "note": "Strong verb with vowel change e→ie in du/er. Partizip II: gelesen.",
    "present": [
      "lese",
      "liest",
      "liest",
      "lesen",
      "lest",
      "lesen"
    ],
    "past": [
      "las",
      "last",
      "las",
      "lasen",
      "last",
      "lasen"
    ],
    "perfect": [
      "hat",
      "gelesen"
    ],
    "future": [
      "werde lesen",
      "wirst lesen",
      "wird lesen",
      "werden lesen",
      "werdet lesen",
      "werden lesen"
    ],
    "konjII": [
      "würde lesen",
      "würdest lesen",
      "würde lesen",
      "würden lesen",
      "würdet lesen",
      "würden lesen"
    ],
    "imperative": [
      "lies!",
      "lest!",
      "lesen Sie!"
    ],
    "examples": [
      {
        "de": "Ich lese jeden Abend.",
        "en": "I read every evening."
      },
      {
        "de": "Sie liest sehr schnell.",
        "en": "She reads very fast."
      },
      {
        "de": "Hast du das Buch gelesen?",
        "en": "Have you read the book?"
      }
    ]
  },
  {
    "id": "essen",
    "de": "essen",
    "en": "to eat",
    "level": "A1",
    "irregular": true,
    "stem_change": "e→i",
    "note": "Strong verb e→i (du isst, er isst — same form!). Partizip II: gegessen.",
    "present": [
      "esse",
      "isst",
      "isst",
      "essen",
      "esst",
      "essen"
    ],
    "past": [
      "aß",
      "aßt",
      "aß",
      "aßen",
      "aßt",
      "aßen"
    ],
    "perfect": [
      "hat",
      "gegessen"
    ],
    "future": [
      "werde essen",
      "wirst essen",
      "wird essen",
      "werden essen",
      "werdet essen",
      "werden essen"
    ],
    "konjII": [
      "würde essen",
      "würdest essen",
      "würde essen",
      "würden essen",
      "würdet essen",
      "würden essen"
    ],
    "imperative": [
      "iss!",
      "esst!",
      "essen Sie!"
    ],
    "examples": [
      {
        "de": "Was isst du zum Frühstück?",
        "en": "What do you eat for breakfast?"
      },
      {
        "de": "Wir essen gemeinsam.",
        "en": "We eat together."
      },
      {
        "de": "Er hat nichts gegessen.",
        "en": "He ate nothing."
      }
    ]
  },
  {
    "id": "trinken",
    "de": "trinken",
    "en": "to drink",
    "level": "A1",
    "irregular": true,
    "note": "Strong verb. Partizip II: getrunken. Very common in restaurants and daily life.",
    "present": [
      "trinke",
      "trinkst",
      "trinkt",
      "trinken",
      "trinkt",
      "trinken"
    ],
    "past": [
      "trank",
      "trankst",
      "trank",
      "tranken",
      "trankt",
      "tranken"
    ],
    "perfect": [
      "hat",
      "getrunken"
    ],
    "future": [
      "werde trinken",
      "wirst trinken",
      "wird trinken",
      "werden trinken",
      "werdet trinken",
      "werden trinken"
    ],
    "konjII": [
      "würde trinken",
      "würdest trinken",
      "würde trinken",
      "würden trinken",
      "würdet trinken",
      "würden trinken"
    ],
    "imperative": [
      "trink!",
      "trinkt!",
      "trinken Sie!"
    ],
    "examples": [
      {
        "de": "Ich trinke gern Kaffee.",
        "en": "I like to drink coffee."
      },
      {
        "de": "Was möchtest du trinken?",
        "en": "What would you like to drink?"
      },
      {
        "de": "Er hat zu viel getrunken.",
        "en": "He drank too much."
      }
    ]
  },
  {
    "id": "schlafen",
    "de": "schlafen",
    "en": "to sleep",
    "level": "A1",
    "irregular": true,
    "stem_change": "a→ä",
    "note": "Strong verb a→ä in du/er forms. Partizip II: geschlafen.",
    "present": [
      "schlafe",
      "schläfst",
      "schläft",
      "schlafen",
      "schlaft",
      "schlafen"
    ],
    "past": [
      "schlief",
      "schliefst",
      "schlief",
      "schliefen",
      "schlieft",
      "schliefen"
    ],
    "perfect": [
      "hat",
      "geschlafen"
    ],
    "future": [
      "werde schlafen",
      "wirst schlafen",
      "wird schlafen",
      "werden schlafen",
      "werdet schlafen",
      "werden schlafen"
    ],
    "konjII": [
      "würde schlafen",
      "würdest schlafen",
      "würde schlafen",
      "würden schlafen",
      "würdet schlafen",
      "würden schlafen"
    ],
    "imperative": [
      "schlaf!",
      "schlaft!",
      "schlafen Sie!"
    ],
    "examples": [
      {
        "de": "Ich schlafe acht Stunden.",
        "en": "I sleep eight hours."
      },
      {
        "de": "Das Kind schläft schon.",
        "en": "The child is already asleep."
      },
      {
        "de": "Haben Sie gut geschlafen?",
        "en": "Did you sleep well?"
      }
    ]
  },
  {
    "id": "helfen",
    "de": "helfen",
    "en": "to help",
    "level": "A1",
    "irregular": true,
    "stem_change": "e→i",
    "note": "Strong verb e→i in du/er. Takes dative: 'Ich helfe DIR' (not 'dich').",
    "present": [
      "helfe",
      "hilfst",
      "hilft",
      "helfen",
      "helft",
      "helfen"
    ],
    "past": [
      "half",
      "halfst",
      "half",
      "halfen",
      "halft",
      "halfen"
    ],
    "perfect": [
      "hat",
      "geholfen"
    ],
    "future": [
      "werde helfen",
      "wirst helfen",
      "wird helfen",
      "werden helfen",
      "werdet helfen",
      "werden helfen"
    ],
    "konjII": [
      "würde helfen",
      "würdest helfen",
      "würde helfen",
      "würden helfen",
      "würdet helfen",
      "würden helfen"
    ],
    "imperative": [
      "hilf!",
      "helft!",
      "helfen Sie!"
    ],
    "examples": [
      {
        "de": "Können Sie mir helfen?",
        "en": "Can you help me?"
      },
      {
        "de": "Er hilft ihr bei den Hausaufgaben.",
        "en": "He helps her with her homework."
      },
      {
        "de": "Sie hat mir sehr geholfen.",
        "en": "She helped me a lot."
      }
    ]
  },
  {
    "id": "finden",
    "de": "finden",
    "en": "to find / to think (opinion)",
    "level": "A1",
    "irregular": true,
    "note": "Strong verb. Also used for opinions: 'Ich finde das schön' = I think that's nice.",
    "present": [
      "finde",
      "findest",
      "findet",
      "finden",
      "findet",
      "finden"
    ],
    "past": [
      "fand",
      "fandst",
      "fand",
      "fanden",
      "fandt",
      "fanden"
    ],
    "perfect": [
      "hat",
      "gefunden"
    ],
    "future": [
      "werde finden",
      "wirst finden",
      "wird finden",
      "werden finden",
      "werdet finden",
      "werden finden"
    ],
    "konjII": [
      "würde finden",
      "würdest finden",
      "würde finden",
      "würden finden",
      "würdet finden",
      "würden finden"
    ],
    "imperative": [
      "find!",
      "findet!",
      "finden Sie!"
    ],
    "examples": [
      {
        "de": "Ich finde meinen Schlüssel nicht.",
        "en": "I can't find my key."
      },
      {
        "de": "Wie findest du das?",
        "en": "What do you think of that?"
      },
      {
        "de": "Ich finde das sehr interessant.",
        "en": "I find that very interesting."
      },
      {
        "de": "Er hat eine Lösung gefunden.",
        "en": "He found a solution."
      }
    ]
  },
  {
    "id": "geben",
    "de": "geben",
    "en": "to give",
    "level": "A1",
    "irregular": true,
    "stem_change": "e→i",
    "note": "Strong verb e→i. Takes two objects: dative (to whom) + accusative (what). Also in 'es gibt' = there is/are.",
    "present": [
      "gebe",
      "gibst",
      "gibt",
      "geben",
      "gebt",
      "geben"
    ],
    "past": [
      "gab",
      "gabst",
      "gab",
      "gaben",
      "gabt",
      "gaben"
    ],
    "perfect": [
      "hat",
      "gegeben"
    ],
    "future": [
      "werde geben",
      "wirst geben",
      "wird geben",
      "werden geben",
      "werdet geben",
      "werden geben"
    ],
    "konjII": [
      "würde geben",
      "würdest geben",
      "würde geben",
      "würden geben",
      "würdet geben",
      "würden geben"
    ],
    "imperative": [
      "gib!",
      "gebt!",
      "geben Sie!"
    ],
    "examples": [
      {
        "de": "Gib mir bitte das Buch.",
        "en": "Please give me the book."
      },
      {
        "de": "Es gibt viele Möglichkeiten.",
        "en": "There are many possibilities."
      },
      {
        "de": "Er hat ihr ein Geschenk gegeben.",
        "en": "He gave her a gift."
      }
    ]
  },
  {
    "id": "nehmen",
    "de": "nehmen",
    "en": "to take",
    "level": "A1",
    "irregular": true,
    "stem_change": "e→i",
    "note": "Strong verb with extra irregularity: du nimmst, er nimmt (double -mm-). Very common.",
    "present": [
      "nehme",
      "nimmst",
      "nimmt",
      "nehmen",
      "nehmt",
      "nehmen"
    ],
    "past": [
      "nahm",
      "nahmst",
      "nahm",
      "nahmen",
      "nahmt",
      "nahmen"
    ],
    "perfect": [
      "hat",
      "genommen"
    ],
    "future": [
      "werde nehmen",
      "wirst nehmen",
      "wird nehmen",
      "werden nehmen",
      "werdet nehmen",
      "werden nehmen"
    ],
    "konjII": [
      "würde nehmen",
      "würdest nehmen",
      "würde nehmen",
      "würden nehmen",
      "würdet nehmen",
      "würden nehmen"
    ],
    "imperative": [
      "nimm!",
      "nehmt!",
      "nehmen Sie!"
    ],
    "examples": [
      {
        "de": "Ich nehme den Bus.",
        "en": "I take the bus."
      },
      {
        "de": "Nimmst du Milch in den Kaffee?",
        "en": "Do you take milk in your coffee?"
      },
      {
        "de": "Sie hat das letzte Stück Kuchen genommen.",
        "en": "She took the last piece of cake."
      }
    ]
  },
  {
    "id": "wissen",
    "de": "wissen",
    "en": "to know (facts)",
    "level": "A1",
    "irregular": true,
    "note": "Mixed verb — irregular Präsens (like modal), regular Präteritum. 'Wissen' = know a fact; 'kennen' = know a person/place.",
    "present": [
      "weiß",
      "weißt",
      "weiß",
      "wissen",
      "wisst",
      "wissen"
    ],
    "past": [
      "wusste",
      "wusstest",
      "wusste",
      "wussten",
      "wusstet",
      "wussten"
    ],
    "perfect": [
      "hat",
      "gewusst"
    ],
    "future": [
      "werde wissen",
      "wirst wissen",
      "wird wissen",
      "werden wissen",
      "werdet wissen",
      "werden wissen"
    ],
    "konjII": [
      "würde wissen",
      "würdest wissen",
      "würde wissen",
      "würden wissen",
      "würdet wissen",
      "würden wissen"
    ],
    "imperative": [
      "wisse!",
      "wisst!",
      "wissen Sie!"
    ],
    "examples": [
      {
        "de": "Ich weiß nicht.",
        "en": "I don't know."
      },
      {
        "de": "Weißt du, wo er ist?",
        "en": "Do you know where he is?"
      },
      {
        "de": "Sie wusste die Antwort.",
        "en": "She knew the answer."
      }
    ]
  },
  {
    "id": "denken",
    "de": "denken",
    "en": "to think",
    "level": "A2",
    "irregular": true,
    "note": "Mixed verb: regular endings but stem changes in past: denk→dach.",
    "present": [
      "denke",
      "denkst",
      "denkt",
      "denken",
      "denkt",
      "denken"
    ],
    "past": [
      "dachte",
      "dachtest",
      "dachte",
      "dachten",
      "dachtet",
      "dachten"
    ],
    "perfect": [
      "hat",
      "gedacht"
    ],
    "future": [
      "werde denken",
      "wirst denken",
      "wird denken",
      "werden denken",
      "werdet denken",
      "werden denken"
    ],
    "konjII": [
      "würde denken",
      "würdest denken",
      "würde denken",
      "würden denken",
      "würdet denken",
      "würden denken"
    ],
    "imperative": [
      "denk!",
      "denkt!",
      "denken Sie!"
    ],
    "examples": [
      {
        "de": "Ich denke, das ist richtig.",
        "en": "I think that is correct."
      },
      {
        "de": "Was denkst du darüber?",
        "en": "What do you think about it?"
      },
      {
        "de": "Ich habe an dich gedacht.",
        "en": "I was thinking of you."
      }
    ]
  },
  {
    "id": "verstehen",
    "de": "verstehen",
    "en": "to understand",
    "level": "A1",
    "irregular": true,
    "note": "Strong verb. Partizip II: verstanden. Essential for language learning context.",
    "present": [
      "verstehe",
      "verstehst",
      "versteht",
      "verstehen",
      "versteht",
      "verstehen"
    ],
    "past": [
      "verstand",
      "verstandst",
      "verstand",
      "verstanden",
      "verstandet",
      "verstanden"
    ],
    "perfect": [
      "hat",
      "verstanden"
    ],
    "future": [
      "werde verstehen",
      "wirst verstehen",
      "wird verstehen",
      "werden verstehen",
      "werdet verstehen",
      "werden verstehen"
    ],
    "konjII": [
      "würde verstehen",
      "würdest verstehen",
      "würde verstehen",
      "würden verstehen",
      "würdet verstehen",
      "würden verstehen"
    ],
    "imperative": [
      "versteh!",
      "versteht!",
      "verstehen Sie!"
    ],
    "examples": [
      {
        "de": "Ich verstehe das nicht.",
        "en": "I don't understand that."
      },
      {
        "de": "Verstehst du mich?",
        "en": "Do you understand me?"
      },
      {
        "de": "Er hat alles verstanden.",
        "en": "He understood everything."
      },
      {
        "de": "Ich habe Sie leider nicht verstanden.",
        "en": "Unfortunately I didn't understand you."
      }
    ]
  },
  {
    "id": "anfangen",
    "de": "anfangen",
    "en": "to begin / start",
    "level": "A2",
    "irregular": true,
    "stem_change": "a→ä",
    "separable": true,
    "prefix": "an",
    "note": "Separable verb: prefix 'an' splits off → 'Ich fange an'. In Perfekt, 'ge' goes between prefix and stem: angefangen.",
    "present": [
      "fange an",
      "fängst an",
      "fängt an",
      "fangen an",
      "fangt an",
      "fangen an"
    ],
    "past": [
      "fing an",
      "fingst an",
      "fing an",
      "fingen an",
      "fingt an",
      "fingen an"
    ],
    "perfect": [
      "hat",
      "angefangen"
    ],
    "future": [
      "werde anfangen",
      "wirst anfangen",
      "wird anfangen",
      "werden anfangen",
      "werdet anfangen",
      "werden anfangen"
    ],
    "konjII": [
      "würde anfangen",
      "würdest anfangen",
      "würde anfangen",
      "würden anfangen",
      "würdet anfangen",
      "würden anfangen"
    ],
    "imperative": [
      "fang an!",
      "fangt an!",
      "fangen Sie an!"
    ],
    "examples": [
      {
        "de": "Wann fängt der Kurs an?",
        "en": "When does the course start?"
      },
      {
        "de": "Ich fange morgen an.",
        "en": "I start tomorrow."
      },
      {
        "de": "Der Film hat um 20 Uhr angefangen.",
        "en": "The film started at 8 pm."
      }
    ]
  },
  {
    "id": "aufhören",
    "de": "aufhören",
    "en": "to stop / finish",
    "level": "A2",
    "irregular": false,
    "separable": true,
    "prefix": "auf",
    "note": "Separable. Often used with zu + infinitive: 'Hör auf zu rauchen!' = Stop smoking!",
    "present": [
      "höre auf",
      "hörst auf",
      "hört auf",
      "hören auf",
      "hört auf",
      "hören auf"
    ],
    "past": [
      "hörte auf",
      "hörtest auf",
      "hörte auf",
      "hörten auf",
      "hörtet auf",
      "hörten auf"
    ],
    "perfect": [
      "hat",
      "aufgehört"
    ],
    "future": [
      "werde aufhören",
      "wirst aufhören",
      "wird aufhören",
      "werden aufhören",
      "werdet aufhören",
      "werden aufhören"
    ],
    "konjII": [
      "würde aufhören",
      "würdest aufhören",
      "würde aufhören",
      "würden aufhören",
      "würdet aufhören",
      "würden aufhören"
    ],
    "imperative": [
      "hör auf!",
      "hört auf!",
      "hören Sie auf!"
    ],
    "examples": [
      {
        "de": "Hör auf zu reden!",
        "en": "Stop talking!"
      },
      {
        "de": "Es hat aufgehört zu regnen.",
        "en": "It has stopped raining."
      },
      {
        "de": "Ich höre mit dem Rauchen auf.",
        "en": "I am stopping smoking."
      }
    ]
  },
  {
    "id": "anrufen",
    "de": "anrufen",
    "en": "to call (by phone)",
    "level": "A2",
    "irregular": true,
    "separable": true,
    "prefix": "an",
    "note": "Separable. 'rufe an' in present. Essential for A2 phone/communication topics.",
    "present": [
      "rufe an",
      "rufst an",
      "ruft an",
      "rufen an",
      "ruft an",
      "rufen an"
    ],
    "past": [
      "rief an",
      "riefst an",
      "rief an",
      "riefen an",
      "rieft an",
      "riefen an"
    ],
    "perfect": [
      "hat",
      "angerufen"
    ],
    "future": [
      "werde anrufen",
      "wirst anrufen",
      "wird anrufen",
      "werden anrufen",
      "werdet anrufen",
      "werden anrufen"
    ],
    "konjII": [
      "würde anrufen",
      "würdest anrufen",
      "würde anrufen",
      "würden anrufen",
      "würdet anrufen",
      "würden anrufen"
    ],
    "imperative": [
      "ruf an!",
      "ruft an!",
      "rufen Sie an!"
    ],
    "examples": [
      {
        "de": "Ich rufe dich morgen an.",
        "en": "I will call you tomorrow."
      },
      {
        "de": "Hat er angerufen?",
        "en": "Did he call?"
      },
      {
        "de": "Kannst du mich bitte anrufen?",
        "en": "Can you please call me?"
      }
    ]
  },
  {
    "id": "einkaufen",
    "de": "einkaufen",
    "en": "to go shopping / buy",
    "level": "A1",
    "irregular": false,
    "separable": true,
    "prefix": "ein",
    "note": "Separable. 'Ich kaufe ein' = I am shopping. Very common in daily life.",
    "present": [
      "kaufe ein",
      "kaufst ein",
      "kauft ein",
      "kaufen ein",
      "kauft ein",
      "kaufen ein"
    ],
    "past": [
      "kaufte ein",
      "kauftest ein",
      "kaufte ein",
      "kauften ein",
      "kauftet ein",
      "kauften ein"
    ],
    "perfect": [
      "hat",
      "eingekauft"
    ],
    "future": [
      "werde einkaufen",
      "wirst einkaufen",
      "wird einkaufen",
      "werden einkaufen",
      "werdet einkaufen",
      "werden einkaufen"
    ],
    "konjII": [
      "würde einkaufen",
      "würdest einkaufen",
      "würde einkaufen",
      "würden einkaufen",
      "würdet einkaufen",
      "würden einkaufen"
    ],
    "imperative": [
      "kauf ein!",
      "kauft ein!",
      "kaufen Sie ein!"
    ],
    "examples": [
      {
        "de": "Ich kaufe im Supermarkt ein.",
        "en": "I am shopping at the supermarket."
      },
      {
        "de": "Hast du schon eingekauft?",
        "en": "Have you already done the shopping?"
      },
      {
        "de": "Wir kaufen samstags ein.",
        "en": "We go shopping on Saturdays."
      }
    ]
  },
  {
    "id": "umziehen",
    "de": "umziehen",
    "en": "to move (house) / change clothes",
    "level": "A2",
    "irregular": true,
    "separable": true,
    "prefix": "um",
    "note": "Separable. 'umziehen' = move house (sein) OR change clothes (haben) — context decides!",
    "present": [
      "ziehe um",
      "ziehst um",
      "zieht um",
      "ziehen um",
      "zieht um",
      "ziehen um"
    ],
    "past": [
      "zog um",
      "zogst um",
      "zog um",
      "zogen um",
      "zogt um",
      "zogen um"
    ],
    "perfect": [
      "ist/hat",
      "umgezogen"
    ],
    "future": [
      "werde umziehen",
      "wirst umziehen",
      "wird umziehen",
      "werden umziehen",
      "werdet umziehen",
      "werden umziehen"
    ],
    "konjII": [
      "würde umziehen",
      "würdest umziehen",
      "würde umziehen",
      "würden umziehen",
      "würdet umziehen",
      "würden umziehen"
    ],
    "imperative": [
      "zieh um!",
      "zieht um!",
      "ziehen Sie um!"
    ],
    "examples": [
      {
        "de": "Wir ziehen nächsten Monat um.",
        "en": "We are moving next month."
      },
      {
        "de": "Ich ziehe mich schnell um.",
        "en": "I am quickly getting changed."
      },
      {
        "de": "Sie ist nach Berlin umgezogen.",
        "en": "She moved to Berlin."
      }
    ]
  },
  {
    "id": "aufstehen",
    "de": "aufstehen",
    "en": "to get up / stand up",
    "level": "A1",
    "irregular": true,
    "separable": true,
    "prefix": "auf",
    "note": "Separable. Perfekt with 'sein'. Common daily routine verb.",
    "present": [
      "stehe auf",
      "stehst auf",
      "steht auf",
      "stehen auf",
      "steht auf",
      "stehen auf"
    ],
    "past": [
      "stand auf",
      "standest auf",
      "stand auf",
      "standen auf",
      "standet auf",
      "standen auf"
    ],
    "perfect": [
      "ist",
      "aufgestanden"
    ],
    "future": [
      "werde aufstehen",
      "wirst aufstehen",
      "wird aufstehen",
      "werden aufstehen",
      "werdet aufstehen",
      "werden aufstehen"
    ],
    "konjII": [
      "würde aufstehen",
      "würdest aufstehen",
      "würde aufstehen",
      "würden aufstehen",
      "würdet aufstehen",
      "würden aufstehen"
    ],
    "imperative": [
      "steh auf!",
      "steht auf!",
      "stehen Sie auf!"
    ],
    "examples": [
      {
        "de": "Ich stehe jeden Tag um 7 Uhr auf.",
        "en": "I get up every day at 7 o'clock."
      },
      {
        "de": "Wann bist du aufgestanden?",
        "en": "When did you get up?"
      },
      {
        "de": "Steh bitte auf!",
        "en": "Please stand up!"
      }
    ]
  },
  {
    "id": "ausgehen",
    "de": "ausgehen",
    "en": "to go out",
    "level": "A2",
    "irregular": true,
    "separable": true,
    "prefix": "aus",
    "note": "Separable. Perfekt with 'sein'. Used for going out socially.",
    "present": [
      "gehe aus",
      "gehst aus",
      "geht aus",
      "gehen aus",
      "geht aus",
      "gehen aus"
    ],
    "past": [
      "ging aus",
      "gingst aus",
      "ging aus",
      "gingen aus",
      "gingt aus",
      "gingen aus"
    ],
    "perfect": [
      "ist",
      "ausgegangen"
    ],
    "future": [
      "werde ausgehen",
      "wirst ausgehen",
      "wird ausgehen",
      "werden ausgehen",
      "werdet ausgehen",
      "werden ausgehen"
    ],
    "konjII": [
      "würde ausgehen",
      "würdest ausgehen",
      "würde ausgehen",
      "würden ausgehen",
      "würdet ausgehen",
      "würden ausgehen"
    ],
    "imperative": [
      "geh aus!",
      "geht aus!",
      "gehen Sie aus!"
    ],
    "examples": [
      {
        "de": "Wir gehen heute Abend aus.",
        "en": "We are going out this evening."
      },
      {
        "de": "Bist du gestern ausgegangen?",
        "en": "Did you go out yesterday?"
      },
      {
        "de": "Er geht jedes Wochenende aus.",
        "en": "He goes out every weekend."
      }
    ]
  },
  {
    "id": "sich_freuen",
    "de": "sich freuen",
    "en": "to be happy / look forward to",
    "level": "A2",
    "irregular": false,
    "reflexive": true,
    "note": "Reflexive verb. 'sich freuen auf' + Akk = look forward to. 'sich freuen über' + Akk = be happy about.",
    "present": [
      "freue mich",
      "freust dich",
      "freut sich",
      "freuen uns",
      "freut euch",
      "freuen sich"
    ],
    "past": [
      "freute mich",
      "freutest dich",
      "freute sich",
      "freuten uns",
      "freutet euch",
      "freuten sich"
    ],
    "perfect": [
      "hat",
      "sich gefreut"
    ],
    "future": [
      "werde mich freuen",
      "wirst dich freuen",
      "wird sich freuen",
      "werden uns freuen",
      "werdet euch freuen",
      "werden sich freuen"
    ],
    "konjII": [
      "würde mich freuen",
      "würdest dich freuen",
      "würde sich freuen",
      "würden uns freuen",
      "würdet euch freuen",
      "würden sich freuen"
    ],
    "imperative": [
      "freu dich!",
      "freut euch!",
      "freuen Sie sich!"
    ],
    "examples": [
      {
        "de": "Ich freue mich auf den Urlaub.",
        "en": "I am looking forward to the holiday."
      },
      {
        "de": "Sie freut sich über das Geschenk.",
        "en": "She is happy about the gift."
      },
      {
        "de": "Wir haben uns sehr gefreut.",
        "en": "We were very happy."
      }
    ]
  },
  {
    "id": "sich_vorstellen",
    "de": "sich vorstellen",
    "en": "to introduce oneself / imagine",
    "level": "A1",
    "irregular": false,
    "reflexive": true,
    "note": "Reflexive. 'Ich stelle mich vor' = I introduce myself. Also non-reflexive: 'Stell dir vor!' = Imagine!",
    "present": [
      "stelle mich vor",
      "stellst dich vor",
      "stellt sich vor",
      "stellen uns vor",
      "stellt euch vor",
      "stellen sich vor"
    ],
    "past": [
      "stellte mich vor",
      "stelltest dich vor",
      "stellte sich vor",
      "stellten uns vor",
      "stelltet euch vor",
      "stellten sich vor"
    ],
    "perfect": [
      "hat",
      "sich vorgestellt"
    ],
    "future": [
      "werde mich vorstellen",
      "wirst dich vorstellen",
      "wird sich vorstellen",
      "werden uns vorstellen",
      "werdet euch vorstellen",
      "werden sich vorstellen"
    ],
    "konjII": [
      "würde mich vorstellen",
      "würdest dich vorstellen",
      "würde sich vorstellen",
      "würden uns vorstellen",
      "würdet euch vorstellen",
      "würden sich vorstellen"
    ],
    "imperative": [
      "stell dich vor!",
      "stellt euch vor!",
      "stellen Sie sich vor!"
    ],
    "examples": [
      {
        "de": "Ich stelle mich kurz vor.",
        "en": "I'll briefly introduce myself."
      },
      {
        "de": "Stell dir vor — er hat gewonnen!",
        "en": "Imagine — he won!"
      },
      {
        "de": "Haben Sie sich schon vorgestellt?",
        "en": "Have you already introduced yourself?"
      }
    ]
  },
  {
    "id": "lassen",
    "de": "lassen",
    "en": "to let / leave",
    "level": "A2",
    "irregular": true,
    "stem_change": "a→ä",
    "note": "Strong verb (a→ä). Used like 'to let' (Lass uns gehen) or 'to leave behind' (Ich lasse die Jacke hier).",
    "present": [
      "lasse",
      "lässt",
      "lässt",
      "lassen",
      "lasst",
      "lassen"
    ],
    "past": [
      "ließ",
      "ließt",
      "ließ",
      "ließen",
      "ließt",
      "ließen"
    ],
    "perfect": [
      "hat",
      "gelassen"
    ],
    "future": [
      "werde lassen",
      "wirst lassen",
      "wird lassen",
      "werden lassen",
      "werdet lassen",
      "werden lassen"
    ],
    "konjII": [
      "ließe",
      "ließest",
      "ließe",
      "ließen",
      "ließet",
      "ließen"
    ],
    "imperative": [
      "lass!",
      "lasst!",
      "lassen Sie!"
    ],
    "examples": [
      {
        "de": "Lass mich in Ruhe!",
        "en": "Leave me alone!"
      },
      {
        "de": "Wo hast du das Auto gelassen?",
        "en": "Where did you leave the car?"
      },
      {
        "de": "Lassen Sie uns anfangen.",
        "en": "Let us begin."
      }
    ]
  },
  {
    "id": "bringen",
    "de": "bringen",
    "en": "to bring",
    "level": "A1",
    "irregular": true,
    "note": "Mixed verb: regular endings but stem change in past + perfect (bring → brach).",
    "present": [
      "bringe",
      "bringst",
      "bringt",
      "bringen",
      "bringt",
      "bringen"
    ],
    "past": [
      "brachte",
      "brachtest",
      "brachte",
      "brachten",
      "brachtet",
      "brachten"
    ],
    "perfect": [
      "hat",
      "gebracht"
    ],
    "future": [
      "werde bringen",
      "wirst bringen",
      "wird bringen",
      "werden bringen",
      "werdet bringen",
      "werden bringen"
    ],
    "konjII": [
      "brächte",
      "brächtest",
      "brächte",
      "brächten",
      "brächtet",
      "brächten"
    ],
    "imperative": [
      "bring!",
      "bringt!",
      "bringen Sie!"
    ],
    "examples": [
      {
        "de": "Kannst du mir einen Kaffee bringen?",
        "en": "Can you bring me a coffee?"
      },
      {
        "de": "Er hat ein schönes Geschenk gebracht.",
        "en": "He brought a nice gift."
      }
    ]
  },
  {
    "id": "kennen",
    "de": "kennen",
    "en": "to know (person/place)",
    "level": "A1",
    "irregular": true,
    "note": "Mixed verb. Use 'kennen' for being acquainted with people or places, 'wissen' for facts.",
    "present": [
      "kenne",
      "kennst",
      "kennt",
      "kennen",
      "kennt",
      "kennen"
    ],
    "past": [
      "kannte",
      "kanntest",
      "kannte",
      "kannten",
      "kanntet",
      "kannten"
    ],
    "perfect": [
      "hat",
      "gekannt"
    ],
    "future": [
      "werde kennen",
      "wirst kennen",
      "wird kennen",
      "werden kennen",
      "werdet kennen",
      "werden kennen"
    ],
    "konjII": [
      "kennte",
      "kenntest",
      "kennte",
      "kennten",
      "kenntet",
      "kennten"
    ],
    "imperative": [
      "kenne!",
      "kennt!",
      "kennen Sie!"
    ],
    "examples": [
      {
        "de": "Kennst du diesen Mann?",
        "en": "Do you know this man?"
      },
      {
        "de": "Ich kenne den Weg.",
        "en": "I know the way."
      }
    ]
  },
  {
    "id": "vergessen",
    "de": "vergessen",
    "en": "to forget",
    "level": "A2",
    "irregular": true,
    "stem_change": "e→i",
    "note": "Strong verb (e→i). The prefix 'ver-' is inseparable. Past participle has NO 'ge-' prefix: vergessen.",
    "present": [
      "vergesse",
      "vergisst",
      "vergisst",
      "vergessen",
      "vergesst",
      "vergessen"
    ],
    "past": [
      "vergaß",
      "vergaßt",
      "vergaß",
      "vergaßen",
      "vergaßt",
      "vergaßen"
    ],
    "perfect": [
      "hat",
      "vergessen"
    ],
    "future": [
      "werde vergessen",
      "wirst vergessen",
      "wird vergessen",
      "werden vergessen",
      "werdet vergessen",
      "werden vergessen"
    ],
    "konjII": [
      "vergäße",
      "vergäßest",
      "vergäße",
      "vergäßen",
      "vergäßet",
      "vergäßen"
    ],
    "imperative": [
      "vergiss!",
      "vergesst!",
      "vergessen Sie!"
    ],
    "examples": [
      {
        "de": "Vergiss deinen Schlüssel nicht!",
        "en": "Don't forget your key!"
      },
      {
        "de": "Ich habe alles vergessen.",
        "en": "I forgot everything."
      },
      {
        "de": "Man vergisst schnell.",
        "en": "One forgets quickly."
      }
    ]
  },
  {
    "id": "stehen",
    "de": "stehen",
    "en": "to stand",
    "level": "A1",
    "irregular": true,
    "note": "Irregular verb. Uses 'hat' in Perfekt (unlike 'gehen'). Very common — also means 'to be located' for objects.",
    "present": [
      "stehe",
      "stehst",
      "steht",
      "stehen",
      "steht",
      "stehen"
    ],
    "past": [
      "stand",
      "standest",
      "stand",
      "standen",
      "standet",
      "standen"
    ],
    "perfect": [
      "hat",
      "gestanden"
    ],
    "future": [
      "werde stehen",
      "wirst stehen",
      "wird stehen",
      "werden stehen",
      "werdet stehen",
      "werden stehen"
    ],
    "konjII": [
      "stünde",
      "stündest",
      "stünde",
      "stünden",
      "stündet",
      "stünden"
    ],
    "imperative": [
      "steh!",
      "steht!",
      "stehen Sie!"
    ],
    "examples": [
      {
        "de": "Ich stehe vor der Tür.",
        "en": "I am standing in front of the door."
      },
      {
        "de": "Der Tisch steht in der Ecke.",
        "en": "The table is (standing) in the corner."
      }
    ]
  },
  {
    "id": "sitzen",
    "de": "sitzen",
    "en": "to sit",
    "level": "A1",
    "irregular": true,
    "note": "Irregular. Uses 'hat' in Perfekt. Describes a static position (sitting). To sit DOWN = sich setzen.",
    "present": [
      "sitze",
      "sitzt",
      "sitzt",
      "sitzen",
      "sitzt",
      "sitzen"
    ],
    "past": [
      "saß",
      "saßest",
      "saß",
      "saßen",
      "saßt",
      "saßen"
    ],
    "perfect": [
      "hat",
      "gesessen"
    ],
    "future": [
      "werde sitzen",
      "wirst sitzen",
      "wird sitzen",
      "werden sitzen",
      "werdet sitzen",
      "werden sitzen"
    ],
    "konjII": [
      "säße",
      "säßest",
      "säße",
      "säßen",
      "säßet",
      "säßen"
    ],
    "imperative": [
      "sitz!",
      "sitzt!",
      "sitzen Sie!"
    ],
    "examples": [
      {
        "de": "Ich sitze am Tisch.",
        "en": "I am sitting at the table."
      },
      {
        "de": "Er hat den ganzen Tag gesessen.",
        "en": "He sat the whole day."
      }
    ]
  },
  {
    "id": "liegen",
    "de": "liegen",
    "en": "to lie / be located",
    "level": "A1",
    "irregular": true,
    "note": "Irregular. Uses 'hat' in Perfekt. Describes a horizontal position. To lay DOWN = sich legen.",
    "present": [
      "liege",
      "liegst",
      "liegt",
      "liegen",
      "liegt",
      "liegen"
    ],
    "past": [
      "lag",
      "lagst",
      "lag",
      "lagen",
      "lagt",
      "lagen"
    ],
    "perfect": [
      "hat",
      "gelegen"
    ],
    "future": [
      "werde liegen",
      "wirst liegen",
      "wird liegen",
      "werden liegen",
      "werdet liegen",
      "werden liegen"
    ],
    "konjII": [
      "läge",
      "lägest",
      "läge",
      "lägen",
      "läget",
      "lägen"
    ],
    "imperative": [
      "lieg!",
      "liegt!",
      "liegen Sie!"
    ],
    "examples": [
      {
        "de": "Das Buch liegt auf dem Tisch.",
        "en": "The book is lying on the table."
      },
      {
        "de": "Berlin liegt in Deutschland.",
        "en": "Berlin is located in Germany."
      }
    ]
  },
  {
    "id": "sagen",
    "de": "sagen",
    "en": "to say",
    "level": "A1",
    "irregular": false,
    "present": [
      "sage",
      "sagst",
      "sagt",
      "sagen",
      "sagt",
      "sagen"
    ],
    "past": [
      "sagte",
      "sagtest",
      "sagte",
      "sagten",
      "sagtet",
      "sagten"
    ],
    "perfect": [
      "hat",
      "gesagt"
    ],
    "future": [
      "werde sagen",
      "wirst sagen",
      "wird sagen",
      "werden sagen",
      "werdet sagen",
      "werden sagen"
    ],
    "konjII": [
      "würde sagen",
      "würdest sagen",
      "würde sagen",
      "würden sagen",
      "würdet sagen",
      "würden sagen"
    ],
    "imperative": [
      "sag!",
      "sagt!",
      "sagen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte sagen.",
        "en": "I want to to say."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "hören",
    "de": "hören",
    "en": "to hear",
    "level": "A1",
    "irregular": false,
    "present": [
      "höre",
      "hörst",
      "hört",
      "hören",
      "hört",
      "hören"
    ],
    "past": [
      "hörte",
      "hörtest",
      "hörte",
      "hörten",
      "hörtet",
      "hörten"
    ],
    "perfect": [
      "hat",
      "gehört"
    ],
    "future": [
      "werde hören",
      "wirst hören",
      "wird hören",
      "werden hören",
      "werdet hören",
      "werden hören"
    ],
    "konjII": [
      "würde hören",
      "würdest hören",
      "würde hören",
      "würden hören",
      "würdet hören",
      "würden hören"
    ],
    "imperative": [
      "hör!",
      "hört!",
      "hören Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte hören.",
        "en": "I want to to hear."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "zeigen",
    "de": "zeigen",
    "en": "to show",
    "level": "A1",
    "irregular": false,
    "present": [
      "zeige",
      "zeigst",
      "zeigt",
      "zeigen",
      "zeigt",
      "zeigen"
    ],
    "past": [
      "zeigte",
      "zeigtest",
      "zeigte",
      "zeigten",
      "zeigtet",
      "zeigten"
    ],
    "perfect": [
      "hat",
      "gezeigt"
    ],
    "future": [
      "werde zeigen",
      "wirst zeigen",
      "wird zeigen",
      "werden zeigen",
      "werdet zeigen",
      "werden zeigen"
    ],
    "konjII": [
      "würde zeigen",
      "würdest zeigen",
      "würde zeigen",
      "würden zeigen",
      "würdet zeigen",
      "würden zeigen"
    ],
    "imperative": [
      "zeig!",
      "zeigt!",
      "zeigen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte zeigen.",
        "en": "I want to to show."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "lachen",
    "de": "lachen",
    "en": "to laugh",
    "level": "A1",
    "irregular": false,
    "present": [
      "lache",
      "lachst",
      "lacht",
      "lachen",
      "lacht",
      "lachen"
    ],
    "past": [
      "lachte",
      "lachtest",
      "lachte",
      "lachten",
      "lachtet",
      "lachten"
    ],
    "perfect": [
      "hat",
      "gelacht"
    ],
    "future": [
      "werde lachen",
      "wirst lachen",
      "wird lachen",
      "werden lachen",
      "werdet lachen",
      "werden lachen"
    ],
    "konjII": [
      "würde lachen",
      "würdest lachen",
      "würde lachen",
      "würden lachen",
      "würdet lachen",
      "würden lachen"
    ],
    "imperative": [
      "lach!",
      "lacht!",
      "lachen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte lachen.",
        "en": "I want to to laugh."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "leben",
    "de": "leben",
    "en": "to live",
    "level": "A1",
    "irregular": false,
    "present": [
      "lebe",
      "lebst",
      "lebt",
      "leben",
      "lebt",
      "leben"
    ],
    "past": [
      "lebte",
      "lebtest",
      "lebte",
      "lebten",
      "lebtet",
      "lebten"
    ],
    "perfect": [
      "hat",
      "gelebt"
    ],
    "future": [
      "werde leben",
      "wirst leben",
      "wird leben",
      "werden leben",
      "werdet leben",
      "werden leben"
    ],
    "konjII": [
      "würde leben",
      "würdest leben",
      "würde leben",
      "würden leben",
      "würdet leben",
      "würden leben"
    ],
    "imperative": [
      "leb!",
      "lebt!",
      "leben Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte leben.",
        "en": "I want to to live."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "suchen",
    "de": "suchen",
    "en": "to search",
    "level": "A1",
    "irregular": false,
    "present": [
      "suche",
      "suchst",
      "sucht",
      "suchen",
      "sucht",
      "suchen"
    ],
    "past": [
      "suchte",
      "suchtest",
      "suchte",
      "suchten",
      "suchtet",
      "suchten"
    ],
    "perfect": [
      "hat",
      "gesucht"
    ],
    "future": [
      "werde suchen",
      "wirst suchen",
      "wird suchen",
      "werden suchen",
      "werdet suchen",
      "werden suchen"
    ],
    "konjII": [
      "würde suchen",
      "würdest suchen",
      "würde suchen",
      "würden suchen",
      "würdet suchen",
      "würden suchen"
    ],
    "imperative": [
      "such!",
      "sucht!",
      "suchen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte suchen.",
        "en": "I want to to search."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "kochen",
    "de": "kochen",
    "en": "to cook",
    "level": "A1",
    "irregular": false,
    "present": [
      "koche",
      "kochst",
      "kocht",
      "kochen",
      "kocht",
      "kochen"
    ],
    "past": [
      "kochte",
      "kochtest",
      "kochte",
      "kochten",
      "kochtet",
      "kochten"
    ],
    "perfect": [
      "hat",
      "gekocht"
    ],
    "future": [
      "werde kochen",
      "wirst kochen",
      "wird kochen",
      "werden kochen",
      "werdet kochen",
      "werden kochen"
    ],
    "konjII": [
      "würde kochen",
      "würdest kochen",
      "würde kochen",
      "würden kochen",
      "würdet kochen",
      "würden kochen"
    ],
    "imperative": [
      "koch!",
      "kocht!",
      "kochen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte kochen.",
        "en": "I want to to cook."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "lieben",
    "de": "lieben",
    "en": "to love",
    "level": "A1",
    "irregular": false,
    "present": [
      "liebe",
      "liebst",
      "liebt",
      "lieben",
      "liebt",
      "lieben"
    ],
    "past": [
      "liebte",
      "liebtest",
      "liebte",
      "liebten",
      "liebtet",
      "liebten"
    ],
    "perfect": [
      "hat",
      "geliebt"
    ],
    "future": [
      "werde lieben",
      "wirst lieben",
      "wird lieben",
      "werden lieben",
      "werdet lieben",
      "werden lieben"
    ],
    "konjII": [
      "würde lieben",
      "würdest lieben",
      "würde lieben",
      "würden lieben",
      "würdet lieben",
      "würden lieben"
    ],
    "imperative": [
      "lieb!",
      "liebt!",
      "lieben Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte lieben.",
        "en": "I want to to love."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "glauben",
    "de": "glauben",
    "en": "to believe",
    "level": "A1",
    "irregular": false,
    "present": [
      "glaube",
      "glaubst",
      "glaubt",
      "glauben",
      "glaubt",
      "glauben"
    ],
    "past": [
      "glaubte",
      "glaubtest",
      "glaubte",
      "glaubten",
      "glaubtet",
      "glaubten"
    ],
    "perfect": [
      "hat",
      "geglaubt"
    ],
    "future": [
      "werde glauben",
      "wirst glauben",
      "wird glauben",
      "werden glauben",
      "werdet glauben",
      "werden glauben"
    ],
    "konjII": [
      "würde glauben",
      "würdest glauben",
      "würde glauben",
      "würden glauben",
      "würdet glauben",
      "würden glauben"
    ],
    "imperative": [
      "glaub!",
      "glaubt!",
      "glauben Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte glauben.",
        "en": "I want to to believe."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "hoffen",
    "de": "hoffen",
    "en": "to hope",
    "level": "A1",
    "irregular": false,
    "present": [
      "hoffe",
      "hoffst",
      "hofft",
      "hoffen",
      "hofft",
      "hoffen"
    ],
    "past": [
      "hoffte",
      "hofftest",
      "hoffte",
      "hofften",
      "hofftet",
      "hofften"
    ],
    "perfect": [
      "hat",
      "gehofft"
    ],
    "future": [
      "werde hoffen",
      "wirst hoffen",
      "wird hoffen",
      "werden hoffen",
      "werdet hoffen",
      "werden hoffen"
    ],
    "konjII": [
      "würde hoffen",
      "würdest hoffen",
      "würde hoffen",
      "würden hoffen",
      "würdet hoffen",
      "würden hoffen"
    ],
    "imperative": [
      "hoff!",
      "hofft!",
      "hoffen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte hoffen.",
        "en": "I want to to hope."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "tanzen",
    "de": "tanzen",
    "en": "to dance",
    "level": "A1",
    "irregular": false,
    "present": [
      "tanze",
      "tanzst",
      "tanzt",
      "tanzen",
      "tanzt",
      "tanzen"
    ],
    "past": [
      "tanzte",
      "tanztest",
      "tanzte",
      "tanzten",
      "tanztet",
      "tanzten"
    ],
    "perfect": [
      "hat",
      "getanzt"
    ],
    "future": [
      "werde tanzen",
      "wirst tanzen",
      "wird tanzen",
      "werden tanzen",
      "werdet tanzen",
      "werden tanzen"
    ],
    "konjII": [
      "würde tanzen",
      "würdest tanzen",
      "würde tanzen",
      "würden tanzen",
      "würdet tanzen",
      "würden tanzen"
    ],
    "imperative": [
      "tanz!",
      "tanzt!",
      "tanzen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte tanzen.",
        "en": "I want to to dance."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "reisen",
    "de": "reisen",
    "en": "to travel",
    "level": "A1",
    "irregular": false,
    "present": [
      "reise",
      "reisst",
      "reist",
      "reisen",
      "reist",
      "reisen"
    ],
    "past": [
      "reiste",
      "reistest",
      "reiste",
      "reisten",
      "reistet",
      "reisten"
    ],
    "perfect": [
      "ist",
      "gereist"
    ],
    "future": [
      "werde reisen",
      "wirst reisen",
      "wird reisen",
      "werden reisen",
      "werdet reisen",
      "werden reisen"
    ],
    "konjII": [
      "würde reisen",
      "würdest reisen",
      "würde reisen",
      "würden reisen",
      "würdet reisen",
      "würden reisen"
    ],
    "imperative": [
      "reis!",
      "reist!",
      "reisen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte reisen.",
        "en": "I want to to travel."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'.\n\nNote: This verb uses 'sein' as its auxiliary in the Perfekt because it indicates a change of position or state."
  },
  {
    "id": "warten",
    "de": "warten",
    "en": "to wait",
    "level": "A1",
    "irregular": false,
    "present": [
      "warte",
      "wartest",
      "wartet",
      "warten",
      "wartet",
      "warten"
    ],
    "past": [
      "wartete",
      "wartetest",
      "wartete",
      "warteten",
      "wartetet",
      "warteten"
    ],
    "perfect": [
      "hat",
      "gewartet"
    ],
    "future": [
      "werde warten",
      "wirst warten",
      "wird warten",
      "werden warten",
      "werdet warten",
      "werden warten"
    ],
    "konjII": [
      "würde warten",
      "würdest warten",
      "würde warten",
      "würden warten",
      "würdet warten",
      "würden warten"
    ],
    "imperative": [
      "warte!",
      "wartet!",
      "warten Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte warten.",
        "en": "I want to to wait."
      }
    ],
    "note": "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'."
  },
  {
    "id": "schmecken",
    "de": "schmecken",
    "en": "to taste",
    "level": "A1",
    "irregular": false,
    "present": [
      "schmecke",
      "schmeckst",
      "schmeckt",
      "schmecken",
      "schmeckt",
      "schmecken"
    ],
    "past": [
      "schmeckte",
      "schmecktest",
      "schmeckte",
      "schmeckten",
      "schmecktet",
      "schmeckten"
    ],
    "perfect": [
      "hat",
      "geschmeckt"
    ],
    "future": [
      "werde schmecken",
      "wirst schmecken",
      "wird schmecken",
      "werden schmecken",
      "werdet schmecken",
      "werden schmecken"
    ],
    "konjII": [
      "würde schmecken",
      "würdest schmecken",
      "würde schmecken",
      "würden schmecken",
      "würdet schmecken",
      "würden schmecken"
    ],
    "imperative": [
      "schmeck!",
      "schmeckt!",
      "schmecken Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte schmecken.",
        "en": "I want to to taste."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "danken",
    "de": "danken",
    "en": "to thank",
    "level": "A1",
    "irregular": false,
    "present": [
      "danke",
      "dankst",
      "dankt",
      "danken",
      "dankt",
      "danken"
    ],
    "past": [
      "dankte",
      "danktest",
      "dankte",
      "dankten",
      "danktet",
      "dankten"
    ],
    "perfect": [
      "hat",
      "gedankt"
    ],
    "future": [
      "werde danken",
      "wirst danken",
      "wird danken",
      "werden danken",
      "werdet danken",
      "werden danken"
    ],
    "konjII": [
      "würde danken",
      "würdest danken",
      "würde danken",
      "würden danken",
      "würdet danken",
      "würden danken"
    ],
    "imperative": [
      "dank!",
      "dankt!",
      "danken Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte danken.",
        "en": "I want to to thank."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "feiern",
    "de": "feiern",
    "en": "to celebrate",
    "level": "A1",
    "irregular": false,
    "present": [
      "feiere",
      "feierst",
      "feiert",
      "feiern",
      "feiert",
      "feiern"
    ],
    "past": [
      "feierte",
      "feiertest",
      "feierte",
      "feierten",
      "feiertet",
      "feierten"
    ],
    "perfect": [
      "hat",
      "gefeiert"
    ],
    "future": [
      "werde feiern",
      "wirst feiern",
      "wird feiern",
      "werden feiern",
      "werdet feiern",
      "werden feiern"
    ],
    "konjII": [
      "würde feiern",
      "würdest feiern",
      "würde feiern",
      "würden feiern",
      "würdet feiern",
      "würden feiern"
    ],
    "imperative": [
      "feier!",
      "feiert!",
      "feiern Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte feiern.",
        "en": "I want to to celebrate."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "putzen",
    "de": "putzen",
    "en": "to clean",
    "level": "A1",
    "irregular": false,
    "present": [
      "putze",
      "putzst",
      "putzt",
      "putzen",
      "putzt",
      "putzen"
    ],
    "past": [
      "putzte",
      "putztest",
      "putzte",
      "putzten",
      "putztet",
      "putzten"
    ],
    "perfect": [
      "hat",
      "geputzt"
    ],
    "future": [
      "werde putzen",
      "wirst putzen",
      "wird putzen",
      "werden putzen",
      "werdet putzen",
      "werden putzen"
    ],
    "konjII": [
      "würde putzen",
      "würdest putzen",
      "würde putzen",
      "würden putzen",
      "würdet putzen",
      "würden putzen"
    ],
    "imperative": [
      "putz!",
      "putzt!",
      "putzen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte putzen.",
        "en": "I want to to clean."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "kosten",
    "de": "kosten",
    "en": "to cost",
    "level": "A1",
    "irregular": false,
    "present": [
      "koste",
      "kostest",
      "kostet",
      "kosten",
      "kostet",
      "kosten"
    ],
    "past": [
      "kostete",
      "kostetest",
      "kostete",
      "kosteten",
      "kostetet",
      "kosteten"
    ],
    "perfect": [
      "hat",
      "gekostet"
    ],
    "future": [
      "werde kosten",
      "wirst kosten",
      "wird kosten",
      "werden kosten",
      "werdet kosten",
      "werden kosten"
    ],
    "konjII": [
      "würde kosten",
      "würdest kosten",
      "würde kosten",
      "würden kosten",
      "würdet kosten",
      "würden kosten"
    ],
    "imperative": [
      "koste!",
      "kostet!",
      "kosten Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte kosten.",
        "en": "I want to to cost."
      }
    ],
    "note": "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'."
  },
  {
    "id": "passen",
    "de": "passen",
    "en": "to fit",
    "level": "A1",
    "irregular": false,
    "present": [
      "passe",
      "passst",
      "passt",
      "passen",
      "passt",
      "passen"
    ],
    "past": [
      "passte",
      "passtest",
      "passte",
      "passten",
      "passtet",
      "passten"
    ],
    "perfect": [
      "hat",
      "gepasst"
    ],
    "future": [
      "werde passen",
      "wirst passen",
      "wird passen",
      "werden passen",
      "werdet passen",
      "werden passen"
    ],
    "konjII": [
      "würde passen",
      "würdest passen",
      "würde passen",
      "würden passen",
      "würdet passen",
      "würden passen"
    ],
    "imperative": [
      "pass!",
      "passt!",
      "passen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte passen.",
        "en": "I want to to fit."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "erklären",
    "de": "erklären",
    "en": "to explain",
    "level": "A2",
    "irregular": false,
    "present": [
      "erkläre",
      "erklärst",
      "erklärt",
      "erklären",
      "erklärt",
      "erklären"
    ],
    "past": [
      "erklärte",
      "erklärtest",
      "erklärte",
      "erklärten",
      "erklärtet",
      "erklärten"
    ],
    "perfect": [
      "hat",
      "erklärt"
    ],
    "future": [
      "werde erklären",
      "wirst erklären",
      "wird erklären",
      "werden erklären",
      "werdet erklären",
      "werden erklären"
    ],
    "konjII": [
      "würde erklären",
      "würdest erklären",
      "würde erklären",
      "würden erklären",
      "würdet erklären",
      "würden erklären"
    ],
    "imperative": [
      "erklär!",
      "erklärt!",
      "erklären Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte erklären.",
        "en": "I want to to explain."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "verkaufen",
    "de": "verkaufen",
    "en": "to sell",
    "level": "A2",
    "irregular": false,
    "present": [
      "verkaufe",
      "verkaufst",
      "verkauft",
      "verkaufen",
      "verkauft",
      "verkaufen"
    ],
    "past": [
      "verkaufte",
      "verkauftest",
      "verkaufte",
      "verkauften",
      "verkauftet",
      "verkauften"
    ],
    "perfect": [
      "hat",
      "verkauft"
    ],
    "future": [
      "werde verkaufen",
      "wirst verkaufen",
      "wird verkaufen",
      "werden verkaufen",
      "werdet verkaufen",
      "werden verkaufen"
    ],
    "konjII": [
      "würde verkaufen",
      "würdest verkaufen",
      "würde verkaufen",
      "würden verkaufen",
      "würdet verkaufen",
      "würden verkaufen"
    ],
    "imperative": [
      "verkauf!",
      "verkauft!",
      "verkaufen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte verkaufen.",
        "en": "I want to to sell."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "passieren",
    "de": "passieren",
    "en": "to happen",
    "level": "A2",
    "irregular": false,
    "present": [
      "passiere",
      "passierst",
      "passiert",
      "passieren",
      "passiert",
      "passieren"
    ],
    "past": [
      "passierte",
      "passiertest",
      "passierte",
      "passierten",
      "passiertet",
      "passierten"
    ],
    "perfect": [
      "ist",
      "passiert"
    ],
    "future": [
      "werde passieren",
      "wirst passieren",
      "wird passieren",
      "werden passieren",
      "werdet passieren",
      "werden passieren"
    ],
    "konjII": [
      "würde passieren",
      "würdest passieren",
      "würde passieren",
      "würden passieren",
      "würdet passieren",
      "würden passieren"
    ],
    "imperative": [
      "passier!",
      "passiert!",
      "passieren Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte passieren.",
        "en": "I want to to happen."
      }
    ],
    "note": "Regular '-ieren' verb. Pattern: always weak/regular. Note: No 'ge-' prefix in the Perfekt (past participle). Examples: 'Ich habe studiert', NOT 'gestudiert'.\n\nNote: This verb uses 'sein' as its auxiliary in the Perfekt because it indicates a change of position or state."
  },
  {
    "id": "studieren",
    "de": "studieren",
    "en": "to study",
    "level": "A1",
    "irregular": false,
    "present": [
      "studiere",
      "studierst",
      "studiert",
      "studieren",
      "studiert",
      "studieren"
    ],
    "past": [
      "studierte",
      "studiertest",
      "studierte",
      "studierten",
      "studiertet",
      "studierten"
    ],
    "perfect": [
      "hat",
      "studiert"
    ],
    "future": [
      "werde studieren",
      "wirst studieren",
      "wird studieren",
      "werden studieren",
      "werdet studieren",
      "werden studieren"
    ],
    "konjII": [
      "würde studieren",
      "würdest studieren",
      "würde studieren",
      "würden studieren",
      "würdet studieren",
      "würden studieren"
    ],
    "imperative": [
      "studier!",
      "studiert!",
      "studieren Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte studieren.",
        "en": "I want to to study."
      }
    ],
    "note": "Regular '-ieren' verb. Pattern: always weak/regular. Note: No 'ge-' prefix in the Perfekt (past participle). Examples: 'Ich habe studiert', NOT 'gestudiert'."
  },
  {
    "id": "fehlen",
    "de": "fehlen",
    "en": "to be missing",
    "level": "A1",
    "irregular": false,
    "present": [
      "fehle",
      "fehlst",
      "fehlt",
      "fehlen",
      "fehlt",
      "fehlen"
    ],
    "past": [
      "fehlte",
      "fehltest",
      "fehlte",
      "fehlten",
      "fehltet",
      "fehlten"
    ],
    "perfect": [
      "hat",
      "gefehlt"
    ],
    "future": [
      "werde fehlen",
      "wirst fehlen",
      "wird fehlen",
      "werden fehlen",
      "werdet fehlen",
      "werden fehlen"
    ],
    "konjII": [
      "würde fehlen",
      "würdest fehlen",
      "würde fehlen",
      "würden fehlen",
      "würdet fehlen",
      "würden fehlen"
    ],
    "imperative": [
      "fehl!",
      "fehlt!",
      "fehlen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte fehlen.",
        "en": "I want to to be missing."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "gehören",
    "de": "gehören",
    "en": "to belong",
    "level": "A1",
    "irregular": false,
    "present": [
      "gehöre",
      "gehörst",
      "gehört",
      "gehören",
      "gehört",
      "gehören"
    ],
    "past": [
      "gehörte",
      "gehörtest",
      "gehörte",
      "gehörten",
      "gehörtet",
      "gehörten"
    ],
    "perfect": [
      "hat",
      "gegehört"
    ],
    "future": [
      "werde gehören",
      "wirst gehören",
      "wird gehören",
      "werden gehören",
      "werdet gehören",
      "werden gehören"
    ],
    "konjII": [
      "würde gehören",
      "würdest gehören",
      "würde gehören",
      "würden gehören",
      "würdet gehören",
      "würden gehören"
    ],
    "imperative": [
      "gehör!",
      "gehört!",
      "gehören Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte gehören.",
        "en": "I want to to belong."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "gratulieren",
    "de": "gratulieren",
    "en": "to congratulate",
    "level": "A1",
    "irregular": false,
    "present": [
      "gratuliere",
      "gratulierst",
      "gratuliert",
      "gratulieren",
      "gratuliert",
      "gratulieren"
    ],
    "past": [
      "gratulierte",
      "gratuliertest",
      "gratulierte",
      "gratulierten",
      "gratuliertet",
      "gratulierten"
    ],
    "perfect": [
      "hat",
      "gratuliert"
    ],
    "future": [
      "werde gratulieren",
      "wirst gratulieren",
      "wird gratulieren",
      "werden gratulieren",
      "werdet gratulieren",
      "werden gratulieren"
    ],
    "konjII": [
      "würde gratulieren",
      "würdest gratulieren",
      "würde gratulieren",
      "würden gratulieren",
      "würdet gratulieren",
      "würden gratulieren"
    ],
    "imperative": [
      "gratulier!",
      "gratuliert!",
      "gratulieren Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte gratulieren.",
        "en": "I want to to congratulate."
      }
    ],
    "note": "Regular '-ieren' verb. Pattern: always weak/regular. Note: No 'ge-' prefix in the Perfekt (past participle). Examples: 'Ich habe studiert', NOT 'gestudiert'."
  },
  {
    "id": "klingen",
    "de": "klingen",
    "en": "to sound",
    "level": "A1",
    "irregular": false,
    "present": [
      "klinge",
      "klingst",
      "klingt",
      "klingen",
      "klingt",
      "klingen"
    ],
    "past": [
      "klingte",
      "klingtest",
      "klingte",
      "klingten",
      "klingtet",
      "klingten"
    ],
    "perfect": [
      "hat",
      "geklingt"
    ],
    "future": [
      "werde klingen",
      "wirst klingen",
      "wird klingen",
      "werden klingen",
      "werdet klingen",
      "werden klingen"
    ],
    "konjII": [
      "würde klingen",
      "würdest klingen",
      "würde klingen",
      "würden klingen",
      "würdet klingen",
      "würden klingen"
    ],
    "imperative": [
      "kling!",
      "klingt!",
      "klingen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte klingen.",
        "en": "I want to to sound."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "malen",
    "de": "malen",
    "en": "to paint/draw",
    "level": "A1",
    "irregular": false,
    "present": [
      "male",
      "malst",
      "malt",
      "malen",
      "malt",
      "malen"
    ],
    "past": [
      "malte",
      "maltest",
      "malte",
      "malten",
      "maltet",
      "malten"
    ],
    "perfect": [
      "hat",
      "gemalt"
    ],
    "future": [
      "werde malen",
      "wirst malen",
      "wird malen",
      "werden malen",
      "werdet malen",
      "werden malen"
    ],
    "konjII": [
      "würde malen",
      "würdest malen",
      "würde malen",
      "würden malen",
      "würdet malen",
      "würden malen"
    ],
    "imperative": [
      "mal!",
      "malt!",
      "malen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte malen.",
        "en": "I want to to paint/draw."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "rauchen",
    "de": "rauchen",
    "en": "to smoke",
    "level": "A1",
    "irregular": false,
    "present": [
      "rauche",
      "rauchst",
      "raucht",
      "rauchen",
      "raucht",
      "rauchen"
    ],
    "past": [
      "rauchte",
      "rauchtest",
      "rauchte",
      "rauchten",
      "rauchtet",
      "rauchten"
    ],
    "perfect": [
      "hat",
      "geraucht"
    ],
    "future": [
      "werde rauchen",
      "wirst rauchen",
      "wird rauchen",
      "werden rauchen",
      "werdet rauchen",
      "werden rauchen"
    ],
    "konjII": [
      "würde rauchen",
      "würdest rauchen",
      "würde rauchen",
      "würden rauchen",
      "würdet rauchen",
      "würden rauchen"
    ],
    "imperative": [
      "rauch!",
      "raucht!",
      "rauchen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte rauchen.",
        "en": "I want to to smoke."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "schenken",
    "de": "schenken",
    "en": "to give (gift)",
    "level": "A1",
    "irregular": false,
    "present": [
      "schenke",
      "schenkst",
      "schenkt",
      "schenken",
      "schenkt",
      "schenken"
    ],
    "past": [
      "schenkte",
      "schenktest",
      "schenkte",
      "schenkten",
      "schenktet",
      "schenkten"
    ],
    "perfect": [
      "hat",
      "geschenkt"
    ],
    "future": [
      "werde schenken",
      "wirst schenken",
      "wird schenken",
      "werden schenken",
      "werdet schenken",
      "werden schenken"
    ],
    "konjII": [
      "würde schenken",
      "würdest schenken",
      "würde schenken",
      "würden schenken",
      "würdet schenken",
      "würden schenken"
    ],
    "imperative": [
      "schenk!",
      "schenkt!",
      "schenken Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte schenken.",
        "en": "I want to to give (gift)."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "schicken",
    "de": "schicken",
    "en": "to send",
    "level": "A1",
    "irregular": false,
    "present": [
      "schicke",
      "schickst",
      "schickt",
      "schicken",
      "schickt",
      "schicken"
    ],
    "past": [
      "schickte",
      "schicktest",
      "schickte",
      "schickten",
      "schicktet",
      "schickten"
    ],
    "perfect": [
      "hat",
      "geschickt"
    ],
    "future": [
      "werde schicken",
      "wirst schicken",
      "wird schicken",
      "werden schicken",
      "werdet schicken",
      "werden schicken"
    ],
    "konjII": [
      "würde schicken",
      "würdest schicken",
      "würde schicken",
      "würden schicken",
      "würdet schicken",
      "würden schicken"
    ],
    "imperative": [
      "schick!",
      "schickt!",
      "schicken Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte schicken.",
        "en": "I want to to send."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "setzen",
    "de": "setzen",
    "en": "to set/place",
    "level": "A1",
    "irregular": false,
    "present": [
      "setze",
      "setzst",
      "setzt",
      "setzen",
      "setzt",
      "setzen"
    ],
    "past": [
      "setzte",
      "setztest",
      "setzte",
      "setzten",
      "setztet",
      "setzten"
    ],
    "perfect": [
      "hat",
      "gesetzt"
    ],
    "future": [
      "werde setzen",
      "wirst setzen",
      "wird setzen",
      "werden setzen",
      "werdet setzen",
      "werden setzen"
    ],
    "konjII": [
      "würde setzen",
      "würdest setzen",
      "würde setzen",
      "würden setzen",
      "würdet setzen",
      "würden setzen"
    ],
    "imperative": [
      "setz!",
      "setzt!",
      "setzen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte setzen.",
        "en": "I want to to set/place."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "stellen",
    "de": "stellen",
    "en": "to stand/place",
    "level": "A1",
    "irregular": false,
    "present": [
      "stelle",
      "stellst",
      "stellt",
      "stellen",
      "stellt",
      "stellen"
    ],
    "past": [
      "stellte",
      "stelltest",
      "stellte",
      "stellten",
      "stelltet",
      "stellten"
    ],
    "perfect": [
      "hat",
      "gestellt"
    ],
    "future": [
      "werde stellen",
      "wirst stellen",
      "wird stellen",
      "werden stellen",
      "werdet stellen",
      "werden stellen"
    ],
    "konjII": [
      "würde stellen",
      "würdest stellen",
      "würde stellen",
      "würden stellen",
      "würdet stellen",
      "würden stellen"
    ],
    "imperative": [
      "stell!",
      "stellt!",
      "stellen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte stellen.",
        "en": "I want to to stand/place."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "legen",
    "de": "legen",
    "en": "to lay/place",
    "level": "A1",
    "irregular": false,
    "present": [
      "lege",
      "legst",
      "legt",
      "legen",
      "legt",
      "legen"
    ],
    "past": [
      "legte",
      "legtest",
      "legte",
      "legten",
      "legtet",
      "legten"
    ],
    "perfect": [
      "hat",
      "gelegt"
    ],
    "future": [
      "werde legen",
      "wirst legen",
      "wird legen",
      "werden legen",
      "werdet legen",
      "werden legen"
    ],
    "konjII": [
      "würde legen",
      "würdest legen",
      "würde legen",
      "würden legen",
      "würdet legen",
      "würden legen"
    ],
    "imperative": [
      "leg!",
      "legt!",
      "legen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte legen.",
        "en": "I want to to lay/place."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "hängen",
    "de": "hängen",
    "en": "to hang",
    "level": "A1",
    "irregular": false,
    "present": [
      "hänge",
      "hängst",
      "hängt",
      "hängen",
      "hängt",
      "hängen"
    ],
    "past": [
      "hängte",
      "hängtest",
      "hängte",
      "hängten",
      "hängtet",
      "hängten"
    ],
    "perfect": [
      "hat",
      "gehängt"
    ],
    "future": [
      "werde hängen",
      "wirst hängen",
      "wird hängen",
      "werden hängen",
      "werdet hängen",
      "werden hängen"
    ],
    "konjII": [
      "würde hängen",
      "würdest hängen",
      "würde hängen",
      "würden hängen",
      "würdet hängen",
      "würden hängen"
    ],
    "imperative": [
      "häng!",
      "hängt!",
      "hängen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte hängen.",
        "en": "I want to to hang."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "holen",
    "de": "holen",
    "en": "to fetch",
    "level": "A1",
    "irregular": false,
    "present": [
      "hole",
      "holst",
      "holt",
      "holen",
      "holt",
      "holen"
    ],
    "past": [
      "holte",
      "holtest",
      "holte",
      "holten",
      "holtet",
      "holten"
    ],
    "perfect": [
      "hat",
      "geholt"
    ],
    "future": [
      "werde holen",
      "wirst holen",
      "wird holen",
      "werden holen",
      "werdet holen",
      "werden holen"
    ],
    "konjII": [
      "würde holen",
      "würdest holen",
      "würde holen",
      "würden holen",
      "würdet holen",
      "würden holen"
    ],
    "imperative": [
      "hol!",
      "holt!",
      "holen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte holen.",
        "en": "I want to to fetch."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "füllen",
    "de": "füllen",
    "en": "to fill",
    "level": "A1",
    "irregular": false,
    "present": [
      "fülle",
      "füllst",
      "füllt",
      "füllen",
      "füllt",
      "füllen"
    ],
    "past": [
      "füllte",
      "fülltest",
      "füllte",
      "füllten",
      "fülltet",
      "füllten"
    ],
    "perfect": [
      "hat",
      "gefüllt"
    ],
    "future": [
      "werde füllen",
      "wirst füllen",
      "wird füllen",
      "werden füllen",
      "werdet füllen",
      "werden füllen"
    ],
    "konjII": [
      "würde füllen",
      "würdest füllen",
      "würde füllen",
      "würden füllen",
      "würdet füllen",
      "würden füllen"
    ],
    "imperative": [
      "füll!",
      "füllt!",
      "füllen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte füllen.",
        "en": "I want to to fill."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "schauen",
    "de": "schauen",
    "en": "to look",
    "level": "A1",
    "irregular": false,
    "present": [
      "schaue",
      "schaust",
      "schaut",
      "schauen",
      "schaut",
      "schauen"
    ],
    "past": [
      "schaute",
      "schautest",
      "schaute",
      "schauten",
      "schautet",
      "schauten"
    ],
    "perfect": [
      "hat",
      "geschaut"
    ],
    "future": [
      "werde schauen",
      "wirst schauen",
      "wird schauen",
      "werden schauen",
      "werdet schauen",
      "werden schauen"
    ],
    "konjII": [
      "würde schauen",
      "würdest schauen",
      "würde schauen",
      "würden schauen",
      "würdet schauen",
      "würden schauen"
    ],
    "imperative": [
      "schau!",
      "schaut!",
      "schauen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte schauen.",
        "en": "I want to to look."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "besuchen",
    "de": "besuchen",
    "en": "to visit",
    "level": "A1",
    "irregular": false,
    "present": [
      "besuche",
      "besuchst",
      "besucht",
      "besuchen",
      "besucht",
      "besuchen"
    ],
    "past": [
      "besuchte",
      "besuchtest",
      "besuchte",
      "besuchten",
      "besuchtet",
      "besuchten"
    ],
    "perfect": [
      "hat",
      "besucht"
    ],
    "future": [
      "werde besuchen",
      "wirst besuchen",
      "wird besuchen",
      "werden besuchen",
      "werdet besuchen",
      "werden besuchen"
    ],
    "konjII": [
      "würde besuchen",
      "würdest besuchen",
      "würde besuchen",
      "würden besuchen",
      "würdet besuchen",
      "würden besuchen"
    ],
    "imperative": [
      "besuch!",
      "besucht!",
      "besuchen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte besuchen.",
        "en": "I want to to visit."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "übersetzen",
    "de": "übersetzen",
    "en": "to translate",
    "level": "A2",
    "irregular": false,
    "present": [
      "übersetze",
      "übersetzst",
      "übersetzt",
      "übersetzen",
      "übersetzt",
      "übersetzen"
    ],
    "past": [
      "übersetzte",
      "übersetztest",
      "übersetzte",
      "übersetzten",
      "übersetztet",
      "übersetzten"
    ],
    "perfect": [
      "hat",
      "geübersetzt"
    ],
    "future": [
      "werde übersetzen",
      "wirst übersetzen",
      "wird übersetzen",
      "werden übersetzen",
      "werdet übersetzen",
      "werden übersetzen"
    ],
    "konjII": [
      "würde übersetzen",
      "würdest übersetzen",
      "würde übersetzen",
      "würden übersetzen",
      "würdet übersetzen",
      "würden übersetzen"
    ],
    "imperative": [
      "übersetz!",
      "übersetzt!",
      "übersetzen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte übersetzen.",
        "en": "I want to to translate."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "ändern",
    "de": "ändern",
    "en": "to change",
    "level": "A2",
    "irregular": false,
    "present": [
      "ändere",
      "änderst",
      "ändert",
      "ändern",
      "ändert",
      "ändern"
    ],
    "past": [
      "änderte",
      "ändertest",
      "änderte",
      "änderten",
      "ändertet",
      "änderten"
    ],
    "perfect": [
      "hat",
      "geändert"
    ],
    "future": [
      "werde ändern",
      "wirst ändern",
      "wird ändern",
      "werden ändern",
      "werdet ändern",
      "werden ändern"
    ],
    "konjII": [
      "würde ändern",
      "würdest ändern",
      "würde ändern",
      "würden ändern",
      "würdet ändern",
      "würden ändern"
    ],
    "imperative": [
      "änder!",
      "ändert!",
      "ändern Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte ändern.",
        "en": "I want to to change."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "dauern",
    "de": "dauern",
    "en": "to last",
    "level": "A1",
    "irregular": false,
    "present": [
      "dauere",
      "dauerst",
      "dauert",
      "dauern",
      "dauert",
      "dauern"
    ],
    "past": [
      "dauerte",
      "dauertest",
      "dauerte",
      "dauerten",
      "dauertet",
      "dauerten"
    ],
    "perfect": [
      "hat",
      "gedauert"
    ],
    "future": [
      "werde dauern",
      "wirst dauern",
      "wird dauern",
      "werden dauern",
      "werdet dauern",
      "werden dauern"
    ],
    "konjII": [
      "würde dauern",
      "würdest dauern",
      "würde dauern",
      "würden dauern",
      "würdet dauern",
      "würden dauern"
    ],
    "imperative": [
      "dauer!",
      "dauert!",
      "dauern Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte dauern.",
        "en": "I want to to last."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "mieten",
    "de": "mieten",
    "en": "to rent",
    "level": "A1",
    "irregular": false,
    "present": [
      "miete",
      "mietest",
      "mietet",
      "mieten",
      "mietet",
      "mieten"
    ],
    "past": [
      "mietete",
      "mietetest",
      "mietete",
      "mieteten",
      "mietetet",
      "mieteten"
    ],
    "perfect": [
      "hat",
      "gemietet"
    ],
    "future": [
      "werde mieten",
      "wirst mieten",
      "wird mieten",
      "werden mieten",
      "werdet mieten",
      "werden mieten"
    ],
    "konjII": [
      "würde mieten",
      "würdest mieten",
      "würde mieten",
      "würden mieten",
      "würdet mieten",
      "würden mieten"
    ],
    "imperative": [
      "miete!",
      "mietet!",
      "mieten Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte mieten.",
        "en": "I want to to rent."
      }
    ],
    "note": "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'."
  },
  {
    "id": "diskutieren",
    "de": "diskutieren",
    "en": "to discuss",
    "level": "A2",
    "irregular": false,
    "present": [
      "diskutiere",
      "diskutierst",
      "diskutiert",
      "diskutieren",
      "diskutiert",
      "diskutieren"
    ],
    "past": [
      "diskutierte",
      "diskutiertest",
      "diskutierte",
      "diskutierten",
      "diskutiertet",
      "diskutierten"
    ],
    "perfect": [
      "hat",
      "diskutiert"
    ],
    "future": [
      "werde diskutieren",
      "wirst diskutieren",
      "wird diskutieren",
      "werden diskutieren",
      "werdet diskutieren",
      "werden diskutieren"
    ],
    "konjII": [
      "würde diskutieren",
      "würdest diskutieren",
      "würde diskutieren",
      "würden diskutieren",
      "würdet diskutieren",
      "würden diskutieren"
    ],
    "imperative": [
      "diskutier!",
      "diskutiert!",
      "diskutieren Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte diskutieren.",
        "en": "I want to to discuss."
      }
    ],
    "note": "Regular '-ieren' verb. Pattern: always weak/regular. Note: No 'ge-' prefix in the Perfekt (past participle). Examples: 'Ich habe studiert', NOT 'gestudiert'."
  },
  {
    "id": "organisieren",
    "de": "organisieren",
    "en": "to organize",
    "level": "A2",
    "irregular": false,
    "present": [
      "organisiere",
      "organisierst",
      "organisiert",
      "organisieren",
      "organisiert",
      "organisieren"
    ],
    "past": [
      "organisierte",
      "organisiertest",
      "organisierte",
      "organisierten",
      "organisiertet",
      "organisierten"
    ],
    "perfect": [
      "hat",
      "organisiert"
    ],
    "future": [
      "werde organisieren",
      "wirst organisieren",
      "wird organisieren",
      "werden organisieren",
      "werdet organisieren",
      "werden organisieren"
    ],
    "konjII": [
      "würde organisieren",
      "würdest organisieren",
      "würde organisieren",
      "würden organisieren",
      "würdet organisieren",
      "würden organisieren"
    ],
    "imperative": [
      "organisier!",
      "organisiert!",
      "organisieren Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte organisieren.",
        "en": "I want to to organize."
      }
    ],
    "note": "Regular '-ieren' verb. Pattern: always weak/regular. Note: No 'ge-' prefix in the Perfekt (past participle). Examples: 'Ich habe studiert', NOT 'gestudiert'."
  },
  {
    "id": "parken",
    "de": "parken",
    "en": "to park",
    "level": "A1",
    "irregular": false,
    "present": [
      "parke",
      "parkst",
      "parkt",
      "parken",
      "parkt",
      "parken"
    ],
    "past": [
      "parkte",
      "parktest",
      "parkte",
      "parkten",
      "parktet",
      "parkten"
    ],
    "perfect": [
      "hat",
      "geparkt"
    ],
    "future": [
      "werde parken",
      "wirst parken",
      "wird parken",
      "werden parken",
      "werdet parken",
      "werden parken"
    ],
    "konjII": [
      "würde parken",
      "würdest parken",
      "würde parken",
      "würden parken",
      "würdet parken",
      "würden parken"
    ],
    "imperative": [
      "park!",
      "parkt!",
      "parken Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte parken.",
        "en": "I want to to park."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "planen",
    "de": "planen",
    "en": "to plan",
    "level": "A1",
    "irregular": false,
    "present": [
      "plane",
      "planst",
      "plant",
      "planen",
      "plant",
      "planen"
    ],
    "past": [
      "plante",
      "plantest",
      "plante",
      "planten",
      "plantet",
      "planten"
    ],
    "perfect": [
      "hat",
      "geplant"
    ],
    "future": [
      "werde planen",
      "wirst planen",
      "wird planen",
      "werden planen",
      "werdet planen",
      "werden planen"
    ],
    "konjII": [
      "würde planen",
      "würdest planen",
      "würde planen",
      "würden planen",
      "würdet planen",
      "würden planen"
    ],
    "imperative": [
      "plan!",
      "plant!",
      "planen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte planen.",
        "en": "I want to to plan."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "reparieren",
    "de": "reparieren",
    "en": "to repair",
    "level": "A2",
    "irregular": false,
    "present": [
      "repariere",
      "reparierst",
      "repariert",
      "reparieren",
      "repariert",
      "reparieren"
    ],
    "past": [
      "reparierte",
      "repariertest",
      "reparierte",
      "reparierten",
      "repariertet",
      "reparierten"
    ],
    "perfect": [
      "hat",
      "repariert"
    ],
    "future": [
      "werde reparieren",
      "wirst reparieren",
      "wird reparieren",
      "werden reparieren",
      "werdet reparieren",
      "werden reparieren"
    ],
    "konjII": [
      "würde reparieren",
      "würdest reparieren",
      "würde reparieren",
      "würden reparieren",
      "würdet reparieren",
      "würden reparieren"
    ],
    "imperative": [
      "reparier!",
      "repariert!",
      "reparieren Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte reparieren.",
        "en": "I want to to repair."
      }
    ],
    "note": "Regular '-ieren' verb. Pattern: always weak/regular. Note: No 'ge-' prefix in the Perfekt (past participle). Examples: 'Ich habe studiert', NOT 'gestudiert'."
  },
  {
    "id": "reservieren",
    "de": "reservieren",
    "en": "to reserve",
    "level": "A1",
    "irregular": false,
    "present": [
      "reserviere",
      "reservierst",
      "reserviert",
      "reservieren",
      "reserviert",
      "reservieren"
    ],
    "past": [
      "reservierte",
      "reserviertest",
      "reservierte",
      "reservierten",
      "reserviertet",
      "reservierten"
    ],
    "perfect": [
      "hat",
      "reserviert"
    ],
    "future": [
      "werde reservieren",
      "wirst reservieren",
      "wird reservieren",
      "werden reservieren",
      "werdet reservieren",
      "werden reservieren"
    ],
    "konjII": [
      "würde reservieren",
      "würdest reservieren",
      "würde reservieren",
      "würden reservieren",
      "würdet reservieren",
      "würden reservieren"
    ],
    "imperative": [
      "reservier!",
      "reserviert!",
      "reservieren Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte reservieren.",
        "en": "I want to to reserve."
      }
    ],
    "note": "Regular '-ieren' verb. Pattern: always weak/regular. Note: No 'ge-' prefix in the Perfekt (past participle). Examples: 'Ich habe studiert', NOT 'gestudiert'."
  },
  {
    "id": "sammeln",
    "de": "sammeln",
    "en": "to collect",
    "level": "A2",
    "irregular": false,
    "present": [
      "sammele",
      "sammelst",
      "sammelt",
      "sammeln",
      "sammelt",
      "sammeln"
    ],
    "past": [
      "sammelte",
      "sammeltest",
      "sammelte",
      "sammelten",
      "sammeltet",
      "sammelten"
    ],
    "perfect": [
      "hat",
      "gesammelt"
    ],
    "future": [
      "werde sammeln",
      "wirst sammeln",
      "wird sammeln",
      "werden sammeln",
      "werdet sammeln",
      "werden sammeln"
    ],
    "konjII": [
      "würde sammeln",
      "würdest sammeln",
      "würde sammeln",
      "würden sammeln",
      "würdet sammeln",
      "würden sammeln"
    ],
    "imperative": [
      "sammel!",
      "sammelt!",
      "sammeln Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte sammeln.",
        "en": "I want to to collect."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "schminken",
    "de": "schminken",
    "en": "to put on makeup",
    "level": "A2",
    "irregular": false,
    "present": [
      "schminke",
      "schminkst",
      "schminkt",
      "schminken",
      "schminkt",
      "schminken"
    ],
    "past": [
      "schminkte",
      "schminktest",
      "schminkte",
      "schminkten",
      "schminktet",
      "schminkten"
    ],
    "perfect": [
      "hat",
      "geschminkt"
    ],
    "future": [
      "werde schminken",
      "wirst schminken",
      "wird schminken",
      "werden schminken",
      "werdet schminken",
      "werden schminken"
    ],
    "konjII": [
      "würde schminken",
      "würdest schminken",
      "würde schminken",
      "würden schminken",
      "würdet schminken",
      "würden schminken"
    ],
    "imperative": [
      "schmink!",
      "schminkt!",
      "schminken Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte schminken.",
        "en": "I want to to put on makeup."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "schneiden",
    "de": "schneiden",
    "en": "to cut",
    "level": "A2",
    "irregular": false,
    "present": [
      "schneide",
      "schneidest",
      "schneidet",
      "schneiden",
      "schneidet",
      "schneiden"
    ],
    "past": [
      "schneidete",
      "schneidetest",
      "schneidete",
      "schneideten",
      "schneidetet",
      "schneideten"
    ],
    "perfect": [
      "hat",
      "geschneidet"
    ],
    "future": [
      "werde schneiden",
      "wirst schneiden",
      "wird schneiden",
      "werden schneiden",
      "werdet schneiden",
      "werden schneiden"
    ],
    "konjII": [
      "würde schneiden",
      "würdest schneiden",
      "würde schneiden",
      "würden schneiden",
      "würdet schneiden",
      "würden schneiden"
    ],
    "imperative": [
      "schneide!",
      "schneidet!",
      "schneiden Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte schneiden.",
        "en": "I want to to cut."
      }
    ],
    "note": "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'."
  },
  {
    "id": "schwimmen",
    "de": "schwimmen",
    "en": "to swim",
    "level": "A1",
    "irregular": false,
    "present": [
      "schwimme",
      "schwimmst",
      "schwimmt",
      "schwimmen",
      "schwimmt",
      "schwimmen"
    ],
    "past": [
      "schwimmte",
      "schwimmtest",
      "schwimmte",
      "schwimmten",
      "schwimmtet",
      "schwimmten"
    ],
    "perfect": [
      "ist",
      "geschwimmt"
    ],
    "future": [
      "werde schwimmen",
      "wirst schwimmen",
      "wird schwimmen",
      "werden schwimmen",
      "werdet schwimmen",
      "werden schwimmen"
    ],
    "konjII": [
      "würde schwimmen",
      "würdest schwimmen",
      "würde schwimmen",
      "würden schwimmen",
      "würdet schwimmen",
      "würden schwimmen"
    ],
    "imperative": [
      "schwimm!",
      "schwimmt!",
      "schwimmen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte schwimmen.",
        "en": "I want to to swim."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'.\n\nNote: This verb uses 'sein' as its auxiliary in the Perfekt because it indicates a change of position or state."
  },
  {
    "id": "segeln",
    "de": "segeln",
    "en": "to sail",
    "level": "A2",
    "irregular": false,
    "present": [
      "segele",
      "segelst",
      "segelt",
      "segeln",
      "segelt",
      "segeln"
    ],
    "past": [
      "segelte",
      "segeltest",
      "segelte",
      "segelten",
      "segeltet",
      "segelten"
    ],
    "perfect": [
      "ist",
      "gesegelt"
    ],
    "future": [
      "werde segeln",
      "wirst segeln",
      "wird segeln",
      "werden segeln",
      "werdet segeln",
      "werden segeln"
    ],
    "konjII": [
      "würde segeln",
      "würdest segeln",
      "würde segeln",
      "würden segeln",
      "würdet segeln",
      "würden segeln"
    ],
    "imperative": [
      "segel!",
      "segelt!",
      "segeln Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte segeln.",
        "en": "I want to to sail."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'.\n\nNote: This verb uses 'sein' as its auxiliary in the Perfekt because it indicates a change of position or state."
  },
  {
    "id": "surfen",
    "de": "surfen",
    "en": "to surf",
    "level": "A1",
    "irregular": false,
    "present": [
      "surfe",
      "surfst",
      "surft",
      "surfen",
      "surft",
      "surfen"
    ],
    "past": [
      "surfte",
      "surftest",
      "surfte",
      "surften",
      "surftet",
      "surften"
    ],
    "perfect": [
      "hat",
      "gesurft"
    ],
    "future": [
      "werde surfen",
      "wirst surfen",
      "wird surfen",
      "werden surfen",
      "werdet surfen",
      "werden surfen"
    ],
    "konjII": [
      "würde surfen",
      "würdest surfen",
      "würde surfen",
      "würden surfen",
      "würdet surfen",
      "würden surfen"
    ],
    "imperative": [
      "surf!",
      "surft!",
      "surfen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte surfen.",
        "en": "I want to to surf."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "telefonieren",
    "de": "telefonieren",
    "en": "to call",
    "level": "A1",
    "irregular": false,
    "present": [
      "telefoniere",
      "telefonierst",
      "telefoniert",
      "telefonieren",
      "telefoniert",
      "telefonieren"
    ],
    "past": [
      "telefonierte",
      "telefoniertest",
      "telefonierte",
      "telefonierten",
      "telefoniertet",
      "telefonierten"
    ],
    "perfect": [
      "hat",
      "telefoniert"
    ],
    "future": [
      "werde telefonieren",
      "wirst telefonieren",
      "wird telefonieren",
      "werden telefonieren",
      "werdet telefonieren",
      "werden telefonieren"
    ],
    "konjII": [
      "würde telefonieren",
      "würdest telefonieren",
      "würde telefonieren",
      "würden telefonieren",
      "würdet telefonieren",
      "würden telefonieren"
    ],
    "imperative": [
      "telefonier!",
      "telefoniert!",
      "telefonieren Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte telefonieren.",
        "en": "I want to to call."
      }
    ],
    "note": "Regular '-ieren' verb. Pattern: always weak/regular. Note: No 'ge-' prefix in the Perfekt (past participle). Examples: 'Ich habe studiert', NOT 'gestudiert'."
  },
  {
    "id": "träumen",
    "de": "träumen",
    "en": "to dream",
    "level": "A1",
    "irregular": false,
    "present": [
      "träume",
      "träumst",
      "träumt",
      "träumen",
      "träumt",
      "träumen"
    ],
    "past": [
      "träumte",
      "träumtest",
      "träumte",
      "träumten",
      "träumtet",
      "träumten"
    ],
    "perfect": [
      "hat",
      "geträumt"
    ],
    "future": [
      "werde träumen",
      "wirst träumen",
      "wird träumen",
      "werden träumen",
      "werdet träumen",
      "werden träumen"
    ],
    "konjII": [
      "würde träumen",
      "würdest träumen",
      "würde träumen",
      "würden träumen",
      "würdet träumen",
      "würden träumen"
    ],
    "imperative": [
      "träum!",
      "träumt!",
      "träumen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte träumen.",
        "en": "I want to to dream."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "turnen",
    "de": "turnen",
    "en": "to do gymnastics",
    "level": "A1",
    "irregular": false,
    "present": [
      "turne",
      "turnst",
      "turnt",
      "turnen",
      "turnt",
      "turnen"
    ],
    "past": [
      "turnte",
      "turntest",
      "turnte",
      "turnten",
      "turntet",
      "turnten"
    ],
    "perfect": [
      "hat",
      "geturnt"
    ],
    "future": [
      "werde turnen",
      "wirst turnen",
      "wird turnen",
      "werden turnen",
      "werdet turnen",
      "werden turnen"
    ],
    "konjII": [
      "würde turnen",
      "würdest turnen",
      "würde turnen",
      "würden turnen",
      "würdet turnen",
      "würden turnen"
    ],
    "imperative": [
      "turn!",
      "turnt!",
      "turnen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte turnen.",
        "en": "I want to to do gymnastics."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "üben",
    "de": "üben",
    "en": "to practice",
    "level": "A1",
    "irregular": false,
    "present": [
      "übe",
      "übst",
      "übt",
      "üben",
      "übt",
      "üben"
    ],
    "past": [
      "übte",
      "übtest",
      "übte",
      "übten",
      "übtet",
      "übten"
    ],
    "perfect": [
      "hat",
      "geübt"
    ],
    "future": [
      "werde üben",
      "wirst üben",
      "wird üben",
      "werden üben",
      "werdet üben",
      "werden üben"
    ],
    "konjII": [
      "würde üben",
      "würdest üben",
      "würde üben",
      "würden üben",
      "würdet üben",
      "würden üben"
    ],
    "imperative": [
      "üb!",
      "übt!",
      "üben Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte üben.",
        "en": "I want to to practice."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "wandern",
    "de": "wandern",
    "en": "to hike",
    "level": "A1",
    "irregular": false,
    "present": [
      "wandere",
      "wanderst",
      "wandert",
      "wandern",
      "wandert",
      "wandern"
    ],
    "past": [
      "wanderte",
      "wandertest",
      "wanderte",
      "wanderten",
      "wandertet",
      "wanderten"
    ],
    "perfect": [
      "ist",
      "gewandert"
    ],
    "future": [
      "werde wandern",
      "wirst wandern",
      "wird wandern",
      "werden wandern",
      "werdet wandern",
      "werden wandern"
    ],
    "konjII": [
      "würde wandern",
      "würdest wandern",
      "würde wandern",
      "würden wandern",
      "würdet wandern",
      "würden wandern"
    ],
    "imperative": [
      "wander!",
      "wandert!",
      "wandern Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte wandern.",
        "en": "I want to to hike."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'.\n\nNote: This verb uses 'sein' as its auxiliary in the Perfekt because it indicates a change of position or state."
  },
  {
    "id": "weinen",
    "de": "weinen",
    "en": "to cry",
    "level": "A1",
    "irregular": false,
    "present": [
      "weine",
      "weinst",
      "weint",
      "weinen",
      "weint",
      "weinen"
    ],
    "past": [
      "weinte",
      "weintest",
      "weinte",
      "weinten",
      "weintet",
      "weinten"
    ],
    "perfect": [
      "hat",
      "geweint"
    ],
    "future": [
      "werde weinen",
      "wirst weinen",
      "wird weinen",
      "werden weinen",
      "werdet weinen",
      "werden weinen"
    ],
    "konjII": [
      "würde weinen",
      "würdest weinen",
      "würde weinen",
      "würden weinen",
      "würdet weinen",
      "würden weinen"
    ],
    "imperative": [
      "wein!",
      "weint!",
      "weinen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte weinen.",
        "en": "I want to to cry."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "wiederholen",
    "de": "wiederholen",
    "en": "to repeat",
    "level": "A2",
    "irregular": false,
    "present": [
      "wiederhole",
      "wiederholst",
      "wiederholt",
      "wiederholen",
      "wiederholt",
      "wiederholen"
    ],
    "past": [
      "wiederholte",
      "wiederholtest",
      "wiederholte",
      "wiederholten",
      "wiederholtet",
      "wiederholten"
    ],
    "perfect": [
      "hat",
      "gewiederholt"
    ],
    "future": [
      "werde wiederholen",
      "wirst wiederholen",
      "wird wiederholen",
      "werden wiederholen",
      "werdet wiederholen",
      "werden wiederholen"
    ],
    "konjII": [
      "würde wiederholen",
      "würdest wiederholen",
      "würde wiederholen",
      "würden wiederholen",
      "würdet wiederholen",
      "würden wiederholen"
    ],
    "imperative": [
      "wiederhol!",
      "wiederholt!",
      "wiederholen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte wiederholen.",
        "en": "I want to to repeat."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "zeichnen",
    "de": "zeichnen",
    "en": "to draw",
    "level": "A1",
    "irregular": false,
    "present": [
      "zeichne",
      "zeichnst",
      "zeichnt",
      "zeichnen",
      "zeichnt",
      "zeichnen"
    ],
    "past": [
      "zeichnte",
      "zeichntest",
      "zeichnte",
      "zeichnten",
      "zeichntet",
      "zeichnten"
    ],
    "perfect": [
      "hat",
      "gezeichnt"
    ],
    "future": [
      "werde zeichnen",
      "wirst zeichnen",
      "wird zeichnen",
      "werden zeichnen",
      "werdet zeichnen",
      "werden zeichnen"
    ],
    "konjII": [
      "würde zeichnen",
      "würdest zeichnen",
      "würde zeichnen",
      "würden zeichnen",
      "würdet zeichnen",
      "würden zeichnen"
    ],
    "imperative": [
      "zeichn!",
      "zeichnt!",
      "zeichnen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte zeichnen.",
        "en": "I want to to draw."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "zelten",
    "de": "zelten",
    "en": "to camp",
    "level": "A1",
    "irregular": false,
    "present": [
      "zelte",
      "zeltest",
      "zeltet",
      "zelten",
      "zeltet",
      "zelten"
    ],
    "past": [
      "zeltete",
      "zeltetest",
      "zeltete",
      "zelteten",
      "zeltetet",
      "zelteten"
    ],
    "perfect": [
      "hat",
      "gezeltet"
    ],
    "future": [
      "werde zelten",
      "wirst zelten",
      "wird zelten",
      "werden zelten",
      "werdet zelten",
      "werden zelten"
    ],
    "konjII": [
      "würde zelten",
      "würdest zelten",
      "würde zelten",
      "würden zelten",
      "würdet zelten",
      "würden zelten"
    ],
    "imperative": [
      "zelte!",
      "zeltet!",
      "zelten Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte zelten.",
        "en": "I want to to camp."
      }
    ],
    "note": "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'."
  },
  {
    "id": "zuhören",
    "de": "zuhören",
    "en": "to listen to",
    "level": "A2",
    "irregular": false,
    "present": [
      "zuhöre",
      "zuhörst",
      "zuhört",
      "zuhören",
      "zuhört",
      "zuhören"
    ],
    "past": [
      "zuhörte",
      "zuhörtest",
      "zuhörte",
      "zuhörten",
      "zuhörtet",
      "zuhörten"
    ],
    "perfect": [
      "hat",
      "gezuhört"
    ],
    "future": [
      "werde zuhören",
      "wirst zuhören",
      "wird zuhören",
      "werden zuhören",
      "werdet zuhören",
      "werden zuhören"
    ],
    "konjII": [
      "würde zuhören",
      "würdest zuhören",
      "würde zuhören",
      "würden zuhören",
      "würdet zuhören",
      "würden zuhören"
    ],
    "imperative": [
      "zuhör!",
      "zuhört!",
      "zuhören Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte zuhören.",
        "en": "I want to to listen to."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "zusammenfassen",
    "de": "zusammenfassen",
    "en": "to summarize",
    "level": "A2",
    "irregular": false,
    "present": [
      "zusammenfasse",
      "zusammenfassst",
      "zusammenfasst",
      "zusammenfassen",
      "zusammenfasst",
      "zusammenfassen"
    ],
    "past": [
      "zusammenfasste",
      "zusammenfasstest",
      "zusammenfasste",
      "zusammenfassten",
      "zusammenfasstet",
      "zusammenfassten"
    ],
    "perfect": [
      "hat",
      "gezusammenfasst"
    ],
    "future": [
      "werde zusammenfassen",
      "wirst zusammenfassen",
      "wird zusammenfassen",
      "werden zusammenfassen",
      "werdet zusammenfassen",
      "werden zusammenfassen"
    ],
    "konjII": [
      "würde zusammenfassen",
      "würdest zusammenfassen",
      "würde zusammenfassen",
      "würden zusammenfassen",
      "würdet zusammenfassen",
      "würden zusammenfassen"
    ],
    "imperative": [
      "zusammenfass!",
      "zusammenfasst!",
      "zusammenfassen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte zusammenfassen.",
        "en": "I want to to summarize."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "fragen",
    "de": "fragen",
    "en": "to ask",
    "level": "A1",
    "irregular": false,
    "present": [
      "frage",
      "fragst",
      "fragt",
      "fragen",
      "fragt",
      "fragen"
    ],
    "past": [
      "fragte",
      "fragtest",
      "fragte",
      "fragten",
      "fragtet",
      "fragten"
    ],
    "perfect": [
      "hat",
      "gefragt"
    ],
    "future": [
      "werde fragen",
      "wirst fragen",
      "wird fragen",
      "werden fragen",
      "werdet fragen",
      "werden fragen"
    ],
    "konjII": [
      "würde fragen",
      "würdest fragen",
      "würde fragen",
      "würden fragen",
      "würdet fragen",
      "würden fragen"
    ],
    "imperative": [
      "frag!",
      "fragt!",
      "fragen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte fragen.",
        "en": "I want to to ask."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "antworten",
    "de": "antworten",
    "en": "to answer",
    "level": "A1",
    "irregular": false,
    "present": [
      "antworte",
      "antwortest",
      "antwortet",
      "antworten",
      "antwortet",
      "antworten"
    ],
    "past": [
      "antwortete",
      "antwortetest",
      "antwortete",
      "antworteten",
      "antwortetet",
      "antworteten"
    ],
    "perfect": [
      "hat",
      "geantwortet"
    ],
    "future": [
      "werde antworten",
      "wirst antworten",
      "wird antworten",
      "werden antworten",
      "werdet antworten",
      "werden antworten"
    ],
    "konjII": [
      "würde antworten",
      "würdest antworten",
      "würde antworten",
      "würden antworten",
      "würdet antworten",
      "würden antworten"
    ],
    "imperative": [
      "antworte!",
      "antwortet!",
      "antworten Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte antworten.",
        "en": "I want to to answer."
      }
    ],
    "note": "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'."
  },
  {
    "id": "bestellen",
    "de": "bestellen",
    "en": "to order",
    "level": "A1",
    "irregular": false,
    "present": [
      "bestelle",
      "bestellst",
      "bestellt",
      "bestellen",
      "bestellt",
      "bestellen"
    ],
    "past": [
      "bestellte",
      "bestelltest",
      "bestellte",
      "bestellten",
      "bestelltet",
      "bestellten"
    ],
    "perfect": [
      "hat",
      "bestellt"
    ],
    "future": [
      "werde bestellen",
      "wirst bestellen",
      "wird bestellen",
      "werden bestellen",
      "werdet bestellen",
      "werden bestellen"
    ],
    "konjII": [
      "würde bestellen",
      "würdest bestellen",
      "würde bestellen",
      "würden bestellen",
      "würdet bestellen",
      "würden bestellen"
    ],
    "imperative": [
      "bestell!",
      "bestellt!",
      "bestellen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte bestellen.",
        "en": "I want to to order."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "bezahlen",
    "de": "bezahlen",
    "en": "to pay",
    "level": "A1",
    "irregular": false,
    "present": [
      "bezahle",
      "bezahlst",
      "bezahlt",
      "bezahlen",
      "bezahlt",
      "bezahlen"
    ],
    "past": [
      "bezahlte",
      "bezahltest",
      "bezahlte",
      "bezahlten",
      "bezahltet",
      "bezahlten"
    ],
    "perfect": [
      "hat",
      "bezahlt"
    ],
    "future": [
      "werde bezahlen",
      "wirst bezahlen",
      "wird bezahlen",
      "werden bezahlen",
      "werdet bezahlen",
      "werden bezahlen"
    ],
    "konjII": [
      "würde bezahlen",
      "würdest bezahlen",
      "würde bezahlen",
      "würden bezahlen",
      "würdet bezahlen",
      "würden bezahlen"
    ],
    "imperative": [
      "bezahl!",
      "bezahlt!",
      "bezahlen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte bezahlen.",
        "en": "I want to to pay."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "buchstabieren",
    "de": "buchstabieren",
    "en": "to spell",
    "level": "A1",
    "irregular": false,
    "present": [
      "buchstabiere",
      "buchstabierst",
      "buchstabiert",
      "buchstabieren",
      "buchstabiert",
      "buchstabieren"
    ],
    "past": [
      "buchstabierte",
      "buchstabiertest",
      "buchstabierte",
      "buchstabierten",
      "buchstabiertet",
      "buchstabierten"
    ],
    "perfect": [
      "hat",
      "buchstabiert"
    ],
    "future": [
      "werde buchstabieren",
      "wirst buchstabieren",
      "wird buchstabieren",
      "werden buchstabieren",
      "werdet buchstabieren",
      "werden buchstabieren"
    ],
    "konjII": [
      "würde buchstabieren",
      "würdest buchstabieren",
      "würde buchstabieren",
      "würden buchstabieren",
      "würdet buchstabieren",
      "würden buchstabieren"
    ],
    "imperative": [
      "buchstabier!",
      "buchstabiert!",
      "buchstabieren Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte buchstabieren.",
        "en": "I want to to spell."
      }
    ],
    "note": "Regular '-ieren' verb. Pattern: always weak/regular. Note: No 'ge-' prefix in the Perfekt (past participle). Examples: 'Ich habe studiert', NOT 'gestudiert'."
  },
  {
    "id": "duschen",
    "de": "duschen",
    "en": "to shower",
    "level": "A1",
    "irregular": false,
    "present": [
      "dusche",
      "duschst",
      "duscht",
      "duschen",
      "duscht",
      "duschen"
    ],
    "past": [
      "duschte",
      "duschtest",
      "duschte",
      "duschten",
      "duschtet",
      "duschten"
    ],
    "perfect": [
      "hat",
      "geduscht"
    ],
    "future": [
      "werde duschen",
      "wirst duschen",
      "wird duschen",
      "werden duschen",
      "werdet duschen",
      "werden duschen"
    ],
    "konjII": [
      "würde duschen",
      "würdest duschen",
      "würde duschen",
      "würden duschen",
      "würdet duschen",
      "würden duschen"
    ],
    "imperative": [
      "dusch!",
      "duscht!",
      "duschen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte duschen.",
        "en": "I want to to shower."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "frühstücken",
    "de": "frühstücken",
    "en": "to eat breakfast",
    "level": "A1",
    "irregular": false,
    "present": [
      "frühstücke",
      "frühstückst",
      "frühstückt",
      "frühstücken",
      "frühstückt",
      "frühstücken"
    ],
    "past": [
      "frühstückte",
      "frühstücktest",
      "frühstückte",
      "frühstückten",
      "frühstücktet",
      "frühstückten"
    ],
    "perfect": [
      "hat",
      "gefrühstückt"
    ],
    "future": [
      "werde frühstücken",
      "wirst frühstücken",
      "wird frühstücken",
      "werden frühstücken",
      "werdet frühstücken",
      "werden frühstücken"
    ],
    "konjII": [
      "würde frühstücken",
      "würdest frühstücken",
      "würde frühstücken",
      "würden frühstücken",
      "würdet frühstücken",
      "würden frühstücken"
    ],
    "imperative": [
      "frühstück!",
      "frühstückt!",
      "frühstücken Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte frühstücken.",
        "en": "I want to to eat breakfast."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "grillen",
    "de": "grillen",
    "en": "to grill",
    "level": "A1",
    "irregular": false,
    "present": [
      "grille",
      "grillst",
      "grillt",
      "grillen",
      "grillt",
      "grillen"
    ],
    "past": [
      "grillte",
      "grilltest",
      "grillte",
      "grillten",
      "grilltet",
      "grillten"
    ],
    "perfect": [
      "hat",
      "gegrillt"
    ],
    "future": [
      "werde grillen",
      "wirst grillen",
      "wird grillen",
      "werden grillen",
      "werdet grillen",
      "werden grillen"
    ],
    "konjII": [
      "würde grillen",
      "würdest grillen",
      "würde grillen",
      "würden grillen",
      "würdet grillen",
      "würden grillen"
    ],
    "imperative": [
      "grill!",
      "grillt!",
      "grillen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte grillen.",
        "en": "I want to to grill."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "joggen",
    "de": "joggen",
    "en": "to jog",
    "level": "A1",
    "irregular": false,
    "present": [
      "jogge",
      "joggst",
      "joggt",
      "joggen",
      "joggt",
      "joggen"
    ],
    "past": [
      "joggte",
      "joggtest",
      "joggte",
      "joggten",
      "joggtet",
      "joggten"
    ],
    "perfect": [
      "ist",
      "gejoggt"
    ],
    "future": [
      "werde joggen",
      "wirst joggen",
      "wird joggen",
      "werden joggen",
      "werdet joggen",
      "werden joggen"
    ],
    "konjII": [
      "würde joggen",
      "würdest joggen",
      "würde joggen",
      "würden joggen",
      "würdet joggen",
      "würden joggen"
    ],
    "imperative": [
      "jogg!",
      "joggt!",
      "joggen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte joggen.",
        "en": "I want to to jog."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'.\n\nNote: This verb uses 'sein' as its auxiliary in the Perfekt because it indicates a change of position or state."
  },
  {
    "id": "kennenlernen",
    "de": "kennenlernen",
    "en": "to get to know",
    "level": "A1",
    "irregular": false,
    "present": [
      "kennenlerne",
      "kennenlernst",
      "kennenlernt",
      "kennenlernen",
      "kennenlernt",
      "kennenlernen"
    ],
    "past": [
      "kennenlernte",
      "kennenlerntest",
      "kennenlernte",
      "kennenlernten",
      "kennenlerntet",
      "kennenlernten"
    ],
    "perfect": [
      "hat",
      "gekennenlernt"
    ],
    "future": [
      "werde kennenlernen",
      "wirst kennenlernen",
      "wird kennenlernen",
      "werden kennenlernen",
      "werdet kennenlernen",
      "werden kennenlernen"
    ],
    "konjII": [
      "würde kennenlernen",
      "würdest kennenlernen",
      "würde kennenlernen",
      "würden kennenlernen",
      "würdet kennenlernen",
      "würden kennenlernen"
    ],
    "imperative": [
      "kennenlern!",
      "kennenlernt!",
      "kennenlernen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte kennenlernen.",
        "en": "I want to to get to know."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "korrigieren",
    "de": "korrigieren",
    "en": "to correct",
    "level": "A1",
    "irregular": false,
    "present": [
      "korrigiere",
      "korrigierst",
      "korrigiert",
      "korrigieren",
      "korrigiert",
      "korrigieren"
    ],
    "past": [
      "korrigierte",
      "korrigiertest",
      "korrigierte",
      "korrigierten",
      "korrigiertet",
      "korrigierten"
    ],
    "perfect": [
      "hat",
      "korrigiert"
    ],
    "future": [
      "werde korrigieren",
      "wirst korrigieren",
      "wird korrigieren",
      "werden korrigieren",
      "werdet korrigieren",
      "werden korrigieren"
    ],
    "konjII": [
      "würde korrigieren",
      "würdest korrigieren",
      "würde korrigieren",
      "würden korrigieren",
      "würdet korrigieren",
      "würden korrigieren"
    ],
    "imperative": [
      "korrigier!",
      "korrigiert!",
      "korrigieren Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte korrigieren.",
        "en": "I want to to correct."
      }
    ],
    "note": "Regular '-ieren' verb. Pattern: always weak/regular. Note: No 'ge-' prefix in the Perfekt (past participle). Examples: 'Ich habe studiert', NOT 'gestudiert'."
  },
  {
    "id": "markieren",
    "de": "markieren",
    "en": "to mark",
    "level": "A1",
    "irregular": false,
    "present": [
      "markiere",
      "markierst",
      "markiert",
      "markieren",
      "markiert",
      "markieren"
    ],
    "past": [
      "markierte",
      "markiertest",
      "markierte",
      "markierten",
      "markiertet",
      "markierten"
    ],
    "perfect": [
      "hat",
      "markiert"
    ],
    "future": [
      "werde markieren",
      "wirst markieren",
      "wird markieren",
      "werden markieren",
      "werdet markieren",
      "werden markieren"
    ],
    "konjII": [
      "würde markieren",
      "würdest markieren",
      "würde markieren",
      "würden markieren",
      "würdet markieren",
      "würden markieren"
    ],
    "imperative": [
      "markier!",
      "markiert!",
      "markieren Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte markieren.",
        "en": "I want to to mark."
      }
    ],
    "note": "Regular '-ieren' verb. Pattern: always weak/regular. Note: No 'ge-' prefix in the Perfekt (past participle). Examples: 'Ich habe studiert', NOT 'gestudiert'."
  },
  {
    "id": "meinen",
    "de": "meinen",
    "en": "to mean/think",
    "level": "A1",
    "irregular": false,
    "present": [
      "meine",
      "meinst",
      "meint",
      "meinen",
      "meint",
      "meinen"
    ],
    "past": [
      "meinte",
      "meintest",
      "meinte",
      "meinten",
      "meintet",
      "meinten"
    ],
    "perfect": [
      "hat",
      "gemeint"
    ],
    "future": [
      "werde meinen",
      "wirst meinen",
      "wird meinen",
      "werden meinen",
      "werdet meinen",
      "werden meinen"
    ],
    "konjII": [
      "würde meinen",
      "würdest meinen",
      "würde meinen",
      "würden meinen",
      "würdet meinen",
      "würden meinen"
    ],
    "imperative": [
      "mein!",
      "meint!",
      "meinen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte meinen.",
        "en": "I want to to mean/think."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "notieren",
    "de": "notieren",
    "en": "to note down",
    "level": "A1",
    "irregular": false,
    "present": [
      "notiere",
      "notierst",
      "notiert",
      "notieren",
      "notiert",
      "notieren"
    ],
    "past": [
      "notierte",
      "notiertest",
      "notierte",
      "notierten",
      "notiertet",
      "notierten"
    ],
    "perfect": [
      "hat",
      "notiert"
    ],
    "future": [
      "werde notieren",
      "wirst notieren",
      "wird notieren",
      "werden notieren",
      "werdet notieren",
      "werden notieren"
    ],
    "konjII": [
      "würde notieren",
      "würdest notieren",
      "würde notieren",
      "würden notieren",
      "würdet notieren",
      "würden notieren"
    ],
    "imperative": [
      "notier!",
      "notiert!",
      "notieren Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte notieren.",
        "en": "I want to to note down."
      }
    ],
    "note": "Regular '-ieren' verb. Pattern: always weak/regular. Note: No 'ge-' prefix in the Perfekt (past participle). Examples: 'Ich habe studiert', NOT 'gestudiert'."
  },
  {
    "id": "rechnen",
    "de": "rechnen",
    "en": "to calculate",
    "level": "A2",
    "irregular": false,
    "present": [
      "rechne",
      "rechnst",
      "rechnt",
      "rechnen",
      "rechnt",
      "rechnen"
    ],
    "past": [
      "rechnte",
      "rechntest",
      "rechnte",
      "rechnten",
      "rechntet",
      "rechnten"
    ],
    "perfect": [
      "hat",
      "gerechnt"
    ],
    "future": [
      "werde rechnen",
      "wirst rechnen",
      "wird rechnen",
      "werden rechnen",
      "werdet rechnen",
      "werden rechnen"
    ],
    "konjII": [
      "würde rechnen",
      "würdest rechnen",
      "würde rechnen",
      "würden rechnen",
      "würdet rechnen",
      "würden rechnen"
    ],
    "imperative": [
      "rechn!",
      "rechnt!",
      "rechnen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte rechnen.",
        "en": "I want to to calculate."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "reiten",
    "de": "reiten",
    "en": "to ride",
    "level": "A1",
    "irregular": false,
    "present": [
      "reite",
      "reitest",
      "reitet",
      "reiten",
      "reitet",
      "reiten"
    ],
    "past": [
      "reitete",
      "reitetest",
      "reitete",
      "reiteten",
      "reitetet",
      "reiteten"
    ],
    "perfect": [
      "ist",
      "gereitet"
    ],
    "future": [
      "werde reiten",
      "wirst reiten",
      "wird reiten",
      "werden reiten",
      "werdet reiten",
      "werden reiten"
    ],
    "konjII": [
      "würde reiten",
      "würdest reiten",
      "würde reiten",
      "würden reiten",
      "würdet reiten",
      "würden reiten"
    ],
    "imperative": [
      "reite!",
      "reitet!",
      "reiten Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte reiten.",
        "en": "I want to to ride."
      }
    ],
    "note": "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'.\n\nNote: This verb uses 'sein' as its auxiliary in the Perfekt because it indicates a change of position or state."
  },
  {
    "id": "rekonstruieren",
    "de": "rekonstruieren",
    "en": "to reconstruct",
    "level": "A2",
    "irregular": false,
    "present": [
      "rekonstruiere",
      "rekonstruierst",
      "rekonstruiert",
      "rekonstruieren",
      "rekonstruiert",
      "rekonstruieren"
    ],
    "past": [
      "rekonstruierte",
      "rekonstruiertest",
      "rekonstruierte",
      "rekonstruierten",
      "rekonstruiertet",
      "rekonstruierten"
    ],
    "perfect": [
      "hat",
      "rekonstruiert"
    ],
    "future": [
      "werde rekonstruieren",
      "wirst rekonstruieren",
      "wird rekonstruieren",
      "werden rekonstruieren",
      "werdet rekonstruieren",
      "werden rekonstruieren"
    ],
    "konjII": [
      "würde rekonstruieren",
      "würdest rekonstruieren",
      "würde rekonstruieren",
      "würden rekonstruieren",
      "würdet rekonstruieren",
      "würden rekonstruieren"
    ],
    "imperative": [
      "rekonstruier!",
      "rekonstruiert!",
      "rekonstruieren Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte rekonstruieren.",
        "en": "I want to to reconstruct."
      }
    ],
    "note": "Regular '-ieren' verb. Pattern: always weak/regular. Note: No 'ge-' prefix in the Perfekt (past participle). Examples: 'Ich habe studiert', NOT 'gestudiert'."
  },
  {
    "id": "rollen",
    "de": "rollen",
    "en": "to roll",
    "level": "A1",
    "irregular": false,
    "present": [
      "rolle",
      "rollst",
      "rollt",
      "rollen",
      "rollt",
      "rollen"
    ],
    "past": [
      "rollte",
      "rolltest",
      "rollte",
      "rollten",
      "rolltet",
      "rollten"
    ],
    "perfect": [
      "hat",
      "gerollt"
    ],
    "future": [
      "werde rollen",
      "wirst rollen",
      "wird rollen",
      "werden rollen",
      "werdet rollen",
      "werden rollen"
    ],
    "konjII": [
      "würde rollen",
      "würdest rollen",
      "würde rollen",
      "würden rollen",
      "würdet rollen",
      "würden rollen"
    ],
    "imperative": [
      "roll!",
      "rollt!",
      "rollen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte rollen.",
        "en": "I want to to roll."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "schütteln",
    "de": "schütteln",
    "en": "to shake",
    "level": "A2",
    "irregular": false,
    "present": [
      "schüttele",
      "schüttelst",
      "schüttelt",
      "schütteln",
      "schüttelt",
      "schütteln"
    ],
    "past": [
      "schüttelte",
      "schütteltest",
      "schüttelte",
      "schüttelten",
      "schütteltet",
      "schüttelten"
    ],
    "perfect": [
      "hat",
      "geschüttelt"
    ],
    "future": [
      "werde schütteln",
      "wirst schütteln",
      "wird schütteln",
      "werden schütteln",
      "werdet schütteln",
      "werden schütteln"
    ],
    "konjII": [
      "würde schütteln",
      "würdest schütteln",
      "würde schütteln",
      "würden schütteln",
      "würdet schütteln",
      "würden schütteln"
    ],
    "imperative": [
      "schüttel!",
      "schüttelt!",
      "schütteln Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte schütteln.",
        "en": "I want to to shake."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "sparen",
    "de": "sparen",
    "en": "to save",
    "level": "A2",
    "irregular": false,
    "present": [
      "spare",
      "sparst",
      "spart",
      "sparen",
      "spart",
      "sparen"
    ],
    "past": [
      "sparte",
      "spartest",
      "sparte",
      "sparten",
      "spartet",
      "sparten"
    ],
    "perfect": [
      "hat",
      "gespart"
    ],
    "future": [
      "werde sparen",
      "wirst sparen",
      "wird sparen",
      "werden sparen",
      "werdet sparen",
      "werden sparen"
    ],
    "konjII": [
      "würde sparen",
      "würdest sparen",
      "würde sparen",
      "würden sparen",
      "würdet sparen",
      "würden sparen"
    ],
    "imperative": [
      "spar!",
      "spart!",
      "sparen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte sparen.",
        "en": "I want to to save."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "spülen",
    "de": "spülen",
    "en": "to rinse",
    "level": "A2",
    "irregular": false,
    "present": [
      "spüle",
      "spülst",
      "spült",
      "spülen",
      "spült",
      "spülen"
    ],
    "past": [
      "spülte",
      "spültest",
      "spülte",
      "spülten",
      "spültet",
      "spülten"
    ],
    "perfect": [
      "hat",
      "gespült"
    ],
    "future": [
      "werde spülen",
      "wirst spülen",
      "wird spülen",
      "werden spülen",
      "werdet spülen",
      "werden spülen"
    ],
    "konjII": [
      "würde spülen",
      "würdest spülen",
      "würde spülen",
      "würden spülen",
      "würdet spülen",
      "würden spülen"
    ],
    "imperative": [
      "spül!",
      "spült!",
      "spülen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte spülen.",
        "en": "I want to to rinse."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "stecken",
    "de": "stecken",
    "en": "to stick/put",
    "level": "A2",
    "irregular": false,
    "present": [
      "stecke",
      "steckst",
      "steckt",
      "stecken",
      "steckt",
      "stecken"
    ],
    "past": [
      "steckte",
      "stecktest",
      "steckte",
      "steckten",
      "stecktet",
      "steckten"
    ],
    "perfect": [
      "hat",
      "gesteckt"
    ],
    "future": [
      "werde stecken",
      "wirst stecken",
      "wird stecken",
      "werden stecken",
      "werdet stecken",
      "werden stecken"
    ],
    "konjII": [
      "würde stecken",
      "würdest stecken",
      "würde stecken",
      "würden stecken",
      "würdet stecken",
      "würden stecken"
    ],
    "imperative": [
      "steck!",
      "steckt!",
      "stecken Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte stecken.",
        "en": "I want to to stick/put."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "stoppen",
    "de": "stoppen",
    "en": "to stop",
    "level": "A1",
    "irregular": false,
    "present": [
      "stoppe",
      "stoppst",
      "stoppt",
      "stoppen",
      "stoppt",
      "stoppen"
    ],
    "past": [
      "stoppte",
      "stopptest",
      "stoppte",
      "stoppten",
      "stopptet",
      "stoppten"
    ],
    "perfect": [
      "hat",
      "gestoppt"
    ],
    "future": [
      "werde stoppen",
      "wirst stoppen",
      "wird stoppen",
      "werden stoppen",
      "werdet stoppen",
      "werden stoppen"
    ],
    "konjII": [
      "würde stoppen",
      "würdest stoppen",
      "würde stoppen",
      "würden stoppen",
      "würdet stoppen",
      "würden stoppen"
    ],
    "imperative": [
      "stopp!",
      "stoppt!",
      "stoppen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte stoppen.",
        "en": "I want to to stop."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "stören",
    "de": "stören",
    "en": "to disturb",
    "level": "A2",
    "irregular": false,
    "present": [
      "störe",
      "störst",
      "stört",
      "stören",
      "stört",
      "stören"
    ],
    "past": [
      "störte",
      "störtest",
      "störte",
      "störten",
      "störtet",
      "störten"
    ],
    "perfect": [
      "hat",
      "gestört"
    ],
    "future": [
      "werde stören",
      "wirst stören",
      "wird stören",
      "werden stören",
      "werdet stören",
      "werden stören"
    ],
    "konjII": [
      "würde stören",
      "würdest stören",
      "würde stören",
      "würden stören",
      "würdet stören",
      "würden stören"
    ],
    "imperative": [
      "stör!",
      "stört!",
      "stören Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte stören.",
        "en": "I want to to disturb."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "streichen",
    "de": "streichen",
    "en": "to paint/stroke",
    "level": "A2",
    "irregular": false,
    "present": [
      "streiche",
      "streichst",
      "streicht",
      "streichen",
      "streicht",
      "streichen"
    ],
    "past": [
      "streichte",
      "streichtest",
      "streichte",
      "streichten",
      "streichtet",
      "streichten"
    ],
    "perfect": [
      "hat",
      "gestreicht"
    ],
    "future": [
      "werde streichen",
      "wirst streichen",
      "wird streichen",
      "werden streichen",
      "werdet streichen",
      "werden streichen"
    ],
    "konjII": [
      "würde streichen",
      "würdest streichen",
      "würde streichen",
      "würden streichen",
      "würdet streichen",
      "würden streichen"
    ],
    "imperative": [
      "streich!",
      "streicht!",
      "streichen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte streichen.",
        "en": "I want to to paint/stroke."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "stricken",
    "de": "stricken",
    "en": "to knit",
    "level": "A2",
    "irregular": false,
    "present": [
      "stricke",
      "strickst",
      "strickt",
      "stricken",
      "strickt",
      "stricken"
    ],
    "past": [
      "strickte",
      "stricktest",
      "strickte",
      "strickten",
      "stricktet",
      "strickten"
    ],
    "perfect": [
      "hat",
      "gestrickt"
    ],
    "future": [
      "werde stricken",
      "wirst stricken",
      "wird stricken",
      "werden stricken",
      "werdet stricken",
      "werden stricken"
    ],
    "konjII": [
      "würde stricken",
      "würdest stricken",
      "würde stricken",
      "würden stricken",
      "würdet stricken",
      "würden stricken"
    ],
    "imperative": [
      "strick!",
      "strickt!",
      "stricken Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte stricken.",
        "en": "I want to to knit."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "teilen",
    "de": "teilen",
    "en": "to share",
    "level": "A2",
    "irregular": false,
    "present": [
      "teile",
      "teilst",
      "teilt",
      "teilen",
      "teilt",
      "teilen"
    ],
    "past": [
      "teilte",
      "teiltest",
      "teilte",
      "teilten",
      "teiltet",
      "teilten"
    ],
    "perfect": [
      "hat",
      "geteilt"
    ],
    "future": [
      "werde teilen",
      "wirst teilen",
      "wird teilen",
      "werden teilen",
      "werdet teilen",
      "werden teilen"
    ],
    "konjII": [
      "würde teilen",
      "würdest teilen",
      "würde teilen",
      "würden teilen",
      "würdet teilen",
      "würden teilen"
    ],
    "imperative": [
      "teil!",
      "teilt!",
      "teilen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte teilen.",
        "en": "I want to to share."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "testen",
    "de": "testen",
    "en": "to test",
    "level": "A1",
    "irregular": false,
    "present": [
      "teste",
      "testest",
      "testet",
      "testen",
      "testet",
      "testen"
    ],
    "past": [
      "testete",
      "testetest",
      "testete",
      "testeten",
      "testetet",
      "testeten"
    ],
    "perfect": [
      "hat",
      "getestet"
    ],
    "future": [
      "werde testen",
      "wirst testen",
      "wird testen",
      "werden testen",
      "werdet testen",
      "werden testen"
    ],
    "konjII": [
      "würde testen",
      "würdest testen",
      "würde testen",
      "würden testen",
      "würdet testen",
      "würden testen"
    ],
    "imperative": [
      "teste!",
      "testet!",
      "testen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte testen.",
        "en": "I want to to test."
      }
    ],
    "note": "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'."
  },
  {
    "id": "töten",
    "de": "töten",
    "en": "to kill",
    "level": "A2",
    "irregular": false,
    "present": [
      "töte",
      "tötest",
      "tötet",
      "töten",
      "tötet",
      "töten"
    ],
    "past": [
      "tötete",
      "tötetest",
      "tötete",
      "töteten",
      "tötetet",
      "töteten"
    ],
    "perfect": [
      "hat",
      "getötet"
    ],
    "future": [
      "werde töten",
      "wirst töten",
      "wird töten",
      "werden töten",
      "werdet töten",
      "werden töten"
    ],
    "konjII": [
      "würde töten",
      "würdest töten",
      "würde töten",
      "würden töten",
      "würdet töten",
      "würden töten"
    ],
    "imperative": [
      "töte!",
      "tötet!",
      "töten Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte töten.",
        "en": "I want to to kill."
      }
    ],
    "note": "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'."
  },
  {
    "id": "trauen",
    "de": "trauen",
    "en": "to trust",
    "level": "A2",
    "irregular": false,
    "present": [
      "traue",
      "traust",
      "traut",
      "trauen",
      "traut",
      "trauen"
    ],
    "past": [
      "traute",
      "trautest",
      "traute",
      "trauten",
      "trautet",
      "trauten"
    ],
    "perfect": [
      "hat",
      "getraut"
    ],
    "future": [
      "werde trauen",
      "wirst trauen",
      "wird trauen",
      "werden trauen",
      "werdet trauen",
      "werden trauen"
    ],
    "konjII": [
      "würde trauen",
      "würdest trauen",
      "würde trauen",
      "würden trauen",
      "würdet trauen",
      "würden trauen"
    ],
    "imperative": [
      "trau!",
      "traut!",
      "trauen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte trauen.",
        "en": "I want to to trust."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "trennen",
    "de": "trennen",
    "en": "to separate",
    "level": "A2",
    "irregular": false,
    "present": [
      "trenne",
      "trennst",
      "trennt",
      "trennen",
      "trennt",
      "trennen"
    ],
    "past": [
      "trennte",
      "trenntest",
      "trennte",
      "trennten",
      "trenntet",
      "trennten"
    ],
    "perfect": [
      "hat",
      "getrennt"
    ],
    "future": [
      "werde trennen",
      "wirst trennen",
      "wird trennen",
      "werden trennen",
      "werdet trennen",
      "werden trennen"
    ],
    "konjII": [
      "würde trennen",
      "würdest trennen",
      "würde trennen",
      "würden trennen",
      "würdet trennen",
      "würden trennen"
    ],
    "imperative": [
      "trenn!",
      "trennt!",
      "trennen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte trennen.",
        "en": "I want to to separate."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "trocknen",
    "de": "trocknen",
    "en": "to dry",
    "level": "A2",
    "irregular": false,
    "present": [
      "trockne",
      "trocknest",
      "trocknet",
      "trocknen",
      "trocknet",
      "trocknen"
    ],
    "past": [
      "trocknete",
      "trocknetest",
      "trocknete",
      "trockneten",
      "trocknetet",
      "trockneten"
    ],
    "perfect": [
      "hat",
      "getrocknet"
    ],
    "future": [
      "werde trocknen",
      "wirst trocknen",
      "wird trocknen",
      "werden trocknen",
      "werdet trocknen",
      "werden trocknen"
    ],
    "konjII": [
      "würde trocknen",
      "würdest trocknen",
      "würde trocknen",
      "würden trocknen",
      "würdet trocknen",
      "würden trocknen"
    ],
    "imperative": [
      "trockne!",
      "trocknet!",
      "trocknen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte trocknen.",
        "en": "I want to to dry."
      }
    ],
    "note": "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'."
  },
  {
    "id": "übernachten",
    "de": "übernachten",
    "en": "to stay overnight",
    "level": "A1",
    "irregular": false,
    "present": [
      "übernachte",
      "übernachtest",
      "übernachtet",
      "übernachten",
      "übernachtet",
      "übernachten"
    ],
    "past": [
      "übernachtete",
      "übernachtetest",
      "übernachtete",
      "übernachteten",
      "übernachtetet",
      "übernachteten"
    ],
    "perfect": [
      "hat",
      "geübernachtet"
    ],
    "future": [
      "werde übernachten",
      "wirst übernachten",
      "wird übernachten",
      "werden übernachten",
      "werdet übernachten",
      "werden übernachten"
    ],
    "konjII": [
      "würde übernachten",
      "würdest übernachten",
      "würde übernachten",
      "würden übernachten",
      "würdet übernachten",
      "würden übernachten"
    ],
    "imperative": [
      "übernachte!",
      "übernachtet!",
      "übernachten Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte übernachten.",
        "en": "I want to to stay overnight."
      }
    ],
    "note": "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'."
  },
  {
    "id": "überprüfen",
    "de": "überprüfen",
    "en": "to check",
    "level": "A2",
    "irregular": false,
    "present": [
      "überprüfe",
      "überprüfst",
      "überprüft",
      "überprüfen",
      "überprüft",
      "überprüfen"
    ],
    "past": [
      "überprüfte",
      "überprüftest",
      "überprüfte",
      "überprüften",
      "überprüftet",
      "überprüften"
    ],
    "perfect": [
      "hat",
      "geüberprüft"
    ],
    "future": [
      "werde überprüfen",
      "wirst überprüfen",
      "wird überprüfen",
      "werden überprüfen",
      "werdet überprüfen",
      "werden überprüfen"
    ],
    "konjII": [
      "würde überprüfen",
      "würdest überprüfen",
      "würde überprüfen",
      "würden überprüfen",
      "würdet überprüfen",
      "würden überprüfen"
    ],
    "imperative": [
      "überprüf!",
      "überprüft!",
      "überprüfen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte überprüfen.",
        "en": "I want to to check."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "unterrichten",
    "de": "unterrichten",
    "en": "to teach",
    "level": "A2",
    "irregular": false,
    "present": [
      "unterrichte",
      "unterrichtest",
      "unterrichtet",
      "unterrichten",
      "unterrichtet",
      "unterrichten"
    ],
    "past": [
      "unterrichtete",
      "unterrichtetest",
      "unterrichtete",
      "unterrichteten",
      "unterrichtetet",
      "unterrichteten"
    ],
    "perfect": [
      "hat",
      "geunterrichtet"
    ],
    "future": [
      "werde unterrichten",
      "wirst unterrichten",
      "wird unterrichten",
      "werden unterrichten",
      "werdet unterrichten",
      "werden unterrichten"
    ],
    "konjII": [
      "würde unterrichten",
      "würdest unterrichten",
      "würde unterrichten",
      "würden unterrichten",
      "würdet unterrichten",
      "würden unterrichten"
    ],
    "imperative": [
      "unterrichte!",
      "unterrichtet!",
      "unterrichten Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte unterrichten.",
        "en": "I want to to teach."
      }
    ],
    "note": "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'."
  },
  {
    "id": "untersuchen",
    "de": "untersuchen",
    "en": "to examine",
    "level": "A2",
    "irregular": false,
    "present": [
      "untersuche",
      "untersuchst",
      "untersucht",
      "untersuchen",
      "untersucht",
      "untersuchen"
    ],
    "past": [
      "untersuchte",
      "untersuchtest",
      "untersuchte",
      "untersuchten",
      "untersuchtet",
      "untersuchten"
    ],
    "perfect": [
      "hat",
      "geuntersucht"
    ],
    "future": [
      "werde untersuchen",
      "wirst untersuchen",
      "wird untersuchen",
      "werden untersuchen",
      "werdet untersuchen",
      "werden untersuchen"
    ],
    "konjII": [
      "würde untersuchen",
      "würdest untersuchen",
      "würde untersuchen",
      "würden untersuchen",
      "würdet untersuchen",
      "würden untersuchen"
    ],
    "imperative": [
      "untersuch!",
      "untersucht!",
      "untersuchen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte untersuchen.",
        "en": "I want to to examine."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "verabreden",
    "de": "verabreden",
    "en": "to make an appointment",
    "level": "A2",
    "irregular": false,
    "present": [
      "verabrede",
      "verabredest",
      "verabredet",
      "verabreden",
      "verabredet",
      "verabreden"
    ],
    "past": [
      "verabredete",
      "verabredetest",
      "verabredete",
      "verabredeten",
      "verabredetet",
      "verabredeten"
    ],
    "perfect": [
      "hat",
      "verabredet"
    ],
    "future": [
      "werde verabreden",
      "wirst verabreden",
      "wird verabreden",
      "werden verabreden",
      "werdet verabreden",
      "werden verabreden"
    ],
    "konjII": [
      "würde verabreden",
      "würdest verabreden",
      "würde verabreden",
      "würden verabreden",
      "würdet verabreden",
      "würden verabreden"
    ],
    "imperative": [
      "verabrede!",
      "verabredet!",
      "verabreden Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte verabreden.",
        "en": "I want to to make an appointment."
      }
    ],
    "note": "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'."
  },
  {
    "id": "verbessern",
    "de": "verbessern",
    "en": "to improve",
    "level": "A2",
    "irregular": false,
    "present": [
      "verbessere",
      "verbesserst",
      "verbessert",
      "verbessern",
      "verbessert",
      "verbessern"
    ],
    "past": [
      "verbesserte",
      "verbessertest",
      "verbesserte",
      "verbesserten",
      "verbessertet",
      "verbesserten"
    ],
    "perfect": [
      "hat",
      "verbessert"
    ],
    "future": [
      "werde verbessern",
      "wirst verbessern",
      "wird verbessern",
      "werden verbessern",
      "werdet verbessern",
      "werden verbessern"
    ],
    "konjII": [
      "würde verbessern",
      "würdest verbessern",
      "würde verbessern",
      "würden verbessern",
      "würdet verbessern",
      "würden verbessern"
    ],
    "imperative": [
      "verbesser!",
      "verbessert!",
      "verbessern Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte verbessern.",
        "en": "I want to to improve."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "verdienen",
    "de": "verdienen",
    "en": "to earn",
    "level": "A2",
    "irregular": false,
    "present": [
      "verdiene",
      "verdienst",
      "verdient",
      "verdienen",
      "verdient",
      "verdienen"
    ],
    "past": [
      "verdiente",
      "verdientest",
      "verdiente",
      "verdienten",
      "verdientet",
      "verdienten"
    ],
    "perfect": [
      "hat",
      "verdient"
    ],
    "future": [
      "werde verdienen",
      "wirst verdienen",
      "wird verdienen",
      "werden verdienen",
      "werdet verdienen",
      "werden verdienen"
    ],
    "konjII": [
      "würde verdienen",
      "würdest verdienen",
      "würde verdienen",
      "würden verdienen",
      "würdet verdienen",
      "würden verdienen"
    ],
    "imperative": [
      "verdien!",
      "verdient!",
      "verdienen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte verdienen.",
        "en": "I want to to earn."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "vereinbaren",
    "de": "vereinbaren",
    "en": "to agree upon",
    "level": "A2",
    "irregular": false,
    "present": [
      "vereinbare",
      "vereinbarst",
      "vereinbart",
      "vereinbaren",
      "vereinbart",
      "vereinbaren"
    ],
    "past": [
      "vereinbarte",
      "vereinbartest",
      "vereinbarte",
      "vereinbarten",
      "vereinbartet",
      "vereinbarten"
    ],
    "perfect": [
      "hat",
      "vereinbart"
    ],
    "future": [
      "werde vereinbaren",
      "wirst vereinbaren",
      "wird vereinbaren",
      "werden vereinbaren",
      "werdet vereinbaren",
      "werden vereinbaren"
    ],
    "konjII": [
      "würde vereinbaren",
      "würdest vereinbaren",
      "würde vereinbaren",
      "würden vereinbaren",
      "würdet vereinbaren",
      "würden vereinbaren"
    ],
    "imperative": [
      "vereinbar!",
      "vereinbart!",
      "vereinbaren Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte vereinbaren.",
        "en": "I want to to agree upon."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "verfolgen",
    "de": "verfolgen",
    "en": "to follow",
    "level": "A2",
    "irregular": false,
    "present": [
      "verfolge",
      "verfolgst",
      "verfolgt",
      "verfolgen",
      "verfolgt",
      "verfolgen"
    ],
    "past": [
      "verfolgte",
      "verfolgtest",
      "verfolgte",
      "verfolgten",
      "verfolgtet",
      "verfolgten"
    ],
    "perfect": [
      "hat",
      "verfolgt"
    ],
    "future": [
      "werde verfolgen",
      "wirst verfolgen",
      "wird verfolgen",
      "werden verfolgen",
      "werdet verfolgen",
      "werden verfolgen"
    ],
    "konjII": [
      "würde verfolgen",
      "würdest verfolgen",
      "würde verfolgen",
      "würden verfolgen",
      "würdet verfolgen",
      "würden verfolgen"
    ],
    "imperative": [
      "verfolg!",
      "verfolgt!",
      "verfolgen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte verfolgen.",
        "en": "I want to to follow."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "vergleichen",
    "de": "vergleichen",
    "en": "to compare",
    "level": "A2",
    "irregular": false,
    "present": [
      "vergleiche",
      "vergleichst",
      "vergleicht",
      "vergleichen",
      "vergleicht",
      "vergleichen"
    ],
    "past": [
      "vergleichte",
      "vergleichtest",
      "vergleichte",
      "vergleichten",
      "vergleichtet",
      "vergleichten"
    ],
    "perfect": [
      "hat",
      "vergleicht"
    ],
    "future": [
      "werde vergleichen",
      "wirst vergleichen",
      "wird vergleichen",
      "werden vergleichen",
      "werdet vergleichen",
      "werden vergleichen"
    ],
    "konjII": [
      "würde vergleichen",
      "würdest vergleichen",
      "würde vergleichen",
      "würden vergleichen",
      "würdet vergleichen",
      "würden vergleichen"
    ],
    "imperative": [
      "vergleich!",
      "vergleicht!",
      "vergleichen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte vergleichen.",
        "en": "I want to to compare."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "vergrößern",
    "de": "vergrößern",
    "en": "to enlarge",
    "level": "A2",
    "irregular": false,
    "present": [
      "vergrößere",
      "vergrößerst",
      "vergrößert",
      "vergrößern",
      "vergrößert",
      "vergrößern"
    ],
    "past": [
      "vergrößerte",
      "vergrößertest",
      "vergrößerte",
      "vergrößerten",
      "vergrößertet",
      "vergrößerten"
    ],
    "perfect": [
      "hat",
      "vergrößert"
    ],
    "future": [
      "werde vergrößern",
      "wirst vergrößern",
      "wird vergrößern",
      "werden vergrößern",
      "werdet vergrößern",
      "werden vergrößern"
    ],
    "konjII": [
      "würde vergrößern",
      "würdest vergrößern",
      "würde vergrößern",
      "würden vergrößern",
      "würdet vergrößern",
      "würden vergrößern"
    ],
    "imperative": [
      "vergrößer!",
      "vergrößert!",
      "vergrößern Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte vergrößern.",
        "en": "I want to to enlarge."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "verhungern",
    "de": "verhungern",
    "en": "to starve",
    "level": "A2",
    "irregular": false,
    "present": [
      "verhungere",
      "verhungerst",
      "verhungert",
      "verhungern",
      "verhungert",
      "verhungern"
    ],
    "past": [
      "verhungerte",
      "verhungertest",
      "verhungerte",
      "verhungerten",
      "verhungertet",
      "verhungerten"
    ],
    "perfect": [
      "ist",
      "verhungert"
    ],
    "future": [
      "werde verhungern",
      "wirst verhungern",
      "wird verhungern",
      "werden verhungern",
      "werdet verhungern",
      "werden verhungern"
    ],
    "konjII": [
      "würde verhungern",
      "würdest verhungern",
      "würde verhungern",
      "würden verhungern",
      "würdet verhungern",
      "würden verhungern"
    ],
    "imperative": [
      "verhunger!",
      "verhungert!",
      "verhungern Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte verhungern.",
        "en": "I want to to starve."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'.\n\nNote: This verb uses 'sein' as its auxiliary in the Perfekt because it indicates a change of position or state."
  },
  {
    "id": "verirren",
    "de": "verirren",
    "en": "to get lost",
    "level": "A2",
    "irregular": false,
    "present": [
      "verirre",
      "verirrst",
      "verirrt",
      "verirren",
      "verirrt",
      "verirren"
    ],
    "past": [
      "verirrte",
      "verirrtest",
      "verirrte",
      "verirrten",
      "verirrtet",
      "verirrten"
    ],
    "perfect": [
      "hat",
      "verirrt"
    ],
    "future": [
      "werde verirren",
      "wirst verirren",
      "wird verirren",
      "werden verirren",
      "werdet verirren",
      "werden verirren"
    ],
    "konjII": [
      "würde verirren",
      "würdest verirren",
      "würde verirren",
      "würden verirren",
      "würdet verirren",
      "würden verirren"
    ],
    "imperative": [
      "verirr!",
      "verirrt!",
      "verirren Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte verirren.",
        "en": "I want to to get lost."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "verkleinern",
    "de": "verkleinern",
    "en": "to reduce",
    "level": "A2",
    "irregular": false,
    "present": [
      "verkleinere",
      "verkleinerst",
      "verkleinert",
      "verkleinern",
      "verkleinert",
      "verkleinern"
    ],
    "past": [
      "verkleinerte",
      "verkleinertest",
      "verkleinerte",
      "verkleinerten",
      "verkleinertet",
      "verkleinerten"
    ],
    "perfect": [
      "hat",
      "verkleinert"
    ],
    "future": [
      "werde verkleinern",
      "wirst verkleinern",
      "wird verkleinern",
      "werden verkleinern",
      "werdet verkleinern",
      "werden verkleinern"
    ],
    "konjII": [
      "würde verkleinern",
      "würdest verkleinern",
      "würde verkleinern",
      "würden verkleinern",
      "würdet verkleinern",
      "würden verkleinern"
    ],
    "imperative": [
      "verkleiner!",
      "verkleinert!",
      "verkleinern Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte verkleinern.",
        "en": "I want to to reduce."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "verliehen",
    "de": "verliehen",
    "en": "to lend",
    "level": "A2",
    "irregular": false,
    "present": [
      "verliehe",
      "verliehst",
      "verlieht",
      "verliehen",
      "verlieht",
      "verliehen"
    ],
    "past": [
      "verliehte",
      "verliehtest",
      "verliehte",
      "verliehten",
      "verliehtet",
      "verliehten"
    ],
    "perfect": [
      "hat",
      "verlieht"
    ],
    "future": [
      "werde verliehen",
      "wirst verliehen",
      "wird verliehen",
      "werden verliehen",
      "werdet verliehen",
      "werden verliehen"
    ],
    "konjII": [
      "würde verliehen",
      "würdest verliehen",
      "würde verliehen",
      "würden verliehen",
      "würdet verliehen",
      "würden verliehen"
    ],
    "imperative": [
      "verlieh!",
      "verlieht!",
      "verliehen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte verliehen.",
        "en": "I want to to lend."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "vermieten",
    "de": "vermieten",
    "en": "to rent out",
    "level": "A2",
    "irregular": false,
    "present": [
      "vermiete",
      "vermietest",
      "vermietet",
      "vermieten",
      "vermietet",
      "vermieten"
    ],
    "past": [
      "vermietete",
      "vermietetest",
      "vermietete",
      "vermieteten",
      "vermietetet",
      "vermieteten"
    ],
    "perfect": [
      "hat",
      "vermietet"
    ],
    "future": [
      "werde vermieten",
      "wirst vermieten",
      "wird vermieten",
      "werden vermieten",
      "werdet vermieten",
      "werden vermieten"
    ],
    "konjII": [
      "würde vermieten",
      "würdest vermieten",
      "würde vermieten",
      "würden vermieten",
      "würdet vermieten",
      "würden vermieten"
    ],
    "imperative": [
      "vermiete!",
      "vermietet!",
      "vermieten Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte vermieten.",
        "en": "I want to to rent out."
      }
    ],
    "note": "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'."
  },
  {
    "id": "vermissen",
    "de": "vermissen",
    "en": "to miss",
    "level": "A1",
    "irregular": false,
    "present": [
      "vermisse",
      "vermissst",
      "vermisst",
      "vermissen",
      "vermisst",
      "vermissen"
    ],
    "past": [
      "vermisste",
      "vermisstest",
      "vermisste",
      "vermissten",
      "vermisstet",
      "vermissten"
    ],
    "perfect": [
      "hat",
      "vermisst"
    ],
    "future": [
      "werde vermissen",
      "wirst vermissen",
      "wird vermissen",
      "werden vermissen",
      "werdet vermissen",
      "werden vermissen"
    ],
    "konjII": [
      "würde vermissen",
      "würdest vermissen",
      "würde vermissen",
      "würden vermissen",
      "würdet vermissen",
      "würden vermissen"
    ],
    "imperative": [
      "vermiss!",
      "vermisst!",
      "vermissen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte vermissen.",
        "en": "I want to to miss."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "verpassen",
    "de": "verpassen",
    "en": "to miss (bus/train)",
    "level": "A2",
    "irregular": false,
    "present": [
      "verpasse",
      "verpassst",
      "verpasst",
      "verpassen",
      "verpasst",
      "verpassen"
    ],
    "past": [
      "verpasste",
      "verpasstest",
      "verpasste",
      "verpassten",
      "verpasstet",
      "verpassten"
    ],
    "perfect": [
      "hat",
      "verpasst"
    ],
    "future": [
      "werde verpassen",
      "wirst verpassen",
      "wird verpassen",
      "werden verpassen",
      "werdet verpassen",
      "werden verpassen"
    ],
    "konjII": [
      "würde verpassen",
      "würdest verpassen",
      "würde verpassen",
      "würden verpassen",
      "würdet verpassen",
      "würden verpassen"
    ],
    "imperative": [
      "verpass!",
      "verpasst!",
      "verpassen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte verpassen.",
        "en": "I want to to miss (bus/train)."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "verreisen",
    "de": "verreisen",
    "en": "to go on a trip",
    "level": "A2",
    "irregular": false,
    "present": [
      "verreise",
      "verreisst",
      "verreist",
      "verreisen",
      "verreist",
      "verreisen"
    ],
    "past": [
      "verreiste",
      "verreistest",
      "verreiste",
      "verreisten",
      "verreistet",
      "verreisten"
    ],
    "perfect": [
      "ist",
      "verreist"
    ],
    "future": [
      "werde verreisen",
      "wirst verreisen",
      "wird verreisen",
      "werden verreisen",
      "werdet verreisen",
      "werden verreisen"
    ],
    "konjII": [
      "würde verreisen",
      "würdest verreisen",
      "würde verreisen",
      "würden verreisen",
      "würdet verreisen",
      "würden verreisen"
    ],
    "imperative": [
      "verreis!",
      "verreist!",
      "verreisen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte verreisen.",
        "en": "I want to to go on a trip."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'.\n\nNote: This verb uses 'sein' as its auxiliary in the Perfekt because it indicates a change of position or state."
  },
  {
    "id": "verrutschen",
    "de": "verrutschen",
    "en": "to slip",
    "level": "A2",
    "irregular": false,
    "present": [
      "verrutsche",
      "verrutschst",
      "verrutscht",
      "verrutschen",
      "verrutscht",
      "verrutschen"
    ],
    "past": [
      "verrutschte",
      "verrutschtest",
      "verrutschte",
      "verrutschten",
      "verrutschtet",
      "verrutschten"
    ],
    "perfect": [
      "ist",
      "verrutscht"
    ],
    "future": [
      "werde verrutschen",
      "wirst verrutschen",
      "wird verrutschen",
      "werden verrutschen",
      "werdet verrutschen",
      "werden verrutschen"
    ],
    "konjII": [
      "würde verrutschen",
      "würdest verrutschen",
      "würde verrutschen",
      "würden verrutschen",
      "würdet verrutschen",
      "würden verrutschen"
    ],
    "imperative": [
      "verrutsch!",
      "verrutscht!",
      "verrutschen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte verrutschen.",
        "en": "I want to to slip."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'.\n\nNote: This verb uses 'sein' as its auxiliary in the Perfekt because it indicates a change of position or state."
  },
  {
    "id": "verstärken",
    "de": "verstärken",
    "en": "to strengthen",
    "level": "A2",
    "irregular": false,
    "present": [
      "verstärke",
      "verstärkst",
      "verstärkt",
      "verstärken",
      "verstärkt",
      "verstärken"
    ],
    "past": [
      "verstärkte",
      "verstärktest",
      "verstärkte",
      "verstärkten",
      "verstärktet",
      "verstärkten"
    ],
    "perfect": [
      "hat",
      "verstärkt"
    ],
    "future": [
      "werde verstärken",
      "wirst verstärken",
      "wird verstärken",
      "werden verstärken",
      "werdet verstärken",
      "werden verstärken"
    ],
    "konjII": [
      "würde verstärken",
      "würdest verstärken",
      "würde verstärken",
      "würden verstärken",
      "würdet verstärken",
      "würden verstärken"
    ],
    "imperative": [
      "verstärk!",
      "verstärkt!",
      "verstärken Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte verstärken.",
        "en": "I want to to strengthen."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "verstecken",
    "de": "verstecken",
    "en": "to hide",
    "level": "A2",
    "irregular": false,
    "present": [
      "verstecke",
      "versteckst",
      "versteckt",
      "verstecken",
      "versteckt",
      "verstecken"
    ],
    "past": [
      "versteckte",
      "verstecktest",
      "versteckte",
      "versteckten",
      "verstecktet",
      "versteckten"
    ],
    "perfect": [
      "hat",
      "versteckt"
    ],
    "future": [
      "werde verstecken",
      "wirst verstecken",
      "wird verstecken",
      "werden verstecken",
      "werdet verstecken",
      "werden verstecken"
    ],
    "konjII": [
      "würde verstecken",
      "würdest verstecken",
      "würde verstecken",
      "würden verstecken",
      "würdet verstecken",
      "würden verstecken"
    ],
    "imperative": [
      "versteck!",
      "versteckt!",
      "verstecken Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte verstecken.",
        "en": "I want to to hide."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "verteilen",
    "de": "verteilen",
    "en": "to distribute",
    "level": "A2",
    "irregular": false,
    "present": [
      "verteile",
      "verteilst",
      "verteilt",
      "verteilen",
      "verteilt",
      "verteilen"
    ],
    "past": [
      "verteilte",
      "verteiltest",
      "verteilte",
      "verteilten",
      "verteiltet",
      "verteilten"
    ],
    "perfect": [
      "hat",
      "verteilt"
    ],
    "future": [
      "werde verteilen",
      "wirst verteilen",
      "wird verteilen",
      "werden verteilen",
      "werdet verteilen",
      "werden verteilen"
    ],
    "konjII": [
      "würde verteilen",
      "würdest verteilen",
      "würde verteilen",
      "würden verteilen",
      "würdet verteilen",
      "würden verteilen"
    ],
    "imperative": [
      "verteil!",
      "verteilt!",
      "verteilen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte verteilen.",
        "en": "I want to to distribute."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "vertrauen",
    "de": "vertrauen",
    "en": "to trust",
    "level": "A2",
    "irregular": false,
    "present": [
      "vertraue",
      "vertraust",
      "vertraut",
      "vertrauen",
      "vertraut",
      "vertrauen"
    ],
    "past": [
      "vertraute",
      "vertrautest",
      "vertraute",
      "vertrauten",
      "vertrautet",
      "vertrauten"
    ],
    "perfect": [
      "hat",
      "vertraut"
    ],
    "future": [
      "werde vertrauen",
      "wirst vertrauen",
      "wird vertrauen",
      "werden vertrauen",
      "werdet vertrauen",
      "werden vertrauen"
    ],
    "konjII": [
      "würde vertrauen",
      "würdest vertrauen",
      "würde vertrauen",
      "würden vertrauen",
      "würdet vertrauen",
      "würden vertrauen"
    ],
    "imperative": [
      "vertrau!",
      "vertraut!",
      "vertrauen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte vertrauen.",
        "en": "I want to to trust."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "verursachen",
    "de": "verursachen",
    "en": "to cause",
    "level": "A2",
    "irregular": false,
    "present": [
      "verursache",
      "verursachst",
      "verursacht",
      "verursachen",
      "verursacht",
      "verursachen"
    ],
    "past": [
      "verursachte",
      "verursachtest",
      "verursachte",
      "verursachten",
      "verursachtet",
      "verursachten"
    ],
    "perfect": [
      "hat",
      "verursacht"
    ],
    "future": [
      "werde verursachen",
      "wirst verursachen",
      "wird verursachen",
      "werden verursachen",
      "werdet verursachen",
      "werden verursachen"
    ],
    "konjII": [
      "würde verursachen",
      "würdest verursachen",
      "würde verursachen",
      "würden verursachen",
      "würdet verursachen",
      "würden verursachen"
    ],
    "imperative": [
      "verursach!",
      "verursacht!",
      "verursachen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte verursachen.",
        "en": "I want to to cause."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "vervollständigen",
    "de": "vervollständigen",
    "en": "to complete",
    "level": "A2",
    "irregular": false,
    "present": [
      "vervollständige",
      "vervollständigst",
      "vervollständigt",
      "vervollständigen",
      "vervollständigt",
      "vervollständigen"
    ],
    "past": [
      "vervollständigte",
      "vervollständigtest",
      "vervollständigte",
      "vervollständigten",
      "vervollständigtet",
      "vervollständigten"
    ],
    "perfect": [
      "hat",
      "vervollständigt"
    ],
    "future": [
      "werde vervollständigen",
      "wirst vervollständigen",
      "wird vervollständigen",
      "werden vervollständigen",
      "werdet vervollständigen",
      "werden vervollständigen"
    ],
    "konjII": [
      "würde vervollständigen",
      "würdest vervollständigen",
      "würde vervollständigen",
      "würden vervollständigen",
      "würdet vervollständigen",
      "würden vervollständigen"
    ],
    "imperative": [
      "vervollständig!",
      "vervollständigt!",
      "vervollständigen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte vervollständigen.",
        "en": "I want to to complete."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "verwechseln",
    "de": "verwechseln",
    "en": "to mix up",
    "level": "A2",
    "irregular": false,
    "present": [
      "verwechsele",
      "verwechselst",
      "verwechselt",
      "verwechseln",
      "verwechselt",
      "verwechseln"
    ],
    "past": [
      "verwechselte",
      "verwechseltest",
      "verwechselte",
      "verwechselten",
      "verwechseltet",
      "verwechselten"
    ],
    "perfect": [
      "hat",
      "verwechselt"
    ],
    "future": [
      "werde verwechseln",
      "wirst verwechseln",
      "wird verwechseln",
      "werden verwechseln",
      "werdet verwechseln",
      "werden verwechseln"
    ],
    "konjII": [
      "würde verwechseln",
      "würdest verwechseln",
      "würde verwechseln",
      "würden verwechseln",
      "würdet verwechseln",
      "würden verwechseln"
    ],
    "imperative": [
      "verwechsel!",
      "verwechselt!",
      "verwechseln Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte verwechseln.",
        "en": "I want to to mix up."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "verwenden",
    "de": "verwenden",
    "en": "to use",
    "level": "A2",
    "irregular": false,
    "present": [
      "verwende",
      "verwendest",
      "verwendet",
      "verwenden",
      "verwendet",
      "verwenden"
    ],
    "past": [
      "verwendete",
      "verwendetest",
      "verwendete",
      "verwendeten",
      "verwendetet",
      "verwendeten"
    ],
    "perfect": [
      "hat",
      "verwendet"
    ],
    "future": [
      "werde verwenden",
      "wirst verwenden",
      "wird verwenden",
      "werden verwenden",
      "werdet verwenden",
      "werden verwenden"
    ],
    "konjII": [
      "würde verwenden",
      "würdest verwenden",
      "würde verwenden",
      "würden verwenden",
      "würdet verwenden",
      "würden verwenden"
    ],
    "imperative": [
      "verwende!",
      "verwendet!",
      "verwenden Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte verwenden.",
        "en": "I want to to use."
      }
    ],
    "note": "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'."
  },
  {
    "id": "verzichten",
    "de": "verzichten",
    "en": "to do without",
    "level": "A2",
    "irregular": false,
    "present": [
      "verzichte",
      "verzichtest",
      "verzichtet",
      "verzichten",
      "verzichtet",
      "verzichten"
    ],
    "past": [
      "verzichtete",
      "verzichtetest",
      "verzichtete",
      "verzichteten",
      "verzichtetet",
      "verzichteten"
    ],
    "perfect": [
      "hat",
      "verzichtet"
    ],
    "future": [
      "werde verzichten",
      "wirst verzichten",
      "wird verzichten",
      "werden verzichten",
      "werdet verzichten",
      "werden verzichten"
    ],
    "konjII": [
      "würde verzichten",
      "würdest verzichten",
      "würde verzichten",
      "würden verzichten",
      "würdet verzichten",
      "würden verzichten"
    ],
    "imperative": [
      "verzichte!",
      "verzichtet!",
      "verzichten Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte verzichten.",
        "en": "I want to to do without."
      }
    ],
    "note": "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'."
  },
  {
    "id": "vorbereiten",
    "de": "vorbereiten",
    "en": "to prepare",
    "level": "A2",
    "irregular": false,
    "present": [
      "vorbereite",
      "vorbereitest",
      "vorbereitet",
      "vorbereiten",
      "vorbereitet",
      "vorbereiten"
    ],
    "past": [
      "vorbereitete",
      "vorbereitetest",
      "vorbereitete",
      "vorbereiteten",
      "vorbereitetet",
      "vorbereiteten"
    ],
    "perfect": [
      "hat",
      "gevorbereitet"
    ],
    "future": [
      "werde vorbereiten",
      "wirst vorbereiten",
      "wird vorbereiten",
      "werden vorbereiten",
      "werdet vorbereiten",
      "werden vorbereiten"
    ],
    "konjII": [
      "würde vorbereiten",
      "würdest vorbereiten",
      "würde vorbereiten",
      "würden vorbereiten",
      "würdet vorbereiten",
      "würden vorbereiten"
    ],
    "imperative": [
      "vorbereite!",
      "vorbereitet!",
      "vorbereiten Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte vorbereiten.",
        "en": "I want to to prepare."
      }
    ],
    "note": "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'."
  },
  {
    "id": "vorstellen",
    "de": "vorstellen",
    "en": "to introduce",
    "level": "A2",
    "irregular": false,
    "present": [
      "vorstelle",
      "vorstellst",
      "vorstellt",
      "vorstellen",
      "vorstellt",
      "vorstellen"
    ],
    "past": [
      "vorstellte",
      "vorstelltest",
      "vorstellte",
      "vorstellten",
      "vorstelltet",
      "vorstellten"
    ],
    "perfect": [
      "hat",
      "gevorstellt"
    ],
    "future": [
      "werde vorstellen",
      "wirst vorstellen",
      "wird vorstellen",
      "werden vorstellen",
      "werdet vorstellen",
      "werden vorstellen"
    ],
    "konjII": [
      "würde vorstellen",
      "würdest vorstellen",
      "würde vorstellen",
      "würden vorstellen",
      "würdet vorstellen",
      "würden vorstellen"
    ],
    "imperative": [
      "vorstell!",
      "vorstellt!",
      "vorstellen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte vorstellen.",
        "en": "I want to to introduce."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "wählen",
    "de": "wählen",
    "en": "to choose/vote",
    "level": "A1",
    "irregular": false,
    "present": [
      "wähle",
      "wählst",
      "wählt",
      "wählen",
      "wählt",
      "wählen"
    ],
    "past": [
      "wählte",
      "wähltest",
      "wählte",
      "wählten",
      "wähltet",
      "wählten"
    ],
    "perfect": [
      "hat",
      "gewählt"
    ],
    "future": [
      "werde wählen",
      "wirst wählen",
      "wird wählen",
      "werden wählen",
      "werdet wählen",
      "werden wählen"
    ],
    "konjII": [
      "würde wählen",
      "würdest wählen",
      "würde wählen",
      "würden wählen",
      "würdet wählen",
      "würden wählen"
    ],
    "imperative": [
      "wähl!",
      "wählt!",
      "wählen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte wählen.",
        "en": "I want to to choose/vote."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "warnen",
    "de": "warnen",
    "en": "to warn",
    "level": "A2",
    "irregular": false,
    "present": [
      "warne",
      "warnst",
      "warnt",
      "warnen",
      "warnt",
      "warnen"
    ],
    "past": [
      "warnte",
      "warntest",
      "warnte",
      "warnten",
      "warntet",
      "warnten"
    ],
    "perfect": [
      "hat",
      "gewarnt"
    ],
    "future": [
      "werde warnen",
      "wirst warnen",
      "wird warnen",
      "werden warnen",
      "werdet warnen",
      "werden warnen"
    ],
    "konjII": [
      "würde warnen",
      "würdest warnen",
      "würde warnen",
      "würden warnen",
      "würdet warnen",
      "würden warnen"
    ],
    "imperative": [
      "warn!",
      "warnt!",
      "warnen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte warnen.",
        "en": "I want to to warn."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "wechseln",
    "de": "wechseln",
    "en": "to change/exchange",
    "level": "A2",
    "irregular": false,
    "present": [
      "wechsele",
      "wechselst",
      "wechselt",
      "wechseln",
      "wechselt",
      "wechseln"
    ],
    "past": [
      "wechselte",
      "wechseltest",
      "wechselte",
      "wechselten",
      "wechseltet",
      "wechselten"
    ],
    "perfect": [
      "hat",
      "gewechselt"
    ],
    "future": [
      "werde wechseln",
      "wirst wechseln",
      "wird wechseln",
      "werden wechseln",
      "werdet wechseln",
      "werden wechseln"
    ],
    "konjII": [
      "würde wechseln",
      "würdest wechseln",
      "würde wechseln",
      "würden wechseln",
      "würdet wechseln",
      "würden wechseln"
    ],
    "imperative": [
      "wechsel!",
      "wechselt!",
      "wechseln Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte wechseln.",
        "en": "I want to to change/exchange."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "wecken",
    "de": "wecken",
    "en": "to wake someone up",
    "level": "A2",
    "irregular": false,
    "present": [
      "wecke",
      "weckst",
      "weckt",
      "wecken",
      "weckt",
      "wecken"
    ],
    "past": [
      "weckte",
      "wecktest",
      "weckte",
      "weckten",
      "wecktet",
      "weckten"
    ],
    "perfect": [
      "hat",
      "geweckt"
    ],
    "future": [
      "werde wecken",
      "wirst wecken",
      "wird wecken",
      "werden wecken",
      "werdet wecken",
      "werden wecken"
    ],
    "konjII": [
      "würde wecken",
      "würdest wecken",
      "würde wecken",
      "würden wecken",
      "würdet wecken",
      "würden wecken"
    ],
    "imperative": [
      "weck!",
      "weckt!",
      "wecken Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte wecken.",
        "en": "I want to to wake someone up."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "wenden",
    "de": "wenden",
    "en": "to turn",
    "level": "A2",
    "irregular": false,
    "present": [
      "wende",
      "wendest",
      "wendet",
      "wenden",
      "wendet",
      "wenden"
    ],
    "past": [
      "wendete",
      "wendetest",
      "wendete",
      "wendeten",
      "wendetet",
      "wendeten"
    ],
    "perfect": [
      "hat",
      "gewendet"
    ],
    "future": [
      "werde wenden",
      "wirst wenden",
      "wird wenden",
      "werden wenden",
      "werdet wenden",
      "werden wenden"
    ],
    "konjII": [
      "würde wenden",
      "würdest wenden",
      "würde wenden",
      "würden wenden",
      "würdet wenden",
      "würden wenden"
    ],
    "imperative": [
      "wende!",
      "wendet!",
      "wenden Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte wenden.",
        "en": "I want to to turn."
      }
    ],
    "note": "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'."
  },
  {
    "id": "werben",
    "de": "werben",
    "en": "to advertise",
    "level": "A2",
    "irregular": false,
    "present": [
      "werbe",
      "werbst",
      "werbt",
      "werben",
      "werbt",
      "werben"
    ],
    "past": [
      "werbte",
      "werbtest",
      "werbte",
      "werbten",
      "werbtet",
      "werbten"
    ],
    "perfect": [
      "hat",
      "gewerbt"
    ],
    "future": [
      "werde werben",
      "wirst werben",
      "wird werben",
      "werden werben",
      "werdet werben",
      "werden werben"
    ],
    "konjII": [
      "würde werben",
      "würdest werben",
      "würde werben",
      "würden werben",
      "würdet werben",
      "würden werben"
    ],
    "imperative": [
      "werb!",
      "werbt!",
      "werben Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte werben.",
        "en": "I want to to advertise."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "werfen",
    "de": "werfen",
    "en": "to throw",
    "level": "A2",
    "irregular": false,
    "present": [
      "werfe",
      "werfst",
      "werft",
      "werfen",
      "werft",
      "werfen"
    ],
    "past": [
      "werfte",
      "werftest",
      "werfte",
      "werften",
      "werftet",
      "werften"
    ],
    "perfect": [
      "hat",
      "gewerft"
    ],
    "future": [
      "werde werfen",
      "wirst werfen",
      "wird werfen",
      "werden werfen",
      "werdet werfen",
      "werden werfen"
    ],
    "konjII": [
      "würde werfen",
      "würdest werfen",
      "würde werfen",
      "würden werfen",
      "würdet werfen",
      "würden werfen"
    ],
    "imperative": [
      "werf!",
      "werft!",
      "werfen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte werfen.",
        "en": "I want to to throw."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "widersprechen",
    "de": "widersprechen",
    "en": "to contradict",
    "level": "A2",
    "irregular": false,
    "present": [
      "widerspreche",
      "widersprechst",
      "widersprecht",
      "widersprechen",
      "widersprecht",
      "widersprechen"
    ],
    "past": [
      "widersprechte",
      "widersprechtest",
      "widersprechte",
      "widersprechten",
      "widersprechtet",
      "widersprechten"
    ],
    "perfect": [
      "hat",
      "gewidersprecht"
    ],
    "future": [
      "werde widersprechen",
      "wirst widersprechen",
      "wird widersprechen",
      "werden widersprechen",
      "werdet widersprechen",
      "werden widersprechen"
    ],
    "konjII": [
      "würde widersprechen",
      "würdest widersprechen",
      "würde widersprechen",
      "würden widersprechen",
      "würdet widersprechen",
      "würden widersprechen"
    ],
    "imperative": [
      "widersprech!",
      "widersprecht!",
      "widersprechen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte widersprechen.",
        "en": "I want to to contradict."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "widmen",
    "de": "widmen",
    "en": "to dedicate",
    "level": "A2",
    "irregular": false,
    "present": [
      "widme",
      "widmst",
      "widmt",
      "widmen",
      "widmt",
      "widmen"
    ],
    "past": [
      "widmte",
      "widmtest",
      "widmte",
      "widmten",
      "widmtet",
      "widmten"
    ],
    "perfect": [
      "hat",
      "gewidmt"
    ],
    "future": [
      "werde widmen",
      "wirst widmen",
      "wird widmen",
      "werden widmen",
      "werdet widmen",
      "werden widmen"
    ],
    "konjII": [
      "würde widmen",
      "würdest widmen",
      "würde widmen",
      "würden widmen",
      "würdet widmen",
      "würden widmen"
    ],
    "imperative": [
      "widm!",
      "widmt!",
      "widmen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte widmen.",
        "en": "I want to to dedicate."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "wiegen",
    "de": "wiegen",
    "en": "to weigh",
    "level": "A2",
    "irregular": false,
    "present": [
      "wiege",
      "wiegst",
      "wiegt",
      "wiegen",
      "wiegt",
      "wiegen"
    ],
    "past": [
      "wiegte",
      "wiegtest",
      "wiegte",
      "wiegten",
      "wiegtet",
      "wiegten"
    ],
    "perfect": [
      "hat",
      "gewiegt"
    ],
    "future": [
      "werde wiegen",
      "wirst wiegen",
      "wird wiegen",
      "werden wiegen",
      "werdet wiegen",
      "werden wiegen"
    ],
    "konjII": [
      "würde wiegen",
      "würdest wiegen",
      "würde wiegen",
      "würden wiegen",
      "würdet wiegen",
      "würden wiegen"
    ],
    "imperative": [
      "wieg!",
      "wiegt!",
      "wiegen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte wiegen.",
        "en": "I want to to weigh."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "winken",
    "de": "winken",
    "en": "to wave",
    "level": "A1",
    "irregular": false,
    "present": [
      "winke",
      "winkst",
      "winkt",
      "winken",
      "winkt",
      "winken"
    ],
    "past": [
      "winkte",
      "winktest",
      "winkte",
      "winkten",
      "winktet",
      "winkten"
    ],
    "perfect": [
      "hat",
      "gewinkt"
    ],
    "future": [
      "werde winken",
      "wirst winken",
      "wird winken",
      "werden winken",
      "werdet winken",
      "werden winken"
    ],
    "konjII": [
      "würde winken",
      "würdest winken",
      "würde winken",
      "würden winken",
      "würdet winken",
      "würden winken"
    ],
    "imperative": [
      "wink!",
      "winkt!",
      "winken Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte winken.",
        "en": "I want to to wave."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "wirken",
    "de": "wirken",
    "en": "to work/effect",
    "level": "A2",
    "irregular": false,
    "present": [
      "wirke",
      "wirkst",
      "wirkt",
      "wirken",
      "wirkt",
      "wirken"
    ],
    "past": [
      "wirkte",
      "wirktest",
      "wirkte",
      "wirkten",
      "wirktet",
      "wirkten"
    ],
    "perfect": [
      "hat",
      "gewirkt"
    ],
    "future": [
      "werde wirken",
      "wirst wirken",
      "wird wirken",
      "werden wirken",
      "werdet wirken",
      "werden wirken"
    ],
    "konjII": [
      "würde wirken",
      "würdest wirken",
      "würde wirken",
      "würden wirken",
      "würdet wirken",
      "würden wirken"
    ],
    "imperative": [
      "wirk!",
      "wirkt!",
      "wirken Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte wirken.",
        "en": "I want to to work/effect."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "wünschen",
    "de": "wünschen",
    "en": "to wish",
    "level": "A1",
    "irregular": false,
    "present": [
      "wünsche",
      "wünschst",
      "wünscht",
      "wünschen",
      "wünscht",
      "wünschen"
    ],
    "past": [
      "wünschte",
      "wünschtest",
      "wünschte",
      "wünschten",
      "wünschtet",
      "wünschten"
    ],
    "perfect": [
      "hat",
      "gewünscht"
    ],
    "future": [
      "werde wünschen",
      "wirst wünschen",
      "wird wünschen",
      "werden wünschen",
      "werdet wünschen",
      "werden wünschen"
    ],
    "konjII": [
      "würde wünschen",
      "würdest wünschen",
      "würde wünschen",
      "würden wünschen",
      "würdet wünschen",
      "würden wünschen"
    ],
    "imperative": [
      "wünsch!",
      "wünscht!",
      "wünschen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte wünschen.",
        "en": "I want to to wish."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "würzen",
    "de": "würzen",
    "en": "to season",
    "level": "A2",
    "irregular": false,
    "present": [
      "würze",
      "würzst",
      "würzt",
      "würzen",
      "würzt",
      "würzen"
    ],
    "past": [
      "würzte",
      "würztest",
      "würzte",
      "würzten",
      "würztet",
      "würzten"
    ],
    "perfect": [
      "hat",
      "gewürzt"
    ],
    "future": [
      "werde würzen",
      "wirst würzen",
      "wird würzen",
      "werden würzen",
      "werdet würzen",
      "werden würzen"
    ],
    "konjII": [
      "würde würzen",
      "würdest würzen",
      "würde würzen",
      "würden würzen",
      "würdet würzen",
      "würden würzen"
    ],
    "imperative": [
      "würz!",
      "würzt!",
      "würzen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte würzen.",
        "en": "I want to to season."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "zahlen",
    "de": "zahlen",
    "en": "to pay",
    "level": "A1",
    "irregular": false,
    "present": [
      "zahle",
      "zahlst",
      "zahlt",
      "zahlen",
      "zahlt",
      "zahlen"
    ],
    "past": [
      "zahlte",
      "zahltest",
      "zahlte",
      "zahlten",
      "zahltet",
      "zahlten"
    ],
    "perfect": [
      "hat",
      "gezahlt"
    ],
    "future": [
      "werde zahlen",
      "wirst zahlen",
      "wird zahlen",
      "werden zahlen",
      "werdet zahlen",
      "werden zahlen"
    ],
    "konjII": [
      "würde zahlen",
      "würdest zahlen",
      "würde zahlen",
      "würden zahlen",
      "würdet zahlen",
      "würden zahlen"
    ],
    "imperative": [
      "zahl!",
      "zahlt!",
      "zahlen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte zahlen.",
        "en": "I want to to pay."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "zählen",
    "de": "zählen",
    "en": "to count",
    "level": "A1",
    "irregular": false,
    "present": [
      "zähle",
      "zählst",
      "zählt",
      "zählen",
      "zählt",
      "zählen"
    ],
    "past": [
      "zählte",
      "zähltest",
      "zählte",
      "zählten",
      "zähltet",
      "zählten"
    ],
    "perfect": [
      "hat",
      "gezählt"
    ],
    "future": [
      "werde zählen",
      "wirst zählen",
      "wird zählen",
      "werden zählen",
      "werdet zählen",
      "werden zählen"
    ],
    "konjII": [
      "würde zählen",
      "würdest zählen",
      "würde zählen",
      "würden zählen",
      "würdet zählen",
      "würden zählen"
    ],
    "imperative": [
      "zähl!",
      "zählt!",
      "zählen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte zählen.",
        "en": "I want to to count."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "zerstören",
    "de": "zerstören",
    "en": "to destroy",
    "level": "A2",
    "irregular": false,
    "present": [
      "zerstöre",
      "zerstörst",
      "zerstört",
      "zerstören",
      "zerstört",
      "zerstören"
    ],
    "past": [
      "zerstörte",
      "zerstörtest",
      "zerstörte",
      "zerstörten",
      "zerstörtet",
      "zerstörten"
    ],
    "perfect": [
      "hat",
      "zerstört"
    ],
    "future": [
      "werde zerstören",
      "wirst zerstören",
      "wird zerstören",
      "werden zerstören",
      "werdet zerstören",
      "werden zerstören"
    ],
    "konjII": [
      "würde zerstören",
      "würdest zerstören",
      "würde zerstören",
      "würden zerstören",
      "würdet zerstören",
      "würden zerstören"
    ],
    "imperative": [
      "zerstör!",
      "zerstört!",
      "zerstören Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte zerstören.",
        "en": "I want to to destroy."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "zittern",
    "de": "zittern",
    "en": "to tremble",
    "level": "A2",
    "irregular": false,
    "present": [
      "zittere",
      "zitterst",
      "zittert",
      "zittern",
      "zittert",
      "zittern"
    ],
    "past": [
      "zitterte",
      "zittertest",
      "zitterte",
      "zitterten",
      "zittertet",
      "zitterten"
    ],
    "perfect": [
      "hat",
      "gezittert"
    ],
    "future": [
      "werde zittern",
      "wirst zittern",
      "wird zittern",
      "werden zittern",
      "werdet zittern",
      "werden zittern"
    ],
    "konjII": [
      "würde zittern",
      "würdest zittern",
      "würde zittern",
      "würden zittern",
      "würdet zittern",
      "würden zittern"
    ],
    "imperative": [
      "zitter!",
      "zittert!",
      "zittern Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte zittern.",
        "en": "I want to to tremble."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "zögern",
    "de": "zögern",
    "en": "to hesitate",
    "level": "A2",
    "irregular": false,
    "present": [
      "zögere",
      "zögerst",
      "zögert",
      "zögern",
      "zögert",
      "zögern"
    ],
    "past": [
      "zögerte",
      "zögertest",
      "zögerte",
      "zögerten",
      "zögertet",
      "zögerten"
    ],
    "perfect": [
      "hat",
      "gezögert"
    ],
    "future": [
      "werde zögern",
      "wirst zögern",
      "wird zögern",
      "werden zögern",
      "werdet zögern",
      "werden zögern"
    ],
    "konjII": [
      "würde zögern",
      "würdest zögern",
      "würde zögern",
      "würden zögern",
      "würdet zögern",
      "würden zögern"
    ],
    "imperative": [
      "zöger!",
      "zögert!",
      "zögern Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte zögern.",
        "en": "I want to to hesitate."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "zubereiten",
    "de": "zubereiten",
    "en": "to prepare (food)",
    "level": "A2",
    "irregular": false,
    "present": [
      "zubereite",
      "zubereitest",
      "zubereitet",
      "zubereiten",
      "zubereitet",
      "zubereiten"
    ],
    "past": [
      "zubereitete",
      "zubereitetest",
      "zubereitete",
      "zubereiteten",
      "zubereitetet",
      "zubereiteten"
    ],
    "perfect": [
      "hat",
      "gezubereitet"
    ],
    "future": [
      "werde zubereiten",
      "wirst zubereiten",
      "wird zubereiten",
      "werden zubereiten",
      "werdet zubereiten",
      "werden zubereiten"
    ],
    "konjII": [
      "würde zubereiten",
      "würdest zubereiten",
      "würde zubereiten",
      "würden zubereiten",
      "würdet zubereiten",
      "würden zubereiten"
    ],
    "imperative": [
      "zubereite!",
      "zubereitet!",
      "zubereiten Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte zubereiten.",
        "en": "I want to to prepare (food)."
      }
    ],
    "note": "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'."
  },
  {
    "id": "zulassen",
    "de": "zulassen",
    "en": "to allow",
    "level": "A2",
    "irregular": false,
    "present": [
      "zulasse",
      "zulassst",
      "zulasst",
      "zulassen",
      "zulasst",
      "zulassen"
    ],
    "past": [
      "zulasste",
      "zulasstest",
      "zulasste",
      "zulassten",
      "zulasstet",
      "zulassten"
    ],
    "perfect": [
      "hat",
      "gezulasst"
    ],
    "future": [
      "werde zulassen",
      "wirst zulassen",
      "wird zulassen",
      "werden zulassen",
      "werdet zulassen",
      "werden zulassen"
    ],
    "konjII": [
      "würde zulassen",
      "würdest zulassen",
      "würde zulassen",
      "würden zulassen",
      "würdet zulassen",
      "würden zulassen"
    ],
    "imperative": [
      "zulass!",
      "zulasst!",
      "zulassen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte zulassen.",
        "en": "I want to to allow."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "zunehmen",
    "de": "zunehmen",
    "en": "to increase",
    "level": "A2",
    "irregular": false,
    "present": [
      "zunehme",
      "zunehmst",
      "zunehmt",
      "zunehmen",
      "zunehmt",
      "zunehmen"
    ],
    "past": [
      "zunehmte",
      "zunehmtest",
      "zunehmte",
      "zunehmten",
      "zunehmtet",
      "zunehmten"
    ],
    "perfect": [
      "hat",
      "gezunehmt"
    ],
    "future": [
      "werde zunehmen",
      "wirst zunehmen",
      "wird zunehmen",
      "werden zunehmen",
      "werdet zunehmen",
      "werden zunehmen"
    ],
    "konjII": [
      "würde zunehmen",
      "würdest zunehmen",
      "würde zunehmen",
      "würden zunehmen",
      "würdet zunehmen",
      "würden zunehmen"
    ],
    "imperative": [
      "zunehm!",
      "zunehmt!",
      "zunehmen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte zunehmen.",
        "en": "I want to to increase."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "zurückgeben",
    "de": "zurückgeben",
    "en": "to return",
    "level": "A1",
    "irregular": false,
    "present": [
      "zurückgebe",
      "zurückgebst",
      "zurückgebt",
      "zurückgeben",
      "zurückgebt",
      "zurückgeben"
    ],
    "past": [
      "zurückgebte",
      "zurückgebtest",
      "zurückgebte",
      "zurückgebten",
      "zurückgebtet",
      "zurückgebten"
    ],
    "perfect": [
      "hat",
      "gezurückgebt"
    ],
    "future": [
      "werde zurückgeben",
      "wirst zurückgeben",
      "wird zurückgeben",
      "werden zurückgeben",
      "werdet zurückgeben",
      "werden zurückgeben"
    ],
    "konjII": [
      "würde zurückgeben",
      "würdest zurückgeben",
      "würde zurückgeben",
      "würden zurückgeben",
      "würdet zurückgeben",
      "würden zurückgeben"
    ],
    "imperative": [
      "zurückgeb!",
      "zurückgebt!",
      "zurückgeben Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte zurückgeben.",
        "en": "I want to to return."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "zurückkommen",
    "de": "zurückkommen",
    "en": "to come back",
    "level": "A1",
    "irregular": false,
    "present": [
      "zurückkomme",
      "zurückkommst",
      "zurückkommt",
      "zurückkommen",
      "zurückkommt",
      "zurückkommen"
    ],
    "past": [
      "zurückkommte",
      "zurückkommtest",
      "zurückkommte",
      "zurückkommten",
      "zurückkommtet",
      "zurückkommten"
    ],
    "perfect": [
      "ist",
      "gezurückkommt"
    ],
    "future": [
      "werde zurückkommen",
      "wirst zurückkommen",
      "wird zurückkommen",
      "werden zurückkommen",
      "werdet zurückkommen",
      "werden zurückkommen"
    ],
    "konjII": [
      "würde zurückkommen",
      "würdest zurückkommen",
      "würde zurückkommen",
      "würden zurückkommen",
      "würdet zurückkommen",
      "würden zurückkommen"
    ],
    "imperative": [
      "zurückkomm!",
      "zurückkommt!",
      "zurückkommen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte zurückkommen.",
        "en": "I want to to come back."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'.\n\nNote: This verb uses 'sein' as its auxiliary in the Perfekt because it indicates a change of position or state."
  },
  {
    "id": "zusammenarbeiten",
    "de": "zusammenarbeiten",
    "en": "to collaborate",
    "level": "A2",
    "irregular": false,
    "present": [
      "zusammenarbeite",
      "zusammenarbeitest",
      "zusammenarbeitet",
      "zusammenarbeiten",
      "zusammenarbeitet",
      "zusammenarbeiten"
    ],
    "past": [
      "zusammenarbeitete",
      "zusammenarbeitetest",
      "zusammenarbeitete",
      "zusammenarbeiteten",
      "zusammenarbeitetet",
      "zusammenarbeiteten"
    ],
    "perfect": [
      "hat",
      "gezusammenarbeitet"
    ],
    "future": [
      "werde zusammenarbeiten",
      "wirst zusammenarbeiten",
      "wird zusammenarbeiten",
      "werden zusammenarbeiten",
      "werdet zusammenarbeiten",
      "werden zusammenarbeiten"
    ],
    "konjII": [
      "würde zusammenarbeiten",
      "würdest zusammenarbeiten",
      "würde zusammenarbeiten",
      "würden zusammenarbeiten",
      "würdet zusammenarbeiten",
      "würden zusammenarbeiten"
    ],
    "imperative": [
      "zusammenarbeite!",
      "zusammenarbeitet!",
      "zusammenarbeiten Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte zusammenarbeiten.",
        "en": "I want to to collaborate."
      }
    ],
    "note": "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'."
  },
  {
    "id": "zuschauen",
    "de": "zuschauen",
    "en": "to watch",
    "level": "A2",
    "irregular": false,
    "present": [
      "zuschaue",
      "zuschaust",
      "zuschaut",
      "zuschauen",
      "zuschaut",
      "zuschauen"
    ],
    "past": [
      "zuschaute",
      "zuschautest",
      "zuschaute",
      "zuschauten",
      "zuschautet",
      "zuschauten"
    ],
    "perfect": [
      "hat",
      "gezuschaut"
    ],
    "future": [
      "werde zuschauen",
      "wirst zuschauen",
      "wird zuschauen",
      "werden zuschauen",
      "werdet zuschauen",
      "werden zuschauen"
    ],
    "konjII": [
      "würde zuschauen",
      "würdest zuschauen",
      "würde zuschauen",
      "würden zuschauen",
      "würdet zuschauen",
      "würden zuschauen"
    ],
    "imperative": [
      "zuschau!",
      "zuschaut!",
      "zuschauen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte zuschauen.",
        "en": "I want to to watch."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "zuwerfen",
    "de": "zuwerfen",
    "en": "to throw to",
    "level": "A2",
    "irregular": false,
    "present": [
      "zuwerfe",
      "zuwerfst",
      "zuwerft",
      "zuwerfen",
      "zuwerft",
      "zuwerfen"
    ],
    "past": [
      "zuwerfte",
      "zuwerftest",
      "zuwerfte",
      "zuwerften",
      "zuwerftet",
      "zuwerften"
    ],
    "perfect": [
      "hat",
      "gezuwerft"
    ],
    "future": [
      "werde zuwerfen",
      "wirst zuwerfen",
      "wird zuwerfen",
      "werden zuwerfen",
      "werdet zuwerfen",
      "werden zuwerfen"
    ],
    "konjII": [
      "würde zuwerfen",
      "würdest zuwerfen",
      "würde zuwerfen",
      "würden zuwerfen",
      "würdet zuwerfen",
      "würden zuwerfen"
    ],
    "imperative": [
      "zuwerf!",
      "zuwerft!",
      "zuwerfen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte zuwerfen.",
        "en": "I want to to throw to."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "zweifeln",
    "de": "zweifeln",
    "en": "to doubt",
    "level": "A2",
    "irregular": false,
    "present": [
      "zweifele",
      "zweifelst",
      "zweifelt",
      "zweifeln",
      "zweifelt",
      "zweifeln"
    ],
    "past": [
      "zweifelte",
      "zweifeltest",
      "zweifelte",
      "zweifelten",
      "zweifeltet",
      "zweifelten"
    ],
    "perfect": [
      "hat",
      "gezweifelt"
    ],
    "future": [
      "werde zweifeln",
      "wirst zweifeln",
      "wird zweifeln",
      "werden zweifeln",
      "werdet zweifeln",
      "werden zweifeln"
    ],
    "konjII": [
      "würde zweifeln",
      "würdest zweifeln",
      "würde zweifeln",
      "würden zweifeln",
      "würdet zweifeln",
      "würden zweifeln"
    ],
    "imperative": [
      "zweifel!",
      "zweifelt!",
      "zweifeln Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte zweifeln.",
        "en": "I want to to doubt."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "zwingen",
    "de": "zwingen",
    "en": "to force",
    "level": "A2",
    "irregular": false,
    "present": [
      "zwinge",
      "zwingst",
      "zwingt",
      "zwingen",
      "zwingt",
      "zwingen"
    ],
    "past": [
      "zwingte",
      "zwingtest",
      "zwingte",
      "zwingten",
      "zwingtet",
      "zwingten"
    ],
    "perfect": [
      "hat",
      "gezwingt"
    ],
    "future": [
      "werde zwingen",
      "wirst zwingen",
      "wird zwingen",
      "werden zwingen",
      "werdet zwingen",
      "werden zwingen"
    ],
    "konjII": [
      "würde zwingen",
      "würdest zwingen",
      "würde zwingen",
      "würden zwingen",
      "würdet zwingen",
      "würden zwingen"
    ],
    "imperative": [
      "zwing!",
      "zwingt!",
      "zwingen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte zwingen.",
        "en": "I want to to force."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "begrüßen",
    "de": "begrüßen",
    "en": "to welcome",
    "level": "A1",
    "irregular": false,
    "present": [
      "begrüße",
      "begrüßst",
      "begrüßt",
      "begrüßen",
      "begrüßt",
      "begrüßen"
    ],
    "past": [
      "begrüßte",
      "begrüßtest",
      "begrüßte",
      "begrüßten",
      "begrüßtet",
      "begrüßten"
    ],
    "perfect": [
      "hat",
      "begrüßt"
    ],
    "future": [
      "werde begrüßen",
      "wirst begrüßen",
      "wird begrüßen",
      "werden begrüßen",
      "werdet begrüßen",
      "werden begrüßen"
    ],
    "konjII": [
      "würde begrüßen",
      "würdest begrüßen",
      "würde begrüßen",
      "würden begrüßen",
      "würdet begrüßen",
      "würden begrüßen"
    ],
    "imperative": [
      "begrüß!",
      "begrüßt!",
      "begrüßen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte begrüßen.",
        "en": "I want to to welcome."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "verabschieden",
    "de": "verabschieden",
    "en": "to say goodbye",
    "level": "A1",
    "irregular": false,
    "present": [
      "verabschiede",
      "verabschiedest",
      "verabschiedet",
      "verabschieden",
      "verabschiedet",
      "verabschieden"
    ],
    "past": [
      "verabschiedete",
      "verabschiedetest",
      "verabschiedete",
      "verabschiedeten",
      "verabschiedetet",
      "verabschiedeten"
    ],
    "perfect": [
      "hat",
      "verabschiedet"
    ],
    "future": [
      "werde verabschieden",
      "wirst verabschieden",
      "wird verabschieden",
      "werden verabschieden",
      "werdet verabschieden",
      "werden verabschieden"
    ],
    "konjII": [
      "würde verabschieden",
      "würdest verabschieden",
      "würde verabschieden",
      "würden verabschieden",
      "würdet verabschieden",
      "würden verabschieden"
    ],
    "imperative": [
      "verabschiede!",
      "verabschiedet!",
      "verabschieden Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte verabschieden.",
        "en": "I want to to say goodbye."
      }
    ],
    "note": "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'."
  },
  {
    "id": "sehen",
    "de": "sehen",
    "en": "to see",
    "level": "A1",
    "irregular": true,
    "present": [
      "sehe",
      "siehst",
      "sieht",
      "sehen",
      "seht",
      "sehen"
    ],
    "past": [
      "sah",
      "sahst",
      "sah",
      "sahen",
      "saht",
      "sahen"
    ],
    "perfect": [
      "hat",
      "gesehen"
    ],
    "future": [
      "werde sehen",
      "wirst sehen",
      "wird sehen",
      "werden sehen",
      "werdet sehen",
      "werden sehen"
    ],
    "konjII": [
      "sähe",
      "sähest",
      "sähe",
      "sähen",
      "sähet",
      "sähen"
    ],
    "imperative": [
      "sieh!",
      "seht!",
      "sehen Sie!"
    ],
    "examples": [
      {
        "de": "Ich sehe dich.",
        "en": "I see you."
      }
    ]
  },
  {
    "id": "ankommen",
    "de": "ankommen",
    "en": "to arrive",
    "level": "A1",
    "irregular": false,
    "present": [
      "ankomme",
      "ankommst",
      "ankommt",
      "ankommen",
      "ankommt",
      "ankommen"
    ],
    "past": [
      "ankommte",
      "ankommtest",
      "ankommte",
      "ankommten",
      "ankommtet",
      "ankommten"
    ],
    "perfect": [
      "ist",
      "geankommt"
    ],
    "future": [
      "werde ankommen",
      "wirst ankommen",
      "wird ankommen",
      "werden ankommen",
      "werdet ankommen",
      "werden ankommen"
    ],
    "konjII": [
      "würde ankommen",
      "würdest ankommen",
      "würde ankommen",
      "würden ankommen",
      "würdet ankommen",
      "würden ankommen"
    ],
    "imperative": [
      "ankomm!",
      "ankommt!",
      "ankommen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte ankommen.",
        "en": "I want to to arrive."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'.\n\nNote: This verb uses 'sein' as its auxiliary in the Perfekt because it indicates a change of position or state."
  },
  {
    "id": "anmachen",
    "de": "anmachen",
    "en": "to turn on",
    "level": "A1",
    "irregular": false,
    "present": [
      "anmache",
      "anmachst",
      "anmacht",
      "anmachen",
      "anmacht",
      "anmachen"
    ],
    "past": [
      "anmachte",
      "anmachtest",
      "anmachte",
      "anmachten",
      "anmachtet",
      "anmachten"
    ],
    "perfect": [
      "hat",
      "geanmacht"
    ],
    "future": [
      "werde anmachen",
      "wirst anmachen",
      "wird anmachen",
      "werden anmachen",
      "werdet anmachen",
      "werden anmachen"
    ],
    "konjII": [
      "würde anmachen",
      "würdest anmachen",
      "würde anmachen",
      "würden anmachen",
      "würdet anmachen",
      "würden anmachen"
    ],
    "imperative": [
      "anmach!",
      "anmacht!",
      "anmachen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte anmachen.",
        "en": "I want to to turn on."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "anziehen",
    "de": "anziehen",
    "en": "to put on (clothes)",
    "level": "A1",
    "irregular": false,
    "present": [
      "anziehe",
      "anziehst",
      "anzieht",
      "anziehen",
      "anzieht",
      "anziehen"
    ],
    "past": [
      "anziehte",
      "anziehtest",
      "anziehte",
      "anziehten",
      "anziehtet",
      "anziehten"
    ],
    "perfect": [
      "hat",
      "geanzieht"
    ],
    "future": [
      "werde anziehen",
      "wirst anziehen",
      "wird anziehen",
      "werden anziehen",
      "werdet anziehen",
      "werden anziehen"
    ],
    "konjII": [
      "würde anziehen",
      "würdest anziehen",
      "würde anziehen",
      "würden anziehen",
      "würdet anziehen",
      "würden anziehen"
    ],
    "imperative": [
      "anzieh!",
      "anzieht!",
      "anziehen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte anziehen.",
        "en": "I want to to put on (clothes)."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "ausfüllen",
    "de": "ausfüllen",
    "en": "to fill out",
    "level": "A1",
    "irregular": false,
    "present": [
      "ausfülle",
      "ausfüllst",
      "ausfüllt",
      "ausfüllen",
      "ausfüllt",
      "ausfüllen"
    ],
    "past": [
      "ausfüllte",
      "ausfülltest",
      "ausfüllte",
      "ausfüllten",
      "ausfülltet",
      "ausfüllten"
    ],
    "perfect": [
      "hat",
      "geausfüllt"
    ],
    "future": [
      "werde ausfüllen",
      "wirst ausfüllen",
      "wird ausfüllen",
      "werden ausfüllen",
      "werdet ausfüllen",
      "werden ausfüllen"
    ],
    "konjII": [
      "würde ausfüllen",
      "würdest ausfüllen",
      "würde ausfüllen",
      "würden ausfüllen",
      "würdet ausfüllen",
      "würden ausfüllen"
    ],
    "imperative": [
      "ausfüll!",
      "ausfüllt!",
      "ausfüllen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte ausfüllen.",
        "en": "I want to to fill out."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "aussehen",
    "de": "aussehen",
    "en": "to look like",
    "level": "A1",
    "irregular": false,
    "present": [
      "aussehe",
      "aussehst",
      "ausseht",
      "aussehen",
      "ausseht",
      "aussehen"
    ],
    "past": [
      "aussehte",
      "aussehtest",
      "aussehte",
      "aussehten",
      "aussehtet",
      "aussehten"
    ],
    "perfect": [
      "hat",
      "geausseht"
    ],
    "future": [
      "werde aussehen",
      "wirst aussehen",
      "wird aussehen",
      "werden aussehen",
      "werdet aussehen",
      "werden aussehen"
    ],
    "konjII": [
      "würde aussehen",
      "würdest aussehen",
      "würde aussehen",
      "würden aussehen",
      "würdet aussehen",
      "würden aussehen"
    ],
    "imperative": [
      "ausseh!",
      "ausseht!",
      "aussehen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte aussehen.",
        "en": "I want to to look like."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "ausziehen",
    "de": "ausziehen",
    "en": "to take off (clothes)",
    "level": "A1",
    "irregular": false,
    "present": [
      "ausziehe",
      "ausziehst",
      "auszieht",
      "ausziehen",
      "auszieht",
      "ausziehen"
    ],
    "past": [
      "ausziehte",
      "ausziehtest",
      "ausziehte",
      "ausziehten",
      "ausziehtet",
      "ausziehten"
    ],
    "perfect": [
      "hat",
      "geauszieht"
    ],
    "future": [
      "werde ausziehen",
      "wirst ausziehen",
      "wird ausziehen",
      "werden ausziehen",
      "werdet ausziehen",
      "werden ausziehen"
    ],
    "konjII": [
      "würde ausziehen",
      "würdest ausziehen",
      "würde ausziehen",
      "würden ausziehen",
      "würdet ausziehen",
      "würden ausziehen"
    ],
    "imperative": [
      "auszieh!",
      "auszieht!",
      "ausziehen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte ausziehen.",
        "en": "I want to to take off (clothes)."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "baden",
    "de": "baden",
    "en": "to bathe",
    "level": "A1",
    "irregular": false,
    "present": [
      "bade",
      "badest",
      "badet",
      "baden",
      "badet",
      "baden"
    ],
    "past": [
      "badete",
      "badetest",
      "badete",
      "badeten",
      "badetet",
      "badeten"
    ],
    "perfect": [
      "hat",
      "gebadet"
    ],
    "future": [
      "werde baden",
      "wirst baden",
      "wird baden",
      "werden baden",
      "werdet baden",
      "werden baden"
    ],
    "konjII": [
      "würde baden",
      "würdest baden",
      "würde baden",
      "würden baden",
      "würdet baden",
      "würden baden"
    ],
    "imperative": [
      "bade!",
      "badet!",
      "baden Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte baden.",
        "en": "I want to to bathe."
      }
    ],
    "note": "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'."
  },
  {
    "id": "berichten",
    "de": "berichten",
    "en": "to report",
    "level": "A2",
    "irregular": false,
    "present": [
      "berichte",
      "berichtest",
      "berichtet",
      "berichten",
      "berichtet",
      "berichten"
    ],
    "past": [
      "berichtete",
      "berichtetest",
      "berichtete",
      "berichteten",
      "berichtetet",
      "berichteten"
    ],
    "perfect": [
      "hat",
      "berichtet"
    ],
    "future": [
      "werde berichten",
      "wirst berichten",
      "wird berichten",
      "werden berichten",
      "werdet berichten",
      "werden berichten"
    ],
    "konjII": [
      "würde berichten",
      "würdest berichten",
      "würde berichten",
      "würden berichten",
      "würdet berichten",
      "würden berichten"
    ],
    "imperative": [
      "berichte!",
      "berichtet!",
      "berichten Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte berichten.",
        "en": "I want to to report."
      }
    ],
    "note": "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'."
  },
  {
    "id": "bestätigen",
    "de": "bestätigen",
    "en": "to confirm",
    "level": "A2",
    "irregular": false,
    "present": [
      "bestätige",
      "bestätigst",
      "bestätigt",
      "bestätigen",
      "bestätigt",
      "bestätigen"
    ],
    "past": [
      "bestätigte",
      "bestätigtest",
      "bestätigte",
      "bestätigten",
      "bestätigtet",
      "bestätigten"
    ],
    "perfect": [
      "hat",
      "bestätigt"
    ],
    "future": [
      "werde bestätigen",
      "wirst bestätigen",
      "wird bestätigen",
      "werden bestätigen",
      "werdet bestätigen",
      "werden bestätigen"
    ],
    "konjII": [
      "würde bestätigen",
      "würdest bestätigen",
      "würde bestätigen",
      "würden bestätigen",
      "würdet bestätigen",
      "würden bestätigen"
    ],
    "imperative": [
      "bestätig!",
      "bestätigt!",
      "bestätigen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte bestätigen.",
        "en": "I want to to confirm."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "betreten",
    "de": "betreten",
    "en": "to enter",
    "level": "A2",
    "irregular": false,
    "present": [
      "betrete",
      "betretest",
      "betretet",
      "betreten",
      "betretet",
      "betreten"
    ],
    "past": [
      "betretete",
      "betretetest",
      "betretete",
      "betreteten",
      "betretetet",
      "betreteten"
    ],
    "perfect": [
      "ist",
      "betretet"
    ],
    "future": [
      "werde betreten",
      "wirst betreten",
      "wird betreten",
      "werden betreten",
      "werdet betreten",
      "werden betreten"
    ],
    "konjII": [
      "würde betreten",
      "würdest betreten",
      "würde betreten",
      "würden betreten",
      "würdet betreten",
      "würden betreten"
    ],
    "imperative": [
      "betrete!",
      "betretet!",
      "betreten Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte betreten.",
        "en": "I want to to enter."
      }
    ],
    "note": "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'.\n\nNote: This verb uses 'sein' as its auxiliary in the Perfekt because it indicates a change of position or state."
  },
  {
    "id": "bewegen",
    "de": "bewegen",
    "en": "to move",
    "level": "A2",
    "irregular": false,
    "present": [
      "bewege",
      "bewegst",
      "bewegt",
      "bewegen",
      "bewegt",
      "bewegen"
    ],
    "past": [
      "bewegte",
      "bewegtest",
      "bewegte",
      "bewegten",
      "bewegtet",
      "bewegten"
    ],
    "perfect": [
      "hat",
      "bewegt"
    ],
    "future": [
      "werde bewegen",
      "wirst bewegen",
      "wird bewegen",
      "werden bewegen",
      "werdet bewegen",
      "werden bewegen"
    ],
    "konjII": [
      "würde bewegen",
      "würdest bewegen",
      "würde bewegen",
      "würden bewegen",
      "würdet bewegen",
      "würden bewegen"
    ],
    "imperative": [
      "beweg!",
      "bewegt!",
      "bewegen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte bewegen.",
        "en": "I want to to move."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "bewundern",
    "de": "bewundern",
    "en": "to admire",
    "level": "A2",
    "irregular": false,
    "present": [
      "bewundere",
      "bewunderst",
      "bewundert",
      "bewundern",
      "bewundert",
      "bewundern"
    ],
    "past": [
      "bewunderte",
      "bewundertest",
      "bewunderte",
      "bewunderten",
      "bewundertet",
      "bewunderten"
    ],
    "perfect": [
      "hat",
      "bewundert"
    ],
    "future": [
      "werde bewundern",
      "wirst bewundern",
      "wird bewundern",
      "werden bewundern",
      "werdet bewundern",
      "werden bewundern"
    ],
    "konjII": [
      "würde bewundern",
      "würdest bewundern",
      "würde bewundern",
      "würden bewundern",
      "würdet bewundern",
      "würden bewundern"
    ],
    "imperative": [
      "bewunder!",
      "bewundert!",
      "bewundern Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte bewundern.",
        "en": "I want to to admire."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "bilden",
    "de": "bilden",
    "en": "to form",
    "level": "A2",
    "irregular": false,
    "present": [
      "bilde",
      "bildest",
      "bildet",
      "bilden",
      "bildet",
      "bilden"
    ],
    "past": [
      "bildete",
      "bildetest",
      "bildete",
      "bildeten",
      "bildetet",
      "bildeten"
    ],
    "perfect": [
      "hat",
      "gebildet"
    ],
    "future": [
      "werde bilden",
      "wirst bilden",
      "wird bilden",
      "werden bilden",
      "werdet bilden",
      "werden bilden"
    ],
    "konjII": [
      "würde bilden",
      "würdest bilden",
      "würde bilden",
      "würden bilden",
      "würdet bilden",
      "würden bilden"
    ],
    "imperative": [
      "bilde!",
      "bildet!",
      "bilden Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte bilden.",
        "en": "I want to to form."
      }
    ],
    "note": "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'."
  },
  {
    "id": "buchen",
    "de": "buchen",
    "en": "to book",
    "level": "A1",
    "irregular": false,
    "present": [
      "buche",
      "buchst",
      "bucht",
      "buchen",
      "bucht",
      "buchen"
    ],
    "past": [
      "buchte",
      "buchtest",
      "buchte",
      "buchten",
      "buchtet",
      "buchten"
    ],
    "perfect": [
      "hat",
      "gebucht"
    ],
    "future": [
      "werde buchen",
      "wirst buchen",
      "wird buchen",
      "werden buchen",
      "werdet buchen",
      "werden buchen"
    ],
    "konjII": [
      "würde buchen",
      "würdest buchen",
      "würde buchen",
      "würden buchen",
      "würdet buchen",
      "würden buchen"
    ],
    "imperative": [
      "buch!",
      "bucht!",
      "buchen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte buchen.",
        "en": "I want to to book."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "drucken",
    "de": "drucken",
    "en": "to print",
    "level": "A1",
    "irregular": false,
    "present": [
      "drucke",
      "druckst",
      "druckt",
      "drucken",
      "druckt",
      "drucken"
    ],
    "past": [
      "druckte",
      "drucktest",
      "druckte",
      "druckten",
      "drucktet",
      "druckten"
    ],
    "perfect": [
      "hat",
      "gedruckt"
    ],
    "future": [
      "werde drucken",
      "wirst drucken",
      "wird drucken",
      "werden drucken",
      "werdet drucken",
      "werden drucken"
    ],
    "konjII": [
      "würde drucken",
      "würdest drucken",
      "würde drucken",
      "würden drucken",
      "würdet drucken",
      "würden drucken"
    ],
    "imperative": [
      "druck!",
      "druckt!",
      "drucken Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte drucken.",
        "en": "I want to to print."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "drücken",
    "de": "drücken",
    "en": "to press/push",
    "level": "A2",
    "irregular": false,
    "present": [
      "drücke",
      "drückst",
      "drückt",
      "drücken",
      "drückt",
      "drücken"
    ],
    "past": [
      "drückte",
      "drücktest",
      "drückte",
      "drückten",
      "drücktet",
      "drückten"
    ],
    "perfect": [
      "hat",
      "gedrückt"
    ],
    "future": [
      "werde drücken",
      "wirst drücken",
      "wird drücken",
      "werden drücken",
      "werdet drücken",
      "werden drücken"
    ],
    "konjII": [
      "würde drücken",
      "würdest drücken",
      "würde drücken",
      "würden drücken",
      "würdet drücken",
      "würden drücken"
    ],
    "imperative": [
      "drück!",
      "drückt!",
      "drücken Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte drücken.",
        "en": "I want to to press/push."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "empfehlen",
    "de": "empfehlen",
    "en": "to recommend",
    "level": "A2",
    "irregular": false,
    "present": [
      "empfehle",
      "empfehlst",
      "empfehlt",
      "empfehlen",
      "empfehlt",
      "empfehlen"
    ],
    "past": [
      "empfehlte",
      "empfehltest",
      "empfehlte",
      "empfehlten",
      "empfehltet",
      "empfehlten"
    ],
    "perfect": [
      "hat",
      "geempfehlt"
    ],
    "future": [
      "werde empfehlen",
      "wirst empfehlen",
      "wird empfehlen",
      "werden empfehlen",
      "werdet empfehlen",
      "werden empfehlen"
    ],
    "konjII": [
      "würde empfehlen",
      "würdest empfehlen",
      "würde empfehlen",
      "würden empfehlen",
      "würdet empfehlen",
      "würden empfehlen"
    ],
    "imperative": [
      "empfehl!",
      "empfehlt!",
      "empfehlen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte empfehlen.",
        "en": "I want to to recommend."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "entschuldigen",
    "de": "entschuldigen",
    "en": "to apologize",
    "level": "A1",
    "irregular": false,
    "present": [
      "entschuldige",
      "entschuldigst",
      "entschuldigt",
      "entschuldigen",
      "entschuldigt",
      "entschuldigen"
    ],
    "past": [
      "entschuldigte",
      "entschuldigtest",
      "entschuldigte",
      "entschuldigten",
      "entschuldigtet",
      "entschuldigten"
    ],
    "perfect": [
      "hat",
      "entschuldigt"
    ],
    "future": [
      "werde entschuldigen",
      "wirst entschuldigen",
      "wird entschuldigen",
      "werden entschuldigen",
      "werdet entschuldigen",
      "werden entschuldigen"
    ],
    "konjII": [
      "würde entschuldigen",
      "würdest entschuldigen",
      "würde entschuldigen",
      "würden entschuldigen",
      "würdet entschuldigen",
      "würden entschuldigen"
    ],
    "imperative": [
      "entschuldig!",
      "entschuldigt!",
      "entschuldigen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte entschuldigen.",
        "en": "I want to to apologize."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "erinnern",
    "de": "erinnern",
    "en": "to remember",
    "level": "A2",
    "irregular": false,
    "present": [
      "erinnere",
      "erinnerst",
      "erinnert",
      "erinnern",
      "erinnert",
      "erinnern"
    ],
    "past": [
      "erinnerte",
      "erinnertest",
      "erinnerte",
      "erinnerten",
      "erinnertet",
      "erinnerten"
    ],
    "perfect": [
      "hat",
      "erinnert"
    ],
    "future": [
      "werde erinnern",
      "wirst erinnern",
      "wird erinnern",
      "werden erinnern",
      "werdet erinnern",
      "werden erinnern"
    ],
    "konjII": [
      "würde erinnern",
      "würdest erinnern",
      "würde erinnern",
      "würden erinnern",
      "würdet erinnern",
      "würden erinnern"
    ],
    "imperative": [
      "erinner!",
      "erinnert!",
      "erinnern Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte erinnern.",
        "en": "I want to to remember."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "erlauben",
    "de": "erlauben",
    "en": "to allow",
    "level": "A2",
    "irregular": false,
    "present": [
      "erlaube",
      "erlaubst",
      "erlaubt",
      "erlauben",
      "erlaubt",
      "erlauben"
    ],
    "past": [
      "erlaubte",
      "erlaubtest",
      "erlaubte",
      "erlaubten",
      "erlaubtet",
      "erlaubten"
    ],
    "perfect": [
      "hat",
      "erlaubt"
    ],
    "future": [
      "werde erlauben",
      "wirst erlauben",
      "wird erlauben",
      "werden erlauben",
      "werdet erlauben",
      "werden erlauben"
    ],
    "konjII": [
      "würde erlauben",
      "würdest erlauben",
      "würde erlauben",
      "würden erlauben",
      "würdet erlauben",
      "würden erlauben"
    ],
    "imperative": [
      "erlaub!",
      "erlaubt!",
      "erlauben Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte erlauben.",
        "en": "I want to to allow."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "erreichen",
    "de": "erreichen",
    "en": "to reach",
    "level": "A2",
    "irregular": false,
    "present": [
      "erreiche",
      "erreichst",
      "erreicht",
      "erreichen",
      "erreicht",
      "erreichen"
    ],
    "past": [
      "erreichte",
      "erreichtest",
      "erreichte",
      "erreichten",
      "erreichtet",
      "erreichten"
    ],
    "perfect": [
      "hat",
      "erreicht"
    ],
    "future": [
      "werde erreichen",
      "wirst erreichen",
      "wird erreichen",
      "werden erreichen",
      "werdet erreichen",
      "werden erreichen"
    ],
    "konjII": [
      "würde erreichen",
      "würdest erreichen",
      "würde erreichen",
      "würden erreichen",
      "würdet erreichen",
      "würden erreichen"
    ],
    "imperative": [
      "erreich!",
      "erreicht!",
      "erreichen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte erreichen.",
        "en": "I want to to reach."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "erzählen",
    "de": "erzählen",
    "en": "to tell",
    "level": "A1",
    "irregular": false,
    "present": [
      "erzähle",
      "erzählst",
      "erzählt",
      "erzählen",
      "erzählt",
      "erzählen"
    ],
    "past": [
      "erzählte",
      "erzähltest",
      "erzählte",
      "erzählten",
      "erzähltet",
      "erzählten"
    ],
    "perfect": [
      "hat",
      "erzählt"
    ],
    "future": [
      "werde erzählen",
      "wirst erzählen",
      "wird erzählen",
      "werden erzählen",
      "werdet erzählen",
      "werden erzählen"
    ],
    "konjII": [
      "würde erzählen",
      "würdest erzählen",
      "würde erzählen",
      "würden erzählen",
      "würdet erzählen",
      "würden erzählen"
    ],
    "imperative": [
      "erzähl!",
      "erzählt!",
      "erzählen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte erzählen.",
        "en": "I want to to tell."
      }
    ],
    "note": "Regular weak verb with an inseparable prefix. Note: These verbs do NOT take the 'ge-' prefix in the Perfekt (past participle). Example: 'Ich habe erklärt', NOT 'geerklärt'."
  },
  {
    "id": "fegen",
    "de": "fegen",
    "en": "to sweep",
    "level": "A2",
    "irregular": false,
    "present": [
      "fege",
      "fegst",
      "fegt",
      "fegen",
      "fegt",
      "fegen"
    ],
    "past": [
      "fegte",
      "fegtest",
      "fegte",
      "fegten",
      "fegtet",
      "fegten"
    ],
    "perfect": [
      "hat",
      "gefegt"
    ],
    "future": [
      "werde fegen",
      "wirst fegen",
      "wird fegen",
      "werden fegen",
      "werdet fegen",
      "werden fegen"
    ],
    "konjII": [
      "würde fegen",
      "würdest fegen",
      "würde fegen",
      "würden fegen",
      "würdet fegen",
      "würden fegen"
    ],
    "imperative": [
      "feg!",
      "fegt!",
      "fegen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte fegen.",
        "en": "I want to to sweep."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "flüstern",
    "de": "flüstern",
    "en": "to whisper",
    "level": "A2",
    "irregular": false,
    "present": [
      "flüstere",
      "flüsterst",
      "flüstert",
      "flüstern",
      "flüstert",
      "flüstern"
    ],
    "past": [
      "flüsterte",
      "flüstertest",
      "flüsterte",
      "flüsterten",
      "flüstertet",
      "flüsterten"
    ],
    "perfect": [
      "hat",
      "geflüstert"
    ],
    "future": [
      "werde flüstern",
      "wirst flüstern",
      "wird flüstern",
      "werden flüstern",
      "werdet flüstern",
      "werden flüstern"
    ],
    "konjII": [
      "würde flüstern",
      "würdest flüstern",
      "würde flüstern",
      "würden flüstern",
      "würdet flüstern",
      "würden flüstern"
    ],
    "imperative": [
      "flüster!",
      "flüstert!",
      "flüstern Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte flüstern.",
        "en": "I want to to whisper."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "folgen",
    "de": "folgen",
    "en": "to follow",
    "level": "A2",
    "irregular": false,
    "present": [
      "folge",
      "folgst",
      "folgt",
      "folgen",
      "folgt",
      "folgen"
    ],
    "past": [
      "folgte",
      "folgtest",
      "folgte",
      "folgten",
      "folgtet",
      "folgten"
    ],
    "perfect": [
      "ist",
      "gefolgt"
    ],
    "future": [
      "werde folgen",
      "wirst folgen",
      "wird folgen",
      "werden folgen",
      "werdet folgen",
      "werden folgen"
    ],
    "konjII": [
      "würde folgen",
      "würdest folgen",
      "würde folgen",
      "würden folgen",
      "würdet folgen",
      "würden folgen"
    ],
    "imperative": [
      "folg!",
      "folgt!",
      "folgen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte folgen.",
        "en": "I want to to follow."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'.\n\nNote: This verb uses 'sein' as its auxiliary in the Perfekt because it indicates a change of position or state."
  },
  {
    "id": "fotografieren",
    "de": "fotografieren",
    "en": "to photograph",
    "level": "A1",
    "irregular": false,
    "present": [
      "fotografiere",
      "fotografierst",
      "fotografiert",
      "fotografieren",
      "fotografiert",
      "fotografieren"
    ],
    "past": [
      "fotografierte",
      "fotografiertest",
      "fotografierte",
      "fotografierten",
      "fotografiertet",
      "fotografierten"
    ],
    "perfect": [
      "hat",
      "fotografiert"
    ],
    "future": [
      "werde fotografieren",
      "wirst fotografieren",
      "wird fotografieren",
      "werden fotografieren",
      "werdet fotografieren",
      "werden fotografieren"
    ],
    "konjII": [
      "würde fotografieren",
      "würdest fotografieren",
      "würde fotografieren",
      "würden fotografieren",
      "würdet fotografieren",
      "würden fotografieren"
    ],
    "imperative": [
      "fotografier!",
      "fotografiert!",
      "fotografieren Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte fotografieren.",
        "en": "I want to to photograph."
      }
    ],
    "note": "Regular '-ieren' verb. Pattern: always weak/regular. Note: No 'ge-' prefix in the Perfekt (past participle). Examples: 'Ich habe studiert', NOT 'gestudiert'."
  },
  {
    "id": "freuen",
    "de": "freuen",
    "en": "to be happy",
    "level": "A1",
    "irregular": false,
    "present": [
      "freue",
      "freust",
      "freut",
      "freuen",
      "freut",
      "freuen"
    ],
    "past": [
      "freute",
      "freutest",
      "freute",
      "freuten",
      "freutet",
      "freuten"
    ],
    "perfect": [
      "hat",
      "gefreut"
    ],
    "future": [
      "werde freuen",
      "wirst freuen",
      "wird freuen",
      "werden freuen",
      "werdet freuen",
      "werden freuen"
    ],
    "konjII": [
      "würde freuen",
      "würdest freuen",
      "würde freuen",
      "würden freuen",
      "würdet freuen",
      "würden freuen"
    ],
    "imperative": [
      "freu!",
      "freut!",
      "freuen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte freuen.",
        "en": "I want to to be happy."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "füttern",
    "de": "füttern",
    "en": "to feed",
    "level": "A2",
    "irregular": false,
    "present": [
      "füttere",
      "fütterst",
      "füttert",
      "füttern",
      "füttert",
      "füttern"
    ],
    "past": [
      "fütterte",
      "füttertest",
      "fütterte",
      "fütterten",
      "füttertet",
      "fütterten"
    ],
    "perfect": [
      "hat",
      "gefüttert"
    ],
    "future": [
      "werde füttern",
      "wirst füttern",
      "wird füttern",
      "werden füttern",
      "werdet füttern",
      "werden füttern"
    ],
    "konjII": [
      "würde füttern",
      "würdest füttern",
      "würde füttern",
      "würden füttern",
      "würdet füttern",
      "würden füttern"
    ],
    "imperative": [
      "fütter!",
      "füttert!",
      "füttern Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte füttern.",
        "en": "I want to to feed."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "gähnen",
    "de": "gähnen",
    "en": "to yawn",
    "level": "A2",
    "irregular": false,
    "present": [
      "gähne",
      "gähnst",
      "gähnt",
      "gähnen",
      "gähnt",
      "gähnen"
    ],
    "past": [
      "gähnte",
      "gähntest",
      "gähnte",
      "gähnten",
      "gähntet",
      "gähnten"
    ],
    "perfect": [
      "hat",
      "gegähnt"
    ],
    "future": [
      "werde gähnen",
      "wirst gähnen",
      "wird gähnen",
      "werden gähnen",
      "werdet gähnen",
      "werden gähnen"
    ],
    "konjII": [
      "würde gähnen",
      "würdest gähnen",
      "würde gähnen",
      "würden gähnen",
      "würdet gähnen",
      "würden gähnen"
    ],
    "imperative": [
      "gähn!",
      "gähnt!",
      "gähnen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte gähnen.",
        "en": "I want to to yawn."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "grüßen",
    "de": "grüßen",
    "en": "to greet",
    "level": "A1",
    "irregular": false,
    "present": [
      "grüße",
      "grüßst",
      "grüßt",
      "grüßen",
      "grüßt",
      "grüßen"
    ],
    "past": [
      "grüßte",
      "grüßtest",
      "grüßte",
      "grüßten",
      "grüßtet",
      "grüßten"
    ],
    "perfect": [
      "hat",
      "gegrüßt"
    ],
    "future": [
      "werde grüßen",
      "wirst grüßen",
      "wird grüßen",
      "werden grüßen",
      "werdet grüßen",
      "werden grüßen"
    ],
    "konjII": [
      "würde grüßen",
      "würdest grüßen",
      "würde grüßen",
      "würden grüßen",
      "würdet grüßen",
      "würden grüßen"
    ],
    "imperative": [
      "grüß!",
      "grüßt!",
      "grüßen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte grüßen.",
        "en": "I want to to greet."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "handeln",
    "de": "handeln",
    "en": "to act/deal",
    "level": "A2",
    "irregular": false,
    "present": [
      "handele",
      "handelst",
      "handelt",
      "handeln",
      "handelt",
      "handeln"
    ],
    "past": [
      "handelte",
      "handeltest",
      "handelte",
      "handelten",
      "handeltet",
      "handelten"
    ],
    "perfect": [
      "hat",
      "gehandelt"
    ],
    "future": [
      "werde handeln",
      "wirst handeln",
      "wird handeln",
      "werden handeln",
      "werdet handeln",
      "werden handeln"
    ],
    "konjII": [
      "würde handeln",
      "würdest handeln",
      "würde handeln",
      "würden handeln",
      "würdet handeln",
      "würden handeln"
    ],
    "imperative": [
      "handel!",
      "handelt!",
      "handeln Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte handeln.",
        "en": "I want to to act/deal."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "heilen",
    "de": "heilen",
    "en": "to heal",
    "level": "A2",
    "irregular": false,
    "present": [
      "heile",
      "heilst",
      "heilt",
      "heilen",
      "heilt",
      "heilen"
    ],
    "past": [
      "heilte",
      "heiltest",
      "heilte",
      "heilten",
      "heiltet",
      "heilten"
    ],
    "perfect": [
      "hat",
      "geheilt"
    ],
    "future": [
      "werde heilen",
      "wirst heilen",
      "wird heilen",
      "werden heilen",
      "werdet heilen",
      "werden heilen"
    ],
    "konjII": [
      "würde heilen",
      "würdest heilen",
      "würde heilen",
      "würden heilen",
      "würdet heilen",
      "würden heilen"
    ],
    "imperative": [
      "heil!",
      "heilt!",
      "heilen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte heilen.",
        "en": "I want to to heal."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "heiraten",
    "de": "heiraten",
    "en": "to marry",
    "level": "A1",
    "irregular": false,
    "present": [
      "heirate",
      "heiratest",
      "heiratet",
      "heiraten",
      "heiratet",
      "heiraten"
    ],
    "past": [
      "heiratete",
      "heiratetest",
      "heiratete",
      "heirateten",
      "heiratetet",
      "heirateten"
    ],
    "perfect": [
      "hat",
      "geheiratet"
    ],
    "future": [
      "werde heiraten",
      "wirst heiraten",
      "wird heiraten",
      "werden heiraten",
      "werdet heiraten",
      "werden heiraten"
    ],
    "konjII": [
      "würde heiraten",
      "würdest heiraten",
      "würde heiraten",
      "würden heiraten",
      "würdet heiraten",
      "würden heiraten"
    ],
    "imperative": [
      "heirate!",
      "heiratet!",
      "heiraten Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte heiraten.",
        "en": "I want to to marry."
      }
    ],
    "note": "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'."
  },
  {
    "id": "kämmen",
    "de": "kämmen",
    "en": "to comb",
    "level": "A1",
    "irregular": false,
    "present": [
      "kämme",
      "kämmst",
      "kämmt",
      "kämmen",
      "kämmt",
      "kämmen"
    ],
    "past": [
      "kämmte",
      "kämmtest",
      "kämmte",
      "kämmten",
      "kämmtet",
      "kämmten"
    ],
    "perfect": [
      "hat",
      "gekämmt"
    ],
    "future": [
      "werde kämmen",
      "wirst kämmen",
      "wird kämmen",
      "werden kämmen",
      "werdet kämmen",
      "werden kämmen"
    ],
    "konjII": [
      "würde kämmen",
      "würdest kämmen",
      "würde kämmen",
      "würden kämmen",
      "würdet kämmen",
      "würden kämmen"
    ],
    "imperative": [
      "kämm!",
      "kämmt!",
      "kämmen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte kämmen.",
        "en": "I want to to comb."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "klopfen",
    "de": "klopfen",
    "en": "to knock",
    "level": "A2",
    "irregular": false,
    "present": [
      "klopfe",
      "klopfst",
      "klopft",
      "klopfen",
      "klopft",
      "klopfen"
    ],
    "past": [
      "klopfte",
      "klopftest",
      "klopfte",
      "klopften",
      "klopftet",
      "klopften"
    ],
    "perfect": [
      "hat",
      "geklopft"
    ],
    "future": [
      "werde klopfen",
      "wirst klopfen",
      "wird klopfen",
      "werden klopfen",
      "werdet klopfen",
      "werden klopfen"
    ],
    "konjII": [
      "würde klopfen",
      "würdest klopfen",
      "würde klopfen",
      "würden klopfen",
      "würdet klopfen",
      "würden klopfen"
    ],
    "imperative": [
      "klopf!",
      "klopft!",
      "klopfen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte klopfen.",
        "en": "I want to to knock."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "lächeln",
    "de": "lächeln",
    "en": "to smile",
    "level": "A2",
    "irregular": false,
    "present": [
      "lächele",
      "lächelst",
      "lächelt",
      "lächeln",
      "lächelt",
      "lächeln"
    ],
    "past": [
      "lächelte",
      "lächeltest",
      "lächelte",
      "lächelten",
      "lächeltet",
      "lächelten"
    ],
    "perfect": [
      "hat",
      "gelächelt"
    ],
    "future": [
      "werde lächeln",
      "wirst lächeln",
      "wird lächeln",
      "werden lächeln",
      "werdet lächeln",
      "werden lächeln"
    ],
    "konjII": [
      "würde lächeln",
      "würdest lächeln",
      "würde lächeln",
      "würden lächeln",
      "würdet lächeln",
      "würden lächeln"
    ],
    "imperative": [
      "lächel!",
      "lächelt!",
      "lächeln Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte lächeln.",
        "en": "I want to to smile."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "landen",
    "de": "landen",
    "en": "to land",
    "level": "A2",
    "irregular": false,
    "present": [
      "lande",
      "landest",
      "landet",
      "landen",
      "landet",
      "landen"
    ],
    "past": [
      "landete",
      "landetest",
      "landete",
      "landeten",
      "landetet",
      "landeten"
    ],
    "perfect": [
      "ist",
      "gelandet"
    ],
    "future": [
      "werde landen",
      "wirst landen",
      "wird landen",
      "werden landen",
      "werdet landen",
      "werden landen"
    ],
    "konjII": [
      "würde landen",
      "würdest landen",
      "würde landen",
      "würden landen",
      "würdet landen",
      "würden landen"
    ],
    "imperative": [
      "lande!",
      "landet!",
      "landen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte landen.",
        "en": "I want to to land."
      }
    ],
    "note": "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'.\n\nNote: This verb uses 'sein' as its auxiliary in the Perfekt because it indicates a change of position or state."
  },
  {
    "id": "lügen",
    "de": "lügen",
    "en": "to lie",
    "level": "A2",
    "irregular": false,
    "present": [
      "lüge",
      "lügst",
      "lügt",
      "lügen",
      "lügt",
      "lügen"
    ],
    "past": [
      "lügte",
      "lügtest",
      "lügte",
      "lügten",
      "lügtet",
      "lügten"
    ],
    "perfect": [
      "hat",
      "gelügt"
    ],
    "future": [
      "werde lügen",
      "wirst lügen",
      "wird lügen",
      "werden lügen",
      "werdet lügen",
      "werden lügen"
    ],
    "konjII": [
      "würde lügen",
      "würdest lügen",
      "würde lügen",
      "würden lügen",
      "würdet lügen",
      "würden lügen"
    ],
    "imperative": [
      "lüg!",
      "lügt!",
      "lügen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte lügen.",
        "en": "I want to to lie."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "mischen",
    "de": "mischen",
    "en": "to mix",
    "level": "A2",
    "irregular": false,
    "present": [
      "mische",
      "mischst",
      "mischt",
      "mischen",
      "mischt",
      "mischen"
    ],
    "past": [
      "mischte",
      "mischtest",
      "mischte",
      "mischten",
      "mischtet",
      "mischten"
    ],
    "perfect": [
      "hat",
      "gemischt"
    ],
    "future": [
      "werde mischen",
      "wirst mischen",
      "wird mischen",
      "werden mischen",
      "werdet mischen",
      "werden mischen"
    ],
    "konjII": [
      "würde mischen",
      "würdest mischen",
      "würde mischen",
      "würden mischen",
      "würdet mischen",
      "würden mischen"
    ],
    "imperative": [
      "misch!",
      "mischt!",
      "mischen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte mischen.",
        "en": "I want to to mix."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "naschen",
    "de": "naschen",
    "en": "to snack",
    "level": "A2",
    "irregular": false,
    "present": [
      "nasche",
      "naschst",
      "nascht",
      "naschen",
      "nascht",
      "naschen"
    ],
    "past": [
      "naschte",
      "naschtest",
      "naschte",
      "naschten",
      "naschtet",
      "naschten"
    ],
    "perfect": [
      "hat",
      "genascht"
    ],
    "future": [
      "werde naschen",
      "wirst naschen",
      "wird naschen",
      "werden naschen",
      "werdet naschen",
      "werden naschen"
    ],
    "konjII": [
      "würde naschen",
      "würdest naschen",
      "würde naschen",
      "würden naschen",
      "würdet naschen",
      "würden naschen"
    ],
    "imperative": [
      "nasch!",
      "nascht!",
      "naschen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte naschen.",
        "en": "I want to to snack."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "nicken",
    "de": "nicken",
    "en": "to nod",
    "level": "A2",
    "irregular": false,
    "present": [
      "nicke",
      "nickst",
      "nickt",
      "nicken",
      "nickt",
      "nicken"
    ],
    "past": [
      "nickte",
      "nicktest",
      "nickte",
      "nickten",
      "nicktet",
      "nickten"
    ],
    "perfect": [
      "hat",
      "genickt"
    ],
    "future": [
      "werde nicken",
      "wirst nicken",
      "wird nicken",
      "werden nicken",
      "werdet nicken",
      "werden nicken"
    ],
    "konjII": [
      "würde nicken",
      "würdest nicken",
      "würde nicken",
      "würden nicken",
      "würdet nicken",
      "würden nicken"
    ],
    "imperative": [
      "nick!",
      "nickt!",
      "nicken Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte nicken.",
        "en": "I want to to nod."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "öffnen",
    "de": "öffnen",
    "en": "to open",
    "level": "A1",
    "irregular": false,
    "present": [
      "öffne",
      "öffnest",
      "öffnet",
      "öffnen",
      "öffnet",
      "öffnen"
    ],
    "past": [
      "öffnete",
      "öffnetest",
      "öffnete",
      "öffneten",
      "öffnetet",
      "öffneten"
    ],
    "perfect": [
      "hat",
      "geöffnet"
    ],
    "future": [
      "werde öffnen",
      "wirst öffnen",
      "wird öffnen",
      "werden öffnen",
      "werdet öffnen",
      "werden öffnen"
    ],
    "konjII": [
      "würde öffnen",
      "würdest öffnen",
      "würde öffnen",
      "würden öffnen",
      "würdet öffnen",
      "würden öffnen"
    ],
    "imperative": [
      "öffne!",
      "öffnet!",
      "öffnen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte öffnen.",
        "en": "I want to to open."
      }
    ],
    "note": "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'."
  },
  {
    "id": "pflanzen",
    "de": "pflanzen",
    "en": "to plant",
    "level": "A2",
    "irregular": false,
    "present": [
      "pflanze",
      "pflanzst",
      "pflanzt",
      "pflanzen",
      "pflanzt",
      "pflanzen"
    ],
    "past": [
      "pflanzte",
      "pflanztest",
      "pflanzte",
      "pflanzten",
      "pflanztet",
      "pflanzten"
    ],
    "perfect": [
      "hat",
      "gepflanzt"
    ],
    "future": [
      "werde pflanzen",
      "wirst pflanzen",
      "wird pflanzen",
      "werden pflanzen",
      "werdet pflanzen",
      "werden pflanzen"
    ],
    "konjII": [
      "würde pflanzen",
      "würdest pflanzen",
      "würde pflanzen",
      "würden pflanzen",
      "würdet pflanzen",
      "würden pflanzen"
    ],
    "imperative": [
      "pflanz!",
      "pflanzt!",
      "pflanzen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte pflanzen.",
        "en": "I want to to plant."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "plaudern",
    "de": "plaudern",
    "en": "to chat",
    "level": "A2",
    "irregular": false,
    "present": [
      "plaudere",
      "plauderst",
      "plaudert",
      "plaudern",
      "plaudert",
      "plaudern"
    ],
    "past": [
      "plauderte",
      "plaudertest",
      "plauderte",
      "plauderten",
      "plaudertet",
      "plauderten"
    ],
    "perfect": [
      "hat",
      "geplaudert"
    ],
    "future": [
      "werde plaudern",
      "wirst plaudern",
      "wird plaudern",
      "werden plaudern",
      "werdet plaudern",
      "werden plaudern"
    ],
    "konjII": [
      "würde plaudern",
      "würdest plaudern",
      "würde plaudern",
      "würden plaudern",
      "würdet plaudern",
      "würden plaudern"
    ],
    "imperative": [
      "plauder!",
      "plaudert!",
      "plaudern Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte plaudern.",
        "en": "I want to to chat."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "pusten",
    "de": "pusten",
    "en": "to blow",
    "level": "A2",
    "irregular": false,
    "present": [
      "puste",
      "pustest",
      "pustet",
      "pusten",
      "pustet",
      "pusten"
    ],
    "past": [
      "pustete",
      "pustetest",
      "pustete",
      "pusteten",
      "pustetet",
      "pusteten"
    ],
    "perfect": [
      "hat",
      "gepustet"
    ],
    "future": [
      "werde pusten",
      "wirst pusten",
      "wird pusten",
      "werden pusten",
      "werdet pusten",
      "werden pusten"
    ],
    "konjII": [
      "würde pusten",
      "würdest pusten",
      "würde pusten",
      "würden pusten",
      "würdet pusten",
      "würden pusten"
    ],
    "imperative": [
      "puste!",
      "pustet!",
      "pusten Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte pusten.",
        "en": "I want to to blow."
      }
    ],
    "note": "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'."
  },
  {
    "id": "reagieren",
    "de": "reagieren",
    "en": "to react",
    "level": "A2",
    "irregular": false,
    "present": [
      "reagiere",
      "reagierst",
      "reagiert",
      "reagieren",
      "reagiert",
      "reagieren"
    ],
    "past": [
      "reagierte",
      "reagiertest",
      "reagierte",
      "reagierten",
      "reagiertet",
      "reagierten"
    ],
    "perfect": [
      "hat",
      "reagiert"
    ],
    "future": [
      "werde reagieren",
      "wirst reagieren",
      "wird reagieren",
      "werden reagieren",
      "werdet reagieren",
      "werden reagieren"
    ],
    "konjII": [
      "würde reagieren",
      "würdest reagieren",
      "würde reagieren",
      "würden reagieren",
      "würdet reagieren",
      "würden reagieren"
    ],
    "imperative": [
      "reagier!",
      "reagiert!",
      "reagieren Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte reagieren.",
        "en": "I want to to react."
      }
    ],
    "note": "Regular '-ieren' verb. Pattern: always weak/regular. Note: No 'ge-' prefix in the Perfekt (past participle). Examples: 'Ich habe studiert', NOT 'gestudiert'."
  },
  {
    "id": "retten",
    "de": "retten",
    "en": "to save/rescue",
    "level": "A2",
    "irregular": false,
    "present": [
      "rette",
      "rettest",
      "rettet",
      "retten",
      "rettet",
      "retten"
    ],
    "past": [
      "rettete",
      "rettetest",
      "rettete",
      "retteten",
      "rettetet",
      "retteten"
    ],
    "perfect": [
      "hat",
      "gerettet"
    ],
    "future": [
      "werde retten",
      "wirst retten",
      "wird retten",
      "werden retten",
      "werdet retten",
      "werden retten"
    ],
    "konjII": [
      "würde retten",
      "würdest retten",
      "würde retten",
      "würden retten",
      "würdet retten",
      "würden retten"
    ],
    "imperative": [
      "rette!",
      "rettet!",
      "retten Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte retten.",
        "en": "I want to to save/rescue."
      }
    ],
    "note": "Regular weak verb with a stem ending in -t, -d, or certain consonant clusters. Note: Add an extra 'e' before the endings -st and -t for easier pronunciation. Example: 'du arbeitest', 'er arbeitet'."
  },
  {
    "id": "riechen",
    "de": "riechen",
    "en": "to smell",
    "level": "A2",
    "irregular": false,
    "present": [
      "rieche",
      "riechst",
      "riecht",
      "riechen",
      "riecht",
      "riechen"
    ],
    "past": [
      "riechte",
      "riechtest",
      "riechte",
      "riechten",
      "riechtet",
      "riechten"
    ],
    "perfect": [
      "hat",
      "geriecht"
    ],
    "future": [
      "werde riechen",
      "wirst riechen",
      "wird riechen",
      "werden riechen",
      "werdet riechen",
      "werden riechen"
    ],
    "konjII": [
      "würde riechen",
      "würdest riechen",
      "würde riechen",
      "würden riechen",
      "würdet riechen",
      "würden riechen"
    ],
    "imperative": [
      "riech!",
      "riecht!",
      "riechen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte riechen.",
        "en": "I want to to smell."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "rühren",
    "de": "rühren",
    "en": "to stir",
    "level": "A2",
    "irregular": false,
    "present": [
      "rühre",
      "rührst",
      "rührt",
      "rühren",
      "rührt",
      "rühren"
    ],
    "past": [
      "rührte",
      "rührtest",
      "rührte",
      "rührten",
      "rührtet",
      "rührten"
    ],
    "perfect": [
      "hat",
      "gerührt"
    ],
    "future": [
      "werde rühren",
      "wirst rühren",
      "wird rühren",
      "werden rühren",
      "werdet rühren",
      "werden rühren"
    ],
    "konjII": [
      "würde rühren",
      "würdest rühren",
      "würde rühren",
      "würden rühren",
      "würdet rühren",
      "würden rühren"
    ],
    "imperative": [
      "rühr!",
      "rührt!",
      "rühren Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte rühren.",
        "en": "I want to to stir."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "schließen",
    "de": "schließen",
    "en": "to close",
    "level": "A2",
    "irregular": false,
    "present": [
      "schließe",
      "schließst",
      "schließt",
      "schließen",
      "schließt",
      "schließen"
    ],
    "past": [
      "schließte",
      "schließtest",
      "schließte",
      "schließten",
      "schließtet",
      "schließten"
    ],
    "perfect": [
      "hat",
      "geschließt"
    ],
    "future": [
      "werde schließen",
      "wirst schließen",
      "wird schließen",
      "werden schließen",
      "werdet schließen",
      "werden schließen"
    ],
    "konjII": [
      "würde schließen",
      "würdest schließen",
      "würde schließen",
      "würden schließen",
      "würdet schließen",
      "würden schließen"
    ],
    "imperative": [
      "schließ!",
      "schließt!",
      "schließen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte schließen.",
        "en": "I want to to close."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "schreien",
    "de": "schreien",
    "en": "to scream",
    "level": "A2",
    "irregular": false,
    "present": [
      "schreie",
      "schreist",
      "schreit",
      "schreien",
      "schreit",
      "schreien"
    ],
    "past": [
      "schreite",
      "schreitest",
      "schreite",
      "schreiten",
      "schreitet",
      "schreiten"
    ],
    "perfect": [
      "hat",
      "geschreit"
    ],
    "future": [
      "werde schreien",
      "wirst schreien",
      "wird schreien",
      "werden schreien",
      "werdet schreien",
      "werden schreien"
    ],
    "konjII": [
      "würde schreien",
      "würdest schreien",
      "würde schreien",
      "würden schreien",
      "würdet schreien",
      "würden schreien"
    ],
    "imperative": [
      "schrei!",
      "schreit!",
      "schreien Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte schreien.",
        "en": "I want to to scream."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "schützen",
    "de": "schützen",
    "en": "to protect",
    "level": "A2",
    "irregular": false,
    "present": [
      "schütze",
      "schützst",
      "schützt",
      "schützen",
      "schützt",
      "schützen"
    ],
    "past": [
      "schützte",
      "schütztest",
      "schützte",
      "schützten",
      "schütztet",
      "schützten"
    ],
    "perfect": [
      "hat",
      "geschützt"
    ],
    "future": [
      "werde schützen",
      "wirst schützen",
      "wird schützen",
      "werden schützen",
      "werdet schützen",
      "werden schützen"
    ],
    "konjII": [
      "würde schützen",
      "würdest schützen",
      "würde schützen",
      "würden schützen",
      "würdet schützen",
      "würden schützen"
    ],
    "imperative": [
      "schütz!",
      "schützt!",
      "schützen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte schützen.",
        "en": "I want to to protect."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "servieren",
    "de": "servieren",
    "en": "to serve",
    "level": "A2",
    "irregular": false,
    "present": [
      "serviere",
      "servierst",
      "serviert",
      "servieren",
      "serviert",
      "servieren"
    ],
    "past": [
      "servierte",
      "serviertest",
      "servierte",
      "servierten",
      "serviertet",
      "servierten"
    ],
    "perfect": [
      "hat",
      "serviert"
    ],
    "future": [
      "werde servieren",
      "wirst servieren",
      "wird servieren",
      "werden servieren",
      "werdet servieren",
      "werden servieren"
    ],
    "konjII": [
      "würde servieren",
      "würdest servieren",
      "würde servieren",
      "würden servieren",
      "würdet servieren",
      "würden servieren"
    ],
    "imperative": [
      "servier!",
      "serviert!",
      "servieren Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte servieren.",
        "en": "I want to to serve."
      }
    ],
    "note": "Regular '-ieren' verb. Pattern: always weak/regular. Note: No 'ge-' prefix in the Perfekt (past participle). Examples: 'Ich habe studiert', NOT 'gestudiert'."
  },
  {
    "id": "sippen",
    "de": "sippen",
    "en": "to sip",
    "level": "A2",
    "irregular": false,
    "present": [
      "sippe",
      "sippst",
      "sippt",
      "sippen",
      "sippt",
      "sippen"
    ],
    "past": [
      "sippte",
      "sipptest",
      "sippte",
      "sippten",
      "sipptet",
      "sippten"
    ],
    "perfect": [
      "hat",
      "gesippt"
    ],
    "future": [
      "werde sippen",
      "wirst sippen",
      "wird sippen",
      "werden sippen",
      "werdet sippen",
      "werden sippen"
    ],
    "konjII": [
      "würde sippen",
      "würdest sippen",
      "würde sippen",
      "würden sippen",
      "würdet sippen",
      "würden sippen"
    ],
    "imperative": [
      "sipp!",
      "sippt!",
      "sippen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte sippen.",
        "en": "I want to to sip."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "stärken",
    "de": "stärken",
    "en": "to strengthen",
    "level": "A2",
    "irregular": false,
    "present": [
      "stärke",
      "stärkst",
      "stärkt",
      "stärken",
      "stärkt",
      "stärken"
    ],
    "past": [
      "stärkte",
      "stärktest",
      "stärkte",
      "stärkten",
      "stärktet",
      "stärkten"
    ],
    "perfect": [
      "hat",
      "gestärkt"
    ],
    "future": [
      "werde stärken",
      "wirst stärken",
      "wird stärken",
      "werden stärken",
      "werdet stärken",
      "werden stärken"
    ],
    "konjII": [
      "würde stärken",
      "würdest stärken",
      "würde stärken",
      "würden stärken",
      "würdet stärken",
      "würden stärken"
    ],
    "imperative": [
      "stärk!",
      "stärkt!",
      "stärken Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte stärken.",
        "en": "I want to to strengthen."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  },
  {
    "id": "staunen",
    "de": "staunen",
    "en": "to be amazed",
    "level": "A2",
    "irregular": false,
    "present": [
      "staune",
      "staunst",
      "staunt",
      "staunen",
      "staunt",
      "staunen"
    ],
    "past": [
      "staunte",
      "stauntest",
      "staunte",
      "staunten",
      "stauntet",
      "staunten"
    ],
    "perfect": [
      "hat",
      "gestaunt"
    ],
    "future": [
      "werde staunen",
      "wirst staunen",
      "wird staunen",
      "werden staunen",
      "werdet staunen",
      "werden staunen"
    ],
    "konjII": [
      "würde staunen",
      "würdest staunen",
      "würde staunen",
      "würden staunen",
      "würdet staunen",
      "würden staunen"
    ],
    "imperative": [
      "staun!",
      "staunt!",
      "staunen Sie!"
    ],
    "examples": [
      {
        "de": "Ich möchte staunen.",
        "en": "I want to to be amazed."
      }
    ],
    "note": "Regular weak verb (Schwaches Verb). Follows the standard pattern: stem + -e, -st, -t, -en, -t, -en. Partizip II (Perfekt) is formed with 'ge-' + stem + '-t'."
  }
];
