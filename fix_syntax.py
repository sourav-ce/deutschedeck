import re

with open('vocab.js', 'r', encoding='utf-8') as f:
    content = f.read()

# I will find id: 566 and its surrounding block which was truncated.
# The truncated block looks like:
# id: 566, de: "von", en: "from / of", level: "A1", type: "preposition", tags: ["grammar"],
# examples: [{ de: "Ich komme von der Arbeit.", en: "I am coming from work." }

# Let's replace the broken example array completely.
bad_str = 'id: 566, de: "von", en: "from / of", level: "A1", type: "preposition", tags: ["grammar"],\n        examples: [{ de: "Ich komme von der Arbeit.", en: "I am coming from work." }'
good_str = bad_str + ', { de: "Das ist ein Freund von mir.", en: "That is a friend of mine." }]\n    }'

# If bad_str is in content but not good_str, we fix it
if bad_str in content and good_str not in content:
    content = content.replace(bad_str, good_str)
    with open('vocab.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Fixed syntax in vocab.js for id: 566!")
else:
    print("Could not find the exact broken string in vocab.js.")
