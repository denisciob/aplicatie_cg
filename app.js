// =========================================================
// 1. DATE FIXE
// =========================================================

// domeniile: cod (ca în intrebari.js), nume afișat, iconiță și cele două culori
const DOMENII = [
  { id: "mixt",                nume: "Mixt",                icon: "🎲", c1: "#f472b6", c2: "#7c3aed" },
  { id: "istorie",             nume: "Istorie",             icon: "🏛️", c1: "#fb923c", c2: "#c2410c" },
  { id: "biologie",            nume: "Biologie",            icon: "🧬", c1: "#4ade80", c2: "#15803d" },
  { id: "geografie",           nume: "Geografie",           icon: "🌍", c1: "#2dd4bf", c2: "#0f766e" },
  { id: "aviatie",             nume: "Aviație",             icon: "✈️", c1: "#38bdf8", c2: "#1d4ed8" },
  { id: "educatie-financiara", nume: "Educație financiară", icon: "💰", c1: "#facc15", c2: "#a16207" },
  { id: "socio-politica",      nume: "Socio-politică",      icon: "⚖️", c1: "#c084fc", c2: "#7e22ce" },
  { id: "nutritie",            nume: "Nutriție",            icon: "🥗", c1: "#a3e635", c2: "#4d7c0f" },
  { id: "astronomie",          nume: "Astronomie",          icon: "🔭", c1: "#fb7185", c2: "#be123c" },
  { id: "fizica",              nume: "Fizică",              icon: "⚛️", c1: "#818cf8", c2: "#4338ca" }
];

// dificultățile: cod (ca în intrebari.js), nume afișat în engleză, iconiță, descriere
const DIFICULTATI = [
  { id: "usor",  nume: "Easy",   icon: "🌱", desc: "A gentle warm-up",    clasa: "easy" },
  { id: "mediu", nume: "Medium", icon: "⚡", desc: "For curious minds",   clasa: "medium" },
  { id: "greu",  nume: "Hard",   icon: "🔥", desc: "For true experts",    clasa: "hard" },
  { id: "mixed", nume: "Mixed",  icon: "🎯", desc: "All levels together", clasa: "mixed" }
];

// setările cu care pornește aplicația prima dată
const SETARI_IMPLICITE = { numar: "10", dark: false, muzica: false, volum: 40, efecte: true };

const MAX_ISTORIC = 300;        // câte teste păstrăm în istoric, în total
const RAND_ISTORIC = 10;        // câte teste afișăm pe ecranul de scor


// =========================================================
// 2. FUNCȚII AJUTĂTOARE
// =========================================================

// scurtătură pentru a găsi un element după id
function $(id) { return document.getElementById(id); }

// transformă „Educație financiară” în „educatie-financiara” (fără diacritice, fără spații)
function curata(text) {
  return String(text || "").toLowerCase().normalize("NFD")
    .replace(/[̀-ͯ]/g, "").trim().replace(/\s+/g, "-");
}

// face textul sigur de pus în pagină (ghilimelele și < > nu strică nimic)
function sigur(text) {
  return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// amestecă o listă, ca pe un pachet de cărți
function amesteca(lista) {
  const copie = lista.slice();
  for (let i = copie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copie[i], copie[j]] = [copie[j], copie[i]];
  }
  return copie;
}

// „1 question” / „5 questions”
function plural(n, cuvant) { return n + " " + cuvant + (n === 1 ? "" : "s"); }

// 135 de secunde → „2:15”
function timp(secunde) {
  const m = Math.floor(secunde / 60);
  const s = secunde % 60;
  return m + ":" + String(s).padStart(2, "0");
}

// o dată salvată → „18.10.2026, 17:42”
function data(ms) {
  const d = new Date(ms);
  const zz = String(d.getDate()).padStart(2, "0");
  const ll = String(d.getMonth() + 1).padStart(2, "0");
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return zz + "." + ll + "." + d.getFullYear() + ", " + hh + ":" + mm;
}

// găsește un domeniu sau o dificultate după cod
function domeniu(id) { return DOMENII.find(d => d.id === id); }
function dificultate(id) { return DIFICULTATI.find(d => d.id === id); }

// pune culorile unui domeniu pe un element (cardul, bara, butonul Next le folosesc)
function coloreaza(element, dom) {
  element.style.setProperty("--c1", dom.c1);
  element.style.setProperty("--c2", dom.c2);
  element.style.setProperty("--c-soft", dom.c1 + "26");   // aceeași culoare, foarte transparentă
}

