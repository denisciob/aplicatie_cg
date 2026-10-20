// =========================================================
// 1. DATE FIXE
// =========================================================

// limbile aplicației: cod și numele afișat pe butoane (în limba respectivă)
const LIMBI = [
  { id: "en", nume: "English",  local: "en-GB" },
  { id: "ro", nume: "Română",   local: "ro-RO" },
  { id: "fr", nume: "Français", local: "fr-FR" },
  { id: "de", nume: "Deutsch",  local: "de-DE" }
];

// domeniile: cod (ca în intrebari.js), numele în fiecare limbă, iconiță și cele două culori
const DOMENII = [
  { id: "mixt",                icon: "🎲", c1: "#f472b6", c2: "#7c3aed", nume: { en: "All topics",          ro: "Mixt",                fr: "Tous les thèmes",       de: "Alle Themen" } },
  { id: "istorie",             icon: "🏛️", c1: "#fb923c", c2: "#c2410c", nume: { en: "History",             ro: "Istorie",             fr: "Histoire",              de: "Geschichte" } },
  { id: "biologie",            icon: "🧬", c1: "#4ade80", c2: "#15803d", nume: { en: "Biology",             ro: "Biologie",            fr: "Biologie",              de: "Biologie" } },
  { id: "geografie",           icon: "🌍", c1: "#2dd4bf", c2: "#0f766e", nume: { en: "Geography",           ro: "Geografie",           fr: "Géographie",            de: "Geografie" } },
  { id: "aviatie",             icon: "✈️", c1: "#38bdf8", c2: "#1d4ed8", nume: { en: "Aviation",            ro: "Aviație",             fr: "Aviation",              de: "Luftfahrt" } },
  { id: "educatie-financiara", icon: "💰", c1: "#facc15", c2: "#a16207", nume: { en: "Personal finance",    ro: "Educație financiară", fr: "Éducation financière",  de: "Finanzwissen" } },
  { id: "socio-politica",      icon: "⚖️", c1: "#c084fc", c2: "#7e22ce", nume: { en: "Society & politics",  ro: "Socio-politică",      fr: "Société et politique",  de: "Gesellschaft & Politik" } },
  { id: "nutritie",            icon: "🥗", c1: "#a3e635", c2: "#4d7c0f", nume: { en: "Nutrition",           ro: "Nutriție",            fr: "Nutrition",             de: "Ernährung" } },
  { id: "astronomie",          icon: "🔭", c1: "#fb7185", c2: "#be123c", nume: { en: "Astronomy",           ro: "Astronomie",          fr: "Astronomie",            de: "Astronomie" } },
  { id: "fizica",              icon: "⚛️", c1: "#818cf8", c2: "#4338ca", nume: { en: "Physics",             ro: "Fizică",              fr: "Physique",              de: "Physik" } },
  { id: "chimie",              icon: "🧪", c1: "#e879f9", c2: "#a21caf", nume: { en: "Chemistry",           ro: "Chimie",              fr: "Chimie",                de: "Chemie" } }
];

// dificultățile: cod (ca în intrebari.js), iconiță, clasa de culoare, numele și descrierea în fiecare limbă
const DIFICULTATI = [
  { id: "usor",  icon: "🌱", clasa: "easy",
    nume: { en: "Easy",   ro: "Ușor",      fr: "Facile",    de: "Leicht" },
    desc: { en: "A gentle warm-up",    ro: "O încălzire ușoară",          fr: "Un échauffement en douceur", de: "Zum sanften Aufwärmen" } },
  { id: "mediu", icon: "⚡", clasa: "medium",
    nume: { en: "Medium", ro: "Mediu",     fr: "Moyen",     de: "Mittel" },
    desc: { en: "For curious minds",   ro: "Pentru mințile curioase",     fr: "Pour les esprits curieux",   de: "Für neugierige Köpfe" } },
  { id: "greu",  icon: "🔥", clasa: "hard",
    nume: { en: "Hard",   ro: "Greu",      fr: "Difficile", de: "Schwer" },
    desc: { en: "For true experts",    ro: "Pentru adevărații experți",   fr: "Pour les vrais experts",     de: "Für echte Experten" } },
  { id: "mixed", icon: "🎯", clasa: "mixed",
    nume: { en: "Mixed",  ro: "Amestecat", fr: "Mélangé",   de: "Gemischt" },
    desc: { en: "All levels together", ro: "Toate nivelurile la un loc", fr: "Tous les niveaux ensemble",  de: "Alle Stufen gemischt" } }
];

// setările cu care pornește aplicația prima dată (limba implicită este engleza)
const SETARI_IMPLICITE = { numar: "10", limba: "en", dark: false, muzica: false, volum: 40, efecte: true };

const MAX_ISTORIC = 300;        // câte teste păstrăm în istoric, în total
const RAND_ISTORIC = 10;        // câte teste afișăm pe ecranul de scor


// =========================================================
// 2. TEXTELE INTERFEȚEI, ÎN CELE PATRU LIMBI
// =========================================================
// {n}, {p}, {d}... sunt locuri în care aplicația pune un număr sau un nume

