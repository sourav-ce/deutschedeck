# DeutscheDeck

**DeutscheDeck — Interactive German vocabulary and grammar learning app for
Netzwerk A1/A2** with flashcards, typing quizzes, listening practice, spaced
repetition, verb conjugation tables and Goethe-Institut style exam quizzes
(Lesen, Hören, Schreiben, Wortschatz, Strukturen).

A fully **client-side / static** web app — no server and no build step required.
It is deployed to **GitHub Pages** via the Jekyll GitHub Pages workflow in
`.github/workflows/jekyll-gh-pages.yml` and can also be opened directly from disk
(`file://`), though some features (database import, visitor counter) are
optimised for `http(s)://`.

---

## Quick start

1. Clone the repository.
2. Open `index.html` in a browser, **or** serve the folder locally, e.g.:
   ```sh
   python -m http.server 8000
   # then visit http://localhost:8000
   ```
   Serving over HTTP is **recommended** — it enables the database-import feature
   (IndexedDB) and the optional visitor counter.

No installation or package managers are required for day-to-day use.

---

## Project layout

```
index.html            App root & shell layout
favicon.png           Site favicon
package.json          NPM metadata & test scripts
README.md             Project documentation
.gitignore            Git configuration
.github/workflows/    GitHub Pages automated deployment
Photos/               High-resolution cultural photography
css/                  Modular stylesheet architecture
  ├── glass-theme.css     Liquid Glass theme & radius design system
  ├── town-theme.css      Typography & layout foundations
  ├── grammar.css         Grammar lessons & dialogue bubbles
  ├── sentence-board.css  Interactive sentence builder styling
  ├── germany-photos.css  Multi-image playful polaroid collages
  ├── wide-photos.css     Panoramic background photo engine
  └── sidebar-glass.css   Modern glass sidebar styles
js/                   Application logic & UI modules
  ├── app.js              Core application controller, state & SRS
  ├── sentence-board.js   Sentence board logic
  ├── germany-photos.js   Playful collage DOM generator
  ├── wide-photos.js      Background photo rotator
  ├── sidebar-glass.js    Responsive sidebar drawer
  ├── grammar-core.js     Verb conjugation data preparation
  ├── grammar-content.js  Lessons, dialogues & grammar rules
  ├── grammar-examples.js Conjugation example sentences
  ├── grammar-ui.js       Grammar tabs & dialogue drills UI
  └── quiz-engine.js      Goethe/Telc exam practice engine
data/                 Core vocabulary & exam data banks
  ├── vocab.js            Tier 1 Core A1/A2 vocabulary database
  ├── vocab_extra.js      Tier 2 Extended 40,000 background vocabulary
  ├── tenses.js           German verb conjugation & grammar database
  ├── quiz-data.js        Goethe exam question bank
  └── quiz-expansion.js   Expanded exam practice drills
scripts/              Development, generator & test tooling
```

---

## Feature overview

- **Flashcards** — review vocabulary with spaced repetition (SM-2 style).
- **Typing / Listening / Articles modes** — practice German ↔ English both ways.
- **Conjugation** — full verb tables for present, simple past, perfect, future
  and subjunctive II, plus an on-screen keyboard for German characters.
- **Quiz engine** — Goethe/Netzwerk-style timed quizzes across Lesen, Hören,
  Schreiben, Wortschatz and Strukturen, with results + mistake review quizzes.
- **Browse & Search** — quick search overlay across the vocabulary databases.
- **Progress** — sessions, streaks, daily goal, mastered-word tracking; data is
  stored in `localStorage` and can be exported/imported as JSON (or as a full
  database backup that is loaded into IndexedDB).

### Data sources

- Core vocab: **Netzwerk A1/A2** word lists.
- Extended vocab: auto-generated from `scripts/german.json` (see `scripts/README.md`).
- Verbs: curated German conjugation tables in `tenses.js`.
- Quizzes: hand-written bank in `quiz-data.js`, expanded at load time by
  `quiz-expansion.js`.

---

## Development / tools

Developer-only generator scripts live in [`scripts/`](scripts/README.md). They are
**not** required to run the app and are kept out of the deployed site bundle.

Recommended local serving:
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (VS Code)
- `python -m http.server`

---

## Deployment

The included GitHub Action
(`.github/workflows/jekyll-gh-pages.yml`) builds the static site and publishes
it to GitHub Pages on every push to `main`.

---

## License

See [`LICENSE`](LICENSE). If you add third-party word lists, keep the source and
licence visible (e.g. the CodingFriends lists are CC BY-NC 4.0 — see
`scripts/build_database_from_codingfriends.js`).
## Speaking and grammar

Tenses & Grammar contains 18 guided lessons, a searchable explorer for 280 verbs, and eight everyday dialogues. All six indicative tenses have person tables and translated examples, alongside Konjunktiv II and imperative reference. Start with Präsens and Perfekt, then practice common Präteritum forms. Listen buttons use browser speech synthesis; lesson completion is stored locally. Speaking prompts are self-practice.

Run `npm test` for conjugation regression checks and sentence coverage.