// culoarea unui procent: verde (bine), galben (mediu), roșu (slab)
function culoareProcent(p) {
  if (p >= 80) return "#22c55e";
  if (p >= 50) return "#eab308";
  return "#ef4444";
}


// =========================================================
// 3. SALVAREA PE CALCULATOR (setări, istoric, recorduri)
// =========================================================

// citește ceva salvat; dacă nu există, întoarce valoarea implicită
function citeste(cheie, implicit) {
  try {
    const text = localStorage.getItem(cheie);
    return text ? JSON.parse(text) : implicit;
  } catch (e) {
    return implicit;
  }
}

// salvează ceva (dacă browserul nu permite, aplicația merge mai departe fără salvare)
function scrie(cheie, valoare) {
  try { localStorage.setItem(cheie, JSON.stringify(valoare)); } catch (e) {}
}

const setariSalvate = citeste("quiz-settings", {});
const setari = Object.assign({}, SETARI_IMPLICITE, setariSalvate);

// dacă nu ai ales încă tema, o urmăm pe cea a telefonului sau a calculatorului
if (!("dark" in setariSalvate)) {
  const temaPagina = document.documentElement.getAttribute("data-theme");
  setari.dark = temaPagina ? temaPagina === "dark"
    : !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
}
let istoric = citeste("quiz-history", []);     // lista tuturor testelor terminate
let recorduri = citeste("quiz-best", {});      // cel mai bun scor pe fiecare domeniu + dificultate

function salveazaSetari() { scrie("quiz-settings", setari); }


// =========================================================
// 4. VERIFICAREA BAZEI DE ÎNTREBĂRI
// =========================================================

const BANCA = [];        // aici ajung doar întrebările scrise corect
const PROBLEME = [];     // întrebările cu greșeli, ca să le arătăm pe ecran

// dacă intrebari.js are o greșeală gravă, INTREBARI nu există deloc
const bancaIncarcata = typeof INTREBARI !== "undefined" && Array.isArray(INTREBARI);

if (bancaIncarcata) {
  INTREBARI.forEach(function (q, i) {
    const nr = "Question #" + (i + 1);
    if (!q || typeof q !== "object") { PROBLEME.push(nr + ": is empty or broken."); return; }

    const dom = curata(q.domeniu);
    const dif = curata(q.dificultate);
    const variante = Array.isArray(q.variante) ? q.variante.map(v => String(v).trim()) : [];
    const corect = String(q.corect || "").trim();
    const inceput = q.intrebare ? " („" + String(q.intrebare).slice(0, 40) + "…”)" : "";

    // verificăm pe rând fiecare câmp
    if (!q.intrebare) PROBLEME.push(nr + ": the question text is missing.");
    else if (!domeniu(dom) || dom === "mixt") PROBLEME.push(nr + inceput + ": unknown category „" + q.domeniu + "”.");
    else if (!["usor", "mediu", "greu"].includes(dif)) PROBLEME.push(nr + inceput + ": unknown difficulty „" + q.dificultate + "”.");
    else if (variante.length !== 4) PROBLEME.push(nr + inceput + ": needs exactly 4 options.");
    else if (!variante.includes(corect)) PROBLEME.push(nr + inceput + ": the correct answer doesn't match any option exactly.");
    else BANCA.push({ domeniu: dom, dificultate: dif, intrebare: String(q.intrebare), variante, corect, explicatie: q.explicatie || "" });
  });
}

// întrebările care se potrivesc cu domeniul și dificultatea alese
function disponibile(dom, dif) {
  return BANCA.filter(q =>
    (dom === "mixt" || q.domeniu === dom) &&
    (dif === "mixed" || q.dificultate === dif)
  );
}

// afișează pe meniu caseta roșie dacă sunt probleme în intrebari.js
function arataProblemeBanca() {
  const caseta = $("bank-alert");
  if (!bancaIncarcata) {
    caseta.innerHTML = "<strong>intrebari.js could not be loaded.</strong>" +
      "Check that the file is in the same folder as index.html and that no comma, quote or bracket is missing.";
  } else if (PROBLEME.length) {
    const lista = PROBLEME.slice(0, 5).map(p => "<li>" + sigur(p) + "</li>").join("");
    const inPlus = PROBLEME.length > 5 ? "<li>…and " + (PROBLEME.length - 5) + " more.</li>" : "";
    caseta.innerHTML = "<strong>" + plural(PROBLEME.length, "question") + " skipped. Fix them in intrebari.js:</strong><ul>" + lista + inPlus + "</ul>";
  } else {
    caseta.classList.add("hidden");
    return;
  }
  caseta.classList.remove("hidden");
}