const TEXTE = {
  en: {
    pageTitle: "General Knowledge Quiz",
    appTitle: "General Knowledge Quiz",
    subtitle: "Ten subjects, hundreds of facts worth knowing.",
    practice: "Practice test",
    practiceSub: "Choose a category and a difficulty",
    settings: "Settings",
    settingsSub: "Questions, language, theme and sound",
    statQuestions: "questions",
    statCategories: "categories ready",
    statTests: "tests taken",
    back: "Back",
    chooseCategory: "Choose a category",
    chooseCategorySub: "Pick one subject, or mix them all.",
    fromAll: "{q} from all categories",
    comingSoon: "Coming soon",
    noQuestions: "No questions yet",
    chooseDifficulty: "Choose difficulty",
    best: "Best {p}%",
    notPlayed: "Not played yet",
    questionOf: "Question {i} of {n}",
    next: "Next",
    finish: "Finish",
    correct: "✓ Correct!",
    wrong: "✗ Wrong!",
    inARow: "🔥 {n} in a row",
    keyHint: "Keyboard: A–D or 1–4 to answer, Enter for the next question",
    timeTitle: "Time",
    streakTitle: "Correct answers in a row",
    scoreTitle: "Score",
    quitTitle: "Quit this test?",
    quitText: "Your answers so far won't be saved.",
    quit: "Quit",
    keepPlaying: "Keep playing",
    res100: ["Perfect score!", "Flawless. You got every single question right."],
    res80: ["Excellent!", "Great job! You really know your stuff."],
    res60: ["Well done!", "Solid result. A little more practice and you'll ace it."],
    res40: ["Not bad!", "You're getting there. Read the explanations below and try again."],
    res0: ["Keep going!", "Every mistake is something new learned. Review the answers and give it another go."],
    percentCorrect: "{p}% correct",
    firstScore: "⭐ Your first score in this mode",
    newBest: "🎉 New best score! (was {p}%)",
    bestInMode: "Best in this mode: {p}%",
    ringOf: "of",
    quizComplete: "Quiz complete!",
    playAgain: "Play again",
    menu: "Menu",
    reviewTitle: "Review your mistakes",
    noMistakes: "No mistakes this time. Nothing to review! 🎉",
    yourAnswer: "✗ Your answer: ",
    correctAnswer: "✓ Correct answer: ",
    historyTitle: "Your history: {d}",
    bestScores: "Best scores",
    pastTests: "Past tests",
    noTests: "No tests saved for this category.",
    justNow: "Just now",
    clearHistoryBtn: "Clear history for this category",
    clearTitle: "Clear history?",
    clearText: "All saved tests and best scores for {d} will be deleted.",
    clear: "Clear",
    cancel: "Cancel",
    settingsSaved: "Saved automatically.",
    qPerTest: "Questions per test",
    qPerTestSub: "If a category has fewer, you get all of them",
    all: "All",
    language: "Language",
    languageSub: "Buttons, questions and explanations",
    darkMode: "Dark mode",
    darkModeSub: "Easier on the eyes at night",
    lightModeBtn: "Light mode",
    darkModeBtn: "Dark mode",
    music: "Background music",
    musicSub: "Plays muzica.mp3 from the app folder",
    musicMissing: "muzica.mp3 was not found in the app folder.",
    volume: "Music volume",
    effects: "Sound effects",
    effectsSub: "Short sounds for correct and wrong answers",
    bankMissing: "intrebari.js could not be loaded.",
    bankMissingHint: "Check that the file is in the same folder as index.html and that no comma, quote or bracket is missing.",
    bankSkipped: "{q} skipped. Fix them in intrebari.js:",
    bankMore: "…and {n} more.",
    errEmpty: "is empty or broken.",
    errText: "the question text is missing.",
    errCategory: "unknown category",
    errDifficulty: "unknown difficulty",
    errOptions: "needs exactly 4 options.",
    errCorrect: "the correct answer doesn't match any option exactly.",
    errNoLanguage: "has no text in any language.",
    questionWord: "Question",
    q1: "question", qMany: "questions"
  },

  ro: {
    pageTitle: "Quiz de cultură generală",
    appTitle: "Quiz de cultură generală",
    subtitle: "Zece materii, sute de lucruri care merită știute.",
    practice: "Test de exercițiu",
    practiceSub: "Alege o materie și o dificultate",
    settings: "Setări",
    settingsSub: "Întrebări, limbă, temă și sunet",
    statQuestions: "întrebări",
    statCategories: "materii disponibile",
    statTests: "teste date",
    back: "Înapoi",
    chooseCategory: "Alege o materie",
    chooseCategorySub: "Alege o materie sau amestecă-le pe toate.",
    fromAll: "{q} din toate materiile",
    comingSoon: "În curând",
    noQuestions: "Încă nu are întrebări",
    chooseDifficulty: "Alege dificultatea",
    best: "Record {p}%",
    notPlayed: "Nejucat încă",
    questionOf: "Întrebarea {i} din {n}",
    next: "Următoarea",
    finish: "Termină",
    correct: "✓ Corect!",
    wrong: "✗ Greșit!",
    inARow: "🔥 {n} la rând",
    keyHint: "Tastatură: A–D sau 1–4 pentru răspuns, Enter pentru întrebarea următoare",
    timeTitle: "Timp",
    streakTitle: "Răspunsuri corecte la rând",
    scoreTitle: "Scor",
    quitTitle: "Ieși din test?",
    quitText: "Răspunsurile de până acum nu vor fi salvate.",
    quit: "Ieși",
    keepPlaying: "Continuă",
    res100: ["Scor perfect!", "Impecabil. Ai răspuns corect la toate întrebările."],
    res80: ["Excelent!", "Foarte bine! Chiar te pricepi."],
    res60: ["Bravo!", "Rezultat solid. Încă puțin exercițiu și iei maximul."],
    res40: ["Nu-i rău!", "Ești pe drumul cel bun. Citește explicațiile de mai jos și încearcă din nou."],
    res0: ["Nu te opri!", "Din fiecare greșeală înveți ceva nou. Revezi răspunsurile și mai încearcă o dată."],
    percentCorrect: "{p}% corecte",
    firstScore: "⭐ Primul tău scor în acest mod",
    newBest: "🎉 Record nou! (înainte: {p}%)",
    bestInMode: "Recordul în acest mod: {p}%",
    ringOf: "din",
    quizComplete: "Test terminat!",
    playAgain: "Joacă din nou",
    menu: "Meniu",
    reviewTitle: "Revezi greșelile",
    noMistakes: "Nicio greșeală de data asta. Nimic de revăzut! 🎉",
    yourAnswer: "✗ Răspunsul tău: ",
    correctAnswer: "✓ Răspunsul corect: ",
    historyTitle: "Istoricul tău: {d}",
    bestScores: "Cele mai bune scoruri",
    pastTests: "Teste anterioare",
    noTests: "Niciun test salvat pentru această materie.",
    justNow: "Chiar acum",
    clearHistoryBtn: "Șterge istoricul acestei materii",
    clearTitle: "Ștergi istoricul?",
    clearText: "Toate testele salvate și recordurile pentru {d} vor fi șterse.",
    clear: "Șterge",
    cancel: "Anulează",
    settingsSaved: "Se salvează automat.",
    qPerTest: "Întrebări pe test",
    qPerTestSub: "Dacă o materie are mai puține, le primești pe toate",
    all: "Toate",
    language: "Limba",
    languageSub: "Butoane, întrebări și explicații",
    darkMode: "Mod întunecat",
    darkModeSub: "Mai odihnitor pentru ochi seara",
    lightModeBtn: "Mod luminos",
    darkModeBtn: "Mod întunecat",
    music: "Muzică de fundal",
    musicSub: "Redă fișierul muzica.mp3 din folderul aplicației",
    musicMissing: "Fișierul muzica.mp3 nu a fost găsit în folderul aplicației.",
    volume: "Volumul muzicii",
    effects: "Efecte sonore",
    effectsSub: "Sunete scurte pentru răspunsurile corecte și greșite",
    bankMissing: "Fișierul intrebari.js nu a putut fi încărcat.",
    bankMissingHint: "Verifică dacă fișierul este în același folder cu index.html și dacă nu lipsește nicio virgulă, ghilimea sau paranteză.",
    bankSkipped: "{q} sărite. Corectează-le în intrebari.js:",
    bankMore: "…și încă {n}.",
    errEmpty: "este goală sau stricată.",
    errText: "lipsește textul întrebării.",
    errCategory: "materie necunoscută",
    errDifficulty: "dificultate necunoscută",
    errOptions: "trebuie să aibă exact 4 variante.",
    errCorrect: "răspunsul corect nu se potrivește exact cu nicio variantă.",
    errNoLanguage: "nu are text în nicio limbă.",
    questionWord: "Întrebarea",
    q1: "întrebare", qMany: "întrebări"
  },

  fr: {
    pageTitle: "Quiz de culture générale",
    appTitle: "Quiz de culture générale",
    subtitle: "Dix matières, des centaines de faits à connaître.",
    practice: "Test d'entraînement",
    practiceSub: "Choisis une catégorie et un niveau",
    settings: "Paramètres",
    settingsSub: "Questions, langue, thème et son",
    statQuestions: "questions",
    statCategories: "catégories prêtes",
    statTests: "tests passés",
    back: "Retour",
    chooseCategory: "Choisis une catégorie",
    chooseCategorySub: "Choisis une matière ou mélange-les toutes.",
    fromAll: "{q} de toutes les catégories",
    comingSoon: "Bientôt",
    noQuestions: "Pas encore de questions",
    chooseDifficulty: "Choisis le niveau",
    best: "Record : {p} %",
    notPlayed: "Pas encore joué",
    questionOf: "Question {i} sur {n}",
    next: "Suivante",
    finish: "Terminer",
    correct: "✓ Correct !",
    wrong: "✗ Faux !",
    inARow: "🔥 {n} d'affilée",
    keyHint: "Clavier : A–D ou 1–4 pour répondre, Entrée pour la question suivante",
    timeTitle: "Temps",
    streakTitle: "Bonnes réponses d'affilée",
    scoreTitle: "Score",
    quitTitle: "Quitter ce test ?",
    quitText: "Tes réponses jusqu'ici ne seront pas enregistrées.",
    quit: "Quitter",
    keepPlaying: "Continuer",
    res100: ["Score parfait !", "Sans faute. Tu as répondu juste à toutes les questions."],
    res80: ["Excellent !", "Bravo ! Tu connais vraiment ton sujet."],
    res60: ["Bien joué !", "Bon résultat. Encore un peu d'entraînement et ce sera parfait."],
    res40: ["Pas mal !", "Tu es sur la bonne voie. Lis les explications ci-dessous et réessaie."],
    res0: ["Continue !", "Chaque erreur t'apprend quelque chose. Revois les réponses et retente ta chance."],
    percentCorrect: "{p} % de bonnes réponses",
    firstScore: "⭐ Ton premier score dans ce mode",
    newBest: "🎉 Nouveau record ! (avant : {p} %)",
    bestInMode: "Record dans ce mode : {p} %",
    ringOf: "sur",
    quizComplete: "Quiz terminé !",
    playAgain: "Rejouer",
    menu: "Menu",
    reviewTitle: "Revois tes erreurs",
    noMistakes: "Aucune erreur cette fois. Rien à revoir ! 🎉",
    yourAnswer: "✗ Ta réponse : ",
    correctAnswer: "✓ Bonne réponse : ",
    historyTitle: "Ton historique : {d}",
    bestScores: "Meilleurs scores",
    pastTests: "Tests précédents",
    noTests: "Aucun test enregistré pour cette catégorie.",
    justNow: "À l'instant",
    clearHistoryBtn: "Effacer l'historique de cette catégorie",
    clearTitle: "Effacer l'historique ?",
    clearText: "Tous les tests enregistrés et les records pour {d} seront supprimés.",
    clear: "Effacer",
    cancel: "Annuler",
    settingsSaved: "Enregistré automatiquement.",
    qPerTest: "Questions par test",
    qPerTestSub: "Si une catégorie en a moins, tu les auras toutes",
    all: "Toutes",
    language: "Langue",
    languageSub: "Boutons, questions et explications",
    darkMode: "Mode sombre",
    darkModeSub: "Plus doux pour les yeux le soir",
    lightModeBtn: "Mode clair",
    darkModeBtn: "Mode sombre",
    music: "Musique de fond",
    musicSub: "Lit muzica.mp3 depuis le dossier de l'application",
    musicMissing: "muzica.mp3 est introuvable dans le dossier de l'application.",
    volume: "Volume de la musique",
    effects: "Effets sonores",
    effectsSub: "Des sons courts pour les bonnes et les mauvaises réponses",
    bankMissing: "Impossible de charger intrebari.js.",
    bankMissingHint: "Vérifie que le fichier se trouve dans le même dossier que index.html et qu'il ne manque aucune virgule, guillemet ou parenthèse.",
    bankSkipped: "{q} ignorée(s). Corrige-les dans intrebari.js :",
    bankMore: "…et {n} autre(s).",
    errEmpty: "est vide ou endommagée.",
    errText: "le texte de la question manque.",
    errCategory: "catégorie inconnue",
    errDifficulty: "niveau inconnu",
    errOptions: "il faut exactement 4 réponses.",
    errCorrect: "la bonne réponse ne correspond exactement à aucune option.",
    errNoLanguage: "n'a de texte dans aucune langue.",
    questionWord: "Question",
    q1: "question", qMany: "questions"
  },

  de: {
    pageTitle: "Allgemeinwissen-Quiz",
    appTitle: "Allgemeinwissen-Quiz",
    subtitle: "Zehn Fächer, Hunderte wissenswerte Fakten.",
    practice: "Übungstest",
    practiceSub: "Wähle eine Kategorie und einen Schwierigkeitsgrad",
    settings: "Einstellungen",
    settingsSub: "Fragen, Sprache, Design und Ton",
    statQuestions: "Fragen",
    statCategories: "Kategorien bereit",
    statTests: "Tests gemacht",
    back: "Zurück",
    chooseCategory: "Wähle eine Kategorie",
    chooseCategorySub: "Wähle ein Fach oder mische alle.",
    fromAll: "{q} aus allen Kategorien",
    comingSoon: "Demnächst",
    noQuestions: "Noch keine Fragen",
    chooseDifficulty: "Wähle den Schwierigkeitsgrad",
    best: "Bestwert {p} %",
    notPlayed: "Noch nicht gespielt",
    questionOf: "Frage {i} von {n}",
    next: "Weiter",
    finish: "Fertig",
    correct: "✓ Richtig!",
    wrong: "✗ Falsch!",
    inARow: "🔥 {n} in Folge",
    keyHint: "Tastatur: A–D oder 1–4 zum Antworten, Enter für die nächste Frage",
    timeTitle: "Zeit",
    streakTitle: "Richtige Antworten in Folge",
    scoreTitle: "Punkte",
    quitTitle: "Diesen Test beenden?",
    quitText: "Deine bisherigen Antworten werden nicht gespeichert.",
    quit: "Beenden",
    keepPlaying: "Weiterspielen",
    res100: ["Volle Punktzahl!", "Fehlerfrei. Du hast jede Frage richtig beantwortet."],
    res80: ["Ausgezeichnet!", "Sehr gut! Du kennst dich wirklich aus."],
    res60: ["Gut gemacht!", "Solides Ergebnis. Mit etwas mehr Übung schaffst du alles."],
    res40: ["Nicht schlecht!", "Du bist auf einem guten Weg. Lies die Erklärungen unten und versuch es noch einmal."],
    res0: ["Bleib dran!", "Aus jedem Fehler lernst du etwas. Sieh dir die Antworten an und versuch es erneut."],
    percentCorrect: "{p} % richtig",
    firstScore: "⭐ Dein erstes Ergebnis in diesem Modus",
    newBest: "🎉 Neuer Bestwert! (vorher {p} %)",
    bestInMode: "Bestwert in diesem Modus: {p} %",
    ringOf: "von",
    quizComplete: "Quiz beendet!",
    playAgain: "Nochmal spielen",
    menu: "Menü",
    reviewTitle: "Deine Fehler",
    noMistakes: "Diesmal keine Fehler. Nichts zu wiederholen! 🎉",
    yourAnswer: "✗ Deine Antwort: ",
    correctAnswer: "✓ Richtige Antwort: ",
    historyTitle: "Dein Verlauf: {d}",
    bestScores: "Bestwerte",
    pastTests: "Frühere Tests",
    noTests: "Für diese Kategorie sind keine Tests gespeichert.",
    justNow: "Gerade eben",
    clearHistoryBtn: "Verlauf dieser Kategorie löschen",
    clearTitle: "Verlauf löschen?",
    clearText: "Alle gespeicherten Tests und Bestwerte für {d} werden gelöscht.",
    clear: "Löschen",
    cancel: "Abbrechen",
    settingsSaved: "Wird automatisch gespeichert.",
    qPerTest: "Fragen pro Test",
    qPerTestSub: "Hat eine Kategorie weniger, bekommst du alle",
    all: "Alle",
    language: "Sprache",
    languageSub: "Schaltflächen, Fragen und Erklärungen",
    darkMode: "Dunkelmodus",
    darkModeSub: "Angenehmer für die Augen am Abend",
    lightModeBtn: "Heller Modus",
    darkModeBtn: "Dunkelmodus",
    music: "Hintergrundmusik",
    musicSub: "Spielt muzica.mp3 aus dem App-Ordner ab",
    musicMissing: "muzica.mp3 wurde im App-Ordner nicht gefunden.",
    volume: "Musiklautstärke",
    effects: "Soundeffekte",
    effectsSub: "Kurze Töne für richtige und falsche Antworten",
    bankMissing: "intrebari.js konnte nicht geladen werden.",
    bankMissingHint: "Prüfe, ob die Datei im selben Ordner wie index.html liegt und ob kein Komma, Anführungszeichen oder keine Klammer fehlt.",
    bankSkipped: "{q} übersprungen. Korrigiere sie in intrebari.js:",
    bankMore: "…und {n} weitere.",
    errEmpty: "ist leer oder beschädigt.",
    errText: "der Fragetext fehlt.",
    errCategory: "unbekannte Kategorie",
    errDifficulty: "unbekannter Schwierigkeitsgrad",
    errOptions: "braucht genau 4 Antworten.",
    errCorrect: "die richtige Antwort stimmt mit keiner Option genau überein.",
    errNoLanguage: "hat in keiner Sprache einen Text.",
    questionWord: "Frage",
    q1: "Frage", qMany: "Fragen"
  }
};

