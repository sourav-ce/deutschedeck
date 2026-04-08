(function () {
  'use strict';

  if (typeof QUIZ_BANK === 'undefined') return;

  const sectionNames = {
    lesen: 'Lesen',
    schreiben: 'Schreiben',
    strukturen: 'Strukturen',
    wortschatz: 'Wortschatz',
    hoeren: 'Hören'
  };

  const articleForms = {
    accusative: { der: 'den', die: 'die', das: 'das' },
    dative: { der: 'dem', die: 'der', das: 'dem' }
  };

  function chunk(items, size) {
    const out = [];
    for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
    return out;
  }

  function ensureUniqueId(baseId) {
    const existing = new Set([
      ...QUIZ_BANK.lesen.map(q => q.id),
      ...QUIZ_BANK.schreiben.map(q => q.id),
      ...QUIZ_BANK.strukturen.map(q => q.id),
      ...QUIZ_BANK.wortschatz.map(q => q.id),
      ...QUIZ_BANK.hoeren.map(q => q.id)
    ]);
    let id = baseId;
    let i = 2;
    while (existing.has(id)) {
      id = `${baseId}_${i}`;
      i++;
    }
    return id;
  }

  function addChunked(section, config) {
    const size = config.size || 7;
    chunk(config.questions, size).forEach((questions, index) => {
      QUIZ_BANK[section].push({
        id: ensureUniqueId(`${config.idBase}_${index + 1}`),
        level: config.level,
        section: sectionNames[section],
        part: `${config.partBase} ${index + 1}`,
        title: `${config.titleBase} ${index + 1}`,
        instructions: config.instructions,
        questions
      });
    });
  }

  function cloze(sentence, answer, hint) {
    const q = { type: 'cloze', sentence, answer };
    if (hint) q.hint = hint;
    return q;
  }

  function mcq(text, question, options, answer) {
    return { type: 'mcq', text, question, options, answer };
  }

  function situational(situation, options, answer) {
    return { type: 'situational', situation, options, answer };
  }

  function ordering(answer) {
    return { type: 'ordering', words: answer.split(' '), answer };
  }

  function rf(text, statements) {
    return { type: 'richtig_falsch', text, statements };
  }

  function caseArticle(article, grammaticalCase) {
    return articleForms[grammaticalCase][article];
  }

  function pickDistractors(items, index, key) {
    const distractors = [];
    let step = 1;
    while (distractors.length < 2 && step < items.length) {
      const candidate = items[(index + step) % items.length][key];
      if (candidate !== items[index][key] && !distractors.includes(candidate)) distractors.push(candidate);
      step++;
    }
    return distractors;
  }

  const nounBank = [
    { noun: 'Mann', article: 'der' },
    { noun: 'Hund', article: 'der' },
    { noun: 'Lehrer', article: 'der' },
    { noun: 'Arzt', article: 'der' },
    { noun: 'Film', article: 'der' },
    { noun: 'Tisch', article: 'der' },
    { noun: 'Koffer', article: 'der' },
    { noun: 'Schlüssel', article: 'der' },
    { noun: 'Zug', article: 'der' },
    { noun: 'Apfel', article: 'der' },
    { noun: 'Computer', article: 'der' },
    { noun: 'Stuhl', article: 'der' },
    { noun: 'Tasche', article: 'die' },
    { noun: 'Lampe', article: 'die' },
    { noun: 'Zeitung', article: 'die' },
    { noun: 'Jacke', article: 'die' },
    { noun: 'Tür', article: 'die' },
    { noun: 'Küche', article: 'die' },
    { noun: 'Frage', article: 'die' },
    { noun: 'Uhr', article: 'die' },
    { noun: 'Flasche', article: 'die' },
    { noun: 'Brille', article: 'die' },
    { noun: 'Buch', article: 'das' },
    { noun: 'Handy', article: 'das' },
    { noun: 'Auto', article: 'das' },
    { noun: 'Kind', article: 'das' },
    { noun: 'Bild', article: 'das' },
    { noun: 'Fenster', article: 'das' },
    { noun: 'Brot', article: 'das' },
    { noun: 'Formular', article: 'das' },
    { noun: 'Zimmer', article: 'das' },
    { noun: 'Ticket', article: 'das' }
  ];

  const accusativePatterns = [
    'Ich sehe ___ {noun}.',
    'Wir kaufen ___ {noun}.',
    'Kennst du ___ {noun}?',
    'Er sucht ___ {noun}.',
    'Sie braucht ___ {noun}.',
    'Heute fotografiere ich ___ {noun}.'
  ];

  const dativePatterns = [
    'Ich helfe ___ {noun}.',
    'Wir danken ___ {noun}.',
    'Er antwortet ___ {noun}.',
    'Kannst du ___ {noun} zuhören?',
    'Sie schreibt ___ {noun}.',
    'Ich vertraue ___ {noun}.'
  ];

  const accusativeQuestions = nounBank.map((entry, index) => {
    const pattern = accusativePatterns[index % accusativePatterns.length];
    return cloze(pattern.replace('{noun}', entry.noun), caseArticle(entry.article, 'accusative'), 'Akkusativartikel');
  });

  const dativeQuestions = nounBank.map((entry, index) => {
    const pattern = dativePatterns[index % dativePatterns.length];
    return cloze(pattern.replace('{noun}', entry.noun), caseArticle(entry.article, 'dative'), 'Dativartikel');
  });

  const accusativePrepItems = [
    { prep: 'durch', article: 'der', text: 'Wir gehen durch ___ Park.' },
    { prep: 'für', article: 'die', text: 'Das Geschenk ist für ___ Kollegin.' },
    { prep: 'ohne', article: 'das', text: 'Er geht ohne ___ Handy aus dem Haus.' },
    { prep: 'gegen', article: 'der', text: 'Sie fährt gegen ___ Wind.' },
    { prep: 'um', article: 'die', text: 'Das Café ist um ___ Ecke.' },
    { prep: 'durch', article: 'der', text: 'Am Sonntag laufen wir durch ___ Wald.' },
    { prep: 'für', article: 'das', text: 'Ich koche für ___ Kind.' },
    { prep: 'ohne', article: 'die', text: 'Sie geht ohne ___ Jacke nach draußen.' },
    { prep: 'gegen', article: 'der', text: 'Das hilft gegen ___ Lärm.' },
    { prep: 'um', article: 'der', text: 'Die Kinder laufen um ___ Baum.' },
    { prep: 'für', article: 'der', text: 'Die Nachricht ist für ___ Arzt.' },
    { prep: 'ohne', article: 'die', text: 'Das Zimmer ist ohne ___ Lampe sehr dunkel.' },
    { prep: 'durch', article: 'das', text: 'Die Katze springt durch ___ Fenster.' },
    { prep: 'gegen', article: 'die', text: 'Er läuft gegen ___ Tür.' },
    { prep: 'um', article: 'der', text: 'Wir setzen uns um ___ Tisch.' },
    { prep: 'für', article: 'der', text: 'Der Brief ist für ___ Mann.' },
    { prep: 'durch', article: 'die', text: 'Der Bus fährt durch ___ Stadt.' },
    { prep: 'ohne', article: 'das', text: 'Man darf nicht ohne ___ Ticket fahren.' },
    { prep: 'gegen', article: 'der', text: 'Ich nehme eine Tablette gegen ___ Schmerz.' },
    { prep: 'um', article: 'das', text: 'Der Hund rennt um ___ Haus.' },
    { prep: 'für', article: 'der', text: 'Wir kaufen Blumen für ___ Lehrer.' },
    { prep: 'ohne', article: 'die', text: 'Ohne ___ Brille kann sie nicht lesen.' },
    { prep: 'durch', article: 'das', text: 'Die Gruppe geht durch ___ Museum.' },
    { prep: 'um', article: 'der', text: 'Wir gehen um ___ Markt herum.' }
  ].map(item => cloze(item.text, caseArticle(item.article, 'accusative'), `${item.prep} + Akkusativ`));

  const dativePrepItems = [
    { prep: 'mit', article: 'der', text: 'Ich fahre mit ___ Zug zur Arbeit.' },
    { prep: 'mit', article: 'die', text: 'Sie spricht mit ___ Kollegin.' },
    { prep: 'mit', article: 'das', text: 'Wir kommen mit ___ Auto.' },
    { prep: 'bei', article: 'der', text: 'Heute bin ich bei ___ Arzt.' },
    { prep: 'bei', article: 'die', text: 'Er wohnt bei ___ Schwester.' },
    { prep: 'bei', article: 'das', text: 'Das liegt bei ___ Fenster.' },
    { prep: 'nach', article: 'der', text: 'Nach ___ Kurs gehen wir essen.' },
    { prep: 'aus', article: 'die', text: 'Sie kommt aus ___ Schweiz.' },
    { prep: 'aus', article: 'das', text: 'Das Kind kommt aus ___ Haus.' },
    { prep: 'von', article: 'der', text: 'Der Brief ist von ___ Nachbar.' },
    { prep: 'von', article: 'die', text: 'Das Geschenk ist von ___ Freundin.' },
    { prep: 'von', article: 'das', text: 'Der Deckel ist von ___ Glas gefallen.' },
    { prep: 'zu', article: 'der', text: 'Ich gehe zu ___ Bahnhof.' },
    { prep: 'zu', article: 'die', text: 'Wir fahren zu ___ Schule.' },
    { prep: 'zu', article: 'das', text: 'Er geht schnell zu ___ Auto.' },
    { prep: 'seit', article: 'der', text: 'Seit ___ Montag lerne ich jeden Tag.' },
    { prep: 'seit', article: 'die', text: 'Seit ___ Reise ist sie entspannter.' },
    { prep: 'seit', article: 'das', text: 'Seit ___ Wochenende regnet es.' },
    { prep: 'mit', article: 'der', text: 'Schreib bitte mit ___ Stift.' },
    { prep: 'bei', article: 'die', text: 'Die Rechnung liegt bei ___ Tasche.' },
    { prep: 'aus', article: 'der', text: 'Der Mann kommt aus ___ Park.' },
    { prep: 'von', article: 'die', text: 'Ich höre das von ___ Lehrerin.' },
    { prep: 'nach', article: 'das', text: 'Nach ___ Essen trinken wir Kaffee.' },
    { prep: 'zu', article: 'der', text: 'Morgen gehen wir zu ___ Bäcker.' }
  ].map(item => cloze(item.text, caseArticle(item.article, 'dative'), `${item.prep} + Dativ`));

  const twoWayQuestions = [
    cloze('Das Bild hängt an ___ Wand.', 'der', 'Ort -> Dativ'),
    cloze('Ich hänge das Bild an ___ Wand.', 'die', 'Richtung -> Akkusativ'),
    cloze('Der Schlüssel liegt auf ___ Tisch.', 'dem', 'Ort -> Dativ'),
    cloze('Ich lege den Schlüssel auf ___ Tisch.', 'den', 'Richtung -> Akkusativ'),
    cloze('Die Kinder spielen in ___ Garten.', 'dem', 'Ort -> Dativ'),
    cloze('Die Kinder laufen in ___ Garten.', 'den', 'Richtung -> Akkusativ'),
    cloze('Das Fahrrad steht vor ___ Haus.', 'dem', 'Ort -> Dativ'),
    cloze('Ich stelle das Fahrrad vor ___ Haus.', 'das', 'Richtung -> Akkusativ'),
    cloze('Das Sofa steht neben ___ Tür.', 'der', 'Ort -> Dativ'),
    cloze('Ich stelle das Sofa neben ___ Tür.', 'die', 'Richtung -> Akkusativ'),
    cloze('Der Ball liegt unter ___ Stuhl.', 'dem', 'Ort -> Dativ'),
    cloze('Der Hund läuft unter ___ Tisch.', 'den', 'Richtung -> Akkusativ'),
    cloze('Die Bücher sind hinter ___ Regal.', 'dem', 'Ort -> Dativ'),
    cloze('Ich stelle die Kiste hinter ___ Regal.', 'das', 'Richtung -> Akkusativ'),
    cloze('Wir sitzen zwischen ___ Freunden.', 'den', 'Ort -> Dativ'),
    cloze('Ich setze mich zwischen ___ Freunde.', 'die', 'Richtung -> Akkusativ'),
    cloze('Die Lampe hängt über ___ Tisch.', 'dem', 'Ort -> Dativ'),
    cloze('Ich hänge die Lampe über ___ Tisch.', 'den', 'Richtung -> Akkusativ'),
    cloze('Das Auto steht vor ___ Garage.', 'der', 'Ort -> Dativ'),
    cloze('Ich fahre das Auto in ___ Garage.', 'die', 'Richtung -> Akkusativ'),
    cloze('Die Katze sitzt auf ___ Sofa.', 'dem', 'Ort -> Dativ'),
    cloze('Die Katze springt auf ___ Sofa.', 'das', 'Richtung -> Akkusativ'),
    cloze('Die Jacke hängt an ___ Tür.', 'der', 'Ort -> Dativ'),
    cloze('Ich hänge die Jacke an ___ Tür.', 'die', 'Richtung -> Akkusativ')
  ];

  const pronounQuestions = [
    cloze('Ich sehe den Mann. Ich sehe ___.', 'ihn', 'Akkusativpronomen'),
    cloze('Ich sehe die Frau. Ich sehe ___.', 'sie', 'Akkusativpronomen'),
    cloze('Ich sehe das Kind. Ich sehe ___.', 'es', 'Akkusativpronomen'),
    cloze('Ich sehe die Leute. Ich sehe ___.', 'sie', 'Akkusativpronomen'),
    cloze('Ich helfe dem Mann. Ich helfe ___.', 'ihm', 'Dativpronomen'),
    cloze('Ich helfe der Frau. Ich helfe ___.', 'ihr', 'Dativpronomen'),
    cloze('Ich helfe dem Kind. Ich helfe ___.', 'ihm', 'Dativpronomen'),
    cloze('Ich helfe den Freunden. Ich helfe ___.', 'ihnen', 'Dativpronomen'),
    cloze('Kannst du mir helfen? Ja, ich helfe ___.', 'dir', 'Dativpronomen'),
    cloze('Maria ruft uns an. Maria ruft ___.', 'uns', 'Akkusativpronomen'),
    cloze('Der Lehrer gibt euch Hausaufgaben. Er gibt ___ Hausaufgaben.', 'euch', 'Dativpronomen'),
    cloze('Wir besuchen sie morgen. Wir besuchen ___.', 'sie', 'Akkusativpronomen'),
    cloze('Kann ich Ihnen helfen? Ja, bitte helfen Sie ___.', 'mir', 'Dativpronomen'),
    cloze('Ich kenne deinen Bruder. Ich kenne ___.', 'ihn', 'Akkusativpronomen'),
    cloze('Wir danken unseren Eltern. Wir danken ___.', 'ihnen', 'Dativpronomen'),
    cloze('Sie besucht mich am Samstag. Sie besucht ___.', 'mich', 'Akkusativpronomen'),
    cloze('Ich schreibe meinem Freund. Ich schreibe ___.', 'ihm', 'Dativpronomen'),
    cloze('Er hört uns nicht. Er hört ___.', 'uns', 'Akkusativpronomen'),
    cloze('Kannst du ihr antworten? Ja, ich antworte ___.', 'ihr', 'Dativpronomen'),
    cloze('Wir laden euch ein. Wir laden ___.', 'euch', 'Akkusativpronomen'),
    cloze('Der Chef dankt Ihnen. Der Chef dankt ___.', 'Ihnen', 'Dativpronomen'),
    cloze('Ich sehe dich dort. Ich sehe ___.', 'dich', 'Akkusativpronomen'),
    cloze('Sie gibt mir den Schlüssel. Sie gibt ___ den Schlüssel.', 'mir', 'Dativpronomen'),
    cloze('Ich höre ihn im Flur. Ich höre ___.', 'ihn', 'Akkusativpronomen')
  ];

  const modalVerbQuestions = [
    cloze('Ich muss morgen früh ___ .', 'aufstehen', 'Modalverb + Infinitiv'),
    cloze('Wir wollen heute Abend Pizza ___ .', 'essen', 'Modalverb + Infinitiv'),
    cloze('Kannst du mir bitte ___ ?', 'helfen', 'Modalverb + Infinitiv'),
    cloze('Sie darf heute länger ___ .', 'bleiben', 'Modalverb + Infinitiv'),
    cloze('Er soll den Bericht sofort ___ .', 'schreiben', 'Modalverb + Infinitiv'),
    cloze('Ihr könnt hier nicht ___ .', 'parken', 'Modalverb + Infinitiv'),
    cloze('Ich möchte ein Zimmer ___ .', 'buchen', 'Modalverb + Infinitiv'),
    cloze('Wir müssen den Zug ___ .', 'nehmen', 'Modalverb + Infinitiv'),
    cloze('Du sollst mehr Wasser ___ .', 'trinken', 'Modalverb + Infinitiv'),
    cloze('Sie will am Wochenende Freunde ___ .', 'besuchen', 'Modalverb + Infinitiv'),
    cloze('Ich kann heute nicht lange ___ .', 'warten', 'Modalverb + Infinitiv'),
    cloze('Möchtet ihr mit uns ___ ?', 'kommen', 'Modalverb + Infinitiv'),
    cloze('Er darf das Fenster nicht ___ .', 'öffnen', 'Modalverb + Infinitiv'),
    cloze('Wir sollen pünktlich ___ .', 'sein', 'Modalverb + Infinitiv'),
    cloze('Du musst die Hausaufgaben heute ___ .', 'machen', 'Modalverb + Infinitiv'),
    cloze('Kann ich hier mit Karte ___ ?', 'zahlen', 'Modalverb + Infinitiv'),
    cloze('Sie möchte Deutsch besser ___ .', 'sprechen', 'Modalverb + Infinitiv'),
    cloze('Wir wollen morgen früher ___ .', 'losfahren', 'Modalverb + Infinitiv'),
    cloze('Er muss noch den Arzt ___ .', 'anrufen', 'Modalverb + Infinitiv'),
    cloze('Ihr könnt am Bahnhof ___ .', 'umsteigen', 'Modalverb + Infinitiv'),
    cloze('Ich möchte eine Frage ___ .', 'stellen', 'Modalverb + Infinitiv'),
    cloze('Man soll im Kurs viel ___ .', 'üben', 'Modalverb + Infinitiv'),
    cloze('Sie dürfen hier nicht ___ .', 'rauchen', 'Modalverb + Infinitiv'),
    cloze('Wir können später noch Kaffee ___ .', 'trinken', 'Modalverb + Infinitiv')
  ];

  const possessiveQuestions = [
    cloze('Das ist mein Bruder. Das ist ___ Bruder.', 'mein', 'Possessivartikel'),
    cloze('Das ist meine Schwester. Das ist ___ Schwester.', 'meine', 'Possessivartikel'),
    cloze('Das ist mein Auto. Das ist ___ Auto.', 'mein', 'Possessivartikel'),
    cloze('Wo ist dein Handy? Wo ist ___ Handy?', 'dein', 'Possessivartikel'),
    cloze('Ist das deine Tasche? Ja, das ist ___ Tasche.', 'meine', 'Possessivartikel'),
    cloze('Er sucht seinen Schlüssel. Er sucht ___ Schlüssel.', 'seinen', 'Possessivartikel'),
    cloze('Sie besucht ihre Oma. Sie besucht ___ Oma.', 'ihre', 'Possessivartikel'),
    cloze('Wir brauchen unser Ticket. Wir brauchen ___ Ticket.', 'unser', 'Possessivartikel'),
    cloze('Ihr lest euer Buch. Ihr lest ___ Buch.', 'euer', 'Possessivartikel'),
    cloze('Sie reparieren ihr Fahrrad. Sie reparieren ___ Fahrrad.', 'ihr', 'Possessivartikel'),
    cloze('Ich sehe deinen Vater. Ich sehe ___ Vater.', 'deinen', 'Possessivartikel'),
    cloze('Kannst du meiner Freundin helfen? Ja, ich helfe ___ Freundin.', 'deiner', 'Possessivartikel'),
    cloze('Er antwortet seinem Chef. Er antwortet ___ Chef.', 'seinem', 'Possessivartikel'),
    cloze('Wir danken unserer Lehrerin. Wir danken ___ Lehrerin.', 'unserer', 'Possessivartikel'),
    cloze('Sie gibt ihrem Kind Wasser. Sie gibt ___ Kind Wasser.', 'ihrem', 'Possessivartikel'),
    cloze('Ich besuche meine Eltern. Ich besuche ___ Eltern.', 'meine', 'Possessivartikel'),
    cloze('Wo ist euer Zimmer? Wo ist ___ Zimmer?', 'euer', 'Possessivartikel'),
    cloze('Das ist ihre Entscheidung. Das ist ___ Entscheidung.', 'ihre', 'Possessivartikel'),
    cloze('Ist das unser Termin? Ja, das ist ___ Termin.', 'unser', 'Possessivartikel'),
    cloze('Kannst du deine Jacke holen? Hol bitte ___ Jacke.', 'deine', 'Possessivartikel'),
    cloze('Er sucht sein Buch. Er sucht ___ Buch.', 'sein', 'Possessivartikel'),
    cloze('Wir kennen euren Lehrer. Wir kennen ___ Lehrer.', 'euren', 'Possessivartikel'),
    cloze('Sie hilft ihrer Mutter. Sie hilft ___ Mutter.', 'ihrer', 'Possessivartikel'),
    cloze('Ich nehme mein Handy. Ich nehme ___ Handy.', 'mein', 'Possessivartikel')
  ];

  const caseMcqQuestions = [
    mcq('Der Lehrer erklärt dem Schüler die Aufgabe.', 'In welchem Kasus steht "dem Schüler"?', ['Nominativ', 'Akkusativ', 'Dativ'], 2),
    mcq('Ich sehe den Mann im Bus.', 'In welchem Kasus steht "den Mann"?', ['Nominativ', 'Akkusativ', 'Dativ'], 1),
    mcq('Die Frau gibt dem Kind einen Apfel.', 'In welchem Kasus steht "einen Apfel"?', ['Nominativ', 'Akkusativ', 'Dativ'], 1),
    mcq('Das Auto steht vor dem Haus.', 'In welchem Kasus steht "dem Haus"?', ['Nominativ', 'Akkusativ', 'Dativ'], 2),
    mcq('Mein Bruder kauft einen Kaffee.', 'In welchem Kasus steht "Mein Bruder"?', ['Nominativ', 'Akkusativ', 'Dativ'], 0),
    mcq('Wir helfen der Nachbarin.', 'In welchem Kasus steht "der Nachbarin"?', ['Nominativ', 'Akkusativ', 'Dativ'], 2),
    mcq('Kannst du den Schlüssel holen?', 'In welchem Kasus steht "den Schlüssel"?', ['Nominativ', 'Akkusativ', 'Dativ'], 1),
    mcq('Ich fahre mit dem Zug.', 'Welchen Kasus verlangt "mit"?', ['Nominativ', 'Akkusativ', 'Dativ'], 2),
    mcq('Das Geschenk ist für den Chef.', 'Welchen Kasus verlangt "für"?', ['Nominativ', 'Akkusativ', 'Dativ'], 1),
    mcq('Die Lampe hängt an der Decke.', 'Warum steht "der Decke" im Dativ?', ['Ort', 'Richtung', 'Plural'], 0),
    mcq('Ich hänge die Lampe an die Decke.', 'Warum steht "die Decke" im Akkusativ?', ['Ort', 'Richtung', 'Besitz'], 1),
    mcq('Er antwortet seiner Kollegin sofort.', 'Welchen Kasus braucht "antworten"?', ['Nominativ', 'Akkusativ', 'Dativ'], 2),
    mcq('Ich habe einen Termin beim Arzt.', 'Welchen Kasus braucht "bei"?', ['Nominativ', 'Akkusativ', 'Dativ'], 2),
    mcq('Ohne den Ausweis geht es nicht.', 'Welchen Kasus braucht "ohne"?', ['Nominativ', 'Akkusativ', 'Dativ'], 1),
    mcq('Nach dem Essen trinken wir Kaffee.', 'Welchen Kasus braucht "nach"?', ['Nominativ', 'Akkusativ', 'Dativ'], 2),
    mcq('Wir laufen durch den Park.', 'Welchen Kasus braucht "durch"?', ['Nominativ', 'Akkusativ', 'Dativ'], 1),
    mcq('Der Brief ist von meiner Tante.', 'Welchen Kasus braucht "von"?', ['Nominativ', 'Akkusativ', 'Dativ'], 2),
    mcq('Ich kenne deinen Bruder.', 'Welchen Kasus hat "deinen Bruder"?', ['Nominativ', 'Akkusativ', 'Dativ'], 1),
    mcq('Das gefällt meiner Freundin.', 'Welchen Kasus braucht "gefallen"?', ['Nominativ', 'Akkusativ', 'Dativ'], 2),
    mcq('Wir suchen einen Tisch.', 'Welchen Kasus hat "einen Tisch"?', ['Nominativ', 'Akkusativ', 'Dativ'], 1),
    mcq('Der Schlüssel liegt auf dem Tisch.', 'Welche Idee passt?', ['Richtung', 'Ort', 'Zukunft'], 1),
    mcq('Ich lege den Schlüssel auf den Tisch.', 'Welche Idee passt?', ['Richtung', 'Ort', 'Vergangenheit'], 0),
    mcq('Sie gibt ihm das Buch.', 'Welchen Kasus hat "ihm"?', ['Nominativ', 'Akkusativ', 'Dativ'], 2),
    mcq('Ich frage den Kellner.', 'Welchen Kasus braucht "fragen"?', ['Nominativ', 'Akkusativ', 'Dativ'], 1)
  ];

  addChunked('strukturen', {
    idBase: 'exp_strukturen_cases',
    level: 'A1',
    partBase: 'Cases',
    titleBase: 'Akkusativ und Dativ',
    instructions: 'Ergänzen Sie die richtige Form oder wählen Sie die passende Antwort.',
    questions: [
      ...accusativeQuestions,
      ...dativeQuestions,
      ...accusativePrepItems,
      ...dativePrepItems,
      ...twoWayQuestions,
      ...pronounQuestions,
      ...modalVerbQuestions,
      ...possessiveQuestions,
      ...caseMcqQuestions
    ],
    size: 7
  });

  const phraseBank = [
    { situation: 'Sie möchten höflich nach dem Weg zum Bahnhof fragen.', phrase: 'Entschuldigung, wie komme ich zum Bahnhof?', clozeSentence: 'Entschuldigung, wie komme ich zum ___?', clozeAnswer: 'Bahnhof' },
    { situation: 'Sie möchten im Café etwas bestellen.', phrase: 'Ich hätte gern einen Kaffee, bitte.', clozeSentence: 'Ich hätte gern einen ___, bitte.', clozeAnswer: 'Kaffee' },
    { situation: 'Sie haben etwas nicht verstanden und möchten eine Wiederholung.', phrase: 'Könnten Sie das bitte wiederholen?', clozeSentence: 'Könnten Sie das bitte ___?', clozeAnswer: 'wiederholen' },
    { situation: 'Sie möchten wissen, was etwas kostet.', phrase: 'Wie viel kostet das?', clozeSentence: 'Wie viel ___ das?', clozeAnswer: 'kostet' },
    { situation: 'Sie möchten höflich um Hilfe bitten.', phrase: 'Können Sie mir bitte helfen?', clozeSentence: 'Können Sie mir bitte ___?', clozeAnswer: 'helfen' },
    { situation: 'Sie möchten sagen, dass Sie nur ein bisschen Deutsch sprechen.', phrase: 'Ich spreche nur ein bisschen Deutsch.', clozeSentence: 'Ich spreche nur ein bisschen ___.', clozeAnswer: 'Deutsch' },
    { situation: 'Sie möchten nach der Toilette fragen.', phrase: 'Wo ist die Toilette?', clozeSentence: 'Wo ist die ___?', clozeAnswer: 'Toilette' },
    { situation: 'Sie möchten im Restaurant die Rechnung.', phrase: 'Die Rechnung, bitte.', clozeSentence: 'Die ___, bitte.', clozeAnswer: 'Rechnung' },
    { situation: 'Sie möchten sagen, dass Sie bar zahlen.', phrase: 'Ich zahle bar.', clozeSentence: 'Ich zahle ___.', clozeAnswer: 'bar' },
    { situation: 'Sie möchten nach der Uhrzeit fragen.', phrase: 'Wie spät ist es?', clozeSentence: 'Wie ___ ist es?', clozeAnswer: 'spät' },
    { situation: 'Sie möchten sagen, dass Sie einen Termin haben.', phrase: 'Ich habe einen Termin.', clozeSentence: 'Ich habe einen ___.', clozeAnswer: 'Termin' },
    { situation: 'Sie möchten höflich um langsamere Sprache bitten.', phrase: 'Bitte sprechen Sie langsamer.', clozeSentence: 'Bitte sprechen Sie ___.', clozeAnswer: 'langsamer' },
    { situation: 'Sie möchten einen Termin verschieben.', phrase: 'Können wir den Termin verschieben?', clozeSentence: 'Können wir den Termin ___?', clozeAnswer: 'verschieben' },
    { situation: 'Sie möchten am Telefon um einen Rückruf bitten.', phrase: 'Könnten Sie mich bitte zurückrufen?', clozeSentence: 'Könnten Sie mich bitte ___?', clozeAnswer: 'zurückrufen' },
    { situation: 'Sie möchten im Hotel einchecken.', phrase: 'Ich habe ein Zimmer reserviert.', clozeSentence: 'Ich habe ein Zimmer ___.', clozeAnswer: 'reserviert' },
    { situation: 'Sie möchten am Bahnhof nach dem Gleis fragen.', phrase: 'Von welchem Gleis fährt der Zug ab?', clozeSentence: 'Von welchem ___ fährt der Zug ab?', clozeAnswer: 'Gleis' },
    { situation: 'Sie möchten im Geschäft eine andere Größe.', phrase: 'Haben Sie das auch in Größe M?', clozeSentence: 'Haben Sie das auch in Größe ___?', clozeAnswer: 'M' },
    { situation: 'Sie möchten beim Arzt Ihre Symptome nennen.', phrase: 'Ich habe seit zwei Tagen Kopfschmerzen.', clozeSentence: 'Ich habe seit zwei Tagen ___.', clozeAnswer: 'Kopfschmerzen' },
    { situation: 'Sie möchten höflich nach einer E-Mail-Adresse fragen.', phrase: 'Könnten Sie mir bitte Ihre E-Mail-Adresse geben?', clozeSentence: 'Könnten Sie mir bitte Ihre ___ geben?', clozeAnswer: 'E-Mail-Adresse' },
    { situation: 'Sie möchten sagen, dass Sie sich verspäten.', phrase: 'Ich komme etwa zehn Minuten später.', clozeSentence: 'Ich komme etwa zehn Minuten ___.', clozeAnswer: 'später' },
    { situation: 'Sie möchten ein Formular abholen.', phrase: 'Wo kann ich das Formular abholen?', clozeSentence: 'Wo kann ich das Formular ___?', clozeAnswer: 'abholen' },
    { situation: 'Sie möchten freundlich widersprechen.', phrase: 'Ich bin da nicht ganz sicher.', clozeSentence: 'Ich bin da nicht ganz ___.', clozeAnswer: 'sicher' },
    { situation: 'Sie möchten um eine Bestätigung bitten.', phrase: 'Bitte bestätigen Sie den Termin kurz.', clozeSentence: 'Bitte ___ Sie den Termin kurz.', clozeAnswer: 'bestätigen' },
    { situation: 'Sie möchten im Büro um eine Kopie bitten.', phrase: 'Könnten Sie mir bitte eine Kopie machen?', clozeSentence: 'Könnten Sie mir bitte eine Kopie ___?', clozeAnswer: 'machen' },
    { situation: 'Sie möchten sagen, dass Sie etwas lieber per Mail schicken.', phrase: 'Ich schicke es Ihnen lieber per Mail.', clozeSentence: 'Ich schicke es Ihnen lieber per ___.', clozeAnswer: 'Mail' },
    { situation: 'Sie möchten nach einer Ermäßigung fragen.', phrase: 'Gibt es einen Studententarif?', clozeSentence: 'Gibt es einen ___?', clozeAnswer: 'Studententarif' },
    { situation: 'Sie möchten fragen, ob Kartenzahlung möglich ist.', phrase: 'Kann man hier mit Karte zahlen?', clozeSentence: 'Kann man hier mit Karte ___?', clozeAnswer: 'zahlen' },
    { situation: 'Sie möchten sagen, dass etwas ausverkauft ist.', phrase: 'Leider ist das heute ausverkauft.', clozeSentence: 'Leider ist das heute ___.', clozeAnswer: 'ausverkauft' },
    { situation: 'Sie möchten nach dem Umsteigen fragen.', phrase: 'Muss ich in Köln umsteigen?', clozeSentence: 'Muss ich in Köln ___?', clozeAnswer: 'umsteigen' },
    { situation: 'Sie möchten höflich um Geduld bitten.', phrase: 'Einen Moment bitte.', clozeSentence: 'Einen ___ bitte.', clozeAnswer: 'Moment' },
    { situation: 'Sie möchten sich bedanken.', phrase: 'Vielen Dank für Ihre Hilfe.', clozeSentence: 'Vielen Dank für Ihre ___.', clozeAnswer: 'Hilfe' },
    { situation: 'Sie möchten einen Vorschlag machen.', phrase: 'Wir könnten uns um halb acht treffen.', clozeSentence: 'Wir könnten uns um halb acht ___.', clozeAnswer: 'treffen' },
    { situation: 'Sie möchten sagen, dass Ihnen etwas lieber wäre.', phrase: 'Mir wäre ein Termin am Mittwoch lieber.', clozeSentence: 'Mir wäre ein Termin am Mittwoch ___.', clozeAnswer: 'lieber' },
    { situation: 'Sie möchten höflich nach einer Lösung fragen.', phrase: 'Gibt es dafür eine andere Lösung?', clozeSentence: 'Gibt es dafür eine andere ___?', clozeAnswer: 'Lösung' },
    { situation: 'Sie möchten sagen, dass Sie etwas überprüfen werden.', phrase: 'Ich schaue das noch einmal nach.', clozeSentence: 'Ich schaue das noch einmal ___.', clozeAnswer: 'nach' },
    { situation: 'Sie möchten sagen, dass etwas dringend ist.', phrase: 'Das ist ziemlich dringend.', clozeSentence: 'Das ist ziemlich ___.', clozeAnswer: 'dringend' },
    { situation: 'Sie möchten nach einer Frist fragen.', phrase: 'Bis wann brauchen Sie die Unterlagen?', clozeSentence: 'Bis wann brauchen Sie die ___?', clozeAnswer: 'Unterlagen' },
    { situation: 'Sie möchten sich für die Verspätung entschuldigen.', phrase: 'Entschuldigen Sie bitte die Verspätung.', clozeSentence: 'Entschuldigen Sie bitte die ___.', clozeAnswer: 'Verspätung' },
    { situation: 'Sie möchten sagen, dass Sie etwas weiterleiten.', phrase: 'Ich leite die Nachricht gleich weiter.', clozeSentence: 'Ich leite die Nachricht gleich ___.', clozeAnswer: 'weiter' },
    { situation: 'Sie möchten höflich um Rückmeldung bitten.', phrase: 'Ich freue mich auf Ihre Rückmeldung.', clozeSentence: 'Ich freue mich auf Ihre ___.', clozeAnswer: 'Rückmeldung' },
    { situation: 'Sie möchten um einen neuen Termin bitten.', phrase: 'Könnten wir einen Ersatztermin finden?', clozeSentence: 'Könnten wir einen ___ finden?', clozeAnswer: 'Ersatztermin' }
  ];

  const wortschatzQuestions = [];
  phraseBank.forEach((item, index) => {
    const distractors = pickDistractors(phraseBank, index, 'phrase');
    const options = [item.phrase, ...distractors];
    const rotateBy = index % options.length;
    const rotated = options.slice(rotateBy).concat(options.slice(0, rotateBy));
    wortschatzQuestions.push(situational(item.situation, rotated, rotated.indexOf(item.phrase)));
    wortschatzQuestions.push(cloze(item.clozeSentence, item.clozeAnswer, 'Wichtige Redemittel'));
  });

  [
    'Wie komme ich zum Bahnhof',
    'Ich hätte gern ein Wasser',
    'Könnten Sie das bitte wiederholen',
    'Wann fährt der nächste Zug ab',
    'Ich habe einen Termin beim Arzt',
    'Können wir den Termin verschieben',
    'Ich spreche nur ein bisschen Deutsch',
    'Wo kann ich das Formular abholen',
    'Die Rechnung bitte',
    'Ich zahle heute mit Karte',
    'Bitte sprechen Sie etwas langsamer',
    'Ich freue mich auf Ihre Rückmeldung',
    'Könnten Sie mir eine Kopie machen',
    'Wir könnten uns morgen treffen',
    'Ich komme zehn Minuten später',
    'Haben Sie das auch in Größe M',
    'Kann man hier bar bezahlen',
    'Ich möchte ein Zimmer reservieren',
    'Wo ist die nächste Haltestelle',
    'Entschuldigen Sie bitte die Verspätung',
    'Ich leite die Nachricht sofort weiter',
    'Gibt es dafür eine andere Lösung',
    'Bis wann brauchen Sie die Unterlagen',
    'Einen Moment bitte'
  ].forEach(sentence => wortschatzQuestions.push(ordering(sentence)));

  addChunked('wortschatz', {
    idBase: 'exp_wortschatz_phrases',
    level: 'A2',
    partBase: 'Redemittel',
    titleBase: 'Wichtige Phrasen',
    instructions: 'Wählen Sie die passende Redewendung oder ergänzen Sie die Lücke.',
    questions: wortschatzQuestions,
    size: 7
  });

  const writingPhrases = [
    { prompt: 'Sie beginnen eine formelle E-Mail an Frau Becker.', correct: 'Sehr geehrte Frau Becker,', clozeSentence: '___ Frau Becker,', clozeAnswer: 'Sehr geehrte' },
    { prompt: 'Sie möchten sich für eine E-Mail bedanken.', correct: 'Vielen Dank für Ihre E-Mail.', clozeSentence: 'Vielen Dank für Ihre ___.', clozeAnswer: 'E-Mail' },
    { prompt: 'Sie möchten sagen, dass Sie am Freitag nicht kommen können.', correct: 'Leider kann ich am Freitag nicht kommen.', clozeSentence: 'Leider kann ich am Freitag nicht ___.', clozeAnswer: 'kommen' },
    { prompt: 'Sie möchten um eine kurze Antwort bitten.', correct: 'Ich freue mich auf Ihre kurze Antwort.', clozeSentence: 'Ich freue mich auf Ihre kurze ___.', clozeAnswer: 'Antwort' },
    { prompt: 'Sie beenden eine formelle E-Mail.', correct: 'Mit freundlichen Grüßen', clozeSentence: 'Mit freundlichen ___.', clozeAnswer: 'Grüßen' },
    { prompt: 'Sie möchten einen Termin absagen.', correct: 'Den Termin am Montag muss ich leider absagen.', clozeSentence: 'Den Termin am Montag muss ich leider ___.', clozeAnswer: 'absagen' },
    { prompt: 'Sie möchten nach einem neuen Termin fragen.', correct: 'Hätten Sie nächste Woche Zeit?', clozeSentence: 'Hätten Sie nächste Woche ___?', clozeAnswer: 'Zeit' },
    { prompt: 'Sie möchten höflich um Entschuldigung bitten.', correct: 'Bitte entschuldigen Sie die Umstände.', clozeSentence: 'Bitte entschuldigen Sie die ___.', clozeAnswer: 'Umstände' },
    { prompt: 'Sie möchten sagen, dass ein Anhang dabei ist.', correct: 'Im Anhang finden Sie das Formular.', clozeSentence: 'Im Anhang finden Sie das ___.', clozeAnswer: 'Formular' },
    { prompt: 'Sie möchten sagen, dass Sie sich verspäten.', correct: 'Ich werde mich um etwa 15 Minuten verspäten.', clozeSentence: 'Ich werde mich um etwa 15 Minuten ___.', clozeAnswer: 'verspäten' },
    { prompt: 'Sie möchten nachfragen, ob Unterlagen angekommen sind.', correct: 'Sind meine Unterlagen angekommen?', clozeSentence: 'Sind meine Unterlagen ___?', clozeAnswer: 'angekommen' },
    { prompt: 'Sie möchten um eine Bestätigung bitten.', correct: 'Bitte bestätigen Sie den Termin per E-Mail.', clozeSentence: 'Bitte bestätigen Sie den Termin per ___.', clozeAnswer: 'E-Mail' },
    { prompt: 'Sie möchten sagen, dass Sie krank sind.', correct: 'Ich bin krank und kann heute nicht teilnehmen.', clozeSentence: 'Ich bin krank und kann heute nicht ___.', clozeAnswer: 'teilnehmen' },
    { prompt: 'Sie möchten sagen, warum Sie fehlen.', correct: 'Wegen eines Arzttermins komme ich später.', clozeSentence: 'Wegen eines Arzttermins komme ich ___.', clozeAnswer: 'später' },
    { prompt: 'Sie möchten höflich um Informationen bitten.', correct: 'Könnten Sie mir bitte weitere Informationen schicken?', clozeSentence: 'Könnten Sie mir bitte weitere Informationen ___?', clozeAnswer: 'schicken' },
    { prompt: 'Sie möchten darum bitten, etwas mitzubringen.', correct: 'Bitte bringen Sie Ihren Ausweis mit.', clozeSentence: 'Bitte bringen Sie Ihren Ausweis ___.', clozeAnswer: 'mit' },
    { prompt: 'Sie möchten sagen, dass Sie etwas nicht verstanden haben.', correct: 'Einen Punkt habe ich leider nicht verstanden.', clozeSentence: 'Einen Punkt habe ich leider nicht ___.', clozeAnswer: 'verstanden' },
    { prompt: 'Sie möchten sagen, dass Sie eine Rechnung benötigen.', correct: 'Bitte schicken Sie mir die Rechnung zu.', clozeSentence: 'Bitte schicken Sie mir die Rechnung ___.', clozeAnswer: 'zu' },
    { prompt: 'Sie möchten um Geduld bitten.', correct: 'Ich antworte Ihnen so schnell wie möglich.', clozeSentence: 'Ich antworte Ihnen so schnell wie ___.', clozeAnswer: 'möglich' },
    { prompt: 'Sie möchten sagen, dass Sie sich auf das Treffen freuen.', correct: 'Ich freue mich auf unser Treffen.', clozeSentence: 'Ich freue mich auf unser ___.', clozeAnswer: 'Treffen' },
    { prompt: 'Sie möchten höflich um einen Rückruf bitten.', correct: 'Könnten Sie mich bitte zurückrufen?', clozeSentence: 'Könnten Sie mich bitte ___?', clozeAnswer: 'zurückrufen' },
    { prompt: 'Sie möchten sagen, dass Sie Dokumente anhängen.', correct: 'Die Unterlagen habe ich angehängt.', clozeSentence: 'Die Unterlagen habe ich ___.', clozeAnswer: 'angehängt' },
    { prompt: 'Sie möchten höflich einen Wunsch formulieren.', correct: 'Ich würde gern einen früheren Termin bekommen.', clozeSentence: 'Ich würde gern einen früheren Termin ___.', clozeAnswer: 'bekommen' },
    { prompt: 'Sie möchten auf ein Problem hinweisen.', correct: 'Leider gibt es ein technisches Problem.', clozeSentence: 'Leider gibt es ein technisches ___.', clozeAnswer: 'Problem' },
    { prompt: 'Sie möchten sagen, dass Sie auf Antwort warten.', correct: 'Ich warte noch auf Ihre Antwort.', clozeSentence: 'Ich warte noch auf Ihre ___.', clozeAnswer: 'Antwort' },
    { prompt: 'Sie möchten freundlich schließen.', correct: 'Vielen Dank im Voraus.', clozeSentence: 'Vielen Dank im ___.', clozeAnswer: 'Voraus' }
  ];

  const schreibenQuestions = [];
  writingPhrases.forEach((item, index) => {
    const distractors = pickDistractors(writingPhrases, index, 'correct');
    const options = [item.correct, ...distractors];
    const rotateBy = (index + 1) % options.length;
    const rotated = options.slice(rotateBy).concat(options.slice(0, rotateBy));
    schreibenQuestions.push(situational(item.prompt, rotated, rotated.indexOf(item.correct)));
    schreibenQuestions.push(cloze(item.clozeSentence, item.clozeAnswer, 'Formulierung für E-Mails und Nachrichten'));
  });

  [
    'Sehr geehrte Frau Becker',
    'Vielen Dank für Ihre E-Mail',
    'Mit freundlichen Grüßen',
    'Ich freue mich auf Ihre Antwort',
    'Den Termin muss ich leider absagen',
    'Könnten Sie mich bitte zurückrufen',
    'Im Anhang finden Sie das Formular',
    'Bitte bestätigen Sie den Termin kurz',
    'Ich komme wegen eines Arzttermins später',
    'Ich würde gern einen neuen Termin vereinbaren',
    'Vielen Dank im Voraus',
    'Bitte bringen Sie Ihren Ausweis mit',
    'Ich habe die Unterlagen angehängt',
    'Leider kann ich heute nicht teilnehmen',
    'Könnten Sie mir weitere Informationen schicken',
    'Ich warte noch auf Ihre Antwort',
    'Ich freue mich auf unser Treffen',
    'Entschuldigen Sie bitte die Verspätung'
  ].forEach(sentence => schreibenQuestions.push(ordering(sentence)));

  [
    cloze('Ich komme später, ___ ich noch arbeite.', 'weil', 'Konnektor'),
    cloze('Ich bin krank, ___ bleibe ich zu Hause.', 'deshalb', 'Konnektor'),
    cloze('Zuerst frühstücke ich, ___ fahre ich zur Arbeit.', 'dann', 'Konnektor'),
    cloze('Er lernt viel, ___ besteht er die Prüfung.', 'deshalb', 'Konnektor'),
    cloze('Ich rufe dich an, ___ ich zu Hause bin.', 'wenn', 'Konnektor'),
    cloze('Wir gehen spazieren, ___ das Wetter schön ist.', 'weil', 'Konnektor'),
    cloze('Sie war müde, ___ hat sie weitergearbeitet.', 'trotzdem', 'Konnektor'),
    cloze('Ich schicke die Mail, ___ ich den Anhang geprüft habe.', 'nachdem', 'Konnektor'),
    cloze('___ ich Zeit habe, lese ich gern.', 'Wenn', 'Konnektor'),
    cloze('Er konnte nicht kommen, ___ sein Zug Verspätung hatte.', 'weil', 'Konnektor'),
    cloze('Zuerst reservieren wir, ___ fahren wir los.', 'danach', 'Konnektor'),
    cloze('Sie lernt Deutsch, ___ sie in Berlin arbeitet.', 'weil', 'Konnektor'),
    cloze('Ich nehme den Bus, ___ mein Fahrrad kaputt ist.', 'weil', 'Konnektor'),
    cloze('Er war pünktlich, ___ der Verkehr schlecht war.', 'obwohl', 'Konnektor'),
    cloze('Wir treffen uns, ___ der Kurs zu Ende ist.', 'wenn', 'Konnektor'),
    cloze('Ich bleibe zu Hause, ___ ich Fieber habe.', 'weil', 'Konnektor'),
    cloze('Sie ruft an, ___ sie Hilfe braucht.', 'wenn', 'Konnektor'),
    cloze('Ich antworte sofort, ___ ich die Nachricht lese.', 'wenn', 'Konnektor'),
    cloze('___ dem Meeting schreibe ich das Protokoll.', 'Nach', 'Zeitangabe'),
    cloze('___ dem Kurs trinken wir noch einen Kaffee.', 'Nach', 'Zeitangabe')
  ].forEach(q => schreibenQuestions.push(q));

  addChunked('schreiben', {
    idBase: 'exp_schreiben_mail',
    level: 'A2',
    partBase: 'Nachrichten',
    titleBase: 'E-Mails und kurze Texte',
    instructions: 'Wählen Sie die passende Formulierung oder ergänzen Sie die Lücke.',
    questions: schreibenQuestions,
    size: 7
  });

  const readingMcqTexts = [
    { text: 'Aushang: Der Aufzug ist heute außer Betrieb. Bitte benutzen Sie die Treppe.', qs: [['Was ist kaputt?', ['Die Treppe', 'Der Aufzug', 'Die Tür'], 1], ['Was sollen die Leute benutzen?', ['Die Treppe', 'Den Keller', 'Den Eingang B'], 0]] },
    { text: 'Notiz: Bitte Milch, Brot und Tomaten kaufen. Das Geld liegt auf dem Tisch.', qs: [['Was soll man kaufen?', ['Milch, Brot und Tomaten', 'Nur Brot', 'Obst und Wasser'], 0], ['Wo liegt das Geld?', ['In der Tasche', 'Auf dem Tisch', 'Im Auto'], 1]] },
    { text: 'Info: Der Kurs beginnt heute nicht um 18 Uhr, sondern erst um 18:30 Uhr.', qs: [['Wann beginnt der Kurs?', ['18 Uhr', '18:15 Uhr', '18:30 Uhr'], 2], ['Was hat sich geändert?', ['Der Ort', 'Die Uhrzeit', 'Der Lehrer'], 1]] },
    { text: 'Schild: Wegen Bauarbeiten ist Gleis 4 gesperrt. Bitte fahren Sie heute von Gleis 7.', qs: [['Welches Gleis ist gesperrt?', ['Gleis 4', 'Gleis 7', 'Gleis 3'], 0], ['Von wo fährt man heute?', ['Gleis 2', 'Gleis 7', 'Gleis 4'], 1]] },
    { text: 'E-Mail: Ich bin am Donnerstag im Homeoffice. Am Freitag bin ich wieder im Büro.', qs: [['Wo ist die Person am Donnerstag?', ['Im Büro', 'Im Homeoffice', 'Im Urlaub'], 1], ['Wann ist sie wieder im Büro?', ['Am Freitag', 'Am Mittwoch', 'Am Samstag'], 0]] },
    { text: 'Anzeige: Sprachkurs B1, dienstags und donnerstags von 19 bis 20:30 Uhr, Anmeldung online.', qs: [['Für welches Niveau ist der Kurs?', ['A1', 'B1', 'C1'], 1], ['Wie meldet man sich an?', ['Telefonisch', 'Per Brief', 'Online'], 2]] },
    { text: 'Hinweis: Heute nur Kartenzahlung möglich. Barzahlung ist leider nicht möglich.', qs: [['Wie kann man heute zahlen?', ['Nur bar', 'Nur mit Karte', 'Gar nicht'], 1], ['Was ist heute nicht möglich?', ['Kartenzahlung', 'Barzahlung', 'Online-Zahlung'], 1]] },
    { text: 'Nachricht: Wir treffen uns vor dem Kino um 19:45 Uhr. Der Film beginnt um 20 Uhr.', qs: [['Wo trifft man sich?', ['Im Kino', 'Vor dem Kino', 'Am Bahnhof'], 1], ['Wann beginnt der Film?', ['19:45 Uhr', '20 Uhr', '20:15 Uhr'], 1]] },
    { text: 'Aushang: Das Sekretariat bleibt am Montag geschlossen. Ab Dienstag sind wir wieder da.', qs: [['Wann ist das Sekretariat geschlossen?', ['Am Montag', 'Am Dienstag', 'Das ganze Wochenende'], 0], ['Ab wann ist es wieder offen?', ['Ab Mittwoch', 'Ab Dienstag', 'Ab Freitag'], 1]] },
    { text: 'Info: Bitte bringen Sie zum Termin Ihren Ausweis und die Krankenversicherungskarte mit.', qs: [['Was soll man mitbringen?', ['Nur den Ausweis', 'Einen Laptop', 'Ausweis und Versicherungskarte'], 2], ['Wofür ist die Information?', ['Für einen Termin', 'Für eine Reise', 'Für einen Sprachkurs'], 0]] },
    { text: 'Anzeige: Wohnung frei ab 1. August, 2 Zimmer, nahe Zentrum, 780 Euro warm.', qs: [['Wie viele Zimmer hat die Wohnung?', ['Ein Zimmer', 'Zwei Zimmer', 'Drei Zimmer'], 1], ['Ab wann ist die Wohnung frei?', ['Ab 1. August', 'Ab sofort', 'Ab 1. September'], 0]] },
    { text: 'Notiz: Papa, ich bin schon beim Zahnarzt. Das Essen steht im Kühlschrank.', qs: [['Wo ist die Person?', ['Beim Zahnarzt', 'In der Schule', 'Im Supermarkt'], 0], ['Wo ist das Essen?', ['Auf dem Tisch', 'Im Kühlschrank', 'Im Ofen'], 1]] }
  ];

  const lesenQuestions = [];
  readingMcqTexts.forEach(item => item.qs.forEach(q => lesenQuestions.push(mcq(item.text, q[0], q[1], q[2]))));

  [
    rf('E-Mail: Hallo Nina, ich komme morgen erst um 11 Uhr ins Büro, weil ich vorher einen Arzttermin habe. Den Bericht schicke ich dir heute Abend.', [{ s: 'Nina kommt morgen um 11 Uhr ins Büro.', answer: false }, { s: 'Die Person hat vorher einen Arzttermin.', answer: true }, { s: 'Der Bericht kommt heute Abend.', answer: true }, { s: 'Die Person bleibt morgen ganz zu Hause.', answer: false }]),
    rf('Aushang: Am Samstag ist das Schwimmbad von 8 bis 16 Uhr geöffnet. Kinder unter sechs Jahren haben freien Eintritt.', [{ s: 'Das Schwimmbad ist am Samstag geöffnet.', answer: true }, { s: 'Es schließt um 18 Uhr.', answer: false }, { s: 'Kinder unter sechs zahlen nichts.', answer: true }, { s: 'Der Text informiert über einen Supermarkt.', answer: false }]),
    rf('Nachricht: Ich nehme heute den späteren Zug und bin deshalb erst um 20:30 Uhr da. Bitte fangt ohne mich an.', [{ s: 'Die Person kommt um 20:30 Uhr an.', answer: true }, { s: 'Die anderen sollen warten.', answer: false }, { s: 'Die Person nimmt einen späteren Zug.', answer: true }, { s: 'Die Nachricht ist eine Einladung.', answer: false }]),
    rf('Formular: Name: Elena Rossi. Kurs: B1 Abendkurs. Tage: Dienstag und Donnerstag. Start: 5. September.', [{ s: 'Elena besucht einen B1-Kurs.', answer: true }, { s: 'Der Kurs ist montags und mittwochs.', answer: false }, { s: 'Der Kurs beginnt am 5. September.', answer: true }, { s: 'Es ist ein Morgenkurs.', answer: false }]),
    rf('Aushang: Wegen eines Stromausfalls bleibt die Bibliothek heute geschlossen. Bereits geliehene Bücher können morgen zurückgegeben werden.', [{ s: 'Die Bibliothek ist heute geschlossen.', answer: true }, { s: 'Man kann Bücher heute zurückgeben.', answer: false }, { s: 'Morgen kann man Bücher zurückgeben.', answer: true }, { s: 'Die Bibliothek ist wegen Ferien geschlossen.', answer: false }]),
    rf('E-Mail: Unser Teammeeting wurde von Mittwoch auf Freitag verschoben. Beginn bleibt 9 Uhr. Bitte bringen Sie die neuen Zahlen mit.', [{ s: 'Das Meeting ist jetzt am Freitag.', answer: true }, { s: 'Die Uhrzeit ändert sich auch.', answer: false }, { s: 'Man soll neue Zahlen mitbringen.', answer: true }, { s: 'Das Meeting fällt aus.', answer: false }]),
    rf('Anzeige: Fahrrad zu verkaufen, 3 Jahre alt, guter Zustand, 180 Euro. Besichtigung abends möglich.', [{ s: 'Das Fahrrad ist neu.', answer: false }, { s: 'Es kostet 180 Euro.', answer: true }, { s: 'Man kann es nur morgens anschauen.', answer: false }, { s: 'Der Zustand ist gut.', answer: true }]),
    rf('Mitteilung: Bitte geben Sie das Paket bis Freitag im Büro 204 ab. Frau Klein ist nächste Woche im Urlaub.', [{ s: 'Das Paket soll bis Freitag abgegeben werden.', answer: true }, { s: 'Es gehört ins Büro 402.', answer: false }, { s: 'Frau Klein ist nächste Woche im Urlaub.', answer: true }, { s: 'Die Mitteilung betrifft ein Treffen im Park.', answer: false }]),
    rf('Nachricht: Ich habe den Schlüssel unter die Fußmatte gelegt. Falls du später kommst, kannst du einfach reingehen.', [{ s: 'Der Schlüssel ist unter der Fußmatte.', answer: true }, { s: 'Man soll klingeln und warten.', answer: false }, { s: 'Späteres Kommen ist kein Problem.', answer: true }, { s: 'Die Tür ist abgeschlossen und niemand kann hinein.', answer: false }]),
    rf('Aushang: Heute ist Elternabend um 19 Uhr in Raum 12. Bitte bringen Sie das letzte Zeugnis Ihres Kindes mit.', [{ s: 'Der Elternabend beginnt um 19 Uhr.', answer: true }, { s: 'Er ist in Raum 21.', answer: false }, { s: 'Eltern sollen ein Zeugnis mitbringen.', answer: true }, { s: 'Nur die Kinder sollen kommen.', answer: false }])
  ].forEach(q => lesenQuestions.push(q));

  [
    { situations: ['Sie suchen einen Abendjob im Restaurant.', 'Sie möchten am Wochenende Deutsch lernen.', 'Sie brauchen eine Fahrradreparatur.', 'Ihr Kind möchte Klavier lernen.', 'Sie suchen eine kleine Wohnung.'], ads: [{ id: 'A', text: 'Zimmerwohnung, 45 m², zentrumsnah, ab sofort frei.' }, { id: 'B', text: 'Restaurant sucht Servicekraft für abends und am Wochenende.' }, { id: 'C', text: 'Musikschule: Klavierunterricht für Kinder ab 7 Jahren.' }, { id: 'D', text: 'Deutschkurs Sa/So, 10 bis 13 Uhr, A2 und B1.' }, { id: 'E', text: 'Fahrradwerkstatt, schnelle Reparaturen ohne Termin.' }], answers: [1, 3, 4, 2, 0] },
    { situations: ['Sie möchten Ihr Handy reparieren lassen.', 'Sie brauchen Blumen für einen Geburtstag.', 'Sie suchen eine günstige Übernachtung.', 'Sie möchten Englisch am Abend lernen.', 'Sie brauchen neue Laufschuhe.'], ads: [{ id: 'A', text: 'Hostel im Zentrum, Betten ab 28 Euro pro Nacht.' }, { id: 'B', text: 'Handy-Service, Displaywechsel in 30 Minuten.' }, { id: 'C', text: 'Blumenladen am Markt, täglich ab 8 Uhr geöffnet.' }, { id: 'D', text: 'Sportschuh-Sonderverkauf diese Woche.' }, { id: 'E', text: 'Abendkurs Englisch, montags und mittwochs 19 Uhr.' }], answers: [1, 2, 0, 4, 3] },
    { situations: ['Sie möchten am Samstag brunchen gehen.', 'Sie suchen Nachhilfe in Mathematik.', 'Sie brauchen einen Umzugswagen.', 'Sie möchten eine Brille kaufen.', 'Sie suchen einen Platz für Ihren Hund.'], ads: [{ id: 'A', text: 'Hundepension mit Tages- und Wochenbetreuung.' }, { id: 'B', text: 'Café Sonnig: Samstags großer Brunch von 10 bis 14 Uhr.' }, { id: 'C', text: 'Brillenstudio mit kostenloser Sehstärkeprüfung.' }, { id: 'D', text: 'Mathe-Nachhilfe für Schüler ab Klasse 7.' }, { id: 'E', text: 'Transporter-Vermietung stundenweise möglich.' }], answers: [1, 3, 4, 2, 0] },
    { situations: ['Sie möchten am Wochenende schwimmen gehen.', 'Sie suchen eine Sprachreise für den Sommer.', 'Sie brauchen Hilfe bei Ihrer Steuererklärung.', 'Sie möchten ein Fahrrad mieten.', 'Sie suchen vegetarisches Mittagessen.'], ads: [{ id: 'A', text: 'Steuerberatung Müller, Termine nach Vereinbarung.' }, { id: 'B', text: 'Veganes Bistro mit Mittagsmenü ab 12 Uhr.' }, { id: 'C', text: 'Ferien-Sprachreisen nach Wien und Salzburg.' }, { id: 'D', text: 'Stadtbad am Wochenende von 9 bis 18 Uhr geöffnet.' }, { id: 'E', text: 'Radstation am Bahnhof, Fahrräder tageweise mieten.' }], answers: [3, 2, 0, 4, 1] }
  ].forEach(set => lesenQuestions.push({ type: 'matching', situations: set.situations, ads: set.ads, answers: set.answers }));

  addChunked('lesen', { idBase: 'exp_lesen_alltag', level: 'A2', partBase: 'Alltag', titleBase: 'Alltagstexte und Hinweise', instructions: 'Lesen Sie die Texte und beantworten Sie die Fragen.', questions: lesenQuestions, size: 7 });

  const hearingMcqTexts = [
    { text: '„Hallo, hier ist Lena. Der Deutschkurs beginnt morgen schon um 8 Uhr, nicht um 9 Uhr.“', question: 'Wann beginnt der Kurs?', options: ['Um 8 Uhr', 'Um 9 Uhr', 'Um 10 Uhr'], answer: 0 },
    { text: '„Der Zug nach Köln fährt heute von Gleis 6. Bitte nicht zu Gleis 4 gehen.“', question: 'Von welchem Gleis fährt der Zug?', options: ['Gleis 4', 'Gleis 5', 'Gleis 6'], answer: 2 },
    { text: '„Ich bin schon im Supermarkt. Soll ich noch Milch und Eier kaufen?“', question: 'Wo ist die Person?', options: ['Im Büro', 'Im Supermarkt', 'Am Bahnhof'], answer: 1 },
    { text: '„Unser Termin ist am Donnerstag um halb drei. Bitte seien Sie pünktlich.“', question: 'Wann ist der Termin?', options: ['Donnerstag, 14:30 Uhr', 'Donnerstag, 15:30 Uhr', 'Freitag, 14:30 Uhr'], answer: 0 },
    { text: '„Im Restaurant ist heute nur Kartenzahlung möglich.“', question: 'Wie kann man zahlen?', options: ['Nur bar', 'Nur mit Karte', 'Gar nicht'], answer: 1 },
    { text: '„Der Arzt hat heute bis 17 Uhr Sprechstunde.“', question: 'Bis wann ist die Sprechstunde?', options: ['Bis 16 Uhr', 'Bis 17 Uhr', 'Bis 18 Uhr'], answer: 1 },
    { text: '„Bitte bringen Sie morgen Ihren Pass und ein Foto mit.“', question: 'Was soll man mitbringen?', options: ['Nur Geld', 'Pass und Foto', 'Eine Tasche'], answer: 1 },
    { text: '„Der Bus hat zehn Minuten Verspätung.“', question: 'Wie lange verspätet sich der Bus?', options: ['Fünf Minuten', 'Zehn Minuten', 'Zwanzig Minuten'], answer: 1 },
    { text: '„Ich kann heute leider nicht kommen, weil ich krank bin.“', question: 'Warum kommt die Person nicht?', options: ['Wegen Arbeit', 'Wegen Krankheit', 'Wegen Urlaub'], answer: 1 },
    { text: '„Wir treffen uns vor dem Kino um Viertel nach sieben.“', question: 'Wann ist das Treffen?', options: ['19:15 Uhr', '19:45 Uhr', '18:15 Uhr'], answer: 0 },
    { text: '„Das Paket liegt bei Frau Sommer im dritten Stock.“', question: 'Wo ist das Paket?', options: ['Im Erdgeschoss', 'Bei Frau Sommer im dritten Stock', 'Im Auto'], answer: 1 },
    { text: '„Nach dem Meeting schicke ich dir sofort die Unterlagen.“', question: 'Wann kommen die Unterlagen?', options: ['Vor dem Meeting', 'Nach dem Meeting', 'Nächste Woche'], answer: 1 },
    { text: '„Im Museum ist der Eintritt für Kinder heute frei.“', question: 'Wer zahlt heute keinen Eintritt?', options: ['Alle Erwachsenen', 'Kinder', 'Niemand'], answer: 1 },
    { text: '„Bitte steigen Sie in München in den Regionalzug um.“', question: 'Was soll man in München tun?', options: ['Aussteigen und nach Hause gehen', 'Umsteigen', 'Auf den Bus warten'], answer: 1 },
    { text: '„Die Besprechung wurde auf Montag verschoben.“', question: 'Wann ist die Besprechung jetzt?', options: ['Am Freitag', 'Am Montag', 'Am Dienstag'], answer: 1 },
    { text: '„Im Hotel ist Frühstück von sieben bis zehn Uhr.“', question: 'Wann gibt es Frühstück?', options: ['7 bis 10 Uhr', '8 bis 11 Uhr', '6 bis 9 Uhr'], answer: 0 },
    { text: '„Ich habe den Schlüssel unter den Briefkasten gelegt.“', question: 'Wo ist der Schlüssel?', options: ['Unter dem Briefkasten', 'Im Briefkasten', 'Unter der Matte'], answer: 0 },
    { text: '„Heute Abend gibt es im Park ein kostenloses Konzert.“', question: 'Was ist heute Abend im Park?', options: ['Ein Markt', 'Ein kostenloses Konzert', 'Ein Fußballspiel'], answer: 1 },
    { text: '„Bitte warten Sie kurz, ich verbinde Sie mit Herrn Weber.“', question: 'Was passiert als Nächstes?', options: ['Das Gespräch endet', 'Die Person wird verbunden', 'Man schreibt eine E-Mail'], answer: 1 },
    { text: '„Der Aufzug ist kaputt. Bitte benutzen Sie die Treppe.“', question: 'Was soll man benutzen?', options: ['Die Rolltreppe', 'Die Treppe', 'Den Hintereingang'], answer: 1 }
  ];

  const hoerenQuestions = hearingMcqTexts.map(item => mcq(item.text, item.question, item.options, item.answer));

  [
    rf('„Anna: Ich komme heute erst um 18 Uhr nach Hause. Ben: Gut, dann koche ich schon.“', [{ s: 'Anna kommt um 18 Uhr nach Hause.', answer: true }, { s: 'Ben kocht schon vorher.', answer: true }, { s: 'Anna kommt um 16 Uhr.', answer: false }, { s: 'Beide gehen ins Restaurant.', answer: false }]),
    rf('„Der Flug nach Wien startet pünktlich um 13:20 Uhr an Gate B12.“', [{ s: 'Der Flug geht nach Wien.', answer: true }, { s: 'Der Start ist verspätet.', answer: false }, { s: 'Das Gate ist B12.', answer: true }, { s: 'Der Flug startet um 12:20 Uhr.', answer: false }]),
    rf('„Im Sprachzentrum ist heute Anmeldung bis 15 Uhr möglich. Danach ist das Büro geschlossen.“', [{ s: 'Man kann sich heute bis 15 Uhr anmelden.', answer: true }, { s: 'Das Büro bleibt danach offen.', answer: false }, { s: 'Es geht um eine Anmeldung.', answer: true }, { s: 'Die Meldung betrifft ein Schwimmbad.', answer: false }]),
    rf('„Mara hat Fieber und bleibt heute im Bett. Den Termin sagt sie per Mail ab.“', [{ s: 'Mara ist krank.', answer: true }, { s: 'Sie geht heute arbeiten.', answer: false }, { s: 'Sie sagt den Termin per Mail ab.', answer: true }, { s: 'Sie schreibt eine Postkarte.', answer: false }]),
    rf('„Die Bahn nach Hamburg fährt heute nicht. Bitte nehmen Sie den Ersatzbus vor dem Bahnhof.“', [{ s: 'Die Bahn nach Hamburg fährt heute nicht.', answer: true }, { s: 'Man soll einen Ersatzbus nehmen.', answer: true }, { s: 'Der Ersatzbus steht hinter dem Bahnhof.', answer: false }, { s: 'Die Durchsage betrifft eine Straßenbahn.', answer: false }]),
    rf('„Morgen wird das Wasser von 8 bis 12 Uhr abgestellt. Bitte füllen Sie heute genug Wasser ab.“', [{ s: 'Morgen gibt es zwischen 8 und 12 Uhr kein Wasser.', answer: true }, { s: 'Man soll heute Wasser vorbereiten.', answer: true }, { s: 'Heute wird das Wasser abgestellt.', answer: false }, { s: 'Die Mitteilung betrifft Strom.', answer: false }]),
    rf('„Im Fitnessstudio ist der Yogakurs heute im Raum 3 und beginnt um 19 Uhr.“', [{ s: 'Der Yogakurs ist heute in Raum 3.', answer: true }, { s: 'Er beginnt um 18 Uhr.', answer: false }, { s: 'Es geht um einen Yogakurs.', answer: true }, { s: 'Der Kurs fällt aus.', answer: false }]),
    rf('„Paul: Soll ich Brot mitbringen? Mia: Nein, bitte kauf lieber Obst und Wasser.“', [{ s: 'Paul soll Brot kaufen.', answer: false }, { s: 'Mia möchte Obst und Wasser.', answer: true }, { s: 'Es geht um Einkaufen.', answer: true }, { s: 'Paul soll nichts mitbringen.', answer: false }]),
    rf('„Der Arzttermin von Frau Keller wurde auf Mittwoch verschoben. Die Uhrzeit bleibt 10 Uhr.“', [{ s: 'Der Termin ist jetzt am Mittwoch.', answer: true }, { s: 'Die Uhrzeit bleibt gleich.', answer: true }, { s: 'Der Termin ist jetzt am Donnerstag.', answer: false }, { s: 'Die Uhrzeit wurde auf 11 Uhr verschoben.', answer: false }]),
    rf('„Bitte legen Sie die Pakete nicht vor die Tür, sondern geben Sie sie beim Nachbarn im zweiten Stock ab.“', [{ s: 'Die Pakete sollen vor die Tür gelegt werden.', answer: false }, { s: 'Sie sollen beim Nachbarn abgegeben werden.', answer: true }, { s: 'Der Nachbar wohnt im zweiten Stock.', answer: true }, { s: 'Es geht um Briefe im Keller.', answer: false }])
  ].forEach(q => hoerenQuestions.push(q));

  [
    { situation: 'Sie hören: „Bitte warten Sie am Apparat.“ Was sollen Sie tun?', correct: 'Am Telefon warten.' },
    { situation: 'Sie hören: „Bitte steigen Sie hier aus.“ Was machen Sie?', correct: 'Hier aussteigen.' },
    { situation: 'Sie hören: „Das Formular ist unvollständig.“ Was brauchen Sie?', correct: 'Mehr Angaben im Formular.' },
    { situation: 'Sie hören: „Der Kursraum hat sich geändert.“ Was ist neu?', correct: 'Der Raum.' },
    { situation: 'Sie hören: „Bitte bringen Sie Wechselgeld mit.“ Was sollen Sie dabeihaben?', correct: 'Kleingeld.' },
    { situation: 'Sie hören: „Die Lieferung kommt zwischen neun und elf.“ Was wissen Sie?', correct: 'Die Lieferung kommt am Vormittag.' },
    { situation: 'Sie hören: „Wir treffen uns am Haupteingang.“ Wo warten Sie?', correct: 'Am Haupteingang.' },
    { situation: 'Sie hören: „Das Gerät ist bereits reserviert.“ Was bedeutet das?', correct: 'Jemand anderes hat es schon gebucht.' },
    { situation: 'Sie hören: „Bitte gehen Sie zur Kasse zwei.“ Wohin gehen Sie?', correct: 'Zur Kasse zwei.' },
    { situation: 'Sie hören: „Die Antwort bekommen Sie morgen per Mail.“ Wann kommt die Antwort?', correct: 'Morgen.' },
    { situation: 'Sie hören: „Das Restaurant schließt heute früher.“ Was passiert?', correct: 'Es macht früher zu.' },
    { situation: 'Sie hören: „Der Aufzug fährt heute nicht.“ Was nehmen Sie?', correct: 'Die Treppe.' },
    { situation: 'Sie hören: „Bitte setzen Sie sich kurz.“ Was tun Sie?', correct: 'Sich setzen.' },
    { situation: 'Sie hören: „Das Medikament nehmen Sie nach dem Essen.“ Wann nehmen Sie es?', correct: 'Nach dem Essen.' },
    { situation: 'Sie hören: „Die Nummer ist leider nicht vergeben.“ Was bedeutet das?', correct: 'Die Telefonnummer funktioniert nicht.' },
    { situation: 'Sie hören: „Die Zahlung wurde bestätigt.“ Was ist passiert?', correct: 'Das Geld ist angekommen.' },
    { situation: 'Sie hören: „Die Tür schließt automatisch.“ Worauf achten Sie?', correct: 'Dass die Tür von selbst zugeht.' },
    { situation: 'Sie hören: „Bitte tragen Sie hier eine Maske.“ Was ist Pflicht?', correct: 'Eine Maske tragen.' },
    { situation: 'Sie hören: „Der Termin dauert ungefähr zwanzig Minuten.“ Wie lange dauert er?', correct: 'Etwa zwanzig Minuten.' },
    { situation: 'Sie hören: „Das Angebot gilt nur heute.“ Wann ist es gültig?', correct: 'Nur heute.' }
  ].forEach((item, index, arr) => {
    const distractors = pickDistractors(arr, index, 'correct');
    const options = [item.correct, ...distractors];
    const rotated = options.slice(index % options.length).concat(options.slice(0, index % options.length));
    hoerenQuestions.push(situational(item.situation, rotated, rotated.indexOf(item.correct)));
  });

  addChunked('hoeren', { idBase: 'exp_hoeren_alltag', level: 'A2', partBase: 'Kurzdialoge', titleBase: 'Hören im Alltag', instructions: 'Hören Sie zu und wählen Sie die passende Antwort.', questions: hoerenQuestions, size: 7 });

  const extraStructuresQuestions = [
    cloze('Gestern habe ich lange ___ .', 'gearbeitet', 'Perfekt'),
    cloze('Am Samstag habe ich Freunde ___ .', 'besucht', 'Perfekt'),
    cloze('Wir haben zusammen Pizza ___ .', 'gegessen', 'Perfekt'),
    cloze('Sie hat mir sofort ___ .', 'geantwortet', 'Perfekt'),
    cloze('Ich habe den Termin leider ___ .', 'vergessen', 'Perfekt'),
    cloze('Er hat sein Handy zu Hause ___ .', 'gelassen', 'Perfekt'),
    cloze('Wir haben die Rechnung schon ___ .', 'bezahlt', 'Perfekt'),
    cloze('Habt ihr das Formular schon ___ ?', 'ausgefüllt', 'Perfekt'),
    cloze('Ich bin gestern nach Hause ___ .', 'gegangen', 'Perfekt'),
    cloze('Sie ist sehr früh ___ .', 'aufgestanden', 'Perfekt'),
    cloze('Wir sind mit dem Zug nach Köln ___ .', 'gefahren', 'Perfekt'),
    cloze('Er ist zu spät ___ .', 'gekommen', 'Perfekt'),
    cloze('Die Kinder sind schnell ins Wasser ___ .', 'gesprungen', 'Perfekt'),
    cloze('Ich bin gestern im Büro ___ .', 'geblieben', 'Perfekt'),
    cloze('Wann seid ihr nach Berlin ___ ?', 'gefahren', 'Perfekt'),
    cloze('Meine Schwester ist schon nach Hause ___ .', 'gelaufen', 'Perfekt'),
    cloze('Ich rufe dich später ___ .', 'an', 'Trennbares Verb'),
    cloze('Der Zug fährt um 6 Uhr ___ .', 'ab', 'Trennbares Verb'),
    cloze('Bitte füllen Sie das Formular ___ .', 'aus', 'Trennbares Verb'),
    cloze('Wir steigen in München ___ .', 'um', 'Trennbares Verb'),
    cloze('Kannst du morgen vorbei ___ ?', 'kommen', 'Trennbares Verb'),
    cloze('Ich kaufe heute im Supermarkt ___ .', 'ein', 'Trennbares Verb'),
    cloze('Sie macht das Fenster ___ .', 'auf', 'Trennbares Verb'),
    cloze('Er sieht am Wochenende seine Eltern ___ .', 'wieder', 'Trennbares Verb'),
    cloze('Wann fängt der Film ___ ?', 'an', 'Trennbares Verb'),
    cloze('Wir räumen das Zimmer heute ___ .', 'auf', 'Trennbares Verb'),
    cloze('Bitte bring morgen deinen Ausweis ___ .', 'mit', 'Trennbares Verb'),
    cloze('Das Meeting fällt heute ___ .', 'aus', 'Trennbares Verb'),
    cloze('___ kommst du heute zur Arbeit?', 'Wie', 'Fragewort'),
    cloze('___ fängt der Kurs an?', 'Wann', 'Fragewort'),
    cloze('___ ist deine Lehrerin?', 'Wer', 'Fragewort'),
    cloze('___ kostet das Ticket?', 'Was', 'Fragewort'),
    cloze('___ wohnst du jetzt?', 'Wo', 'Fragewort'),
    cloze('___ gehst du am Wochenende?', 'Wohin', 'Fragewort'),
    cloze('___ lernst du Deutsch?', 'Warum', 'Fragewort'),
    cloze('___ lange dauert der Kurs?', 'Wie', 'Fragewort'),
    cloze('___ Uhr ist es?', 'Wie viel', 'Fragewort'),
    cloze('___ Buch gehört dir?', 'Welches', 'Fragewort'),
    cloze('___ oft gehst du ins Fitnessstudio?', 'Wie', 'Fragewort'),
    cloze('___ Mantel findest du schöner?', 'Welchen', 'Fragewort'),
    cloze('___ kommst du gerade?', 'Woher', 'Fragewort'),
    cloze('___ sieht dein neuer Chef aus?', 'Wie', 'Fragewort'),
    cloze('___ Tage bleibst du in Wien?', 'Wie viele', 'Fragewort'),
    cloze('___ brauchst du für den Antrag?', 'Was', 'Fragewort'),
    cloze('___ hilft dir bei den Hausaufgaben?', 'Wer', 'Fragewort'),
    cloze('___ Telefon klingelt da?', 'Wessen', 'Fragewort'),
    cloze('___ Bus muss ich nehmen?', 'Welchen', 'Fragewort'),
    cloze('___ beginnt dein Urlaub?', 'Wann', 'Fragewort'),
    cloze('___ reden die beiden im Flur?', 'Worüber', 'Fragewort'),
    cloze('___ sprichst du so leise?', 'Warum', 'Fragewort')
  ];

  addChunked('strukturen', { idBase: 'exp_strukturen_extra', level: 'A2', partBase: 'Grammatik Plus', titleBase: 'Perfekt und Fragewörter', instructions: 'Ergänzen Sie die richtige Form.', questions: extraStructuresQuestions, size: 7 });

  const extraPhraseBank = [
    { situation: 'Sie möchten fragen, ob der Platz noch frei ist.', phrase: 'Ist hier noch frei?', clozeSentence: 'Ist hier noch ___?', clozeAnswer: 'frei' },
    { situation: 'Sie möchten sagen, dass Sie nur kurz warten.', phrase: 'Ich warte nur kurz.', clozeSentence: 'Ich warte nur ___.', clozeAnswer: 'kurz' },
    { situation: 'Sie möchten um die Speisekarte bitten.', phrase: 'Könnte ich bitte die Speisekarte bekommen?', clozeSentence: 'Könnte ich bitte die ___ bekommen?', clozeAnswer: 'Speisekarte' },
    { situation: 'Sie möchten am Bahnhof nach der Abfahrt fragen.', phrase: 'Wann fährt der nächste Regionalzug?', clozeSentence: 'Wann fährt der nächste ___?', clozeAnswer: 'Regionalzug' },
    { situation: 'Sie möchten sagen, dass Sie reserviert haben.', phrase: 'Ich habe auf den Namen Weber reserviert.', clozeSentence: 'Ich habe auf den Namen Weber ___.', clozeAnswer: 'reserviert' },
    { situation: 'Sie möchten höflich nach dem WLAN fragen.', phrase: 'Gibt es hier WLAN?', clozeSentence: 'Gibt es hier ___?', clozeAnswer: 'WLAN' },
    { situation: 'Sie möchten fragen, ob man draußen sitzen kann.', phrase: 'Kann man auch draußen sitzen?', clozeSentence: 'Kann man auch draußen ___?', clozeAnswer: 'sitzen' },
    { situation: 'Sie möchten sagen, dass Sie kein Kleingeld haben.', phrase: 'Ich habe leider kein Kleingeld dabei.', clozeSentence: 'Ich habe leider kein ___ dabei.', clozeAnswer: 'Kleingeld' },
    { situation: 'Sie möchten um einen Kassenbon bitten.', phrase: 'Könnte ich bitte den Kassenbon haben?', clozeSentence: 'Könnte ich bitte den ___ haben?', clozeAnswer: 'Kassenbon' },
    { situation: 'Sie möchten sagen, dass Sie nur schauen.', phrase: 'Ich schaue mich nur um.', clozeSentence: 'Ich schaue mich nur ___.', clozeAnswer: 'um' },
    { situation: 'Sie möchten sagen, dass Sie noch überlegen.', phrase: 'Ich überlege es mir noch.', clozeSentence: 'Ich überlege es mir ___.', clozeAnswer: 'noch' },
    { situation: 'Sie möchten nach einer Quittung fragen.', phrase: 'Bekomme ich dafür eine Quittung?', clozeSentence: 'Bekomme ich dafür eine ___?', clozeAnswer: 'Quittung' },
    { situation: 'Sie möchten sagen, dass Sie allergisch gegen Nüsse sind.', phrase: 'Ich bin allergisch gegen Nüsse.', clozeSentence: 'Ich bin allergisch gegen ___.', clozeAnswer: 'Nüsse' },
    { situation: 'Sie möchten nach dem Preis pro Nacht fragen.', phrase: 'Wie viel kostet das pro Nacht?', clozeSentence: 'Wie viel kostet das pro ___?', clozeAnswer: 'Nacht' },
    { situation: 'Sie möchten höflich nach dem Ausgang fragen.', phrase: 'Wo geht es hier zum Ausgang?', clozeSentence: 'Wo geht es hier zum ___?', clozeAnswer: 'Ausgang' },
    { situation: 'Sie möchten sagen, dass Sie einen Fensterplatz möchten.', phrase: 'Ich hätte gern einen Platz am Fenster.', clozeSentence: 'Ich hätte gern einen Platz am ___.', clozeAnswer: 'Fenster' },
    { situation: 'Sie möchten fragen, ob das pünktlich ankommt.', phrase: 'Kommt das pünktlich an?', clozeSentence: 'Kommt das pünktlich ___?', clozeAnswer: 'an' },
    { situation: 'Sie möchten freundlich ablehnen.', phrase: 'Nein danke, das brauche ich nicht.', clozeSentence: 'Nein danke, das brauche ich ___.', clozeAnswer: 'nicht' },
    { situation: 'Sie möchten sagen, dass Sie etwas umtauschen möchten.', phrase: 'Ich möchte das gern umtauschen.', clozeSentence: 'Ich möchte das gern ___.', clozeAnswer: 'umtauschen' },
    { situation: 'Sie möchten nach einer Apotheke fragen.', phrase: 'Gibt es hier in der Nähe eine Apotheke?', clozeSentence: 'Gibt es hier in der Nähe eine ___?', clozeAnswer: 'Apotheke' },
    { situation: 'Sie möchten bitten, das Fenster zu schließen.', phrase: 'Könnten Sie bitte das Fenster schließen?', clozeSentence: 'Könnten Sie bitte das Fenster ___?', clozeAnswer: 'schließen' },
    { situation: 'Sie möchten sagen, dass Sie Hilfe beim Tragen brauchen.', phrase: 'Könnten Sie mir kurz beim Tragen helfen?', clozeSentence: 'Könnten Sie mir kurz beim Tragen ___?', clozeAnswer: 'helfen' },
    { situation: 'Sie möchten fragen, ob der Platz reserviert ist.', phrase: 'Ist dieser Platz reserviert?', clozeSentence: 'Ist dieser Platz ___?', clozeAnswer: 'reserviert' },
    { situation: 'Sie möchten sagen, dass Sie später zurückkommen.', phrase: 'Ich komme später noch einmal zurück.', clozeSentence: 'Ich komme später noch einmal ___.', clozeAnswer: 'zurück' },
    { situation: 'Sie möchten nach dem günstigsten Ticket fragen.', phrase: 'Was ist das günstigste Ticket?', clozeSentence: 'Was ist das günstigste ___?', clozeAnswer: 'Ticket' },
    { situation: 'Sie möchten um Leitungswasser bitten.', phrase: 'Könnte ich bitte ein Glas Leitungswasser bekommen?', clozeSentence: 'Könnte ich bitte ein Glas ___ bekommen?', clozeAnswer: 'Leitungswasser' },
    { situation: 'Sie möchten sagen, dass Sie nur kurz telefonieren.', phrase: 'Ich telefoniere nur ganz kurz.', clozeSentence: 'Ich telefoniere nur ganz ___.', clozeAnswer: 'kurz' },
    { situation: 'Sie möchten nach dem Umkleideraum fragen.', phrase: 'Wo ist der Umkleideraum?', clozeSentence: 'Wo ist der ___?', clozeAnswer: 'Umkleideraum' },
    { situation: 'Sie möchten sagen, dass Sie später Bescheid geben.', phrase: 'Ich gebe Ihnen später Bescheid.', clozeSentence: 'Ich gebe Ihnen später ___.', clozeAnswer: 'Bescheid' },
    { situation: 'Sie möchten höflich sagen, dass etwas dringend ist.', phrase: 'Das wäre ziemlich dringend.', clozeSentence: 'Das wäre ziemlich ___.', clozeAnswer: 'dringend' },
    { situation: 'Sie möchten fragen, ob das Angebot noch gilt.', phrase: 'Gilt das Angebot noch?', clozeSentence: 'Gilt das Angebot ___?', clozeAnswer: 'noch' },
    { situation: 'Sie möchten sagen, dass Sie lieber innen sitzen.', phrase: 'Ich sitze heute lieber drinnen.', clozeSentence: 'Ich sitze heute lieber ___.', clozeAnswer: 'drinnen' },
    { situation: 'Sie möchten nach einer Pause fragen.', phrase: 'Wann machen wir eine Pause?', clozeSentence: 'Wann machen wir eine ___?', clozeAnswer: 'Pause' },
    { situation: 'Sie möchten sagen, dass Sie gleich zurück sind.', phrase: 'Ich bin gleich wieder da.', clozeSentence: 'Ich bin gleich wieder ___.', clozeAnswer: 'da' },
    { situation: 'Sie möchten nach einem günstigeren Modell fragen.', phrase: 'Haben Sie auch ein günstigeres Modell?', clozeSentence: 'Haben Sie auch ein günstigeres ___?', clozeAnswer: 'Modell' }
  ];

  const moreWortschatzQuestions = [];
  extraPhraseBank.forEach((item, index) => {
    const distractors = pickDistractors(extraPhraseBank, index, 'phrase');
    const options = [item.phrase, ...distractors];
    const rotated = options.slice((index + 1) % options.length).concat(options.slice(0, (index + 1) % options.length));
    moreWortschatzQuestions.push(situational(item.situation, rotated, rotated.indexOf(item.phrase)));
    moreWortschatzQuestions.push(cloze(item.clozeSentence, item.clozeAnswer, 'Alltagssprache'));
  });

  addChunked('wortschatz', { idBase: 'exp_wortschatz_service', level: 'A2', partBase: 'Service und Alltag', titleBase: 'Praktische Redemittel', instructions: 'Wählen Sie die passende Redewendung oder ergänzen Sie die Lücke.', questions: moreWortschatzQuestions, size: 7 });

  const extraSchreibenQuestions = [
    ordering('Könnten Sie mir bitte kurz antworten'),
    ordering('Vielen Dank für Ihre schnelle Rückmeldung'),
    ordering('Ich würde den Termin gern verschieben'),
    ordering('Im Anhang sende ich Ihnen die Unterlagen'),
    ordering('Leider kann ich heute nicht teilnehmen'),
    ordering('Bitte geben Sie mir bis Freitag Bescheid'),
    ordering('Ich freue mich auf das Gespräch'),
    ordering('Entschuldigen Sie bitte die kurze Nachricht'),
    ordering('Könnten wir einen neuen Termin vereinbaren'),
    ordering('Ich melde mich morgen noch einmal'),
    ordering('Bitte schicken Sie mir die Rechnung per Mail'),
    ordering('Wegen eines Arzttermins komme ich später'),
    ordering('Vielen Dank im Voraus für Ihre Hilfe'),
    ordering('Ich hoffe auf Ihr Verständnis'),
    ordering('Mit freundlichen Grüßen'),
    cloze('Ich schreibe Ihnen, ___ ich eine Frage habe.', 'weil', 'Konnektor'),
    cloze('___ Sie Zeit haben, rufen Sie mich bitte an.', 'Wenn', 'Konnektor'),
    cloze('Ich komme später, ___ der Bus Verspätung hat.', 'weil', 'Konnektor'),
    cloze('___ dem Termin schicke ich Ihnen die Unterlagen.', 'Nach', 'Zeitangabe'),
    cloze('Ich kann heute nicht kommen, ___ ich krank bin.', 'weil', 'Konnektor'),
    cloze('___ ich zu Hause bin, antworte ich Ihnen sofort.', 'Wenn', 'Konnektor'),
    cloze('Zuerst lese ich die Mail, ___ antworte ich.', 'dann', 'Konnektor'),
    cloze('Er war müde, ___ hat er weitergearbeitet.', 'trotzdem', 'Konnektor'),
    cloze('Ich brauche die Daten, ___ ich den Bericht fertig machen kann.', 'damit', 'Konnektor'),
    cloze('Bitte melden Sie sich, ___ Sie Fragen haben.', 'wenn', 'Konnektor'),
    cloze('Wir müssen pünktlich anfangen, ___ der Raum nur bis 12 Uhr frei ist.', 'weil', 'Konnektor'),
    cloze('___ dem Gespräch notiere ich mir die wichtigsten Punkte.', 'Nach', 'Zeitangabe'),
    cloze('Ich bleibe zu Hause, ___ das Wetter so schlecht ist.', 'weil', 'Konnektor'),
    cloze('___ Sie möchten, kann ich das noch einmal erklären.', 'Wenn', 'Konnektor'),
    cloze('Sie war krank, ___ konnte sie nicht kommen.', 'deshalb', 'Konnektor'),
    cloze('Wir treffen uns, ___ alle da sind.', 'wenn', 'Konnektor'),
    cloze('Ich schreibe Ihnen noch heute, ___ Sie nicht warten müssen.', 'damit', 'Konnektor'),
    cloze('___ der Besprechung trinken wir noch einen Kaffee.', 'Nach', 'Zeitangabe'),
    cloze('Ich rufe Sie an, ___ ich die Antwort habe.', 'wenn', 'Konnektor'),
    cloze('Er lernt viel, ___ er die Prüfung bestehen will.', 'weil', 'Konnektor')
  ];

  addChunked('schreiben', { idBase: 'exp_schreiben_extra', level: 'A2', partBase: 'Textbausteine', titleBase: 'Konnektoren und Satzbau', instructions: 'Ordnen Sie die Wörter oder ergänzen Sie die passende Form.', questions: extraSchreibenQuestions, size: 7 });

  const extraHoerenQuestions = [
    mcq('„Der Termin beim Bürgeramt ist am Freitag um 10:40 Uhr.“', 'Wann ist der Termin?', ['Freitag, 10:40 Uhr', 'Freitag, 10:14 Uhr', 'Donnerstag, 10:40 Uhr'], 0),
    mcq('„Bitte holen Sie Ihr Paket bis morgen Abend ab.“', 'Bis wann soll man das Paket abholen?', ['Bis morgen Abend', 'Bis heute Abend', 'Bis nächste Woche'], 0),
    mcq('„Das Seminar findet heute in Raum 208 statt.“', 'Wo ist das Seminar?', ['In Raum 208', 'In Raum 108', 'Im Foyer'], 0),
    mcq('„Wir haben heute geschlossen und öffnen morgen wieder um neun.“', 'Wann öffnet der Ort wieder?', ['Heute um neun', 'Morgen um neun', 'Morgen um acht'], 1),
    mcq('„Bitte schicken Sie den Vertrag unterschrieben zurück.“', 'Was soll man mit dem Vertrag tun?', ['Ausdrucken und behalten', 'Unterschrieben zurückschicken', 'Im Büro abholen'], 1),
    mcq('„Die Führung dauert ungefähr eine Stunde.“', 'Wie lange dauert die Führung?', ['Etwa eine Stunde', 'Zwei Stunden', 'Eine halbe Stunde'], 0),
    mcq('„Im Kursraum ist Essen nicht erlaubt.“', 'Was ist im Kursraum nicht erlaubt?', ['Trinken', 'Essen', 'Sprechen'], 1),
    mcq('„Die Apotheke ist gleich links neben der Bank.“', 'Wo ist die Apotheke?', ['Rechts neben der Bank', 'Links neben der Bank', 'Gegenüber vom Bahnhof'], 1),
    mcq('„Der Techniker kommt morgen zwischen acht und zehn.“', 'Wann kommt der Techniker?', ['Zwischen 8 und 10 Uhr', 'Zwischen 10 und 12 Uhr', 'Heute Abend'], 0),
    mcq('„Der Kaffee ist im Preis schon inbegriffen.“', 'Was ist schon im Preis enthalten?', ['Das Frühstück', 'Der Kaffee', 'Das Parken'], 1),
    mcq('„Bitte nehmen Sie im Wartezimmer Platz.“', 'Wo soll man Platz nehmen?', ['Im Büro', 'Im Wartezimmer', 'Vor der Tür'], 1),
    mcq('„Das Konzert beginnt mit zwanzig Minuten Verzögerung.“', 'Was bedeutet das?', ['Es beginnt pünktlich', 'Es beginnt 20 Minuten später', 'Es fällt aus'], 1),
    mcq('„Sie können den Schlüssel an der Rezeption abholen.“', 'Wo bekommt man den Schlüssel?', ['An der Rezeption', 'Im Zimmer', 'Beim Restaurant'], 0),
    mcq('„Bitte unterschreiben Sie unten rechts.“', 'Wo soll man unterschreiben?', ['Oben links', 'Unten rechts', 'In der Mitte'], 1),
    mcq('„Der nächste freie Termin wäre am 18. Mai.“', 'Wann ist der nächste freie Termin?', ['Am 8. Mai', 'Am 18. Mai', 'Am 28. Mai'], 1),
    rf('„Bitte bewahren Sie den Bon auf. Umtausch ist nur mit Bon möglich.“', [{ s: 'Man braucht den Bon für einen Umtausch.', answer: true }, { s: 'Ohne Bon ist Umtausch möglich.', answer: false }, { s: 'Man soll den Bon aufbewahren.', answer: true }, { s: 'Es geht um einen Arzttermin.', answer: false }]),
    rf('„Der Kurs startet nächste Woche. Das Lehrbuch kaufen Sie bitte erst am ersten Kurstag.“', [{ s: 'Der Kurs beginnt nächste Woche.', answer: true }, { s: 'Das Lehrbuch soll man sofort kaufen.', answer: false }, { s: 'Das Buch kauft man am ersten Kurstag.', answer: true }, { s: 'Die Durchsage ist für eine Zugfahrt.', answer: false }]),
    rf('„Heute ist die Straße gesperrt. Bitte benutzen Sie die Umleitung über die Gartenstraße.“', [{ s: 'Die Straße ist heute gesperrt.', answer: true }, { s: 'Man soll die Umleitung benutzen.', answer: true }, { s: 'Die Umleitung geht über die Bahnhofstraße.', answer: false }, { s: 'Es geht um ein Museum.', answer: false }]),
    rf('„Die Sprechstunde fällt heute aus. In dringenden Fällen rufen Sie bitte diese Nummer an.“', [{ s: 'Heute gibt es keine Sprechstunde.', answer: true }, { s: 'In dringenden Fällen soll man anrufen.', answer: true }, { s: 'Man soll morgen persönlich vorbeigehen.', answer: false }, { s: 'Es geht um einen Supermarkt.', answer: false }]),
    rf('„Das Paket wird morgen zwischen 12 und 14 Uhr geliefert. Bitte stellen Sie sicher, dass jemand zu Hause ist.“', [{ s: 'Die Lieferung kommt morgen.', answer: true }, { s: 'Sie kommt zwischen 12 und 14 Uhr.', answer: true }, { s: 'Niemand muss zu Hause sein.', answer: false }, { s: 'Das Paket kommt heute Abend.', answer: false }])
  ];

  addChunked('hoeren', { idBase: 'exp_hoeren_extra', level: 'A2', partBase: 'Durchsagen', titleBase: 'Mehr Hören im Alltag', instructions: 'Hören Sie zu und beantworten Sie die Fragen.', questions: extraHoerenQuestions, size: 7 });

  QUIZ_BANK.strukturen.push({
    id: ensureUniqueId('exp_strukturen_mix_bonus'),
    level: 'A2',
    section: sectionNames.strukturen,
    part: 'Bonus Mix',
    title: 'Kasus Schnelltest',
    instructions: 'Wählen Sie die passende Form.',
    questions: [
      cloze('Ich schenke ___ Lehrerin Blumen.', 'der', 'Dativ'),
      cloze('Wir besuchen ___ Museum am Samstag.', 'das', 'Akkusativ'),
      cloze('Das Foto hängt über ___ Sofa.', 'dem', 'Dativ'),
      cloze('Ich stelle die Tasche neben ___ Stuhl.', 'den', 'Akkusativ'),
      mcq('Mit welchem Kasus benutzt man "für"?', 'Welche Antwort ist richtig?', ['Nominativ', 'Akkusativ', 'Dativ'], 1)
    ]
  });

  console.info('Quiz expansion loaded:', {
    lesen: QUIZ_BANK.lesen.length,
    schreiben: QUIZ_BANK.schreiben.length,
    strukturen: QUIZ_BANK.strukturen.length,
    wortschatz: QUIZ_BANK.wortschatz.length,
    hoeren: QUIZ_BANK.hoeren.length
  });

})();