// =========================================================
// 5. NAVIGAREA ÎNTRE ECRANE
// =========================================================

// ascunde toate ecranele și îl arată doar pe cel cerut
function arataEcran(id) {
  document.querySelectorAll(".screen").forEach(e => e.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo(0, 0);
}

// ce ecran se vede acum
function ecranActiv() {
  const e = document.querySelector(".screen.active");
  return e ? e.id : "";
}

// butoanele Back care au scris în ele unde duc (data-go)
document.querySelectorAll("[data-go]").forEach(function (buton) {
  buton.addEventListener("click", function () {
    arataEcran(buton.dataset.go);
    if (buton.dataset.go === "screen-menu") deseneazaMeniul();
  });
});


// =========================================================
// 6. MENIUL, DOMENIILE ȘI DIFICULTĂȚILE
// =========================================================

let domeniuAles = "mixt";   // ținem minte ce domeniu ai ales

function deseneazaMeniul() {
  // iconițele colorate de sub titlu (fără Mixt)
  $("hero-domains").innerHTML = DOMENII.filter(d => d.id !== "mixt").map(d =>
    '<span class="hero-dot" title="' + sigur(d.nume) + '" style="--c1:' + d.c1 + ";--c2:" + d.c2 + '">' + d.icon + "</span>"
  ).join("");

  // cele trei cifre
  $("stat-questions").textContent = BANCA.length;
  $("stat-categories").textContent = DOMENII.filter(d => d.id !== "mixt" && disponibile(d.id, "mixed").length > 0).length;
  $("stat-tests").textContent = istoric.length;
}

function deseneazaDomenii() {
  $("domain-grid").innerHTML = DOMENII.map(function (d) {
    const n = disponibile(d.id, "mixed").length;
    const gol = n === 0;
    const text = d.id === "mixt" ? plural(n, "question") + " from all categories" : plural(n, "question");
    return '<button class="domain-card' + (d.id === "mixt" ? " domain-wide" : "") + '" data-domeniu="' + d.id + '"' +
      ' style="--c1:' + d.c1 + ";--c2:" + d.c2 + '"' + (gol ? " disabled" : "") + ">" +
      (gol ? '<span class="soon">Coming soon</span>' : "") +
      '<span class="domain-icon">' + d.icon + "</span>" +
      '<span class="domain-text"><span class="domain-name">' + sigur(d.nume) + "</span>" +
      '<span class="domain-count">' + (gol ? "No questions yet" : text) + "</span></span>" +
      "</button>";
  }).join("");
}

function deseneazaDificultati() {
  const dom = domeniu(domeniuAles);

  // iconița și numele domeniului ales, deasupra titlului
  $("diff-header").innerHTML = '<span class="domain-icon">' + dom.icon + "</span><span>" + sigur(dom.nume) + "</span>";
  coloreaza($("diff-header"), dom);

  $("diff-list").innerHTML = DIFICULTATI.map(function (dif) {
    const n = disponibile(domeniuAles, dif.id).length;
    const record = recorduri[domeniuAles + "|" + dif.id];
    const recordText = record ? "Best " + record.procent + "%" : "Not played yet";
    return '<button class="diff-card diff-' + dif.clasa + '" data-dificultate="' + dif.id + '"' + (n === 0 ? " disabled" : "") + ">" +
      '<span class="diff-icon">' + dif.icon + "</span>" +
      '<span class="diff-name">' + dif.nume + "</span>" +
      '<span class="diff-desc">' + dif.desc + "</span>" +
      '<span class="diff-info"><span class="diff-chip">' + (n === 0 ? "No questions yet" : plural(n, "question")) + "</span>" +
      (n > 0 ? '<span class="diff-chip">' + recordText + "</span>" : "") + "</span>" +
      "</button>";
  }).join("");
}

// butoanele din meniul principal
$("btn-practice").addEventListener("click", function () {
  deseneazaDomenii();
  arataEcran("screen-domain");
});
$("btn-settings").addEventListener("click", function () { arataEcran("screen-settings"); });

// click pe un domeniu → ecranul cu dificultăți
$("domain-grid").addEventListener("click", function (e) {
  const card = e.target.closest(".domain-card");
  if (!card || card.disabled) return;
  domeniuAles = card.dataset.domeniu;
  deseneazaDificultati();
  arataEcran("screen-difficulty");
});

// click pe o dificultate → începe testul
$("diff-list").addEventListener("click", function (e) {
  const card = e.target.closest(".diff-card");
  if (!card || card.disabled) return;
  incepeTest(domeniuAles, card.dataset.dificultate);
});


// =========================================================
// 7. TESTUL
// =========================================================

// tot ce trebuie ținut minte în timpul unui test
const joc = {
  domeniu: "", dificultate: "",
  intrebari: [],       // întrebările alese pentru test
  index: 0,            // la a câta întrebare suntem
  scor: 0,             // câte răspunsuri corecte
  serie: 0,            // câte corecte la rând
  greseli: [],         // ce ai greșit, pentru review
  aRaspuns: false,     // dacă ai răspuns deja la întrebarea curentă
  start: 0,            // momentul în care a început testul
  ceas: null           // cronometrul care se actualizează în fiecare secundă
};

function incepeTest(dom, dif) {
  const lista = amesteca(disponibile(dom, dif));
  const cate = setari.numar === "all" ? lista.length : Math.min(Number(setari.numar), lista.length);

  joc.domeniu = dom;
  joc.dificultate = dif;
  // luăm primele întrebări din lista amestecată și amestecăm și variantele fiecăreia
  joc.intrebari = lista.slice(0, cate).map(q => Object.assign({}, q, { ordine: amesteca(q.variante) }));
  joc.index = 0;
  joc.scor = 0;
  joc.serie = 0;
  joc.greseli = [];
  joc.start = Date.now();

  // cronometrul din colț
  clearInterval(joc.ceas);
  joc.ceas = setInterval(actualizeazaCeasul, 1000);
  actualizeazaCeasul();

  actualizeazaPastilele();
  arataEcran("screen-quiz");
  arataIntrebarea();
}

function secundeTrecute() { return Math.round((Date.now() - joc.start) / 1000); }
function actualizeazaCeasul() { $("pill-time").textContent = "⏱ " + timp(secundeTrecute()); }

// scorul și seria din colțul de sus
function actualizeazaPastilele() {
  $("pill-score").textContent = "★ " + joc.scor;
  $("pill-streak").textContent = "🔥 " + joc.serie;
  $("pill-streak").classList.toggle("on", joc.serie >= 2);   // flacăra se aprinde de la 2 corecte la rând
}

// pornește din nou o animație scurtă pe un element
function animatie(element, clasa) {
  element.classList.remove(clasa);
  void element.offsetWidth;          // forțează browserul să „uite” animația veche
  element.classList.add(clasa);
}

function arataIntrebarea() {
  const q = joc.intrebari[joc.index];
  const total = joc.intrebari.length;
  const dom = domeniu(q.domeniu);
  const dif = dificultate(q.dificultate);

  joc.aRaspuns = false;

  // tot ecranul ia culoarea domeniului întrebării
  coloreaza($("screen-quiz"), dom);

  $("quiz-counter").textContent = "Question " + (joc.index + 1) + " of " + total;
  $("quiz-domain").textContent = dom.icon + " " + dom.nume;
  $("quiz-difficulty").textContent = dif.nume;
  $("quiz-difficulty").className = "tag tag-" + dif.clasa;
  $("question-text").textContent = q.intrebare;
  $("progress-bar").style.width = (joc.index / total * 100) + "%";

  // cele 4 butoane de răspuns, cu literele A-D
  $("answers").className = "answers";
  $("answers").innerHTML = q.ordine.map((v, i) =>
    '<button class="answer" data-i="' + i + '"><span class="letter">' + "ABCD"[i] + "</span><span>" + sigur(v) + "</span></button>"
  ).join("");

  // ascundem explicația și butonul Next până răspunzi
  $("feedback").className = "feedback";
  $("btn-next").classList.remove("show");
  $("btn-next").textContent = joc.index === total - 1 ? "Finish" : "Next";

  animatie($("quiz-card"), "enter");
}

// click pe o variantă
$("answers").addEventListener("click", function (e) {
  const buton = e.target.closest(".answer");
  if (buton) raspunde(Number(buton.dataset.i));
});

function raspunde(i) {
  if (joc.aRaspuns) return;         // nu poți răspunde de două ori
  joc.aRaspuns = true;

  const q = joc.intrebari[joc.index];
  const ales = q.ordine[i];
  const eCorect = ales === q.corect;
  const butoane = $("answers").querySelectorAll(".answer");

  // colorăm: răspunsul corect mereu verde, al tău roșu dacă e greșit
  butoane.forEach(function (b, k) {
    if (q.ordine[k] === q.corect) b.classList.add("correct");
    else if (k === i) b.classList.add("wrong");
  });
  $("answers").classList.add("locked");

  if (eCorect) {
    joc.scor++;
    joc.serie++;
    sunet("corect");
    animatie($("pill-score"), "bump");
  } else {
    joc.serie = 0;
    joc.greseli.push({ intrebare: q.intrebare, ales: ales, corect: q.corect, explicatie: q.explicatie });
    sunet("gresit");
  }
  actualizeazaPastilele();

  // caseta cu explicația
  let titlu = eCorect ? "✓ Correct!" : "✗ Wrong!";
  if (eCorect && joc.serie >= 3) titlu += "  🔥 " + joc.serie + " in a row";
  $("feedback").className = "feedback show " + (eCorect ? "feedback-correct" : "feedback-wrong");
  $("feedback-title").textContent = titlu;
  $("feedback-text").textContent = q.explicatie;
  $("feedback-text").classList.toggle("hidden", !q.explicatie);

  $("progress-bar").style.width = ((joc.index + 1) / joc.intrebari.length * 100) + "%";

  // arătăm butonul Next și îl aducem în ecran dacă e prea jos
  $("btn-next").classList.add("show");
  $("btn-next").focus({ preventScroll: true });
  $("btn-next").scrollIntoView({ block: "nearest", behavior: "smooth" });
}

$("btn-next").addEventListener("click", urmatoarea);

function urmatoarea() {
  if (!joc.aRaspuns) return;        // nu sări peste o întrebare fără răspuns
  joc.index++;
  if (joc.index >= joc.intrebari.length) termina();
  else arataIntrebarea();
}

// butonul Back din timpul testului
$("btn-quit").addEventListener("click", cereIesirea);

function cereIesirea() {
  // dacă n-ai răspuns încă la nimic, ieșim direct
  if (joc.index === 0 && !joc.aRaspuns) { iesiDinTest(); return; }
  intreaba("Quit this test?", "Your answers so far won't be saved.", "Quit", "Keep playing", iesiDinTest);
}

function iesiDinTest() {
  clearInterval(joc.ceas);
  deseneazaDificultati();
  arataEcran("screen-difficulty");
}


// =========================================================
// 8. REZULTATUL, REVIEW-UL ȘI ISTORICUL
// =========================================================

// mesajul de la final, în funcție de procent
function mesajFinal(p) {
  if (p === 100) return ["🏆", "Perfect score!", "Flawless. You got every single question right."];
  if (p >= 80)   return ["🌟", "Excellent!", "Great job! You really know your stuff."];
  if (p >= 60)   return ["👏", "Well done!", "Solid result. A little more practice and you'll ace it."];
  if (p >= 40)   return ["📚", "Not bad!", "You're getting there. Read the explanations below and try again."];
  return ["💪", "Keep going!", "Every mistake is something new learned. Review the answers and give it another go."];
}

function termina() {
  clearInterval(joc.ceas);

  const total = joc.intrebari.length;
  const procent = Math.round(joc.scor / total * 100);
  const durata = secundeTrecute();
  const cheie = joc.domeniu + "|" + joc.dificultate;
  const vechi = recorduri[cheie];                       // recordul de dinainte
  const eRecord = !vechi || procent > vechi.procent;

  // salvăm recordul nou și testul în istoric
  if (eRecord) recorduri[cheie] = { procent: procent, scor: joc.scor, total: total, data: Date.now() };
  istoric.push({ domeniu: joc.domeniu, dificultate: joc.dificultate, scor: joc.scor, total: total, procent: procent, durata: durata, data: Date.now() });
  if (istoric.length > MAX_ISTORIC) istoric = istoric.slice(-MAX_ISTORIC);   // păstrăm doar cele mai noi
  scrie("quiz-best", recorduri);
  scrie("quiz-history", istoric);

  // partea de sus: emoji, titlu, etichete, mesaj
  const dom = domeniu(joc.domeniu);
  const dif = dificultate(joc.dificultate);
  const [emoji, titlu, mesaj] = mesajFinal(procent);
  coloreaza($("screen-result"), dom);

  $("result-emoji").textContent = emoji;
  $("result-title").textContent = titlu;
  $("result-message").textContent = mesaj;
  $("result-total").textContent = total;
  $("result-tags").innerHTML =
    '<span class="tag tag-domain">' + dom.icon + " " + sigur(dom.nume) + "</span>" +
    '<span class="tag tag-' + dif.clasa + '">' + dif.nume + "</span>" +
    '<span class="tag tag-plain">' + procent + "% correct</span>" +
    '<span class="tag tag-plain">⏱ ' + timp(durata) + "</span>";

  // insigna: primul scor, record nou, sau recordul de bătut
  const insigna = $("result-badge");
  insigna.className = "badge";
  if (!vechi) insigna.textContent = "⭐ Your first score in this mode";
  else if (eRecord) insigna.textContent = "🎉 New best score! (was " + vechi.procent + "%)";
  else { insigna.textContent = "Best in this mode: " + vechi.procent + "%"; insigna.classList.add("badge-plain"); }

  umpleCercul(procent, joc.scor);
  deseneazaReview();
  deseneazaIstoricul(true);

  arataEcran("screen-result");
  sunet("final");
  if (procent >= 80) confetti();
}

// cercul se umple treptat, iar cifra din mijloc crește de la 0 la scor
function umpleCercul(procent, scor) {
  const cerc = $("ring-fill");
  const lungime = 414.69;                                // lungimea cercului
  cerc.style.setProperty("--ring-color", culoareProcent(procent));
  cerc.style.transition = "none";
  cerc.style.strokeDashoffset = lungime;                 // îl golim
  void cerc.getBoundingClientRect();
  cerc.style.transition = "";
  requestAnimationFrame(() => { cerc.style.strokeDashoffset = lungime * (1 - procent / 100); });

  const inceput = performance.now();
  function pas(acum) {
    const t = Math.min((acum - inceput) / 900, 1);       // 0.9 secunde
    $("result-points").textContent = Math.round(scor * t);
    if (t < 1) requestAnimationFrame(pas);
  }
  requestAnimationFrame(pas);
}

function deseneazaReview() {
  if (joc.greseli.length === 0) {
    $("review-list").innerHTML = '<p class="empty">No mistakes this time. Nothing to review! 🎉</p>';
    return;
  }
  $("review-list").innerHTML = joc.greseli.map(g =>
    '<div class="review-item">' +
      '<p class="review-q">' + sigur(g.intrebare) + "</p>" +
      '<p class="review-line review-yours">✗ Your answer: ' + sigur(g.ales) + "</p>" +
      '<p class="review-line review-correct">✓ Correct answer: ' + sigur(g.corect) + "</p>" +
      (g.explicatie ? '<p class="review-expl">' + sigur(g.explicatie) + "</p>" : "") +
    "</div>"
  ).join("");
}

// istoricul domeniului jucat; „ultimul” evidențiază testul tocmai terminat
function deseneazaIstoricul(ultimul) {
  const dom = domeniu(joc.domeniu);
  $("history-title").textContent = "Your history: " + dom.nume;

  // cele 4 căsuțe cu recorduri
  $("history-best").innerHTML = DIFICULTATI.map(function (dif) {
    const r = recorduri[joc.domeniu + "|" + dif.id];
    return '<div class="best-box best-' + dif.clasa + '"><span>' + dif.nume + "</span><strong>" + (r ? r.procent + "%" : "—") + "</strong></div>";
  }).join("");

  // ultimele teste din acest domeniu, cele mai noi primele
  const teste = istoric.filter(t => t.domeniu === joc.domeniu).slice(-RAND_ISTORIC).reverse();
  if (teste.length === 0) {
    $("history-list").innerHTML = '<p class="empty">No tests saved for this category.</p>';
    return;
  }
  $("history-list").innerHTML = teste.map(function (t, k) {
    const dif = dificultate(t.dificultate);
    return '<div class="history-row' + (ultimul && k === 0 ? " latest" : "") + '">' +
      '<span class="tag tag-' + dif.clasa + '">' + dif.nume + "</span>" +
      "<div>" +
        '<div class="history-bar"><span style="width:' + t.procent + "%;background:" + culoareProcent(t.procent) + '"></span></div>' +
        '<div class="history-meta">' + (ultimul && k === 0 ? "Just now" : data(t.data)) + (t.durata ? "  ⏱ " + timp(t.durata) : "") + "</div>" +
      "</div>" +
      '<span class="history-score">' + t.scor + "/" + t.total + "  " + t.procent + "%</span>" +
    "</div>";
  }).join("");
}

// butoanele de pe ecranul de scor
$("btn-again").addEventListener("click", function () { incepeTest(joc.domeniu, joc.dificultate); });
$("btn-menu").addEventListener("click", function () { deseneazaMeniul(); arataEcran("screen-menu"); });

$("btn-clear-history").addEventListener("click", function () {
  const nume = domeniu(joc.domeniu).nume;
  intreaba("Clear history?", "All saved tests and best scores for " + nume + " will be deleted.", "Clear", "Cancel", function () {
    istoric = istoric.filter(t => t.domeniu !== joc.domeniu);
    DIFICULTATI.forEach(dif => delete recorduri[joc.domeniu + "|" + dif.id]);
    scrie("quiz-history", istoric);
    scrie("quiz-best", recorduri);
    deseneazaIstoricul(false);
  });
});

// confetti colorate care cad pe ecran
function confetti() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const cutie = $("confetti");
  const culori = ["#f472b6", "#a78bfa", "#60a5fa", "#34d399", "#facc15", "#fb923c"];
  for (let i = 0; i < 70; i++) {
    const bucata = document.createElement("i");
    bucata.style.left = Math.random() * 100 + "vw";
    bucata.style.background = culori[i % culori.length];
    bucata.style.animationDuration = 2 + Math.random() * 1.8 + "s";
    bucata.style.animationDelay = Math.random() * 0.5 + "s";
    bucata.style.setProperty("--x", (Math.random() * 240 - 120) + "px");   // cât alunecă în lateral
    bucata.style.setProperty("--r", (Math.random() * 900 - 450) + "deg");  // cât se rotește
    cutie.appendChild(bucata);
  }
  setTimeout(() => { cutie.innerHTML = ""; }, 4500);   // le ștergem după ce au căzut
}