// limba aleasă acum (dacă e un cod necunoscut, folosim engleza)
function limba() { return TEXTE[setari.limba] ? setari.limba : "en"; }

// un text al interfeței, în limba aleasă; {n}, {p}... se înlocuiesc cu valorile date
function t(cheie, valori) {
  let text = TEXTE[limba()][cheie];
  if (text === undefined) text = TEXTE.en[cheie];
  if (typeof text === "string" && valori) {
    Object.keys(valori).forEach(k => { text = text.split("{" + k + "}").join(valori[k]); });
  }
  return text;
}

// un număr scris ca în limba aleasă: 1,400 (engleză), 1.400 (germană), 1 400 (franceză)
function numar(n) {
  const l = LIMBI.find(x => x.id === limba());
  try { return Number(n).toLocaleString(l.local); } catch (e) { return String(n); }
}

// un procent scris ca în limba aleasă (în franceză și germană: „80 %”)
function procent(p) {
  return p + (limba() === "fr" || limba() === "de" ? " %" : "%");
}

// „1 question” / „10 questions” / „20 de întrebări” / „10 Fragen”
function nrIntrebari(n) {
  const x = TEXTE[limba()];
  const cuvant = (n === 1 || (limba() === "fr" && n === 0)) ? x.q1 : x.qMany;
  // în română se spune „20 de întrebări”, dar „19 întrebări”
  const de = limba() === "ro" && n !== 0 && (n % 100 === 0 || n % 100 >= 20) ? "de " : "";
  return numar(n) + " " + de + cuvant;
}

