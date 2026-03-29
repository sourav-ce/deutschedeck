const fs = require('fs');
let f = fs.readFileSync('c:/Users/ssmso/OneDrive/Desktop/GERMAN/Claude/files-gem/tenses.js', 'utf8');

// The file got broken because I appended right after `sie/Sie"` Instead of at the end of VERB_DB.
// Wait, the string "sie/Sie" might be followed by `];` originally. I replaced `];` with `{id: ... };];`.

const pronounsEnd = f.indexOf('sie/Sie"]');
let injectedDataStart = f.indexOf('{id:"arbeiten",de:"arbeiten"', pronounsEnd);
if(injectedDataStart === -1) {
    injectedDataStart = f.indexOf('{id:"arbeiten"', 0);
}

if(injectedDataStart !== -1) {
    // Determine the end of injected data
    // The injected data ended with };\n];  (Wait, I replaced `];` with `added + '];'`)
    // The original next line is `// ── TENSE LABELS`
    const tenseLabelsIdx = f.indexOf('// ── TENSE LABELS');
    
    if (tenseLabelsIdx !== -1) {
        // The injected data is everything between injectedDataStart and the '];' right before TENSE LABELS.
        const firstBracketBeforeLabels = f.lastIndexOf('];', tenseLabelsIdx);
        
        if(firstBracketBeforeLabels > injectedDataStart) {
            const addedChunk = f.substring(injectedDataStart, firstBracketBeforeLabels);
            
            // Clean the top part: window.PRONOUNS is everything up to injectedDataStart + '];'
            const cleanedTop = f.substring(0, injectedDataStart) + '];\n\n' + f.substring(tenseLabelsIdx);
            
            // Now append the extracted addedChunk to the end of VERB_DB array
            // Find the last `];` in the cleanedTop
            const lastBracket = cleanedTop.lastIndexOf('];');
            if (lastBracket !== -1) {
                const finalFile = cleanedTop.substring(0, lastBracket) + addedChunk + '\n];\n';
                fs.writeFileSync('c:/Users/ssmso/OneDrive/Desktop/GERMAN/Claude/files-gem/tenses.js', finalFile);
                console.log('Fixed tenses.js successfully!');
            }
        }
    }
}