// =========================================================
// 9. FEREASTRA DE CONFIRMARE
// =========================================================

let laConfirmare = null;   // ce se întâmplă dacă apeși butonul de confirmare

function intreaba(titlu, text, textOk, textAnulare, functie) {
  $("modal-title").textContent = titlu;
  $("modal-text").textContent = text;
  $("modal-ok").textContent = textOk;
  $("modal-cancel").textContent = textAnulare;
  laConfirmare = functie;
  $("modal").classList.remove("hidden");
  $("modal-cancel").focus();
}

function inchideFereastra() {
  $("modal").classList.add("hidden");
  laConfirmare = null;
}

$("modal-cancel").addEventListener("click", inchideFereastra);
$("modal-ok").addEventListener("click", function () {
  const f = laConfirmare;
  inchideFereastra();
  if (f) f();
});
// click pe fundalul întunecat închide fereastra
$("modal").addEventListener("click", function (e) { if (e.target === $("modal")) inchideFereastra(); });


// =========================================================
// 10. SETĂRILE
// =========================================================

// pune pe ecran setările salvate
function aplicaSetarile() {
  document.querySelectorAll("#count-group .chip").forEach(c => c.classList.toggle("selected", c.dataset.count === setari.numar));
  $("set-dark").checked = setari.dark;
  $("set-music").checked = setari.muzica;
  $("set-effects").checked = setari.efecte;
  $("music-volume").value = setari.volum;
  $("volume-label").textContent = setari.volum + "%";
  aplicaTema();
}