// numele unui domeniu sau al unei dificultăți, în limba aleasă
function numeDomeniu(d) { return d.nume[limba()] || d.nume.en; }
function numeDif(d) { return d.nume[limba()] || d.nume.en; }


// =========================================================
// 3. FUNCȚII AJUTĂTOARE
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

// 135 de secunde → „2:15”
function timp(secunde) {
  const m = Math.floor(secunde / 60);
  const s = secunde % 60;
  return m + ":" + String(s).padStart(2, "0");
}

// o dată salvată → „18.10.2026, 17:42” (sau „18/10/2026, 17:42”, după limbă)
function data(ms) {
  const d = new Date(ms);
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  let zi;
  try {
    zi = d.toLocaleDateString(LIMBI.find(x => x.id === limba()).local, { day: "2-digit", month: "2-digit", year: "numeric" });
  } catch (e) {
    zi = String(d.getDate()).padStart(2, "0") + "." + String(d.getMonth() + 1).padStart(2, "0") + "." + d.getFullYear();
  }
  return zi + ", " + hh + ":" + mm;
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
// 4. SALVAREA PE CALCULATOR (setări, istoric, recorduri)
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
// 5. VERIFICAREA BAZEI DE ÎNTREBĂRI
// =========================================================
// Fiecare întrebare are câte un bloc de text pentru fiecare limbă (en, ro, fr, de).
// Dacă o limbă lipsește, întrebarea apare în engleză (sau în prima limbă disponibilă).

const BANCA = [];        // aici ajung doar întrebările scrise corect
const PROBLEME = [];     // greșelile găsite, ca să le arătăm pe ecran

// dacă intrebari.js are o greșeală gravă, INTREBARI nu există deloc
const bancaIncarcata = typeof INTREBARI !== "undefined" && Array.isArray(INTREBARI);

// verifică textul unei întrebări într-o singură limbă; întoarce greșeala sau nimic
function verificaText(b) {
  if (!b || typeof b !== "object" || !b.intrebare) return "errText";
  const variante = Array.isArray(b.variante) ? b.variante.map(v => String(v).trim()) : [];
  if (variante.length !== 4) return "errOptions";
  if (!variante.includes(String(b.corect || "").trim())) return "errCorrect";
  return null;
}

if (bancaIncarcata) {
  INTREBARI.forEach(function (q, i) {
    const nr = "#" + (i + 1);
    if (!q || typeof q !== "object") { PROBLEME.push({ nr: nr, cheie: "errEmpty" }); return; }

    const dom = curata(q.domeniu);
    const dif = curata(q.dificultate);
    if (!domeniu(dom) || dom === "mixt") { PROBLEME.push({ nr: nr, cheie: "errCategory", extra: " „" + q.domeniu + "”" }); return; }
    if (!["usor", "mediu", "greu"].includes(dif)) { PROBLEME.push({ nr: nr, cheie: "errDifficulty", extra: " „" + q.dificultate + "”" }); return; }

    // formatul vechi (doar în română, fără blocuri pe limbi) este acceptat în continuare
    const blocuri = q.intrebare ? { ro: q } : q;
    const texte = {};
    LIMBI.forEach(function (l) {
      const b = blocuri[l.id];
      if (b === undefined) return;                       // limba lipsește: nu e o greșeală
      const greseala = verificaText(b);
      if (greseala) { PROBLEME.push({ nr: nr + " [" + l.id.toUpperCase() + "]", cheie: greseala, inceput: b && b.intrebare }); return; }
      texte[l.id] = {
        intrebare: String(b.intrebare),
        variante: b.variante.map(v => String(v).trim()),
        corect: String(b.corect).trim(),
        explicatie: b.explicatie || ""
      };
    });

    if (Object.keys(texte).length === 0) { PROBLEME.push({ nr: nr, cheie: "errNoLanguage" }); return; }
    BANCA.push({ domeniu: dom, dificultate: dif, texte: texte });
  });
}

// textul unei întrebări în limba aleasă (dacă lipsește: engleză, apoi română, apoi orice limbă)
function textIntrebare(q) {
  return q.texte[limba()] || q.texte.en || q.texte.ro || q.texte[Object.keys(q.texte)[0]];
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
    caseta.innerHTML = "<strong>" + sigur(t("bankMissing")) + "</strong>" + sigur(t("bankMissingHint"));
  } else if (PROBLEME.length) {
    const lista = PROBLEME.slice(0, 5).map(function (p) {
      const inceput = p.inceput ? " („" + String(p.inceput).slice(0, 40) + "…”)" : "";
      return "<li>" + sigur(t("questionWord") + " " + p.nr + inceput + ": " + t(p.cheie) + (p.extra || "")) + "</li>";
    }).join("");
    const inPlus = PROBLEME.length > 5 ? "<li>" + sigur(t("bankMore", { n: PROBLEME.length - 5 })) + "</li>" : "";
    caseta.innerHTML = "<strong>" + sigur(t("bankSkipped", { q: nrIntrebari(PROBLEME.length) })) + "</strong><ul>" + lista + inPlus + "</ul>";
  } else {
    caseta.classList.add("hidden");
    return;
  }
  caseta.classList.remove("hidden");
}


