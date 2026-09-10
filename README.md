# scripts/ — Developer Tooling (NOT part of the runtime app)

These are **one-off developer/generator scripts and build inputs** used to
produce the data files the app ships with (`vocab_extra.js`, `tenses.js`,
`quiz-data.js`). They are **not loaded by `index.html`** and are excluded from
the deployed site.

> ⚠️ Many of these scripts contain **hardcoded absolute paths** from the original
> author's machine (e.g. `C:/Users/ssmso/OneDrive/Desktop/GERMAN/...`). In current
> versions, paths resolve relative to this `scripts/` folder. If you run them,
> adjust the input/output paths first. They are reference implementations, not a
> maintained build pipeline.

## Build inputs

| File | Purpose |
|---|---|
| `german.json` | Large German word/example dataset (≈10 MB) used to generate the extended vocabulary in `vocab_extra.js`. Not shipped to the client; only consumed by `integrate_40k.js`. |

## Generator scripts

| Script | What it does |
|---|---|
| `generate_verbs.js` | Generates regular-verb conjugation entries for `tenses.js`. |
| `generate_verbs_2.js` | Secondary verb generator (more verbs). |
| `generate_notes.js` | Generates grammar/note strings for verb entries. |
| `expand.js` | Appends regular verbs to the `VERB_DB` array in `tenses.js`. |
| `integrate_40k.js` | Reads `german.json` + `vocab.js` and emits `vocab_extra.js` (`window.VOCAB_EXTRA_DB`). |
| `build_database_from_codingfriends.js` | Merges embedded datasets with CodingFriends de-en CSVs into an importable `{ vocab, tenses, quiz }` database JSON. Note: it uses a browser-like sandbox and expects CSVs under `imports/codingfriends/`. |
| `fix.js` | One-off repair of a previously broken `tenses.js` (hardcoded path). |
| `fix_tenses_syntax.js` | One-off syntax repair of `tenses.js` (hardcoded path). |
| `fix_syntax.py` | Python one-off syntax fixer for generated data files. |

## Running

Scripts use Node.js (`node script.js`) or Python (`python script.py`). They read
files relative to their own hardcoded paths — review the top of each file and
update paths as needed. Most are idempotent helper steps, not a build pipeline:
**you generally do not need to run them** to develop the app.