function aplicaTema() {
  document.documentElement.classList.toggle("dark", setari.dark);
  $("btn-theme").textContent = setari.dark ? "☀️" : "🌙";
  $("btn-theme").title = setari.dark ? "Light mode" : "Dark mode";
}

// numărul de întrebări per test
$("count-group").addEventListener("click", function (e) {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  setari.numar = chip.dataset.count;
  salveazaSetari();
  aplicaSetarile();
});

// dark mode: din setări sau din butonul rotund de pe meniu
$("set-dark").addEventListener("change", function () {
  setari.dark = this.checked;
  salveazaSetari();
  aplicaTema();
});
$("btn-theme").addEventListener("click", function () {
  setari.dark = !setari.dark;
  $("set-dark").checked = setari.dark;
  salveazaSetari();
  aplicaTema();
});

$("set-effects").addEventListener("change", function () {
  setari.efecte = this.checked;
  salveazaSetari();
  if (setari.efecte) sunet("corect");      // un sunet de probă
});

$("set-music").addEventListener("change", function () {
  setari.muzica = this.checked;
  salveazaSetari();
  if (setari.muzica) pornesteMuzica();
  else { muzica.pause(); arataNotaMuzica(); }
});

$("music-volume").addEventListener("input", function () {
  setari.volum = Number(this.value);
  $("volume-label").textContent = setari.volum + "%";
  muzica.volume = setari.volum / 100;
  salveazaSetari();
});