// =========================================================
// 6. TRADUCEREA PAGINII
// =========================================================
// Elementele din index.html care au data-i18n="cheie" primesc textul din TEXTE.

function traducePagina() {
  document.documentElement.lang = limba();
  document.documentElement.classList.remove("traducere");   // textul e gata tradus, îl putem arăta
  document.title = t("pageTitle");
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-title]").forEach(el => { el.title = t(el.dataset.i18nTitle); });
  aplicaTema();
  arataProblemeBanca();
}


// =========================================================
// 7. NAVIGAREA ÎNTRE ECRANE
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
// 8. MENIUL, DOMENIILE ȘI DIFICULTĂȚILE
// =========================================================

let domeniuAles = "mixt";   // ținem minte ce domeniu ai ales

function deseneazaMeniul() {
  // iconițele colorate de sub titlu (fără Mixt)
  $("hero-domains").innerHTML = DOMENII.filter(d => d.id !== "mixt").map(d =>
    '<span class="hero-dot" title="' + sigur(numeDomeniu(d)) + '" style="--c1:' + d.c1 + ";--c2:" + d.c2 + '">' + d.icon + "</span>"
  ).join("");

  // cele trei cifre
  $("stat-questions").textContent = numar(BANCA.length);
  $("stat-categories").textContent = DOMENII.filter(d => d.id !== "mixt" && disponibile(d.id, "mixed").length > 0).length;
  $("stat-tests").textContent = numar(istoric.length);
}

