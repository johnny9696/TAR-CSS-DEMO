# TAR-CSS paper demo

[Live demo](https://johnny9696.github.io/TAR-CSS-DEMO/) · [Repository](https://github.com/johnny9696/TAR-CSS-DEMO)

Static English research demo built from the supplied `TAR_CSS_TASLP-3.pdf` (24 November 2026). Open `index.html` in a browser, or serve this directory with a static HTTP server. No build step is required.

## Content

- The manuscript title, authors and affiliation, followed immediately by an expanded Abstract and then the method overview.
- All eight manuscript figures, with extracted PNGs and individual PDF files.
- All six manuscript tables (I–VI), retaining the original numerical precision and confidence intervals.
- Five MOS listening examples covering Neutral, Anger, Happiness, Surprise and Disgust, with the seven baseline systems, TAR-CSS and the natural reference.
- Eight D-MOS examples: two for each history-length group, 1–3, 4–6, 7–11 and 12–19 preceding utterances. Neutral and Happiness appear three times each, with one Surprise and one Fear example. The source emotion labels and all 63 evaluated preceding utterances are retained.

Only the best numerical results in each table are green. Ranking uses the metric direction and point estimate, includes ties, and excludes the Original natural-reference row. Table VI reports target-versus-predicted threshold error differences and is not a model leaderboard. Manuscript boldface is not used to determine numerical best results.

The listening examples are curated qualitative demonstrations, selected using high TAR-CSS ratings and comparative score differences. Each selected TAR-CSS mean is at least 4, at least as high as every comparison model, and above the seven-baseline average. They are not an unbiased evaluation sample. Aggregate results in the manuscript tables are preserved separately. Four MOS and three D-MOS examples tie the strongest baseline; their advantage over the average baseline score remains positive. Allowing these ties increases emotion diversity while preserving the history-bin requirement.

## Files to edit

| File | Purpose |
| --- | --- |
| `index.html` | Page structure and navigation |
| `assets/site.js` | Tables, figure gallery, audio comparison and filters |
| `assets/style.css` | Responsive layout and presentation |
| `assets/data/paper.js` | Exact paper metadata, figures, tables and metric directions |
| `assets/data/samples.js` | Selected text, emotion, preceding dialogue and portable audio paths |
| `assets/figures/paper_20261124/` | Eight manuscript figures |
| `assets/audio/selected_20261124/` | Copies of the evaluated waveforms |
| `assets/vendor/mathjax/tex-svg.js` | Bundled MathJax 3.2.2 for offline mathematical notation |
| `site-content.js` | Local site settings; no result values |

The old October result definitions have been replaced by the supplied November manuscript. Tables from different experiments keep their respective reported values; in particular, TAR-CSS MOS in Table V is 3.70, while Tables I and IV report 3.71.

Figure descriptions describe the actual visible plots. Original source captions are retained in the data for traceability where a manuscript caption describes a different plot.

## Local preview and publication

This static page is published from the repository’s main branch through the existing GitHub Pages configuration. The source PDF remains a local manuscript and is ignored by Git. The page has no full-manuscript Paper link, as requested. The implementation-code repository URL was not supplied, so no fabricated Code link is used.

All page assets use relative paths. The selected audio files are copied into this repository; they do not require local storage mounts or the listening-test server at playback time. Only one audio element plays at a time. Audio is not downloaded until requested. Result values use 14 px text on desktop and 13 px on mobile, with larger text throughout the page.

The listening-test database, evaluator identifiers, credentials and private raw snapshots are not included. Selection provenance, source discrepancies and validation results are maintained outside this public demo directory in the project evaluation workspace.