// =========================================================
// 11. SUNETELE SCURTE (generate de browser, fără fișiere)
// =========================================================

let audio = null;   // „difuzorul” browserului, pornit la primul sunet

// cântă o singură notă: frecvența, momentul, durata, tipul sunetului
function nota(frecventa, cand, durata, tip, volum) {
  const osc = audio.createOscillator();
  const vol = audio.createGain();
  osc.type = tip || "sine";
  osc.frequency.value = frecventa;
  // volumul crește repede și apoi scade lin, ca să nu pocnească
  vol.gain.setValueAtTime(0.0001, cand);
  vol.gain.exponentialRampToValueAtTime(volum || 0.16, cand + 0.02);
  vol.gain.exponentialRampToValueAtTime(0.0001, cand + durata);
  osc.connect(vol);
  vol.connect(audio.destination);
  osc.start(cand);
  osc.stop(cand + durata + 0.05);
}

function sunet(tip) {
  if (!setari.efecte) return;
  try {
    audio = audio || new (window.AudioContext || window.webkitAudioContext)();
    if (audio.state === "suspended") audio.resume();
    const t = audio.currentTime;
    if (tip === "corect") {             // două note care urcă: „ding-ding”
      nota(659.25, t, 0.15);
      nota(987.77, t + 0.1, 0.3);
    } else if (tip === "gresit") {      // două note joase care coboară
      nota(233.08, t, 0.18, "triangle", 0.2);
      nota(174.61, t + 0.14, 0.32, "triangle", 0.2);
    } else if (tip === "final") {       // o mică fanfară
      [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => nota(f, t + i * 0.12, 0.35));
    }
  } catch (e) {}
}