function deseneazaDomenii() {
  $("domain-grid").innerHTML = DOMENII.map(function (d) {
    const n = disponibile(d.id, "mixed").length;
    const gol = n === 0;
    const text = d.id === "mixt" ? t("fromAll", { q: nrIntrebari(n) }) : nrIntrebari(n);
    return '<button class="domain-card' + (d.id === "mixt" ? " domain-wide" : "") + '" data-domeniu="' + d.id + '"' +
      ' style="--c1:' + d.c1 + ";--c2:" + d.c2 + '"' + (gol ? " disabled" : "") + ">" +
      (gol ? '<span class="soon">' + sigur(t("comingSoon")) + "</span>" : "") +
      '<span class="domain-icon">' + d.icon + "</span>" +
      '<span class="domain-text"><span class="domain-name">' + sigur(numeDomeniu(d)) + "</span>" +
      '<span class="domain-count">' + sigur(gol ? t("noQuestions") : text) + "</span></span>" +
      "</button>";
  }).join("");
}

function deseneazaDificultati() {
  const dom = domeniu(domeniuAles);

  // iconița și numele domeniului ales, deasupra titlului
  $("diff-header").innerHTML = '<span class="domain-icon">' + dom.icon + "</span><span>" + sigur(numeDomeniu(dom)) + "</span>";
  coloreaza($("diff-header"), dom);

  $("diff-list").innerHTML = DIFICULTATI.map(function (dif) {
    const n = disponibile(domeniuAles, dif.id).length;
    const record = recorduri[domeniuAles + "|" + dif.id];
    const recordText = record ? t("best", { p: record.procent }) : t("notPlayed");
    return '<button class="diff-card diff-' + dif.clasa + '" data-dificultate="' + dif.id + '"' + (n === 0 ? " disabled" : "") + ">" +
      '<span class="diff-icon">' + dif.icon + "</span>" +
      '<span class="diff-name">' + sigur(numeDif(dif)) + "</span>" +
      '<span class="diff-desc">' + sigur(dif.desc[limba()] || dif.desc.en) + "</span>" +
      '<span class="diff-info"><span class="diff-chip">' + sigur(n === 0 ? t("noQuestions") : nrIntrebari(n)) + "</span>" +
      (n > 0 ? '<span class="diff-chip">' + sigur(recordText) + "</span>" : "") + "</span>" +
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
// 9. TESTUL
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
  // luăm primele întrebări din lista amestecată, în limba aleasă, și le amestecăm variantele
  joc.intrebari = lista.slice(0, cate).map(function (q) {
    const text = textIntrebare(q);
    return Object.assign({ domeniu: q.domeniu, dificultate: q.dificultate }, text, { ordine: amesteca(text.variante) });
  });
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

  $("quiz-counter").textContent = t("questionOf", { i: joc.index + 1, n: total });
  $("quiz-domain").textContent = dom.icon + " " + numeDomeniu(dom);
  $("quiz-difficulty").textContent = numeDif(dif);
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
  $("btn-next").textContent = joc.index === total - 1 ? t("finish") : t("next");

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
  let titlu = eCorect ? t("correct") : t("wrong");
  if (eCorect && joc.serie >= 3) titlu += "  " + t("inARow", { n: joc.serie });
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
  intreaba(t("quitTitle"), t("quitText"), t("quit"), t("keepPlaying"), iesiDinTest);
}

function iesiDinTest() {
  clearInterval(joc.ceas);
  deseneazaDificultati();
  arataEcran("screen-difficulty");
}


// =========================================================
// 10. REZULTATUL, REVIEW-UL ȘI ISTORICUL
// =========================================================

// mesajul de la final, în funcție de procent
function mesajFinal(p) {
  if (p === 100) return ["🏆"].concat(t("res100"));
  if (p >= 80)   return ["🌟"].concat(t("res80"));
  if (p >= 60)   return ["👏"].concat(t("res60"));
  if (p >= 40)   return ["📚"].concat(t("res40"));
  return ["💪"].concat(t("res0"));
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
    '<span class="tag tag-domain">' + dom.icon + " " + sigur(numeDomeniu(dom)) + "</span>" +
    '<span class="tag tag-' + dif.clasa + '">' + sigur(numeDif(dif)) + "</span>" +
    '<span class="tag tag-plain">' + sigur(t("percentCorrect", { p: procent })) + "</span>" +
    '<span class="tag tag-plain">⏱ ' + timp(durata) + "</span>";

  // insigna: primul scor, record nou, sau recordul de bătut
  const insigna = $("result-badge");
  insigna.className = "badge";
  if (!vechi) insigna.textContent = t("firstScore");
  else if (eRecord) insigna.textContent = t("newBest", { p: vechi.procent });
  else { insigna.textContent = t("bestInMode", { p: vechi.procent }); insigna.classList.add("badge-plain"); }

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
    const tt = Math.min((acum - inceput) / 900, 1);      // 0.9 secunde
    $("result-points").textContent = Math.round(scor * tt);
    if (tt < 1) requestAnimationFrame(pas);
  }
  requestAnimationFrame(pas);
}

function deseneazaReview() {
  if (joc.greseli.length === 0) {
    $("review-list").innerHTML = '<p class="empty">' + sigur(t("noMistakes")) + "</p>";
    return;
  }
  $("review-list").innerHTML = joc.greseli.map(g =>
    '<div class="review-item">' +
      '<p class="review-q">' + sigur(g.intrebare) + "</p>" +
      '<p class="review-line review-yours">' + sigur(t("yourAnswer") + g.ales) + "</p>" +
      '<p class="review-line review-correct">' + sigur(t("correctAnswer") + g.corect) + "</p>" +
      (g.explicatie ? '<p class="review-expl">' + sigur(g.explicatie) + "</p>" : "") +
    "</div>"
  ).join("");
}

// istoricul domeniului jucat; „ultimul” evidențiază testul tocmai terminat
function deseneazaIstoricul(ultimul) {
  const dom = domeniu(joc.domeniu);
  $("history-title").textContent = t("historyTitle", { d: numeDomeniu(dom) });

  // cele 4 căsuțe cu recorduri
  $("history-best").innerHTML = DIFICULTATI.map(function (dif) {
    const r = recorduri[joc.domeniu + "|" + dif.id];
    return '<div class="best-box best-' + dif.clasa + '"><span>' + sigur(numeDif(dif)) + "</span><strong>" + (r ? procent(r.procent) : "—") + "</strong></div>";
  }).join("");

  // ultimele teste din acest domeniu, cele mai noi primele
  const teste = istoric.filter(x => x.domeniu === joc.domeniu).slice(-RAND_ISTORIC).reverse();
  if (teste.length === 0) {
    $("history-list").innerHTML = '<p class="empty">' + sigur(t("noTests")) + "</p>";
    return;
  }
  $("history-list").innerHTML = teste.map(function (x, k) {
    const dif = dificultate(x.dificultate);
    return '<div class="history-row' + (ultimul && k === 0 ? " latest" : "") + '">' +
      '<span class="tag tag-' + dif.clasa + '">' + sigur(numeDif(dif)) + "</span>" +
      "<div>" +
        '<div class="history-bar"><span style="width:' + x.procent + "%;background:" + culoareProcent(x.procent) + '"></span></div>' +
        '<div class="history-meta">' + sigur(ultimul && k === 0 ? t("justNow") : data(x.data)) + (x.durata ? "  ⏱ " + timp(x.durata) : "") + "</div>" +
      "</div>" +
      '<span class="history-score">' + x.scor + "/" + x.total + "  " + procent(x.procent) + "</span>" +
    "</div>";
  }).join("");
}

// butoanele de pe ecranul de scor
$("btn-again").addEventListener("click", function () { incepeTest(joc.domeniu, joc.dificultate); });
$("btn-menu").addEventListener("click", function () { deseneazaMeniul(); arataEcran("screen-menu"); });

$("btn-clear-history").addEventListener("click", function () {
  const nume = numeDomeniu(domeniu(joc.domeniu));
  intreaba(t("clearTitle"), t("clearText", { d: nume }), t("clear"), t("cancel"), function () {
    istoric = istoric.filter(x => x.domeniu !== joc.domeniu);
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
// 11. FEREASTRA DE CONFIRMARE
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
// 12. SETĂRILE
// =========================================================

// butoanele cu limbile, generate din lista LIMBI
// ecranul cu limbile: câte un buton mare pentru fiecare limbă
$("lang-list").innerHTML = LIMBI.map(l =>
  '<button class="menu-btn lang-btn" data-lang="' + l.id + '" lang="' + l.id + '">' +
    '<span class="lang-code">' + l.id.toUpperCase() + "</span>" +
    '<span class="menu-text"><strong>' + l.nume + "</strong></span>" +
    '<span class="lang-check" aria-hidden="true">✓</span>' +
  "</button>"
).join("");

// pune pe ecran setările salvate
function aplicaSetarile() {
  document.querySelectorAll("#count-group .chip").forEach(c => c.classList.toggle("selected", c.dataset.count === setari.numar));
  document.querySelectorAll("#lang-list .lang-btn").forEach(c => c.classList.toggle("selected", c.dataset.lang === limba()));
  $("lang-current").textContent = LIMBI.find(l => l.id === limba()).nume;
  $("set-dark").checked = setari.dark;
  $("set-music").checked = setari.muzica;
  $("set-effects").checked = setari.efecte;
  $("music-volume").value = setari.volum;
  $("volume-label").textContent = procent(setari.volum);
  aplicaTema();
}

function aplicaTema() {
  document.documentElement.classList.toggle("dark", setari.dark);
  $("btn-theme").textContent = setari.dark ? "☀️" : "🌙";
  $("btn-theme").title = setari.dark ? t("lightModeBtn") : t("darkModeBtn");
  $("btn-theme").setAttribute("aria-label", $("btn-theme").title);
}

// numărul de întrebări per test
$("count-group").addEventListener("click", function (e) {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  setari.numar = chip.dataset.count;
  salveazaSetari();
  aplicaSetarile();
});

// limba: schimbă imediat tot textul de pe ecran
// butonul „Limba” din setări deschide ecranul cu cele 4 limbi
$("btn-language").addEventListener("click", function () { arataEcran("screen-language"); });

// alegi o limbă → toată aplicația se traduce, apoi revii la setări
$("lang-list").addEventListener("click", function (e) {
  const buton = e.target.closest(".lang-btn");
  if (!buton) return;
  setari.limba = buton.dataset.lang;
  salveazaSetari();
  aplicaSetarile();
  traducePagina();
  deseneazaMeniul();
  setTimeout(function () { arataEcran("screen-settings"); }, 250);
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
  $("volume-label").textContent = procent(setari.volum);
  muzica.volume = setari.volum / 100;
  salveazaSetari();
});


// =========================================================
// 13. SUNETELE SCURTE (generate de browser, fără fișiere)
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
    const tt = audio.currentTime;
    if (tip === "corect") {             // două note care urcă: „ding-ding”
      nota(659.25, tt, 0.15);
      nota(987.77, tt + 0.1, 0.3);
    } else if (tip === "gresit") {      // două note joase care coboară
      nota(233.08, tt, 0.18, "triangle", 0.2);
      nota(174.61, tt + 0.14, 0.32, "triangle", 0.2);
    } else if (tip === "final") {       // o mică fanfară
      [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => nota(f, tt + i * 0.12, 0.35));
    }
  } catch (e) {}
}


// =========================================================
// 14. MUZICA DE FUNDAL
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
// 15. TASTATURA
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
// 16. PORNIREA APLICAȚIEI
// =========================================================

aplicaSetarile();
traducePagina();
deseneazaMeniul();
