/* Sentence complements are authored per meaning, never guessed from a stem.
   Format: verb | German complement | English base | past | participle | English complement | optional subject */
window.GRAMMAR_CONTENT.coreVerbs=Object.keys(window.GRAMMAR_CONTENT.frames);
const additionalGrammarExamples=`
lassen|die Tür offen|leave|left|left|the door open
leben|in Deutschland|live|lived|lived|in Germany
lieben|diese Stadt|love|loved|loved|this city
glauben|dir|believe|believed|believed|you
hoffen|auf gutes Wetter|hope|hoped|hoped|for good weather
schmecken|die Zitrone|taste|tasted|tasted|the lemon
danken|meiner Lehrerin|thank|thanked|thanked|my teacher
feiern|meinen Geburtstag|celebrate|celebrated|celebrated|my birthday
putzen|die Küche|clean|cleaned|cleaned|the kitchen
kosten|zehn Euro|cost|cost|cost|ten euros|Es
passen|durch die Tür|fit|fitted|fitted|through the doorway
erklären|die Regel|explain|explained|explained|the rule
verkaufen|mein Fahrrad|sell|sold|sold|my bicycle
passieren|am Bahnhof|happen|happened|happened|at the station|Es
fehlen|im Unterricht|be absent|was absent|been absent|from class
gehören|zum Team|belong|belonged|belonged|to the team
gratulieren|dir zum Geburtstag|congratulate|congratulated|congratulated|you on your birthday
klingen|müde|sound|sounded|sounded|tired
malen|ein Bild|paint|painted|painted|a picture
rauchen|nicht|smoke|smoked|smoked|NEG
schenken|Anna ein Buch|give|gave|given|Anna a book as a gift
schicken|dir eine Nachricht|send|sent|sent|you a message
setzen|das Kind auf den Stuhl|put|put|put|the child on the chair
stellen|die Tasse auf den Tisch|put|put|put|the cup on the table
legen|das Buch auf den Tisch|put|put|put|the book on the table
hängen|das Bild an die Wand|hang|hung|hung|the picture on the wall
holen|ein Glas Wasser|fetch|fetched|fetched|a glass of water
füllen|die Flasche mit Wasser|fill|filled|filled|the bottle with water
schauen|aus dem Fenster|look|looked|looked|out of the window
übersetzen|den Text|translate|translated|translated|the text
ändern|den Termin|change|changed|changed|the appointment
dauern|eine Stunde|last|lasted|lasted|an hour|Es
mieten|eine Wohnung|rent|rented|rented|a flat
diskutieren|mit Anna|discuss things|discussed things|discussed things|with Anna
organisieren|ein Treffen|organize|organized|organized|a meeting
parken|vor dem Haus|park|parked|parked|in front of the house
planen|eine Reise|plan|planned|planned|a trip
reparieren|das Fahrrad|repair|repaired|repaired|the bicycle
reservieren|einen Tisch|reserve|reserved|reserved|a table
sammeln|Briefmarken|collect|collected|collected|stamps
schminken|meine Schwester|apply makeup|applied makeup|applied makeup|to my sister
segeln|zur Insel|sail|sailed|sailed|to the island
surfen|im Internet|surf|surfed|surfed|the internet
telefonieren|mit meiner Mutter|talk on the phone|talked on the phone|talked on the phone|with my mother
träumen|von einem Urlaub|dream|dreamed|dreamed|of a holiday
turnen|in der Halle|do gymnastics|did gymnastics|done gymnastics|in the gym
üben|die Aussprache|practise|practised|practised|pronunciation
wandern|zum See|hike|hiked|hiked|to the lake
weinen|vor Freude|cry|cried|cried|with joy
wiederholen|den Satz|repeat|repeated|repeated|the sentence
zeichnen|ein Haus|draw|drew|drawn|a house
zelten|am See|camp|camped|camped|by the lake
zuhören|meiner Lehrerin|listen|listened|listened|to my teacher
zusammenfassen|den Text|summarize|summarized|summarized|the text
fragen|nach dem Weg|ask|asked|asked|for directions
antworten|auf die Frage|respond|responded|responded|to the question
buchstabieren|meinen Namen|spell|spelled|spelled|my name
duschen|am Morgen|shower|showered|showered|in the morning
frühstücken|um acht Uhr|have breakfast|had breakfast|had breakfast|at eight
grillen|im Garten|have a barbecue|had a barbecue|had a barbecue|in the garden
joggen|zum Park|jog|jogged|jogged|to the park
kennenlernen|neue Leute|get to know|got to know|got to know|new people
korrigieren|den Fehler|correct|corrected|corrected|the mistake
markieren|das Wort|highlight|highlighted|highlighted|the word
meinen|das ernst|mean it|meant it|meant it|seriously
notieren|die Adresse|write down|wrote down|written down|the address
rechnen|mit hohen Kosten|expect|expected|expected|high costs
reiten|zum Bauernhof|ride|rode|ridden|to the farm
rekonstruieren|den Ablauf|reconstruct|reconstructed|reconstructed|the sequence of events
rollen|den Ball|roll|rolled|rolled|the ball
schütteln|die Flasche|shake|shook|shaken|the bottle
sparen|für ein Fahrrad|save|saved|saved|for a bicycle
spülen|das Geschirr|wash|washed|washed|the dishes
stecken|den Schlüssel in die Tasche|put|put|put|the key in my pocket
stoppen|das Auto|stop|stopped|stopped|the car
stören|den Unterricht|disrupt|disrupted|disrupted|the class
streichen|die Wand|paint|painted|painted|the wall
stricken|einen Schal|knit|knitted|knitted|a scarf
teilen|das Brot|share|shared|shared|the bread
testen|das Gerät|test|tested|tested|the device
töten|eine Mücke|kill|killed|killed|a mosquito
trauen|meinem Freund|trust|trusted|trusted|my friend
trennen|den Müll|sort|sorted|sorted|the rubbish
trocknen|die Wäsche|dry|dried|dried|the laundry
übernachten|im Hotel|stay overnight|stayed overnight|stayed overnight|at the hotel
überprüfen|die Adresse|check|checked|checked|the address
unterrichten|Deutsch|teach|taught|taught|German
untersuchen|das Problem|investigate|investigated|investigated|the problem
verabreden|ein Treffen|arrange|arranged|arranged|a meeting
verbessern|meine Aussprache|improve|improved|improved|my pronunciation
verdienen|Geld|earn|earned|earned|money
vereinbaren|einen Termin|arrange|arranged|arranged|an appointment
verfolgen|die Nachrichten|follow|followed|followed|the news
vergleichen|die Preise|compare|compared|compared|the prices
vergrößern|das Foto|enlarge|enlarged|enlarged|the photo
verhungern|ohne Nahrung|starve|starved|starved|without food
sich verirren|in der Stadt|get lost|got lost|got lost|in the city
verkleinern|das Bild|reduce|reduced|reduced|the size of the picture
verleihen|mein Fahrrad|lend|lent|lent|my bicycle
vermieten|meine Wohnung|rent out|rented out|rented out|my flat
vermissen|meine Familie|miss|missed|missed|my family
verpassen|den Bus|miss|missed|missed|the bus
verreisen|nach Spanien|go away|went away|gone away|to Spain
verrutschen|beim Tragen|slip|slipped|slipped|while being carried|Es
verstärken|das Signal|boost|boosted|boosted|the signal
verstecken|den Schlüssel|hide|hid|hidden|the key
verteilen|die Aufgaben|distribute|distributed|distributed|the tasks
vertrauen|meiner Freundin|trust|trusted|trusted|my friend
verursachen|ein Problem|cause|caused|caused|a problem
vervollständigen|den Satz|complete|completed|completed|the sentence
verwechseln|die Namen|mix up|mixed up|mixed up|the names
verwenden|ein Wörterbuch|use|used|used|a dictionary
verzichten|auf Zucker|do without|did without|done without|sugar
vorbereiten|das Essen|prepare|prepared|prepared|the food
vorstellen|meine Freundin|introduce|introduced|introduced|my friend
wählen|eine Nummer|dial|dialled|dialled|a number
warnen|dich vor dem Hund|warn|warned|warned|you about the dog
wechseln|den Zug|change|changed|changed|trains
wecken|meinen Bruder|wake up|woke up|woken up|my brother
wenden|das Auto|turn|turned|turned|the car around
werben|für den Kurs|advertise|advertised|advertised|the course
werfen|den Ball|throw|threw|thrown|the ball
widersprechen|dir|disagree|disagreed|disagreed|with you
widmen|dem Projekt viel Zeit|devote|devoted|devoted|a lot of time to the project
wiegen|den Koffer|weigh|weighed|weighed|the suitcase
winken|meiner Nachbarin|wave|waved|waved|to my neighbour
wirken|müde|seem|seemed|seemed|tired
wünschen|dir viel Glück|wish|wished|wished|you good luck
würzen|die Suppe|season|seasoned|seasoned|the soup
zahlen|die Miete|pay|paid|paid|the rent
zählen|die Münzen|count|counted|counted|the coins
zerstören|die alte Datei|destroy|destroyed|destroyed|the old file
zittern|vor Kälte|shiver|shivered|shivered|with cold
zögern|mit der Antwort|hesitate|hesitated|hesitated|before answering
zubereiten|das Frühstück|prepare|prepared|prepared|breakfast
zulassen|eine Ausnahme|allow|allowed|allowed|an exception
zunehmen|an Gewicht|gain|gained|gained|weight
zurückgeben|das Buch|return|returned|returned|the book
zurückkommen|nach Hause|come back|came back|come back|home
zusammenarbeiten|mit Anna|work together|worked together|worked together|with Anna
zuschauen|beim Spiel|watch|watched|watched|the game
zuwerfen|dir den Ball|throw|threw|thrown|the ball to you
zweifeln|an der Antwort|doubt|doubted|doubted|the answer
zwingen|niemanden|force|forced|forced|nobody
begrüßen|meine Gäste|greet|greeted|greeted|my guests
verabschieden|meine Gäste|say goodbye|said goodbye|said goodbye|to my guests
sehen|einen Film|watch|watched|watched|a film
anmachen|das Licht|turn on|turned on|turned on|the light
anziehen|eine Jacke|put on|put on|put on|a jacket
ausfüllen|das Formular|fill in|filled in|filled in|the form
aussehen|müde|look|looked|looked|tired
ausziehen|die Jacke|take off|took off|taken off|the jacket
baden|im See|bathe|bathed|bathed|in the lake
berichten|über die Reise|report|reported|reported|on the trip
bestätigen|den Termin|confirm|confirmed|confirmed|the appointment
betreten|den Raum|enter|entered|entered|the room
bewegen|den Tisch|move|moved|moved|the table
bewundern|die Aussicht|admire|admired|admired|the view
bilden|einen Satz|form|formed|formed|a sentence
buchen|ein Zimmer|book|booked|booked|a room
drucken|das Dokument|print|printed|printed|the document
drücken|den Knopf|press|pressed|pressed|the button
entschuldigen|den Fehler|excuse|excused|excused|the mistake
erinnern|dich an den Termin|remind|reminded|reminded|you about the appointment
erlauben|dir eine Pause|allow|allowed|allowed|you a break
erreichen|den Bahnhof|reach|reached|reached|the station
erzählen|eine Geschichte|tell|told|told|a story
fegen|den Boden|sweep|swept|swept|the floor
flüstern|eine Antwort|whisper|whispered|whispered|an answer
folgen|dem Weg|follow|followed|followed|the path
fotografieren|die Stadt|photograph|photographed|photographed|the city
freuen|meine Familie mit einem Besuch|delight|delighted|delighted|my family with a visit
füttern|die Katze|feed|fed|fed|the cat
gähnen|vor Müdigkeit|yawn|yawned|yawned|with tiredness
grüßen|meine Nachbarin|greet|greeted|greeted|my neighbour
handeln|sofort|act|acted|acted|immediately
heilen|die Wunde|heal|healed|healed|the wound
heiraten|meinen Partner|marry|married|married|my partner
kämmen|meine Haare|comb|combed|combed|my hair
klopfen|an die Tür|knock|knocked|knocked|on the door
lächeln|auf dem Foto|smile|smiled|smiled|in the photo
landen|in Berlin|land|landed|landed|in Berlin
lügen|über mein Alter|lie|lied|lied|about my age
mischen|die Farben|mix|mixed|mixed|the colours
naschen|nach dem Essen|snack|snacked|snacked|after the meal
nicken|zur Begrüßung|nod|nodded|nodded|in greeting
pflanzen|einen Baum|plant|planted|planted|a tree
plaudern|mit Anna|chat|chatted|chatted|with Anna
pusten|auf die heiße Suppe|blow|blew|blown|on the hot soup
reagieren|auf die Nachricht|react|reacted|reacted|to the news
retten|die Katze|rescue|rescued|rescued|the cat
riechen|den Kaffee|smell|smelled|smelled|the coffee
rühren|die Suppe|stir|stirred|stirred|the soup
schreien|um Hilfe|shout|shouted|shouted|for help
schützen|meine Haut|protect|protected|protected|my skin
servieren|das Essen|serve|served|served|the food
nippen|am Tee|sip|sipped|sipped|the tea
stärken|meine Muskeln|strengthen|strengthened|strengthened|my muscles
staunen|über die Aussicht|marvel|marvelled|marvelled|at the view
heißen|damals Anna|be called|was called|been called|Anna at that time
ziehen|den Wagen|pull|pulled|pulled|the cart
tun|mein Bestes|do|did|done|my best
mitkommen|zum Markt|come along|came along|come along|to the market
`;
additionalGrammarExamples.trim().split('\n').forEach(line=>{
  const [name,...frame]=line.split('|'); window.GRAMMAR_CONTENT.frames[name]=frame;
});