// =========================================================
// 12. MUZICA DE FUNDAL
// =========================================================

const muzica = $("music");
muzica.volume = setari.volum / 100;
let muzicaLipsa = false;     // devine true dacă nu există fișierul muzica.mp3

// mesajul „not found” din Settings apare doar dacă ai pornit muzica și fișierul lipsește
function arataNotaMuzica() {
  $("music-note").classList.toggle("hidden", !(setari.muzica && muzicaLipsa));
}

muzica.addEventListener("error", function () { muzicaLipsa = true; arataNotaMuzica(); });

function pornesteMuzica() {
  arataNotaMuzica();
  if (!setari.muzica) return;
  muzica.volume = setari.volum / 100;
  const pornire = muzica.play();
  if (pornire) pornire.catch(function (err) {
    if (err.name === "NotSupportedError") { muzicaLipsa = true; arataNotaMuzica(); }
  });
}

// browserele nu lasă muzica să pornească singură, așa că o pornim la primul click sau tastă
document.addEventListener("pointerdown", pornesteMuzica, { once: true });
document.addEventListener("keydown", pornesteMuzica, { once: true });


// =========================================================
// 13. TASTATURA
// =========================================================

document.addEventListener("keydown", function (e) {
  // cât timp e deschisă fereastra de confirmare, doar Escape o închide
  if (!$("modal").classList.contains("hidden")) {
    if (e.key === "Escape") inchideFereastra();
    return;
  }
  if (ecranActiv() !== "screen-quiz" || e.ctrlKey || e.altKey || e.metaKey) return;

  // 1-4 sau A-D aleg varianta
  let i = ["1", "2", "3", "4"].indexOf(e.key);
  if (i === -1) i = ["a", "b", "c", "d"].indexOf(e.key.toLowerCase());

  if (i !== -1 && !joc.aRaspuns) {
    raspunde(i);
  } else if (e.key === "Enter" && joc.aRaspuns) {
    e.preventDefault();                 // ca Enter să nu apese de două ori
    urmatoarea();
  } else if (e.key === "Escape") {
    cereIesirea();
  }
});


// =========================================================
// 14. PORNIREA APLICAȚIEI
// =========================================================

aplicaSetarile();
arataProblemeBanca();
deseneazaMeniul();
