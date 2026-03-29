// vocab.js — Netzwerk A1/A2 Vocabulary Database
// Format: {id, de, en, level, type, article?, plural?, tags[], examples:[{de,en}], tips?}
window.VOCAB_DB = [

    // ── GREETINGS & SOCIAL ──────────────────────────────────────────────────────
    {
        id: 1, de: "Hallo", en: "hello", level: "A1", type: "phrase", tags: ["greeting"],
        examples: [{ de: "Hallo! Wie geht es dir?", en: "Hello! How are you?" }, { de: "Hallo zusammen!", en: "Hello everyone!" }]
    },
    {
        id: 2, de: "Guten Morgen", en: "good morning", level: "A1", type: "phrase", tags: ["greeting"],
        examples: [{ de: "Guten Morgen! Haben Sie gut geschlafen?", en: "Good morning! Did you sleep well?" }, { de: "Guten Morgen, Herr Schmidt.", en: "Good morning, Mr Schmidt." }]
    },
    {
        id: 3, de: "Guten Tag", en: "good day / hello", level: "A1", type: "phrase", tags: ["greeting"],
        examples: [{ de: "Guten Tag! Was kann ich für Sie tun?", en: "Good day! What can I do for you?" }, { de: "Guten Tag, mein Name ist Müller.", en: "Good day, my name is Müller." }]
    },
    {
        id: 4, de: "Guten Abend", en: "good evening", level: "A1", type: "phrase", tags: ["greeting"],
        examples: [{ de: "Guten Abend! Bitte kommen Sie rein.", en: "Good evening! Please come in." }, { de: "Guten Abend, haben Sie reserviert?", en: "Good evening, do you have a reservation?" }]
    },
    {
        id: 5, de: "Gute Nacht", en: "good night", level: "A1", type: "phrase", tags: ["greeting"],
        examples: [{ de: "Gute Nacht! Schlaf gut.", en: "Good night! Sleep well." }, { de: "Ich gehe schlafen. Gute Nacht!", en: "I'm going to sleep. Good night!" }]
    },
    {
        id: 6, de: "Auf Wiedersehen", en: "goodbye (formal)", level: "A1", type: "phrase", tags: ["greeting"],
        examples: [{ de: "Auf Wiedersehen und alles Gute!", en: "Goodbye and all the best!" }, { de: "Auf Wiedersehen bis nächste Woche.", en: "Goodbye until next week." }]
    },
    {
        id: 7, de: "Tschüss", en: "bye (informal)", level: "A1", type: "phrase", tags: ["greeting"],
        examples: [{ de: "Tschüss, bis morgen!", en: "Bye, see you tomorrow!" }, { de: "Tschüss, pass auf dich auf!", en: "Bye, take care!" }]
    },
    {
        id: 8, de: "Bitte", en: "please / you're welcome", level: "A1", type: "phrase", tags: ["social"],
        examples: [{ de: "Bitte sprechen Sie langsamer.", en: "Please speak more slowly." }, { de: "Danke! — Bitte!", en: "Thank you! — You're welcome!" }],
        tip: "'Bitte' means both 'please' and 'you're welcome' — context tells you which."
    },
    {
        id: 9, de: "Danke", en: "thank you", level: "A1", type: "phrase", tags: ["social"],
        examples: [{ de: "Danke sehr für Ihre Hilfe!", en: "Thank you very much for your help!" }, { de: "Danke schön!", en: "Thank you very much!" }]
    },
    {
        id: 10, de: "Entschuldigung", en: "excuse me / sorry", level: "A1", type: "phrase", tags: ["social"],
        examples: [{ de: "Entschuldigung, wo ist der Bahnhof?", en: "Excuse me, where is the train station?" }, { de: "Entschuldigung, ist dieser Platz frei?", en: "Excuse me, is this seat free?" }]
    },
    {
        id: 11, de: "Es tut mir leid", en: "I am sorry", level: "A1", type: "phrase", tags: ["social"],
        examples: [{ de: "Es tut mir leid, ich habe das vergessen.", en: "I'm sorry, I forgot that." }, { de: "Es tut mir wirklich leid!", en: "I'm really sorry!" }]
    },

    // ── PEOPLE & IDENTITY ───────────────────────────────────────────────────────
    {
        id: 20, de: "der Name", en: "the name", level: "A1", type: "noun", article: "der", plural: "die Namen", tags: ["identity"],
        examples: [{ de: "Wie ist Ihr Name, bitte?", en: "What is your name, please?" }, { de: "Mein Name ist Anna Schneider.", en: "My name is Anna Schneider." }]
    },
    {
        id: 21, de: "der Mann", en: "the man", level: "A1", type: "noun", article: "der", plural: "die Männer", tags: ["people"],
        examples: [{ de: "Der Mann wartet am Eingang.", en: "The man is waiting at the entrance." }, { de: "Der alte Mann liest die Zeitung.", en: "The old man is reading the newspaper." }]
    },
    {
        id: 22, de: "die Frau", en: "the woman", level: "A1", type: "noun", article: "die", plural: "die Frauen", tags: ["people"],
        examples: [{ de: "Die Frau arbeitet als Ärztin.", en: "The woman works as a doctor." }, { de: "Eine Frau ruft nach ihrem Kind.", en: "A woman is calling for her child." }]
    },
    {
        id: 23, de: "das Kind", en: "the child", level: "A1", type: "noun", article: "das", plural: "die Kinder", tags: ["people", "family"],
        examples: [{ de: "Das Kind spielt im Park.", en: "The child is playing in the park." }, { de: "Wie alt ist Ihr Kind?", en: "How old is your child?" }]
    },
    {
        id: 24, de: "die Familie", en: "the family", level: "A1", type: "noun", article: "die", plural: "die Familien", tags: ["family"],
        examples: [{ de: "Meine Familie wohnt in Hamburg.", en: "My family lives in Hamburg." }, { de: "Wir verbringen Weihnachten mit der Familie.", en: "We spend Christmas with the family." }]
    },
    {
        id: 25, de: "der Vater", en: "the father", level: "A1", type: "noun", article: "der", plural: "die Väter", tags: ["family"],
        examples: [{ de: "Mein Vater ist Ingenieur.", en: "My father is an engineer." }, { de: "Der Vater bringt die Kinder zur Schule.", en: "The father takes the children to school." }]
    },
    {
        id: 26, de: "die Mutter", en: "the mother", level: "A1", type: "noun", article: "die", plural: "die Mütter", tags: ["family"],
        examples: [{ de: "Meine Mutter kocht sehr gut.", en: "My mother cooks very well." }, { de: "Die Mutter liest dem Kind vor.", en: "The mother reads to the child." }]
    },
    {
        id: 27, de: "der Bruder", en: "the brother", level: "A1", type: "noun", article: "der", plural: "die Brüder", tags: ["family"],
        examples: [{ de: "Mein Bruder studiert in Wien.", en: "My brother studies in Vienna." }, { de: "Hast du Geschwister? — Ja, einen Bruder.", en: "Do you have siblings? — Yes, one brother." }]
    },
    {
        id: 28, de: "die Schwester", en: "the sister", level: "A1", type: "noun", article: "die", plural: "die Schwestern", tags: ["family"],
        examples: [{ de: "Meine Schwester ist zwei Jahre älter.", en: "My sister is two years older." }, { de: "Ich habe keine Schwester.", en: "I don't have a sister." }]
    },
    {
        id: 29, de: "der Freund", en: "the friend (male) / boyfriend", level: "A1", type: "noun", article: "der", plural: "die Freunde", tags: ["people", "relationships"],
        examples: [{ de: "Mein Freund kommt aus der Türkei.", en: "My friend comes from Turkey." }, { de: "Ist das dein Freund oder dein Bruder?", en: "Is that your friend or your brother?" }],
        tip: "'ein Freund' = a male friend; 'mein Freund' often implies boyfriend."
    },
    {
        id: 30, de: "die Freundin", en: "the friend (female) / girlfriend", level: "A1", type: "noun", article: "die", plural: "die Freundinnen", tags: ["people", "relationships"],
        examples: [{ de: "Meine Freundin wohnt in Berlin.", en: "My friend lives in Berlin." }, { de: "Ich gehe mit meiner Freundin ins Kino.", en: "I'm going to the cinema with my girlfriend." }]
    },
    {
        id: 31, de: "der Nachbar", en: "the neighbour (male)", level: "A1", type: "noun", article: "der", plural: "die Nachbarn", tags: ["people"],
        examples: [{ de: "Mein Nachbar ist sehr nett.", en: "My neighbour is very nice." }, { de: "Der Nachbar macht viel Lärm.", en: "The neighbour makes a lot of noise." }]
    },
    {
        id: 32, de: "der Kollege", en: "the colleague (male)", level: "A2", type: "noun", article: "der", plural: "die Kollegen", tags: ["people", "work"],
        examples: [{ de: "Mein Kollege hilft mir bei der Arbeit.", en: "My colleague helps me at work." }, { de: "Wir essen mit den Kollegen zu Mittag.", en: "We have lunch with the colleagues." }]
    },

    // ── NUMBERS ─────────────────────────────────────────────────────────────────
    {
        id: 40, de: "null", en: "zero", level: "A1", type: "number", tags: ["numbers"],
        examples: [{ de: "Die Temperatur ist null Grad.", en: "The temperature is zero degrees." }, { de: "Null Fehler — perfekt!", en: "Zero mistakes — perfect!" }]
    },
    {
        id: 41, de: "eins", en: "one", level: "A1", type: "number", tags: ["numbers"],
        examples: [{ de: "Ich möchte eins davon.", en: "I would like one of those." }, { de: "Eins, zwei, drei — fertig!", en: "One, two, three — done!" }]
    },
    {
        id: 42, de: "zwei", en: "two", level: "A1", type: "number", tags: ["numbers"],
        examples: [{ de: "Ich brauche zwei Fahrkarten.", en: "I need two tickets." }, { de: "Wir haben zwei Katzen.", en: "We have two cats." }]
    },
    {
        id: 43, de: "drei", en: "three", level: "A1", type: "number", tags: ["numbers"],
        examples: [{ de: "Dreimal täglich nach dem Essen.", en: "Three times daily after meals." }, { de: "In drei Stunden sind wir da.", en: "In three hours we'll be there." }]
    },
    {
        id: 44, de: "zehn", en: "ten", level: "A1", type: "number", tags: ["numbers"],
        examples: [{ de: "In zehn Minuten kommt der Bus.", en: "The bus comes in ten minutes." }, { de: "Ich habe zehn Euro dabei.", en: "I have ten euros on me." }]
    },
    {
        id: 45, de: "zwanzig", en: "twenty", level: "A1", type: "number", tags: ["numbers"],
        examples: [{ de: "Sie ist zwanzig Jahre alt.", en: "She is twenty years old." }, { de: "Das kostet zwanzig Euro.", en: "That costs twenty euros." }]
    },
    {
        id: 46, de: "hundert", en: "one hundred", level: "A1", type: "number", tags: ["numbers"],
        examples: [{ de: "Hundert Seiten sind nicht viel.", en: "One hundred pages is not much." }, { de: "Das sind hundert Prozent richtig.", en: "That is one hundred percent correct." }]
    },
    {
        id: 47, de: "tausend", en: "one thousand", level: "A1", type: "number", tags: ["numbers"],
        examples: [{ de: "Das Gehalt beträgt tausend Euro.", en: "The salary amounts to one thousand euros." }, { de: "Tausend Dank!", en: "A thousand thanks!" }]
    },

    // ── DAYS & TIME ──────────────────────────────────────────────────────────────
    {
        id: 50, de: "der Montag", en: "Monday", level: "A1", type: "noun", article: "der", tags: ["time", "days"],
        examples: [{ de: "Am Montag beginnt die Arbeitswoche.", en: "On Monday the working week begins." }, { de: "Montags gehe ich ins Fitnessstudio.", en: "On Mondays I go to the gym." }]
    },
    {
        id: 51, de: "der Dienstag", en: "Tuesday", level: "A1", type: "noun", article: "der", tags: ["time", "days"],
        examples: [{ de: "Dienstag habe ich einen Termin.", en: "On Tuesday I have an appointment." }, { de: "Jeden Dienstag ist Markt.", en: "Every Tuesday there is a market." }]
    },
    {
        id: 52, de: "der Mittwoch", en: "Wednesday", level: "A1", type: "noun", article: "der", tags: ["time", "days"],
        examples: [{ de: "Mittwoch ist in der Mitte der Woche.", en: "Wednesday is in the middle of the week." }, { de: "Wir treffen uns Mittwochabend.", en: "We meet Wednesday evening." }]
    },
    {
        id: 53, de: "der Donnerstag", en: "Thursday", level: "A1", type: "noun", article: "der", tags: ["time", "days"],
        examples: [{ de: "Donnerstag abend gehe ich zum Kurs.", en: "Thursday evening I go to the course." }, { de: "Der Kurs findet jeden Donnerstag statt.", en: "The course takes place every Thursday." }]
    },
    {
        id: 54, de: "der Freitag", en: "Friday", level: "A1", type: "noun", article: "der", tags: ["time", "days"],
        examples: [{ de: "Freitag ist mein Lieblingstag!", en: "Friday is my favourite day!" }, { de: "Wir feiern am Freitagabend.", en: "We celebrate on Friday evening." }]
    },
    {
        id: 55, de: "der Samstag", en: "Saturday", level: "A1", type: "noun", article: "der", tags: ["time", "days"],
        examples: [{ de: "Samstags kaufe ich auf dem Markt ein.", en: "On Saturdays I shop at the market." }, { de: "Am Samstag schlafen wir lange.", en: "On Saturday we sleep in." }]
    },
    {
        id: 56, de: "der Sonntag", en: "Sunday", level: "A1", type: "noun", article: "der", tags: ["time", "days"],
        examples: [{ de: "Sonntag ist der Tag der Ruhe.", en: "Sunday is the day of rest." }, { de: "Am Sonntag frühstücken wir lange.", en: "On Sunday we have a long breakfast." }]
    },
    {
        id: 57, de: "heute", en: "today", level: "A1", type: "adverb", tags: ["time"],
        examples: [{ de: "Heute ist das Wetter schön.", en: "Today the weather is nice." }, { de: "Ich kann heute nicht kommen.", en: "I can't come today." }]
    },
    {
        id: 58, de: "morgen", en: "tomorrow", level: "A1", type: "adverb", tags: ["time"],
        examples: [{ de: "Morgen fahre ich nach Hamburg.", en: "Tomorrow I'm going to Hamburg." }, { de: "Bis morgen!", en: "See you tomorrow!" }],
        tip: "'morgen' = tomorrow AND 'der Morgen' = the morning. Context makes it clear."
    },
    {
        id: 59, de: "gestern", en: "yesterday", level: "A1", type: "adverb", tags: ["time"],
        examples: [{ de: "Gestern habe ich viel gearbeitet.", en: "Yesterday I worked a lot." }, { de: "Was hast du gestern gemacht?", en: "What did you do yesterday?" }]
    },
    {
        id: 60, de: "jetzt", en: "now", level: "A1", type: "adverb", tags: ["time"],
        examples: [{ de: "Jetzt essen wir.", en: "We are eating now." }, { de: "Ich bin jetzt müde.", en: "I am tired now." }]
    },
    {
        id: 61, de: "später", en: "later", level: "A1", type: "adverb", tags: ["time"],
        examples: [{ de: "Bis später!", en: "See you later!" }, { de: "Wir reden später darüber.", en: "We'll talk about it later." }]
    },
    {
        id: 62, de: "die Uhr", en: "the clock / o'clock", level: "A1", type: "noun", article: "die", plural: "die Uhren", tags: ["time"],
        examples: [{ de: "Es ist drei Uhr.", en: "It is three o'clock." }, { de: "Meine Uhr geht vor.", en: "My clock is fast." }]
    },
    {
        id: 63, de: "die Stunde", en: "the hour", level: "A1", type: "noun", article: "die", plural: "die Stunden", tags: ["time"],
        examples: [{ de: "In einer Stunde bin ich fertig.", en: "In one hour I'll be done." }, { de: "Der Kurs dauert zwei Stunden.", en: "The course lasts two hours." }]
    },
    {
        id: 64, de: "die Minute", en: "the minute", level: "A1", type: "noun", article: "die", plural: "die Minuten", tags: ["time"],
        examples: [{ de: "Warte fünf Minuten, bitte.", en: "Wait five minutes, please." }, { de: "In zehn Minuten kommt er.", en: "He's coming in ten minutes." }]
    },
    {
        id: 65, de: "die Woche", en: "the week", level: "A1", type: "noun", article: "die", plural: "die Wochen", tags: ["time"],
        examples: [{ de: "Nächste Woche habe ich Urlaub.", en: "Next week I have vacation." }, { de: "Ich arbeite fünf Tage pro Woche.", en: "I work five days a week." }]
    },
    {
        id: 66, de: "der Monat", en: "the month", level: "A1", type: "noun", article: "der", plural: "die Monate", tags: ["time"],
        examples: [{ de: "Im Monat März beginnt der Frühling.", en: "In the month of March spring begins." }, { de: "Wie viele Monate hat ein Jahr?", en: "How many months does a year have?" }]
    },
    {
        id: 67, de: "das Jahr", en: "the year", level: "A1", type: "noun", article: "das", plural: "die Jahre", tags: ["time"],
        examples: [{ de: "Dieses Jahr lerne ich Deutsch.", en: "This year I am learning German." }, { de: "Nächstes Jahr ziehen wir um.", en: "Next year we are moving." }]
    },

    // ── FOOD & DRINK ─────────────────────────────────────────────────────────────
    {
        id: 80, de: "das Brot", en: "the bread", level: "A1", type: "noun", article: "das", plural: "die Brote", tags: ["food"],
        examples: [{ de: "Morgens esse ich Brot mit Butter.", en: "In the mornings I eat bread with butter." }, { de: "Kann ich noch ein Stück Brot haben?", en: "Can I have another piece of bread?" }]
    },
    {
        id: 81, de: "die Butter", en: "the butter", level: "A1", type: "noun", article: "die", tags: ["food"],
        examples: [{ de: "Ich schmiere Butter aufs Brot.", en: "I spread butter on the bread." }, { de: "Haben Sie Butter oder Margarine?", en: "Do you have butter or margarine?" }]
    },
    {
        id: 82, de: "das Ei", en: "the egg", level: "A1", type: "noun", article: "das", plural: "die Eier", tags: ["food"],
        examples: [{ de: "Zum Frühstück esse ich zwei Eier.", en: "For breakfast I eat two eggs." }, { de: "Ich möchte ein Spiegelei, bitte.", en: "I would like a fried egg, please." }]
    },
    {
        id: 83, de: "der Käse", en: "the cheese", level: "A1", type: "noun", article: "der", tags: ["food"],
        examples: [{ de: "Deutsche Käsesorten sind sehr vielfältig.", en: "German types of cheese are very varied." }, { de: "Ich esse gern Käse auf dem Brot.", en: "I like eating cheese on bread." }]
    },
    {
        id: 84, de: "die Wurst", en: "the sausage", level: "A1", type: "noun", article: "die", plural: "die Würste", tags: ["food"],
        examples: [{ de: "Bratwurst ist ein deutsches Nationalgericht.", en: "Bratwurst is a German national dish." }, { de: "Ich kaufe Wurst an der Fleischtheke.", en: "I buy sausage at the meat counter." }]
    },
    {
        id: 85, de: "das Fleisch", en: "the meat", level: "A1", type: "noun", article: "das", tags: ["food"],
        examples: [{ de: "Ich esse kein Fleisch — ich bin Vegetarier.", en: "I don't eat meat — I'm a vegetarian." }, { de: "Das Fleisch muss gut durchgebraten sein.", en: "The meat must be well done." }]
    },
    {
        id: 86, de: "der Fisch", en: "the fish", level: "A1", type: "noun", article: "der", plural: "die Fische", tags: ["food"],
        examples: [{ de: "An der Nordsee gibt es frischen Fisch.", en: "At the North Sea there is fresh fish." }, { de: "Ich esse freitags immer Fisch.", en: "I always eat fish on Fridays." }]
    },
    {
        id: 87, de: "das Gemüse", en: "the vegetables", level: "A1", type: "noun", article: "das", tags: ["food"],
        examples: [{ de: "Gemüse ist gesund und lecker.", en: "Vegetables are healthy and delicious." }, { de: "Ich kaufe Gemüse auf dem Markt.", en: "I buy vegetables at the market." }]
    },
    {
        id: 88, de: "das Obst", en: "the fruit", level: "A1", type: "noun", article: "das", tags: ["food"],
        examples: [{ de: "Täglich Obst essen ist gut für die Gesundheit.", en: "Eating fruit daily is good for health." }, { de: "Was für Obst magst du am liebsten?", en: "What kind of fruit do you like best?" }]
    },
    {
        id: 89, de: "der Apfel", en: "the apple", level: "A1", type: "noun", article: "der", plural: "die Äpfel", tags: ["food"],
        examples: [{ de: "Ein Apfel am Tag hält den Arzt fern.", en: "An apple a day keeps the doctor away." }, { de: "Der Apfel ist rot und saftig.", en: "The apple is red and juicy." }]
    },
    {
        id: 90, de: "die Kartoffel", en: "the potato", level: "A1", type: "noun", article: "die", plural: "die Kartoffeln", tags: ["food"],
        examples: [{ de: "Kartoffeln sind das wichtigste Gemüse in Deutschland.", en: "Potatoes are the most important vegetable in Germany." }, { de: "Ich esse Kartoffeln am liebsten als Suppe.", en: "I like potatoes best as soup." }]
    },
    {
        id: 91, de: "die Suppe", en: "the soup", level: "A1", type: "noun", article: "die", plural: "die Suppen", tags: ["food"],
        examples: [{ de: "Eine warme Suppe wärmt von innen.", en: "A warm soup warms from the inside." }, { de: "Bitte bringen Sie mir die Tomatensuppe.", en: "Please bring me the tomato soup." }]
    },
    {
        id: 92, de: "der Salat", en: "the salad / lettuce", level: "A1", type: "noun", article: "der", plural: "die Salate", tags: ["food"],
        examples: [{ de: "Ich esse zum Mittagessen immer einen Salat.", en: "I always eat a salad for lunch." }, { de: "Der Salat ist frisch und knackig.", en: "The salad is fresh and crispy." }]
    },
    {
        id: 93, de: "der Kaffee", en: "the coffee", level: "A1", type: "noun", article: "der", tags: ["drinks"],
        examples: [{ de: "Morgens brauche ich unbedingt einen Kaffee.", en: "In the mornings I absolutely need a coffee." }, { de: "Nehmen Sie Milch und Zucker?", en: "Do you take milk and sugar?" }]
    },
    {
        id: 94, de: "der Tee", en: "the tea", level: "A1", type: "noun", article: "der", tags: ["drinks"],
        examples: [{ de: "Bei Erkältung trinke ich gern Kräutertee.", en: "When I have a cold I like to drink herbal tea." }, { de: "Grüner Tee ist sehr gesund.", en: "Green tea is very healthy." }]
    },
    {
        id: 95, de: "das Wasser", en: "the water", level: "A1", type: "noun", article: "das", tags: ["drinks"],
        examples: [{ de: "Ein Glas Wasser bitte!", en: "A glass of water please!" }, { de: "Möchten Sie Mineral- oder Leitungswasser?", en: "Would you like mineral or tap water?" }]
    },
    {
        id: 96, de: "das Bier", en: "the beer", level: "A1", type: "noun", article: "das", plural: "die Biere", tags: ["drinks"],
        examples: [{ de: "Deutschland ist für sein Bier berühmt.", en: "Germany is famous for its beer." }, { de: "Ein Bier vom Fass, bitte.", en: "One draught beer, please." }]
    },
    {
        id: 97, de: "der Wein", en: "the wine", level: "A1", type: "noun", article: "der", plural: "die Weine", tags: ["drinks"],
        examples: [{ de: "Zum Essen trinken wir einen Rotwein.", en: "With the meal we drink a red wine." }, { de: "Möchten Sie Weiß- oder Rotwein?", en: "Would you like white or red wine?" }]
    },
    {
        id: 98, de: "die Milch", en: "the milk", level: "A1", type: "noun", article: "die", tags: ["drinks", "food"],
        examples: [{ de: "Kinder sollen täglich Milch trinken.", en: "Children should drink milk daily." }, { de: "Ich nehme einen Kaffee mit Milch.", en: "I'll have a coffee with milk." }]
    },
    {
        id: 99, de: "der Saft", en: "the juice", level: "A1", type: "noun", article: "der", plural: "die Säfte", tags: ["drinks"],
        examples: [{ de: "Orangensaft zum Frühstück ist klassisch.", en: "Orange juice at breakfast is classic." }, { de: "Einen Apfelsaft, bitte.", en: "An apple juice, please." }]
    },
    {
        id: 100, de: "der Zucker", en: "the sugar", level: "A1", type: "noun", article: "der", tags: ["food"],
        examples: [{ de: "Nehmen Sie Zucker in den Kaffee?", en: "Do you take sugar in your coffee?" }, { de: "Ich nehme keinen Zucker.", en: "I don't take any sugar." }]
    },
    {
        id: 101, de: "das Salz", en: "the salt", level: "A1", type: "noun", article: "das", tags: ["food"],
        examples: [{ de: "Das Essen braucht noch Salz.", en: "The food needs more salt." }, { de: "Gib mir bitte das Salz.", en: "Please pass me the salt." }]
    },
    {
        id: 102, de: "das Frühstück", en: "the breakfast", level: "A1", type: "noun", article: "das", tags: ["food", "meals"],
        examples: [{ de: "Das Frühstück ist das wichtigste Mahlzeit.", en: "Breakfast is the most important meal." }, { de: "Wann gibt es Frühstück?", en: "When is breakfast served?" }]
    },
    {
        id: 103, de: "das Mittagessen", en: "the lunch", level: "A1", type: "noun", article: "das", tags: ["food", "meals"],
        examples: [{ de: "Zum Mittagessen gehe ich in die Kantine.", en: "For lunch I go to the canteen." }, { de: "Was gibt es heute zum Mittagessen?", en: "What is there for lunch today?" }]
    },
    {
        id: 104, de: "das Abendessen", en: "the dinner", level: "A1", type: "noun", article: "das", tags: ["food", "meals"],
        examples: [{ de: "Das Abendessen ist um 19 Uhr.", en: "Dinner is at 7 pm." }, { de: "Wir essen das Abendessen gemeinsam.", en: "We eat dinner together." }]
    },

    // ── PLACES & CITY ────────────────────────────────────────────────────────────
    {
        id: 110, de: "der Bahnhof", en: "the train station", level: "A1", type: "noun", article: "der", plural: "die Bahnhöfe", tags: ["places", "transport"],
        examples: [{ de: "Wo ist der nächste Bahnhof?", en: "Where is the nearest train station?" }, { de: "Am Bahnhof gibt es viele Läden.", en: "At the train station there are many shops." }]
    },
    {
        id: 111, de: "der Flughafen", en: "the airport", level: "A1", type: "noun", article: "der", plural: "die Flughäfen", tags: ["places", "transport"],
        examples: [{ de: "Der Flughafen liegt außerhalb der Stadt.", en: "The airport is outside the city." }, { de: "Wann musst du am Flughafen sein?", en: "When do you have to be at the airport?" }]
    },
    {
        id: 112, de: "die Haltestelle", en: "the (bus/tram) stop", level: "A1", type: "noun", article: "die", plural: "die Haltestellen", tags: ["places", "transport"],
        examples: [{ de: "An welcher Haltestelle steige ich aus?", en: "At which stop do I get off?" }, { de: "Die nächste Haltestelle ist Rathaus.", en: "The next stop is Town Hall." }]
    },
    {
        id: 113, de: "das Krankenhaus", en: "the hospital", level: "A1", type: "noun", article: "das", plural: "die Krankenhäuser", tags: ["places", "health"],
        examples: [{ de: "Er liegt im Krankenhaus.", en: "He is in the hospital." }, { de: "Das Krankenhaus ist direkt neben der Apotheke.", en: "The hospital is right next to the pharmacy." }]
    },
    {
        id: 114, de: "die Apotheke", en: "the pharmacy", level: "A1", type: "noun", article: "die", plural: "die Apotheken", tags: ["places", "health"],
        examples: [{ de: "Ich kaufe Aspirin in der Apotheke.", en: "I buy aspirin at the pharmacy." }, { de: "Die Apotheke öffnet um 8 Uhr.", en: "The pharmacy opens at 8 o'clock." }]
    },
    {
        id: 115, de: "die Arztpraxis", en: "the doctor's surgery", level: "A1", type: "noun", article: "die", plural: "die Arztpraxen", tags: ["places", "health"],
        examples: [{ de: "Ich habe einen Termin in der Arztpraxis.", en: "I have an appointment at the doctor's surgery." }, { de: "Die Arztpraxis ist im ersten Stock.", en: "The doctor's surgery is on the first floor." }]
    },
    {
        id: 116, de: "das Rathaus", en: "the town hall", level: "A1", type: "noun", article: "das", plural: "die Rathäuser", tags: ["places"],
        examples: [{ de: "Das Rathaus ist in der Stadtmitte.", en: "The town hall is in the city centre." }, { de: "Ich muss zum Rathaus, um mich anzumelden.", en: "I need to go to the town hall to register." }]
    },
    {
        id: 117, de: "die Post", en: "the post office", level: "A1", type: "noun", article: "die", tags: ["places"],
        examples: [{ de: "Ich muss ein Paket zur Post bringen.", en: "I need to take a package to the post office." }, { de: "Die Post schließt um 18 Uhr.", en: "The post office closes at 6 pm." }]
    },
    {
        id: 118, de: "die Bank", en: "the bank", level: "A1", type: "noun", article: "die", plural: "die Banken", tags: ["places", "money"],
        examples: [{ de: "Ich muss Geld von der Bank abheben.", en: "I need to withdraw money from the bank." }, { de: "Die Bank ist montags bis freitags geöffnet.", en: "The bank is open Monday to Friday." }]
    },
    {
        id: 119, de: "der Supermarkt", en: "the supermarket", level: "A1", type: "noun", article: "der", plural: "die Supermärkte", tags: ["places", "shopping"],
        examples: [{ de: "Der Supermarkt ist bis 22 Uhr geöffnet.", en: "The supermarket is open until 10 pm." }, { de: "Ich kaufe alles im Supermarkt.", en: "I buy everything at the supermarket." }]
    },
    {
        id: 120, de: "der Markt", en: "the market", level: "A1", type: "noun", article: "der", plural: "die Märkte", tags: ["places", "shopping"],
        examples: [{ de: "Samstags gehe ich auf den Wochenmarkt.", en: "On Saturdays I go to the weekly market." }, { de: "Auf dem Markt kaufe ich frisches Gemüse.", en: "At the market I buy fresh vegetables." }]
    },
    {
        id: 121, de: "das Kaufhaus", en: "the department store", level: "A2", type: "noun", article: "das", plural: "die Kaufhäuser", tags: ["places", "shopping"],
        examples: [{ de: "Im Kaufhaus kann man alles kaufen.", en: "In the department store you can buy everything." }, { de: "Das Kaufhaus hat fünf Stockwerke.", en: "The department store has five floors." }]
    },
    {
        id: 122, de: "die Straße", en: "the street / road", level: "A1", type: "noun", article: "die", plural: "die Straßen", tags: ["places"],
        examples: [{ de: "Welche Straße ist das?", en: "What street is this?" }, { de: "Überqueren Sie die Straße an der Ampel.", en: "Cross the street at the traffic light." }]
    },
    {
        id: 123, de: "der Platz", en: "the square / place / seat", level: "A1", type: "noun", article: "der", plural: "die Plätze", tags: ["places"],
        examples: [{ de: "Der Marktplatz ist das Zentrum der Stadt.", en: "The market square is the centre of the city." }, { de: "Ist dieser Platz noch frei?", en: "Is this seat still free?" }],
        tip: "'der Platz' can mean a public square, a seat, or a place — context decides."
    },
    {
        id: 124, de: "die Kreuzung", en: "the crossroads / intersection", level: "A2", type: "noun", article: "die", plural: "die Kreuzungen", tags: ["places", "transport"],
        examples: [{ de: "Biegen Sie an der Kreuzung rechts ab.", en: "Turn right at the intersection." }, { de: "An der Kreuzung ist eine Ampel.", en: "There is a traffic light at the crossroads." }]
    },

    // ── HOME & LIVING ─────────────────────────────────────────────────────────────
    {
        id: 130, de: "die Wohnung", en: "the apartment / flat", level: "A1", type: "noun", article: "die", plural: "die Wohnungen", tags: ["home"],
        examples: [{ de: "Wir suchen eine neue Wohnung.", en: "We are looking for a new apartment." }, { de: "Die Wohnung hat drei Zimmer.", en: "The apartment has three rooms." }]
    },
    {
        id: 131, de: "das Haus", en: "the house", level: "A1", type: "noun", article: "das", plural: "die Häuser", tags: ["home"],
        examples: [{ de: "Das Haus hat einen großen Garten.", en: "The house has a large garden." }, { de: "Wir wohnen in einem Reihenhaus.", en: "We live in a terraced house." }]
    },
    {
        id: 132, de: "das Zimmer", en: "the room", level: "A1", type: "noun", article: "das", plural: "die Zimmer", tags: ["home"],
        examples: [{ de: "Das Zimmer ist hell und gemütlich.", en: "The room is bright and cosy." }, { de: "Wir brauchen ein Einzelzimmer.", en: "We need a single room." }]
    },
    {
        id: 133, de: "die Küche", en: "the kitchen", level: "A1", type: "noun", article: "die", plural: "die Küchen", tags: ["home"],
        examples: [{ de: "Ich koche in der Küche.", en: "I cook in the kitchen." }, { de: "Die Küche ist modern eingerichtet.", en: "The kitchen is modernly furnished." }]
    },
    {
        id: 134, de: "das Wohnzimmer", en: "the living room", level: "A1", type: "noun", article: "das", plural: "die Wohnzimmer", tags: ["home"],
        examples: [{ de: "Wir sitzen abends im Wohnzimmer.", en: "In the evenings we sit in the living room." }, { de: "Das Sofa steht im Wohnzimmer.", en: "The sofa is in the living room." }]
    },
    {
        id: 135, de: "das Schlafzimmer", en: "the bedroom", level: "A1", type: "noun", article: "das", plural: "die Schlafzimmer", tags: ["home"],
        examples: [{ de: "Das Schlafzimmer hat ein großes Bett.", en: "The bedroom has a large bed." }, { de: "Das Schlafzimmer ist ruhig.", en: "The bedroom is quiet." }]
    },
    {
        id: 136, de: "das Badezimmer", en: "the bathroom", level: "A1", type: "noun", article: "das", plural: "die Badezimmer", tags: ["home"],
        examples: [{ de: "Das Badezimmer hat eine Dusche und eine Badewanne.", en: "The bathroom has a shower and a bathtub." }, { de: "Darf ich das Badezimmer benutzen?", en: "May I use the bathroom?" }]
    },
    {
        id: 137, de: "der Garten", en: "the garden", level: "A1", type: "noun", article: "der", plural: "die Gärten", tags: ["home"],
        examples: [{ de: "Im Sommer sitze ich gern im Garten.", en: "In summer I like sitting in the garden." }, { de: "Er pflanzt Blumen im Garten.", en: "He plants flowers in the garden." }]
    },
    {
        id: 138, de: "die Miete", en: "the rent", level: "A2", type: "noun", article: "die", tags: ["home", "money"],
        examples: [{ de: "Die Miete in München ist sehr hoch.", en: "The rent in Munich is very high." }, { de: "Ich zahle 800 Euro Miete im Monat.", en: "I pay 800 euros rent per month." }]
    },
    {
        id: 139, de: "der Aufzug", en: "the lift / elevator", level: "A2", type: "noun", article: "der", plural: "die Aufzüge", tags: ["home", "places"],
        examples: [{ de: "Der Aufzug ist leider kaputt.", en: "Unfortunately the lift is broken." }, { de: "Nehmen Sie den Aufzug in den dritten Stock.", en: "Take the lift to the third floor." }]
    },
    {
        id: 140, de: "die Treppe", en: "the staircase / stairs", level: "A2", type: "noun", article: "die", plural: "die Treppen", tags: ["home", "places"],
        examples: [{ de: "Nehmen Sie die Treppe, es ist nur ein Stock.", en: "Take the stairs, it's only one floor." }, { de: "Die Treppe führt in den Keller.", en: "The stairs lead to the basement." }]
    },
    {
        id: 141, de: "das Fenster", en: "the window", level: "A1", type: "noun", article: "das", plural: "die Fenster", tags: ["home"],
        examples: [{ de: "Bitte mach das Fenster zu!", en: "Please close the window!" }, { de: "Das Fenster geht zur Straße.", en: "The window faces the street." }]
    },
    {
        id: 142, de: "die Tür", en: "the door", level: "A1", type: "noun", article: "die", plural: "die Türen", tags: ["home"],
        examples: [{ de: "Bitte klopfen Sie an die Tür.", en: "Please knock on the door." }, { de: "Die Tür ist abgeschlossen.", en: "The door is locked." }]
    },

    // ── BODY & HEALTH ─────────────────────────────────────────────────────────────
    {
        id: 150, de: "der Kopf", en: "the head", level: "A1", type: "noun", article: "der", plural: "die Köpfe", tags: ["body"],
        examples: [{ de: "Ich habe Kopfschmerzen.", en: "I have a headache." }, { de: "Er schüttelt den Kopf.", en: "He shakes his head." }]
    },
    {
        id: 151, de: "das Auge", en: "the eye", level: "A1", type: "noun", article: "das", plural: "die Augen", tags: ["body"],
        examples: [{ de: "Sie hat blaue Augen.", en: "She has blue eyes." }, { de: "Meine Augen sind müde.", en: "My eyes are tired." }]
    },
    {
        id: 152, de: "der Mund", en: "the mouth", level: "A1", type: "noun", article: "der", plural: "die Münder", tags: ["body"],
        examples: [{ de: "Bitte den Mund aufmachen.", en: "Please open your mouth." }, { de: "Er spricht mit vollem Mund.", en: "He speaks with his mouth full." }]
    },
    {
        id: 153, de: "die Hand", en: "the hand", level: "A1", type: "noun", article: "die", plural: "die Hände", tags: ["body"],
        examples: [{ de: "Hände waschen nicht vergessen!", en: "Don't forget to wash your hands!" }, { de: "Sie schütteln sich die Hand.", en: "They shake hands." }]
    },
    {
        id: 154, de: "der Bauch", en: "the stomach / belly", level: "A1", type: "noun", article: "der", plural: "die Bäuche", tags: ["body"],
        examples: [{ de: "Ich habe Bauchschmerzen.", en: "I have a stomachache." }, { de: "Der Bauch tut mir weh.", en: "My stomach hurts." }]
    },
    {
        id: 155, de: "der Rücken", en: "the back", level: "A1", type: "noun", article: "der", plural: "die Rücken", tags: ["body"],
        examples: [{ de: "Ich habe Rückenschmerzen.", en: "I have back pain." }, { de: "Steh gerade — der Rücken!", en: "Stand up straight — your back!" }]
    },
    {
        id: 156, de: "das Bein", en: "the leg", level: "A1", type: "noun", article: "das", plural: "die Beine", tags: ["body"],
        examples: [{ de: "Er hat sich das Bein gebrochen.", en: "He broke his leg." }, { de: "Meine Beine sind müde vom Laufen.", en: "My legs are tired from running." }]
    },
    {
        id: 157, de: "krank", en: "sick / ill", level: "A1", type: "adjective", tags: ["health"],
        examples: [{ de: "Ich bin krank und kann nicht arbeiten.", en: "I am sick and cannot work." }, { de: "Das Kind ist krank — wir bleiben zu Hause.", en: "The child is sick — we are staying home." }]
    },
    {
        id: 158, de: "gesund", en: "healthy", level: "A1", type: "adjective", tags: ["health"],
        examples: [{ de: "Viel Obst essen ist gesund.", en: "Eating lots of fruit is healthy." }, { de: "Bist du wieder gesund?", en: "Are you healthy again?" }]
    },
    {
        id: 159, de: "die Erkältung", en: "the cold (illness)", level: "A2", type: "noun", article: "die", plural: "die Erkältungen", tags: ["health"],
        examples: [{ de: "Ich habe eine schlimme Erkältung.", en: "I have a bad cold." }, { de: "Bei einer Erkältung hilft Tee mit Honig.", en: "For a cold, tea with honey helps." }]
    },
    {
        id: 160, de: "das Fieber", en: "the fever", level: "A2", type: "noun", article: "das", tags: ["health"],
        examples: [{ de: "Das Kind hat Fieber.", en: "The child has a fever." }, { de: "Ich habe 39 Grad Fieber.", en: "I have a fever of 39 degrees." }]
    },
    {
        id: 161, de: "das Medikament", en: "the medicine / medication", level: "A2", type: "noun", article: "das", plural: "die Medikamente", tags: ["health"],
        examples: [{ de: "Das Medikament hilft gegen Schmerzen.", en: "The medicine helps against pain." }, { de: "Nehmen Sie das Medikament dreimal täglich.", en: "Take the medicine three times daily." }]
    },
    {
        id: 162, de: "die Schmerzen", en: "the pain / ache (plural)", level: "A2", type: "noun", article: "die", tags: ["health"],
        examples: [{ de: "Ich habe starke Schmerzen im Rücken.", en: "I have severe pain in my back." }, { de: "Die Schmerzen kommen und gehen.", en: "The pain comes and goes." }]
    },

    // ── TRANSPORT ─────────────────────────────────────────────────────────────────
    {
        id: 170, de: "das Auto", en: "the car", level: "A1", type: "noun", article: "das", plural: "die Autos", tags: ["transport"],
        examples: [{ de: "Das Auto ist in der Garage.", en: "The car is in the garage." }, { de: "Ich fahre mit dem Auto zur Arbeit.", en: "I drive to work by car." }]
    },
    {
        id: 171, de: "der Bus", en: "the bus", level: "A1", type: "noun", article: "der", plural: "die Busse", tags: ["transport"],
        examples: [{ de: "Der Bus fährt alle zehn Minuten.", en: "The bus runs every ten minutes." }, { de: "Ich nehme den Bus Nummer 7.", en: "I take bus number 7." }]
    },
    {
        id: 172, de: "die U-Bahn", en: "the underground / subway", level: "A1", type: "noun", article: "die", tags: ["transport"],
        examples: [{ de: "Die U-Bahn ist schnell und günstig.", en: "The underground is fast and cheap." }, { de: "Ich fahre mit der U-Bahn in die Stadt.", en: "I take the underground into the city." }]
    },
    {
        id: 173, de: "die Straßenbahn", en: "the tram", level: "A1", type: "noun", article: "die", plural: "die Straßenbahnen", tags: ["transport"],
        examples: [{ de: "In München gibt es viele Straßenbahnen.", en: "In Munich there are many trams." }, { de: "Die Straßenbahn fährt durch die Fußgängerzone.", en: "The tram goes through the pedestrian zone." }]
    },
    {
        id: 174, de: "das Fahrrad", en: "the bicycle", level: "A1", type: "noun", article: "das", plural: "die Fahrräder", tags: ["transport"],
        examples: [{ de: "Ich fahre mit dem Fahrrad zur Arbeit.", en: "I cycle to work." }, { de: "Das Fahrrad hat einen platten Reifen.", en: "The bicycle has a flat tyre." }]
    },
    {
        id: 175, de: "das Flugzeug", en: "the aeroplane", level: "A1", type: "noun", article: "das", plural: "die Flugzeuge", tags: ["transport"],
        examples: [{ de: "Wir fliegen mit dem Flugzeug nach London.", en: "We fly to London by plane." }, { de: "Das Flugzeug hat zwei Stunden Verspätung.", en: "The aeroplane has two hours' delay." }]
    },
    {
        id: 176, de: "das Schiff", en: "the ship", level: "A2", type: "noun", article: "das", plural: "die Schiffe", tags: ["transport"],
        examples: [{ de: "Wir fahren mit dem Schiff nach Schweden.", en: "We travel to Sweden by ship." }, { de: "Das Schiff legt um 14 Uhr ab.", en: "The ship departs at 2 pm." }]
    },
    {
        id: 177, de: "die Fahrkarte", en: "the ticket (transport)", level: "A1", type: "noun", article: "die", plural: "die Fahrkarten", tags: ["transport"],
        examples: [{ de: "Wo kann ich eine Fahrkarte kaufen?", en: "Where can I buy a ticket?" }, { de: "Die Fahrkarte gilt für eine Stunde.", en: "The ticket is valid for one hour." }]
    },
    {
        id: 178, de: "die Abfahrt", en: "the departure", level: "A2", type: "noun", article: "die", plural: "die Abfahrten", tags: ["transport"],
        examples: [{ de: "Die Abfahrt des Zuges ist um 9:15 Uhr.", en: "The train's departure is at 9:15." }, { de: "Bitte prüfen Sie die Abfahrtszeit.", en: "Please check the departure time." }]
    },
    {
        id: 179, de: "die Ankunft", en: "the arrival", level: "A2", type: "noun", article: "die", plural: "die Ankünfte", tags: ["transport"],
        examples: [{ de: "Wann ist die Ankunft in Berlin?", en: "When is the arrival in Berlin?" }, { de: "Die Ankunft hat sich um eine Stunde verzögert.", en: "The arrival has been delayed by an hour." }]
    },
    {
        id: 180, de: "die Verspätung", en: "the delay", level: "A2", type: "noun", article: "die", plural: "die Verspätungen", tags: ["transport"],
        examples: [{ de: "Der Zug hat zehn Minuten Verspätung.", en: "The train has ten minutes' delay." }, { de: "Entschuldigung für die Verspätung.", en: "Sorry for the delay." }]
    },

    // ── WORK & EDUCATION ──────────────────────────────────────────────────────────
    {
        id: 190, de: "die Arbeit", en: "the work / job", level: "A1", type: "noun", article: "die", tags: ["work"],
        examples: [{ de: "Die Arbeit beginnt um acht Uhr.", en: "Work starts at eight o'clock." }, { de: "Ich suche eine neue Arbeit.", en: "I am looking for a new job." }]
    },
    {
        id: 191, de: "der Beruf", en: "the profession / occupation", level: "A1", type: "noun", article: "der", plural: "die Berufe", tags: ["work"],
        examples: [{ de: "Was ist Ihr Beruf?", en: "What is your profession?" }, { de: "Er hat einen interessanten Beruf.", en: "He has an interesting profession." }]
    },
    {
        id: 192, de: "das Büro", en: "the office", level: "A1", type: "noun", article: "das", plural: "die Büros", tags: ["work"],
        examples: [{ de: "Ich arbeite im Büro von 9 bis 17 Uhr.", en: "I work in the office from 9 to 5." }, { de: "Das Büro ist im zweiten Stock.", en: "The office is on the second floor." }]
    },
    {
        id: 193, de: "die Schule", en: "the school", level: "A1", type: "noun", article: "die", plural: "die Schulen", tags: ["education", "places"],
        examples: [{ de: "Die Kinder gehen um 8 Uhr in die Schule.", en: "The children go to school at 8 o'clock." }, { de: "Welche Schule besuchst du?", en: "Which school do you attend?" }]
    },
    {
        id: 194, de: "die Universität", en: "the university", level: "A1", type: "noun", article: "die", plural: "die Universitäten", tags: ["education", "places"],
        examples: [{ de: "Ich studiere an der Universität München.", en: "I study at the University of Munich." }, { de: "Die Universität hat 30.000 Studenten.", en: "The university has 30,000 students." }]
    },
    {
        id: 195, de: "der Kurs", en: "the course / class", level: "A1", type: "noun", article: "der", plural: "die Kurse", tags: ["education"],
        examples: [{ de: "Ich besuche einen Deutschkurs.", en: "I am attending a German course." }, { de: "Der Kurs dauert drei Monate.", en: "The course lasts three months." }]
    },
    {
        id: 196, de: "die Prüfung", en: "the exam / test", level: "A2", type: "noun", article: "die", plural: "die Prüfungen", tags: ["education"],
        examples: [{ de: "Die Prüfung ist nächsten Freitag.", en: "The exam is next Friday." }, { de: "Ich lerne für die Prüfung.", en: "I am studying for the exam." }]
    },
    {
        id: 197, de: "das Ergebnis", en: "the result", level: "A2", type: "noun", article: "das", plural: "die Ergebnisse", tags: ["education", "work"],
        examples: [{ de: "Das Ergebnis der Prüfung war gut.", en: "The result of the exam was good." }, { de: "Wir warten auf das Ergebnis.", en: "We are waiting for the result." }]
    },
    {
        id: 198, de: "der Chef", en: "the boss (male)", level: "A2", type: "noun", article: "der", plural: "die Chefs", tags: ["work"],
        examples: [{ de: "Mein Chef ist sehr streng.", en: "My boss is very strict." }, { de: "Ich spreche morgen mit dem Chef.", en: "I'm speaking with the boss tomorrow." }]
    },
    {
        id: 199, de: "das Gehalt", en: "the salary", level: "A2", type: "noun", article: "das", plural: "die Gehälter", tags: ["work", "money"],
        examples: [{ de: "Das Gehalt wird monatlich gezahlt.", en: "The salary is paid monthly." }, { de: "Ich möchte über das Gehalt verhandeln.", en: "I would like to negotiate the salary." }]
    },
    {
        id: 200, de: "die Bewerbung", en: "the job application", level: "A2", type: "noun", article: "die", plural: "die Bewerbungen", tags: ["work"],
        examples: [{ de: "Ich schreibe eine Bewerbung für die Stelle.", en: "I am writing an application for the position." }, { de: "Die Bewerbung muss bis Freitag eingehen.", en: "The application must be received by Friday." }]
    },
    {
        id: 201, de: "das Praktikum", en: "the internship / work placement", level: "A2", type: "noun", article: "das", plural: "die Praktika", tags: ["work", "education"],
        examples: [{ de: "Ich mache ein Praktikum in einer Firma.", en: "I am doing an internship at a company." }, { de: "Das Praktikum dauert sechs Wochen.", en: "The internship lasts six weeks." }]
    },
    {
        id: 202, de: "die Besprechung", en: "the meeting", level: "A2", type: "noun", article: "die", plural: "die Besprechungen", tags: ["work"],
        examples: [{ de: "Die Besprechung beginnt um 10 Uhr.", en: "The meeting starts at 10 o'clock." }, { de: "Ich bin in einer Besprechung.", en: "I am in a meeting." }]
    },

    // ── SHOPPING & MONEY ──────────────────────────────────────────────────────────
    {
        id: 210, de: "das Geld", en: "the money", level: "A1", type: "noun", article: "das", tags: ["money", "shopping"],
        examples: [{ de: "Ich habe kein Geld dabei.", en: "I don't have any money on me." }, { de: "Geld allein macht nicht glücklich.", en: "Money alone does not make you happy." }]
    },
    {
        id: 211, de: "der Euro", en: "the euro", level: "A1", type: "noun", article: "der", plural: "die Euro", tags: ["money"],
        examples: [{ de: "Das kostet fünf Euro.", en: "That costs five euros." }, { de: "Kann ich mit Euro bezahlen?", en: "Can I pay with euros?" }]
    },
    {
        id: 212, de: "der Preis", en: "the price", level: "A1", type: "noun", article: "der", plural: "die Preise", tags: ["money", "shopping"],
        examples: [{ de: "Der Preis ist zu hoch für mich.", en: "The price is too high for me." }, { de: "Was ist der beste Preis?", en: "What is the best price?" }]
    },
    {
        id: 213, de: "die Kasse", en: "the checkout / cashier", level: "A1", type: "noun", article: "die", plural: "die Kassen", tags: ["shopping"],
        examples: [{ de: "Bitte bezahlen Sie an der Kasse.", en: "Please pay at the checkout." }, { de: "An der Kasse gibt es eine lange Schlange.", en: "There is a long queue at the checkout." }]
    },
    {
        id: 214, de: "die Rechnung", en: "the bill / invoice", level: "A2", type: "noun", article: "die", plural: "die Rechnungen", tags: ["money", "shopping"],
        examples: [{ de: "Bitte bringen Sie mir die Rechnung.", en: "Please bring me the bill." }, { de: "Die Rechnung stimmt nicht.", en: "The bill is not correct." }]
    },
    {
        id: 215, de: "der Rabatt", en: "the discount", level: "A2", type: "noun", article: "der", plural: "die Rabatte", tags: ["shopping", "money"],
        examples: [{ de: "Gibt es einen Rabatt für Studenten?", en: "Is there a discount for students?" }, { de: "Wir haben 20% Rabatt auf alles.", en: "We have 20% discount on everything." }]
    },
    {
        id: 216, de: "das Angebot", en: "the offer / special deal", level: "A2", type: "noun", article: "das", plural: "die Angebote", tags: ["shopping"],
        examples: [{ de: "Das ist ein super Angebot!", en: "That is a great deal!" }, { de: "Die Angebote gelten nur bis Sonntag.", en: "The deals are only valid until Sunday." }]
    },
    {
        id: 217, de: "die Quittung", en: "the receipt", level: "A2", type: "noun", article: "die", plural: "die Quittungen", tags: ["shopping", "money"],
        examples: [{ de: "Bitte geben Sie mir eine Quittung.", en: "Please give me a receipt." }, { de: "Die Quittung brauche ich für die Buchhaltung.", en: "I need the receipt for accounting." }]
    },
    {
        id: 218, de: "bar", en: "in cash", level: "A2", type: "adjective", tags: ["money"],
        examples: [{ de: "Ich bezahle lieber bar.", en: "I prefer to pay in cash." }, { de: "Nur bar — wir nehmen keine Karten.", en: "Cash only — we don't take cards." }]
    },

    // ── ADJECTIVES ────────────────────────────────────────────────────────────────
    {
        id: 230, de: "groß", en: "big / tall", level: "A1", type: "adjective", tags: ["size", "description"],
        examples: [{ de: "Das Haus ist sehr groß.", en: "The house is very big." }, { de: "Er ist groß und sportlich.", en: "He is tall and athletic." }]
    },
    {
        id: 231, de: "klein", en: "small / short (height)", level: "A1", type: "adjective", tags: ["size", "description"],
        examples: [{ de: "Die Wohnung ist zu klein für uns.", en: "The apartment is too small for us." }, { de: "Sie ist klein, aber sehr stark.", en: "She is short but very strong." }]
    },
    {
        id: 232, de: "gut", en: "good", level: "A1", type: "adjective", tags: ["quality", "description"],
        examples: [{ de: "Das Essen schmeckt sehr gut.", en: "The food tastes very good." }, { de: "Er ist ein guter Freund.", en: "He is a good friend." }]
    },
    {
        id: 233, de: "schlecht", en: "bad", level: "A1", type: "adjective", tags: ["quality", "description"],
        examples: [{ de: "Das Wetter ist heute schlecht.", en: "The weather is bad today." }, { de: "Ich fühle mich schlecht.", en: "I feel bad." }]
    },
    {
        id: 234, de: "schön", en: "beautiful / nice", level: "A1", type: "adjective", tags: ["quality", "description"],
        examples: [{ de: "Das ist ein wirklich schönes Bild.", en: "That is a really beautiful picture." }, { de: "Der Abend war sehr schön.", en: "The evening was very nice." }]
    },
    {
        id: 235, de: "neu", en: "new", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Ich habe ein neues Handy gekauft.", en: "I bought a new mobile phone." }, { de: "Das neue Modell ist viel besser.", en: "The new model is much better." }]
    },
    {
        id: 236, de: "alt", en: "old", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Das Schloss ist sehr alt.", en: "The castle is very old." }, { de: "Wie alt sind Sie?", en: "How old are you?" }]
    },
    {
        id: 237, de: "teuer", en: "expensive", level: "A1", type: "adjective", tags: ["money", "description"],
        examples: [{ de: "Das Restaurant ist sehr teuer.", en: "The restaurant is very expensive." }, { de: "Ist das nicht zu teuer?", en: "Isn't that too expensive?" }]
    },
    {
        id: 238, de: "billig", en: "cheap", level: "A1", type: "adjective", tags: ["money", "description"],
        examples: [{ de: "Das Ticket ist erstaunlich billig.", en: "The ticket is amazingly cheap." }, { de: "Billig ist nicht immer schlecht.", en: "Cheap is not always bad." }]
    },
    {
        id: 239, de: "schnell", en: "fast / quick", level: "A1", type: "adjective", tags: ["speed", "description"],
        examples: [{ de: "Das ICE ist der schnellste Zug.", en: "The ICE is the fastest train." }, { de: "Bitte antworten Sie schnell.", en: "Please reply quickly." }]
    },
    {
        id: 240, de: "langsam", en: "slow", level: "A1", type: "adjective", tags: ["speed", "description"],
        examples: [{ de: "Bitte sprechen Sie langsamer!", en: "Please speak more slowly!" }, { de: "Das Internet hier ist sehr langsam.", en: "The internet here is very slow." }]
    },
    {
        id: 241, de: "wichtig", en: "important", level: "A2", type: "adjective", tags: ["description"],
        examples: [{ de: "Das ist eine wichtige Entscheidung.", en: "That is an important decision." }, { de: "Es ist wichtig, pünktlich zu sein.", en: "It is important to be punctual." }]
    },
    {
        id: 242, de: "einfach", en: "simple / easy", level: "A2", type: "adjective", tags: ["description"],
        examples: [{ de: "Die Aufgabe ist einfach.", en: "The task is simple." }, { de: "Das klingt einfacher als es ist.", en: "That sounds easier than it is." }]
    },
    {
        id: 243, de: "schwierig", en: "difficult", level: "A2", type: "adjective", tags: ["description"],
        examples: [{ de: "Deutsch Grammatik ist schwierig.", en: "German grammar is difficult." }, { de: "Die Situation ist sehr schwierig.", en: "The situation is very difficult." }]
    },
    {
        id: 244, de: "möglich", en: "possible", level: "A2", type: "adjective", tags: ["description"],
        examples: [{ de: "Ist das heute noch möglich?", en: "Is that still possible today?" }, { de: "Alles ist möglich!", en: "Everything is possible!" }]
    },
    {
        id: 245, de: "richtig", en: "correct / right", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Das ist richtig!", en: "That is correct!" }, { de: "Ist das die richtige Straße?", en: "Is this the right street?" }]
    },
    {
        id: 246, de: "falsch", en: "wrong / false", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Ich glaube, das ist falsch.", en: "I think that is wrong." }, { de: "Die Antwort ist falsch.", en: "The answer is wrong." }]
    },
    {
        id: 247, de: "gleich", en: "same / equal / in a moment", level: "A2", type: "adjective", tags: ["description", "time"],
        examples: [{ de: "Wir sind gleich alt.", en: "We are the same age." }, { de: "Ich komme gleich!", en: "I'm coming in a moment!" }],
        tip: "'gleich' as time = immediately/in a moment; as adjective = same/equal."
    },
    {
        id: 248, de: "voll", en: "full", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Der Zug ist voll.", en: "The train is full." }, { de: "Mein Magen ist voll.", en: "My stomach is full." }]
    },
    {
        id: 249, de: "leer", en: "empty", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Die Flasche ist leer.", en: "The bottle is empty." }, { de: "Der Parkplatz ist leer.", en: "The car park is empty." }]
    },
    {
        id: 250, de: "sauber", en: "clean", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Das Zimmer ist sauber.", en: "The room is clean." }, { de: "Hände waschen — sauber bleiben!", en: "Wash hands — stay clean!" }]
    },
    {
        id: 251, de: "schmutzig", en: "dirty", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Die Schuhe sind schmutzig.", en: "The shoes are dirty." }, { de: "Mach dir keine schmutzigen Hände.", en: "Don't get your hands dirty." }]
    },
    {
        id: 252, de: "laut", en: "loud / noisy", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Die Musik ist zu laut.", en: "The music is too loud." }, { de: "Der Nachbar ist sehr laut.", en: "The neighbour is very loud." }]
    },
    {
        id: 253, de: "leise", en: "quiet / soft", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Bitte sprechen Sie leiser!", en: "Please speak more quietly!" }, { de: "Das Baby schläft — sei leise!", en: "The baby is sleeping — be quiet!" }]
    },

    // ── WEATHER & NATURE ──────────────────────────────────────────────────────────
    {
        id: 260, de: "das Wetter", en: "the weather", level: "A1", type: "noun", article: "das", tags: ["weather"],
        examples: [{ de: "Wie ist das Wetter heute?", en: "What is the weather like today?" }, { de: "Das Wetter in Deutschland ist wechselhaft.", en: "The weather in Germany is changeable." }]
    },
    {
        id: 261, de: "die Sonne", en: "the sun", level: "A1", type: "noun", article: "die", tags: ["weather", "nature"],
        examples: [{ de: "Die Sonne scheint den ganzen Tag.", en: "The sun shines all day." }, { de: "Vergiss nicht, Sonnencreme aufzutragen.", en: "Don't forget to apply sunscreen." }]
    },
    {
        id: 262, de: "der Regen", en: "the rain", level: "A1", type: "noun", article: "der", tags: ["weather"],
        examples: [{ de: "Es gibt viel Regen im Herbst.", en: "There is a lot of rain in autumn." }, { de: "Nimm einen Regenschirm mit!", en: "Take an umbrella!" }]
    },
    {
        id: 263, de: "der Schnee", en: "the snow", level: "A1", type: "noun", article: "der", tags: ["weather"],
        examples: [{ de: "Im Winter liegt viel Schnee.", en: "In winter there is a lot of snow." }, { de: "Die Kinder spielen im Schnee.", en: "The children are playing in the snow." }]
    },
    {
        id: 264, de: "der Wind", en: "the wind", level: "A1", type: "noun", article: "der", tags: ["weather"],
        examples: [{ de: "Heute ist ein starker Wind.", en: "Today there is a strong wind." }, { de: "Der Wind kommt aus dem Norden.", en: "The wind comes from the north." }]
    },
    {
        id: 265, de: "heiß", en: "hot", level: "A1", type: "adjective", tags: ["weather", "temperature"],
        examples: [{ de: "Im August ist es in Deutschland sehr heiß.", en: "In August it is very hot in Germany." }, { de: "Der Kaffee ist noch heiß.", en: "The coffee is still hot." }]
    },
    {
        id: 266, de: "kalt", en: "cold", level: "A1", type: "adjective", tags: ["weather", "temperature"],
        examples: [{ de: "Im Januar ist es kalt.", en: "In January it is cold." }, { de: "Mir ist kalt.", en: "I am cold. (lit. It is cold to me)" }]
    },
    {
        id: 267, de: "warm", en: "warm", level: "A1", type: "adjective", tags: ["weather", "temperature"],
        examples: [{ de: "Das Wasser ist schön warm.", en: "The water is nicely warm." }, { de: "Ein warmer Tag im März.", en: "A warm day in March." }]
    },
    {
        id: 268, de: "der Frühling", en: "the spring", level: "A1", type: "noun", article: "der", tags: ["seasons"],
        examples: [{ de: "Im Frühling blühen die Blumen.", en: "In spring the flowers bloom." }, { de: "Der Frühling ist meine Lieblingszeit.", en: "Spring is my favourite season." }]
    },
    {
        id: 269, de: "der Sommer", en: "the summer", level: "A1", type: "noun", article: "der", tags: ["seasons"],
        examples: [{ de: "Im Sommer fahren wir ans Meer.", en: "In summer we go to the sea." }, { de: "Der Sommer 2024 war sehr warm.", en: "The summer of 2024 was very warm." }]
    },
    {
        id: 270, de: "der Herbst", en: "the autumn / fall", level: "A1", type: "noun", article: "der", tags: ["seasons"],
        examples: [{ de: "Im Herbst werden die Blätter bunt.", en: "In autumn the leaves become colourful." }, { de: "Herbst ist die Zeit der Ernte.", en: "Autumn is the harvest season." }]
    },
    {
        id: 271, de: "der Winter", en: "the winter", level: "A1", type: "noun", article: "der", tags: ["seasons"],
        examples: [{ de: "Im Winter mag ich Glühwein trinken.", en: "In winter I like to drink mulled wine." }, { de: "Der Winter in Deutschland kann sehr kalt sein.", en: "Winter in Germany can be very cold." }]
    },

    // ── A2 VOCAB — TRAVEL & TOURISM ───────────────────────────────────────────────
    {
        id: 300, de: "der Urlaub", en: "the holiday / vacation", level: "A2", type: "noun", article: "der", plural: "die Urlaube", tags: ["travel"],
        examples: [{ de: "Ich freue mich auf den Urlaub.", en: "I am looking forward to the holiday." }, { de: "Wo verbringen Sie Ihren Urlaub?", en: "Where are you spending your holiday?" }]
    },
    {
        id: 301, de: "die Reise", en: "the trip / journey", level: "A2", type: "noun", article: "die", plural: "die Reisen", tags: ["travel"],
        examples: [{ de: "Die Reise dauert drei Stunden.", en: "The journey takes three hours." }, { de: "Gute Reise!", en: "Have a good trip!" }]
    },
    {
        id: 302, de: "das Hotel", en: "the hotel", level: "A1", type: "noun", article: "das", plural: "die Hotels", tags: ["travel", "places"],
        examples: [{ de: "Das Hotel liegt direkt am Strand.", en: "The hotel is right on the beach." }, { de: "Ich habe ein Zimmer im Hotel gebucht.", en: "I have booked a room at the hotel." }]
    },
    {
        id: 303, de: "die Unterkunft", en: "the accommodation", level: "A2", type: "noun", article: "die", tags: ["travel"],
        examples: [{ de: "Die Unterkunft ist preiswert und sauber.", en: "The accommodation is affordable and clean." }, { de: "Wir suchen eine günstige Unterkunft.", en: "We are looking for cheap accommodation." }]
    },
    {
        id: 304, de: "das Gepäck", en: "the luggage / baggage", level: "A2", type: "noun", article: "das", tags: ["travel"],
        examples: [{ de: "Mein Gepäck wiegt 23 Kilo.", en: "My luggage weighs 23 kilos." }, { de: "Wo holt man das Gepäck ab?", en: "Where do you collect the luggage?" }]
    },
    {
        id: 305, de: "der Koffer", en: "the suitcase", level: "A2", type: "noun", article: "der", plural: "die Koffer", tags: ["travel"],
        examples: [{ de: "Ich packe den Koffer.", en: "I am packing the suitcase." }, { de: "Der Koffer ist zu schwer.", en: "The suitcase is too heavy." }]
    },
    {
        id: 306, de: "der Pass", en: "the passport", level: "A2", type: "noun", article: "der", plural: "die Pässe", tags: ["travel", "documents"],
        examples: [{ de: "Bitte zeigen Sie Ihren Pass.", en: "Please show your passport." }, { de: "Mein Pass ist noch ein Jahr gültig.", en: "My passport is valid for another year." }]
    },
    {
        id: 307, de: "die Buchung", en: "the booking / reservation", level: "A2", type: "noun", article: "die", plural: "die Buchungen", tags: ["travel"],
        examples: [{ de: "Ich habe eine Online-Buchung gemacht.", en: "I made an online booking." }, { de: "Bitte bestätigen Sie Ihre Buchung.", en: "Please confirm your booking." }]
    },
    {
        id: 308, de: "der Strand", en: "the beach", level: "A2", type: "noun", article: "der", plural: "die Strände", tags: ["travel", "nature"],
        examples: [{ de: "Am Strand liegt man in der Sonne.", en: "At the beach you lie in the sun." }, { de: "Der Strand ist im Sommer sehr belebt.", en: "The beach is very busy in summer." }]
    },
    {
        id: 309, de: "das Gebirge", en: "the mountains / mountain range", level: "A2", type: "noun", article: "das", plural: "die Gebirge", tags: ["travel", "nature"],
        examples: [{ de: "Die Alpen sind das größte Gebirge Europas.", en: "The Alps are Europe's largest mountain range." }, { de: "Im Gebirge wandern wir gern.", en: "We like hiking in the mountains." }]
    },
    {
        id: 310, de: "der See", en: "the lake", level: "A2", type: "noun", article: "der", plural: "die Seen", tags: ["travel", "nature"],
        examples: [{ de: "Wir schwimmen im See.", en: "We swim in the lake." }, { de: "Der Bodensee liegt an der Grenze zu der Schweiz.", en: "Lake Constance is on the border with Switzerland." }],
        tip: "'der See' = lake. 'die See' = the sea/ocean. Different article!"
    },
    {
        id: 311, de: "die Sehenswürdigkeit", en: "the tourist attraction / sight", level: "A2", type: "noun", article: "die", plural: "die Sehenswürdigkeiten", tags: ["travel"],
        examples: [{ de: "Das Brandenburger Tor ist eine bekannte Sehenswürdigkeit.", en: "The Brandenburg Gate is a famous tourist attraction." }, { de: "Welche Sehenswürdigkeiten gibt es hier?", en: "What tourist attractions are there here?" }]
    },
    {
        id: 312, de: "die Stadtführung", en: "the city tour / guided tour", level: "A2", type: "noun", article: "die", plural: "die Stadtführungen", tags: ["travel"],
        examples: [{ de: "Wir machen eine Stadtführung auf Deutsch.", en: "We are doing a city tour in German." }, { de: "Die Stadtführung dauert zwei Stunden.", en: "The city tour lasts two hours." }]
    },

    // ── A2 — COMMUNICATION & MEDIA ────────────────────────────────────────────────
    {
        id: 320, de: "das Handy", en: "the mobile phone", level: "A1", type: "noun", article: "das", plural: "die Handys", tags: ["technology"],
        examples: [{ de: "Mein Handy ist kaputt.", en: "My mobile phone is broken." }, { de: "Ich lade mein Handy auf.", en: "I am charging my mobile phone." }]
    },
    {
        id: 321, de: "das Internet", en: "the internet", level: "A1", type: "noun", article: "das", tags: ["technology"],
        examples: [{ de: "Das Internet ist hier sehr langsam.", en: "The internet here is very slow." }, { de: "Ich kaufe alles über das Internet.", en: "I buy everything over the internet." }]
    },
    {
        id: 322, de: "die E-Mail", en: "the email", level: "A1", type: "noun", article: "die", plural: "die E-Mails", tags: ["technology", "communication"],
        examples: [{ de: "Schicken Sie mir bitte eine E-Mail.", en: "Please send me an email." }, { de: "Ich habe Ihre E-Mail erhalten.", en: "I have received your email." }]
    },
    {
        id: 323, de: "der Brief", en: "the letter", level: "A1", type: "noun", article: "der", plural: "die Briefe", tags: ["communication"],
        examples: [{ de: "Ich schreibe einen Brief an meine Eltern.", en: "I am writing a letter to my parents." }, { de: "Den Brief schicke ich per Post.", en: "I'm sending the letter by post." }]
    },
    {
        id: 324, de: "die Nachricht", en: "the message / news", level: "A2", type: "noun", article: "die", plural: "die Nachrichten", tags: ["communication", "media"],
        examples: [{ de: "Ich habe eine Nachricht für Sie.", en: "I have a message for you." }, { de: "Die Nachrichten kommen um 20 Uhr.", en: "The news comes on at 8 pm." }],
        tip: "'die Nachrichten' (plural) = the news on TV/radio; 'eine Nachricht' = a message."
    },
    {
        id: 325, de: "das Gespräch", en: "the conversation / talk", level: "A2", type: "noun", article: "das", plural: "die Gespräche", tags: ["communication"],
        examples: [{ de: "Das war ein interessantes Gespräch.", en: "That was an interesting conversation." }, { de: "Können wir ein Gespräch führen?", en: "Can we have a conversation?" }]
    },
    {
        id: 326, de: "der Anruf", en: "the phone call", level: "A2", type: "noun", article: "der", plural: "die Anrufe", tags: ["communication"],
        examples: [{ de: "Ich habe einen Anruf verpasst.", en: "I missed a phone call." }, { de: "Ich mache einen Anruf.", en: "I am making a phone call." }]
    },

    // ── A2 — FEELINGS & OPINIONS ──────────────────────────────────────────────────
    {
        id: 340, de: "glücklich", en: "happy", level: "A1", type: "adjective", tags: ["feelings"],
        examples: [{ de: "Ich bin sehr glücklich hier.", en: "I am very happy here." }, { de: "Sie macht mich glücklich.", en: "She makes me happy." }]
    },
    {
        id: 341, de: "traurig", en: "sad", level: "A1", type: "adjective", tags: ["feelings"],
        examples: [{ de: "Er ist nach dem Abschied sehr traurig.", en: "He is very sad after the farewell." }, { de: "Der Film ist sehr traurig.", en: "The film is very sad." }]
    },
    {
        id: 342, de: "aufgeregt", en: "excited / nervous", level: "A2", type: "adjective", tags: ["feelings"],
        examples: [{ de: "Ich bin aufgeregt vor dem Vorstellungsgespräch.", en: "I am nervous before the job interview." }, { de: "Die Kinder sind aufgeregt wegen Weihnachten.", en: "The children are excited about Christmas." }]
    },
    {
        id: 343, de: "müde", en: "tired", level: "A1", type: "adjective", tags: ["feelings"],
        examples: [{ de: "Ich bin so müde — ich gehe schlafen.", en: "I am so tired — I'm going to sleep." }, { de: "Nach der langen Reise bin ich müde.", en: "I'm tired after the long journey." }]
    },
    {
        id: 344, de: "langweilig", en: "boring", level: "A2", type: "adjective", tags: ["feelings", "description"],
        examples: [{ de: "Der Film war langweilig.", en: "The film was boring." }, { de: "Die Arbeit ist manchmal langweilig.", en: "The work is sometimes boring." }]
    },
    {
        id: 345, de: "interessant", en: "interesting", level: "A1", type: "adjective", tags: ["description", "feelings"],
        examples: [{ de: "Das Buch ist sehr interessant.", en: "The book is very interesting." }, { de: "Ein interessanter Beruf.", en: "An interesting profession." }]
    },
    {
        id: 346, de: "die Meinung", en: "the opinion", level: "A2", type: "noun", article: "die", plural: "die Meinungen", tags: ["communication"],
        examples: [{ de: "Was ist Ihre Meinung dazu?", en: "What is your opinion on this?" }, { de: "Meiner Meinung nach ist das falsch.", en: "In my opinion that is wrong." }]
    },
    {
        id: 347, de: "der Grund", en: "the reason", level: "A2", type: "noun", article: "der", plural: "die Gründe", tags: ["communication"],
        examples: [{ de: "Was ist der Grund dafür?", en: "What is the reason for that?" }, { de: "Aus welchem Grund kommen Sie?", en: "For what reason are you coming?" }]
    },

    // ── A2 — HOUSING ADS & DOCUMENTS ─────────────────────────────────────────────
    {
        id: 360, de: "der Vertrag", en: "the contract", level: "A2", type: "noun", article: "der", plural: "die Verträge", tags: ["documents", "work"],
        examples: [{ de: "Ich unterschreibe den Mietvertrag.", en: "I am signing the rental contract." }, { de: "Lesen Sie den Vertrag sorgfältig.", en: "Read the contract carefully." }]
    },
    {
        id: 361, de: "das Formular", en: "the form", level: "A2", type: "noun", article: "das", plural: "die Formulare", tags: ["documents"],
        examples: [{ de: "Bitte füllen Sie das Formular aus.", en: "Please fill in the form." }, { de: "Das Anmeldeformular ist auf Seite 3.", en: "The registration form is on page 3." }]
    },
    {
        id: 362, de: "die Unterschrift", en: "the signature", level: "A2", type: "noun", article: "die", plural: "die Unterschriften", tags: ["documents"],
        examples: [{ de: "Bitte setzen Sie hier Ihre Unterschrift.", en: "Please put your signature here." }, { de: "Ich brauche Ihre Unterschrift.", en: "I need your signature." }]
    },
    {
        id: 363, de: "der Personalausweis", en: "the identity card", level: "A2", type: "noun", article: "der", plural: "die Personalausweise", tags: ["documents"],
        examples: [{ de: "Zeigen Sie bitte Ihren Personalausweis.", en: "Please show your identity card." }, { de: "Der Personalausweis ist zehn Jahre gültig.", en: "The identity card is valid for ten years." }]
    },

    // ── COLOURS ───────────────────────────────────────────────────────────────────
    {
        id: 380, de: "rot", en: "red", level: "A1", type: "adjective", tags: ["colours"],
        examples: [{ de: "Die Ampel ist rot.", en: "The traffic light is red." }, { de: "Sie trägt ein rotes Kleid.", en: "She is wearing a red dress." }]
    },
    {
        id: 381, de: "blau", en: "blue", level: "A1", type: "adjective", tags: ["colours"],
        examples: [{ de: "Der Himmel ist blau.", en: "The sky is blue." }, { de: "Er hat blaue Augen.", en: "He has blue eyes." }]
    },
    {
        id: 382, de: "grün", en: "green", level: "A1", type: "adjective", tags: ["colours"],
        examples: [{ de: "Das Gras ist grün.", en: "The grass is green." }, { de: "Grüne Ampel — man darf fahren.", en: "Green light — you may drive." }]
    },
    {
        id: 383, de: "gelb", en: "yellow", level: "A1", type: "adjective", tags: ["colours"],
        examples: [{ de: "Die Banane ist gelb.", en: "The banana is yellow." }, { de: "Das gelbe Haus gefällt mir.", en: "I like the yellow house." }]
    },
    {
        id: 384, de: "weiß", en: "white", level: "A1", type: "adjective", tags: ["colours"],
        examples: [{ de: "Der Schnee ist weiß.", en: "The snow is white." }, { de: "Sie trägt ein weißes Hemd.", en: "She is wearing a white shirt." }]
    },
    {
        id: 385, de: "schwarz", en: "black", level: "A1", type: "adjective", tags: ["colours"],
        examples: [{ de: "Die Katze ist schwarz.", en: "The cat is black." }, { de: "Ich trinke Kaffee schwarz.", en: "I drink coffee black." }]
    },
    {
        id: 386, de: "grau", en: "grey", level: "A1", type: "adjective", tags: ["colours"],
        examples: [{ de: "Das Wetter ist grau und trüb.", en: "The weather is grey and dreary." }, { de: "Ein grauer Anzug.", en: "A grey suit." }]
    },
    {
        id: 387, de: "braun", en: "brown", level: "A1", type: "adjective", tags: ["colours"],
        examples: [{ de: "Er hat braune Haare.", en: "He has brown hair." }, { de: "Das Brot ist schön braun gebacken.", en: "The bread is nicely baked brown." }]
    },

    // ── CLOTHING ──────────────────────────────────────────────────────────────────
    {
        id: 390, de: "das Kleid", en: "the dress", level: "A1", type: "noun", article: "das", plural: "die Kleider", tags: ["clothing"],
        examples: [{ de: "Das Kleid ist wunderschön.", en: "The dress is wonderful." }, { de: "Sie trägt ein blaues Kleid.", en: "She is wearing a blue dress." }]
    },
    {
        id: 391, de: "die Hose", en: "the trousers", level: "A1", type: "noun", article: "die", plural: "die Hosen", tags: ["clothing"],
        examples: [{ de: "Diese Hose passt mir sehr gut.", en: "These trousers fit me very well." }, { de: "Ich brauche eine neue Jeans.", en: "I need new jeans." }]
    },
    {
        id: 392, de: "das Hemd", en: "the shirt", level: "A1", type: "noun", article: "das", plural: "die Hemden", tags: ["clothing"],
        examples: [{ de: "Ich brauche ein Hemd für das Vorstellungsgespräch.", en: "I need a shirt for the job interview." }, { de: "Das weiße Hemd sieht professionell aus.", en: "The white shirt looks professional." }]
    },
    {
        id: 393, de: "die Jacke", en: "the jacket", level: "A1", type: "noun", article: "die", plural: "die Jacken", tags: ["clothing"],
        examples: [{ de: "Nimm eine Jacke mit — es ist kalt!", en: "Take a jacket — it's cold!" }, { de: "Die Jacke ist aus Leder.", en: "The jacket is made of leather." }]
    },
    {
        id: 394, de: "der Schuh", en: "the shoe", level: "A1", type: "noun", article: "der", plural: "die Schuhe", tags: ["clothing"],
        examples: [{ de: "Diese Schuhe sind sehr bequem.", en: "These shoes are very comfortable." }, { de: "Welche Schuhgröße haben Sie?", en: "What shoe size do you take?" }]
    },
    {
        id: 395, de: "die Größe", en: "the size", level: "A2", type: "noun", article: "die", plural: "die Größen", tags: ["clothing", "shopping"],
        examples: [{ de: "Welche Größe tragen Sie?", en: "What size do you wear?" }, { de: "Haben Sie das in Größe 42?", en: "Do you have this in size 42?" }]
    },

    // ── EXTENDED: FAMILY & STAGES OF LIFE ─────────────────────────────────────────
    {
        id: 400, de: "die Eltern", en: "the parents", level: "A1", type: "noun", article: "die", plural: "die Eltern", tags: ["family", "people"],
        examples: [{ de: "Meine Eltern leben in Spanien.", en: "My parents live in Spain." }, { de: "Er besucht seine Eltern am Wochenende.", en: "He is visiting his parents at the weekend." }],
        tip: "'Eltern' is always plural, just like in English."
    },
    {
        id: 401, de: "der Großvater", en: "the grandfather / granddad", level: "A1", type: "noun", article: "der", plural: "die Großväter", tags: ["family"],
        examples: [{ de: "Mein Großvater ist 80 Jahre alt.", en: "My grandfather is 80 years old." }, { de: "Opa liest gern Zeitung.", en: "Granddad likes to read the newspaper." }]
    },
    {
        id: 402, de: "die Großmutter", en: "the grandmother / grandma", level: "A1", type: "noun", article: "die", plural: "die Großmütter", tags: ["family"],
        examples: [{ de: "Meine Großmutter backt den besten Kuchen.", en: "My grandmother bakes the best cake." }, { de: "Oma kommt heute zu Besuch.", en: "Grandma is coming to visit today." }]
    },
    {
        id: 403, de: "das Baby", en: "the baby", level: "A1", type: "noun", article: "das", plural: "die Babys", tags: ["family", "people"],
        examples: [{ de: "Das Baby schläft im Schlafzimmer.", en: "The baby is sleeping in the bedroom." }, { de: "Sie haben ein neues Baby bekommen.", en: "They had a new baby." }]
    },

    // ── EXTENDED: FURNITURE & HOME ────────────────────────────────────────────────
    {
        id: 420, de: "der Tisch", en: "the table", level: "A1", type: "noun", article: "der", plural: "die Tische", tags: ["home", "furniture"],
        examples: [{ de: "Das Buch liegt auf dem Tisch.", en: "The book is lying on the table." }, { de: "Wir brauchen einen größeren Tisch.", en: "We need a bigger table." }]
    },
    {
        id: 421, de: "der Stuhl", en: "the chair", level: "A1", type: "noun", article: "der", plural: "die Stühle", tags: ["home", "furniture"],
        examples: [{ de: "Nimm dir einen Stuhl und setz dich.", en: "Grab a chair and sit down." }, { de: "Der Stuhl ist sehr unbequem.", en: "The chair is very uncomfortable." }]
    },
    {
        id: 422, de: "das Bett", en: "the bed", level: "A1", type: "noun", article: "das", plural: "die Betten", tags: ["home", "furniture"],
        examples: [{ de: "Ich bin müde und gehe ins Bett.", en: "I am tired and going to bed." }, { de: "Das Bett ist frisch gemacht.", en: "The bed is freshly made." }]
    },
    {
        id: 423, de: "der Schrank", en: "the cupboard / wardrobe", level: "A1", type: "noun", article: "der", plural: "die Schränke", tags: ["home", "furniture"],
        examples: [{ de: "Die Teller sind im Schrank.", en: "The plates are in the cupboard." }, { de: "Ich brauche einen neuen Schrank für meine Kleidung.", en: "I need a new wardrobe for my clothes." }]
    },
    {
        id: 424, de: "die Lampe", en: "the lamp", level: "A1", type: "noun", article: "die", plural: "die Lampen", tags: ["home", "furniture"],
        examples: [{ de: "Mach bitte die Lampe an, es ist dunkel.", en: "Please turn the lamp on, it's dark." }, { de: "Die Lampe hängt über dem Tisch.", en: "The lamp hangs above the table." }]
    },

    // ── EXTENDED: LEISURE & PLACES ────────────────────────────────────────────────
    {
        id: 440, de: "das Kino", en: "the cinema", level: "A1", type: "noun", article: "das", plural: "die Kinos", tags: ["places", "leisure"],
        examples: [{ de: "Gehen wir heute Abend ins Kino?", en: "Shall we go to the cinema tonight?" }, { de: "Welcher Film läuft im Kino?", en: "What film is showing at the cinema?" }]
    },
    {
        id: 441, de: "das Museum", en: "the museum", level: "A1", type: "noun", article: "das", plural: "die Museen", tags: ["places", "leisure"],
        examples: [{ de: "Am Sonntag ist der Eintritt ins Museum frei.", en: "On Sunday entry to the museum is free." }, { de: "Wir besuchen das Kunstmuseum.", en: "We are visiting the art museum." }]
    },
    {
        id: 442, de: "der Park", en: "the park", level: "A1", type: "noun", article: "der", plural: "die Parks", tags: ["places", "nature"],
        examples: [{ de: "Wir machen einen Spaziergang im Park.", en: "We are taking a walk in the park." }, { de: "Im Park spielen viele Kinder.", en: "Many children are playing in the park." }]
    },
    {
        id: 443, de: "die Bäckerei", en: "the bakery", level: "A1", type: "noun", article: "die", plural: "die Bäckereien", tags: ["places", "shopping", "food"],
        examples: [{ de: "Ich kaufe frisches Brot in der Bäckerei.", en: "I buy fresh bread at the bakery." }, { de: "Die Bäckerei öffnet schon um 6 Uhr.", en: "The bakery opens at 6 o'clock already." }]
    },

    // ── EXTENDED: FOOD & DRINK ────────────────────────────────────────────────────
    {
        id: 460, de: "der Kuchen", en: "the cake", level: "A1", type: "noun", article: "der", plural: "die Kuchen", tags: ["food"],
        examples: [{ de: "Möchtest du ein Stück Kuchen?", en: "Would you like a piece of cake?" }, { de: "Der Schokoladenkuchen schmeckt fantastisch.", en: "The chocolate cake tastes fantastic." }]
    },
    {
        id: 461, de: "die Schokolade", en: "the chocolate", level: "A1", type: "noun", article: "die", plural: "die Schokoladen", tags: ["food"],
        examples: [{ de: "Schweizer Schokolade ist sehr berühmt.", en: "Swiss chocolate is very famous." }, { de: "Ich esse zu viel Schokolade.", en: "I eat too much chocolate." }]
    },
    {
        id: 462, de: "der Reis", en: "the rice", level: "A1", type: "noun", article: "der", tags: ["food"],
        examples: [{ de: "Ich esse Hähnchen mit Reis.", en: "I'm eating chicken with rice." }, { de: "Der Reis muss noch kochen.", en: "The rice still needs to cook." }]
    },
    {
        id: 463, de: "die Nudeln", en: "the noodles / pasta", level: "A1", type: "noun", article: "die", plural: "die Nudeln", tags: ["food"],
        examples: [{ de: "Kinder lieben Nudeln mit Tomatensoße.", en: "Children love pasta with tomato sauce." }, { de: "Sollen wir heute Nudeln kochen?", en: "Should we cook pasta today?" }]
    },
    {
        id: 464, de: "die Marmelade", en: "the jam / marmalade", level: "A1", type: "noun", article: "die", plural: "die Marmeladen", tags: ["food"],
        examples: [{ de: "Zum Frühstück esse ich ein Brötchen mit Marmelade.", en: "For breakfast I eat a bread roll with jam." }, { de: "Das ist selbstgemachte Erdbeermarmelade.", en: "This is homemade strawberry jam." }]
    },

    // ── EXTENDED: BODY PARTS ──────────────────────────────────────────────────────
    {
        id: 480, de: "das Haar", en: "the hair", level: "A1", type: "noun", article: "das", plural: "die Haare", tags: ["body"],
        examples: [{ de: "Sie hat lange, blonde Haare.", en: "She has long, blonde hair." }, { de: "Ich muss mir die Haare waschen.", en: "I need to wash my hair." }],
        tip: "Usually used in the plural 'die Haare' when talking about a person's hair in general."
    },
    {
        id: 481, de: "das Ohr", en: "the ear", level: "A1", type: "noun", article: "das", plural: "die Ohren", tags: ["body"],
        examples: [{ de: "Mir tun die Ohren weh.", en: "My ears hurt." }, { de: "Halt dir die Ohren zu, es wird laut!", en: "Cover your ears, it's getting loud!" }]
    },
    {
        id: 482, de: "die Nase", en: "the nose", level: "A1", type: "noun", article: "die", plural: "die Nasen", tags: ["body"],
        examples: [{ de: "Ich habe einen Schnupfen, meine Nase läuft.", en: "I have a cold, my nose is running." }, { de: "Er hat eine kleine Nase.", en: "He has a small nose." }]
    },
    {
        id: 483, de: "der Fuß", en: "the foot", level: "A1", type: "noun", article: "der", plural: "die Füße", tags: ["body"],
        examples: [{ de: "Wir gehen zu Fuß zur Schule.", en: "We go to school on foot." }, { de: "Meine Füße sind kalt.", en: "My feet are cold." }]
    },
    {
        id: 484, de: "der Zahn", en: "the tooth", level: "A2", type: "noun", article: "der", plural: "die Zähne", tags: ["body", "health"],
        examples: [{ de: "Ich putze mir zweimal täglich die Zähne.", en: "I brush my teeth twice a day." }, { de: "Ich habe schreckliche Zahnschmerzen.", en: "I have terrible toothache." }]
    },

    // ── EXTENDED: CLOTHING ────────────────────────────────────────────────────────
    {
        id: 500, de: "der Pullover", en: "the sweater / jumper", level: "A1", type: "noun", article: "der", plural: "die Pullover", tags: ["clothing"],
        examples: [{ de: "Zieh dir einen Pullover an, es ist kühl.", en: "Put on a sweater, it's chilly." }, { de: "Mein Pullover ist aus Wolle.", en: "My sweater is made of wool." }]
    },
    {
        id: 501, de: "der Mantel", en: "the coat", level: "A1", type: "noun", article: "der", plural: "die Mäntel", tags: ["clothing"],
        examples: [{ de: "Im Winter brauche ich einen dicken Mantel.", en: "In winter I need a thick coat." }, { de: "Häng deinen Mantel an die Garderobe.", en: "Hang your coat on the coat rack." }]
    },
    {
        id: 502, de: "das T-Shirt", en: "the T-shirt", level: "A1", type: "noun", article: "das", plural: "die T-Shirts", tags: ["clothing"],
        examples: [{ de: "Im Sommer trage ich nur T-Shirts.", en: "In summer I only wear T-shirts." }, { de: "Ich habe ein rotes T-Shirt gekauft.", en: "I bought a red T-shirt." }]
    },
    {
        id: 503, de: "die Socke", en: "the sock", level: "A1", type: "noun", article: "die", plural: "die Socken", tags: ["clothing"],
        examples: [{ de: "Ich brauche ein neues Paar Socken.", en: "I need a new pair of socks." }, { de: "Meine Socken haben Löcher.", en: "My socks have holes in them." }]
    },

    // ── EXTENDED: DIRECTIONS & LOCATIONS ──────────────────────────────────────────
    {
        id: 520, de: "links", en: "left", level: "A1", type: "adverb", tags: ["directions", "places"],
        examples: [{ de: "Die Bank ist auf der linken Seite.", en: "The bank is on the left side." }, { de: "Gehen Sie hier nach links.", en: "Go left here." }]
    },
    {
        id: 521, de: "rechts", en: "right (direction)", level: "A1", type: "adverb", tags: ["directions", "places"],
        examples: [{ de: "Biegen Sie an der Ampel rechts ab.", en: "Turn right at the traffic lights." }, { de: "Das Kino liegt rechts neben der Post.", en: "The cinema is located right next to the post office." }]
    },
    {
        id: 522, de: "geradeaus", en: "straight ahead", level: "A1", type: "adverb", tags: ["directions", "places"],
        examples: [{ de: "Gehen Sie immer geradeaus.", en: "Keep going straight ahead." }, { de: "Der Bahnhof ist einfach geradeaus.", en: "The train station is just straight ahead." }]
    },
    {
        id: 523, de: "hier", en: "here", level: "A1", type: "adverb", tags: ["directions"],
        examples: [{ de: "Hier ist Ihr Kaffee.", en: "Here is your coffee." }, { de: "Wir sind hier im Zentrum.", en: "We are here in the centre." }]
    },
    {
        id: 524, de: "dort", en: "there", level: "A1", type: "adverb", tags: ["directions"],
        examples: [{ de: "Mein Auto steht dort drüben.", en: "My car is parked over there." }, { de: "Wer ist die Frau dort?", en: "Who is the woman there?" }]
    },

    // ── EXTENDED: DESCRIPTIVE ADJECTIVES (OPPOSITES) ──────────────────────────────
    {
        id: 540, de: "hell", en: "bright / light (colour)", level: "A1", type: "adjective", tags: ["description", "colours"],
        examples: [{ de: "Im Sommer bleibt es lange hell.", en: "In summer it stays light for a long time." }, { de: "Ich trage gern hellblaue Hemden.", en: "I like wearing light blue shirts." }]
    },
    {
        id: 541, de: "dunkel", en: "dark", level: "A1", type: "adjective", tags: ["description", "colours"],
        examples: [{ de: "Es wird schon dunkel.", en: "It's already getting dark." }, { de: "Er trägt einen dunklen Anzug.", en: "He is wearing a dark suit." }]
    },
    {
        id: 542, de: "stark", en: "strong", level: "A2", type: "adjective", tags: ["description", "feelings"],
        examples: [{ de: "Mein Bruder ist sehr stark.", en: "My brother is very strong." }, { de: "Heute weht ein starker Wind.", en: "A strong wind is blowing today." }]
    },
    {
        id: 543, de: "schwach", en: "weak", level: "A2", type: "adjective", tags: ["description", "feelings"],
        examples: [{ de: "Nach der Krankheit fühlte er sich schwach.", en: "After the illness he felt weak." }, { de: "Der Kaffee ist mir zu schwach.", en: "The coffee is too weak for me." }]
    },
    {
        id: 544, de: "nah", en: "near / close", level: "A2", type: "adjective", tags: ["description", "places"],
        examples: [{ de: "Die Schule ist sehr nah.", en: "The school is very close." }, { de: "Wir suchen ein Hotel in der Nähe des Bahnhofs.", en: "We are looking for a hotel near the train station." }]
    },
    {
        id: 545, de: "weit", en: "far", level: "A2", type: "adjective", tags: ["description", "places"],
        examples: [{ de: "Ist es noch weit bis nach Berlin?", en: "Is it still far to Berlin?" }, { de: "Der Weg war sehr weit.", en: "The journey was very long/far." }]
    },
    // ── VERBS (A1/A2 CORE) ───────────────────────────────────────────────────────
    {
        id: 400, de: "gehen", en: "to go", level: "A1", type: "verb", tags: ["verb", "movement"],
        examples: [{ de: "Ich gehe zur Arbeit.", en: "I go to work." }, { de: "Wir gehen heute ins Kino.", en: "We are going to the cinema today." }]
    },
    {
        id: 401, de: "kommen", en: "to come", level: "A1", type: "verb", tags: ["verb", "movement"],
        examples: [{ de: "Er kommt aus Deutschland.", en: "He comes from Germany." }, { de: "Kommst du mit?", en: "Are you coming along?" }]
    },
    {
        id: 402, de: "machen", en: "to make / do", level: "A1", type: "verb", tags: ["verb"],
        examples: [{ de: "Ich mache meine Hausaufgaben.", en: "I do my homework." }, { de: "Was machst du heute?", en: "What are you doing today?" }]
    },
    {
        id: 403, de: "nehmen", en: "to take", level: "A1", type: "verb", tags: ["verb"],
        examples: [{ de: "Ich nehme den Bus.", en: "I take the bus." }, { de: "Nehmen Sie das Medikament.", en: "Take the medication." }]
    },
    {
        id: 404, de: "geben", en: "to give", level: "A1", type: "verb", tags: ["verb"],
        examples: [{ de: "Ich gebe dir das Buch.", en: "I give you the book." }, { de: "Es gibt viele Möglichkeiten.", en: "There are many possibilities." }]
    },
    {
        id: 405, de: "finden", en: "to find", level: "A1", type: "verb", tags: ["verb"],
        examples: [{ de: "Ich finde den Schlüssel nicht.", en: "I can't find the key." }, { de: "Wie findest du das?", en: "How do you find that?" }]
    },
    {
        id: 406, de: "bleiben", en: "to stay", level: "A1", type: "verb", tags: ["verb"],
        examples: [{ de: "Ich bleibe heute zu Hause.", en: "I stay at home today." }, { de: "Bleib ruhig!", en: "Stay calm!" }]
    },
    {
        id: 407, de: "arbeiten", en: "to work", level: "A1", type: "verb", tags: ["verb", "work"],
        examples: [{ de: "Ich arbeite im Büro.", en: "I work in an office." }, { de: "Er arbeitet viel.", en: "He works a lot." }]
    },
    {
        id: 408, de: "lernen", en: "to learn", level: "A1", type: "verb", tags: ["verb", "education"],
        examples: [{ de: "Ich lerne Deutsch.", en: "I learn German." }, { de: "Wir lernen für die Prüfung.", en: "We study for the exam." }]
    },
    {
        id: 409, de: "verstehen", en: "to understand", level: "A1", type: "verb", tags: ["verb", "communication"],
        examples: [{ de: "Ich verstehe dich nicht.", en: "I don't understand you." }, { de: "Verstehen Sie Deutsch?", en: "Do you understand German?" }]
    },

    // ── MODAL VERBS ──────────────────────────────────────────────────────────────
    {
        id: 420, de: "können", en: "can / to be able to", level: "A1", type: "verb", tags: ["modal"],
        examples: [{ de: "Ich kann schwimmen.", en: "I can swim." }, { de: "Kannst du mir helfen?", en: "Can you help me?" }]
    },
    {
        id: 421, de: "müssen", en: "must / to have to", level: "A1", type: "verb", tags: ["modal"],
        examples: [{ de: "Ich muss arbeiten.", en: "I have to work." }, { de: "Du musst lernen.", en: "You must study." }]
    },
    {
        id: 422, de: "wollen", en: "to want", level: "A1", type: "verb", tags: ["modal"],
        examples: [{ de: "Ich will schlafen.", en: "I want to sleep." }, { de: "Was willst du essen?", en: "What do you want to eat?" }]
    },
    {
        id: 423, de: "sollen", en: "should", level: "A2", type: "verb", tags: ["modal"],
        examples: [{ de: "Du sollst mehr lernen.", en: "You should study more." }, { de: "Was soll ich machen?", en: "What should I do?" }]
    },
    {
        id: 424, de: "dürfen", en: "may / to be allowed to", level: "A1", type: "verb", tags: ["modal"],
        examples: [{ de: "Ich darf hier parken.", en: "I may park here." }, { de: "Darf ich reinkommen?", en: "May I come in?" }]
    },

    // ── COMMON VERBS A2 ──────────────────────────────────────────────────────────
    {
        id: 430, de: "beginnen", en: "to begin", level: "A2", type: "verb", tags: ["verb"],
        examples: [{ de: "Der Kurs beginnt um 9 Uhr.", en: "The course begins at 9." }, { de: "Wir beginnen jetzt.", en: "We begin now." }]
    },
    {
        id: 431, de: "enden", en: "to end", level: "A2", type: "verb", tags: ["verb"],
        examples: [{ de: "Der Film endet spät.", en: "The film ends late." }, { de: "Wann endet der Kurs?", en: "When does the course end?" }]
    },
    {
        id: 432, de: "erklären", en: "to explain", level: "A2", type: "verb", tags: ["communication"],
        examples: [{ de: "Der Lehrer erklärt die Grammatik.", en: "The teacher explains the grammar." }, { de: "Kannst du das erklären?", en: "Can you explain that?" }]
    },
    {
        id: 433, de: "vergessen", en: "to forget", level: "A1", type: "verb", tags: ["verb"],
        examples: [{ de: "Ich habe den Termin vergessen.", en: "I forgot the appointment." }, { de: "Vergiss das nicht!", en: "Don't forget that!" }]
    },
    {
        id: 434, de: "mitbringen", en: "to bring along", level: "A2", type: "verb", tags: ["verb"],
        examples: [{ de: "Bring bitte etwas zu essen mit.", en: "Please bring something to eat." }, { de: "Ich bringe einen Freund mit.", en: "I bring a friend along." }]
    },

    // ── PREPOSITIONS ─────────────────────────────────────────────────────────────
    {
        id: 450, de: "mit", en: "with", level: "A1", type: "preposition", tags: ["grammar"],
        examples: [{ de: "Ich gehe mit dir.", en: "I go with you." }, { de: "Mit dem Bus fahren.", en: "Travel by bus." }]
    },
    {
        id: 451, de: "ohne", en: "without", level: "A1", type: "preposition", tags: ["grammar"],
        examples: [{ de: "Ich komme ohne dich.", en: "I come without you." }, { de: "Kaffee ohne Zucker.", en: "Coffee without sugar." }]
    },
    {
        id: 452, de: "für", en: "for", level: "A1", type: "preposition", tags: ["grammar"],
        examples: [{ de: "Das Geschenk ist für dich.", en: "The gift is for you." }, { de: "Danke für deine Hilfe.", en: "Thanks for your help." }]
    },
    {
        id: 453, de: "gegen", en: "against", level: "A2", type: "preposition", tags: ["grammar"],
        examples: [{ de: "Das Medikament hilft gegen Schmerzen.", en: "The medicine helps against pain." }, { de: "Wir sind gegen die Entscheidung.", en: "We are against the decision." }]
    },
    {
        id: 454, de: "durch", en: "through", level: "A2", type: "preposition", tags: ["grammar"],
        examples: [{ de: "Wir gehen durch den Park.", en: "We walk through the park." }, { de: "Durch Arbeit lernt man viel.", en: "Through work one learns a lot." }]
    },

    // ── CONNECTORS / SENTENCE BUILDING ───────────────────────────────────────────
    {
        id: 470, de: "und", en: "and", level: "A1", type: "conjunction", tags: ["grammar"],
        examples: [{ de: "Ich esse und trinke.", en: "I eat and drink." }, { de: "Er arbeitet und lernt.", en: "He works and studies." }]
    },
    {
        id: 471, de: "oder", en: "or", level: "A1", type: "conjunction", tags: ["grammar"],
        examples: [{ de: "Kaffee oder Tee?", en: "Coffee or tea?" }, { de: "Heute oder morgen?", en: "Today or tomorrow?" }]
    },
    {
        id: 472, de: "aber", en: "but", level: "A1", type: "conjunction", tags: ["grammar"],
        examples: [{ de: "Ich will kommen, aber ich habe keine Zeit.", en: "I want to come, but I have no time." }, { de: "Das ist gut, aber teuer.", en: "That is good but expensive." }]
    },
    {
        id: 473, de: "weil", en: "because", level: "A1", type: "conjunction", tags: ["grammar"],
        examples: [{ de: "Ich bleibe zu Hause, weil ich krank bin.", en: "I stay home because I am sick." }, { de: "Warum? — Weil ich müde bin.", en: "Why? — Because I am tired." }]
    },
    {
        id: 474, de: "dass", en: "that", level: "A2", type: "conjunction", tags: ["grammar"],
        examples: [{ de: "Ich denke, dass er kommt.", en: "I think that he is coming." }, { de: "Es ist gut, dass du da bist.", en: "It is good that you are here." }]
    },

    // ── QUESTION WORDS (IMPORTANT FOR A1/A2) ─────────────────────────────────────
    {
        id: 490, de: "wer", en: "who", level: "A1", type: "question", tags: ["grammar"],
        examples: [{ de: "Wer bist du?", en: "Who are you?" }, { de: "Wer kommt heute?", en: "Who is coming today?" }]
    },
    {
        id: 491, de: "was", en: "what", level: "A1", type: "question", tags: ["grammar"],
        examples: [{ de: "Was machst du?", en: "What are you doing?" }, { de: "Was ist das?", en: "What is that?" }]
    },
    {
        id: 492, de: "wann", en: "when", level: "A1", type: "question", tags: ["grammar"],
        examples: [{ de: "Wann kommst du?", en: "When are you coming?" }, { de: "Wann beginnt der Kurs?", en: "When does the course start?" }]
    },
    {
        id: 493, de: "wo", en: "where", level: "A1", type: "question", tags: ["grammar"],
        examples: [{ de: "Wo wohnst du?", en: "Where do you live?" }, { de: "Wo ist die Toilette?", en: "Where is the toilet?" }]
    },
    {
        id: 494, de: "warum", en: "why", level: "A1", type: "question", tags: ["grammar"],
        examples: [{ de: "Warum bist du müde?", en: "Why are you tired?" }, { de: "Warum lernst du Deutsch?", en: "Why are you learning German?" }]
    },
    {
        id: 495, de: "wie", en: "how", level: "A1", type: "question", tags: ["grammar"],
        examples: [{ de: "Wie geht es dir?", en: "How are you?" }, { de: "Wie funktioniert das?", en: "How does that work?" }]
    },
    // ── NEW USEFUL VERBS ────────────────────────────────────────────────────────
    {
        id: 500, de: "vergessen", en: "to forget", level: "A2", type: "verb", tags: ["actions"],
        examples: [{ de: "Ich habe meinen Schlüssel vergessen.", en: "I forgot my key." }, { de: "Vergiss das nicht!", en: "Don't forget that!" }]
    },
    {
        id: 501, de: "verlieren", en: "to lose", level: "A2", type: "verb", tags: ["actions"],
        examples: [{ de: "Ich habe mein Handy verloren.", en: "I lost my phone." }, { de: "Wir dürfen nicht verlieren.", en: "We must not lose." }]
    },
    {
        id: 502, de: "gewinnen", en: "to win", level: "A2", type: "verb", tags: ["actions"],
        examples: [{ de: "Wer hat das Spiel gewonnen?", en: "Who won the game?" }, { de: "Wir haben endlich gewonnen!", en: "We finally won!" }]
    },
    {
        id: 503, de: "erklären", en: "to explain", level: "A2", type: "verb", tags: ["actions", "communication"],
        examples: [{ de: "Kannst du mir das erklären?", en: "Can you explain that to me?" }, { de: "Der Lehrer erklärt die Grammatik.", en: "The teacher explains the grammar." }]
    },
    {
        id: 504, de: "bezahlen", en: "to pay", level: "A1", type: "verb", tags: ["money", "shopping"],
        examples: [{ de: "Ich möchte bitte bezahlen.", en: "I would like to pay, please." }, { de: "Hast du schon bezahlt?", en: "Have you already paid?" }]
    },
    {
        id: 505, de: "bringen", en: "to bring", level: "A1", type: "verb", tags: ["actions"],
        examples: [{ de: "Kannst du mir einen Kaffee bringen?", en: "Can you bring me a coffee?" }, { de: "Er hat ein Geschenk gebracht.", en: "He brought a gift." }]
    },
    {
        id: 506, de: "lassen", en: "to let / leave", level: "A2", type: "verb", tags: ["actions"],
        examples: [{ de: "Lass mich in Ruhe!", en: "Leave me alone!" }, { de: "Ich habe mein Buch zu Hause gelassen.", en: "I left my book at home." }]
    },
    {
        id: 507, de: "kennen", en: "to know (a person/place)", level: "A1", type: "verb", tags: ["actions", "people"],
        examples: [{ de: "Kennst du diesen Mann?", en: "Do you know this man?" }, { de: "Ich kenne Paris sehr gut.", en: "I know Paris very well." }]
    },

    // ── NEW ADJECTIVES ────────────────────────────────────────────────────────
    {
        id: 510, de: "glücklich", en: "happy", level: "A1", type: "adjective", tags: ["feelings"],
        examples: [{ de: "Sie ist heute sehr glücklich.", en: "She is very happy today." }, { de: "Ein glückliches neues Jahr!", en: "Happy new year!" }]
    },
    {
        id: 511, de: "traurig", en: "sad", level: "A1", type: "adjective", tags: ["feelings"],
        examples: [{ de: "Warum bist du so traurig?", en: "Why are you so sad?" }, { de: "Der Film war sehr traurig.", en: "The film was very sad." }]
    },
    {
        id: 512, de: "müde", en: "tired", level: "A1", type: "adjective", tags: ["feelings", "health"],
        examples: [{ de: "Ich bin müde und gehe ins Bett.", en: "I'm tired and am going to bed." }, { de: "Bist du schon müde?", en: "Are you tired already?" }]
    },
    {
        id: 513, de: "kaputt", en: "broken / tired", level: "A1", type: "adjective", tags: ["description", "feelings"],
        examples: [{ de: "Mein Auto ist kaputt.", en: "My car is broken." }, { de: "Nach der Arbeit bin ich kaputt.", en: "After work I am exhausted." }]
    },

    // ── NEW NOUNS ─────────────────────────────────────────────────────────────
    {
        id: 520, de: "das Problem", en: "the problem", level: "A1", type: "noun", article: "das", plural: "die Probleme", tags: ["abstract"],
        examples: [{ de: "Ich habe ein Problem.", en: "I have a problem." }, { de: "Das ist kein Problem für mich.", en: "That is no problem for me." }]
    },
    {
        id: 521, de: "die Frage", en: "the question", level: "A1", type: "noun", article: "die", plural: "die Fragen", tags: ["communication"],
        examples: [{ de: "Ich habe eine Frage.", en: "I have a question." }, { de: "Das ist eine gute Frage.", en: "That is a good question." }]
    },
    {
        id: 522, de: "die Antwort", en: "the answer", level: "A1", type: "noun", article: "die", plural: "die Antworten", tags: ["communication"],
        examples: [{ de: "Ich warte auf deine Antwort.", en: "I am waiting for your answer." }, { de: "Die Antwort ist falsch.", en: "The answer is wrong." }]
    },

    // ── COLORS ───────────────────────────────────────────────────────────────
    {
        id: 530, de: "rot", en: "red", level: "A1", type: "adjective", tags: ["colors"],
        examples: [{ de: "Die Rose ist rot.", en: "The rose is red." }, { de: "Er hat ein rotes Auto.", en: "He has a red car." }]
    },
    {
        id: 531, de: "blau", en: "blue", level: "A1", type: "adjective", tags: ["colors"],
        examples: [{ de: "Der Himmel ist blau.", en: "The sky is blue." }, { de: "Ich trage ein blaues Hemd.", en: "I'm wearing a blue shirt." }]
    },
    {
        id: 532, de: "grün", en: "green", level: "A1", type: "adjective", tags: ["colors"],
        examples: [{ de: "Die Ampel ist grün.", en: "The traffic light is green." }, { de: "Grüner Tee ist gesund.", en: "Green tea is healthy." }]
    },
    {
        id: 533, de: "gelb", en: "yellow", level: "A1", type: "adjective", tags: ["colors"],
        examples: [{ de: "Die Sonne ist gelb.", en: "The sun is yellow." }, { de: "Gelbe Blumen sind schön.", en: "Yellow flowers are beautiful." }]
    },
    {
        id: 534, de: "schwarz", en: "black", level: "A1", type: "adjective", tags: ["colors"],
        examples: [{ de: "Er trinkt schwarzen Kaffee.", en: "He drinks black coffee." }, { de: "Meine Katze ist schwarz.", en: "My cat is black." }]
    },
    {
        id: 535, de: "weiß", en: "white", level: "A1", type: "adjective", tags: ["colors"],
        examples: [{ de: "Der Schnee ist weiß.", en: "The snow is white." }, { de: "Sie trägt ein weißes Kleid.", en: "She wears a white dress." }],
        tip: "Don't confuse 'weiß' (white) with 'ich weiß' (I know) — same spelling, different meaning!"
    },

    // ── CLOTHING ─────────────────────────────────────────────────────────────
    {
        id: 540, de: "die Jacke", en: "the jacket", level: "A1", type: "noun", article: "die", plural: "die Jacken", tags: ["clothing"],
        examples: [{ de: "Zieh die Jacke an, es ist kalt.", en: "Put on the jacket, it's cold." }, { de: "Meine Jacke ist blau.", en: "My jacket is blue." }]
    },
    {
        id: 541, de: "das Hemd", en: "the shirt", level: "A1", type: "noun", article: "das", plural: "die Hemden", tags: ["clothing"],
        examples: [{ de: "Er bügelt sein Hemd.", en: "He irons his shirt." }, { de: "Dieses Hemd gefällt mir.", en: "I like this shirt." }]
    },
    {
        id: 542, de: "die Hose", en: "the trousers / pants", level: "A1", type: "noun", article: "die", plural: "die Hosen", tags: ["clothing"],
        examples: [{ de: "Die Hose ist zu lang.", en: "The trousers are too long." }, { de: "Ich brauche eine neue Hose.", en: "I need new trousers." }]
    },
    {
        id: 543, de: "der Schuh", en: "the shoe", level: "A1", type: "noun", article: "der", plural: "die Schuhe", tags: ["clothing"],
        examples: [{ de: "Diese Schuhe sind bequem.", en: "These shoes are comfortable." }, { de: "Wo sind meine Schuhe?", en: "Where are my shoes?" }]
    },
    {
        id: 544, de: "das Kleid", en: "the dress", level: "A1", type: "noun", article: "das", plural: "die Kleider", tags: ["clothing"],
        examples: [{ de: "Das Kleid ist wunderschön.", en: "The dress is beautiful." }, { de: "Sie kauft ein neues Kleid.", en: "She is buying a new dress." }]
    },

    // ── EMOTIONS ─────────────────────────────────────────────────────────────
    {
        id: 550, de: "wütend", en: "angry", level: "A2", type: "adjective", tags: ["feelings"],
        examples: [{ de: "Sei nicht wütend auf mich!", en: "Don't be angry at me!" }, { de: "Er ist wütend geworden.", en: "He became angry." }]
    },
    {
        id: 551, de: "nervös", en: "nervous", level: "A2", type: "adjective", tags: ["feelings"],
        examples: [{ de: "Ich bin nervös vor der Prüfung.", en: "I'm nervous before the exam." }, { de: "Warum bist du so nervös?", en: "Why are you so nervous?" }]
    },
    {
        id: 552, de: "aufgeregt", en: "excited", level: "A2", type: "adjective", tags: ["feelings"],
        examples: [{ de: "Die Kinder sind aufgeregt.", en: "The children are excited." }, { de: "Ich bin so aufgeregt wegen morgen!", en: "I'm so excited about tomorrow!" }]
    },
    {
        id: 553, de: "zufrieden", en: "satisfied / content", level: "A2", type: "adjective", tags: ["feelings"],
        examples: [{ de: "Ich bin zufrieden mit dem Ergebnis.", en: "I am satisfied with the result." }, { de: "Bist du zufrieden?", en: "Are you content?" }]
    },
    {
        id: 554, de: "überrascht", en: "surprised", level: "A2", type: "adjective", tags: ["feelings"],
        examples: [{ de: "Ich war total überrascht!", en: "I was totally surprised!" }, { de: "Er sieht überrascht aus.", en: "He looks surprised." }]
    },

    // ── PREPOSITIONS ─────────────────────────────────────────────────────────
    {
        id: 560, de: "in", en: "in / into", level: "A1", type: "preposition", tags: ["grammar", "location"],
        examples: [{ de: "Ich bin in der Schule.", en: "I am in the school." }, { de: "Er geht in die Stadt.", en: "He goes into the city." }],
        tip: "Dative (where? — in DEM Haus) vs Accusative (where to? — in DAS Haus)"
    },
    {
        id: 561, de: "auf", en: "on / onto", level: "A1", type: "preposition", tags: ["grammar", "location"],
        examples: [{ de: "Das Buch liegt auf dem Tisch.", en: "The book is on the table." }, { de: "Er legt das Buch auf den Tisch.", en: "He puts the book onto the table." }]
    },
    {
        id: 562, de: "mit", en: "with", level: "A1", type: "preposition", tags: ["grammar"],
        examples: [{ de: "Ich fahre mit dem Zug.", en: "I travel by train." }, { de: "Kommst du mit mir?", en: "Are you coming with me?" }],
        tip: "'mit' always takes the DATIVE case."
    },
    {
        id: 563, de: "für", en: "for", level: "A1", type: "preposition", tags: ["grammar"],
        examples: [{ de: "Das ist für dich.", en: "That is for you." }, { de: "Danke für alles!", en: "Thanks for everything!" }],
        tip: "'für' always takes the ACCUSATIVE case."
    },
    {
        id: 564, de: "an", en: "at / on (vertical)", level: "A1", type: "preposition", tags: ["grammar", "location"],
        examples: [{ de: "Das Bild hängt an der Wand.", en: "The picture hangs on the wall." }, { de: "Am Montag fängt der Kurs an.", en: "On Monday the course begins." }]
    },
    {
        id: 565, de: "nach", en: "to / after", level: "A1", type: "preposition", tags: ["grammar", "location"],
        examples: [{ de: "Ich fahre nach Berlin.", en: "I am going to Berlin." }, { de: "Nach dem Essen gehen wir spazieren.", en: "After dinner we go for a walk." }],
        tip: "'nach' + city/country (no article): nach Berlin. 'in' + article-countries: in die Schweiz."
    },
    {
        id: 566, de: "von", en: "from / of", level: "A1", type: "preposition", tags: ["grammar"],
        examples: [{ de: "Ich komme von der Arbeit.", en: "I am coming from work." }, { de: "Das ist ein Freund von mir.", en: "That is a friend of mine." }]
    },
    {
        id: 567, de: "Tier", en: "animal", level: "A1", type: "noun", article: "das", plural: "die Tiere", tags: ["animals"],
        examples: [{ de: "Der Zoo hat viele Tiere.", en: "The zoo has many animals." }]
    },
    {
        id: 568, de: "Hund", en: "dog", level: "A1", type: "noun", article: "der", plural: "die Hunde", tags: ["animals"],
        examples: [{ de: "Mein Hund spielt im Garten.", en: "My dog plays in the garden." }]
    },
    {
        id: 569, de: "Katze", en: "cat", level: "A1", type: "noun", article: "die", plural: "die Katzen", tags: ["animals"],
        examples: [{ de: "Die Katze schläft auf dem Sofa.", en: "The cat sleeps on the sofa." }]
    },
    {
        id: 570, de: "Maus", en: "mouse", level: "A1", type: "noun", article: "die", plural: "die Mäuse", tags: ["animals"],
        examples: [{ de: "Die Maus isst Käse.", en: "The mouse eats cheese." }]
    },
    {
        id: 571, de: "Vogel", en: "bird", level: "A1", type: "noun", article: "der", plural: "die Vögel", tags: ["animals"],
        examples: [{ de: "Der Vogel singt im Baum.", en: "The bird sings in the tree." }]
    },
    {
        id: 572, de: "Fisch", en: "fish", level: "A1", type: "noun", article: "der", plural: "die Fische", tags: ["animals"],
        examples: [{ de: "Der Fisch schwimmt im Wasser.", en: "The fish swims in the water." }]
    },
    {
        id: 573, de: "Pferd", en: "horse", level: "A1", type: "noun", article: "das", plural: "die Pferde", tags: ["animals"],
        examples: [{ de: "Das Pferd rennt schnell.", en: "The horse runs fast." }]
    },
    {
        id: 574, de: "Kuh", en: "cow", level: "A1", type: "noun", article: "die", plural: "die Kühe", tags: ["animals"],
        examples: [{ de: "Die Kuh gibt Milch.", en: "The cow gives milk." }]
    },
    {
        id: 575, de: "Schwein", en: "pig", level: "A1", type: "noun", article: "das", plural: "die Schweine", tags: ["animals"],
        examples: [{ de: "Das Schwein ist rosa.", en: "The pig is pink." }]
    },
    {
        id: 576, de: "Schaf", en: "sheep", level: "A1", type: "noun", article: "das", plural: "die Schafe", tags: ["animals"],
        examples: [{ de: "Das Schaf frisst Gras.", en: "The sheep eats grass." }]
    },
    {
        id: 577, de: "Bär", en: "bear", level: "A2", type: "noun", article: "der", plural: "die Bären", tags: ["animals"],
        examples: [{ de: "Der Bär schläft im Winter.", en: "The bear sleeps in winter." }]
    },
    {
        id: 578, de: "Wolf", en: "wolf", level: "A2", type: "noun", article: "der", plural: "die Wölfe", tags: ["animals"],
        examples: [{ de: "Der Wolf heult nachts.", en: "The wolf howls at night." }]
    },
    {
        id: 579, de: "Elefant", en: "elephant", level: "A2", type: "noun", article: "der", plural: "die Elefanten", tags: ["animals"],
        examples: [{ de: "Der Elefant ist groß.", en: "The elephant is big." }]
    },
    {
        id: 580, de: "Löwe", en: "lion", level: "A2", type: "noun", article: "der", plural: "die Löwen", tags: ["animals"],
        examples: [{ de: "Der Löwe ist stark.", en: "The lion is strong." }]
    },
    {
        id: 581, de: "Affe", en: "monkey", level: "A1", type: "noun", article: "der", plural: "die Affen", tags: ["animals"],
        examples: [{ de: "Der Affe isst eine Banane.", en: "The monkey eats a banana." }]
    },
    {
        id: 582, de: "Schlange", en: "snake", level: "A2", type: "noun", article: "die", plural: "die Schlangen", tags: ["animals"],
        examples: [{ de: "Die Schlange ist lang.", en: "The snake is long." }]
    },
    {
        id: 583, de: "Insekt", en: "insect", level: "A2", type: "noun", article: "das", plural: "die Insekten", tags: ["animals"],
        examples: [{ de: "Ich mag keine Insekten.", en: "I don't like insects." }]
    },
    {
        id: 584, de: "Spinne", en: "spider", level: "A1", type: "noun", article: "die", plural: "die Spinnen", tags: ["animals"],
        examples: [{ de: "Viele Leute haben Angst vor Spinnen.", en: "Many people are afraid of spiders." }]
    },
    {
        id: 585, de: "T-Shirt", en: "T-shirt", level: "A1", type: "noun", article: "das", plural: "die T-Shirts", tags: ["clothing"],
        examples: [{ de: "Ich trage ein blaues T-Shirt.", en: "I wear a blue T-shirt." }]
    },
    {
        id: 586, de: "Hose", en: "trousers / pants", level: "A1", type: "noun", article: "die", plural: "die Hosen", tags: ["clothing"],
        examples: [{ de: "Die Hose ist zu kurz.", en: "The trousers are too short." }]
    },
    {
        id: 587, de: "Jeans", en: "jeans", level: "A1", type: "noun", article: "die", plural: "die Jeans", tags: ["clothing"],
        examples: [{ de: "Ich trage jeden Tag Jeans.", en: "I wear jeans every day." }]
    },
    {
        id: 588, de: "Pullover", en: "sweater / jumper", level: "A1", type: "noun", article: "der", plural: "die Pullover", tags: ["clothing"],
        examples: [{ de: "Der Pullover ist warm.", en: "The sweater is warm." }]
    },
    {
        id: 589, de: "Jacke", en: "jacket", level: "A1", type: "noun", article: "die", plural: "die Jacken", tags: ["clothing"],
        examples: [{ de: "Zieh deine Jacke an!", en: "Put on your jacket!" }]
    },
    {
        id: 590, de: "Mantel", en: "coat", level: "A1", type: "noun", article: "der", plural: "die Mäntel", tags: ["clothing"],
        examples: [{ de: "Im Winter brauche ich einen Mantel.", en: "In winter I need a coat." }]
    },
    {
        id: 591, de: "Kleid", en: "dress", level: "A1", type: "noun", article: "das", plural: "die Kleider", tags: ["clothing"],
        examples: [{ de: "Das Kleid ist sehr schön.", en: "The dress is very beautiful." }]
    },
    {
        id: 592, de: "Rock", en: "skirt", level: "A1", type: "noun", article: "der", plural: "die Röcke", tags: ["clothing"],
        examples: [{ de: "Sie trägt einen roten Rock.", en: "She wears a red skirt." }]
    },
    {
        id: 593, de: "Hemd", en: "shirt", level: "A1", type: "noun", article: "das", plural: "die Hemden", tags: ["clothing"],
        examples: [{ de: "Das Hemd muss gewaschen werden.", en: "The shirt needs to be washed." }]
    },
    {
        id: 594, de: "Bluse", en: "blouse", level: "A1", type: "noun", article: "die", plural: "die Blusen", tags: ["clothing"],
        examples: [{ de: "Die Bluse passt gut zu der Hose.", en: "The blouse matches the trousers perfectly." }]
    },
    {
        id: 595, de: "Schuh", en: "shoe", level: "A1", type: "noun", article: "der", plural: "die Schuhe", tags: ["clothing"],
        examples: [{ de: "Die Schuhe sind neu.", en: "The shoes are new." }]
    },
    {
        id: 596, de: "Stiefel", en: "boot", level: "A1", type: "noun", article: "der", plural: "die Stiefel", tags: ["clothing"],
        examples: [{ de: "Im Winter trage ich Stiefel.", en: "In winter I wear boots." }]
    },
    {
        id: 597, de: "Socke", en: "sock", level: "A1", type: "noun", article: "die", plural: "die Socken", tags: ["clothing"],
        examples: [{ de: "Ich brauche neue Socken.", en: "I need new socks." }]
    },
    {
        id: 598, de: "Unterwäsche", en: "underwear", level: "A1", type: "noun", article: "die", tags: ["clothing"],
        examples: [{ de: "Die Unterwäsche ist im Schrank.", en: "The underwear is in the closet." }]
    },
    {
        id: 599, de: "Hut", en: "hat", level: "A2", type: "noun", article: "der", plural: "die Hüte", tags: ["clothing"],
        examples: [{ de: "Der Herr trägt einen Hut.", en: "The gentleman wears a hat." }]
    },
    {
        id: 600, de: "Mütze", en: "cap / beanie", level: "A1", type: "noun", article: "die", plural: "die Mützen", tags: ["clothing"],
        examples: [{ de: "Setz deine Mütze auf!", en: "Put on your cap!" }]
    },
    {
        id: 601, de: "Handschuh", en: "glove", level: "A1", type: "noun", article: "der", plural: "die Handschuhe", tags: ["clothing"],
        examples: [{ de: "Meine Hände sind kalt, ich brauche Handschuhe.", en: "My hands are cold, I need gloves." }]
    },
    {
        id: 602, de: "Schal", en: "scarf", level: "A1", type: "noun", article: "der", plural: "die Schals", tags: ["clothing"],
        examples: [{ de: "Der Schal ist aus Wolle.", en: "The scarf is made of wool." }]
    },
    {
        id: 603, de: "Gürtel", en: "belt", level: "A1", type: "noun", article: "der", plural: "die Gürtel", tags: ["clothing"],
        examples: [{ de: "Der Gürtel hält die Hose.", en: "The belt holds up the trousers." }]
    },
    {
        id: 604, de: "Tasche", en: "bag", level: "A1", type: "noun", article: "die", plural: "die Taschen", tags: ["clothing"],
        examples: [{ de: "Was hast du in deiner Tasche?", en: "What do you have in your bag?" }]
    },
    {
        id: 605, de: "Brille", en: "glasses", level: "A1", type: "noun", article: "die", plural: "die Brillen", tags: ["clothing"],
        examples: [{ de: "Ich brauche eine neue Brille.", en: "I need new glasses." }]
    },
    {
        id: 606, de: "Computer", en: "computer", level: "A1", type: "noun", article: "der", plural: "die Computer", tags: ["tech"],
        examples: [{ de: "Mein Computer ist kaputt.", en: "My computer is broken." }]
    },
    {
        id: 607, de: "Laptop", en: "laptop", level: "A1", type: "noun", article: "der", plural: "die Laptops", tags: ["tech"],
        examples: [{ de: "Ich arbeite am Laptop.", en: "I work on the laptop." }]
    },
    {
        id: 608, de: "Internet", en: "internet", level: "A1", type: "noun", article: "das", tags: ["tech"],
        examples: [{ de: "Wir haben zu Hause kein Internet.", en: "We have no internet at home." }]
    },
    {
        id: 609, de: "Website", en: "website", level: "A1", type: "noun", article: "die", plural: "die Websites", tags: ["tech"],
        examples: [{ de: "Diese Website ist sehr nützlich.", en: "This website is very useful." }]
    },
    {
        id: 610, de: "E-Mail", en: "email", level: "A1", type: "noun", article: "die", plural: "die E-Mails", tags: ["tech"],
        examples: [{ de: "Ich habe dir eine E-Mail geschrieben.", en: "I wrote you an email." }]
    },
    {
        id: 611, de: "Passwort", en: "password", level: "A1", type: "noun", article: "das", plural: "die Passwörter", tags: ["tech"],
        examples: [{ de: "Bitte geben Sie Ihr Passwort ein.", en: "Please enter your password." }]
    },
    {
        id: 612, de: "Handy", en: "mobile phone", level: "A1", type: "noun", article: "das", plural: "die Handys", tags: ["tech"],
        examples: [{ de: "Wo ist mein Handy?", en: "Where is my mobile phone?" }]
    },
    {
        id: 613, de: "Telefon", en: "telephone", level: "A1", type: "noun", article: "das", plural: "die Telefone", tags: ["tech"],
        examples: [{ de: "Das Telefon klingelt.", en: "The telephone is ringing." }]
    },
    {
        id: 614, de: "Bildschirm", en: "screen / monitor", level: "A2", type: "noun", article: "der", plural: "die Bildschirme", tags: ["tech"],
        examples: [{ de: "Der Bildschirm ist sehr groß.", en: "The screen is very large." }]
    },
    {
        id: 615, de: "Tastatur", en: "keyboard", level: "A2", type: "noun", article: "die", plural: "die Tastaturen", tags: ["tech"],
        examples: [{ de: "Meine Tastatur funktioniert nicht.", en: "My keyboard is not working." }]
    },
    {
        id: 616, de: "Maus", en: "mouse (tech)", level: "A1", type: "noun", article: "die", plural: "die Mäuse", tags: ["tech"],
        examples: [{ de: "Klick mit der rechten Maus-Taste.", en: "Click with the right mouse button." }]
    },
    {
        id: 617, de: "Kamera", en: "camera", level: "A1", type: "noun", article: "die", plural: "die Kameras", tags: ["tech"],
        examples: [{ de: "Die Kamera macht gute Fotos.", en: "The camera takes good photos." }]
    },
    {
        id: 618, de: "Kopfhörer", en: "headphones", level: "A1", type: "noun", article: "der", plural: "die Kopfhörer", tags: ["tech"],
        examples: [{ de: "Ich höre Musik mit Kopfhörern.", en: "I listen to music with headphones." }]
    },
    {
        id: 619, de: "App", en: "app", level: "A1", type: "noun", article: "die", plural: "die Apps", tags: ["tech"],
        examples: [{ de: "Laden Sie unsere neue App herunter.", en: "Download our new app." }]
    },
    {
        id: 620, de: "Fernseher", en: "television", level: "A1", type: "noun", article: "der", plural: "die Fernseher", tags: ["tech"],
        examples: [{ de: "Wir haben einen neuen Fernseher gekauft.", en: "We bought a new television." }]
    },
    {
        id: 621, de: "Radio", en: "radio", level: "A1", type: "noun", article: "das", plural: "die Radios", tags: ["tech"],
        examples: [{ de: "Ich höre morgens immer Radio.", en: "I always listen to the radio in the mornings." }]
    },
    {
        id: 622, de: "Strom", en: "electricity / power", level: "A2", type: "noun", article: "der", tags: ["tech"],
        examples: [{ de: "Der Strom ist ausgefallen.", en: "The power went out." }]
    },
    {
        id: 623, de: "Batterie", en: "battery", level: "A2", type: "noun", article: "die", plural: "die Batterien", tags: ["tech"],
        examples: [{ de: "Die Batterie ist fast leer.", en: "The battery is almost empty." }]
    },
    {
        id: 624, de: "Kabel", en: "cable", level: "A2", type: "noun", article: "das", plural: "die Kabel", tags: ["tech"],
        examples: [{ de: "Brauchst du ein USB-Kabel?", en: "Do you need a USB cable?" }]
    },
    {
        id: 625, de: "Drucker", en: "printer", level: "A2", type: "noun", article: "der", plural: "die Drucker", tags: ["tech"],
        examples: [{ de: "Der Drucker hat kein Papier mehr.", en: "The printer is out of paper." }]
    },
    {
        id: 626, de: "Bett", en: "bed", level: "A1", type: "noun", article: "das", plural: "die Betten", tags: ["furniture"],
        examples: [{ de: "Das Bett ist sehr bequem.", en: "The bed is very comfortable." }]
    },
    {
        id: 627, de: "Tisch", en: "table", level: "A1", type: "noun", article: "der", plural: "die Tische", tags: ["furniture"],
        examples: [{ de: "Das Buch liegt auf dem Tisch.", en: "The book is on the table." }]
    },
    {
        id: 628, de: "Stuhl", en: "chair", level: "A1", type: "noun", article: "der", plural: "die Stühle", tags: ["furniture"],
        examples: [{ de: "Bitte nehmen Sie auf dem Stuhl Platz.", en: "Please take a seat on the chair." }]
    },
    {
        id: 629, de: "Sofa", en: "sofa", level: "A1", type: "noun", article: "das", plural: "die Sofas", tags: ["furniture"],
        examples: [{ de: "Wir sitzen gemütlich auf dem Sofa.", en: "We sit comfortably on the sofa." }]
    },
    {
        id: 630, de: "Sessel", en: "armchair", level: "A2", type: "noun", article: "der", plural: "die Sessel", tags: ["furniture"],
        examples: [{ de: "Mein Opa liest im Sessel.", en: "My grandpa reads in the armchair." }]
    },
    {
        id: 631, de: "Schrank", en: "closet/cupboard", level: "A1", type: "noun", article: "der", plural: "die Schränke", tags: ["furniture"],
        examples: [{ de: "Die Jacken hängen im Schrank.", en: "The jackets are hanging in the closet." }]
    },
    {
        id: 632, de: "Regal", en: "shelf", level: "A1", type: "noun", article: "das", plural: "die Regale", tags: ["furniture"],
        examples: [{ de: "Das Regal ist voll mit Büchern.", en: "The shelf is full of books." }]
    },
    {
        id: 633, de: "Teppich", en: "carpet / rug", level: "A1", type: "noun", article: "der", plural: "die Teppiche", tags: ["furniture"],
        examples: [{ de: "Der Teppich ist blau.", en: "The carpet is blue." }]
    },
    {
        id: 634, de: "Lampe", en: "lamp", level: "A1", type: "noun", article: "die", plural: "die Lampen", tags: ["furniture"],
        examples: [{ de: "Mach bitte die Lampe an.", en: "Please turn on the lamp." }]
    },
    {
        id: 635, de: "Spiegel", en: "mirror", level: "A1", type: "noun", article: "der", plural: "die Spiegel", tags: ["furniture"],
        examples: [{ de: "Er schaut in den Spiegel.", en: "He looks in the mirror." }]
    },
    {
        id: 636, de: "Tür", en: "door", level: "A1", type: "noun", article: "die", plural: "die Türen", tags: ["furniture"],
        examples: [{ de: "Mach die Tür zu.", en: "Close the door." }]
    },
    {
        id: 637, de: "Fenster", en: "window", level: "A1", type: "noun", article: "das", plural: "die Fenster", tags: ["furniture"],
        examples: [{ de: "Das Fenster ist offen.", en: "The window is open." }]
    },
    {
        id: 638, de: "Balkon", en: "balcony", level: "A2", type: "noun", article: "der", plural: "die Balkone", tags: ["home"],
        examples: [{ de: "Wir sitzen oft auf dem Balkon.", en: "We often sit on the balcony." }]
    },
    {
        id: 639, de: "Garten", en: "garden", level: "A1", type: "noun", article: "der", plural: "die Gärten", tags: ["home"],
        examples: [{ de: "Der Garten ist sehr gepflegt.", en: "The garden is very well maintained." }]
    },
    {
        id: 640, de: "Dach", en: "roof", level: "A2", type: "noun", article: "das", plural: "die Dächer", tags: ["home"],
        examples: [{ de: "Das Haus hat ein rotes Dach.", en: "The house has a red roof." }]
    },
    {
        id: 641, de: "Keller", en: "basement", level: "A2", type: "noun", article: "der", plural: "die Keller", tags: ["home"],
        examples: [{ de: "Die Fahrräder stehen im Keller.", en: "The bicycles are in the basement." }]
    },
    {
        id: 642, de: "Heizung", en: "heating", level: "A2", type: "noun", article: "die", plural: "die Heizungen", tags: ["home"],
        examples: [{ de: "Die Heizung funktioniert nicht.", en: "The heating is not working." }]
    },
    {
        id: 643, de: "Klimaanlage", en: "air conditioning", level: "A2", type: "noun", article: "die", plural: "die Klimaanlagen", tags: ["home"],
        examples: [{ de: "Die Klimaanlage ist zu kalt.", en: "The air conditioning is too cold." }]
    },
    {
        id: 644, de: "Schlüssel", en: "key", level: "A1", type: "noun", article: "der", plural: "die Schlüssel", tags: ["home"],
        examples: [{ de: "Ich habe meinen Schlüssel verloren.", en: "I lost my key." }]
    },
    {
        id: 645, de: "Wohnung", en: "apartment", level: "A1", type: "noun", article: "die", plural: "die Wohnungen", tags: ["home"],
        examples: [{ de: "Wir mieten eine neue Wohnung.", en: "We are renting a new apartment." }]
    },
    {
        id: 646, de: "Haus", en: "house", level: "A1", type: "noun", article: "das", plural: "die Häuser", tags: ["home"],
        examples: [{ de: "Das Haus hat zwei Stockwerke.", en: "The house has two floors." }]
    },
    {
        id: 647, de: "Zimmer", en: "room", level: "A1", type: "noun", article: "das", plural: "die Zimmer", tags: ["home"],
        examples: [{ de: "Das Hotelzimmer ist klein.", en: "The hotel room is small." }]
    },
    {
        id: 648, de: "Wand", en: "wall", level: "A2", type: "noun", article: "die", plural: "die Wände", tags: ["home"],
        examples: [{ de: "Die Wand ist weiß gestrichen.", en: "The wall is painted white." }]
    },
    {
        id: 649, de: "Boden", en: "floor", level: "A2", type: "noun", article: "der", plural: "die Böden", tags: ["home"],
        examples: [{ de: "Der Boden ist aus Holz.", en: "The floor is made of wood." }]
    },
    {
        id: 650, de: "Decke", en: "ceiling/blanket", level: "A2", type: "noun", article: "die", plural: "die Decken", tags: ["home"],
        examples: [{ de: "Die Decke ist drei Meter hoch.", en: "The ceiling is three meters high." }]
    },
    {
        id: 651, de: "Farbe", en: "color / paint", level: "A1", type: "noun", article: "die", plural: "die Farben", tags: ["art"],
        examples: [{ de: "Welche Farbe magst du?", en: "Which color do you like?" }]
    },
    {
        id: 652, de: "rot", en: "red", level: "A1", type: "adjective", tags: ["colors"],
        examples: [{ de: "Der Apfel ist rot.", en: "The apple is red." }]
    },
    {
        id: 653, de: "blau", en: "blue", level: "A1", type: "adjective", tags: ["colors"],
        examples: [{ de: "Der Himmel ist blau.", en: "The sky is blue." }]
    },
    {
        id: 654, de: "gelb", en: "yellow", level: "A1", type: "adjective", tags: ["colors"],
        examples: [{ de: "Die Sonne ist gelb.", en: "The sun is yellow." }]
    },
    {
        id: 655, de: "grün", en: "green", level: "A1", type: "adjective", tags: ["colors"],
        examples: [{ de: "Das Gras ist grün.", en: "The grass is green." }]
    },
    {
        id: 656, de: "schwarz", en: "black", level: "A1", type: "adjective", tags: ["colors"],
        examples: [{ de: "Das Auto ist schwarz.", en: "The car is black." }]
    },
    {
        id: 657, de: "weiß", en: "white", level: "A1", type: "adjective", tags: ["colors"],
        examples: [{ de: "Der Schnee ist weiß.", en: "The snow is white." }]
    },
    {
        id: 658, de: "grau", en: "gray", level: "A1", type: "adjective", tags: ["colors"],
        examples: [{ de: "Die Wolken sind grau.", en: "The clouds are gray." }]
    },
    {
        id: 659, de: "braun", en: "brown", level: "A1", type: "adjective", tags: ["colors"],
        examples: [{ de: "Die Schuhe sind braun.", en: "The shoes are brown." }]
    },
    {
        id: 660, de: "orange", en: "orange", level: "A1", type: "adjective", tags: ["colors"],
        examples: [{ de: "Die Orange ist orange.", en: "The orange is orange." }]
    },
    {
        id: 661, de: "rosa", en: "pink", level: "A1", type: "adjective", tags: ["colors"],
        examples: [{ de: "Das Schwein ist rosa.", en: "The pig is pink." }]
    },
    {
        id: 662, de: "lila", en: "purple", level: "A1", type: "adjective", tags: ["colors"],
        examples: [{ de: "Die Blume ist lila.", en: "The flower is purple." }]
    },
    {
        id: 663, de: "hell", en: "light/bright", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Das Zimmer ist sehr hell.", en: "The room is very bright." }]
    },
    {
        id: 664, de: "dunkel", en: "dark", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Es wird schon dunkel.", en: "It is getting dark already." }]
    },
    {
        id: 665, de: "schön", en: "beautiful", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Sie hat ein schönes Kleid.", en: "She has a beautiful dress." }]
    },
    {
        id: 666, de: "hässlich", en: "ugly", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Das alte Gebäude ist hässlich.", en: "The old building is ugly." }]
    },
    {
        id: 667, de: "groß", en: "big/large/tall", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Er ist groß und stark.", en: "He is big and strong." }]
    },
    {
        id: 668, de: "klein", en: "small/short", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Die Wohnung ist sehr klein.", en: "The apartment is very small." }]
    },
    {
        id: 669, de: "hoch", en: "high/tall", level: "A2", type: "adjective", tags: ["description"],
        examples: [{ de: "Das Haus ist zwanzig Meter hoch.", en: "The house is twenty meters high." }]
    },
    {
        id: 670, de: "kurz", en: "short", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Die Hose ist zu kurz.", en: "The trousers are too short." }]
    },
    {
        id: 671, de: "lang", en: "long", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Der Film ist sehr lang.", en: "The film is very long." }]
    },
    {
        id: 672, de: "breit", en: "wide", level: "A2", type: "adjective", tags: ["description"],
        examples: [{ de: "Die Straße ist breit.", en: "The street is wide." }]
    },
    {
        id: 673, de: "schmal", en: "narrow", level: "A2", type: "adjective", tags: ["description"],
        examples: [{ de: "Der Weg ist sehr schmal.", en: "The path is very narrow." }]
    },
    {
        id: 674, de: "dick", en: "thick/fat", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Das Buch ist sehr dick.", en: "The book is very thick." }]
    },
    {
        id: 675, de: "dünn", en: "thin", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Er ist groß und dünn.", en: "He is tall and thin." }]
    },
    {
        id: 676, de: "schwer", en: "heavy/difficult", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Der Koffer ist zu schwer.", en: "The suitcase is too heavy." }]
    },
    {
        id: 677, de: "leicht", en: "light/easy", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Die Aufgabe war sehr leicht.", en: "The task was very easy." }]
    },
    {
        id: 678, de: "stark", en: "strong", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Der Kaffee ist sehr stark.", en: "The coffee is very strong." }]
    },
    {
        id: 679, de: "schwach", en: "weak", level: "A2", type: "adjective", tags: ["description"],
        examples: [{ de: "Er fühlt sich heute schwach.", en: "He feels weak today." }]
    },
    {
        id: 680, de: "schnell", en: "fast/quick", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Das Auto fährt sehr schnell.", en: "The car drives very fast." }]
    },
    {
        id: 681, de: "langsam", en: "slow", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Bitte sprechen Sie langsam.", en: "Please speak slowly." }]
    },
    {
        id: 682, de: "teuer", en: "expensive", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Dieses Restaurant ist zu teuer.", en: "This restaurant is too expensive." }]
    },
    {
        id: 683, de: "billig", en: "cheap", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Das Hemd war sehr billig.", en: "The shirt was very cheap." }]
    },
    {
        id: 684, de: "günstig", en: "favorable/affordable", level: "A2", type: "adjective", tags: ["description"],
        examples: [{ de: "Wir haben ein günstiges Hotel gefunden.", en: "We found an affordable hotel." }]
    },
    {
        id: 685, de: "neu", en: "new", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Ich habe ein neues Auto.", en: "I have a new car." }]
    },
    {
        id: 686, de: "alt", en: "old", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Mein Computer ist schon sehr alt.", en: "My computer is already very old." }]
    },
    {
        id: 687, de: "jung", en: "young", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Sie ist noch sehr jung.", en: "She is still very young." }]
    },
    {
        id: 688, de: "gut", en: "good", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Das Essen schmeckt gut.", en: "The food tastes good." }]
    },
    {
        id: 689, de: "schlecht", en: "bad", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Das Wetter ist heute schlecht.", en: "The weather is bad today." }]
    },
    {
        id: 690, de: "richtig", en: "correct", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Die Antwort ist richtig.", en: "The answer is correct." }]
    },
    {
        id: 691, de: "falsch", en: "wrong/false", level: "A1", type: "adjective", tags: ["description"],
        examples: [{ de: "Das ist leider falsch.", en: "That is unfortunately wrong." }]
    },
    {
        id: 692, de: "wahr", en: "true", level: "A2", type: "adjective", tags: ["description"],
        examples: [{ de: "Das ist eine wahre Geschichte.", en: "That is a true story." }]
    },
    {
        id: 693, de: "Mensch", en: "human/person", level: "A1", type: "noun", article: "der", plural: "die Menschen", tags: ["people"],
        examples: [{ de: "Es gibt viele Menschen auf der Welt.", en: "There are many people in the world." }]
    },
    {
        id: 694, de: "Mann", en: "man", level: "A1", type: "noun", article: "der", plural: "die Männer", tags: ["people"],
        examples: [{ de: "Der Mann liest ein Buch.", en: "The man is reading a book." }]
    },
    {
        id: 695, de: "Frau", en: "woman", level: "A1", type: "noun", article: "die", plural: "die Frauen", tags: ["people"],
        examples: [{ de: "Die Frau arbeitet als Ärztin.", en: "The woman works as a doctor." }]
    },
    {
        id: 696, de: "Kind", en: "child", level: "A1", type: "noun", article: "das", plural: "die Kinder", tags: ["people"],
        examples: [{ de: "Das Kind spielt im Sand.", en: "The child plays in the sand." }]
    },
    {
        id: 697, de: "Junge", en: "boy", level: "A1", type: "noun", article: "der", plural: "die Jungen", tags: ["people"],
        examples: [{ de: "Der Junge fährt Fahrrad.", en: "The boy rides a bicycle." }]
    },
    {
        id: 698, de: "Mädchen", en: "girl", level: "A1", type: "noun", article: "das", plural: "die Mädchen", tags: ["people"],
        examples: [{ de: "Das Mädchen liest ein Buch.", en: "The girl reads a book." }]
    },
    {
        id: 699, de: "Baby", en: "baby", level: "A1", type: "noun", article: "das", plural: "die Babys", tags: ["people"],
        examples: [{ de: "Das Baby schläft.", en: "The baby is sleeping." }]
    },
    {
        id: 700, de: "Erwachsene", en: "adult", level: "A2", type: "noun", article: "der/die", plural: "die Erwachsenen", tags: ["people"],
        examples: [{ de: "Dieser Film ist nur für Erwachsene.", en: "This film is only for adults." }]
    },
    {
        id: 701, de: "Freund", en: "friend", level: "A1", type: "noun", article: "der", plural: "die Freunde", tags: ["people"],
        examples: [{ de: "Er ist ein guter Freund von mir.", en: "He is a good friend of mine." }]
    },
    {
        id: 702, de: "Freundin", en: "girlfriend/friend", level: "A1", type: "noun", article: "die", plural: "die Freundinnen", tags: ["people"],
        examples: [{ de: "Sie ist meine beste Freundin.", en: "She is my best friend." }]
    },
    {
        id: 703, de: "Kollege", en: "colleague", level: "A1", type: "noun", article: "der", plural: "die Kollegen", tags: ["work"],
        examples: [{ de: "Mein Kollege hilft mir oft.", en: "My colleague often helps me." }]
    },
    {
        id: 704, de: "Chef", en: "boss", level: "A1", type: "noun", article: "der", plural: "die Chefs", tags: ["work"],
        examples: [{ de: "Der Chef ist heute nicht da.", en: "The boss is not here today." }]
    },
    {
        id: 705, de: "Mitarbeiter", en: "employee", level: "A2", type: "noun", article: "der", plural: "die Mitarbeiter", tags: ["work"],
        examples: [{ de: "Die Firma hat 50 Mitarbeiter.", en: "The company has 50 employees." }]
    },
    {
        id: 706, de: "Arzt", en: "doctor", level: "A1", type: "noun", article: "der", plural: "die Ärzte", tags: ["profession"],
        examples: [{ de: "Ich muss zum Arzt gehen.", en: "I have to go to the doctor." }]
    },
    {
        id: 707, de: "Lehrer", en: "teacher", level: "A1", type: "noun", article: "der", plural: "die Lehrer", tags: ["profession"],
        examples: [{ de: "Der Lehrer erklärt die Aufgabe.", en: "The teacher explains the task." }]
    },
    {
        id: 708, de: "Schüler", en: "pupil/student", level: "A1", type: "noun", article: "der", plural: "die Schüler", tags: ["school"],
        examples: [{ de: "Die Schüler lernen Deutsch.", en: "The students are learning German." }]
    },
    {
        id: 709, de: "Student", en: "university student", level: "A1", type: "noun", article: "der", plural: "die Studenten", tags: ["university"],
        examples: [{ de: "Der Student studiert Medizin.", en: "The university student studies medicine." }]
    },
    {
        id: 710, de: "Polizist", en: "policeman", level: "A2", type: "noun", article: "der", plural: "die Polizisten", tags: ["profession"],
        examples: [{ de: "Der Polizist regelt den Verkehr.", en: "The policeman regulates traffic." }]
    },
    {
        id: 711, de: "Kellner", en: "waiter", level: "A1", type: "noun", article: "der", plural: "die Kellner", tags: ["profession"],
        examples: [{ de: "Der Kellner bringt das Essen.", en: "The waiter brings the food." }]
    },
    {
        id: 712, de: "Koch", en: "cook/chef", level: "A2", type: "noun", article: "der", plural: "die Köche", tags: ["profession"],
        examples: [{ de: "Der Koch probiert die Suppe.", en: "The chef tastes the soup." }]
    },
    {
        id: 713, de: "Bäcker", en: "baker", level: "A2", type: "noun", article: "der", plural: "die Bäcker", tags: ["profession"],
        examples: [{ de: "Der Bäcker backt Brot.", en: "The baker bakes bread." }]
    },
    {
        id: 714, de: "Verkäufer", en: "salesperson", level: "A1", type: "noun", article: "der", plural: "die Verkäufer", tags: ["profession"],
        examples: [{ de: "Der Verkäufer berät die Kunden.", en: "The salesperson advises the customers." }]
    },
    {
        id: 715, de: "Beruf", en: "profession", level: "A1", type: "noun", article: "der", plural: "die Berufe", tags: ["work"],
        examples: [{ de: "Was ist dein Beruf?", en: "What is your profession?" }]
    },
    {
        id: 716, de: "Arbeit", en: "work", level: "A1", type: "noun", article: "die", plural: "die Arbeiten", tags: ["work"],
        examples: [{ de: "Die Arbeit macht mir Spaß.", en: "The work is fun for me." }]
    },
    {
        id: 717, de: "Büro", en: "office", level: "A1", type: "noun", article: "das", plural: "die Büros", tags: ["work"],
        examples: [{ de: "Er sitzt den ganzen Tag im Büro.", en: "He sits in the office all day." }]
    },
    {
        id: 718, de: "Firma", en: "company", level: "A1", type: "noun", article: "die", plural: "die Firmen", tags: ["work"],
        examples: [{ de: "Ich arbeite für eine große Firma.", en: "I work for a big company." }]
    },
    {
        id: 719, de: "Stadt", en: "city/town", level: "A1", type: "noun", article: "die", plural: "die Städte", tags: ["places"],
        examples: [{ de: "Berlin ist eine große Stadt.", en: "Berlin is a big city." }]
    },
    {
        id: 720, de: "Dorf", en: "village", level: "A1", type: "noun", article: "das", plural: "die Dörfer", tags: ["places"],
        examples: [{ de: "Er wohnt in einem kleinen Dorf.", en: "He lives in a small village." }]
    },
    {
        id: 721, de: "Land", en: "country/countryside", level: "A1", type: "noun", article: "das", plural: "die Länder", tags: ["places"],
        examples: [{ de: "Deutschland ist ein schönes Land.", en: "Germany is a beautiful country." }]
    },
    {
        id: 722, de: "Straße", en: "street", level: "A1", type: "noun", article: "die", plural: "die Straßen", tags: ["places"],
        examples: [{ de: "Die Straße ist sehr laut.", en: "The street is very loud." }]
    },
    {
        id: 723, de: "Weg", en: "path/way", level: "A1", type: "noun", article: "der", plural: "die Wege", tags: ["places"],
        examples: [{ de: "Können Sie mir den Weg zeigen?", en: "Can you show me the way?" }]
    },
    {
        id: 724, de: "Platz", en: "square/place/seat", level: "A1", type: "noun", article: "der", plural: "die Plätze", tags: ["places"],
        examples: [{ de: "Ist dieser Platz noch frei?", en: "Is this seat still free?" }]
    },
    {
        id: 725, de: "Zentrum", en: "center", level: "A2", type: "noun", article: "das", plural: "die Zentren", tags: ["places"],
        examples: [{ de: "Das Hotel liegt im Zentrum.", en: "The hotel is located in the center." }]
    },
    {
        id: 726, de: "Bahnhof", en: "train station", level: "A1", type: "noun", article: "der", plural: "die Bahnhöfe", tags: ["transport"],
        examples: [{ de: "Ich hole dich am Bahnhof ab.", en: "I'll pick you up at the train station." }]
    },
    {
        id: 727, de: "Flughafen", en: "airport", level: "A1", type: "noun", article: "der", plural: "die Flughäfen", tags: ["transport"],
        examples: [{ de: "Der Flughafen ist weit weg.", en: "The airport is far away." }]
    },
    {
        id: 728, de: "Haltestelle", en: "stop (bus/tram)", level: "A1", type: "noun", article: "die", plural: "die Haltestellen", tags: ["transport"],
        examples: [{ de: "Steigen Sie an der nächsten Haltestelle aus.", en: "Get off at the next stop." }]
    },
    {
        id: 729, de: "Krankenhaus", en: "hospital", level: "A1", type: "noun", article: "das", plural: "die Krankenhäuser", tags: ["health"],
        examples: [{ de: "Er liegt im Krankenhaus.", en: "He is in the hospital." }]
    },
    {
        id: 730, de: "Apotheke", en: "pharmacy", level: "A1", type: "noun", article: "die", plural: "die Apotheken", tags: ["health"],
        examples: [{ de: "Die Apotheke ist um die Ecke.", en: "The pharmacy is around the corner." }]
    },
    {
        id: 731, de: "Bank", en: "bank", level: "A1", type: "noun", article: "die", plural: "die Banken", tags: ["money"],
        examples: [{ de: "Ich muss zur Bank gehen.", en: "I need to go to the bank." }]
    },
    {
        id: 732, de: "Post", en: "post office/mail", level: "A1", type: "noun", article: "die", tags: ["places"],
        examples: [{ de: "Gibt es hier eine Post?", en: "Is there a post office here?" }]
    },
    {
        id: 733, de: "Polizei", en: "police", level: "A1", type: "noun", article: "die", tags: ["places"],
        examples: [{ de: "Rufen Sie die Polizei!", en: "Call the police!" }]
    },
    {
        id: 734, de: "Schule", en: "school", level: "A1", type: "noun", article: "die", plural: "die Schulen", tags: ["education"],
        examples: [{ de: "Die Kinder gehen in die Schule.", en: "The children go to school." }]
    },
    {
        id: 735, de: "Universität", en: "university", level: "A1", type: "noun", article: "die", plural: "die Universitäten", tags: ["education"],
        examples: [{ de: "Sie studiert an der Universität.", en: "She studies at the university." }]
    },
    {
        id: 736, de: "Bibliothek", en: "library", level: "A2", type: "noun", article: "die", plural: "die Bibliotheken", tags: ["education"],
        examples: [{ de: "Ich lerne oft in der Bibliothek.", en: "I often study in the library." }]
    },
    {
        id: 737, de: "Kirche", en: "church", level: "A2", type: "noun", article: "die", plural: "die Kirchen", tags: ["places"],
        examples: [{ de: "Die Kirche ist sehr alt.", en: "The church is very old." }]
    },
    {
        id: 738, de: "Museum", en: "museum", level: "A1", type: "noun", article: "das", plural: "die Museen", tags: ["places"],
        examples: [{ de: "Wir waren im Museum.", en: "We were at the museum." }]
    },
    {
        id: 739, de: "Kino", en: "cinema", level: "A1", type: "noun", article: "das", plural: "die Kinos", tags: ["places"],
        examples: [{ de: "Heute Abend gehen wir ins Kino.", en: "Tonight we are going to the cinema." }]
    },
    {
        id: 740, de: "Theater", en: "theater", level: "A2", type: "noun", article: "das", plural: "die Theater", tags: ["places"],
        examples: [{ de: "Ich habe Karten für das Theater gekauft.", en: "I bought tickets for the theater." }]
    },
    {
        id: 741, de: "Park", en: "park", level: "A1", type: "noun", article: "der", plural: "die Parks", tags: ["places"],
        examples: [{ de: "Die Kinder spielen im Park.", en: "The children play in the park." }]
    },
    {
        id: 742, de: "Wald", en: "forest", level: "A2", type: "noun", article: "der", plural: "die Wälder", tags: ["nature"],
        examples: [{ de: "Wir gehen oft im Wald spazieren.", en: "We often walk in the forest." }]
    },
    {
        id: 743, de: "Berg", en: "mountain", level: "A2", type: "noun", article: "der", plural: "die Berge", tags: ["nature"],
        examples: [{ de: "Die Berge in der Schweiz sind hoch.", en: "The mountains in Switzerland are high." }]
    },
    {
        id: 744, de: "See", en: "lake", level: "A1", type: "noun", article: "der", plural: "die Seen", tags: ["nature"],
        examples: [{ de: "Im Sommer schwimmen wir im See.", en: "In summer we swim in the lake." }]
    },
    {
        id: 745, de: "Meer", en: "sea/ocean", level: "A1", type: "noun", article: "das", plural: "die Meere", tags: ["nature"],
        examples: [{ de: "Wir machen Urlaub am Meer.", en: "We are going on holiday by the sea." }]
    },
    {
        id: 746, de: "Strand", en: "beach", level: "A1", type: "noun", article: "der", plural: "die Strände", tags: ["nature"],
        examples: [{ de: "Ich liege gern am Strand.", en: "I like lying on the beach." }]
    },
    {
        id: 747, de: "Fluss", en: "river", level: "A2", type: "noun", article: "der", plural: "die Flüsse", tags: ["nature"],
        examples: [{ de: "Der Rhein ist ein großer Fluss.", en: "The Rhine is a large river." }]
    },
    {
        id: 748, de: "Baum", en: "tree", level: "A1", type: "noun", article: "der", plural: "die Bäume", tags: ["nature"],
        examples: [{ de: "Der Apfel fällt vom Baum.", en: "The apple falls from the tree." }]
    },
    {
        id: 749, de: "Blume", en: "flower", level: "A1", type: "noun", article: "die", plural: "die Blumen", tags: ["nature"],
        examples: [{ de: "Ich schenke dir Blumen.", en: "I am giving you flowers." }]
    },
    {
        id: 750, de: "Gras", en: "grass", level: "A2", type: "noun", article: "das", tags: ["nature"],
        examples: [{ de: "Das Gras ist nass.", en: "The grass is wet." }]
    },
    {
        id: 751, de: "Himmel", en: "sky", level: "A2", type: "noun", article: "der", plural: "die Himmel", tags: ["nature"],
        examples: [{ de: "Der Himmel ist wolkenlos.", en: "The sky is cloudless." }]
    },
    {
        id: 752, de: "Sonne", en: "sun", level: "A1", type: "noun", article: "die", plural: "die Sonnen", tags: ["nature"],
        examples: [{ de: "Die Sonne scheint hell.", en: "The sun shines brightly." }]
    },
    {
        id: 753, de: "Mond", en: "moon", level: "A2", type: "noun", article: "der", plural: "die Monde", tags: ["nature"],
        examples: [{ de: "Der Mond ist heute voll.", en: "The moon is full today." }]
    },
    {
        id: 754, de: "Stern", en: "star", level: "A2", type: "noun", article: "der", plural: "die Sterne", tags: ["nature"],
        examples: [{ de: "Man kann die Sterne sehen.", en: "You can see the stars." }]
    },
    {
        id: 755, de: "Wolke", en: "cloud", level: "A1", type: "noun", article: "die", plural: "die Wolken", tags: ["nature"],
        examples: [{ de: "Am Himmel sind viele Wolken.", en: "There are many clouds in the sky." }]
    },
    {
        id: 756, de: "Wetter", en: "weather", level: "A1", type: "noun", article: "das", tags: ["nature"],
        examples: [{ de: "Das Wetter ist heute gut.", en: "The weather is good today." }]
    },
    {
        id: 757, de: "Regen", en: "rain", level: "A1", type: "noun", article: "der", tags: ["nature"],
        examples: [{ de: "Im Herbst gibt es viel Regen.", en: "There is a lot of rain in autumn." }]
    },
    {
        id: 758, de: "Schnee", en: "snow", level: "A1", type: "noun", article: "der", tags: ["nature"],
        examples: [{ de: "Die Kinder lieben den Schnee.", en: "The children love the snow." }]
    },
    {
        id: 759, de: "Wind", en: "wind", level: "A1", type: "noun", article: "der", plural: "die Winde", tags: ["nature"],
        examples: [{ de: "Der Wind ist sehr stark.", en: "The wind is very strong." }]
    },
    {
        id: 760, de: "Gewitter", en: "thunderstorm", level: "A2", type: "noun", article: "das", plural: "die Gewitter", tags: ["nature"],
        examples: [{ de: "Ich habe Angst vor Gewitter.", en: "I am afraid of thunderstorms." }]
    },
    {
        id: 761, de: "Natur", en: "nature", level: "A2", type: "noun", article: "die", tags: ["nature"],
        examples: [{ de: "Ich bin gern in der Natur.", en: "I like being in nature." }]
    },
    {
        id: 762, de: "Wasser", en: "water", level: "A1", type: "noun", article: "das", plural: "die Wasser", tags: ["drinks"],
        examples: [{ de: "Ich trinke am liebsten Wasser.", en: "I prefer to drink water." }]
    },
    {
        id: 763, de: "Kaffee", en: "coffee", level: "A1", type: "noun", article: "der", plural: "die Kaffees", tags: ["drinks"],
        examples: [{ de: "Morgens brauche ich einen Kaffee.", en: "In the mornings I need a coffee." }]
    },
    {
        id: 764, de: "Tee", en: "tea", level: "A1", type: "noun", article: "der", plural: "die Tees", tags: ["drinks"],
        examples: [{ de: "Ich trinke gern grünen Tee.", en: "I like to drink green tea." }]
    },
    {
        id: 765, de: "Milch", en: "milk", level: "A1", type: "noun", article: "die", tags: ["drinks"],
        examples: [{ de: "Die Katze trinkt Milch.", en: "The cat drinks milk." }]
    },
    {
        id: 766, de: "Saft", en: "juice", level: "A1", type: "noun", article: "der", plural: "die Säfte", tags: ["drinks"],
        examples: [{ de: "Orangensaft ist sehr gesund.", en: "Orange juice is very healthy." }]
    },
    {
        id: 767, de: "Bier", en: "beer", level: "A1", type: "noun", article: "das", plural: "die Biere", tags: ["drinks"],
        examples: [{ de: "Bayerisches Bier ist berühmt.", en: "Bavarian beer is famous." }]
    },
    {
        id: 768, de: "Wein", en: "wine", level: "A1", type: "noun", article: "der", plural: "die Weine", tags: ["drinks"],
        examples: [{ de: "Möchten Sie Rotwein oder Weißwein?", en: "Would you like red wine or white wine?" }]
    },
    {
        id: 769, de: "Brot", en: "bread", level: "A1", type: "noun", article: "das", plural: "die Brote", tags: ["food"],
        examples: [{ de: "Ich esse Brot zum Frühstück.", en: "I eat bread for breakfast." }]
    },
    {
        id: 770, de: "Brötchen", en: "bread roll", level: "A1", type: "noun", article: "das", plural: "die Brötchen", tags: ["food"],
        examples: [{ de: "Ich kaufe frische Brötchen beim Bäcker.", en: "I buy fresh bread rolls at the baker's." }]
    },
    {
        id: 771, de: "Butter", en: "butter", level: "A1", type: "noun", article: "die", tags: ["food"],
        examples: [{ de: "Ich brauche Butter für den Kuchen.", en: "I need butter for the cake." }]
    },
    {
        id: 772, de: "Käse", en: "cheese", level: "A1", type: "noun", article: "der", plural: "die Käse", tags: ["food"],
        examples: [{ de: "Dieser Käse kommt aus der Schweiz.", en: "This cheese comes from Switzerland." }]
    },
    {
        id: 773, de: "Wurst", en: "sausage", level: "A1", type: "noun", article: "die", plural: "die Würste", tags: ["food"],
        examples: [{ de: "Bratwurst ist typisch deutsch.", en: "Bratwurst is typically German." }]
    },
    {
        id: 774, de: "Fleisch", en: "meat", level: "A1", type: "noun", article: "das", tags: ["food"],
        examples: [{ de: "Ich esse nicht viel Fleisch.", en: "I don't eat much meat." }]
    },
    {
        id: 775, de: "Ei", en: "egg", level: "A1", type: "noun", article: "das", plural: "die Eier", tags: ["food"],
        examples: [{ de: "Ich möchte ein Ei zum Frühstück.", en: "I would like an egg for breakfast." }]
    },
    {
        id: 776, de: "Obst", en: "fruit", level: "A1", type: "noun", article: "das", tags: ["food"],
        examples: [{ de: "Obst enthält viele Vitamine.", en: "Fruit contains many vitamins." }]
    },
    {
        id: 777, de: "Apfel", en: "apple", level: "A1", type: "noun", article: "der", plural: "die Äpfel", tags: ["food"],
        examples: [{ de: "Ein Apfel am Tag hält den Arzt fern.", en: "An apple a day keeps the doctor away." }]
    },
    {
        id: 778, de: "Banane", en: "banana", level: "A1", type: "noun", article: "die", plural: "die Bananen", tags: ["food"],
        examples: [{ de: "Affen essen gern Bananen.", en: "Monkeys like to eat bananas." }]
    },
    {
        id: 779, de: "Gemüse", en: "vegetables", level: "A1", type: "noun", article: "das", tags: ["food"],
        examples: [{ de: "Ich kaufe das Gemüse auf dem Markt.", en: "I buy the vegetables at the market." }]
    },
    {
        id: 780, de: "Kartoffel", en: "potato", level: "A1", type: "noun", article: "die", plural: "die Kartoffeln", tags: ["food"],
        examples: [{ de: "Wir essen heute Kartoffeln mit Quark.", en: "Today we are eating potatoes with quark." }]
    },
    {
        id: 781, de: "Tomate", en: "tomato", level: "A1", type: "noun", article: "die", plural: "die Tomaten", tags: ["food"],
        examples: [{ de: "Die Tomaten sind rot und reif.", en: "The tomatoes are red and ripe." }]
    },
    {
        id: 782, de: "Salat", en: "salad/lettuce", level: "A1", type: "noun", article: "der", plural: "die Salate", tags: ["food"],
        examples: [{ de: "Ich esse gern gemischten Salat.", en: "I like eating mixed salad." }]
    },
    {
        id: 783, de: "Suppe", en: "soup", level: "A1", type: "noun", article: "die", plural: "die Suppen", tags: ["food"],
        examples: [{ de: "Die Suppe ist heiß.", en: "The soup is hot." }]
    },
    {
        id: 784, de: "Pizza", en: "pizza", level: "A1", type: "noun", article: "die", plural: "die Pizzen", tags: ["food"],
        examples: [{ de: "Wir bestellen eine Pizza.", en: "We are ordering a pizza." }]
    },
    {
        id: 785, de: "Nudel", en: "noodle/pasta", level: "A1", type: "noun", article: "die", plural: "die Nudeln", tags: ["food"],
        examples: [{ de: "Kinder lieben Nudeln mit Tomatensoße.", en: "Children love pasta with tomato sauce." }]
    },
    {
        id: 786, de: "Reis", en: "rice", level: "A1", type: "noun", article: "der", tags: ["food"],
        examples: [{ de: "Zu diesem Gericht passt Reis gut.", en: "Rice goes well with this dish." }]
    },
    {
        id: 787, de: "Salz", en: "salt", level: "A1", type: "noun", article: "das", tags: ["food"],
        examples: [{ de: "Die Suppe braucht mehr Salz.", en: "The soup needs more salt." }]
    },
    {
        id: 788, de: "Zucker", en: "sugar", level: "A1", type: "noun", article: "der", tags: ["food"],
        examples: [{ de: "Ich trinke den Kaffee ohne Zucker.", en: "I drink the coffee without sugar." }]
    },
    {
        id: 789, de: "Frühstück", en: "breakfast", level: "A1", type: "noun", article: "das", plural: "die Frühstücke", tags: ["food"],
        examples: [{ de: "Das Frühstück ist fertig.", en: "Breakfast is ready." }]
    },
    {
        id: 790, de: "Mittagessen", en: "lunch", level: "A1", type: "noun", article: "das", tags: ["food"],
        examples: [{ de: "Zum Mittagessen gibt es Fisch.", en: "For lunch there is fish." }]
    },
    {
        id: 791, de: "Abendessen", en: "dinner", level: "A1", type: "noun", article: "das", tags: ["food"],
        examples: [{ de: "Das Abendessen ist um 19 Uhr.", en: "Dinner is at 7 pm." }]
    },
    {
        id: 792, de: "Mahlzeit", en: "meal", level: "A2", type: "noun", article: "die", plural: "die Mahlzeiten", tags: ["food"],
        examples: [{ de: "Guten Appetit! Eine Mahlzeit!", en: "Enjoy your meal!" }]
    },
    {
        id: 793, de: "Geld", en: "money", level: "A1", type: "noun", article: "das", tags: ["money"],
        examples: [{ de: "Ich habe nicht genug Geld dabei.", en: "I don't have enough money with me." }]
    },
    {
        id: 794, de: "Preis", en: "price", level: "A1", type: "noun", article: "der", plural: "die Preise", tags: ["money"],
        examples: [{ de: "Der Preis ist sehr niedrig.", en: "The price is very low." }]
    },
    {
        id: 795, de: "Münze", en: "coin", level: "A2", type: "noun", article: "die", plural: "die Münzen", tags: ["money"],
        examples: [{ de: "Ich habe nur noch Münzen im Portemonnaie.", en: "I only have coins left in my wallet." }]
    },
    {
        id: 796, de: "Rechnung", en: "bill/invoice", level: "A1", type: "noun", article: "die", plural: "die Rechnungen", tags: ["money"],
        examples: [{ de: "Die Rechnung, bitte!", en: "The bill, please!" }]
    },
    {
        id: 797, de: "Kasse", en: "checkout/cash register", level: "A2", type: "noun", article: "die", plural: "die Kassen", tags: ["money"],
        examples: [{ de: "Bitte zahlen Sie an der Kasse.", en: "Please pay at the checkout." }]
    },
    {
        id: 798, de: "Auto", en: "car", level: "A1", type: "noun", article: "das", plural: "die Autos", tags: ["transport"],
        examples: [{ de: "Das Auto ist schnell.", en: "The car is fast." }]
    },
    {
        id: 799, de: "Bus", en: "bus", level: "A1", type: "noun", article: "der", plural: "die Busse", tags: ["transport"],
        examples: [{ de: "Der Bus fährt alle 10 Minuten.", en: "The bus runs every 10 minutes." }]
    },
    {
        id: 800, de: "Zug", en: "train", level: "A1", type: "noun", article: "der", plural: "die Züge", tags: ["transport"],
        examples: [{ de: "Der Zug hat 5 Minuten Verspätung.", en: "The train has a 5-minute delay." }]
    },
    {
        id: 801, de: "Fahrrad", en: "bicycle", level: "A1", type: "noun", article: "das", plural: "die Fahrräder", tags: ["transport"],
        examples: [{ de: "Ich fahre mit dem Fahrrad zur Arbeit.", en: "I ride my bicycle to work." }]
    },
    {
        id: 802, de: "Flugzeug", en: "airplane", level: "A1", type: "noun", article: "das", plural: "die Flugzeuge", tags: ["transport"],
        examples: [{ de: "Das Flugzeug fliegt nach London.", en: "The airplane flies to London." }]
    },
    {
        id: 803, de: "Schiff", en: "ship", level: "A2", type: "noun", article: "das", plural: "die Schiffe", tags: ["transport"],
        examples: [{ de: "Das Schiff fährt über das Meer.", en: "The ship sails across the sea." }]
    },
    {
        id: 804, de: "Ticket", en: "ticket", level: "A1", type: "noun", article: "das", plural: "die Tickets", tags: ["transport"],
        examples: [{ de: "Hier ist mein Ticket.", en: "Here is my ticket." }]
    },
    {
        id: 805, de: "Fahrkarte", en: "ticket (transport)", level: "A1", type: "noun", article: "die", plural: "die Fahrkarten", tags: ["transport"],
        examples: [{ de: "Bitte kaufen Sie eine Fahrkarte.", en: "Please buy a transport ticket." }]
    },
    {
        id: 806, de: "Gepäck", en: "luggage", level: "A1", type: "noun", article: "das", tags: ["transport"],
        examples: [{ de: "Wo ist mein Gepäck?", en: "Where is my luggage?" }]
    },
    {
        id: 807, de: "Tasche", en: "bag", level: "A1", type: "noun", article: "die", plural: "die Taschen", tags: ["clothing"],
        examples: [{ de: "Ich trage eine schwarze Tasche.", en: "I carry a black bag." }]
    },
    {
        id: 808, de: "Hand", en: "hand", level: "A1", type: "noun", article: "die", plural: "die Hände", tags: ["body"],
        examples: [{ de: "Wasche dir die Hände!", en: "Wash your hands!" }]
    },
    {
        id: 809, de: "Fuß", en: "foot", level: "A1", type: "noun", article: "der", plural: "die Füße", tags: ["body"],
        examples: [{ de: "Mein Fuß tut weh.", en: "My foot hurts." }]
    },
    {
        id: 810, de: "Bein", en: "leg", level: "A1", type: "noun", article: "das", plural: "die Beine", tags: ["body"],
        examples: [{ de: "Er hat sich das Bein gebrochen.", en: "He broke his leg." }]
    },
    {
        id: 811, de: "Arm", en: "arm", level: "A1", type: "noun", article: "der", plural: "die Arme", tags: ["body"],
        examples: [{ de: "Sie hat den linken Arm im Gips.", en: "She has her left arm in a cast." }]
    },
    {
        id: 812, de: "Kopf", en: "head", level: "A1", type: "noun", article: "der", plural: "die Köpfe", tags: ["body"],
        examples: [{ de: "Ich habe Kopfschmerzen.", en: "I have a headache." }]
    },
    {
        id: 813, de: "Auge", en: "eye", level: "A1", type: "noun", article: "das", plural: "die Augen", tags: ["body"],
        examples: [{ de: "Sie hat blaue Augen.", en: "She has blue eyes." }]
    },
    {
        id: 814, de: "Ohr", en: "ear", level: "A1", type: "noun", article: "das", plural: "die Ohren", tags: ["body"],
        examples: [{ de: "Die Ohren sind zum Hören da.", en: "Ears are for hearing." }]
    },
    {
        id: 815, de: "Nase", en: "nose", level: "A1", type: "noun", article: "die", plural: "die Nasen", tags: ["body"],
        examples: [{ de: "Er hat eine große Nase.", en: "He has a big nose." }]
    },
    {
        id: 816, de: "Mund", en: "mouth", level: "A1", type: "noun", article: "der", plural: "die Münder", tags: ["body"],
        examples: [{ de: "Mach den Mund auf!", en: "Open your mouth!" }]
    },
    {
        id: 817, de: "Zahn", en: "tooth", level: "A1", type: "noun", article: "der", plural: "die Zähne", tags: ["body"],
        examples: [{ de: "Ich muss zum Zahnarzt, mein Zahn tut weh.", en: "I have to go to the dentist, my tooth hurts." }]
    },
    {
        id: 818, de: "Haar", en: "hair", level: "A1", type: "noun", article: "das", plural: "die Haare", tags: ["body"],
        examples: [{ de: "Sie hat lange, braune Haare.", en: "She has long, brown hair." }]
    },
    {
        id: 819, de: "Gesicht", en: "face", level: "A2", type: "noun", article: "das", plural: "die Gesichter", tags: ["body"],
        examples: [{ de: "Das Kind hat ein rundes Gesicht.", en: "The child has a round face." }]
    },
    {
        id: 820, de: "Krankheit", en: "disease/illness", level: "A2", type: "noun", article: "die", plural: "die Krankheiten", tags: ["health"],
        examples: [{ de: "Das ist eine seltene Krankheit.", en: "That is a rare illness." }]
    },
    {
        id: 821, de: "Schmerz", en: "pain/ache", level: "A2", type: "noun", article: "der", plural: "die Schmerzen", tags: ["health"],
        examples: [{ de: "Ich habe Schmerzen im Rücken.", en: "I have pain in my back." }]
    },
    {
        id: 822, de: "Medikament", en: "medication/drug", level: "A2", type: "noun", article: "das", plural: "die Medikamente", tags: ["health"],
        examples: [{ de: "Der Arzt hat mir Medikamente verschrieben.", en: "The doctor prescribed me medication." }]
    },
    {
        id: 823, de: "Zeit", en: "time", level: "A1", type: "noun", article: "die", plural: "die Zeiten", tags: ["time"],
        examples: [{ de: "Ich habe heute leider keine Zeit.", en: "Unfortunately, I don't have time today." }]
    },
    {
        id: 824, de: "Uhr", en: "clock/watch", level: "A1", type: "noun", article: "die", plural: "die Uhren", tags: ["time"],
        examples: [{ de: "Es ist acht Uhr.", en: "It is eight o'clock." }]
    },
    {
        id: 825, de: "Stunde", en: "hour", level: "A1", type: "noun", article: "die", plural: "die Stunden", tags: ["time"],
        examples: [{ de: "Der Kurs dauert zwei Stunden.", en: "The course lasts two hours." }]
    },
    {
        id: 826, de: "Minute", en: "minute", level: "A1", type: "noun", article: "die", plural: "die Minuten", tags: ["time"],
        examples: [{ de: "Ich bin in fünf Minuten da.", en: "I will be there in five minutes." }]
    },
    {
        id: 827, de: "Sekunde", en: "second", level: "A2", type: "noun", article: "die", plural: "die Sekunden", tags: ["time"],
        examples: [{ de: "Bitte warten Sie eine Sekunde.", en: "Please wait a second." }]
    },
    {
        id: 828, de: "Tag", en: "day", level: "A1", type: "noun", article: "der", plural: "die Tage", tags: ["time"],
        examples: [{ de: "Jeden Tag lerne ich Deutsch.", en: "I learn German every day." }]
    },
    {
        id: 829, de: "Nacht", en: "night", level: "A1", type: "noun", article: "die", plural: "die Nächte", tags: ["time"],
        examples: [{ de: "In der Nacht ist es dunkel.", en: "It is dark at night." }]
    },
    {
        id: 830, de: "Morgen", en: "morning", level: "A1", type: "noun", article: "der", plural: "die Morgen", tags: ["time"],
        examples: [{ de: "Guten Morgen!", en: "Good morning!" }]
    },
    {
        id: 831, de: "Abend", en: "evening", level: "A1", type: "noun", article: "der", plural: "die Abende", tags: ["time"],
        examples: [{ de: "Am Abend esse ich warm.", en: "In the evening I eat a hot meal." }]
    },
    {
        id: 832, de: "Hobby", en: "hobby", level: "A1", type: "noun", article: "das", plural: "die Hobbys", tags: ["leisure"],
        examples: [{ de: "Mein Hobby ist Schwimmen.", en: "My hobby is swimming." }]
    },
    {
        id: 833, de: "Musik", en: "music", level: "A1", type: "noun", article: "die", tags: ["leisure"],
        examples: [{ de: "Ich höre gern Musik.", en: "I like listening to music." }]
    },
    {
        id: 834, de: "Klavier", en: "piano", level: "A1", type: "noun", article: "das", plural: "die Klaviere", tags: ["leisure"],
        examples: [{ de: "Sie spielt sehr gut Klavier.", en: "She plays the piano very well." }]
    },
    {
        id: 835, de: "Gitarre", en: "guitar", level: "A1", type: "noun", article: "die", plural: "die Gitarren", tags: ["leisure"],
        examples: [{ de: "Er lernt Gitarre spielen.", en: "He is learning to play the guitar." }]
    },
    {
        id: 836, de: "Buch", en: "book", level: "A1", type: "noun", article: "das", plural: "die Bücher", tags: ["leisure"],
        examples: [{ de: "Ich lese ein Buch.", en: "I am reading a book." }]
    },
    {
        id: 837, de: "Zeitung", en: "newspaper", level: "A1", type: "noun", article: "die", plural: "die Zeitungen", tags: ["leisure"],
        examples: [{ de: "Mein Vater liest die Zeitung.", en: "My father reads the newspaper." }]
    },
    {
        id: 838, de: "Zeitschrift", en: "magazine", level: "A2", type: "noun", article: "die", plural: "die Zeitschriften", tags: ["leisure"],
        examples: [{ de: "Ich kaufe eine Zeitschrift.", en: "I am buying a magazine." }]
    },
    {
        id: 839, de: "Sport", en: "sport", level: "A1", type: "noun", article: "der", plural: "die Sportarten", tags: ["leisure"],
        examples: [{ de: "Treibst du Sport?", en: "Do you do any sport?" }]
    },
    {
        id: 840, de: "Fußball", en: "football", level: "A1", type: "noun", article: "der", tags: ["leisure"],
        examples: [{ de: "Wir spielen Fußball.", en: "We are playing football." }]
    },
    {
        id: 841, de: "Tennis", en: "tennis", level: "A1", type: "noun", article: "das", tags: ["leisure"],
        examples: [{ de: "Spielst du gern Tennis?", en: "Do you like playing tennis?" }]
    },
    {
        id: 842, de: "Schwimmen", en: "swimming", level: "A1", type: "noun", article: "das", tags: ["leisure"],
        examples: [{ de: "Schwimmen ist gesund.", en: "Swimming is healthy." }]
    },
    {
        id: 843, de: "Wandern", en: "hiking", level: "A2", type: "noun", article: "das", tags: ["leisure"],
        examples: [{ de: "Wandern in den Bergen ist schön.", en: "Hiking in the mountains is beautiful." }]
    },
    {
        id: 844, de: "Fahrrad fahren", en: "cycling", level: "A1", type: "noun", article: "das", tags: ["leisure"],
        examples: [{ de: "Am Wochenende gehen wir Fahrrad fahren.", en: "On the weekend we go cycling." }]
    },
    {
        id: 845, de: "Kochen", en: "cooking", level: "A1", type: "noun", article: "das", tags: ["leisure"],
        examples: [{ de: "Kochen ist meine Leidenschaft.", en: "Cooking is my passion." }]
    },
    {
        id: 846, de: "Kamera", en: "camera", level: "A1", type: "noun", article: "die", plural: "die Kameras", tags: ["leisure"],
        examples: [{ de: "Die Kamera ist teuer.", en: "The camera is expensive." }]
    },
    {
        id: 847, de: "Reise", en: "journey/trip", level: "A1", type: "noun", article: "die", plural: "die Reisen", tags: ["travel"],
        examples: [{ de: "Die Reise war sehr lang.", en: "The trip was very long." }]
    },
    {
        id: 848, de: "Urlaub", en: "vacation/holiday", level: "A1", type: "noun", article: "der", plural: "die Urlaube", tags: ["travel"],
        examples: [{ de: "Wir machen Urlaub in Spanien.", en: "We are going on holiday in Spain." }]
    },
    {
        id: 849, de: "Hotel", en: "hotel", level: "A1", type: "noun", article: "das", plural: "die Hotels", tags: ["travel"],
        examples: [{ de: "Das Hotel ist direkt am Strand.", en: "The hotel is right on the beach." }]
    },
    {
        id: 850, de: "Reisepass", en: "passport", level: "A1", type: "noun", article: "der", plural: "die Reisepässe", tags: ["travel"],
        examples: [{ de: "Ich habe meinen Reisepass vergessen.", en: "I forgot my passport." }]
    },
    {
        id: 851, de: "Visum", en: "visa", level: "A2", type: "noun", article: "das", plural: "die Visa", tags: ["travel"],
        examples: [{ de: "Ich brauche ein Visum für die USA.", en: "I need a visa for the USA." }]
    },
    {
        id: 852, de: "Gepäckstück", en: "piece of luggage", level: "A2", type: "noun", article: "das", plural: "die Gepäckstücke", tags: ["travel"],
        examples: [{ de: "Wie viele Gepäckstücke haben Sie?", en: "How many pieces of luggage do you have?" }]
    },
    {
        id: 853, de: "Fahrkarte", en: "ticket", level: "A1", type: "noun", article: "die", plural: "die Fahrkarten", tags: ["travel"],
        examples: [{ de: "Ich kaufe eine Fahrkarte nach Berlin.", en: "I am buying a ticket to Berlin." }]
    },
    {
        id: 854, de: "Bahnhof", en: "station", level: "A1", type: "noun", article: "der", plural: "die Bahnhöfe", tags: ["travel"],
        examples: [{ de: "Der Zug steht im Bahnhof.", en: "The train is in the station." }]
    },
    {
        id: 855, de: "Gleis", en: "platform/track", level: "A2", type: "noun", article: "das", plural: "die Gleise", tags: ["travel"],
        examples: [{ de: "Der Zug fährt auf Gleis 4 ab.", en: "The train departs from platform 4." }]
    },
    {
        id: 856, de: "Flughafen", en: "airport", level: "A1", type: "noun", article: "der", plural: "die Flughäfen", tags: ["travel"],
        examples: [{ de: "Wir müssen zum Flughafen.", en: "We have to go to the airport." }]
    },
    {
        id: 857, de: "Flugzeug", en: "airplane", level: "A1", type: "noun", article: "das", plural: "die Flugzeuge", tags: ["travel"],
        examples: [{ de: "Das Flugzeug startet gleich.", en: "The airplane takes off shortly." }]
    },
    {
        id: 858, de: "Abflug", en: "departure", level: "A2", type: "noun", article: "der", plural: "die Abflüge", tags: ["travel"],
        examples: [{ de: "Der Abflug ist um 10 Uhr.", en: "The departure is at 10 am." }]
    },
    {
        id: 859, de: "Ankunft", en: "arrival", level: "A2", type: "noun", article: "die", plural: "die Ankünfte", tags: ["travel"],
        examples: [{ de: "Die Ankunft ist für 15 Uhr geplant.", en: "The arrival is scheduled for 3 pm." }]
    },
    {
        id: 860, de: "Grenze", en: "border", level: "A2", type: "noun", article: "die", plural: "die Grenzen", tags: ["travel"],
        examples: [{ de: "Wir müssen an der Grenze warten.", en: "We have to wait at the border." }]
    },
    {
        id: 861, de: "Tasche", en: "bag", level: "A1", type: "noun", article: "die", plural: "die Taschen", tags: ["travel"],
        examples: [{ de: "Meine Tasche ist schwer.", en: "My bag is heavy." }]
    },
    {
        id: 862, de: "Rucksack", en: "backpack", level: "A1", type: "noun", article: "der", plural: "die Rucksäcke", tags: ["travel"],
        examples: [{ de: "Ich nehme einen Rucksack mit.", en: "I am taking a backpack with me." }]
    },
    {
        id: 863, de: "Karte", en: "map/card", level: "A1", type: "noun", article: "die", plural: "die Karten", tags: ["travel"],
        examples: [{ de: "Haben Sie eine Karte der Stadt?", en: "Do you have a map of the city?" }]
    },
    {
        id: 864, de: "Weg", en: "path/way", level: "A1", type: "noun", article: "der", plural: "die Wege", tags: ["travel"],
        examples: [{ de: "Können Sie mir den Weg zeigen?", en: "Can you show me the way?" }]
    },
    {
        id: 865, de: "Straße", en: "street", level: "A1", type: "noun", article: "die", plural: "die Straßen", tags: ["travel"],
        examples: [{ de: "Die Straße ist sehr laut.", en: "The street is very loud." }]
    },
    {
        id: 866, de: "Baum", en: "tree", level: "A1", type: "noun", article: "der", plural: "die Bäume", tags: ["nature"],
        examples: [{ de: "Der Baum ist alt und groß.", en: "The tree is old and big." }]
    },
    {
        id: 867, de: "Wald", en: "forest", level: "A1", type: "noun", article: "der", plural: "die Wälder", tags: ["nature"],
        examples: [{ de: "Der Wald ist dunkel.", en: "The forest is dark." }]
    },
    {
        id: 868, de: "Pflanze", en: "plant", level: "A1", type: "noun", article: "die", plural: "die Pflanzen", tags: ["nature"],
        examples: [{ de: "Diese Pflanze braucht viel Wasser.", en: "This plant needs a lot of water." }]
    },
    {
        id: 869, de: "Blume", en: "flower", level: "A1", type: "noun", article: "die", plural: "die Blumen", tags: ["nature"],
        examples: [{ de: "Die Blumen riechen gut.", en: "The flowers smell good." }]
    },
    {
        id: 870, de: "Berg", en: "mountain", level: "A1", type: "noun", article: "der", plural: "die Berge", tags: ["nature"],
        examples: [{ de: "Der höchste Berg in Deutschland ist die Zugspitze.", en: "The highest mountain in Germany is the Zugspitze." }]
    },
    {
        id: 871, de: "See", en: "lake", level: "A1", type: "noun", article: "der", plural: "die Seen", tags: ["nature"],
        examples: [{ de: "Wir schwimmen im See.", en: "We swim in the lake." }]
    },
    {
        id: 872, de: "Fluss", en: "river", level: "A1", type: "noun", article: "der", plural: "die Flüsse", tags: ["nature"],
        examples: [{ de: "Der Rhein ist ein Fluss.", en: "The Rhine is a river." }]
    },
    {
        id: 873, de: "Meer", en: "sea/ocean", level: "A1", type: "noun", article: "das", plural: "die Meere", tags: ["nature"],
        examples: [{ de: "Ich liebe das Meer.", en: "I love the sea." }]
    },
    {
        id: 874, de: "Strand", en: "beach", level: "A1", type: "noun", article: "der", plural: "die Strände", tags: ["nature"],
        examples: [{ de: "Der Strand ist aus Sand.", en: "The beach is made of sand." }]
    },
    {
        id: 875, de: "Insel", en: "island", level: "A2", type: "noun", article: "die", plural: "die Inseln", tags: ["nature"],
        examples: [{ de: "Wir verbringen den Urlaub auf einer Insel.", en: "We are spending our vacation on an island." }]
    },
    {
        id: 876, de: "Natur", en: "nature", level: "A1", type: "noun", article: "die", tags: ["nature"],
        examples: [{ de: "Die Natur ist sehr schön hier.", en: "Nature is very beautiful here." }]
    },
    {
        id: 877, de: "Wüste", en: "desert", level: "A2", type: "noun", article: "die", plural: "die Wüsten", tags: ["nature"],
        examples: [{ de: "Es gibt Kamele in der Wüste.", en: "There are camels in the desert." }]
    },
    {
        id: 878, de: "Wolke", en: "cloud", level: "A1", type: "noun", article: "die", plural: "die Wolken", tags: ["nature"],
        examples: [{ de: "Es gibt viele Wolken am Himmel.", en: "There are many clouds in the sky." }]
    },
    {
        id: 879, de: "Himmel", en: "sky", level: "A1", type: "noun", article: "der", plural: "die Himmel", tags: ["nature"],
        examples: [{ de: "Der Himmel ist heute sehr blau.", en: "The sky is very blue today." }]
    },
    {
        id: 880, de: "Sonne", en: "sun", level: "A1", type: "noun", article: "die", plural: "die Sonnen", tags: ["nature"],
        examples: [{ de: "Die Sonne scheint hell.", en: "The sun shines brightly." }]
    },
    {
        id: 881, de: "Stern", en: "star", level: "A2", type: "noun", article: "der", plural: "die Sterne", tags: ["nature"],
        examples: [{ de: "Die Sterne leuchten in der Nacht.", en: "The stars shine at night." }]
    },
    {
        id: 882, de: "Mond", en: "moon", level: "A2", type: "noun", article: "der", plural: "die Monde", tags: ["nature"],
        examples: [{ de: "Der Mond ist heute voll.", en: "The moon is full today." }]
    },
    {
        id: 883, de: "Regen", en: "rain", level: "A1", type: "noun", article: "der", tags: ["nature"],
        examples: [{ de: "Morgen gibt es Regen.", en: "Tomorrow there will be rain." }]
    },
    {
        id: 884, de: "Schnee", en: "snow", level: "A1", type: "noun", article: "der", tags: ["nature"],
        examples: [{ de: "Kinder spielen gern im Schnee.", en: "Children like to play in the snow." }]
    },
    {
        id: 885, de: "Wind", en: "wind", level: "A1", type: "noun", article: "der", plural: "die Winde", tags: ["nature"],
        examples: [{ de: "Der Wind ist heute sehr stark.", en: "The wind is very strong today." }]
    },
    {
        id: 886, de: "Sturm", en: "storm", level: "A2", type: "noun", article: "der", plural: "die Stürme", tags: ["nature"],
        examples: [{ de: "Gestern gab es einen starken Sturm.", en: "Yesterday there was a strong storm." }]
    },
    {
        id: 887, de: "Klima", en: "climate", level: "A2", type: "noun", article: "das", plural: "die Klimata", tags: ["nature"],
        examples: [{ de: "Das Klima ist hier sehr mild.", en: "The climate here is very mild." }]
    },
    {
        id: 888, de: "Wetter", en: "weather", level: "A1", type: "noun", article: "das", tags: ["nature"],
        examples: [{ de: "Wie ist das Wetter heute?", en: "What is the weather like today?" }]
    },
    {
        id: 889, de: "Frühling", en: "spring", level: "A1", type: "noun", article: "der", plural: "die Frühlinge", tags: ["time"],
        examples: [{ de: "Im Frühling blühen die Bäume.", en: "In spring the trees bloom." }]
    },
    {
        id: 890, de: "Sommer", en: "summer", level: "A1", type: "noun", article: "der", plural: "die Sommer", tags: ["time"],
        examples: [{ de: "Der Sommer ist heiß.", en: "Summer is hot." }]
    },
    {
        id: 891, de: "Herbst", en: "autumn/fall", level: "A1", type: "noun", article: "der", plural: "die Herbste", tags: ["time"],
        examples: [{ de: "Im Herbst fallen die Blätter.", en: "In autumn the leaves fall." }]
    },
    {
        id: 892, de: "Winter", en: "winter", level: "A1", type: "noun", article: "der", plural: "die Winter", tags: ["time"],
        examples: [{ de: "Der Winter ist kalt und dunkel.", en: "Winter is cold and dark." }]
    },
    {
        id: 893, de: "Jahr", en: "year", level: "A1", type: "noun", article: "das", plural: "die Jahre", tags: ["time"],
        examples: [{ de: "Dieses Jahr lerne ich Deutsch.", en: "This year I am learning German." }]
    },
    {
        id: 894, de: "Monat", en: "month", level: "A1", type: "noun", article: "der", plural: "die Monate", tags: ["time"],
        examples: [{ de: "Der Januar ist der erste Monat.", en: "January is the first month." }]
    },
    {
        id: 895, de: "Woche", en: "week", level: "A1", type: "noun", article: "die", plural: "die Wochen", tags: ["time"],
        examples: [{ de: "Nächste Woche fahre ich nach Berlin.", en: "Next week I am going to Berlin." }]
    },
    {
        id: 896, de: "Tag", en: "day", level: "A1", type: "noun", article: "der", plural: "die Tage", tags: ["time"],
        examples: [{ de: "Heute ist ein schöner Tag.", en: "Today is a beautiful day." }]
    },
    {
        id: 897, de: "Wochenende", en: "weekend", level: "A1", type: "noun", article: "das", plural: "die Wochenenden", tags: ["time"],
        examples: [{ de: "Was machst du am Wochenende?", en: "What are you doing on the weekend?" }]
    },
    {
        id: 898, de: "Feiertag", en: "holiday (public)", level: "A2", type: "noun", article: "der", plural: "die Feiertage", tags: ["time"],
        examples: [{ de: "Morgen ist ein offizieller Feiertag.", en: "Tomorrow is an official public holiday." }]
    },
    {
        id: 899, de: "Fest", en: "festival/feast", level: "A2", type: "noun", article: "das", plural: "die Feste", tags: ["time"],
        examples: [{ de: "Wir feiern ein großes Fest.", en: "We are celebrating a big festival." }]
    },
    {
        id: 900, de: "Geburtstag", en: "birthday", level: "A1", type: "noun", article: "der", plural: "die Geburtstage", tags: ["time"],
        examples: [{ de: "Wann hast du Geburtstag?", en: "When is your birthday?" }]
    },
    {
        id: 901, de: "Party", en: "party", level: "A1", type: "noun", article: "die", plural: "die Partys", tags: ["leisure"],
        examples: [{ de: "Gehst du heute Abend auf die Party?", en: "Are you going to the party tonight?" }]
    },
    {
        id: 902, de: "Kino", en: "cinema", level: "A1", type: "noun", article: "das", plural: "die Kinos", tags: ["leisure"],
        examples: [{ de: "Der Film läuft im Kino.", en: "The film is playing in the cinema." }]
    },
    {
        id: 903, de: "Theater", en: "theater", level: "A1", type: "noun", article: "das", plural: "die Theater", tags: ["leisure"],
        examples: [{ de: "Wir gehen ins Theater.", en: "We are going to the theater." }]
    },
    {
        id: 904, de: "Konzert", en: "concert", level: "A1", type: "noun", article: "das", plural: "die Konzerte", tags: ["leisure"],
        examples: [{ de: "Das Konzert war sehr gut.", en: "The concert was very good." }]
    },
    {
        id: 905, de: "Ausstellung", en: "exhibition", level: "A2", type: "noun", article: "die", plural: "die Ausstellungen", tags: ["leisure"],
        examples: [{ de: "Die Kunst-Ausstellung ist sehr interessant.", en: "The art exhibition is very interesting." }]
    },
    {
        id: 906, de: "Stadt", en: "city/town", level: "A1", type: "noun", article: "die", plural: "die Städte", tags: ["places"],
        examples: [{ de: "Berlin ist eine große Stadt.", en: "Berlin is a big city." }]
    },
    {
        id: 907, de: "Dorf", en: "village", level: "A1", type: "noun", article: "das", plural: "die Dörfer", tags: ["places"],
        examples: [{ de: "Ich wohne in einem kleinen Dorf.", en: "I live in a small village." }]
    },
    {
        id: 908, de: "Land", en: "country/countryside", level: "A1", type: "noun", article: "das", plural: "die Länder", tags: ["places"],
        examples: [{ de: "Deutschland ist ein schönes Land.", en: "Germany is a beautiful country." }]
    },
    {
        id: 909, de: "Hauptstadt", en: "capital city", level: "A2", type: "noun", article: "die", plural: "die Hauptstädte", tags: ["places"],
        examples: [{ de: "Paris ist die Hauptstadt von Frankreich.", en: "Paris is the capital of France." }]
    },
    {
        id: 910, de: "Zentrum", en: "center", level: "A1", type: "noun", article: "das", plural: "die Zentren", tags: ["places"],
        examples: [{ de: "Das Rathaus liegt im Zentrum.", en: "The town hall is located in the center." }]
    },
    {
        id: 911, de: "Platz", en: "square", level: "A1", type: "noun", article: "der", plural: "die Plätze", tags: ["places"],
        examples: [{ de: "Auf dem Markt-Platz gibt es frisches Gemüse.", en: "There are fresh vegetables on the market square." }]
    },
    {
        id: 912, de: "Brücke", en: "bridge", level: "A2", type: "noun", article: "die", plural: "die Brücken", tags: ["places"],
        examples: [{ de: "Wir gehen über die Brücke.", en: "We walk over the bridge." }]
    },
    {
        id: 913, de: "Turm", en: "tower", level: "A2", type: "noun", article: "der", plural: "die Türme", tags: ["places"],
        examples: [{ de: "Der Fernsehturm ist sehr hoch.", en: "The TV tower is very high." }]
    },
    {
        id: 914, de: "Schloss", en: "castle/palace", level: "A2", type: "noun", article: "das", plural: "die Schlösser", tags: ["places"],
        examples: [{ de: "Das alte Schloss ist berühmt.", en: "The old castle is famous." }]
    },
    {
        id: 915, de: "Rathaus", en: "town hall", level: "A1", type: "noun", article: "das", plural: "die Rathäuser", tags: ["places"],
        examples: [{ de: "Ich muss zum Rathaus gehen.", en: "I have to go to the town hall." }]
    },
    {
        id: 916, de: "Kirche", en: "church", level: "A1", type: "noun", article: "die", plural: "die Kirchen", tags: ["places"],
        examples: [{ de: "Die Kirche ist sehr alt.", en: "The church is very old." }]
    },
    {
        id: 917, de: "Krankenhaus", en: "hospital", level: "A1", type: "noun", article: "das", plural: "die Krankenhäuser", tags: ["health"],
        examples: [{ de: "Er ist gestern ins Krankenhaus gekommen.", en: "He went to the hospital yesterday." }]
    },
    {
        id: 918, de: "Arzt", en: "doctor", level: "A1", type: "noun", article: "der", plural: "die Ärzte", tags: ["health"],
        examples: [{ de: "Ich muss zum Arzt.", en: "I need to go to the doctor." }]
    },
    {
        id: 919, de: "Apotheke", en: "pharmacy", level: "A1", type: "noun", article: "die", plural: "die Apotheken", tags: ["health"],
        examples: [{ de: "Ich hole Medikamente aus der Apotheke.", en: "I get medicine from the pharmacy." }]
    },
    {
        id: 920, de: "Polizei", en: "police", level: "A1", type: "noun", article: "die", tags: ["places"],
        examples: [{ de: "Rufen Sie die Polizei!", en: "Call the police!" }]
    },
    {
        id: 921, de: "Unfall", en: "accident", level: "A2", type: "noun", article: "der", plural: "die Unfälle", tags: ["health"],
        examples: [{ de: "Auf der Autobahn gab es einen Unfall.", en: "There was an accident on the highway." }]
    },
    {
        id: 922, de: "Schmerz", en: "pain", level: "A2", type: "noun", article: "der", plural: "die Schmerzen", tags: ["health"],
        examples: [{ de: "Ich habe Schmerzen im Rücken.", en: "I have pain in my back." }]
    },
    {
        id: 923, de: "Liebe", en: "love", level: "A1", type: "noun", article: "die", tags: ["emotions"],
        examples: [{ de: "Liebe ist das Wichtigste im Leben.", en: "Love is the most important thing in life." }]
    },
    {
        id: 924, de: "Angst", en: "fear/anxiety", level: "A2", type: "noun", article: "die", plural: "die Ängste", tags: ["emotions"],
        examples: [{ de: "Er hat Angst vor Spinnen.", en: "He is afraid of spiders." }]
    },
    {
        id: 925, de: "Freude", en: "joy", level: "A2", type: "noun", article: "die", plural: "die Freuden", tags: ["emotions"],
        examples: [{ de: "Mit großer Freude habe ich den Brief gelesen.", en: "I read the letter with great joy." }]
    },
    {
        id: 926, de: "Trauer", en: "grief/sorrow", level: "A2", type: "noun", article: "die", tags: ["emotions"],
        examples: [{ de: "Die Trauer war groß.", en: "The sorrow was great." }]
    },
    {
        id: 927, de: "Glück", en: "luck/happiness", level: "A2", type: "noun", article: "das", tags: ["emotions"],
        examples: [{ de: "Viel Glück bei der Prüfung!", en: "Good luck on the exam!" }]
    },
    {
        id: 928, de: "Pech", en: "bad luck", level: "A2", type: "noun", article: "das", tags: ["emotions"],
        examples: [{ de: "Ich hatte heute wirklich Pech.", en: "I really had bad luck today." }]
    },
    {
        id: 929, de: "Spaß", en: "fun", level: "A1", type: "noun", article: "der", plural: "die Späße", tags: ["emotions"],
        examples: [{ de: "Viel Spaß auf der Party!", en: "Have fun at the party!" }]
    },
    {
        id: 930, de: "Fehler", en: "mistake/error", level: "A1", type: "noun", article: "der", plural: "die Fehler", tags: ["education"],
        examples: [{ de: "Das ist kein Fehler.", en: "That is not a mistake." }]
    },
    {
        id: 931, de: "Freund", en: "friend", level: "A1", type: "noun", article: "der", plural: "die Freunde", tags: ["people"],
        examples: [{ de: "Er ist ein guter Freund.", en: "He is a good friend." }]
    },
    {
        id: 932, de: "Familie", en: "family", level: "A1", type: "noun", article: "die", plural: "die Familien", tags: ["people"],
        examples: [{ de: "Meine Familie wohnt in München.", en: "My family lives in Munich." }]
    },
    {
        id: 933, de: "Vater", en: "father", level: "A1", type: "noun", article: "der", plural: "die Väter", tags: ["people"],
        examples: [{ de: "Sein Vater arbeitet in einer Bank.", en: "His father works in a bank." }]
    },
    {
        id: 934, de: "Mutter", en: "mother", level: "A1", type: "noun", article: "die", plural: "die Mütter", tags: ["people"],
        examples: [{ de: "Ihre Mutter ist Lehrerin.", en: "Her mother is a teacher." }]
    },
    {
        id: 935, de: "Eltern", en: "parents", level: "A1", type: "noun", article: "die", plural: "die Eltern", tags: ["people"],
        examples: [{ de: "Meine Eltern besuchen mich morgen.", en: "My parents are visiting me tomorrow." }]
    },
    {
        id: 936, de: "Sohn", en: "son", level: "A1", type: "noun", article: "der", plural: "die Söhne", tags: ["people"],
        examples: [{ de: "Sie haben einen Sohn.", en: "They have a son." }]
    },
    {
        id: 937, de: "Tochter", en: "daughter", level: "A1", type: "noun", article: "die", plural: "die Töchter", tags: ["people"],
        examples: [{ de: "Ihre Tochter ist sechs Jahre alt.", en: "Her daughter is six years old." }]
    },
    {
        id: 938, de: "Bruder", en: "brother", level: "A1", type: "noun", article: "der", plural: "die Brüder", tags: ["people"],
        examples: [{ de: "Mein Bruder ist jünger als ich.", en: "My brother is younger than me." }]
    },
    {
        id: 939, de: "Schwester", en: "sister", level: "A1", type: "noun", article: "die", plural: "die Schwestern", tags: ["people"],
        examples: [{ de: "Hast du eine Schwester?", en: "Do you have a sister?" }]
    },
    {
        id: 940, de: "Geschwister", en: "siblings", level: "A1", type: "noun", article: "die", tags: ["people"],
        examples: [{ de: "Ich habe keine Geschwister.", en: "I have no siblings." }]
    },
    {
        id: 941, de: "Opa", en: "grandpa", level: "A1", type: "noun", article: "der", plural: "die Opas", tags: ["people"],
        examples: [{ de: "Mein Opa ist sehr alt.", en: "My grandpa is very old." }]
    },
    {
        id: 942, de: "Oma", en: "grandma", level: "A1", type: "noun", article: "die", plural: "die Omas", tags: ["people"],
        examples: [{ de: "Meine Oma strickt oft.", en: "My grandma knits often." }]
    },
    {
        id: 943, de: "Enkel", en: "grandson", level: "A2", type: "noun", article: "der", plural: "die Enkel", tags: ["people"],
        examples: [{ de: "Der Enkel besucht seine Großeltern.", en: "The grandson visits his grandparents." }]
    },
    {
        id: 944, de: "Onkel", en: "uncle", level: "A2", type: "noun", article: "der", plural: "die Onkel", tags: ["people"],
        examples: [{ de: "Mein Onkel wohnt in Amerika.", en: "My uncle lives in America." }]
    },
    {
        id: 945, de: "Tante", en: "aunt", level: "A2", type: "noun", article: "die", plural: "die Tanten", tags: ["people"],
        examples: [{ de: "Meine Tante kann gut kochen.", en: "My aunt can cook well." }]
    },
    {
        id: 946, de: "Cousin", en: "cousin (male)", level: "A2", type: "noun", article: "der", plural: "die Cousins", tags: ["people"],
        examples: [{ de: "Er ist mein Cousin.", en: "He is my cousin." }]
    },
    {
        id: 947, de: "Kusine", en: "cousin (female)", level: "A2", type: "noun", article: "die", plural: "die Kusinen", tags: ["people"],
        examples: [{ de: "Sie ist meine Kusine.", en: "She is my female cousin." }]
    },
    {
        id: 948, de: "Mensch", en: "human/person", level: "A1", type: "noun", article: "der", plural: "die Menschen", tags: ["people"],
        examples: [{ de: "Alle Menschen sind gleich.", en: "All humans are equal." }]
    },
    {
        id: 949, de: "Mann", en: "man", level: "A1", type: "noun", article: "der", plural: "die Männer", tags: ["people"],
        examples: [{ de: "Der Mann trägt einen Hut.", en: "The man is wearing a hat." }]
    },
    {
        id: 950, de: "Frau", en: "woman/wife", level: "A1", type: "noun", article: "die", plural: "die Frauen", tags: ["people"],
        examples: [{ de: "Die Frau liest ein Buch.", en: "The woman is reading a book." }]
    },
    {
        id: 951, de: "Kind", en: "child", level: "A1", type: "noun", article: "das", plural: "die Kinder", tags: ["people"],
        examples: [{ de: "Das Kind spielt im Garten.", en: "The child plays in the garden." }]
    },
    {
        id: 952, de: "Junge", en: "boy", level: "A1", type: "noun", article: "der", plural: "die Jungen", tags: ["people"],
        examples: [{ de: "Der Junge fährt Fahrrad.", en: "The boy rides a bicycle." }]
    },
    {
        id: 953, de: "Mädchen", en: "girl", level: "A1", type: "noun", article: "das", plural: "die Mädchen", tags: ["people"],
        examples: [{ de: "Das Mädchen isst ein Eis.", en: "The girl eats an ice cream." }]
    },
    {
        id: 954, de: "Baby", en: "baby", level: "A1", type: "noun", article: "das", plural: "die Babys", tags: ["people"],
        examples: [{ de: "Das Baby weint.", en: "The baby cries." }]
    },
    {
        id: 955, de: "Name", en: "name", level: "A1", type: "noun", article: "der", plural: "die Namen", tags: ["people"],
        examples: [{ de: "Wie ist Ihr Name?", en: "What is your name?" }]
    },
    {
        id: 956, de: "Vorname", en: "first name", level: "A1", type: "noun", article: "der", plural: "die Vornamen", tags: ["people"],
        examples: [{ de: "Mein Vorname ist Thomas.", en: "My first name is Thomas." }]
    },
    {
        id: 957, de: "Nachname", en: "last name", level: "A1", type: "noun", article: "der", plural: "die Nachnamen", tags: ["people"],
        examples: [{ de: "Mein Nachname ist Müller.", en: "My last name is Müller." }]
    },
    {
        id: 958, de: "Alter", en: "age", level: "A1", type: "noun", article: "das", tags: ["people"],
        examples: [{ de: "Wie ist dein Alter?", en: "What is your age?" }]
    },
    {
        id: 959, de: "Wohnort", en: "place of residence", level: "A1", type: "noun", article: "der", plural: "die Wohnorte", tags: ["people"],
        examples: [{ de: "Mein Wohnort ist Berlin.", en: "My place of residence is Berlin." }]
    },
    {
        id: 960, de: "Beruf", en: "profession", level: "A1", type: "noun", article: "der", plural: "die Berufe", tags: ["people"],
        examples: [{ de: "Was ist dein Beruf?", en: "What is your profession?" }]
    },
    {
        id: 961, de: "Arbeit", en: "work", level: "A1", type: "noun", article: "die", plural: "die Arbeiten", tags: ["work"],
        examples: [{ de: "Ich gehe zur Arbeit.", en: "I am going to work." }]
    },
    {
        id: 962, de: "Büro", en: "office", level: "A1", type: "noun", article: "das", plural: "die Büros", tags: ["work"],
        examples: [{ de: "Er sitzt im Büro.", en: "He is sitting in the office." }]
    },
    {
        id: 963, de: "Chef", en: "boss", level: "A1", type: "noun", article: "der", plural: "die Chefs", tags: ["work"],
        examples: [{ de: "Der Chef ist heute sehr streng.", en: "The boss is very strict today." }]
    },
    {
        id: 964, de: "Geld", en: "money", level: "A1", type: "noun", article: "das", tags: ["work"],
        examples: [{ de: "Hast du genug Geld dabei?", en: "Do you have enough money with you?" }]
    },
    {
        id: 965, de: "Euro", en: "euro", level: "A1", type: "noun", article: "der", plural: "die Euros", tags: ["work"],
        examples: [{ de: "Das kostet fünf Euro.", en: "That costs five euros." }]
    },
    {
        id: 966, de: "Bank", en: "bank", level: "A1", type: "noun", article: "die", plural: "die Banken", tags: ["work"],
        examples: [{ de: "Ich muss zur Bank gehen.", en: "I have to go to the bank." }]
    },
    {
        id: 967, de: "Kasse", en: "cash register/checkout", level: "A1", type: "noun", article: "die", plural: "die Kassen", tags: ["shopping"],
        examples: [{ de: "Zahlen Sie bitte an der Kasse.", en: "Please pay at the checkout." }]
    },
    {
        id: 968, de: "Rechnung", en: "bill/invoice", level: "A1", type: "noun", article: "die", plural: "die Rechnungen", tags: ["shopping"],
        examples: [{ de: "Die Rechnung bitte!", en: "The bill please!" }]
    },
    {
        id: 969, de: "Frühstück", en: "breakfast", level: "A1", type: "noun", article: "das", plural: "die Frühstücke", tags: ["food"],
        examples: [{ de: "Was gibt es zum Frühstück?", en: "What is there for breakfast?" }]
    },
    {
        id: 970, de: "Mittagessen", en: "lunch", level: "A1", type: "noun", article: "das", tags: ["food"],
        examples: [{ de: "Ich esse Mittagessen um 12 Uhr.", en: "I eat lunch at 12 o'clock." }]
    },
    {
        id: 971, de: "Abendessen", en: "dinner", level: "A1", type: "noun", article: "das", tags: ["food"],
        examples: [{ de: "Wir kochen das Abendessen.", en: "We are cooking dinner." }]
    },
    {
        id: 972, de: "Essen", en: "food", level: "A1", type: "noun", article: "das", tags: ["food"],
        examples: [{ de: "Das Essen schmeckt sehr gut.", en: "The food tastes very good." }]
    },
    {
        id: 973, de: "Getränk", en: "beverage/drink", level: "A1", type: "noun", article: "das", plural: "die Getränke", tags: ["food"],
        examples: [{ de: "Was ist dein Lieblingsgetränk?", en: "What is your favorite drink?" }]
    },
    {
        id: 974, de: "Brot", en: "bread", level: "A1", type: "noun", article: "das", plural: "die Brote", tags: ["food"],
        examples: [{ de: "Soll ich Brot kaufen?", en: "Should I buy bread?" }]
    },
    {
        id: 975, de: "Käse", en: "cheese", level: "A1", type: "noun", article: "der", plural: "die Käse", tags: ["food"],
        examples: [{ de: "Ich mag keinen Käse.", en: "I do not like cheese." }]
    },
    {
        id: 976, de: "Wurst", en: "sausage", level: "A1", type: "noun", article: "die", plural: "die Würste", tags: ["food"],
        examples: [{ de: "Die Wurst ist scharf.", en: "The sausage is spicy." }]
    },
    {
        id: 977, de: "Butter", en: "butter", level: "A1", type: "noun", article: "die", tags: ["food"],
        examples: [{ de: "Gib mir bitte die Butter.", en: "Please pass me the butter." }]
    },
    {
        id: 978, de: "Ei", en: "egg", level: "A1", type: "noun", article: "das", plural: "die Eier", tags: ["food"],
        examples: [{ de: "Ich koche ein Ei.", en: "I am boiling an egg." }]
    },
    {
        id: 979, de: "Gemüse", en: "vegetables", level: "A1", type: "noun", article: "das", tags: ["food"],
        examples: [{ de: "Kinder sollten mehr Gemüse essen.", en: "Children should eat more vegetables." }]
    },
    {
        id: 980, de: "Obst", en: "fruit", level: "A1", type: "noun", article: "das", tags: ["food"],
        examples: [{ de: "Obst ist sehr gesund.", en: "Fruit is very healthy." }]
    },
    {
        id: 981, de: "Salat", en: "salad/lettuce", level: "A1", type: "noun", article: "der", plural: "die Salate", tags: ["food"],
        examples: [{ de: "Möchtest du einen Salat?", en: "Would you like a salad?" }]
    },
    {
        id: 982, de: "Fleisch", en: "meat", level: "A1", type: "noun", article: "das", tags: ["food"],
        examples: [{ de: "Das Fleisch ist gut gekocht.", en: "The meat is well cooked." }]
    },
    {
        id: 983, de: "Fisch", en: "fish", level: "A1", type: "noun", article: "der", plural: "die Fische", tags: ["food"],
        examples: [{ de: "Freitags essen wir Fisch.", en: "On Fridays we eat fish." }]
    },
    {
        id: 984, de: "Suppe", en: "soup", level: "A1", type: "noun", article: "die", plural: "die Suppen", tags: ["food"],
        examples: [{ de: "Die Suppe ist heiß.", en: "The soup is hot." }]
    },
    {
        id: 985, de: "Nudel", en: "noodle", level: "A1", type: "noun", article: "die", plural: "die Nudeln", tags: ["food"],
        examples: [{ de: "Die Nudeln sind noch hart.", en: "The noodles are still hard." }]
    },
    {
        id: 986, de: "Kartoffel", en: "potato", level: "A1", type: "noun", article: "die", plural: "die Kartoffeln", tags: ["food"],
        examples: [{ de: "Wir braten Kartoffeln.", en: "We are frying potatoes." }]
    },
    {
        id: 987, de: "Wasser", en: "water", level: "A1", type: "noun", article: "das", plural: "die Wasser", tags: ["food"],
        examples: [{ de: "Ein Glas Wasser, bitte!", en: "A glass of water, please!" }]
    },
    {
        id: 988, de: "Kaffee", en: "coffee", level: "A1", type: "noun", article: "der", plural: "die Kaffees", tags: ["food"],
        examples: [{ de: "Ich trinke meinen Kaffee schwarz.", en: "I drink my coffee black." }]
    },
    {
        id: 989, de: "Tee", en: "tea", level: "A1", type: "noun", article: "der", plural: "die Tees", tags: ["food"],
        examples: [{ de: "Tee mit Zitrone ist gut bei Erkältung.", en: "Tea with lemon is good for a cold." }]
    },
    {
        id: 990, de: "Saft", en: "juice", level: "A1", type: "noun", article: "der", plural: "die Säfte", tags: ["food"],
        examples: [{ de: "Orangensaft zum Frühstück ist lecker.", en: "Orange juice for breakfast is delicious." }]
    },
    {
        id: 991, de: "Wein", en: "wine", level: "A1", type: "noun", article: "der", plural: "die Weine", tags: ["food"],
        examples: [{ de: "Ein Glas Rotwein, bitte!", en: "A glass of red wine, please!" }]
    },
    {
        id: 992, de: "Bier", en: "beer", level: "A1", type: "noun", article: "das", plural: "die Biere", tags: ["food"],
        examples: [{ de: "In Bayern trinkt man viel Bier.", en: "In Bavaria they drink a lot of beer." }]
    },
    {
        id: 993, de: "Zucker", en: "sugar", level: "A1", type: "noun", article: "der", tags: ["food"],
        examples: [{ de: "Ich trinke Kaffee ohne Zucker.", en: "I drink coffee without sugar." }]
    },
    {
        id: 994, de: "Salz", en: "salt", level: "A1", type: "noun", article: "das", tags: ["food"],
        examples: [{ de: "Da fehlt noch etwas Salz.", en: "It is missing some salt." }]
    },
    {
        id: 995, de: "Pfeffer", en: "pepper", level: "A2", type: "noun", article: "der", tags: ["food"],
        examples: [{ de: "Kannst du mir den Pfeffer geben?", en: "Can you pass the pepper?" }]
    },
    {
        id: 996, de: "Apfel", en: "apple", level: "A1", type: "noun", article: "der", plural: "die Äpfel", tags: ["food"],
        examples: [{ de: "Dieser Apfel ist sehr süß.", en: "This apple is very sweet." }]
    },
    {
        id: 997, de: "Banane", en: "banana", level: "A1", type: "noun", article: "die", plural: "die Bananen", tags: ["food"],
        examples: [{ de: "Ich esse eine Banane.", en: "I am eating a banana." }]
    },
    {
        id: 998, de: "Tomate", en: "tomato", level: "A1", type: "noun", article: "die", plural: "die Tomaten", tags: ["food"],
        examples: [{ de: "Die Tomate ist rot.", en: "The tomato is red." }]
    },
    {
        id: 999, de: "Kuchen", en: "cake", level: "A1", type: "noun", article: "der", plural: "die Kuchen", tags: ["food"],
        examples: [{ de: "Kommen Sie rein, es gibt Kaffee und Kuchen.", en: "Come in, there is coffee and cake." }]
    },
    {
        id: 1000, de: "Schokolade", en: "chocolate", level: "A1", type: "noun", article: "die", plural: "die Schokoladen", tags: ["food"],
        examples: [{ de: "Ich liebe deutsche Schokolade.", en: "I love German chocolate." }]
    },
    {
        id: 1001, de: "Eis", en: "ice cream/ice", level: "A1", type: "noun", article: "das", tags: ["food"],
        examples: [{ de: "Im Sommer essen wir viel Eis.", en: "In summer we eat a lot of ice cream." }]
    },
    {
        id: 1002, de: "Restaurant", en: "restaurant", level: "A1", type: "noun", article: "das", plural: "die Restaurants", tags: ["food"],
        examples: [{ de: "Das Restaurant ist heute geschlossen.", en: "The restaurant is closed today." }]
    },
    {
        id: 1003, de: "Zimmer", en: "room", level: "A1", type: "noun", article: "das", plural: "die Zimmer", tags: ["home"],
        examples: [{ de: "Räum dein Zimmer auf!", en: "Tidy your room!" }]
    },
    {
        id: 1004, de: "Wohnung", en: "apartment/flat", level: "A1", type: "noun", article: "die", plural: "die Wohnungen", tags: ["home"],
        examples: [{ de: "Meine Wohnung hat drei Zimmer.", en: "My apartment has three rooms." }]
    },
    {
        id: 1005, de: "Haus", en: "house", level: "A1", type: "noun", article: "das", plural: "die Häuser", tags: ["home"],
        examples: [{ de: "Ihr Haus ist sehr groß.", en: "Their house is very big." }]
    },
    {
        id: 1006, de: "Möbel", en: "furniture", level: "A2", type: "noun", article: "die", tags: ["home"],
        examples: [{ de: "Wir kaufen neue Möbel für das Wohnzimmer.", en: "We are buying new furniture for the living room." }]
    },
    {
        id: 1007, de: "Tisch", en: "table", level: "A1", type: "noun", article: "der", plural: "die Tische", tags: ["home"],
        examples: [{ de: "Mein Stift liegt auf dem Tisch.", en: "My pen is on the table." }]
    },
    {
        id: 1008, de: "Stuhl", en: "chair", level: "A1", type: "noun", article: "der", plural: "die Stühle", tags: ["home"],
        examples: [{ de: "Setz dich auf den Stuhl.", en: "Sit down on the chair." }]
    },
    {
        id: 1009, de: "Bett", en: "bed", level: "A1", type: "noun", article: "das", plural: "die Betten", tags: ["home"],
        examples: [{ de: "Er liegt noch im Bett.", en: "He is still lying in bed." }]
    },
    {
        id: 1010, de: "Schrank", en: "closet/cupboard", level: "A2", type: "noun", article: "der", plural: "die Schränke", tags: ["home"],
        examples: [{ de: "Häng die Jacke in den Schrank.", en: "Hang the jacket in the closet." }]
    },
    {
        id: 1011, de: "Sofa", en: "sofa", level: "A1", type: "noun", article: "das", plural: "die Sofas", tags: ["home"],
        examples: [{ de: "Wir machen es uns auf dem Sofa bequem.", en: "We make ourselves comfortable on the sofa." }]
    },
    {
        id: 1012, de: "Kühlschrank", en: "refrigerator", level: "A1", type: "noun", article: "der", plural: "die Kühlschränke", tags: ["home"],
        examples: [{ de: "Die Milch ist im Kühlschrank.", en: "The milk is in the refrigerator." }]
    },
    {
        id: 1013, de: "Müll", en: "garbage/trash", level: "A2", type: "noun", article: "der", tags: ["home"],
        examples: [{ de: "Bitte bring den Müll raus.", en: "Please take the garbage out." }]
    },
    {
        id: 1014, de: "Fenster", en: "window", level: "A1", type: "noun", article: "das", plural: "die Fenster", tags: ["home"],
        examples: [{ de: "Kannst du das Fenster schließen?", en: "Can you close the window?" }]
    },
    {
        id: 1015, de: "Tür", en: "door", level: "A1", type: "noun", article: "die", plural: "die Türen", tags: ["home"],
        examples: [{ de: "Jemand steht vor der Tür.", en: "Someone is standing at the door." }]
    },
    {
        id: 1016, de: "Schlüssel", en: "key", level: "A1", type: "noun", article: "der", plural: "die Schlüssel", tags: ["home"],
        examples: [{ de: "Ich brauche meinen Haus-Schlüssel.", en: "I need my house key." }]
    },
    {
        id: 1017, de: "Auto", en: "car", level: "A1", type: "noun", article: "das", plural: "die Autos", tags: ["transport"],
        examples: [{ de: "Darf ich dein Auto leihen?", en: "May I borrow your car?" }]
    },
    {
        id: 1018, de: "links", en: "left", level: "A1", type: "adverb", tags: ["directions"],
        examples: [{ de: "Gehen Sie hier links.", en: "Go left here." }]
    },
    {
        id: 1019, de: "rechts", en: "right", level: "A1", type: "adverb", tags: ["directions"],
        examples: [{ de: "Das Rathaus ist auf der rechten Seite.", en: "The town hall is on the right side." }]
    },
    {
        id: 1020, de: "geradeaus", en: "straight ahead", level: "A1", type: "adverb", tags: ["directions"],
        examples: [{ de: "Gehen Sie immer geradeaus.", en: "Go straight ahead." }]
    },
    {
        id: 1021, de: "oben", en: "above/up", level: "A1", type: "adverb", tags: ["directions"],
        examples: [{ de: "Das Buch liegt ganz oben.", en: "The book is right at the top." }]
    },
    {
        id: 1022, de: "unten", en: "below/down", level: "A1", type: "adverb", tags: ["directions"],
        examples: [{ de: "Bitte warten Sie unten auf mich.", en: "Please wait for me downstairs." }]
    },
    {
        id: 1023, de: "vorn", en: "front", level: "A2", type: "adverb", tags: ["directions"],
        examples: [{ de: "Bitte steigen Sie vorn ein.", en: "Please board at the front." }]
    },
    {
        id: 1024, de: "hinten", en: "back/behind", level: "A2", type: "adverb", tags: ["directions"],
        examples: [{ de: "Wir sitzen hinten im Bus.", en: "We are sitting at the back of the bus." }]
    },
    {
        id: 1025, de: "hier", en: "here", level: "A1", type: "adverb", tags: ["location"],
        examples: [{ de: "Wir sind hier.", en: "We are here." }]
    },
    {
        id: 1026, de: "da", en: "there", level: "A1", type: "adverb", tags: ["location"],
        examples: [{ de: "Er ist da drüben.", en: "He is over there." }]
    },
    {
        id: 1027, de: "dort", en: "there", level: "A1", type: "adverb", tags: ["location"],
        examples: [{ de: "Das Geschäft ist dort.", en: "The shop is there." }]
    },
    {
        id: 1028, de: "drinnen", en: "inside", level: "A2", type: "adverb", tags: ["location"],
        examples: [{ de: "Es regnet, wir bleiben drinnen.", en: "It is raining, we are staying inside." }]
    },
    {
        id: 1029, de: "draußen", en: "outside", level: "A2", type: "adverb", tags: ["location"],
        examples: [{ de: "Die Kinder spielen draußen.", en: "The children play outside." }]
    },
    {
        id: 1030, de: "überall", en: "everywhere", level: "A2", type: "adverb", tags: ["location"],
        examples: [{ de: "Ich habe überall gesucht.", en: "I searched everywhere." }]
    },
    {
        id: 1031, de: "irgendwo", en: "somewhere", level: "A2", type: "adverb", tags: ["location"],
        examples: [{ de: "Mein Schlüssel muss irgendwo sein.", en: "My key must be somewhere." }]
    },
    {
        id: 1032, de: "nirgendwo", en: "nowhere", level: "A2", type: "adverb", tags: ["location"],
        examples: [{ de: "Ich kann mein Handy nirgendwo finden.", en: "I can't find my phone anywhere." }]
    },
    {
        id: 1033, de: "auf", en: "on/upon", level: "A1", type: "preposition", tags: ["grammar"],
        examples: [{ de: "Das Telefon liegt auf dem Tisch.", en: "The phone is on the table." }]
    },
    {
        id: 1034, de: "unter", en: "under", level: "A1", type: "preposition", tags: ["grammar"],
        examples: [{ de: "Die Katze ist unter dem Bett.", en: "The cat is under the bed." }]
    },
    {
        id: 1035, de: "neben", en: "next to", level: "A1", type: "preposition", tags: ["grammar"],
        examples: [{ de: "Er sitzt neben mir.", en: "He is sitting next to me." }]
    },
    {
        id: 1036, de: "zwischen", en: "between", level: "A1", type: "preposition", tags: ["grammar"],
        examples: [{ de: "Der Bahnhof liegt zwischen den Städten.", en: "The train station is between the cities." }]
    },
    {
        id: 1037, de: "hinter", en: "behind", level: "A1", type: "preposition", tags: ["grammar"],
        examples: [{ de: "Der Garten ist hinter dem Haus.", en: "The garden is behind the house." }]
    },
    {
        id: 1038, de: "vor", en: "in front of / before", level: "A1", type: "preposition", tags: ["grammar"],
        examples: [{ de: "Das Auto steht vor der Tür.", en: "The car is in front of the door." }]
    },
    {
        id: 1039, de: "in", en: "in/into", level: "A1", type: "preposition", tags: ["grammar"],
        examples: [{ de: "Die Milch ist im Kühlschrank.", en: "The milk is in the fridge." }]
    },
    {
        id: 1040, de: "an", en: "at/on", level: "A1", type: "preposition", tags: ["grammar"],
        examples: [{ de: "Das Bild hängt an der Wand.", en: "The picture hangs on the wall." }]
    },
    {
        id: 1041, de: "zu", en: "to/too", level: "A1", type: "preposition", tags: ["grammar"],
        examples: [{ de: "Ich gehe zu dir.", en: "I am going to you." }]
    },
    {
        id: 1042, de: "mit", en: "with", level: "A1", type: "preposition", tags: ["grammar"],
        examples: [{ de: "Ich fahre mit dem Bus.", en: "I am going by bus." }]
    },
    {
        id: 1043, de: "ohne", en: "without", level: "A1", type: "preposition", tags: ["grammar"],
        examples: [{ de: "Ein Kaffee ohne Zucker, bitte.", en: "A coffee without sugar, please." }]
    },
    {
        id: 1044, de: "für", en: "for", level: "A1", type: "preposition", tags: ["grammar"],
        examples: [{ de: "Das Geschenk ist für dich.", en: "The gift is for you." }]
    },
    {
        id: 1045, de: "gegen", en: "against/around", level: "A1", type: "preposition", tags: ["grammar"],
        examples: [{ de: "Ich bin gegen diese Idee.", en: "I am against this idea." }]
    },
    {
        id: 1046, de: "durch", en: "through", level: "A1", type: "preposition", tags: ["grammar"],
        examples: [{ de: "Wir gehen durch den Park.", en: "We walk through the park." }]
    },
    {
        id: 1047, de: "von", en: "from/of", level: "A1", type: "preposition", tags: ["grammar"],
        examples: [{ de: "Ich komme gerade von der Arbeit.", en: "I am just coming from work." }]
    },
    {
        id: 1048, de: "aus", en: "out of / from", level: "A1", type: "preposition", tags: ["grammar"],
        examples: [{ de: "Er kommt aus Deutschland.", en: "He comes from Germany." }]
    },
    {
        id: 1049, de: "bei", en: "at/near", level: "A1", type: "preposition", tags: ["grammar"],
        examples: [{ de: "Ich arbeite bei Siemens.", en: "I work at Siemens." }]
    },
    {
        id: 1050, de: "nach", en: "after/to", level: "A1", type: "preposition", tags: ["grammar"],
        examples: [{ de: "Nach der Arbeit gehe ich nach Hause.", en: "After work I go home." }]
    },
    {
        id: 1051, de: "seit", en: "since", level: "A2", type: "preposition", tags: ["grammar"],
        examples: [{ de: "Ich lerne seit einem Jahr Deutsch.", en: "I have been learning German for a year." }]
    },
    {
        id: 1052, de: "bis", en: "until", level: "A1", type: "preposition", tags: ["grammar"],
        examples: [{ de: "Wir warten bis morgen.", en: "We will wait until tomorrow." }]
    },
    {
        id: 1053, de: "immer", en: "always", level: "A1", type: "adverb", tags: ["time"],
        examples: [{ de: "Er kommt immer zu spät.", en: "He always arrives late." }]
    },
    {
        id: 1054, de: "oft", en: "often", level: "A1", type: "adverb", tags: ["time"],
        examples: [{ de: "Ich gehe oft ins Kino.", en: "I often go to the cinema." }]
    },
    {
        id: 1055, de: "manchmal", en: "sometimes", level: "A1", type: "adverb", tags: ["time"],
        examples: [{ de: "Manchmal esse ich Döner.", en: "Sometimes I eat kebab." }]
    },
    {
        id: 1056, de: "selten", en: "rarely", level: "A1", type: "adverb", tags: ["time"],
        examples: [{ de: "Ich trinke selten Kaffee.", en: "I rarely drink coffee." }]
    },
    {
        id: 1057, de: "nie", en: "never", level: "A1", type: "adverb", tags: ["time"],
        examples: [{ de: "Ich war noch nie in Paris.", en: "I have never been to Paris." }]
    },
    {
        id: 1058, de: "bald", en: "soon", level: "A1", type: "adverb", tags: ["time"],
        examples: [{ de: "Wir sehen uns bald.", en: "See you soon." }]
    },
    {
        id: 1059, de: "spät", en: "late", level: "A1", type: "adjective", tags: ["time"],
        examples: [{ de: "Es ist schon sehr spät.", en: "It is already very late." }]
    },
    {
        id: 1060, de: "früh", en: "early", level: "A1", type: "adjective", tags: ["time"],
        examples: [{ de: "Ich muss morgen früh aufstehen.", en: "I have to get up early tomorrow." }]
    },
    {
        id: 1061, de: "pünktlich", en: "punctual", level: "A1", type: "adjective", tags: ["time"],
        examples: [{ de: "Der Zug ist pünktlich.", en: "The train is on time." }]
    },
    {
        id: 1062, de: "täglich", en: "daily", level: "A2", type: "adjective", tags: ["time"],
        examples: [{ de: "Ich lese die tägliche Zeitung.", en: "I read the daily newspaper." }]
    },
    {
        id: 1063, de: "wöchentlich", en: "weekly", level: "A2", type: "adjective", tags: ["time"],
        examples: [{ de: "Wir haben ein wöchentliches Meeting.", en: "We have a weekly meeting." }]
    },
    {
        id: 1064, de: "monatlich", en: "monthly", level: "A2", type: "adjective", tags: ["time"],
        examples: [{ de: "Die Miete wird monatlich bezahlt.", en: "The rent is paid monthly." }]
    },
    {
        id: 1065, de: "jährlich", en: "yearly/annually", level: "A2", type: "adjective", tags: ["time"],
        examples: [{ de: "Der Urlaub findet jährlich statt.", en: "The vacation takes place annually." }]
    },
    {
        id: 1066, de: "Montag", en: "Monday", level: "A1", type: "noun", article: "der", plural: "die Montage", tags: ["time"],
        examples: [{ de: "Am Montag arbeite ich.", en: "I work on Monday." }]
    },
    {
        id: 1067, de: "Dienstag", en: "Tuesday", level: "A1", type: "noun", article: "der", plural: "die Dienstage", tags: ["time"],
        examples: [{ de: "Am Dienstag gehe ich zum Sport.", en: "On Tuesday I go to do sports." }]
    },
    {
        id: 1068, de: "Mittwoch", en: "Wednesday", level: "A1", type: "noun", article: "der", plural: "die Mittwoche", tags: ["time"],
        examples: [{ de: "Mittwoch ist die Mitte der Woche.", en: "Wednesday is the middle of the week." }]
    },
    {
        id: 1069, de: "Donnerstag", en: "Thursday", level: "A1", type: "noun", article: "der", plural: "die Donnerstage", tags: ["time"],
        examples: [{ de: "Am Donnerstag besuche ich meine Eltern.", en: "On Thursday I visit my parents." }]
    },
    {
        id: 1070, de: "Freitag", en: "Friday", level: "A1", type: "noun", article: "der", plural: "die Freitage", tags: ["time"],
        examples: [{ de: "Am Freitag feiern wir.", en: "On Friday we celebrate." }]
    },
    {
        id: 1071, de: "Samstag", en: "Saturday", level: "A1", type: "noun", article: "der", plural: "die Samstage", tags: ["time"],
        examples: [{ de: "Samstag ist Wochenende.", en: "Saturday is the weekend." }]
    },
    {
        id: 1072, de: "Sonntag", en: "Sunday", level: "A1", type: "noun", article: "der", plural: "die Sonntage", tags: ["time"],
        examples: [{ de: "Der Sonntag ist ein Ruhetag.", en: "Sunday is a day of rest." }]
    },
    {
        id: 1073, de: "Januar", en: "January", level: "A1", type: "noun", article: "der", tags: ["time"],
        examples: [{ de: "Im Januar ist es kalt.", en: "In January it is cold." }]
    },
    {
        id: 1074, de: "Februar", en: "February", level: "A1", type: "noun", article: "der", tags: ["time"],
        examples: [{ de: "Im Februar gibt es oft Schnee.", en: "In February there is often snow." }]
    },
    {
        id: 1075, de: "März", en: "March", level: "A1", type: "noun", article: "der", tags: ["time"],
        examples: [{ de: "Der Frühling beginnt im März.", en: "Spring begins in March." }]
    },
    {
        id: 1076, de: "April", en: "April", level: "A1", type: "noun", article: "der", tags: ["time"],
        examples: [{ de: "Der April macht was er will.", en: "April does what it wants." }]
    },
    {
        id: 1077, de: "Mai", en: "May", level: "A1", type: "noun", article: "der", tags: ["time"],
        examples: [{ de: "Im Mai ist das Wetter schön.", en: "In May the weather is beautiful." }]
    },
    {
        id: 1078, de: "Juni", en: "June", level: "A1", type: "noun", article: "der", tags: ["time"],
        examples: [{ de: "Im Juni wird es warm.", en: "In June it gets warm." }]
    },
    {
        id: 1079, de: "Juli", en: "July", level: "A1", type: "noun", article: "der", tags: ["time"],
        examples: [{ de: "Wir fahren im Juli in den Urlaub.", en: "We are going on holiday in July." }]
    },
    {
        id: 1080, de: "August", en: "August", level: "A1", type: "noun", article: "der", tags: ["time"],
        examples: [{ de: "Der August ist ein heißer Monat.", en: "August is a hot month." }]
    },
    {
        id: 1081, de: "September", en: "September", level: "A1", type: "noun", article: "der", tags: ["time"],
        examples: [{ de: "Die Schule beginnt im September.", en: "School starts in September." }]
    },
    {
        id: 1082, de: "Oktober", en: "October", level: "A1", type: "noun", article: "der", tags: ["time"],
        examples: [{ de: "Im Oktober feiern wir das Oktoberfest.", en: "In October we celebrate the Oktoberfest." }]
    },
    {
        id: 1083, de: "November", en: "November", level: "A1", type: "noun", article: "der", tags: ["time"],
        examples: [{ de: "Der November ist grau und nass.", en: "November is gray and wet." }]
    },
    {
        id: 1084, de: "Dezember", en: "December", level: "A1", type: "noun", article: "der", tags: ["time"],
        examples: [{ de: "Im Dezember feiern wir Weihnachten.", en: "In December we celebrate Christmas." }]
    },
    {
        id: 1085, de: "Frühling", en: "spring", level: "A1", type: "noun", article: "der", plural: "die Frühlinge", tags: ["time"],
        examples: [{ de: "Frühling ist meine Lieblingszeit.", en: "Spring is my favorite time." }]
    },
    {
        id: 1086, de: "Sommer", en: "summer", level: "A1", type: "noun", article: "der", plural: "die Sommer", tags: ["time"],
        examples: [{ de: "Im Sommer ist es heiß.", en: "In summer it is hot." }]
    },
    {
        id: 1087, de: "Herbst", en: "autumn", level: "A1", type: "noun", article: "der", plural: "die Herbste", tags: ["time"],
        examples: [{ de: "Die Blätter fallen im Herbst.", en: "The leaves fall in autumn." }]
    },
    {
        id: 1088, de: "Winter", en: "winter", level: "A1", type: "noun", article: "der", plural: "die Winter", tags: ["time"],
        examples: [{ de: "Ich mag keinen Winter.", en: "I do not like winter." }]
    },
    {
        id: 1089, de: "Apfel", en: "apple", level: "A1", type: "noun", article: "der", plural: "die Äpfel", tags: ["food"],
        examples: [{ de: "Der Apfel ist grün.", en: "The apple is green." }]
    },
    {
        id: 1090, de: "Erdbeere", en: "strawberry", level: "A1", type: "noun", article: "die", plural: "die Erdbeeren", tags: ["food"],
        examples: [{ de: "Ich liebe Erdbeeren.", en: "I love strawberries." }]
    },
    {
        id: 1091, de: "Birne", en: "pear", level: "A2", type: "noun", article: "die", plural: "die Birnen", tags: ["food"],
        examples: [{ de: "Diese Birne ist sehr süß.", en: "This pear is very sweet." }]
    },
    {
        id: 1092, de: "Orange", en: "orange", level: "A1", type: "noun", article: "die", plural: "die Orangen", tags: ["food"],
        examples: [{ de: "Ich trinke frisch gepresste Orangen.", en: "I drink freshly squeezed oranges." }]
    },
    {
        id: 1093, de: "Zitrone", en: "lemon", level: "A1", type: "noun", article: "die", plural: "die Zitronen", tags: ["food"],
        examples: [{ de: "Der Tee braucht eine Zitrone.", en: "The tea needs a lemon." }]
    },
    {
        id: 1094, de: "Traube", en: "grape", level: "A2", type: "noun", article: "die", plural: "die Trauben", tags: ["food"],
        examples: [{ de: "Diese Trauben sind sauer.", en: "These grapes are sour." }]
    },
    {
        id: 1095, de: "Kirsche", en: "cherry", level: "A2", type: "noun", article: "die", plural: "die Kirschen", tags: ["food"],
        examples: [{ de: "Die Kirschen sind reif.", en: "The cherries are ripe." }]
    },
    {
        id: 1096, de: "Gurke", en: "cucumber", level: "A1", type: "noun", article: "die", plural: "die Gurken", tags: ["food"],
        examples: [{ de: "Die Gurke ist sehr erfrischend.", en: "The cucumber is very refreshing." }]
    },
    {
        id: 1097, de: "Karotte", en: "carrot", level: "A1", type: "noun", article: "die", plural: "die Karotten", tags: ["food"],
        examples: [{ de: "Kaninchen mögen Karotten.", en: "Rabbits like carrots." }]
    },
    {
        id: 1098, de: "Zwiebel", en: "onion", level: "A1", type: "noun", article: "die", plural: "die Zwiebeln", tags: ["food"],
        examples: [{ de: "Ich brauche eine Zwiebel für die Soße.", en: "I need an onion for the sauce." }]
    },
    {
        id: 1099, de: "Knoblauch", en: "garlic", level: "A2", type: "noun", article: "der", tags: ["food"],
        examples: [{ de: "Mit Knoblauch schmeckt alles besser.", en: "With garlic, everything tastes better." }]
    },
    {
        id: 1100, de: "Paprika", en: "pepper/bell pepper", level: "A1", type: "noun", article: "die", plural: "die Paprikas", tags: ["food"],
        examples: [{ de: "Die rote Paprika ist süß.", en: "The red bell pepper is sweet." }]
    },
    {
        id: 1101, de: "Messer", en: "knife", level: "A1", type: "noun", article: "das", plural: "die Messer", tags: ["kitchen"],
        examples: [{ de: "Das Messer ist sehr scharf.", en: "The knife is very sharp." }]
    },
    {
        id: 1102, de: "Gabel", en: "fork", level: "A1", type: "noun", article: "die", plural: "die Gabeln", tags: ["kitchen"],
        examples: [{ de: "Bitte gib mir eine Gabel.", en: "Please give me a fork." }]
    },
    {
        id: 1103, de: "Löffel", en: "spoon", level: "A1", type: "noun", article: "der", plural: "die Löffel", tags: ["kitchen"],
        examples: [{ de: "Ich esse die Suppe mit einem Löffel.", en: "I eat the soup with a spoon." }]
    },
    {
        id: 1104, de: "Teller", en: "plate", level: "A1", type: "noun", article: "der", plural: "die Teller", tags: ["kitchen"],
        examples: [{ de: "Dein Essen steht auf dem Teller.", en: "Your food is on the plate." }]
    },
    {
        id: 1105, de: "Tasse", en: "cup", level: "A1", type: "noun", article: "die", plural: "die Tassen", tags: ["kitchen"],
        examples: [{ de: "Ich hätte gern eine Tasse Tee.", en: "I would like a cup of tea." }]
    },
    {
        id: 1106, de: "Glas", en: "glass", level: "A1", type: "noun", article: "das", plural: "die Gläser", tags: ["kitchen"],
        examples: [{ de: "Ein Glas Wasser, bitte!", en: "A glass of water, please!" }]
    },
    {
        id: 1107, de: "Flasche", en: "bottle", level: "A1", type: "noun", article: "die", plural: "die Flaschen", tags: ["kitchen"],
        examples: [{ de: "Wir öffnen eine Flasche Wein.", en: "We are opening a bottle of wine." }]
    },
    {
        id: 1108, de: "Topf", en: "pot", level: "A2", type: "noun", article: "der", plural: "die Töpfe", tags: ["kitchen"],
        examples: [{ de: "Die Suppe kocht im Topf.", en: "The soup is boiling in the pot." }]
    },
    {
        id: 1109, de: "Pfanne", en: "pan", level: "A2", type: "noun", article: "die", plural: "die Pfannen", tags: ["kitchen"],
        examples: [{ de: "Wir braten die Eier in der Pfanne.", en: "We fry the eggs in the pan." }]
    },
    {
        id: 1110, de: "Dusche", en: "shower", level: "A1", type: "noun", article: "die", plural: "die Duschen", tags: ["bathroom"],
        examples: [{ de: "Ich nehme am Morgen eine Dusche.", en: "I take a shower in the morning." }]
    },
    {
        id: 1111, de: "Badewanne", en: "bathtub", level: "A2", type: "noun", article: "die", plural: "die Badewannen", tags: ["bathroom"],
        examples: [{ de: "Ich entspanne mich in der Badewanne.", en: "I relax in the bathtub." }]
    },
    {
        id: 1112, de: "Seife", en: "soap", level: "A1", type: "noun", article: "die", plural: "die Seifen", tags: ["bathroom"],
        examples: [{ de: "Wasche dir die Hände mit Seife.", en: "Wash your hands with soap." }]
    },
    {
        id: 1113, de: "Handtuch", en: "towel", level: "A1", type: "noun", article: "das", plural: "die Handtücher", tags: ["bathroom"],
        examples: [{ de: "Hier ist ein sauberes Handtuch.", en: "Here is a clean towel." }]
    },
    {
        id: 1114, de: "Zahnbürste", en: "toothbrush", level: "A1", type: "noun", article: "die", plural: "die Zahnbürsten", tags: ["bathroom"],
        examples: [{ de: "Vergiss deine Zahnbürste nicht.", en: "Do not forget your toothbrush." }]
    },
    {
        id: 1115, de: "Zahnpasta", en: "toothpaste", level: "A1", type: "noun", article: "die", tags: ["bathroom"],
        examples: [{ de: "Wir brauchen neue Zahnpasta.", en: "We need new toothpaste." }]
    },
    {
        id: 1116, de: "Toilette", en: "toilet", level: "A1", type: "noun", article: "die", plural: "die Toiletten", tags: ["bathroom"],
        examples: [{ de: "Wo ist die Toilette?", en: "Where is the toilet?" }]
    },
    {
        id: 1117, de: "Papier", en: "paper", level: "A1", type: "noun", article: "das", plural: "die Papiere", tags: ["office"],
        examples: [{ de: "Hast du ein Blatt Papier?", en: "Do you have a piece of paper?" }]
    },
    {
        id: 1118, de: "Stift", en: "pen", level: "A1", type: "noun", article: "der", plural: "die Stifte", tags: ["office"],
        examples: [{ de: "Kannst du mir einen Stift leihen?", en: "Can you lend me a pen?" }]
    },
    {
        id: 1119, de: "Bleistift", en: "pencil", level: "A1", type: "noun", article: "der", plural: "die Bleistifte", tags: ["office"],
        examples: [{ de: "Ich schreibe mit dem Bleistift.", en: "I am writing with the pencil." }]
    },
    {
        id: 1120, de: "Kugelschreiber", en: "ballpoint pen", level: "A2", type: "noun", article: "der", plural: "die Kugelschreiber", tags: ["office"],
        examples: [{ de: "Dieser Kugelschreiber schreibt blau.", en: "This ballpoint pen writes blue." }]
    },
    {
        id: 1121, de: "Brief", en: "letter", level: "A1", type: "noun", article: "der", plural: "die Briefe", tags: ["office"],
        examples: [{ de: "Ich schreibe einen Brief an meine Oma.", en: "I am writing a letter to my grandma." }]
    },
    {
        id: 1122, de: "Briefmarke", en: "stamp", level: "A2", type: "noun", article: "die", plural: "die Briefmarken", tags: ["office"],
        examples: [{ de: "Du brauchst eine Briefmarke für den Brief.", en: "You need a stamp for the letter." }]
    },
    {
        id: 1123, de: "Paket", en: "package", level: "A1", type: "noun", article: "das", plural: "die Pakete", tags: ["office"],
        examples: [{ de: "Das Paket ist heute angekommen.", en: "The package arrived today." }]
    },
    {
        id: 1124, de: "Zeitung", en: "newspaper", level: "A1", type: "noun", article: "die", plural: "die Zeitungen", tags: ["office"],
        examples: [{ de: "Ich lese jeden Morgen die Zeitung.", en: "I read the newspaper every morning." }]
    },
    {
        id: 1125, de: "Nachricht", en: "message/news", level: "A1", type: "noun", article: "die", plural: "die Nachrichten", tags: ["office"],
        examples: [{ de: "Hast du meine Nachricht bekommen?", en: "Did you get my message?" }]
    },
    {
        id: 1126, de: "Radio", en: "radio", level: "A1", type: "noun", article: "das", plural: "die Radios", tags: ["tech"],
        examples: [{ de: "Ich höre gern Radio.", en: "I like listening to the radio." }]
    },
    {
        id: 1127, de: "Fernsehen", en: "television (medium)", level: "A1", type: "noun", article: "das", tags: ["tech"],
        examples: [{ de: "Was gibt es heute im Fernsehen?", en: "What is on television today?" }]
    },
    {
        id: 1128, de: "Film", en: "movie", level: "A1", type: "noun", article: "der", plural: "die Filme", tags: ["leisure"],
        examples: [{ de: "Der Film war sehr spannend.", en: "The movie was very exciting." }]
    },
    {
        id: 1129, de: "Kino", en: "cinema", level: "A1", type: "noun", article: "das", plural: "die Kinos", tags: ["leisure"],
        examples: [{ de: "Wir gehen ins Kino.", en: "We are going to the cinema." }]
    },
    {
        id: 1130, de: "Musik", en: "music", level: "A1", type: "noun", article: "die", tags: ["leisure"],
        examples: [{ de: "Sie studiert Musik.", en: "She studies music." }]
    },
    {
        id: 1131, de: "Lied", en: "song", level: "A1", type: "noun", article: "das", plural: "die Lieder", tags: ["leisure"],
        examples: [{ de: "Das ist mein Lieblings-Lied.", en: "That is my favorite song." }]
    },
    {
        id: 1132, de: "Bild", en: "picture", level: "A1", type: "noun", article: "das", plural: "die Bilder", tags: ["art"],
        examples: [{ de: "Das Bild hängt an der Wand.", en: "The picture hangs on the wall." }]
    },
    {
        id: 1133, de: "Foto", en: "photo", level: "A1", type: "noun", article: "das", plural: "die Fotos", tags: ["art"],
        examples: [{ de: "Wir haben viele Fotos gemacht.", en: "We took many photos." }]
    },
    {
        id: 1134, de: "Farbe", en: "color", level: "A1", type: "noun", article: "die", plural: "die Farben", tags: ["art"],
        examples: [{ de: "Meine Lieblings-Farbe ist grün.", en: "My favorite color is green." }]
    },
    {
        id: 1135, de: "malen", en: "to paint", level: "A1", type: "verb", tags: ["art"],
        examples: [{ de: "Das Kind malt gern.", en: "The child likes to paint." }]
    },
    {
        id: 1136, de: "zeichnen", en: "to draw", level: "A2", type: "verb", tags: ["art"],
        examples: [{ de: "Er kann sehr gut zeichnen.", en: "He can draw very well." }]
    },
    {
        id: 1137, de: "spielen", en: "to play", level: "A1", type: "verb", tags: ["leisure"],
        examples: [{ de: "Wir spielen ein Spiel.", en: "We play a game." }]
    },
    {
        id: 1138, de: "Spiel", en: "game", level: "A1", type: "noun", article: "das", plural: "die Spiele", tags: ["leisure"],
        examples: [{ de: "Das Spiel macht Spaß.", en: "The game is fun." }]
    },
    {
        id: 1139, de: "Reise", en: "trip", level: "A1", type: "noun", article: "die", plural: "die Reisen", tags: ["travel"],
        examples: [{ de: "Die Reise war anstrengend.", en: "The trip was exhausting." }]
    },
    {
        id: 1140, de: "Urlaub", en: "vacation", level: "A1", type: "noun", article: "der", plural: "die Urlaube", tags: ["travel"],
        examples: [{ de: "Ich brauche Urlaub.", en: "I need a vacation." }]
    },
    {
        id: 1141, de: "Koffer", en: "suitcase", level: "A1", type: "noun", article: "der", plural: "die Koffer", tags: ["travel"],
        examples: [{ de: "Mein Koffer ist schon gepackt.", en: "My suitcase is already packed." }]
    },
    {
        id: 1142, de: "Ausweis", en: "ID card", level: "A1", type: "noun", article: "der", plural: "die Ausweise", tags: ["travel"],
        examples: [{ de: "Bitte zeigen Sie Ihren Ausweis.", en: "Please show your ID." }]
    },
    {
        id: 1143, de: "Pass", en: "passport", level: "A1", type: "noun", article: "der", plural: "die Pässe", tags: ["travel"],
        examples: [{ de: "Ich brauche einen neuen Pass.", en: "I need a new passport." }]
    },
    {
        id: 1144, de: "Geld", en: "money", level: "A1", type: "noun", article: "das", tags: ["shopping"],
        examples: [{ de: "Hast du Geld dabei?", en: "Do you have money with you?" }]
    },
    {
        id: 1145, de: "Rechnung", en: "bill", level: "A1", type: "noun", article: "die", plural: "die Rechnungen", tags: ["shopping"],
        examples: [{ de: "Die Rechnung, bitte.", en: "The bill, please." }]
    },
    {
        id: 1146, de: "Kreditkarte", en: "credit card", level: "A1", type: "noun", article: "die", plural: "die Kreditkarten", tags: ["shopping"],
        examples: [{ de: "Kann ich mit Kreditkarte zahlen?", en: "Can I pay by credit card?" }]
    },
    {
        id: 1147, de: "Rabatt", en: "discount", level: "A2", type: "noun", article: "der", plural: "die Rabatte", tags: ["shopping"],
        examples: [{ de: "Wir bekommen 10% Rabatt.", en: "We are getting a 10% discount." }]
    },
    {
        id: 1148, de: "Angebot", en: "offer/sale", level: "A2", type: "noun", article: "das", plural: "die Angebote", tags: ["shopping"],
        examples: [{ de: "Diese Schuhe sind im Angebot.", en: "These shoes are on sale." }]
    },
    {
        id: 1149, de: "Geschenk", en: "gift", level: "A1", type: "noun", article: "das", plural: "die Geschenke", tags: ["shopping"],
        examples: [{ de: "Ich kaufe ein Geschenk für dich.", en: "I am buying a gift for you." }]
    },
    {
        id: 1150, de: "Laden", en: "shop/store", level: "A1", type: "noun", article: "der", plural: "die Läden", tags: ["shopping"],
        examples: [{ de: "Der Laden schließt um acht.", en: "The store closes at eight." }]
    },
    {
        id: 1151, de: "Verkäufer", en: "salesperson", level: "A1", type: "noun", article: "der", plural: "die Verkäufer", tags: ["shopping"],
        examples: [{ de: "Der Verkäufer ist sehr nett.", en: "The salesperson is very nice." }]
    },
    {
        id: 1152, de: "Kunde", en: "customer", level: "A1", type: "noun", article: "der", plural: "die Kunden", tags: ["shopping"],
        examples: [{ de: "Der Kunde hat immer Recht.", en: "The customer is always right." }]
    },
    {
        id: 1153, de: "Beruf", en: "profession", level: "A1", type: "noun", article: "der", plural: "die Berufe", tags: ["work"],
        examples: [{ de: "Was ist Ihr Beruf?", en: "What is your profession?" }]
    },
    {
        id: 1154, de: "Arzt", en: "doctor", level: "A1", type: "noun", article: "der", plural: "die Ärzte", tags: ["work"],
        examples: [{ de: "Der Arzt untersucht den Patienten.", en: "The doctor examines the patient." }]
    },
    {
        id: 1155, de: "Polizist", en: "policeman", level: "A2", type: "noun", article: "der", plural: "die Polizisten", tags: ["work"],
        examples: [{ de: "Der Polizist regelt den Verkehr.", en: "The policeman directs traffic." }]
    },
    {
        id: 1156, de: "Lehrer", en: "teacher", level: "A1", type: "noun", article: "der", plural: "die Lehrer", tags: ["work"],
        examples: [{ de: "Der Lehrer erklärt die Grammatik.", en: "The teacher explains the grammar." }]
    },
    {
        id: 1157, de: "Bäcker", en: "baker", level: "A2", type: "noun", article: "der", plural: "die Bäcker", tags: ["work"],
        examples: [{ de: "Der Bäcker backt frisches Brot.", en: "The baker bakes fresh bread." }]
    },
    {
        id: 1158, de: "Kellner", en: "waiter", level: "A1", type: "noun", article: "der", plural: "die Kellner", tags: ["work"],
        examples: [{ de: "Der Kellner bringt das Essen.", en: "The waiter brings the food." }]
    },
    {
        id: 1159, de: "Koch", en: "cook", level: "A2", type: "noun", article: "der", plural: "die Köche", tags: ["work"],
        examples: [{ de: "Der Koch kocht die Suppe.", en: "The cook cooks the soup." }]
    },
    {
        id: 1160, de: "Bauer", en: "farmer", level: "A2", type: "noun", article: "der", plural: "die Bauern", tags: ["work"],
        examples: [{ de: "Der Bauer arbeitet auf dem Feld.", en: "The farmer works on the field." }]
    },
    {
        id: 1161, de: "Mechaniker", en: "mechanic", level: "A2", type: "noun", article: "der", plural: "die Mechaniker", tags: ["work"],
        examples: [{ de: "Der Mechaniker repariert das Auto.", en: "The mechanic repairs the car." }]
    },
    {
        id: 1162, de: "Sekretär", en: "secretary", level: "A2", type: "noun", article: "der", plural: "die Sekretäre", tags: ["work"],
        examples: [{ de: "Der Sekretär schreibt eine E-Mail.", en: "The secretary writes an email." }]
    },
    {
        id: 1163, de: "Künstler", en: "artist", level: "A2", type: "noun", article: "der", plural: "die Künstler", tags: ["work"],
        examples: [{ de: "Der Künstler malt ein Bild.", en: "The artist paints a picture." }]
    },
    {
        id: 1164, de: "Kollege", en: "colleague", level: "A1", type: "noun", article: "der", plural: "die Kollegen", tags: ["work"],
        examples: [{ de: "Mein Kollege hilft mir oft.", en: "My colleague often helps me." }]
    },
    {
        id: 1165, de: "Chef", en: "boss", level: "A1", type: "noun", article: "der", plural: "die Chefs", tags: ["work"],
        examples: [{ de: "Der Chef hat viel zu tun.", en: "The boss has a lot to do." }]
    },
    {
        id: 1166, de: "null", en: "zero", level: "A1", type: "number", tags: ["numbers"],
        examples: [{ de: "Die Temperatur ist null Grad.", en: "The temperature is zero degrees." }]
    },
    {
        id: 1167, de: "eins", en: "one", level: "A1", type: "number", tags: ["numbers"],
        examples: [{ de: "Ich habe ein Buch.", en: "I have one book." }]
    },
    {
        id: 1168, de: "zwei", en: "two", level: "A1", type: "number", tags: ["numbers"],
        examples: [{ de: "Wir haben zwei Katzen.", en: "We have two cats." }]
    },
    {
        id: 1169, de: "drei", en: "three", level: "A1", type: "number", tags: ["numbers"],
        examples: [{ de: "Er ist drei Jahre alt.", en: "He is three years old." }]
    },
    {
        id: 1170, de: "vier", en: "four", level: "A1", type: "number", tags: ["numbers"],
        examples: [{ de: "Das Auto hat vier Türen.", en: "The car has four doors." }]
    },
    {
        id: 1171, de: "fünf", en: "five", level: "A1", type: "number", tags: ["numbers"],
        examples: [{ de: "Wir bleiben fünf Tage.", en: "We are staying five days." }]
    },
    {
        id: 1172, de: "sechs", en: "six", level: "A1", type: "number", tags: ["numbers"],
        examples: [{ de: "Heute ist der sechste Mai.", en: "Today is the sixth of May." }]
    },
    {
        id: 1173, de: "sieben", en: "seven", level: "A1", type: "number", tags: ["numbers"],
        examples: [{ de: "Ein Woche hat sieben Tage.", en: "A week has seven days." }]
    },
    {
        id: 1174, de: "acht", en: "eight", level: "A1", type: "number", tags: ["numbers"],
        examples: [{ de: "Ich arbeite acht Stunden am Tag.", en: "I work eight hours a day." }]
    },
    {
        id: 1175, de: "neun", en: "nine", level: "A1", type: "number", tags: ["numbers"],
        examples: [{ de: "Um neun Uhr fängt die Schule an.", en: "School starts at nine o'clock." }]
    },
    {
        id: 1176, de: "zehn", en: "ten", level: "A1", type: "number", tags: ["numbers"],
        examples: [{ de: "Ich habe zehn Euro.", en: "I have ten euros." }]
    },
    {
        id: 1177, de: "zwanzig", en: "twenty", level: "A1", type: "number", tags: ["numbers"],
        examples: [{ de: "Das kostet zwanzig Euro.", en: "That costs twenty euros." }]
    },
    {
        id: 1178, de: "dreißig", en: "thirty", level: "A1", type: "number", tags: ["numbers"],
        examples: [{ de: "Er ist dreißig Jahre alt.", en: "He is thirty years old." }]
    },
    {
        id: 1179, de: "vierzig", en: "forty", level: "A1", type: "number", tags: ["numbers"],
        examples: [{ de: "Der Bus kommt in vierzig Minuten.", en: "The bus arrives in forty minutes." }]
    },
    {
        id: 1180, de: "fünfzig", en: "fifty", level: "A1", type: "number", tags: ["numbers"],
        examples: [{ de: "Mein Vater ist fünfzig.", en: "My father is fifty." }]
    },
    {
        id: 1181, de: "hundert", en: "hundred", level: "A1", type: "number", tags: ["numbers"],
        examples: [{ de: "Ein Jahrhundert hat hundert Jahre.", en: "A century has a hundred years." }]
    },
    {
        id: 1182, de: "tausend", en: "thousand", level: "A1", type: "number", tags: ["numbers"],
        examples: [{ de: "Ein Kilometer hat tausend Meter.", en: "One kilometer has a thousand meters." }]
    },
    {
        id: 1183, de: "erste", en: "first", level: "A2", type: "adjective", tags: ["numbers"],
        examples: [{ de: "Ich bin der erste in der Schlange.", en: "I am the first in line." }]
    },
    {
        id: 1184, de: "zweite", en: "second", level: "A2", type: "adjective", tags: ["numbers"],
        examples: [{ de: "Sie wohnt im zweiten Stock.", en: "She lives on the second floor." }]
    },
    {
        id: 1185, de: "dritte", en: "third", level: "A2", type: "adjective", tags: ["numbers"],
        examples: [{ de: "Heute ist mein dritter Tag hier.", en: "Today is my third day here." }]
    },
    {
        id: 1186, de: "letzte", en: "last", level: "A2", type: "adjective", tags: ["numbers"],
        examples: [{ de: "Der letzte Zug fährt um Mitternacht.", en: "The last train leaves at midnight." }]
    },
    {
        id: 1187, de: "nächste", en: "next", level: "A2", type: "adjective", tags: ["numbers"],
        examples: [{ de: "Der nächste Bahnhof ist Stuttgart.", en: "The next station is Stuttgart." }]
    }
];
