// quiz-data.js — Goethe-Institut Style Quiz Bank (EXPANDED v2)
// ─────────────────────────────────────────────────────────────
// MODULAR: Add new quizzes by pushing to QUIZ_BANK arrays.
// Each quiz has: id, level (A1/A2/B1), section, part, instructions, questions[]
// Question types: "mcq","richtig_falsch","cloze","matching","ordering","situational"
// NOTE: ALL HÖREN TEXTS MUST BE STRICTLY UNDER 150 CHARACTERS TO PREVENT GOOGLE TTS API CUT-OFF

const QUIZ_BANK = {

  // ══════════════════════════════════════════
  //  LESEN (Reading Comprehension)
  // ══════════════════════════════════════════
  lesen: [

    // ── A1 Lesen Teil 1: Short texts + MCQ ──
    {
      id: "a1_lesen_1", level: "A1", section: "Lesen", part: "Teil 1",
      title: "Kurze Texte verstehen",
      instructions: "Lesen Sie die Texte und wählen Sie die richtige Antwort.",
      questions: [
        {
          type: "mcq",
          text: '📧 Liebe Maria, ich komme am Samstag um 14 Uhr zum Bahnhof. Kannst du mich abholen? Bis bald! Dein Bruder Thomas',
          question: "Wann kommt Thomas an?",
          options: ["Am Freitag um 14 Uhr", "Am Samstag um 14 Uhr", "Am Sonntag um 14 Uhr"],
          answer: 1
        },
        {
          type: "mcq",
          text: '📋 Öffnungszeiten Bibliothek:\nMontag – Freitag: 9:00 – 18:00 Uhr\nSamstag: 10:00 – 14:00 Uhr\nSonntag: geschlossen',
          question: "Wann ist die Bibliothek am Samstag offen?",
          options: ["9:00 – 18:00 Uhr", "10:00 – 14:00 Uhr", "Geschlossen"],
          answer: 1
        },
        {
          type: "mcq",
          text: '🏪 ANGEBOT DIESE WOCHE:\nÄpfel — 1,50 € pro Kilo\nMilch — 0,89 € pro Liter\nBrot — 2,10 €',
          question: "Was kostet ein Kilo Äpfel?",
          options: ["0,89 €", "1,50 €", "2,10 €"],
          answer: 1
        },
        {
          type: "mcq",
          text: '📌 Deutschkurs A1 — Beginn: 5. März\nMontag und Mittwoch, 18:00–19:30 Uhr\nKursgebühr: 120 €\nAnmeldung bis 1. März',
          question: "An welchen Tagen ist der Kurs?",
          options: ["Dienstag und Donnerstag", "Montag und Mittwoch", "Jeden Tag"],
          answer: 1
        },
        {
          type: "mcq",
          text: '📧 Hallo Peter, die Party am Freitag beginnt um 20 Uhr bei Anna. Kannst du einen Kuchen mitbringen? Danke! Lisa',
          question: "Was soll Peter mitbringen?",
          options: ["Getränke", "Einen Kuchen", "Musik"],
          answer: 1
        }
      ]
    },

    // ── A1 Lesen Teil 2: Richtig/Falsch ──
    {
      id: "a1_lesen_2", level: "A1", section: "Lesen", part: "Teil 2",
      title: "Richtig oder Falsch?",
      instructions: "Lesen Sie den Text. Ist das richtig oder falsch?",
      questions: [
        {
          type: "richtig_falsch",
          text: '📧 Liebe Frau Müller,\nich bin krank und kann heute nicht zur Arbeit kommen. Ich gehe zum Arzt um 10 Uhr. Morgen bin ich hoffentlich wieder da.\nMit freundlichen Grüßen,\nSarah Klein',
          statements: [
            { s: "Sarah kann heute arbeiten.", answer: false },
            { s: "Sarah geht zum Arzt.", answer: true },
            { s: "Sarah ist seit einer Woche krank.", answer: false },
            { s: "Sarah hofft, morgen wieder zu kommen.", answer: true },
            { s: "Sarah schreibt diese E-Mail an ihre Chefin oder Firma.", answer: true }
          ]
        },
        {
          type: "richtig_falsch",
          text: '📝 Mein Name ist Jan. Ich bin 25 Jahre alt und komme aus Berlin. Ich studiere Informatik an der Universität. Am Wochenende spiele ich gern Fußball. Ich habe zwei Schwestern.',
          statements: [
            { s: "Jan ist 25 Jahre alt.", answer: true },
            { s: "Jan kommt aus München.", answer: false },
            { s: "Jan studiert Medizin.", answer: false },
            { s: "Jan spielt gern Fußball.", answer: true },
            { s: "Jan hat einen Bruder.", answer: false }
          ]
        }
      ]
    },

    // ── A1 Lesen Teil 3: Schilder und Hinweise ──
    {
      id: "a1_lesen_3", level: "A1", section: "Lesen", part: "Teil 3",
      title: "Schilder und Hinweise lesen",
      instructions: "Was bedeutet das Schild? Wählen Sie die richtige Antwort.",
      questions: [
        {
          type: "mcq",
          text: '🚪 EINGANG NUR FÜR PERSONAL',
          question: "Wer darf durch diese Tür gehen?",
          options: ["Alle Besucher", "Nur Mitarbeiter", "Kinder"],
          answer: 1
        },
        {
          type: "mcq",
          text: '🔕 BITTE NICHT STÖREN – PRÜFUNG LÄUFT',
          question: "Was soll man nicht tun?",
          options: ["Laut sprechen und den Raum betreten", "Essen und trinken", "Fotografieren"],
          answer: 0
        },
        {
          type: "mcq",
          text: '🅿️ PARKEN NUR FÜR KUNDEN\nMo–Sa 8–20 Uhr\nMax. 2 Stunden',
          question: "Wie lange darf man hier parken?",
          options: ["Unbegrenzt", "2 Stunden", "30 Minuten"],
          answer: 1
        },
        {
          type: "mcq",
          text: '🗑️ Bitte werfen Sie Ihren Müll in die Tonne. Vielen Dank!',
          question: "Was soll man mit dem Müll tun?",
          options: ["Auf den Boden legen", "In die Tonne werfen", "Mitnehmen"],
          answer: 1
        },
        {
          type: "mcq",
          text: '🔥 NOTAUSGANG – Im Notfall Tür aufdrücken',
          question: "Wann benutzt man diesen Ausgang?",
          options: ["Täglich", "Im Notfall", "Für Lieferungen"],
          answer: 1
        },
        {
          type: "mcq",
          text: '🧴 Hände waschen – schützt Sie und andere!',
          question: "Warum soll man die Hände waschen?",
          options: ["Um schöner auszusehen", "Zum Schutz von sich und anderen", "Weil es Pflicht ist"],
          answer: 1
        }
      ]
    },

    // ── A1 Lesen Teil 4: Formulare lesen ──
    {
      id: "a1_lesen_4", level: "A1", section: "Lesen", part: "Teil 4",
      title: "Ein Formular lesen",
      instructions: "Lesen Sie das Anmeldeformular und beantworten Sie die Fragen.",
      questions: [
        {
          type: "richtig_falsch",
          text: '📄 ANMELDEFORMULAR – Deutschkurs\nName: Nowak, Katarzyna\nGeburtsdatum: 12.03.1990\nNationalität: Polnisch\nSprachkenntnisse: Englisch (gut), Deutsch (Anfänger)\nKurswunsch: A1, montags und mittwochs\nTelefon: 0176-33445566',
          statements: [
            { s: "Katarzyna ist 1990 geboren.", answer: true },
            { s: "Sie spricht sehr gut Deutsch.", answer: false },
            { s: "Sie möchte den Kurs dienstags machen.", answer: false },
            { s: "Ihre Nationalität ist polnisch.", answer: true },
            { s: "Sie spricht Englisch gut.", answer: true }
          ]
        }
      ]
    },

    // ── A2 Lesen Teil 1: Zeitungsartikel + MCQ ──
    {
      id: "a2_lesen_1", level: "A2", section: "Lesen", part: "Teil 1",
      title: "Zeitungsartikel verstehen",
      instructions: "Lesen Sie den Text und beantworten Sie die Fragen.",
      questions: [
        {
          type: "mcq",
          text: '🗞️ Neue Fahrradwege in der Stadt\n\nDie Stadt plant ab April neue Fahrradwege im Zentrum. Die Bauarbeiten dauern ungefähr drei Monate. Der Bürgermeister sagt: „Wir wollen, dass mehr Menschen mit dem Fahrrad fahren. Das ist gut für die Umwelt." Autofahrer müssen in dieser Zeit andere Straßen benutzen.',
          question: "Warum baut die Stadt neue Fahrradwege?",
          options: ["Weil es zu viele Fahrräder gibt", "Weil mehr Menschen Fahrrad fahren sollen", "Weil die alten Straßen kaputt sind"],
          answer: 1
        },
        {
          type: "mcq",
          text: '🗞️ Neue Fahrradwege in der Stadt\n\nDie Stadt plant ab April neue Fahrradwege im Zentrum. Die Bauarbeiten dauern ungefähr drei Monate. Der Bürgermeister sagt: „Wir wollen, dass mehr Menschen mit dem Fahrrad fahren. Das ist gut für die Umwelt." Autofahrer müssen in dieser Zeit andere Straßen benutzen.',
          question: "Wie lange dauern die Bauarbeiten?",
          options: ["Einen Monat", "Drei Monate", "Ein Jahr"],
          answer: 1
        },
        {
          type: "mcq",
          text: '📰 Neues Café am Marktplatz\n\nAm Samstag hat das Café „Zum goldenen Löffel" am Marktplatz eröffnet. Das Café bietet Frühstück, Kuchen und Kaffee an. Die Inhaberin, Frau Schmidt, hat früher in Wien gearbeitet. „Ich bringe die Kaffeekultur nach Deutschland", sagt sie. Das Café ist täglich von 7 bis 19 Uhr geöffnet.',
          question: "Woher kommt die Kaffeekultur im neuen Café?",
          options: ["Aus Berlin", "Aus Wien", "Aus Hamburg"],
          answer: 1
        },
        {
          type: "mcq",
          text: '📰 Neues Café am Marktplatz\n\nAm Samstag hat das Café „Zum goldenen Löffel" am Marktplatz eröffnet. Das Café bietet Frühstück, Kuchen und Kaffee an. Die Inhaberin, Frau Schmidt, hat früher in Wien gearbeitet. „Ich bringe die Kaffeekultur nach Deutschland", sagt sie. Das Café ist täglich von 7 bis 19 Uhr geöffnet.',
          question: "Wann macht das Café am Abend zu?",
          options: ["Um 17 Uhr", "Um 19 Uhr", "Um 21 Uhr"],
          answer: 1
        },
        {
          type: "mcq",
          text: '📰 Neues Café am Marktplatz\n\nAm Samstag hat das Café „Zum goldenen Löffel" am Marktplatz eröffnet. Das Café bietet Frühstück, Kuchen und Kaffee an. Die Inhaberin, Frau Schmidt, hat früher in Wien gearbeitet. „Ich bringe die Kaffeekultur nach Deutschland", sagt sie. Das Café ist täglich von 7 bis 19 Uhr geöffnet.',
          question: "An welchen Tagen ist das Café geschlossen?",
          options: ["Sonntags", "Montags", "Es ist jeden Tag offen"],
          answer: 2
        }
      ]
    },

    // ── A2 Lesen Teil 2: Matching/Zuordnung ──
    {
      id: "a2_lesen_2", level: "A2", section: "Lesen", part: "Teil 2",
      title: "Anzeigen verstehen",
      instructions: "Lesen Sie die Situationen und finden Sie die passende Anzeige.",
      questions: [
        {
          type: "matching",
          situations: [
            "Ihre Freundin sucht eine Wohnung mit zwei Zimmern in der Stadtmitte.",
            "Sie möchten am Wochenende einen Sprachkurs besuchen.",
            "Ihr Sohn (8 Jahre) möchte ein Instrument lernen.",
            "Sie suchen einen Job für den Abend.",
            "Ihr Auto ist kaputt und Sie suchen eine Werkstatt."
          ],
          ads: [
            { id: "A", text: "2-Zimmer-Wohnung, Zentrum, 65m², 580€ warm, ab sofort frei. Tel: 0171-555-3344" },
            { id: "B", text: 'Kellner/in gesucht! Restaurant „Bella Italia" sucht Aushilfe für abends (18–23 Uhr).' },
            { id: "C", text: "Gitarrenunterricht für Kinder ab 6 Jahren. Montags 15–16 Uhr. 40€/Monat." },
            { id: "D", text: "Intensiv-Deutschkurs: Sa+So, 9–13 Uhr. Alle Niveaus. VHS Mitte. Anmeldung online." },
            { id: "E", text: "Autohaus Müller: Wir reparieren alle Marken. Schnell und günstig. Rufen Sie uns an!" }
          ],
          answers: [0, 3, 2, 1, 4]
        }
      ]
    },

    // ── A2 Lesen Teil 3: E-Mails ──
    {
      id: "a2_lesen_3", level: "A2", section: "Lesen", part: "Teil 3",
      title: "E-Mails verstehen",
      instructions: "Lesen Sie die E-Mail und beantworten Sie die Fragen.",
      questions: [
        {
          type: "mcq",
          text: 'Betreff: Einladung zum Sommerfest\n\nHallo liebe Kollegen,\nnächsten Freitag, am 12. Juli, findet unser jährliches Sommerfest statt. Wir treffen uns um 15 Uhr im Park hinter dem Bürogebäude. Es gibt Bratwurst, Salate und kühle Getränke. Wer möchte, kann gern noch einen Kuchen für das Dessertbuffet mitbringen. Bitte gebt mir bis Mittwoch Bescheid, ob ihr kommt.\n\nViele Grüße\nJulia',
          question: "Wo findet das Sommerfest statt?",
          options: ["Im Büro", "Im Restaurant", "Im Park"],
          answer: 2
        },
        {
          type: "mcq",
          text: 'Betreff: Einladung zum Sommerfest\n\nHallo liebe Kollegen,\nnächsten Freitag, am 12. Juli, findet unser jährliches Sommerfest statt. Wir treffen uns um 15 Uhr im Park hinter dem Bürogebäude. Es gibt Bratwurst, Salate und kühle Getränke. Wer möchte, kann gern noch einen Kuchen für das Dessertbuffet mitbringen. Bitte gebt mir bis Mittwoch Bescheid, ob ihr kommt.\n\nViele Grüße\nJulia',
          question: "Was sollen die Kollegen mitbringen?",
          options: ["Salat", "Einen Kuchen (freiwillig)", "Getränke"],
          answer: 1
        },
        {
          type: "mcq",
          text: 'Betreff: Einladung zum Sommerfest\n\nHallo liebe Kollegen,\nnächsten Freitag, am 12. Juli, findet unser jährliches Sommerfest statt. Wir treffen uns um 15 Uhr im Park hinter dem Bürogebäude. Es gibt Bratwurst, Salate und kühle Getränke. Wer möchte, kann gern noch einen Kuchen für das Dessertbuffet mitbringen. Bitte gebt mir bis Mittwoch Bescheid, ob ihr kommt.\n\nViele Grüße\nJulia',
          question: "Wann ist das Sommerfest?",
          options: ["Diesen Mittwoch", "Nächsten Freitag", "Nächsten Montag"],
          answer: 1
        },
        {
          type: "mcq",
          text: 'Betreff: Wohnungsübergabe\n\nHallo Herr Berger,\num wie viel Uhr haben Sie morgen Zeit für die Wohnungsübergabe? Ich muss um 14 Uhr arbeiten, deshalb passt es mir am besten am Vormittag. Vergessen Sie bitte nicht, alle drei Schlüssel mitzubringen. Strom und Wasser habe ich bereits abgemeldet.\n\nGruß, Thomas Kurz',
          question: "Wann möchte Thomas Kurz die Wohnung übergeben?",
          options: ["Am Nachmittag", "Am Abend", "Am Vormittag"],
          answer: 2
        },
        {
          type: "mcq",
          text: 'Betreff: Wohnungsübergabe\n\nHallo Herr Berger,\num wie viel Uhr haben Sie morgen Zeit für die Wohnungsübergabe? Ich muss um 14 Uhr arbeiten, deshalb passt es mir am besten am Vormittag. Vergessen Sie bitte nicht, alle drei Schlüssel mitzubringen. Strom und Wasser habe ich bereits abgemeldet.\n\nGruß, Thomas Kurz',
          question: "Was hat Herr Kurz schon erledigt?",
          options: ["Die Schlüssel gesucht", "Strom und Wasser abgemeldet", "Die Wohnung gestrichen"],
          answer: 1
        }
      ]
    },

    // ── A2 Lesen Teil 4: Informationstext ──
    {
      id: "a2_lesen_4", level: "A2", section: "Lesen", part: "Teil 4",
      title: "Informationstexte verstehen",
      instructions: "Lesen Sie den Text und beantworten Sie die Fragen.",
      questions: [
        {
          type: "mcq",
          text: '📰 Stadtbibliothek modernisiert\n\nDie Stadtbibliothek bekommt ab Januar ein neues Computersystem. Alle Bücher können dann online reserviert werden. Außerdem wird es eine neue Kinderecke mit Sitzsäcken und Bilderbüchern geben. Während der Umbauarbeiten vom 2. bis 16. Januar ist die Bibliothek geschlossen. Der Eintritt bleibt weiterhin kostenlos.',
          question: "Was kann man ab Januar online machen?",
          options: ["Bücher kaufen", "Bücher reservieren", "Bibliotheksausweise beantragen"],
          answer: 1
        },
        {
          type: "mcq",
          text: '📰 Stadtbibliothek modernisiert\n\nDie Stadtbibliothek bekommt ab Januar ein neues Computersystem. Alle Bücher können dann online reserviert werden. Außerdem wird es eine neue Kinderecke mit Sitzsäcken und Bilderbüchern geben. Während der Umbauarbeiten vom 2. bis 16. Januar ist die Bibliothek geschlossen. Der Eintritt bleibt weiterhin kostenlos.',
          question: "Wie lange ist die Bibliothek wegen Umbau geschlossen?",
          options: ["Eine Woche", "Zwei Wochen", "Einen Monat"],
          answer: 1
        },
        {
          type: "mcq",
          text: '📰 Stadtbibliothek modernisiert\n\nDie Stadtbibliothek bekommt ab Januar ein neues Computersystem. Alle Bücher können dann online reserviert werden. Außerdem wird es eine neue Kinderecke mit Sitzsäcken und Bilderbüchern geben. Während der Umbauarbeiten vom 2. bis 16. Januar ist die Bibliothek geschlossen. Der Eintritt bleibt weiterhin kostenlos.',
          question: "Was kostet der Eintritt in die Bibliothek?",
          options: ["5 Euro", "2 Euro", "Nichts – es ist kostenlos"],
          answer: 2
        },
        {
          type: "richtig_falsch",
          text: '📰 Freizeit in der Stadt: Tipps für das Wochenende\n\nAm Samstag findet auf dem Marktplatz ein Flohmarkt statt. Händler bieten dort alte Möbel, Bücher, Kleidung und Schmuck an. Der Flohmarkt beginnt um 8 Uhr und endet um 15 Uhr. Der Eintritt ist frei. Am Sonntag gibt es im Stadtpark ein kostenloses Konzert mit lokalen Musikgruppen. Das Konzert startet um 14 Uhr.',
          statements: [
            { s: "Der Flohmarkt ist am Sonntag.", answer: false },
            { s: "Man kann auf dem Flohmarkt Kleidung kaufen.", answer: true },
            { s: "Der Eintritt zum Flohmarkt kostet etwas.", answer: false },
            { s: "Das Konzert im Park ist kostenlos.", answer: true },
            { s: "Das Konzert beginnt um 12 Uhr.", answer: false }
          ]
        }
      ]
    },

    // ── A2 Lesen Teil 5: Matching – Rubriken ──
    {
      id: "a2_lesen_5", level: "A2", section: "Lesen", part: "Teil 5",
      title: "Welche Rubrik passt?",
      instructions: "Ordnen Sie die Texte den passenden Rubriken zu.",
      questions: [
        {
          type: "matching",
          situations: [
            "Heute Abend stark bewölkt, morgen Regen und 12 Grad, Wind aus Nordwest.",
            "Kaufe dein Traumauto online! Pkw, Lkw, Motorräder – Bestpreisgarantie.",
            "Hast du Lust auf Tanzen? Salsa-Kurs für Anfänger, jeden Dienstag 19 Uhr.",
            "Sehr geehrte Damen und Herren, wir suchen eine Bürokraft in Teilzeit (20 Std./Woche).",
            "Zu verkaufen: gut erhaltenes Fahrrad, 26 Zoll, 80 Euro. Tel. 0163-99887766."
          ],
          ads: [
            { id: "A", text: "Wetter" },
            { id: "B", text: "Fahrzeuge kaufen" },
            { id: "C", text: "Kurse & Vereine" },
            { id: "D", text: "Stellenanzeigen" },
            { id: "E", text: "Kleinanzeigen – Sonstiges" }
          ],
          answers: [0, 1, 2, 3, 4]
        }
      ]
    },

    // ── A2 Lesen Teil 6: Längerer Text – Richtig/Falsch ──
    {
      id: "a2_lesen_6", level: "A2", section: "Lesen", part: "Teil 6",
      title: "Einen längeren Text verstehen",
      instructions: "Lesen Sie den Text und entscheiden Sie: richtig oder falsch?",
      questions: [
        {
          type: "richtig_falsch",
          text: '📄 Mein Alltag als Au-pair\n\nIch heiße Marta und bin 22 Jahre alt. Seit sechs Monaten lebe ich als Au-pair in einer deutschen Familie in München. Die Familie hat zwei Kinder: Lena (4 Jahre) und Felix (7 Jahre). Meine Aufgaben sind: die Kinder in die Schule oder in den Kindergarten bringen, mit ihnen spielen und manchmal kochen. Ich arbeite ungefähr fünf Stunden am Tag. Dafür bekomme ich ein Zimmer, Mahlzeiten und 280 Euro Taschengeld pro Monat. In meiner Freizeit besuche ich einen Deutschkurs und erkunde die Stadt. München ist wunderbar – ich liebe die Museen, die Parks und das Essen. Das Jahr in Deutschland ist eine tolle Erfahrung für mich.',
          statements: [
            { s: "Marta ist seit einem Jahr in Deutschland.", answer: false },
            { s: "Die Familie hat ein Kind.", answer: false },
            { s: "Marta bringt die Kinder zur Schule.", answer: true },
            { s: "Marta bekommt 280 Euro Taschengeld im Monat.", answer: true },
            { s: "In ihrer Freizeit macht Marta nichts Besonderes.", answer: false },
            { s: "Marta gefällt es in München gut.", answer: true }
          ]
        }
      ]
    }
  ],

  // ══════════════════════════════════════════
  //  SCHREIBEN / CLOZE (Fill in the blanks)
  // ══════════════════════════════════════════
  schreiben: [

    // ── A1 Cloze: Basic sentences ──
    {
      id: "a1_cloze_1", level: "A1", section: "Schreiben", part: "Lückentext",
      title: "Lücken füllen – Grundlagen",
      instructions: "Ergänzen Sie die Lücken mit dem passenden Wort.",
      questions: [
        { type: "cloze", sentence: "Ich ___ 25 Jahre alt.", answer: "bin", hint: "sein (1. Person Singular)" },
        { type: "cloze", sentence: "Er ___ aus Deutschland.", answer: "kommt", hint: "kommen (3. Person Singular)" },
        { type: "cloze", sentence: "Wir ___ heute ins Kino.", answer: "gehen", hint: "gehen (1. Person Plural)" },
        { type: "cloze", sentence: "___ heißen Sie?", answer: "Wie", hint: "Fragewort für Namen" },
        { type: "cloze", sentence: "Ich ___ gern Kaffee.", answer: "trinke", hint: "trinken (1. Person Singular)" },
        { type: "cloze", sentence: "Das ___ mein Bruder.", answer: "ist", hint: "sein (3. Person Singular)" },
        { type: "cloze", sentence: "Sie ___ zwei Kinder.", answer: "hat", hint: "haben (3. Person Singular)" },
        { type: "cloze", sentence: "___ wohnst du?", answer: "Wo", hint: "Fragewort für Ort" },
        { type: "cloze", sentence: "Ich ___ Deutsch.", answer: "lerne", hint: "lernen (1. Person Singular)" },
        { type: "cloze", sentence: "Am Montag ___ ich Tennis.", answer: "spiele", hint: "spielen (1. Person Singular)" }
      ]
    },

    // ── A1 Cloze: Articles (Nominativ) ──
    {
      id: "a1_cloze_art", level: "A1", section: "Schreiben", part: "Artikel",
      title: "Der, die oder das?",
      instructions: "Ergänzen Sie den bestimmten Artikel.",
      questions: [
        { type: "cloze", sentence: "___ Buch ist interessant.", answer: "Das", hint: "Neutrum (das Buch)" },
        { type: "cloze", sentence: "___ Frau ist nett.", answer: "Die", hint: "Femininum (die Frau)" },
        { type: "cloze", sentence: "___ Mann arbeitet hier.", answer: "Der", hint: "Maskulinum (der Mann)" },
        { type: "cloze", sentence: "___ Kinder spielen draußen.", answer: "Die", hint: "Plural → immer 'die'" },
        { type: "cloze", sentence: "Wo ist ___ Bahnhof?", answer: "der", hint: "Maskulinum (der Bahnhof)" },
        { type: "cloze", sentence: "___ Schule beginnt um 8 Uhr.", answer: "Die", hint: "Femininum (die Schule)" },
        { type: "cloze", sentence: "Ich kaufe ___ Zeitung.", answer: "die", hint: "Femininum, Akkusativ → 'die' bleibt gleich" },
        { type: "cloze", sentence: "___ Wetter ist heute schön.", answer: "Das", hint: "Neutrum (das Wetter)" },
        { type: "cloze", sentence: "___ Kaffee schmeckt gut.", answer: "Der", hint: "Maskulinum (der Kaffee)" },
        { type: "cloze", sentence: "___ Küche ist sehr modern.", answer: "Die", hint: "Femininum (die Küche)" }
      ]
    },

    // ── A1 Cloze: Possessivpronomen ──
    {
      id: "a1_cloze_poss", level: "A1", section: "Schreiben", part: "Possessivpronomen",
      title: "Mein, dein, sein, ihr…",
      instructions: "Ergänzen Sie das richtige Possessivpronomen.",
      questions: [
        { type: "cloze", sentence: "Das ist ___ Buch. (ich)", answer: "mein", hint: "ich → mein (Neutrum Nominativ)" },
        { type: "cloze", sentence: "Wo ist ___ Tasche? (du)", answer: "deine", hint: "du → dein; Femininum Nominativ → deine" },
        { type: "cloze", sentence: "Er sucht ___ Schlüssel. (er)", answer: "seinen", hint: "er → sein; Maskulinum Akkusativ → seinen" },
        { type: "cloze", sentence: "___ Bruder heißt Markus. (sie – Sg.)", answer: "Ihr", hint: "sie (Singular) → ihr; Maskulinum Nominativ → ihr" },
        { type: "cloze", sentence: "Wir lieben ___ Stadt.", answer: "unsere", hint: "wir → unser; Femininum Nominativ → unsere" },
        { type: "cloze", sentence: "Kennen Sie ___ Lehrerin? (Sie)", answer: "Ihre", hint: "Sie (formell) → Ihr; Femininum Akkusativ → Ihre" },
        { type: "cloze", sentence: "___ Eltern wohnen in Hamburg. (ich)", answer: "Meine", hint: "ich → mein; Plural → meine" },
        { type: "cloze", sentence: "Das ist ___ Auto. (wir)", answer: "unser", hint: "wir → unser; Neutrum Nominativ → unser" }
      ]
    },

    // ── A1 Cloze: Modalverben ──
    {
      id: "a1_cloze_modal", level: "A1", section: "Schreiben", part: "Modalverben",
      title: "Modalverben: können, müssen, wollen, dürfen",
      instructions: "Ergänzen Sie das richtige Modalverb in der richtigen Form.",
      questions: [
        { type: "cloze", sentence: "Ich ___ morgen früh aufstehen. (Pflicht)", answer: "muss", hint: "müssen (1. Person Singular)" },
        { type: "cloze", sentence: "___ du mir bitte helfen?", answer: "Kannst", hint: "können (2. Person Singular, Frage)" },
        { type: "cloze", sentence: "Er ___ nicht rauchen. Hier ist Rauchverbot.", answer: "darf", hint: "dürfen – Verbot (3. Person Singular)" },
        { type: "cloze", sentence: "Wir ___ heute Abend ins Theater gehen.", answer: "wollen", hint: "wollen (1. Person Plural)" },
        { type: "cloze", sentence: "___ ich kurz das Fenster öffnen?", answer: "Darf", hint: "dürfen – Erlaubnis anfragen (1. Person Singular, Frage)" },
        { type: "cloze", sentence: "Die Kinder ___ um 20 Uhr ins Bett gehen.", answer: "müssen", hint: "müssen (Plural)" },
        { type: "cloze", sentence: "Er ___ sehr gut Klavier spielen.", answer: "kann", hint: "können (3. Person Singular)" },
        { type: "cloze", sentence: "Ich ___ heute nicht arbeiten. Ich bin krank.", answer: "kann", hint: "können – Verneinung → ich kann nicht (1. Person Singular)" }
      ]
    },

    // ── A2 Cloze: Verben und Präpositionen ──
    {
      id: "a2_cloze_1", level: "A2", section: "Schreiben", part: "Lückentext",
      title: "Verben und Präpositionen",
      instructions: "Ergänzen Sie die richtige Präposition.",
      questions: [
        { type: "cloze", sentence: "Ich interessiere mich ___ Musik.", answer: "für", hint: "sich interessieren für + Akkusativ" },
        { type: "cloze", sentence: "Wir freuen uns ___ die Ferien.", answer: "auf", hint: "sich freuen auf + Akkusativ (Zukunft)" },
        { type: "cloze", sentence: "Er wartet ___ den Bus.", answer: "auf", hint: "warten auf + Akkusativ" },
        { type: "cloze", sentence: "Sie hat ___ dem Studium angefangen.", answer: "mit", hint: "anfangen mit + Dativ" },
        { type: "cloze", sentence: "Ich denke oft ___ meine Familie.", answer: "an", hint: "denken an + Akkusativ" },
        { type: "cloze", sentence: "Wir fahren ___ dem Zug.", answer: "mit", hint: "mit + Dativ (Transportmittel)" },
        { type: "cloze", sentence: "Das Buch handelt ___ einem Detektiv.", answer: "von", hint: "handeln von + Dativ" },
        { type: "cloze", sentence: "Ich habe Angst ___ Spinnen.", answer: "vor", hint: "Angst haben vor + Dativ" },
        { type: "cloze", sentence: "Sie beschäftigt sich ___ Kunst.", answer: "mit", hint: "sich beschäftigen mit + Dativ" },
        { type: "cloze", sentence: "Ich freue mich ___ das Geschenk.", answer: "über", hint: "sich freuen über + Akkusativ (Gegenwart/Vergangenheit)" }
      ]
    },

    // ── A2 Cloze: Perfekt ──
    {
      id: "a2_cloze_perfekt", level: "A2", section: "Schreiben", part: "Perfekt",
      title: "Perfekt – Partizip II",
      instructions: "Schreiben Sie das Partizip II.",
      questions: [
        { type: "cloze", sentence: "Ich habe gestern ein Buch ___. (lesen)", answer: "gelesen", hint: "stark: lesen → gelesen" },
        { type: "cloze", sentence: "Sie hat einen Kuchen ___. (backen)", answer: "gebacken", hint: "stark: backen → gebacken" },
        { type: "cloze", sentence: "Wir haben Fußball ___. (spielen)", answer: "gespielt", hint: "schwach: spielen → gespielt" },
        { type: "cloze", sentence: "Er hat den Film ___. (sehen)", answer: "gesehen", hint: "stark: sehen → gesehen" },
        { type: "cloze", sentence: "Ich habe die Hausaufgabe ___. (machen)", answer: "gemacht", hint: "schwach: machen → gemacht" },
        { type: "cloze", sentence: "Sie ist nach Berlin ___. (fahren)", answer: "gefahren", hint: "stark, mit 'sein': fahren → gefahren" },
        { type: "cloze", sentence: "Hast du Wasser ___? (trinken)", answer: "getrunken", hint: "stark: trinken → getrunken" },
        { type: "cloze", sentence: "Wir haben lange ___. (warten)", answer: "gewartet", hint: "schwach, Stamm auf -t: warten → gewartet" },
        { type: "cloze", sentence: "Er ist früh ___. (aufstehen)", answer: "aufgestanden", hint: "trennbar + stark: auf·ge·standen" },
        { type: "cloze", sentence: "Ich habe ihm das Buch ___. (geben)", answer: "gegeben", hint: "stark: geben → gegeben" }
      ]
    },

    // ── A2 Cloze: Komparativ & Superlativ ──
    {
      id: "a2_cloze_komp", level: "A2", section: "Schreiben", part: "Komparativ",
      title: "Komparativ und Superlativ",
      instructions: "Ergänzen Sie die richtige Form des Adjektivs.",
      questions: [
        { type: "cloze", sentence: "München ist ___ als Augsburg. (groß)", answer: "größer", hint: "groß → größer (Umlaut!)" },
        { type: "cloze", sentence: "Der ICE ist ___ als der Bus. (schnell)", answer: "schneller", hint: "schnell → schneller" },
        { type: "cloze", sentence: "Das Hotel ist ___ als die Pension. (teuer)", answer: "teurer", hint: "teuer → teurer (kein -e- extra)" },
        { type: "cloze", sentence: "Im Winter sind die Tage ___ als im Sommer. (kurz)", answer: "kürzer", hint: "kurz → kürzer (Umlaut)" },
        { type: "cloze", sentence: "Sie ist die ___ Schülerin in der Klasse. (gut)", answer: "beste", hint: "gut → besser → am besten / beste (Superlativ unregelmäßig)" },
        { type: "cloze", sentence: "Das ist das ___ Buch, das ich je gelesen habe. (interessant)", answer: "interessanteste", hint: "interessant → am interessantesten / interessanteste" },
        { type: "cloze", sentence: "Er läuft ___ als ich. (langsam)", answer: "langsamer", hint: "langsam → langsamer" },
        { type: "cloze", sentence: "Das ist der ___ Weg zum Bahnhof. (kurz)", answer: "kürzeste", hint: "kurz → kürzeste (Superlativ)" }
      ]
    },

    // ── A2 Cloze: Trennbare Verben ──
    {
      id: "a2_cloze_trennbar", level: "A2", section: "Schreiben", part: "Trennbare Verben",
      title: "Trennbare Verben – Präsens und Perfekt",
      instructions: "Ergänzen Sie das trennbare Verb in der richtigen Form.",
      questions: [
        { type: "cloze", sentence: "Der Kurs ___ um 18 Uhr ___. (anfangen – Präsens, er)", answer: "fängt … an", hint: "anfangen → er fängt an" },
        { type: "cloze", sentence: "Ich ___ das Licht ___, wenn ich das Zimmer verlasse. (ausmachen – Präsens)", answer: "mache … aus", hint: "ausmachen → ich mache aus" },
        { type: "cloze", sentence: "Wann ___ du heute Morgen ___? (aufstehen – Perfekt)", answer: "bist … aufgestanden", hint: "aufstehen → bist aufgestanden (mit 'sein')" },
        { type: "cloze", sentence: "Sie ___ ihren Mantel im Büro ___. (anziehen – Perfekt)", answer: "hat … angezogen", hint: "anziehen → hat angezogen" },
        { type: "cloze", sentence: "Er ___ mich gestern nicht ___. (anrufen – Perfekt)", answer: "hat … angerufen", hint: "anrufen → hat angerufen" },
        { type: "cloze", sentence: "Wir ___ die Einladung gern ___. (annehmen – Präsens)", answer: "nehmen … an", hint: "annehmen → wir nehmen an" },
        { type: "cloze", sentence: "Die Veranstaltung ___ um 22 Uhr ___. (aufhören – Präsens, sie)", answer: "hört … auf", hint: "aufhören → sie hört auf" },
        { type: "cloze", sentence: "Ich ___ meinen alten Freund zufällig ___. (treffen – Perfekt)", answer: "habe … getroffen", hint: "treffen → habe getroffen" }
      ]
    },

    // ── A2 Cloze: Präteritum (sein, haben, Modalverben) ──
    {
      id: "a2_cloze_praeteritum", level: "A2", section: "Schreiben", part: "Präteritum",
      title: "Präteritum – sein, haben, Modalverben",
      instructions: "Ergänzen Sie das Verb im Präteritum.",
      questions: [
        { type: "cloze", sentence: "Gestern ___ ich sehr müde.", answer: "war", hint: "sein → ich war" },
        { type: "cloze", sentence: "Wir ___ keine Zeit.", answer: "hatten", hint: "haben → wir hatten" },
        { type: "cloze", sentence: "Er ___ nicht kommen. (können)", answer: "konnte", hint: "können → er konnte" },
        { type: "cloze", sentence: "Sie ___ früh aufstehen. (müssen)", answer: "musste", hint: "müssen → sie musste" },
        { type: "cloze", sentence: "___ du auch dabei? (sein)", answer: "Warst", hint: "sein → du warst" },
        { type: "cloze", sentence: "Die Kinder ___ spielen, aber es regnete. (wollen)", answer: "wollten", hint: "wollen → sie wollten" },
        { type: "cloze", sentence: "Das Konzert ___ wunderschön.", answer: "war", hint: "sein → es war" },
        { type: "cloze", sentence: "Ich ___ leider kein Geld dabei. (haben)", answer: "hatte", hint: "haben → ich hatte" }
      ]
    },

    // ── A2 Cloze: Reflexivverben ──
    {
      id: "a2_cloze_reflexiv", level: "A2", section: "Schreiben", part: "Reflexivverben",
      title: "Reflexivverben",
      instructions: "Ergänzen Sie das Reflexivpronomen.",
      questions: [
        { type: "cloze", sentence: "Ich wasche ___ jeden Morgen.", answer: "mich", hint: "ich → mich (Akkusativ)" },
        { type: "cloze", sentence: "Er freut ___ auf das Wochenende.", answer: "sich", hint: "er → sich" },
        { type: "cloze", sentence: "Wir treffen ___ um 15 Uhr am Bahnhof.", answer: "uns", hint: "wir → uns" },
        { type: "cloze", sentence: "Hast du ___ die Hände gewaschen?", answer: "dir", hint: "du → dir (Dativ – Hände als Objekt)" },
        { type: "cloze", sentence: "Die Kinder ziehen ___ alleine an.", answer: "sich", hint: "Plural 3. Person → sich" },
        { type: "cloze", sentence: "Ich erinnere ___ nicht an seinen Namen.", answer: "mich", hint: "ich → mich" },
        { type: "cloze", sentence: "Kannst du ___ das vorstellen?", answer: "dir", hint: "du → dir (Dativ)" },
        { type: "cloze", sentence: "Sie hat ___ für den Job beworben.", answer: "sich", hint: "sie (Sg.) → sich" }
      ]
    }
  ],

  // ══════════════════════════════════════════
  //  STRUKTUREN (Grammar / Sentence structure)
  // ══════════════════════════════════════════
  strukturen: [

    // ── A1 Wortstellung ──
    {
      id: "a1_struktur_1", level: "A1", section: "Strukturen", part: "Wortstellung",
      title: "Satzstellung – Wörter ordnen",
      instructions: "Bringen Sie die Wörter in die richtige Reihenfolge.",
      questions: [
        { type: "ordering", words: ["Ich", "heiße", "Maria", "."], answer: "Ich heiße Maria." },
        { type: "ordering", words: ["Wir", "gehen", "heute", "ins", "Kino", "."], answer: "Wir gehen heute ins Kino." },
        { type: "ordering", words: ["Wo", "wohnen", "Sie", "?"], answer: "Wo wohnen Sie?" },
        { type: "ordering", words: ["Am", "Montag", "spiele", "ich", "Tennis", "."], answer: "Am Montag spiele ich Tennis." },
        { type: "ordering", words: ["Das", "Buch", "ist", "sehr", "interessant", "."], answer: "Das Buch ist sehr interessant." },
        { type: "ordering", words: ["Morgen", "fahre", "ich", "nach", "Berlin", "."], answer: "Morgen fahre ich nach Berlin." },
        { type: "ordering", words: ["Warum", "lernst", "du", "Deutsch", "?"], answer: "Warum lernst du Deutsch?" },
        { type: "ordering", words: ["Das", "Kind", "spielt", "jeden", "Tag", "im", "Park", "."], answer: "Das Kind spielt jeden Tag im Park." }
      ]
    },

    // ── A1 Negation ──
    {
      id: "a1_negation", level: "A1", section: "Strukturen", part: "Negation",
      title: "Nicht oder kein?",
      instructions: "Wählen Sie: nicht oder kein / keine / keinen?",
      questions: [
        { type: "mcq", question: "Ich trinke ___ Kaffee.", options: ["nicht", "keinen"], answer: 1 },
        { type: "mcq", question: "Er kommt heute ___.", options: ["nicht", "keinen"], answer: 0 },
        { type: "mcq", question: "Das ist ___ gut.", options: ["nicht", "kein"], answer: 0 },
        { type: "mcq", question: "Wir haben ___ Auto.", options: ["nicht", "kein"], answer: 1 },
        { type: "mcq", question: "Ich spreche ___ Französisch.", options: ["nicht", "kein"], answer: 0 },
        { type: "mcq", question: "Sie hat ___ Geschwister.", options: ["nicht", "keine"], answer: 1 },
        { type: "mcq", question: "Ich habe ___ Hunger.", options: ["nicht", "keinen"], answer: 1 },
        { type: "mcq", question: "Das Wetter ist heute ___ schön.", options: ["nicht", "kein"], answer: 0 }
      ]
    },

    // ── A1 Fragewörter ──
    {
      id: "a1_fragewort", level: "A1", section: "Strukturen", part: "Fragewörter",
      title: "Das richtige Fragewort",
      instructions: "Welches Fragewort passt?",
      questions: [
        { type: "mcq", question: "___ heißen Sie?", options: ["Wo", "Wie", "Wann", "Warum"], answer: 1 },
        { type: "mcq", question: "___ wohnst du?", options: ["Wer", "Was", "Wo", "Wie"], answer: 2 },
        { type: "mcq", question: "___ kommt der Bus?", options: ["Wann", "Warum", "Wie", "Wo"], answer: 0 },
        { type: "mcq", question: "___ ist das? – Das ist mein Bruder.", options: ["Was", "Wo", "Wer", "Wie"], answer: 2 },
        { type: "mcq", question: "___ kostet das Buch?", options: ["Wie viel", "Wann", "Wer", "Warum"], answer: 0 },
        { type: "mcq", question: "___ gehst du nicht zur Schule?", options: ["Was", "Wann", "Warum", "Wo"], answer: 2 },
        { type: "mcq", question: "___ ist das Wetter?", options: ["Wer", "Wie", "Wo", "Wann"], answer: 1 },
        { type: "mcq", question: "___ machst du am Wochenende?", options: ["Wer", "Wie", "Wann", "Was"], answer: 3 }
      ]
    },

    // ── A2 Konjunktionen ──
    {
      id: "a2_konj", level: "A2", section: "Strukturen", part: "Konjunktionen",
      title: "Weil, dass, wenn, obwohl, deshalb",
      instructions: "Wählen Sie die richtige Konjunktion.",
      questions: [
        { type: "mcq", question: "Ich bleibe zu Hause, ___ ich krank bin.", options: ["dass", "weil", "wenn", "obwohl"], answer: 1 },
        { type: "mcq", question: "Ich glaube, ___ er morgen kommt.", options: ["weil", "wenn", "dass", "obwohl"], answer: 2 },
        { type: "mcq", question: "___ es regnet, nehme ich einen Regenschirm.", options: ["Dass", "Weil", "Obwohl", "Wenn"], answer: 3 },
        { type: "mcq", question: "Er geht spazieren, ___ es kalt ist.", options: ["weil", "dass", "obwohl", "wenn"], answer: 2 },
        { type: "mcq", question: "Ich weiß, ___ du Deutsch lernst.", options: ["obwohl", "wenn", "weil", "dass"], answer: 3 },
        { type: "mcq", question: "___ ich Zeit habe, lese ich gern.", options: ["Dass", "Obwohl", "Wenn", "Weil"], answer: 2 },
        { type: "mcq", question: "Sie ist müde, ___ sie geht trotzdem zur Arbeit.", options: ["deshalb", "weil", "aber", "obwohl"], answer: 3 },
        { type: "mcq", question: "Er hat das Examen bestanden, ___ feiert er heute.", options: ["obwohl", "weil", "deshalb", "wenn"], answer: 2 }
      ]
    },

    // ── A2 Kasus & Artikel (Dativ / Akkusativ) ──
    {
      id: "a2_kasus", level: "A2", section: "Strukturen", part: "Kasus",
      title: "Akkusativ oder Dativ?",
      instructions: "Ergänzen Sie den Artikel im richtigen Fall.",
      questions: [
        { type: "cloze", sentence: "Ich gebe ___ Mann das Buch. (der)", answer: "dem", hint: "Dativ maskulin → dem" },
        { type: "cloze", sentence: "Ich sehe ___ Frau. (die)", answer: "die", hint: "Akkusativ feminin → die (bleibt gleich)" },
        { type: "cloze", sentence: "Er hilft ___ Kind. (das)", answer: "dem", hint: "Dativ neutrum → dem" },
        { type: "cloze", sentence: "Wir kaufen ___ Tisch. (der)", answer: "den", hint: "Akkusativ maskulin → den" },
        { type: "cloze", sentence: "Sie gibt ___ Kindern Schokolade. (die – Plural)", answer: "den", hint: "Dativ Plural → den" },
        { type: "cloze", sentence: "Ich schreibe ___ Freundin einen Brief. (die)", answer: "der", hint: "Dativ feminin → der" },
        { type: "cloze", sentence: "Ich zeige ___ Touristen die Stadt. (der – Plural)", answer: "den", hint: "Dativ Plural → den" },
        { type: "cloze", sentence: "Das Geschenk ist für ___ Mutter. (die)", answer: "die", hint: "Akkusativ feminin → die" }
      ]
    },

    // ── A2 Präpositionen mit Dativ ──
    {
      id: "a2_prep_dativ", level: "A2", section: "Strukturen", part: "Präpositionen",
      title: "Präpositionen mit Dativ",
      instructions: "Ergänzen Sie die Präposition und den Artikel.",
      questions: [
        { type: "mcq", question: "Ich fahre ___ dem Bus zur Schule.", options: ["mit", "nach", "von", "bei"], answer: 0 },
        { type: "mcq", question: "Er wohnt ___ seiner Schwester.", options: ["mit", "von", "bei", "aus"], answer: 2 },
        { type: "mcq", question: "Wir kommen ___ der Schweiz.", options: ["nach", "aus", "von", "bei"], answer: 1 },
        { type: "mcq", question: "Sie geht ___ dem Unterricht nach Hause.", options: ["vor", "nach", "seit", "bei"], answer: 1 },
        { type: "mcq", question: "Ich lerne schon ___ drei Jahren Deutsch.", options: ["nach", "vor", "seit", "aus"], answer: 2 },
        { type: "mcq", question: "Das Café ist ___ der Post (gegenüber).", options: ["mit", "gegenüber", "seit", "aus"], answer: 1 },
        { type: "mcq", question: "Er telefoniert ___ seiner Mutter.", options: ["mit", "von", "bei", "zu"], answer: 0 },
        { type: "mcq", question: "Das Paket ist ___ meiner Nachbarin.", options: ["nach", "von", "bei", "für"], answer: 1 }
      ]
    },

    // ── A2 Wechselpräpositionen ──
    {
      id: "a2_wechselprep", level: "A2", section: "Strukturen", part: "Wechselpräpositionen",
      title: "Wo oder Wohin? – in, an, auf, unter …",
      instructions: "Dativ (Wo?) oder Akkusativ (Wohin?)? Wählen Sie die richtige Form.",
      questions: [
        { type: "mcq", question: "Das Buch liegt ___ dem Tisch. (wo?)", options: ["auf", "an", "in", "unter"], answer: 0 },
        { type: "mcq", question: "Ich lege das Buch ___ den Tisch. (wohin?)", options: ["auf", "an", "an den", "unter"], answer: 0 },
        { type: "mcq", question: "Er hängt das Bild ___ die Wand. (wohin?)", options: ["an der", "an die", "in die", "auf die"], answer: 1 },
        { type: "mcq", question: "Das Bild hängt ___ der Wand. (wo?)", options: ["an der", "an die", "auf der", "in der"], answer: 0 },
        { type: "mcq", question: "Die Katze sitzt ___ dem Sofa. (wo?)", options: ["unter", "auf", "in", "an"], answer: 1 },
        { type: "mcq", question: "Das Kind läuft ___ den Park. (wohin?)", options: ["in dem", "in den", "auf den", "an dem"], answer: 1 },
        { type: "mcq", question: "Sie stellt die Vase ___ den Tisch. (wohin?)", options: ["auf", "auf dem", "an den", "in den"], answer: 0 },
        { type: "mcq", question: "Die Schuhe stehen ___ der Tür. (wo?)", options: ["vor", "vor der", "hinter der", "an der"], answer: 1 }
      ]
    },

    // ── A2 Relativsätze ──
    {
      id: "a2_relativ", level: "A2", section: "Strukturen", part: "Relativsätze",
      title: "Relativpronomen – der, die, das",
      instructions: "Wählen Sie das richtige Relativpronomen.",
      questions: [
        { type: "mcq", question: "Das ist der Mann, ___ ich kenne.", options: ["die", "der", "das", "den"], answer: 3 },
        { type: "mcq", question: "Das ist die Frau, ___ hier arbeitet.", options: ["der", "die", "das", "den"], answer: 1 },
        { type: "mcq", question: "Das ist das Kind, ___ ich gestern gesehen habe.", options: ["das", "die", "der", "dem"], answer: 0 },
        { type: "mcq", question: "Das ist die Stadt, in ___ ich geboren bin.", options: ["dem", "der", "das", "die"], answer: 1 },
        { type: "mcq", question: "Das ist der Film, ___ mir am besten gefällt.", options: ["den", "der", "dem", "das"], answer: 1 },
        { type: "mcq", question: "Das sind die Leute, ___ immer laut sind.", options: ["der", "dem", "die", "das"], answer: 2 },
        { type: "mcq", question: "Das ist der Kollege, ___ ich das Buch gegeben habe.", options: ["den", "dem", "der", "das"], answer: 1 },
        { type: "mcq", question: "Das ist die Wohnung, ___ ich mieten möchte.", options: ["die", "der", "das", "dem"], answer: 0 }
      ]
    },

    // ── A2 Infinitiv mit zu ──
    {
      id: "a2_infinitiv_zu", level: "A2", section: "Strukturen", part: "Infinitiv mit zu",
      title: "Infinitiv mit 'zu'",
      instructions: "Ergänzen Sie: Infinitiv mit 'zu' oder ohne 'zu'?",
      questions: [
        { type: "mcq", question: "Ich versuche, früher ___ schlafen.", options: ["zu gehen", "gehen", "gegangen"], answer: 0 },
        { type: "mcq", question: "Sie muss heute ___ arbeiten.", options: ["zu gehen", "arbeiten", "zu arbeiten"], answer: 1 },
        { type: "mcq", question: "Ich hoffe, dich bald ___ sehen.", options: ["sehen", "zu sehen", "gesehen"], answer: 1 },
        { type: "mcq", question: "Er kann gut ___ kochen.", options: ["zu kochen", "kochen", "gekocht"], answer: 1 },
        { type: "mcq", question: "Wir haben keine Zeit, ___ warten.", options: ["warten", "zu warten", "gewartet"], answer: 1 },
        { type: "mcq", question: "Es ist wichtig, viel Wasser ___ trinken.", options: ["trinken", "getrunken", "zu trinken"], answer: 2 },
        { type: "mcq", question: "Ich lasse das Kind ___ spielen.", options: ["zu spielen", "spielen", "gespielt"], answer: 1 },
        { type: "mcq", question: "Sie fängt an, Gitarre ___ lernen.", options: ["lernen", "zu lernen", "gelernt"], answer: 1 }
      ]
    },

    // ── A2 Passiv ──
    {
      id: "a2_passiv", level: "A2", section: "Strukturen", part: "Passiv",
      title: "Passiv – Präsens",
      instructions: "Wählen Sie die richtige Passivform.",
      questions: [
        { type: "mcq", question: "Das Brot ___ täglich frisch ___.", options: ["wird … gebacken", "ist … gebacken", "hat … gebacken"], answer: 0 },
        { type: "mcq", question: "Der Brief ___ gestern ___.", options: ["wird … geschrieben", "wurde … geschrieben", "war … geschrieben"], answer: 1 },
        { type: "mcq", question: "Die Fenster ___ jede Woche ___.", options: ["werden … geputzt", "sind … geputzt", "haben … geputzt"], answer: 0 },
        { type: "mcq", question: "Das Auto ___ in der Werkstatt ___.", options: ["wurde … repariert", "wird … repariert", "ist … repariert"], answer: 1 },
        { type: "mcq", question: "Deutsch ___ in vielen Ländern ___.", options: ["wird … gesprochen", "ist … gesprochen", "hat … gesprochen"], answer: 0 },
        { type: "mcq", question: "Die Hausaufgaben ___ noch nicht ___.", options: ["wurden … gemacht", "sind … gemacht", "werden … gemacht"], answer: 0 }
      ]
    }
  ],

  // ══════════════════════════════════════════
  //  WORTSCHATZ (Vocabulary in context)
  // ══════════════════════════════════════════
  wortschatz: [

    // ── A1 Situational Wortschatz ──
    {
      id: "a1_wort_1", level: "A1", section: "Wortschatz", part: "Alltagssituationen",
      title: "Im Restaurant / Beim Einkaufen",
      instructions: "Wählen Sie die passende Antwort für die Situation.",
      questions: [
        {
          type: "situational",
          situation: 'Sie sind im Restaurant. Der Kellner fragt: „Was möchten Sie trinken?"',
          options: ["Ich nehme die U-Bahn.", "Ein Wasser, bitte.", "Es ist 14 Uhr.", "Ich komme aus Spanien."], answer: 1
        },
        {
          type: "situational",
          situation: 'An der Kasse im Supermarkt sagt die Kassiererin: „Das macht 5,60 €."',
          options: ["Guten Morgen!", "Können Sie das buchstabieren?", "Hier, bitte. Stimmt so.", "Wo ist der Bahnhof?"], answer: 2
        },
        {
          type: "situational",
          situation: 'Sie treffen einen Freund. Er fragt: „Wie geht es dir?"',
          options: ["Ich bin 30 Jahre alt.", "Gut, danke! Und dir?", "Ich wohne in Berlin.", "Das kostet 3 Euro."], answer: 1
        },
        {
          type: "situational",
          situation: 'Sie sind beim Arzt. Die Ärztin fragt: „Was fehlt Ihnen?"',
          options: ["Ich habe Kopfschmerzen.", "Ich nehme den Bus.", "Das Wetter ist schön.", "Ich komme um 8 Uhr."], answer: 0
        },
        {
          type: "situational",
          situation: 'Am Telefon: „Guten Tag, kann ich bitte mit Herrn Weber sprechen?"',
          options: ["Tschüss!", "Einen Moment, bitte. Ich verbinde.", "Ich bin müde.", "Ja, das schmeckt gut."], answer: 1
        }
      ]
    },

    // ── A1 Gegenteile ──
    {
      id: "a1_gegenteil", level: "A1", section: "Wortschatz", part: "Gegenteile",
      title: "Was ist das Gegenteil?",
      instructions: "Wählen Sie das Gegenteil.",
      questions: [
        { type: "mcq", question: "groß ↔ ___", options: ["klein", "schnell", "alt", "teuer"], answer: 0 },
        { type: "mcq", question: "heiß ↔ ___", options: ["warm", "kalt", "trocken", "nass"], answer: 1 },
        { type: "mcq", question: "schnell ↔ ___", options: ["leicht", "langsam", "klein", "kurz"], answer: 1 },
        { type: "mcq", question: "teuer ↔ ___", options: ["billig", "schön", "groß", "lang"], answer: 0 },
        { type: "mcq", question: "alt ↔ ___", options: ["groß", "laut", "neu / jung", "dunkel"], answer: 2 },
        { type: "mcq", question: "laut ↔ ___", options: ["hell", "schwer", "leise", "kurz"], answer: 2 },
        { type: "mcq", question: "richtig ↔ ___", options: ["schwer", "falsch", "schlecht", "leer"], answer: 1 },
        { type: "mcq", question: "offen ↔ ___", options: ["geschlossen", "kaputt", "leer", "voll"], answer: 0 },
        { type: "mcq", question: "sauber ↔ ___", options: ["kalt", "schmutzig", "dunkel", "leer"], answer: 1 },
        { type: "mcq", question: "früh ↔ ___", options: ["spät", "langsam", "schwer", "alt"], answer: 0 }
      ]
    },

    // ── A1 Körper und Gesundheit ──
    {
      id: "a1_wort_2", level: "A1", section: "Wortschatz", part: "Körper und Gesundheit",
      title: "Beim Arzt",
      instructions: "Welches Wort passt?",
      questions: [
        { type: "cloze", sentence: "Ich habe schlimme ___ im Kopf. Ich brauche eine Tablette.", answer: "Schmerzen", hint: "Plural von 'der Schmerz'" },
        { type: "cloze", sentence: "Der Zahnarzt kontrolliert meine ___.", answer: "Zähne", hint: "Plural von 'der Zahn'" },
        { type: "cloze", sentence: "Ich kann kaum sprechen, ich habe ___.", answer: "Halsschmerzen", hint: "Hals + Schmerzen" },
        { type: "cloze", sentence: "Bitte öffnen Sie den ___ und sagen Sie 'Ahhh'.", answer: "Mund", hint: "dort sind die Zähne" },
        { type: "cloze", sentence: "Mein rechter ___ tut weh. Ich kann nicht mehr laufen.", answer: "Fuß", hint: "Körperteil zum Gehen" },
        { type: "cloze", sentence: "Ich habe ___ – ich muss oft auf die Toilette.", answer: "Durchfall", hint: "Magen-Darm-Problem" },
        { type: "cloze", sentence: "Das Kind hat ___ – es ist 38,5 Grad warm.", answer: "Fieber", hint: "Körpertemperatur erhöht" },
        { type: "cloze", sentence: "Die ___ sagt mir, ich soll mehr schlafen. (Ärztin)", answer: "Ärztin", hint: "weibliche Form von 'der Arzt'" }
      ]
    },

    // ── A1 Tagesablauf ──
    {
      id: "a1_wort_tagesablauf", level: "A1", section: "Wortschatz", part: "Tagesablauf",
      title: "Der Tagesablauf",
      instructions: "Ordnen Sie den Tagesablauf. Was macht Frau Koch wann?",
      questions: [
        {
          type: "mcq",
          question: "Was macht man morgens als Erstes?",
          options: ["Zu Bett gehen", "Aufstehen und duschen", "Mittagessen kochen", "Fernsehen"],
          answer: 1
        },
        {
          type: "situational",
          situation: 'Frau Koch frühstückt um 7 Uhr. Sie isst ___.',
          options: ["Suppe und Fleisch", "Brot, Käse und Kaffee", "Pizza", "Kuchen und Wein"],
          answer: 1
        },
        {
          type: "mcq",
          question: "Frau Koch fährt mit dem Bus zur Arbeit. Was kauft sie am Kiosk?",
          options: ["Ein Buch", "Eine Zeitung", "Schuhe", "Einen Regenschirm"],
          answer: 1
        },
        {
          type: "situational",
          situation: 'Es ist 12 Uhr. Frau Koch hat ___.',
          options: ["Frühstück", "Mittagspause", "Feierabend", "Urlaub"],
          answer: 1
        },
        {
          type: "mcq",
          question: "Frau Koch geht um 22 Uhr ins Bett. Vorher ___.",
          options: ["frühstückt sie", "geht sie zur Arbeit", "putzt sie die Zähne", "fährt sie Fahrrad"],
          answer: 2
        }
      ]
    },

    // ── A2 Welches Wort passt nicht? ──
    {
      id: "a2_wort_intruder", level: "A2", section: "Wortschatz", part: "Wort-Ausschluss",
      title: "Welches Wort passt nicht?",
      instructions: "Ein Wort gehört nicht in die Reihe. Welches?",
      questions: [
        { type: "mcq", question: "Apfel, Birne, Stuhl, Banane", options: ["Apfel", "Birne", "Stuhl", "Banane"], answer: 2 },
        { type: "mcq", question: "Montag, Dienstag, Januar, Mittwoch", options: ["Montag", "Dienstag", "Januar", "Mittwoch"], answer: 2 },
        { type: "mcq", question: "Arzt, Lehrer, Tisch, Kellner", options: ["Arzt", "Lehrer", "Tisch", "Kellner"], answer: 2 },
        { type: "mcq", question: "rot, blau, schnell, grün", options: ["rot", "blau", "schnell", "grün"], answer: 2 },
        { type: "mcq", question: "Messer, Gabel, Löffel, Schuhe", options: ["Messer", "Gabel", "Löffel", "Schuhe"], answer: 3 },
        { type: "mcq", question: "Küche, Bad, Schlafzimmer, Auto", options: ["Küche", "Bad", "Schlafzimmer", "Auto"], answer: 3 },
        { type: "mcq", question: "Bus, Zug, Fahrrad, Fenster", options: ["Bus", "Zug", "Fahrrad", "Fenster"], answer: 3 },
        { type: "mcq", question: "Sommer, Herbst, Frühling, Freitag", options: ["Sommer", "Herbst", "Frühling", "Freitag"], answer: 3 },
        { type: "mcq", question: "Bäcker, Metzger, Friseur, Hammer", options: ["Bäcker", "Metzger", "Friseur", "Hammer"], answer: 3 },
        { type: "mcq", question: "Kopf, Arm, Bein, Stuhl", options: ["Kopf", "Arm", "Bein", "Stuhl"], answer: 3 }
      ]
    },

    // ── A2 Berufe erkennen ──
    {
      id: "a2_wort_2", level: "A2", section: "Wortschatz", part: "Berufe und Arbeit",
      title: "Berufe erkennen",
      instructions: "Welcher Beruf ist das?",
      questions: [
        {
          type: "situational",
          situation: "Ich arbeite in einem Restaurant und bringe das Essen zu den Gästen.",
          options: ["Der Kellner", "Der Koch", "Der Arzt", "Der Bäcker"], answer: 0
        },
        {
          type: "situational",
          situation: "Ich schneide und wasche Haare.",
          options: ["Die Verkäuferin", "Die Friseurin", "Die Lehrerin", "Die Sekretärin"], answer: 1
        },
        {
          type: "situational",
          situation: "Ich repariere Autos in einer Werkstatt.",
          options: ["Der Mechaniker", "Der Pilot", "Der Busfahrer", "Der Tischler"], answer: 0
        },
        {
          type: "situational",
          situation: "Ich helfe kranken Menschen im Krankenhaus.",
          options: ["Die Krankenpflegerin", "Die Bäckerin", "Die Pilotin", "Die Chefin"], answer: 0
        },
        {
          type: "situational",
          situation: "Ich baue Möbel und arbeite mit Holz.",
          options: ["Der Tischler", "Der Pilot", "Der Programmierer", "Der Polizist"], answer: 0
        },
        {
          type: "situational",
          situation: "Ich unterrichte Kinder in der Schule.",
          options: ["Die Ärztin", "Die Lehrerin", "Die Architektin", "Die Köchin"], answer: 1
        },
        {
          type: "situational",
          situation: "Ich schreibe Artikel für eine Zeitung.",
          options: ["Die Lehrerin", "Die Journalistin", "Die Verkäuferin", "Die Ingenieurin"], answer: 1
        },
        {
          type: "situational",
          situation: "Ich designe Gebäude und Häuser.",
          options: ["Der Tischler", "Der Elektriker", "Der Architekt", "Der Maler"], answer: 2
        }
      ]
    },

    // ── A2 Wortschatz: Wohnung ──
    {
      id: "a2_wort_wohnung", level: "A2", section: "Wortschatz", part: "Wohnen",
      title: "Wohnungsanzeigen und Wohnen",
      instructions: "Wählen Sie das passende Wort.",
      questions: [
        {
          type: "mcq",
          question: "Die Wohnung kostet 750 Euro ___ Monat.",
          options: ["pro", "vor", "nach", "seit"], answer: 0
        },
        {
          type: "mcq",
          question: "Die Wohnung liegt im zweiten ___.",
          options: ["Haus", "Stockwerk", "Zimmer", "Keller"], answer: 1
        },
        {
          type: "mcq",
          question: "___ zahlt man monatlich an den Vermieter.",
          options: ["Das Gehalt", "Die Miete", "Das Ticket", "Der Preis"], answer: 1
        },
        {
          type: "mcq",
          question: "Ich suche eine Wohnung. Ich lese die ___ in der Zeitung.",
          options: ["Berichte", "Witze", "Anzeigen", "Rechnungen"], answer: 2
        },
        {
          type: "mcq",
          question: "In der Küche koche ich, im ___ schlafe ich.",
          options: ["Schlafzimmer", "Badezimmer", "Flur", "Keller"], answer: 0
        },
        {
          type: "mcq",
          question: "Ich habe die Wohnung ___ – sie gehört mir jetzt.",
          options: ["gemietet", "gekauft", "renoviert", "verlassen"], answer: 1
        },
        {
          type: "mcq",
          question: "Die Wohnung hat eine ___ – wir können auf dem Balkon sitzen.",
          options: ["Terrasse", "Klingel", "Heizung", "Treppe"], answer: 0
        },
        {
          type: "mcq",
          question: "Der ___ öffnet die Wohnungstür.",
          options: ["Schlüssel", "Stuhl", "Tisch", "Teppich"], answer: 0
        }
      ]
    },

    // ── A2 Wortschatz: Reisen und Verkehr ──
    {
      id: "a2_wort_reisen", level: "A2", section: "Wortschatz", part: "Reisen und Verkehr",
      title: "Unterwegs – Reisen und Transport",
      instructions: "Wählen Sie das richtige Wort.",
      questions: [
        {
          type: "mcq",
          question: "Am Bahnhof kaufe ich eine ___.",
          options: ["Speisekarte", "Fahrkarte", "Postkarte", "Geburtstagskarte"], answer: 1
        },
        {
          type: "mcq",
          question: "Der Zug hat 15 Minuten ___.",
          options: ["Urlaub", "Verspätung", "Pause", "Ferien"], answer: 1
        },
        {
          type: "mcq",
          question: "Am Flughafen muss ich durch die ___.",
          options: ["Küche", "Bibliothek", "Sicherheitskontrolle", "Arztpraxis"], answer: 2
        },
        {
          type: "mcq",
          question: "Ich habe ein ___ im Hotel gebucht.",
          options: ["Zimmer", "Büro", "Stockwerk", "Fenster"], answer: 0
        },
        {
          type: "mcq",
          question: "Für die Reise brauche ich meinen ___.",
          options: ["Schlüssel", "Reisepass", "Führerschein", "Personalausweis"], answer: 1
        },
        {
          type: "mcq",
          question: "Das Flugzeug ___ um 14:35 Uhr ab.",
          options: ["geht", "fährt", "fliegt", "reist"], answer: 2
        },
        {
          type: "mcq",
          question: "Am Strand ist es ___ und warm.",
          options: ["neblig", "sonnig", "kalt", "windig"], answer: 1
        },
        {
          type: "mcq",
          question: "Ich zahle das Hotelzimmer mit meiner ___.",
          options: ["Kreditkarte", "Fahrkarte", "Bibliothekskarte", "Postkarte"], answer: 0
        }
      ]
    },

    // ── A2 Wortschatz: Einkaufen & Geld ──
    {
      id: "a2_wort_einkaufen", level: "A2", section: "Wortschatz", part: "Einkaufen und Geld",
      title: "Beim Einkaufen",
      instructions: "Wählen Sie das richtige Wort.",
      questions: [
        {
          type: "situational",
          situation: 'Sie sind im Geschäft. Das T-Shirt gefällt Ihnen, aber Sie sind unsicher. Sie sagen:',
          options: ["Das kaufe ich nicht!", "Kann ich das anprobieren?", "Haben Sie das in einer anderen Farbe?", "Beide Antworten b und c sind möglich."], answer: 3
        },
        {
          type: "situational",
          situation: 'Sie möchten etwas zurückgeben. Sie gehen zur Kasse und sagen:',
          options: ["Ich möchte das umtauschen.", "Ich kaufe noch mehr.", "Das ist zu billig.", "Ich bezahle bar."], answer: 0
        },
        {
          type: "mcq",
          question: "Das T-Shirt hat einen ___ von 20 €.",
          options: ["Preis", "Rabatt", "Quittung", "Angebot"], answer: 0
        },
        {
          type: "mcq",
          question: "Im Ausverkauf gibt es 30% ___.",
          options: ["Preis", "Rabatt", "Quittung", "Rechnung"], answer: 1
        },
        {
          type: "mcq",
          question: "Bitte geben Sie mir eine ___ für die Buchhaltung.",
          options: ["Quittung", "Speisekarte", "Fahrkarte", "Einladung"], answer: 0
        },
        {
          type: "mcq",
          question: "Ich habe kein Bargeld. Kann ich mit ___ zahlen?",
          options: ["Karte", "Scheck", "Buchstaben", "Münzen"], answer: 0
        }
      ]
    },

    // ── A2 Wortschatz: Kommunikation am Telefon ──
    {
      id: "a2_wort_telefon", level: "A2", section: "Wortschatz", part: "Telefon und Kommunikation",
      title: "Am Telefon",
      instructions: "Was sagen Sie? Wählen Sie die passende Antwort.",
      questions: [
        {
          type: "situational",
          situation: 'Sie rufen ein Büro an. Es meldet sich niemand. Sie hinterlassen eine Nachricht:',
          options: ["Hallo, ich bin's!", "Guten Tag, mein Name ist Müller. Bitte rufen Sie mich zurück. Meine Nummer ist 0176-12345.", "Ich komme morgen vorbei.", "Auf Wiedersehen!"], answer: 1
        },
        {
          type: "situational",
          situation: 'Sie möchten einen Termin beim Arzt vereinbaren. Sie rufen an und sagen:',
          options: ["Ich bin krank.", "Ich brauche einen Termin für nächste Woche, wenn möglich am Dienstag.", "Ich nehme keine Tabletten.", "Auf Wiederhören."], answer: 1
        },
        {
          type: "mcq",
          question: "Am Ende eines Telefongesprächs sagt man:",
          options: ["Guten Morgen!", "Auf Wiederhören!", "Hallo!", "Bitte!"], answer: 1
        },
        {
          type: "mcq",
          question: "Man versteht jemanden nicht. Man fragt: 'Können Sie das bitte ___?'",
          options: ["wiederholen", "vergessen", "aufschreiben", "fragen"], answer: 0
        },
        {
          type: "mcq",
          question: "Der Chef ist nicht da. Die Sekretärin sagt: 'Er ist gerade nicht erreichbar. Soll ich ihm etwas ___?'",
          options: ["sagen", "fragen", "schreiben", "anrufen"], answer: 0
        }
      ]
    },

    // ── A1 Wochentage und Monate ──
    {
      id: "a1_wort_zeit", level: "A1", section: "Wortschatz", part: "Datum und Uhrzeit",
      title: "Wochentage, Monate, Uhrzeit",
      instructions: "Wählen Sie die richtige Antwort.",
      questions: [
        {
          type: "mcq",
          question: "Welcher Tag kommt nach Mittwoch?",
          options: ["Dienstag", "Donnerstag", "Freitag", "Montag"], answer: 1
        },
        {
          type: "mcq",
          question: "Welcher Monat kommt nach Juli?",
          options: ["Juni", "September", "August", "Oktober"], answer: 2
        },
        {
          type: "mcq",
          question: "Es ist 9:30 Uhr. Wie sagt man das?",
          options: ["Es ist halb zehn.", "Es ist neun Uhr dreißig.", "Beide Antworten sind richtig.", "Es ist zehn Uhr."], answer: 2
        },
        {
          type: "mcq",
          question: "Welcher ist der letzte Monat des Jahres?",
          options: ["November", "Oktober", "Dezember", "September"], answer: 2
        },
        {
          type: "mcq",
          question: "Der erste Tag der Woche ist (in Deutschland):",
          options: ["Sonntag", "Samstag", "Montag", "Dienstag"], answer: 2
        },
        {
          type: "mcq",
          question: "Es ist Viertel vor acht. Das ist:",
          options: ["07:15 Uhr", "07:45 Uhr", "08:15 Uhr", "08:45 Uhr"], answer: 1
        },
        {
          type: "mcq",
          question: "'Am ___ fahre ich in den Urlaub.' – Welches Wort passt?",
          options: ["nächsten Samstag", "nächste Samstag", "nächste Samstags", "nächster Samstag"], answer: 0
        },
        {
          type: "mcq",
          question: "Welcher Monat hat nur 28 oder 29 Tage?",
          options: ["Januar", "Februar", "April", "Juni"], answer: 1
        }
      ]
    },

    // ── A2 Wortschatz: Gefühle und Meinungen ──
    {
      id: "a2_wort_gefuehle", level: "A2", section: "Wortschatz", part: "Gefühle und Meinungen",
      title: "Gefühle ausdrücken und Meinungen sagen",
      instructions: "Wählen Sie den passenden Ausdruck.",
      questions: [
        {
          type: "situational",
          situation: 'Ihr Freund erzählt Ihnen etwas sehr Trauriges. Sie antworten:',
          options: ["Das freut mich!", "Das tut mir leid.", "Herzlichen Glückwunsch!", "Wie schön!"], answer: 1
        },
        {
          type: "situational",
          situation: 'Sie haben eine tolle Nachricht bekommen. Sie sagen:',
          options: ["Ich bin total begeistert!", "Das ist furchtbar.", "Das stimmt nicht.", "Ich bin müde."], answer: 0
        },
        {
          type: "mcq",
          question: "Wie sagt man, dass man einer Meinung ist?",
          options: ["Das stimmt nicht.", "Ich bin anderer Meinung.", "Da haben Sie recht.", "Das gefällt mir nicht."], answer: 2
        },
        {
          type: "mcq",
          question: "Wie sagt man, dass man nicht einverstanden ist?",
          options: ["Genau!", "Da stimme ich zu.", "Da bin ich anderer Meinung.", "Das finde ich auch."], answer: 2
        },
        {
          type: "mcq",
          question: "Sie finden einen Film sehr gut. Sie sagen:",
          options: ["Der Film war langweilig.", "Der Film hat mir sehr gut gefallen.", "Der Film war zu lang.", "Ich mag diesen Film nicht."], answer: 1
        },
        {
          type: "situational",
          situation: 'Jemand fragt Sie: „Wie finden Sie das neue Restaurant?" Sie antworten:',
          options: ["Es ist 18 Uhr.", "Meiner Meinung nach ist das Essen sehr lecker.", "Ich wohne in der Nähe.", "Das kostet 20 Euro."], answer: 1
        }
      ]
    }
  ],

  // ══════════════════════════════════════════
  //  HÖRVERSTEHEN (TTS Based)
  //  IMPORTANT: Text chunks STRICTLY under 150 characters to prevent API cutoff!
  // ══════════════════════════════════════════
  hoeren: [

    // ── A1 Hören Teil 1: Gespräche ──
    {
      id: "a1_hoer_1", level: "A1", section: "Hören", part: "Teil 1",
      title: "Gespräche verstehen",
      instructions: "Hören Sie den Dialog und beantworten Sie die Fragen.",
      questions: [
        {
          type: "mcq",
          text: '"Ich suche ein T-Shirt in Größe M." — "Das blaue kostet 15 Euro, das rote 19 Euro." — "Ich nehme das blaue. Ich zahle mit Karte."',
          question: "Welche Farbe wählt der Kunde?",
          options: ["Rot", "Blau", "Grün"],
          answer: 1
        },
        {
          type: "mcq",
          text: '"Ich suche ein T-Shirt in Größe M." — "Das blaue kostet 15 Euro, das rote 19 Euro." — "Ich nehme das blaue. Ich zahle mit Karte."',
          question: "Wie bezahlt der Kunde?",
          options: ["Bar", "Mit Karte", "Online"],
          answer: 1
        },
        {
          type: "mcq",
          text: '"Der ICE nach München hat 20 Minuten Verspätung. Er fährt heute von Gleis 7 ab. Wir bitten um Entschuldigung."',
          question: "Wohin fährt der Zug?",
          options: ["Nach Berlin", "Nach Hamburg", "Nach München"],
          answer: 2
        },
        {
          type: "mcq",
          text: '"Der ICE nach München hat 20 Minuten Verspätung. Er fährt heute von Gleis 7 ab. Wir bitten um Entschuldigung."',
          question: "Von welchem Gleis fährt der Zug ab?",
          options: ["Gleis 3", "Gleis 5", "Gleis 7"],
          answer: 2
        },
        {
          type: "mcq",
          text: '"Hallo Lisa, wir treffen uns heute nicht am Bahnhof, sondern direkt vor dem Kino um 18 Uhr."',
          question: "Wo treffen sie sich?",
          options: ["Vor dem Kino", "Am Bahnhof", "Im Restaurant"],
          answer: 0
        }
      ]
    },

    // ── A1 Hören Teil 2: Ansagen am Telefon ──
    {
      id: "a1_hoer_2", level: "A1", section: "Hören", part: "Teil 2",
      title: "Ansagen am Telefon",
      instructions: "Hören Sie die Ansage und wählen Sie aus.",
      questions: [
        {
          type: "mcq",
          text: '"Praxis Schmidt. Wegen Urlaub geschlossen. In Notfällen wählen Sie 116117. Ab dem 15. August wieder für Sie da."',
          question: "Wann öffnet die Praxis wieder?",
          options: ["Heute", "Am 15. August", "Sie bleibt geschlossen"],
          answer: 1
        },
        {
          type: "mcq",
          text: '"Sprachschule Aktiv. Heute von 9 bis 14 Uhr geöffnet. Anmeldung persönlich oder per E-Mail."',
          question: "Wie kann man sich anmelden?",
          options: ["Nur per Telefon", "Persönlich oder per E-Mail", "Per Post"],
          answer: 1
        },
        {
          type: "mcq",
          text: '"Hallo Mama, ich komme später. Der Bus hatte Verspätung und ich muss noch Hausaufgaben machen."',
          question: "Warum kommt das Kind später?",
          options: ["Es ist müde", "Der Bus hatte Verspätung", "Es trifft Freunde"],
          answer: 1
        },
        {
          type: "mcq",
          text: '"Autohaus Becker. Ihr Auto ist noch nicht fertig. Sie können es erst ab morgen Vormittag abholen."',
          question: "Wann ist das Auto fertig?",
          options: ["Morgen Nachmittag", "Heute Nachmittag", "Morgen Vormittag"],
          answer: 2
        },
        {
          type: "mcq",
          text: '"Hallo Peter, hier ist Tom. Für das Picknick brauchen wir noch Brot und Käse. Kannst du das kaufen?"',
          question: "Was soll Peter kaufen?",
          options: ["Getränke", "Brot und Käse", "Obst und Kuchen"],
          answer: 1
        }
      ]
    },

    // ── A1 Hören Teil 3: Kurze Dialoge im Alltag ──
    {
      id: "a1_hoer_3", level: "A1", section: "Hören", part: "Teil 3",
      title: "Kurze Alltagsdialoge",
      instructions: "Hören Sie und wählen Sie die richtige Antwort.",
      questions: [
        {
          type: "mcq",
          text: '"Guten Tag! Haben Sie einen Tisch für zwei Personen?" — "Ja, kommen Sie bitte hier entlang."',
          question: "Wo sind die Personen?",
          options: ["Im Supermarkt", "Im Restaurant", "Im Hotel"],
          answer: 1
        },
        {
          type: "mcq",
          text: '"Entschuldigung, wie viel Uhr ist es?" — "Es ist Viertel nach drei."',
          question: "Wie spät ist es?",
          options: ["03:00 Uhr", "03:15 Uhr", "03:45 Uhr"],
          answer: 1
        },
        {
          type: "mcq",
          text: '"Zwei Brötchen, bitte." — "Mit Butter und Käse?" — "Nur mit Butter, danke."',
          question: "Was möchte der Kunde auf die Brötchen?",
          options: ["Käse und Butter", "Nur Butter", "Nur Käse"],
          answer: 1
        },
        {
          type: "mcq",
          text: '"Wie viel kostet die Busfahrt in die Stadt?" — "Einen Euro zwanzig, bitte."',
          question: "Was kostet die Busfahrt?",
          options: ["1,00 €", "1,20 €", "2,00 €"],
          answer: 1
        },
        {
          type: "mcq",
          text: '"Hast du morgen Zeit?" — "Nein, morgen muss ich arbeiten. Übermorgen geht es."',
          question: "Wann hat die Person Zeit?",
          options: ["Morgen", "Heute", "Übermorgen"],
          answer: 2
        },
        {
          type: "mcq",
          text: '"Wo ist die nächste Apotheke?" — "Geradeaus und dann rechts, neben dem Supermarkt."',
          question: "Wo ist die Apotheke?",
          options: ["Links vom Supermarkt", "Geradeaus und dann rechts, neben dem Supermarkt", "Hinter dem Bahnhof"],
          answer: 1
        }
      ]
    },

    // ── A1 Hören Teil 4: Wetterbericht ──
    {
      id: "a1_hoer_4", level: "A1", section: "Hören", part: "Teil 4",
      title: "Wetterbericht",
      instructions: "Hören Sie den Wetterbericht und beantworten Sie die Fragen.",
      questions: [
        {
          type: "mcq",
          text: '"Heute ist es bewölkt und kühl. Die Temperatur beträgt 12 Grad. Am Nachmittag gibt es Regen."',
          question: "Wie ist das Wetter heute?",
          options: ["Sonnig und warm", "Bewölkt und kühl", "Heiß und trocken"],
          answer: 1
        },
        {
          type: "mcq",
          text: '"Heute ist es bewölkt und kühl. Die Temperatur beträgt 12 Grad. Am Nachmittag gibt es Regen."',
          question: "Was gibt es am Nachmittag?",
          options: ["Schnee", "Sonne", "Regen"],
          answer: 2
        },
        {
          type: "mcq",
          text: '"Morgen wird es schöner. Die Sonne scheint und es sind 22 Grad. Perfektes Wetter für einen Ausflug!"',
          question: "Wie viel Grad sind es morgen?",
          options: ["12 Grad", "22 Grad", "32 Grad"],
          answer: 1
        },
        {
          type: "mcq",
          text: '"Am Wochenende kommen Wolken aus dem Norden. Es wird kälter, nur noch 8 Grad."',
          question: "Woher kommen die Wolken?",
          options: ["Aus dem Süden", "Aus dem Osten", "Aus dem Norden"],
          answer: 2
        }
      ]
    },

    // ── A2 Hören Teil 1: Alltagsgespräche ──
    {
      id: "a2_hoer_1", level: "A2", section: "Hören", part: "Teil 1",
      title: "Alltagsgespräche",
      instructions: "Hören Sie den Dialog und beantworten Sie die Fragen.",
      questions: [
        {
          type: "mcq",
          text: '"Wo ist der Bahnhof?" — "Geradeaus bis zur Post, dann links. Nur fünf Minuten zu Fuß."',
          question: "Wo muss man abbiegen?",
          options: ["An der Post", "An der Kirche", "Am Bahnhof"],
          answer: 0
        },
        {
          type: "mcq",
          text: '"Wo ist der Bahnhof?" — "Geradeaus bis zur Post, dann links. Nur fünf Minuten zu Fuß."',
          question: "Wie weit ist der Weg?",
          options: ["Eine halbe Stunde", "Zwei Minuten", "Fünf Minuten"],
          answer: 2
        },
        {
          type: "mcq",
          text: '"Guten Abend. Ihr Tisch am Fenster. Was möchten Sie trinken?" — "Eine Flasche Wasser und zwei Gläser Rotwein."',
          question: "Was bestellt der Gast zu trinken?",
          options: ["Nur Wasser", "Wasser und Rotwein", "Bier und Wein"],
          answer: 1
        },
        {
          type: "mcq",
          text: '"Herr Weber, Ihr Flug nach London hat Verspätung. Das neue Gate ist jetzt A14. Bitte gehen Sie schnell dorthin."',
          question: "Wo ist das neue Gate?",
          options: ["A12", "B14", "A14"],
          answer: 2
        },
        {
          type: "mcq",
          text: '"Zimmer 204 ist fertig. Das Frühstück gibt es morgen von 7 bis 10 Uhr unten im Erdgeschoss."',
          question: "Wo gibt es das Frühstück?",
          options: ["Im Erdgeschoss", "Auf dem Zimmer", "Im zweiten Stock"],
          answer: 0
        }
      ]
    },

    // ── A2 Hören Teil 2: Radionachrichten ──
    {
      id: "a2_hoer_2", level: "A2", section: "Hören", part: "Teil 2",
      title: "Radionachrichten",
      instructions: "Hören Sie die Nachrichten. Ist das richtig oder falsch?",
      questions: [
        {
          type: "richtig_falsch",
          text: '"Autobahn A8: Unfall! Drei Kilometer Stau. Morgen sonnig, 25 Grad warm."',
          statements: [
            { s: "Auf der Autobahn gibt es einen Unfall.", answer: true },
            { s: "Das Wetter morgen wird kalt und regnerisch.", answer: false }
          ]
        },
        {
          type: "richtig_falsch",
          text: '"Der Bundeskanzler besucht heute Paris. Er spricht mit dem Präsidenten über Wirtschaft und Klimaschutz."',
          statements: [
            { s: "Der Kanzler ist heute in Berlin.", answer: false },
            { s: "Es geht beim Besuch um Wirtschaft und Klima.", answer: true }
          ]
        },
        {
          type: "richtig_falsch",
          text: '"FC Bayern München gewinnt souverän mit 3:1 in der Champions League. Tolles Ergebnis für alle Fans."',
          statements: [
            { s: "FC Bayern hat das Spiel verloren.", answer: false },
            { s: "Das Ergebnis war 3:1.", answer: true }
          ]
        }
      ]
    },

    // ── A2 Hören Teil 3: Nachrichten auf dem Anrufbeantworter ──
    {
      id: "a2_hoer_3", level: "A2", section: "Hören", part: "Teil 3",
      title: "Nachrichten auf dem Anrufbeantworter",
      instructions: "Hören Sie die Nachrichten und wählen Sie die richtige Antwort.",
      questions: [
        {
          type: "mcq",
          text: '"Hier ist Dr. Bergmann. Ihr Termin am Dienstag um 10 Uhr muss leider verschoben werden. Bitte rufen Sie uns zurück."',
          question: "Was ist mit dem Termin passiert?",
          options: ["Er wurde bestätigt.", "Er wurde abgesagt und muss neu vereinbart werden.", "Er findet früher statt."],
          answer: 1
        },
        {
          type: "mcq",
          text: '"Hallo Sabine, hier ist Karin. Die Party beginnt nicht um 19, sondern erst um 20 Uhr. Kannst du noch Saft mitbringen?"',
          question: "Wann beginnt die Party?",
          options: ["Um 19 Uhr", "Um 20 Uhr", "Um 21 Uhr"],
          answer: 1
        },
        {
          type: "mcq",
          text: '"Hallo Sabine, hier ist Karin. Die Party beginnt nicht um 19, sondern erst um 20 Uhr. Kannst du noch Saft mitbringen?"',
          question: "Was soll Sabine mitbringen?",
          options: ["Kuchen", "Brot", "Saft"],
          answer: 2
        },
        {
          type: "mcq",
          text: '"Hier ist die Stadtbibliothek. Ihr bestelltes Buch ist abholbereit. Sie können es bis Freitag abholen."',
          question: "Was kann man bis Freitag abholen?",
          options: ["Ein Paket", "Ein bestelltes Buch", "Eine Einladung"],
          answer: 1
        },
        {
          type: "mcq",
          text: '"Technischer Support. Ihr Problem ist gelöst. Das Gerät funktioniert wieder. Sie können es jederzeit abholen."',
          question: "Was ist mit dem Gerät?",
          options: ["Es ist noch kaputt.", "Es ist repariert und kann abgeholt werden.", "Es ist verloren gegangen."],
          answer: 1
        }
      ]
    },

    // ── A2 Hören Teil 4: Ansagen und Durchsagen ──
    {
      id: "a2_hoer_4", level: "A2", section: "Hören", part: "Teil 4",
      title: "Ansagen und Durchsagen",
      instructions: "Hören Sie die Durchsage und wählen Sie die richtige Antwort.",
      questions: [
        {
          type: "mcq",
          text: '"Achtung, Achtung! Das Kaufhaus schließt in 15 Minuten. Bitte begeben Sie sich zur Kasse."',
          question: "Was sollen die Kunden tun?",
          options: ["Das Kaufhaus verlassen", "Zur Kasse gehen", "Noch mehr einkaufen"],
          answer: 1
        },
        {
          type: "mcq",
          text: '"Guten Tag, Flug LH 445 nach Wien ist jetzt zum Einsteigen bereit. Bitte am Gate B7 einsteigen."',
          question: "Wohin fliegt das Flugzeug?",
          options: ["Nach Berlin", "Nach Wien", "Nach Zürich"],
          answer: 1
        },
        {
          type: "mcq",
          text: '"Guten Tag, Flug LH 445 nach Wien ist jetzt zum Einsteigen bereit. Bitte am Gate B7 einsteigen."',
          question: "An welchem Gate ist das Flugzeug?",
          options: ["Gate A7", "Gate B7", "Gate C7"],
          answer: 1
        },
        {
          type: "mcq",
          text: '"Das Schwimmbad ist wegen Reinigung heute bis 14 Uhr geschlossen. Ab 14 Uhr sind alle Bereiche geöffnet."',
          question: "Wann öffnet das Schwimmbad?",
          options: ["Um 12 Uhr", "Um 14 Uhr", "Um 16 Uhr"],
          answer: 1
        },
        {
          type: "mcq",
          text: '"Liebe Fahrgäste, dieser Zug endet in Frankfurt. Bitte alle aussteigen und auf den nächsten Zug warten."',
          question: "Was müssen die Fahrgäste tun?",
          options: ["Sitzen bleiben", "Aussteigen", "Den Schaffner rufen"],
          answer: 1
        },
        {
          type: "mcq",
          text: '"Achtung, im Erdgeschoss ist ein Kinderwagen ohne Eltern gefunden worden. Bitte melden Sie sich am Informationsschalter."',
          question: "Was wurde im Erdgeschoss gefunden?",
          options: ["Eine Tasche", "Ein Kinderwagen", "Ein Schlüssel"],
          answer: 1
        }
      ]
    },

    // ── A2 Hören Teil 5: Richtig/Falsch – Radiosendung ──
    {
      id: "a2_hoer_5", level: "A2", section: "Hören", part: "Teil 5",
      title: "Radiosendung – Richtig oder falsch?",
      instructions: "Hören Sie den Text und entscheiden Sie: richtig oder falsch?",
      questions: [
        {
          type: "richtig_falsch",
          text: '"Heute Morgen in den Nachrichten: In Berlin wird ein neues Museum eröffnet. Das Museum zeigt moderne Kunst. Der Eintritt kostet 8 Euro. Kinder unter 12 Jahren zahlen nichts. Das Museum ist täglich außer montags geöffnet."',
          statements: [
            { s: "Das neue Museum zeigt moderne Kunst.", answer: true },
            { s: "Der Eintritt ist für alle kostenlos.", answer: false },
            { s: "Kinder unter 12 Jahren zahlen keinen Eintritt.", answer: true },
            { s: "Das Museum ist montags geöffnet.", answer: false }
          ]
        },
        {
          type: "richtig_falsch",
          text: '"Unser Stadtteilfest findet am Samstag statt. Es beginnt um 14 Uhr auf dem Marktplatz. Es gibt Musik, Essen und Spiele für Kinder. Der Eintritt ist kostenlos. Bei schlechtem Wetter findet das Fest in der Stadthalle statt."',
          statements: [
            { s: "Das Stadtteilfest ist am Sonntag.", answer: false },
            { s: "Das Fest beginnt um 14 Uhr.", answer: true },
            { s: "Der Eintritt kostet etwas.", answer: false },
            { s: "Bei schlechtem Wetter ist das Fest in der Stadthalle.", answer: true }
          ]
        }
      ]
    },

    // ── A2 Hören Teil 6: Gespräch im Alltag – Richtig/Falsch ──
    {
      id: "a2_hoer_6", level: "A2", section: "Hören", part: "Teil 6",
      title: "Gespräch über Freizeitaktivitäten",
      instructions: "Hören Sie das Gespräch. Richtig oder falsch?",
      questions: [
        {
          type: "richtig_falsch",
          text: '"Anna: Hast du schon Pläne für das Wochenende? Ben: Ja, ich fahre mit dem Zug nach Hamburg. Anna: Oh, alleine? Ben: Nein, mit meiner Schwester. Wir wollen das Miniaturwunderland besuchen."',
          statements: [
            { s: "Ben fährt am Wochenende nach Hamburg.", answer: true },
            { s: "Ben fährt alleine.", answer: false },
            { s: "Ben und seine Schwester wollen das Miniaturwunderland besuchen.", answer: true },
            { s: "Ben fährt mit dem Auto.", answer: false }
          ]
        },
        {
          type: "richtig_falsch",
          text: '"Lea: Ich möchte gern Sport machen. Was empfiehlst du? Nico: Ich gehe zweimal pro Woche schwimmen. Es ist gut für den Rücken. Lea: Kostet das viel? Nico: Das Schwimmbad kostet 4 Euro. Mit einer Monatskarte für 30 Euro sparst du viel."',
          statements: [
            { s: "Nico geht einmal pro Woche schwimmen.", answer: false },
            { s: "Schwimmen ist gut für den Rücken.", answer: true },
            { s: "Eine Monatskarte kostet 4 Euro.", answer: false },
            { s: "Man kann mit einer Monatskarte Geld sparen.", answer: true }
          ]
        }
      ]
    }
  ]
};

// ── Helper functions ──────────────────────────────────────────────────────────
function getAllQuizzes() {
  return [
    ...QUIZ_BANK.lesen,
    ...QUIZ_BANK.schreiben,
    ...QUIZ_BANK.strukturen,
    ...QUIZ_BANK.wortschatz,
    ...QUIZ_BANK.hoeren
  ];
}
function getQuizzesByLevel(lvl) {
  return getAllQuizzes().filter(q => q.level === lvl);
}
function getQuizzesBySection(sec) {
  return getAllQuizzes().filter(q => q.section === sec);
}
function getQuizById(id) {
  return getAllQuizzes().find(q => q.id === id);
}

// ── Stats helper: count questions across all quizzes ─────────────────────────
function countAllQuestions() {
  return getAllQuizzes().reduce((total, quiz) => {
    return total + (quiz.questions || []).reduce((qt, q) => {
      if (q.statements) return qt + q.statements.length;
      if (q.situations) return qt + q.situations.length;
      return qt + 1;
    }, 0);
  }, 0);
}