"use strict";
(() => {
  const paper = window.DEMO_PAPER || {}, samples = window.DEMO_SAMPLES || {}, config = window.SITE_CONTENT || {};
  const $ = id => document.getElementById(id);
  const array = value => Array.isArray(value) ? value : [];
  const text = value => value == null ? "" : String(value).trim();
  const create = (tag, className, content) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content !== undefined) element.textContent = text(content);
    return element;
  };
  const localAsset = value => {
    const path = text(value);
    return path && !path.startsWith("/") && !path.includes("..") && !path.includes("\\") && !/^[a-z][a-z\d+.-]*:/i.test(path) ? path : null;
  };
  const pauseAudio = except => document.querySelectorAll("audio").forEach(audio => { if (audio !== except) audio.pause(); });
  document.addEventListener("play", event => { if (event.target instanceof HTMLAudioElement) pauseAudio(event.target); }, true);
  let mathReady, mathQueue = Promise.resolve();
  function typesetMath(elements) {
    if (!elements.some(element => /\\[([]/.test(element.textContent))) return;
    if (!mathReady) {
      mathReady = new Promise((resolve, reject) => {
        window.MathJax = { tex: { inlineMath: [["\\(", "\\)"]], displayMath: [["\\[", "\\]"]], processEscapes: true }, svg: { fontCache: "local" }, startup: { typeset: false } };
        const script = document.createElement("script");
        script.src = localAsset(config.mathJaxUrl) || "assets/vendor/mathjax/tex-svg.js";
        script.async = true;
        script.onload = () => window.MathJax.startup.promise.then(resolve, reject);
        script.onerror = () => reject(new Error("The local mathematical notation renderer could not be loaded."));
        document.head.append(script);
      });
    }
    mathQueue = mathQueue.then(() => mathReady).then(() => window.MathJax.typesetPromise(elements)).catch(error => console.error(error));
  }
  function paragraphs(parent, value) {
    const blocks = Array.isArray(value) ? value : text(value).split(/\n\s*\n/);
    blocks.map(text).filter(Boolean).forEach(block => parent.append(create("p", "", block)));
  }
  function fill(id, value) { if (text(value)) { $(id).textContent = text(value); $(id).hidden = false; } }
  if (text(paper.title)) {
    const title = text(paper.title);
    $("paper-title").replaceChildren();
    if (/^TAR-CSS:/i.test(title)) $("paper-title").append(create("span", "title-name", "TAR-CSS:"), document.createTextNode(title.slice(8)));
    else $("paper-title").textContent = title;
    document.title = `${title} · Audio Demo`;
  }
  fill("paper-authors", array(paper.authors).map(text).filter(Boolean).join(" · "));
  fill("paper-affiliations", array(paper.affiliations).map(text).filter(Boolean).join(" · "));
  fill("overview-copy", typeof paper.overview === "string" ? paper.overview : "");
  if (text(paper.abstract)) { paragraphs($("abstract-copy"), paper.abstract); $("abstract").hidden = false; }
  fill("selection-note", samples.selectionNote);
  const allSampleGroups = [...array(samples.naturalness), ...array(samples.dialogue)];
  const datasets = [...new Set(allSampleGroups.map(group => text(group.dataset)).filter(Boolean))];
  const models = new Set(allSampleGroups.flatMap(group => array(group.items)).flatMap(item => array(item.audio)).map(clip => text(clip.model)).filter(model => model && !/^(original|natural|ground[ -]?truth)(\b|$)/i.test(model)));
  if (datasets.length || models.size) {
    const facts = [];
    if (datasets.length) facts.push(datasets.join(" & "));
    if (models.size) facts.push(`${models.size} synthesis systems`);
    facts.push("Naturalness & dialogue appropriateness");
    $("hero-meta").replaceChildren(...facts.map(fact => create("span", "", fact))); $("hero-meta").hidden = false;
  }
  const dialog = $("figure-dialog");
  const closeFigure = () => dialog.close();
  $("figure-dialog-close").addEventListener("click", closeFigure);
  dialog.addEventListener("click", event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeFigure();
  });
  dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
  function openFigure(figure) {
    const source = localAsset(figure.src); if (!source) return;
    $("figure-dialog-title").textContent = [text(figure.label), text(figure.title)].filter(Boolean).join(" · ");
    $("figure-dialog-image").src = source;
    $("figure-dialog-image").alt = text(figure.contentDescription || figure.caption || figure.title);
    $("figure-dialog-caption").textContent = text(figure.contentDescription || figure.caption);
    $("figure-dialog-source").href = source;
    dialog.showModal(); document.body.classList.add("dialog-open"); typesetMath([$("figure-dialog-caption")]);
  }
  function renderFigure(figure, featured) {
    const source = localAsset(figure.src); if (!source) return null;
    const label = text(figure.label) || `Figure ${text(figure.id)}`, title = text(figure.title), captionText = text(figure.contentDescription || figure.caption);
    const node = create("figure", `paper-figure ${featured ? "overview-figure" : "gallery-figure"}`);
    if (text(figure.id)) node.id = `figure-${text(figure.id).replace(/[^a-z0-9_-]/gi, "-")}`;
    const button = create("button", "figure-image-button"); button.type = "button";
    button.setAttribute("aria-label", `Enlarge ${label}${title ? `: ${title}` : ""}`);
    const img = create("img"); img.src = source; img.alt = captionText || title || label; img.loading = featured ? "eager" : "lazy"; img.decoding = "async";
    if (featured) img.fetchPriority = "high";
    if (figure.width && figure.height) { img.width = figure.width; img.height = figure.height; }
    if (!featured && figure.width / figure.height > 2.6) node.classList.add("figure-wide");
    img.addEventListener("load", () => { if (!featured && img.naturalWidth / img.naturalHeight > 2.6) node.classList.add("figure-wide"); });
    button.append(img, create("span", "zoom-hint", "↗")); button.lastElementChild.setAttribute("aria-hidden", "true");
    button.addEventListener("click", () => openFigure(figure));
    const caption = create("figcaption", "figure-caption");
    if (featured) caption.append(create("strong", "", `${label}.`), document.createTextNode(captionText));
    else { const heading = create("p", "figure-caption-title"); heading.append(create("strong", "", `${label} /`), document.createTextNode(title)); caption.append(heading, create("p", "", captionText)); }
    node.append(button, caption); return node;
  }
  array(paper.figures).forEach((figure, index) => { const element = renderFigure(figure, index === 0); if (element) $(index === 0 ? "overview-figure" : "figure-gallery").append(element); });
  function metricNumber(value) {
    if (typeof value === "number") return Number.isFinite(value) ? value : null;
    const cleaned = text(value).replace(/\\[()]/g, "").replace(/\$/g, "").replace(/\\text\{([^}]+)\}/g, "$1").replace(/[−–]/g, "-").replace(/,/g, "");
    const match = cleaned.match(/^\s*([+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?)(?=\s|$|%|±|\\pm)/i);
    return match && Number.isFinite(Number(match[1])) ? Number(match[1]) : null;
  }
  function metricDirection(table, columnIndex) {
    if (table.rankingMode === "none") return null;
    if (Array.isArray(table.directions)) { const direction = table.directions[columnIndex]; return direction === "max" || direction === "min" ? direction : null; }
    const header = text(array(table.headers)[columnIndex]); return header.includes("↑") ? "max" : header.includes("↓") ? "min" : null;
  }
  function resultGroup(table, row, rowIndex) {
    if (Array.isArray(table.rowGroups)) return text(table.rowGroups[rowIndex]);
    const columns = array(table.groupColumns); return columns.length ? columns.map(index => text(row[index])).join("|") : "all";
  }
  function isReference(table, row, index) { return array(table.referenceRows).includes(index) || array(table.excludedRows).includes(index) || /^(original|natural(?: speech)?|ground[ -]?truth)(\b|$)/i.test(text(row[0])); }
  function bestCells(table) {
    const rows = array(table.rows), numeric = array(table.numericRows), winners = new Set();
    array(table.headers).forEach((_, column) => {
      const direction = metricDirection(table, column); if (!direction) return;
      const groups = new Map();
      rows.forEach((row, rowIndex) => {
        if (isReference(table, row, rowIndex)) return;
        const value = Array.isArray(numeric[rowIndex]) ? metricNumber(numeric[rowIndex][column]) : metricNumber(row[column]);
        if (value === null) return;
        const key = resultGroup(table, row, rowIndex), group = groups.get(key) || [];
        group.push({ rowIndex, value }); groups.set(key, group);
      });
      groups.forEach(group => {
        const best = (direction === "min" ? Math.min : Math.max)(...group.map(entry => entry.value));
        group.filter(entry => Math.abs(entry.value - best) <= 1e-12).forEach(entry => winners.add(`${entry.rowIndex}:${column}`));
      });
    }); return winners;
  }
  const tableButtons = [], tablePanels = [];
  function selectTable(index, focus) {
    tableButtons.forEach((button, i) => { button.setAttribute("aria-selected", String(i === index)); button.tabIndex = i === index ? 0 : -1; tablePanels[i].hidden = i !== index; });
    if (focus) tableButtons[index].focus();
  }
  array(paper.tables).forEach((table, tableIndex) => {
    const id = `paper-table-${tableIndex + 1}`, label = text(table.label) || `Table ${tableIndex + 1}`, title = text(table.title) || label;
    const tab = create("button", "table-tab", label); tab.type = "button"; tab.id = `${id}-tab`; tab.setAttribute("role", "tab"); tab.setAttribute("aria-controls", id); tab.setAttribute("aria-label", `${label}: ${title}`);
    tab.addEventListener("click", () => selectTable(tableIndex, false)); tableButtons.push(tab); $("table-tabs").append(tab);
    const panel = create("section", "result-block"); panel.id = id; panel.setAttribute("role", "tabpanel"); panel.setAttribute("aria-labelledby", tab.id); panel.tabIndex = 0;
    const heading = create("div", "result-block-heading"); heading.append(create("h3", "", title));
    if (table.sourcePage) heading.append(create("span", "table-source", `Paper · p. ${table.sourcePage}`));
    const wrap = create("div", "results-scroll"); wrap.tabIndex = 0; wrap.setAttribute("role", "region"); wrap.setAttribute("aria-label", `${label}: ${title}. Scroll horizontally to see all columns.`);
    const node = create("table"); node.append(create("caption", "sr-only", `${label}. ${title}`));
    const thead = create("thead"), tr = create("tr"), tbody = create("tbody"), headers = array(table.headers), winners = bestCells(table);
    headers.forEach((header, index) => { const cell = create("th", index === 0 ? "sticky-column" : "", header); cell.scope = "col"; tr.append(cell); }); thead.append(tr);
    array(table.rows).forEach((row, rowIndex) => {
      const line = create("tr");
      if (rowIndex && resultGroup(table, row, rowIndex) !== resultGroup(table, table.rows[rowIndex - 1], rowIndex - 1)) line.classList.add("group-start");
      headers.forEach((_, columnIndex) => {
        const cell = create(columnIndex === 0 ? "th" : "td", columnIndex === 0 ? "sticky-column" : "", row[columnIndex]); if (columnIndex === 0) cell.scope = "row";
        if (winners.has(`${rowIndex}:${columnIndex}`)) { cell.classList.add("metric-best"); cell.dataset.best = "true"; cell.title = "Best system value for this metric (ties included)"; }
        line.append(cell);
      }); tbody.append(line);
    });
    node.append(thead, tbody); wrap.append(node); panel.append(heading, wrap, create("p", "table-scroll-hint", "Scroll horizontally to view all metrics ↔"));
    if (text(table.note)) { const note = create("div", "table-note"); paragraphs(note, table.note); panel.append(note); }
    tablePanels.push(panel); $("result-tables").append(panel);
  });
  if (tableButtons.length) selectTable(0, false);
  function keyboardTabs(event, buttons, onSelect) {
    const index = buttons.indexOf(event.target); if (index < 0) return; let next;
    if (event.key === "ArrowRight") next = (index + 1) % buttons.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + buttons.length) % buttons.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = buttons.length - 1;
    else return;
    event.preventDefault(); onSelect(next, true);
  }
  $("table-tabs").addEventListener("keydown", event => keyboardTabs(event, tableButtons, selectTable));
  function appendPlayer(parent, source, id, label) {
    const src = localAsset(source); if (!src) return;
    const audio = create("audio"); audio.id = id; audio.controls = true; audio.preload = "none"; audio.src = src; audio.setAttribute("aria-label", label);
    audio.append(document.createTextNode("Your browser does not support audio playback."));
    audio.addEventListener("error", () => { audio.hidden = true; parent.append(create("p", "sample-unavailable", "This audio could not be loaded.")); }, { once: true }); parent.append(audio);
  }
  function appendHistory(parent, sample, scope) {
    const history = array(sample.history); if (!history.length && !localAsset(sample.historyAudio)) return;
    const details = create("details", "history-disclosure"), summary = create("summary"); summary.append(create("span", "", "Dialogue history"));
    const count = sample.historyLength == null ? history.length : sample.historyLength;
    if (count) summary.append(create("span", "history-summary-number", `${count} preceding utterances`));
    summary.append(create("span", "disclosure-icon", "+")); summary.lastElementChild.setAttribute("aria-hidden", "true");
    const content = create("div", "history-content");
    if (localAsset(sample.historyAudio)) { const full = create("div", "history-complete"); full.append(create("p", "", "Listen to the conversation")); appendPlayer(full, sample.historyAudio, `${scope}-history-complete`, "Complete dialogue history"); content.append(full); }
    const list = create("ol", "dialogue-history");
    history.forEach((turn, index) => {
      const line = create("li", "history-turn"), number = create("span", "history-turn-number", String(index + 1).padStart(2, "0")); number.setAttribute("aria-hidden", "true");
      const copy = create("div", "history-turn-copy"), meta = create("div", "history-turn-meta"); meta.append(create("strong", "", text(turn.speaker) || `Speaker ${index + 1}`));
      if (text(turn.emotion)) meta.append(create("span", "", turn.emotion)); copy.append(meta, create("p", "", turn.text));
      if (localAsset(turn.src)) { const player = create("div", "history-audio"); appendPlayer(player, turn.src, `${scope}-history-${index}`, `Dialogue history, utterance ${index + 1}, ${text(turn.speaker)}`); copy.append(player); }
      line.append(number, copy); list.append(line);
    });
    if (history.length) content.append(list); details.append(summary, content); parent.append(details);
  }
  const modelOrder = ["original", "dailytalk", "fc-talker", "dialoguegcn", "msrgcn", "ecss", "i3-css", "radka-css", "tar-css"];
  const modelRank = value => { const key = text(value).toLowerCase().replace(/\s+/g, "").replace(/³/g, "3"); const index = modelOrder.indexOf(key); return index < 0 ? modelOrder.length : index; };
  function sampleBrowser(mode, contextual) {
    const entries = array(samples[mode]).flatMap(group => array(group.items).map(sample => ({ ...sample, dataset: text(group.dataset || sample.dataset) }))); if (!entries.length) return;
    const root = $(`${mode}-browser`); let selected = 0, visible = entries.map((_, index) => index); const controls = {};
    const toolbar = create("div", "sample-toolbar"), count = create("p", "sample-count"), filters = create("div", "sample-filters"); toolbar.append(count, filters);
    const rail = create("div", "sample-rail"); rail.setAttribute("aria-label", "Choose an audio example");
    const cardContainer = create("div"); root.append(toolbar, rail, cardContainer);
    const fields = [{ key: "dataset", label: "Dataset", all: "All datasets" }, { key: "emotion", label: "Emotion", all: "All emotions" }];
    if (contextual) fields.push({ key: "historyBin", label: "History", all: "All lengths" });
    fields.forEach(field => {
      const values = [...new Set(entries.map(entry => text(entry[field.key])).filter(Boolean))]; if (values.length < 2) return;
      if (field.key === "historyBin") values.sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
      const label = create("label", "sample-filter"); label.append(create("span", "", field.label));
      const select = create("select"); select.setAttribute("aria-label", `${contextual ? "Dialogue" : "Naturalness"} examples: ${field.label.toLowerCase()}`);
      const all = create("option", "", field.all); all.value = ""; select.append(all);
      values.forEach(value => { const option = create("option", "", value); option.value = value; select.append(option); }); label.append(select); controls[field.key] = select; filters.append(label); select.addEventListener("change", updateFilters);
    });
    function choose(index, announce) {
      selected = index; pauseAudio(); renderRail(); renderCard();
      if (announce) $("sample-announcement").textContent = `${contextual ? "Dialogue" : "Naturalness"} sample ${index + 1}, ${entries[index].dataset}`;
    }
    function updateFilters() {
      visible = entries.map((entry, index) => ({ entry, index })).filter(({ entry }) => Object.entries(controls).every(([key, control]) => !control.value || text(entry[key]) === control.value)).map(({ index }) => index);
      if (!visible.includes(selected)) selected = visible[0]; pauseAudio(); renderRail(); renderCard();
    }
    function renderRail() {
      count.textContent = `${visible.length} of ${entries.length} selected excerpts`; rail.replaceChildren();
      visible.forEach(index => {
        const entry = entries[index], button = create("button", "sample-choice"); button.type = "button"; button.setAttribute("aria-pressed", String(index === selected));
        button.setAttribute("aria-label", `Sample ${index + 1}, ${entry.dataset}${entry.emotion ? `, ${entry.emotion}` : ""}${contextual && entry.historyLength != null ? `, ${entry.historyLength} history utterances` : ""}`);
        button.append(create("span", "sample-choice-number", String(index + 1).padStart(2, "0")));
        const copy = create("span", "sample-choice-text"); copy.append(create("strong", "", entry.dataset));
        const sub = [text(entry.emotion), contextual && entry.historyLength != null ? `${entry.historyLength} turns` : ""].filter(Boolean).join(" · "); if (sub) copy.append(create("small", "", sub));
        button.append(copy); button.addEventListener("click", () => choose(index, true)); rail.append(button);
      }); rail.hidden = !visible.length;
    }
    function renderCard() {
      if (window.MathJax?.typesetClear) window.MathJax.typesetClear([cardContainer]); cardContainer.replaceChildren();
      if (!visible.length) {
        const empty = create("div", "empty-samples", "No excerpts match these filters."), reset = create("button", "", "Clear filters"); reset.type = "button";
        reset.addEventListener("click", () => { Object.values(controls).forEach(control => { control.value = ""; }); updateFilters(); }); empty.append(reset); cardContainer.append(empty); return;
      }
      const sample = entries[selected], scope = `${mode}-sample-${selected + 1}`, card = create("article", "sample-card"); card.setAttribute("aria-label", `${contextual ? "Dialogue" : "Naturalness"} sample ${selected + 1}`);
      const top = create("div", "sample-card-top"), heading = create("div", "sample-card-heading"); heading.append(create("h3", "", `Sample ${String(selected + 1).padStart(2, "0")}`), create("span", "sample-dataset", sample.dataset));
      const pager = create("div", "sample-pager"), position = visible.indexOf(selected); pager.append(create("span", "", `${position + 1} / ${visible.length}`));
      [{ offset: -1, name: "Previous sample", glyph: "‹" }, { offset: 1, name: "Next sample", glyph: "›" }].forEach(action => {
        const button = create("button", "", action.glyph); button.type = "button"; button.setAttribute("aria-label", action.name); button.disabled = position + action.offset < 0 || position + action.offset >= visible.length;
        button.addEventListener("click", () => choose(visible[position + action.offset], true)); pager.append(button);
      }); top.append(heading, pager); card.append(top);
      if (contextual) appendHistory(card, sample, scope);
      const utterance = create("div", "target-utterance"), meta = create("div", "utterance-meta"); meta.append(create("span", "target-label", "Current utterance"));
      if (text(sample.speaker)) meta.append(create("span", "", text(sample.speaker))); if (text(sample.emotion)) meta.append(create("span", "metadata-tag", sample.emotion));
      const quote = create("blockquote"); quote.append(create("p", "", sample.text)); utterance.append(meta, quote); card.append(utterance);
      const audioSection = create("div", "comparison-audio"), audioHeading = create("div", "audio-grid-heading"), clips = [...array(sample.audio)].sort((a, b) => modelRank(a.model) - modelRank(b.model));
      audioHeading.append(create("p", "", "Compare the current utterance"), create("span", "", `${clips.length} audio clips`)); const grid = create("div", "audio-grid");
      clips.forEach((clip, index) => {
        const model = text(clip.model), cell = create("div", "audio-cell"), name = create("div", "audio-model-heading"), label = create("label", /^tar-css$/i.test(model) ? "proposed" : "", model), id = `${scope}-audio-${index}`; label.htmlFor = id; name.append(label);
        if (/^tar-css$/i.test(model)) name.append(create("span", "audio-model-note proposed-note", "Proposed"));
        else if (/^(original|natural|ground[ -]?truth)(\b|$)/i.test(model)) name.append(create("span", "audio-model-note", "Reference"));
        cell.append(name); appendPlayer(cell, clip.src, id, `${sample.dataset}, sample ${selected + 1}, ${model}`); grid.append(cell);
      });
      audioSection.append(audioHeading, grid); card.append(audioSection); cardContainer.append(card); typesetMath([card]);
    }
    renderRail(); renderCard();
  }
  sampleBrowser("naturalness", false); sampleBrowser("dialogue", true);
  const listeningButtons = [...document.querySelectorAll("[data-listening-mode]")];
  function selectListening(index, focus) {
    pauseAudio(); listeningButtons.forEach((button, i) => { button.setAttribute("aria-selected", String(i === index)); button.tabIndex = i === index ? 0 : -1; $(button.getAttribute("aria-controls")).hidden = i !== index; });
    if (focus) listeningButtons[index].focus();
  }
  listeningButtons.forEach((button, index) => button.addEventListener("click", () => selectListening(index, false)));
  document.querySelector(".listening-mode-tabs").addEventListener("keydown", event => keyboardTabs(event, listeningButtons, selectListening));
  function applyHash() {
    const hash = window.location.hash; if (hash === "#dialogue-samples") selectListening(1, false); else if (hash === "#naturalness-samples") selectListening(0, false);
    const match = hash.match(/^#paper-table-(\d+)$/); if (match && tableButtons[Number(match[1]) - 1]) selectTable(Number(match[1]) - 1, false);
  }
  window.addEventListener("hashchange", applyHash); applyHash();
  if ("IntersectionObserver" in window) {
    const navLinks = [...document.querySelectorAll(".site-header nav a")];
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (!entry.isIntersecting) return; navLinks.forEach(link => { if (link.hash === `#${entry.target.id}`) link.setAttribute("aria-current", "location"); else link.removeAttribute("aria-current"); }); }); }, { rootMargin: "-90px 0px -65% 0px", threshold: 0 });
    navLinks.forEach(link => { const target = document.querySelector(link.hash); if (target) observer.observe(target); });
  }
  typesetMath([document.querySelector("main")]);
})();
