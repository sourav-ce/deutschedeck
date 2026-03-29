const fs = require('fs');

const path = 'c:/Users/ssmso/OneDrive/Desktop/GERMAN/Claude/files-gem/tenses.js';
let content = fs.readFileSync(path, 'utf8');

global.window = {};

// Clean the file for parsing.
// The broken file has literal newlines inside strings.
// A common pattern is: `"note": "Line1\nLine2"` which became:
// `"note": "Line1 [LITERAL NEWLINE] Line2"`

// Let's replace those literal newlines inside quoted strings with \n
// This is tricky with regex if there are nested structures.
// A simpler way: Find the `window.VERB_DB = [` and everything until `];`
// And fix the quoting.

// Or better: Just use my previously generated objects if I still have them?
// Actually, I can just fix it by reading it as a string and escaping newlines that are NOT at the end of a line with a comma or brace.

// Actually, I can just use a better JSON.stringify approach.
// I'll try to recover the structure by reading the file and manually fixing the strings.

// But wait! If I just use my `generate_notes.js` logic but WITHOUT the broken `.replace(/\\n/g, '\n')`, it should fix it!

// Re-defining the data because it's easier than parsing broken JS.
// Wait, I have the data in my history.

// Let's try to parse the file carefully.
try {
  // Replace literal newlines inside double-quotes with \n
  // Regex to find content inside "..." and replace \n with \\n
  let fixedContent = content.replace(/"([^"]*)"/g, (match, p1) => {
    return '"' + p1.replace(/\n/g, '\\n').replace(/\r/g, '') + '"';
  });

  eval(fixedContent);
  console.log('Successfully recovered data. Count:', window.VERB_DB.length);

  // Now write it back CLEANLY.
  let out = '// tenses.js — German Verb Conjugation & Grammar Database\n\n';
  out += 'window.PRONOUNS = ' + JSON.stringify(window.PRONOUNS) + ';\n\n';
  out += 'window.TENSE_META = ' + JSON.stringify(window.TENSE_META) + ';\n\n';
  out += 'window.VERB_DB = ' + JSON.stringify(window.VERB_DB, null, 2) + ';\n';

  fs.writeFileSync(path, out);
  console.log('Fixed tenses.js syntax!');

} catch (e) {
  console.error('Failed to recover data from tenses.js', e);
  // FALLBACK: If recovery fails, I will have to re-run my generation scripts.
  // But let's try the recovery first.
}
