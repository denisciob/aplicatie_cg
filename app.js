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
// (\u00AD este o cratimă ascunsă: cuvântul lung se desparte acolo doar dacă nu încape pe rând)
const DOMENII = [
  { id: "mixt",                icon: "🎲", c1: "#f472b6", c2: "#7c3aed", nume: { en: "All topics",          ro: "Mixt",                fr: "Tous les thèmes",       de: "Alle Themen" } },
  { id: "istoria-romaniei",    icon: "🏰", c1: "#e0a96d", c2: "#8a4b16", nume: { en: "Romanian history",    ro: "Istoria României",    fr: "Histoire de la Roumanie", de: "Rumä\u00ADnische Geschichte" } },
  { id: "istoria-lumii",       icon: "🏛️", c1: "#fb923c", c2: "#c2410c", nume: { en: "World history",       ro: "Istoria lumii",       fr: "Histoire du monde",     de: "Welt\u00ADgeschichte" } },
  { id: "biologie",            icon: "🧬", c1: "#4ade80", c2: "#15803d", nume: { en: "Biology",             ro: "Biologie",            fr: "Biologie",              de: "Biologie" } },
  { id: "geografie",           icon: "🌍", c1: "#2dd4bf", c2: "#0f766e", nume: { en: "Geography",           ro: "Geografie",           fr: "Géographie",            de: "Geografie" } },
  { id: "aviatie",             icon: "✈️", c1: "#38bdf8", c2: "#1d4ed8", nume: { en: "Aviation",            ro: "Aviație",             fr: "Aviation",              de: "Luftfahrt" } },
  { id: "educatie-financiara", icon: "💰", c1: "#facc15", c2: "#a16207", nume: { en: "Personal finance",    ro: "Educație financiară", fr: "Éducation financière",  de: "Finanz\u00ADwissen" } },
  { id: "socio-politica",      icon: "⚖️", c1: "#c084fc", c2: "#7e22ce", nume: { en: "Society & politics",  ro: "Socio-politică",      fr: "Société et politique",  de: "Gesell\u00ADschaft & Politik" } },
  { id: "nutritie",            icon: "🥗", c1: "#a3e635", c2: "#4d7c0f", nume: { en: "Nutrition",           ro: "Nutriție",            fr: "Nutrition",             de: "Ernährung" } },
  { id: "astronomie",          icon: "🔭", c1: "#fb7185", c2: "#be123c", nume: { en: "Astronomy",           ro: "Astronomie",          fr: "Astronomie",            de: "Astro\u00ADnomie" } },
  { id: "fizica",              icon: "⚛️", c1: "#818cf8", c2: "#4338ca", nume: { en: "Physics",             ro: "Fizică",              fr: "Physique",              de: "Physik" } },
  { id: "chimie",              icon: "🧪", c1: "#e879f9", c2: "#a21caf", nume: { en: "Chemistry",           ro: "Chimie",              fr: "Chimie",                de: "Chemie" } },
  { id: "auto",                icon: "🚗", c1: "#f87171", c2: "#b91c1c", nume: { en: "Cars & engines",      ro: "Mașini și motoare",   fr: "Voitures et moteurs",   de: "Autos & Motoren" } },
  { id: "tehnologie",          icon: "💻", c1: "#94a3b8", c2: "#475569", nume: { en: "Technology & computing", ro: "Tehnologie și informatică", fr: "Technologie et informatique", de: "Technik & Informatik" } }
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
    desc: { en: "All difficulties mixed", ro: "Toate dificultățile la un loc", fr: "Toutes les difficultés mélangées", de: "Alle Schwierigkeitsgrade gemischt" } }
];

// setările cu care pornește aplicația prima dată (limba implicită este engleza)
// sursaMuzica: „implicit” = muzica.mp3 din folder, „proprie” = MP3-ul încărcat de tine
const SETARI_IMPLICITE = { numar: "10", limba: "en", dark: false, muzica: false, volum: 40, efecte: true, sursaMuzica: "implicit" };

const MAX_MP3_MB = 10;          // cât de mare poate fi MP3-ul încărcat de tine (în MB)

const MAX_ISTORIC = 300;        // câte teste păstrăm în istoric, în total
const RAND_ISTORIC = 10;        // câte teste afișăm pe ecranul de scor

// nivelurile: urci odată cu zilele la rând (streak); dacă pierzi streak-ul, revii la primul nivel
// zile = de la câte zile la rând începe nivelul; c1, c2 = culorile iconiței
const NIVELURI = [
  { zile: 0,   icon: "🌱", c1: "#4ade80", c2: "#15803d", nume: { en: "Beginner",     ro: "Începător",    fr: "Débutant",     de: "Anfänger" } },
  { zile: 10,  icon: "📘", c1: "#60a5fa", c2: "#1d4ed8", nume: { en: "Curious",      ro: "Curios",       fr: "Curieux",      de: "Neugierig" } },
  { zile: 25,  icon: "🧭", c1: "#2dd4bf", c2: "#0f766e", nume: { en: "Explorer",     ro: "Explorator",   fr: "Explorateur",  de: "Entdecker" } },
  { zile: 50,  icon: "🎓", c1: "#818cf8", c2: "#4338ca", nume: { en: "Scholar",      ro: "Cărturar",     fr: "Lettré",       de: "Kenner" } },
  { zile: 100, icon: "🦉", c1: "#fbbf24", c2: "#b45309", nume: { en: "Sage",         ro: "Înțelept",     fr: "Sage",         de: "Weiser" } },
  { zile: 200, icon: "📚", c1: "#c084fc", c2: "#7e22ce", nume: { en: "Polymath",     ro: "Polimat",      fr: "Polymathe",    de: "Universal\u00ADgenie" } },
  { zile: 300, icon: "📜", c1: "#fb7185", c2: "#be123c", nume: { en: "Erudite",      ro: "Erudit",       fr: "Érudit",       de: "Gelehrter" } },
  { zile: 500, icon: "👑", c1: "#fde047", c2: "#ca8a04", nume: { en: "Legendary",    ro: "Legendar",     fr: "Légendaire",   de: "Legendär" } }
];

// regulile de joc
const LIMITA_TESTE = 7;         // câte teste poți începe într-o zi cu planul Free (mai important decât inimile)
const LIMITA_PREMIUM = 15;      // câte teste pe zi ai cu Premium (cu Ultra sunt nelimitate)
const PRETURI = { free: 0, premium: 4.99, ultra: 14.99 };     // prețul abonamentelor, în euro pe lună
const MAX_INIMI = 3;            // câte inimi ai
const ORE_INIMA = 2;            // la câte ore primești înapoi o inimă pierdută
const PRAG_INIMA = 50;          // dacă termini un test sub acest procent, pierzi o inimă
const CORECTE_LA_RAND = 1;      // de câte ori răspunzi corect ca o întrebare să iasă din „Repetă greșelile” (o dată e de ajuns)

// „domeniul” testului cu greșeli (nu apare printre cardurile cu materii)
const DOMENIU_GRESELI = { id: "greseli", icon: "🔁", c1: "#fb7185", c2: "#e11d48",
  nume: { en: "Review mistakes", ro: "Repetă greșelile", fr: "Revoir mes erreurs", de: "Fehler wiederholen" } };


// =========================================================
// 2. TEXTELE INTERFEȚEI, ÎN CELE PATRU LIMBI
// =========================================================
// {n}, {p}, {d}... sunt locuri în care aplicația pune un număr sau un nume

const TEXTE = {
  en: {
    pageTitle: "Scienda",
    appTitle: "Scienda",
    sloganRest: ": dare to know.",
    practice: "Practice test",
    practiceSub: "Choose a category and a difficulty",
    settings: "Settings",
    settingsSub: "Questions, language, theme and sound",
    statQuestions: "questions",
    statCategories: "categories",
    statTests: "tests taken",
    back: "Back",
    chooseCategory: "Choose a category",
    chooseCategorySub: "Pick one category, or mix them all.",
    fromAll: "{q} from all categories",
    comingSoon: "Coming soon",
    noQuestions: "No questions yet",
    chooseDifficulty: "Choose difficulty",
    best: "Best: {p}%",
    notPlayed: "Not played yet",
    questionOf: "Question {i} of {n}",
    next: "Next",
    finish: "Finish",
    correct: "✓ Correct!",
    wrong: "✗ Wrong!",
    inARow: "⚡ {n} in a row",
    keyHint: "Keyboard: A–D or 1–4 to answer, Enter for the next question",
    timeTitle: "Time",
    streakTitle: "Correct answers in a row",
    scoreTitle: "Score",
    quitTitle: "Quit this test?",
    quitText: "It counts as a lost test: it uses up one of today's tests and costs you a heart.",
    quit: "Quit",
    keepPlaying: "Keep playing",
    res100: ["Perfect score!", "Flawless. You got every single question right."],
    res80: ["Excellent!", "Great job! You really know your stuff."],
    res60: ["Well done!", "Solid result. A little more practice and you'll ace it."],
    res40: ["Not bad!", "You're getting there. Read the explanations below and try again."],
    res0: ["Keep going!", "Every mistake teaches you something new. Go over the answers and give it another go."],
    percentCorrect: "{p}% correct",
    firstScore: "⭐ Your first score in this mode",
    newBest: "🎉 New personal best! (previous: {p}%)",
    bestInMode: "Best in this mode: {p}%",
    ringOf: "of",
    quizComplete: "Quiz complete!",
    playAgain: "Play again",
    menu: "Menu",
    mistakesShow1: "See your mistake",
    mistakesShowMany: "See your {n} mistakes",
    mistakesHide1: "Hide your mistake",
    mistakesHideMany: "Hide your mistakes",
    noMistakes: "No mistakes this time. Nothing to review! 🎉",
    yourAnswer: "✗ Your answer: ",
    correctAnswer: "✓ Correct answer: ",
    historyTitle: "Your history: {d}",
    bestScores: "Best scores",
    pastTests: "Past tests",
    noTests: "You haven't taken any tests in this category yet.",
    justNow: "Just now",
    clearHistoryBtn: "Clear history for this category",
    clearTitle: "Clear history?",
    clearText: "All saved tests and best scores for {d} will be deleted.",
    clear: "Clear",
    cancel: "Cancel",
    settingsSaved: "Changes are saved automatically.",
    qPerTest: "Questions per test",
    qPerTestSub: "20 with Premium, 30 with Ultra",
    all: "All",
    language: "Language",
    darkMode: "Dark mode",
    darkModeSub: "Easier on the eyes at night",
    lightModeBtn: "Light mode",
    darkModeBtn: "Dark mode",
    music: "Background music",
    musicMissing: "muzica.mp3 was not found in the app folder.",
    volume: "Music volume",
    effects: "Sound effects",
    effectsSub: "Short sounds for correct and wrong answers",
    // logarea și înregistrarea
    tabLogin: "Log in",
    tabRegister: "Create account",
    authLoginSub: "Welcome back! Log in to continue.",
    authRegisterSub: "Create an account to keep your scores.",
    username: "Username",
    password: "Password",
    confirmPassword: "Confirm password",
    rememberMe: "Remember me",
    loginBtn: "Log in",
    registerBtn: "Create account",
    authNote: "Your account is saved only in this browser, on this device.",
    errFields: "Enter your username and password.",
    errUsername: "Usernames must be 3–20 characters long and can contain letters, numbers, dots, hyphens and underscores.",
    errTaken: "This username is already taken on this device.",
    errShortPass: "Your password must be at least 4 characters long.",
    errMismatch: "The two passwords don't match.",
    errNoUser: "There's no account with this username on this device.",
    errWrongPass: "Wrong password. Try again.",
    logOut: "Log out",
    // melodia de fundal
    song: "Song",
    songDefault: "Default",
    songOwn: "My MP3",
    songChange: "Change file",
    songTooBig: "This file is too big. Please choose an MP3 no larger than {n} MB.",
    songNotMp3: "Please choose an MP3 file.",
    songNotSaved: "The song is playing, but this browser couldn't save it. Next time you'll have to choose it again.",
    songBroken: "This file can't be played. Try another MP3.",
    // nivelul, zilele la rând, inimile și testele zilei
    levelLabel: "Level",
    dayStreakTitle: "Days in a row",
    day1: "day", dayMany: "days",
    weekDays: ["M", "T", "W", "T", "F", "S", "S"],
    levelNext: "{z} to go until {l}",
    levelMax: "You've reached the top level! 👑",
    testsToday: "tests left today",
    heartIn: "+1 ❤️ in {t}",
    lifeStrip: "📝 {n}/{m} tests left today · ❤️ {h}/{hm}",
    noHeartsTitle: "No hearts left 💔",
    noHeartsText: "You get a heart back every {o} hours. The next one comes in {t}.",
    noTestsTitle: "That's all for today",
    noTestsText: "You've used all {m} of today's tests. New ones in {t}.",
    okBtn: "OK",
    great: "Great!",
    heartLost: "💔 −1 heart (below {p}%)",
    streakPill: "🔥 {z} in a row",
    heartsPill: "❤️ {h}/{hm}",
    testsPill: "📝 {n}/{m} tests left today",
    levelUpTitle: "New level: {l}!",
    levelUpText: "{z} in a row. Well done! Keep your streak going to stay at this level.",
    streakLostTitle: "Streak lost 💔",
    streakLostText: "You missed a day, so your streak of {z} was reset and your level is back to {l}.",
    unfinishedTitle: "Unfinished test",
    unfinishedText: "You closed the app during a test, so it counted as a lost test: −1 ❤️.",
    // repetă greșelile
    reviewMode: "Review mistakes",
    reviewSub: "{q} to review",
    reviewNone: "No mistakes to review yet",
    reviewLeft: "{q} left to review",
    reviewAllDone: "You've fixed all your mistakes! 🎉",
    // profilul, abonamentul și notificările
    profileOpen: "Your profile",
    levelsTitle: "Levels",
    levelsSub: "Keep your daily streak going to unlock the next level. Miss a day and you start again from the first one.",
    levelCurrent: "Current level",
    levelUnlocked: "Unlocked",
    levelLocked: "Locked",
    levelReq: "{z} in a row",
    levelFromStart: "From day one",
    profileTitle: "Profile",
    nickname: "Nickname",
    nicknameHint: "You still log in with the username {u}.",
    save: "Save",
    saved: "Saved ✓",
    errNickname: "Nicknames must be 2–20 characters long.",
    subscription: "Subscription",
    planFree: "Free",
    planPremium: "Premium",
    planCurrent: "Current plan",
    planChoose: "Select",
    featHearts: "{n} hearts",
    featTests: "{n} tests a day",
    featHeartsInf: "Unlimited hearts",
    featTestsInf: "Unlimited tests",
    notifications: "Notifications",
    notifyDesc: "You'll be notified when your hearts or your daily tests have reset and are full again.",
    notifyBlocked: "Your browser doesn't allow notifications here, so you'll see a message in the app instead.",
    notifyUltra: "Not needed with your plan: your hearts and tests are unlimited.",
    heartsFullTitle: "Your hearts are back! ❤️",
    heartsFullText: "You have all {n} hearts again. Time for a new test!",
    testsFullTitle: "Your daily tests are back! 📝",
    testsFullText: "A new day has begun: you have all {n} tests again.",
    heartBackTitle: "A heart is back! ❤️",
    heartBackText: "You can play again.",
    newDayTitle: "New tests are here! 📝",
    newTestsText: "It's a new day: you have {m} tests again.",
    premiumOnlyTitle: "Premium feature 👑",
    premiumOnlyText: "“Review mistakes” is included in Premium and Ultra. With Premium you also get unlimited hearts and {n} tests a day.",
    seePlans: "See plans",
    premiumOnlySub: "👑 With Premium or Ultra",
    lifeStripPremium: "{p}: unlimited hearts and tests",
    quitTextPremium: "Your answers so far won't be saved.",
    // modul de învățare (Ultra)
    learnMode: "Learning mode",
    learnSub: "Go through every question in a subject",
    learnPickSub: "Choose the subject you want to learn.",
    learnSeen: "{n} of {m} seen",
    showAnswer: "Show answer",
    prev: "Previous",
    goTo: "Go to",
    learnHint: "Keyboard: ← → to move, A–D to answer",
    ultraOnlySub: "💎 Ultra only",
    ultraOnlyTitle: "Ultra feature 💎",
    ultraOnlyText: "Learning mode is part of Ultra: go through all the questions in a subject at your own pace, with answers and explanations. Ultra also includes everything in Premium.",
    planUltra: "Ultra",
    featQ: "{n} questions per test",
    featQUpTo: "Up to {n} questions per test",
    perMonth: "/month",
    countPremiumText: "Tests with 20 questions come with Premium and Ultra. With Ultra you can also pick 30.",
    countUltraText: "Tests with 30 questions are only available with Ultra.",
    quitTextTests: "Your answers so far won't be saved, and the test still counts toward today's tests.",
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
    pageTitle: "Scienda",
    appTitle: "Scienda",
    sloganRest: ": îndrăznește să știi.",
    practice: "Test de antrenament",
    practiceSub: "Alege o materie și o dificultate",
    settings: "Setări",
    settingsSub: "Întrebări, limbă, temă și sunet",
    statQuestions: "întrebări",
    statCategories: "materii disponibile",
    statTests: "teste rezolvate",
    back: "Înapoi",
    chooseCategory: "Alege o materie",
    chooseCategorySub: "Alege o materie sau amestecă-le pe toate.",
    fromAll: "{q} din toate materiile",
    comingSoon: "În curând",
    noQuestions: "Încă nu are întrebări",
    chooseDifficulty: "Alege dificultatea",
    best: "Record {p}%",
    notPlayed: "Încă nejucat",
    questionOf: "Întrebarea {i} din {n}",
    next: "Următoarea",
    finish: "Termină",
    correct: "✓ Corect!",
    wrong: "✗ Greșit!",
    inARow: "⚡ {n} la rând",
    keyHint: "Tastatură: A–D sau 1–4 pentru răspuns, Enter pentru întrebarea următoare",
    timeTitle: "Timp",
    streakTitle: "Răspunsuri corecte la rând",
    scoreTitle: "Scor",
    quitTitle: "Ieși din test?",
    quitText: "Se pune ca test pierdut: se scade din testele de azi și pierzi o inimă.",
    quit: "Ieși",
    keepPlaying: "Continuă",
    res100: ["Scor perfect!", "Impecabil. Ai răspuns corect la toate întrebările."],
    res80: ["Excelent!", "Foarte bine! Chiar te pricepi."],
    res60: ["Bravo!", "Rezultat solid. Mai exersează puțin și iei punctajul maxim."],
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
    mistakesShow1: "Vezi greșeala",
    mistakesShowMany: "Vezi cele {n} greșeli",
    mistakesHide1: "Ascunde greșeala",
    mistakesHideMany: "Ascunde greșelile",
    noMistakes: "Nicio greșeală de data asta. Nimic de revăzut! 🎉",
    yourAnswer: "✗ Răspunsul tău: ",
    correctAnswer: "✓ Răspunsul corect: ",
    historyTitle: "Istoricul tău: {d}",
    bestScores: "Cele mai bune scoruri",
    pastTests: "Teste anterioare",
    noTests: "Încă nu ai rezolvat niciun test la această materie.",
    justNow: "Chiar acum",
    clearHistoryBtn: "Șterge istoricul acestei materii",
    clearTitle: "Ștergi istoricul?",
    clearText: "Toate testele salvate și recordurile pentru {d} vor fi șterse.",
    clear: "Șterge",
    cancel: "Anulează",
    settingsSaved: "Modificările se salvează automat.",
    qPerTest: "Întrebări pe test",
    qPerTestSub: "20 cu Premium, 30 cu Ultra",
    all: "Toate",
    language: "Limba",
    darkMode: "Mod întunecat",
    darkModeSub: "Mai odihnitor pentru ochi seara",
    lightModeBtn: "Mod luminos",
    darkModeBtn: "Mod întunecat",
    music: "Muzică de fundal",
    musicMissing: "Fișierul muzica.mp3 nu a fost găsit în folderul aplicației.",
    volume: "Volumul muzicii",
    effects: "Efecte sonore",
    effectsSub: "Sunete scurte pentru răspunsurile corecte și greșite",
    // logarea și înregistrarea
    tabLogin: "Intră în cont",
    tabRegister: "Cont nou",
    authLoginSub: "Bine ai revenit! Intră în cont ca să continui.",
    authRegisterSub: "Creează-ți un cont ca să îți păstrezi scorurile.",
    username: "Nume de utilizator",
    password: "Parolă",
    confirmPassword: "Scrie parola încă o dată",
    rememberMe: "Ține-mă minte",
    loginBtn: "Intră în cont",
    registerBtn: "Creează contul",
    authNote: "Contul tău este salvat doar în acest browser, pe acest dispozitiv.",
    errFields: "Scrie numele de utilizator și parola.",
    errUsername: "Numele trebuie să aibă între 3 și 20 de caractere: litere, cifre, punct, cratimă sau liniuță jos.",
    errTaken: "Acest nume este deja folosit pe acest dispozitiv.",
    errShortPass: "Parola trebuie să aibă cel puțin 4 caractere.",
    errMismatch: "Cele două parole nu se potrivesc.",
    errNoUser: "Nu există niciun cont cu acest nume pe acest dispozitiv.",
    errWrongPass: "Parolă greșită. Încearcă din nou.",
    logOut: "Ieși din cont",
    // melodia de fundal
    song: "Melodia",
    songDefault: "Implicită",
    songOwn: "MP3-ul meu",
    songChange: "Schimbă fișierul",
    songTooBig: "Fișierul este prea mare. Alege un MP3 de cel mult {n} MB.",
    songNotMp3: "Alege un fișier MP3.",
    songNotSaved: "Melodia se aude acum, dar browserul nu a putut s-o salveze. Data viitoare va trebui s-o alegi din nou.",
    songBroken: "Fișierul nu poate fi redat. Încearcă alt MP3.",
    // nivelul, zilele la rând, inimile și testele zilei
    levelLabel: "Nivel",
    dayStreakTitle: "Zile la rând",
    day1: "zi", dayMany: "zile",
    weekDays: ["L", "M", "M", "J", "V", "S", "D"],
    levelNext: "Mai ai {z} până la {l}",
    levelMax: "Ai ajuns la nivelul maxim! 👑",
    testsToday: "teste rămase azi",
    heartIn: "+1 ❤️ în {t}",
    lifeStrip: "📝 {n}/{m} teste rămase azi · ❤️ {h}/{hm}",
    noHeartsTitle: "Nu mai ai inimi 💔",
    noHeartsText: "Primești înapoi câte o inimă la fiecare {o} ore. Următoarea vine în {t}.",
    noTestsTitle: "Gata pe azi",
    noTestsText: "Ai jucat toate cele {m} teste de azi. Primești teste noi în {t}.",
    okBtn: "Am înțeles",
    great: "Super!",
    heartLost: "💔 −1 inimă (sub {p}%)",
    streakPill: "🔥 {z} la rând",
    heartsPill: "❤️ {h}/{hm}",
    testsPill: "📝 {n}/{m} teste rămase azi",
    levelUpTitle: "Nivel nou: {l}!",
    levelUpText: "{z} la rând. Bravo! Păstrează streak-ul ca să rămâi la acest nivel.",
    streakLostTitle: "Ai pierdut streak-ul 💔",
    streakLostText: "Ai sărit peste o zi, așa că ai pierdut streak-ul de {z}, iar nivelul a revenit la {l}.",
    unfinishedTitle: "Test neterminat",
    unfinishedText: "Ai închis aplicația în timpul unui test, așa că s-a pus ca test pierdut: −1 ❤️.",
    // repetă greșelile
    reviewMode: "Repetă greșelile",
    reviewSub: "{q} de recapitulat",
    reviewNone: "Încă nu ai greșeli de recapitulat",
    reviewLeft: "Mai ai {q} de recapitulat",
    reviewAllDone: "Ai corectat toate greșelile! 🎉",
    // profilul, abonamentul și notificările
    profileOpen: "Profilul tău",
    levelsTitle: "Niveluri",
    levelsSub: "Păstrează streak-ul zilnic ca să deblochezi nivelul următor. Dacă sari peste o zi, o iei de la primul nivel.",
    levelCurrent: "Nivelul actual",
    levelUnlocked: "Deblocat",
    levelLocked: "Blocat",
    levelReq: "{z} la rând",
    levelFromStart: "Din prima zi",
    profileTitle: "Profil",
    nickname: "Nickname",
    nicknameHint: "Te autentifici în continuare cu numele de utilizator {u}.",
    save: "Salvează",
    saved: "Salvat ✓",
    errNickname: "Nickname-ul trebuie să aibă între 2 și 20 de caractere.",
    subscription: "Abonament",
    planFree: "Gratuit",
    planPremium: "Premium",
    planCurrent: "Planul tău",
    planChoose: "Alege",
    featHearts: "{n} inimi",
    featTests: "{n} teste pe zi",
    featHeartsInf: "Inimi nelimitate",
    featTestsInf: "Teste nelimitate",
    notifications: "Notificări",
    notifyDesc: "Vei fi notificat când inimile sau testele zilei s-au resetat și le ai din nou pe toate.",
    notifyBlocked: "Browserul nu permite notificări aici, așa că vei vedea mesajul în aplicație.",
    notifyUltra: "Nu ai nevoie de ele cu planul tău: inimile și testele sunt nelimitate.",
    heartsFullTitle: "Ți s-au refăcut inimile! ❤️",
    heartsFullText: "Ai din nou toate cele {n} inimi. E timpul pentru un test nou!",
    testsFullTitle: "Ți s-au resetat testele zilei! 📝",
    testsFullText: "A început o zi nouă: ai din nou toate cele {n} teste.",
    heartBackTitle: "A revenit o inimă! ❤️",
    heartBackText: "Poți juca din nou.",
    newDayTitle: "Ai teste noi! 📝",
    newTestsText: "E o zi nouă: ai din nou {m} teste.",
    premiumOnlyTitle: "Funcție Premium 👑",
    premiumOnlyText: "„Repetă greșelile” este inclus în Premium și Ultra. Cu Premium ai și inimi nelimitate și {n} teste pe zi.",
    seePlans: "Vezi planurile",
    premiumOnlySub: "👑 Cu Premium sau Ultra",
    lifeStripPremium: "{p}: inimi și teste nelimitate",
    quitTextPremium: "Răspunsurile de până acum nu vor fi salvate.",
    // modul de învățare (Ultra)
    learnMode: "Mod de învățare",
    learnSub: "Parcurge toate întrebările unei materii",
    learnPickSub: "Alege materia pe care vrei s-o înveți.",
    learnSeen: "{n} din {m} parcurse",
    showAnswer: "Arată răspunsul",
    prev: "Anterioara",
    goTo: "Mergi la",
    learnHint: "Tastatură: ← → pentru a naviga, A–D pentru a răspunde",
    ultraOnlySub: "💎 Doar cu Ultra",
    ultraOnlyTitle: "Funcție Ultra 💎",
    ultraOnlyText: "Modul de învățare face parte din Ultra: parcurgi în ritmul tău toate întrebările unei materii, cu răspunsuri și explicații. Ultra include și tot ce oferă Premium.",
    planUltra: "Ultra",
    featQ: "{n} întrebări pe test",
    featQUpTo: "Până la {n} de întrebări pe test",
    perMonth: "/lună",
    countPremiumText: "Testele cu 20 de întrebări sunt disponibile cu Premium și Ultra. Cu Ultra poți alege și 30.",
    countUltraText: "Testele cu 30 de întrebări sunt disponibile doar cu Ultra.",
    quitTextTests: "Răspunsurile de până acum nu vor fi salvate, iar testul se scade din cele de azi.",
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
    pageTitle: "Scienda",
    appTitle: "Scienda",
    sloganRest: "\u00a0: ose savoir.",
    practice: "Test d'entraî\u00ADnement",
    practiceSub: "Choisis une catégorie et une difficulté",
    settings: "Paramètres",
    settingsSub: "Questions, langue, thème et son",
    statQuestions: "questions",
    statCategories: "catégories",
    statTests: "tests réalisés",
    back: "Retour",
    chooseCategory: "Choisis une catégorie",
    chooseCategorySub: "Choisis une matière ou mélange-les toutes.",
    fromAll: "{q} de toutes les catégories",
    comingSoon: "Bientôt",
    noQuestions: "Pas encore de questions",
    chooseDifficulty: "Choisis la difficulté",
    best: "Record : {p} %",
    notPlayed: "Pas encore joué",
    questionOf: "Question {i} sur {n}",
    next: "Suivante",
    finish: "Terminer",
    correct: "✓ Bonne réponse !",
    wrong: "✗ Mauvaise réponse !",
    inARow: "⚡ {n} d'affilée",
    keyHint: "Clavier : A–D ou 1–4 pour répondre, Entrée pour la question suivante",
    timeTitle: "Temps",
    streakTitle: "Bonnes réponses d'affilée",
    scoreTitle: "Score",
    quitTitle: "Quitter ce test ?",
    quitText: "Cela compte comme un test perdu : il est décompté de tes tests du jour et tu perds un cœur.",
    quit: "Quitter",
    keepPlaying: "Continuer",
    res100: ["Score parfait !", "Sans faute. Tu as répondu juste à toutes les questions."],
    res80: ["Excellent !", "Bravo ! Tu connais vraiment ton sujet."],
    res60: ["Bien joué !", "Bon résultat. Encore un peu d'entraînement et ce sera parfait."],
    res40: ["Pas mal !", "Tu es sur la bonne voie. Lis les explications ci-dessous et réessaie."],
    res0: ["Continue !", "Chaque erreur t'apprend quelque chose. Revois les réponses et retente ta chance."],
    percentCorrect: "{p} % de bonnes réponses",
    firstScore: "⭐ Ton premier score dans ce mode",
    newBest: "🎉 Nouveau record ! (ancien : {p} %)",
    bestInMode: "Record dans ce mode : {p} %",
    ringOf: "sur",
    quizComplete: "Quiz terminé !",
    playAgain: "Rejouer",
    menu: "Menu",
    mistakesShow1: "Voir ton erreur",
    mistakesShowMany: "Voir tes {n} erreurs",
    mistakesHide1: "Masquer ton erreur",
    mistakesHideMany: "Masquer tes erreurs",
    noMistakes: "Aucune erreur cette fois. Rien à revoir ! 🎉",
    yourAnswer: "✗ Ta réponse : ",
    correctAnswer: "✓ Bonne réponse : ",
    historyTitle: "Ton historique : {d}",
    bestScores: "Meilleurs scores",
    pastTests: "Tests précédents",
    noTests: "Tu n'as encore fait aucun test dans cette catégorie.",
    justNow: "À l'instant",
    clearHistoryBtn: "Effacer l'historique de cette catégorie",
    clearTitle: "Effacer l'historique ?",
    clearText: "Tous les tests enregistrés et les records pour {d} seront supprimés.",
    clear: "Effacer",
    cancel: "Annuler",
    settingsSaved: "Les modifications sont enregistrées automatiquement.",
    qPerTest: "Questions par test",
    qPerTestSub: "20 avec Premium, 30 avec Ultra",
    all: "Toutes",
    language: "Langue",
    darkMode: "Mode sombre",
    darkModeSub: "Plus doux pour les yeux le soir",
    lightModeBtn: "Mode clair",
    darkModeBtn: "Mode sombre",
    music: "Musique de fond",
    musicMissing: "muzica.mp3 est introuvable dans le dossier de l'application.",
    volume: "Volume de la musique",
    effects: "Effets sonores",
    effectsSub: "Des sons courts pour les bonnes et les mauvaises réponses",
    // logarea și înregistrarea
    tabLogin: "Connexion",
    tabRegister: "Inscription",
    authLoginSub: "Bon retour ! Connecte-toi pour continuer.",
    authRegisterSub: "Crée un compte pour garder tes scores.",
    username: "Nom d'utilisateur",
    password: "Mot de passe",
    confirmPassword: "Confirme ton mot de passe",
    rememberMe: "Se souvenir de moi",
    loginBtn: "Se connecter",
    registerBtn: "Créer mon compte",
    authNote: "Ton compte est enregistré uniquement dans ce navigateur, sur cet appareil.",
    errFields: "Saisis ton nom d'utilisateur et ton mot de passe.",
    errUsername: "Le nom d'utilisateur doit contenir entre 3 et 20 caractères : lettres, chiffres, points, tirets ou tirets bas.",
    errTaken: "Ce nom est déjà utilisé sur cet appareil.",
    errShortPass: "Le mot de passe doit contenir au moins 4 caractères.",
    errMismatch: "Les deux mots de passe ne correspondent pas.",
    errNoUser: "Aucun compte avec ce nom d'utilisateur sur cet appareil.",
    errWrongPass: "Mot de passe incorrect. Réessaie.",
    logOut: "Se déconnecter",
    // melodia de fundal
    song: "Morceau",
    songDefault: "Par défaut",
    songOwn: "Mon MP3",
    songChange: "Changer de fichier",
    songTooBig: "Ce fichier est trop volumineux. Choisis un MP3 de {n} Mo maximum.",
    songNotMp3: "Choisis un fichier MP3.",
    songNotSaved: "Le morceau est lu, mais ce navigateur n'a pas pu l'enregistrer. La prochaine fois, il faudra le choisir à nouveau.",
    songBroken: "Ce fichier ne peut pas être lu. Essaie un autre MP3.",
    // nivelul, zilele la rând, inimile și testele zilei
    levelLabel: "Niveau",
    dayStreakTitle: "Jours d'affilée",
    day1: "jour", dayMany: "jours",
    weekDays: ["L", "M", "M", "J", "V", "S", "D"],
    levelNext: "Encore {z} avant {l}",
    levelMax: "Tu as atteint le niveau maximum ! 👑",
    testsToday: "tests restants aujourd'hui",
    heartIn: "+1 ❤️ dans {t}",
    lifeStrip: "📝 {n}/{m} tests restants aujourd'hui · ❤️ {h}/{hm}",
    noHeartsTitle: "Plus de cœurs 💔",
    noHeartsText: "Un cœur revient toutes les {o} heures. Le prochain arrive dans {t}.",
    noTestsTitle: "C'est tout pour aujourd'hui",
    noTestsText: "Tu as utilisé tes {m} tests du jour. De nouveaux tests arrivent dans {t}.",
    okBtn: "D'accord",
    great: "Génial !",
    heartLost: "💔 −1 cœur (moins de {p} %)",
    streakPill: "🔥 {z} d'affilée",
    heartsPill: "❤️ {h}/{hm}",
    testsPill: "📝 {n}/{m} tests restants aujourd'hui",
    levelUpTitle: "Nouveau niveau : {l} !",
    levelUpText: "{z} d'affilée. Bravo ! Garde ta série pour rester à ce niveau.",
    streakLostTitle: "Série perdue 💔",
    streakLostText: "Tu as manqué un jour : ta série de {z} est remise à zéro et ton niveau revient à {l}.",
    unfinishedTitle: "Test inachevé",
    unfinishedText: "Tu as fermé l'application pendant un test : il compte comme un test perdu, −1 ❤️.",
    // repetă greșelile
    reviewMode: "Revoir mes erreurs",
    reviewSub: "{q} à revoir",
    reviewNone: "Aucune erreur à revoir pour l'instant",
    reviewLeft: "Encore {q} à revoir",
    reviewAllDone: "Toutes les erreurs sont corrigées ! 🎉",
    // profilul, abonamentul și notificările
    profileOpen: "Ton profil",
    levelsTitle: "Niveaux",
    levelsSub: "Garde ta série quotidienne pour débloquer le niveau suivant. Si tu manques un jour, tu repars du premier.",
    levelCurrent: "Niveau actuel",
    levelUnlocked: "Débloqué",
    levelLocked: "Verrouillé",
    levelReq: "{z} d'affilée",
    levelFromStart: "Dès le premier jour",
    profileTitle: "Profil",
    nickname: "Pseudo",
    nicknameHint: "Tu te connectes toujours avec le nom d'utilisateur {u}.",
    save: "Enregistrer",
    saved: "Enregistré ✓",
    errNickname: "Le pseudo doit contenir entre 2 et 20 caractères.",
    subscription: "Abonnement",
    planFree: "Gratuit",
    planPremium: "Premium",
    planCurrent: "Ton offre",
    planChoose: "Choisir",
    featHearts: "{n} cœurs",
    featTests: "{n} tests par jour",
    featHeartsInf: "Cœurs illimités",
    featTestsInf: "Tests illimités",
    notifications: "Notifications",
    notifyDesc: "Tu seras averti quand tes cœurs ou tes tests du jour auront été réinitialisés et seront de nouveau au complet.",
    notifyBlocked: "Ton navigateur n'autorise pas les notifications ici : tu verras le message dans l'application.",
    notifyUltra: "Inutile avec ton offre : tes cœurs et tes tests sont illimités.",
    heartsFullTitle: "Tes cœurs sont revenus ! ❤️",
    heartsFullText: "Tu as de nouveau tes {n} cœurs. C'est l'heure d'un nouveau test !",
    testsFullTitle: "Tes tests du jour sont de retour ! 📝",
    testsFullText: "Une nouvelle journée commence : tu as de nouveau tes {n} tests.",
    heartBackTitle: "Un cœur est revenu ! ❤️",
    heartBackText: "Tu peux rejouer.",
    newDayTitle: "De nouveaux tests ! 📝",
    newTestsText: "C'est un nouveau jour : tu as de nouveau {m} tests.",
    premiumOnlyTitle: "Fonctionnalité Premium 👑",
    premiumOnlyText: "« Revoir mes erreurs » est inclus dans Premium et Ultra. Avec Premium, tu as aussi des cœurs illimités et {n} tests par jour.",
    seePlans: "Voir les offres",
    premiumOnlySub: "👑 Avec Premium ou Ultra",
    lifeStripPremium: "{p} : cœurs et tests illimités",
    quitTextPremium: "Tes réponses jusqu'ici ne seront pas enregistrées.",
    // modul de învățare (Ultra)
    learnMode: "Mode apprentissage",
    learnSub: "Parcours toutes les questions d'une matière",
    learnPickSub: "Choisis la matière que tu veux apprendre.",
    learnSeen: "{n} sur {m} vues",
    showAnswer: "Voir la réponse",
    prev: "Précédente",
    goTo: "Aller à",
    learnHint: "Clavier : ← → pour naviguer, A–D pour répondre",
    ultraOnlySub: "💎 Ultra uniquement",
    ultraOnlyTitle: "Fonctionnalité Ultra 💎",
    ultraOnlyText: "Le mode apprentissage fait partie d'Ultra : tu parcours à ton rythme toutes les questions d'une matière, avec les réponses et les explications. Ultra comprend aussi tout ce qu'offre Premium.",
    planUltra: "Ultra",
    featQ: "{n} questions par test",
    featQUpTo: "Jusqu'à {n} questions par test",
    perMonth: "/mois",
    countPremiumText: "Les tests de 20 questions sont disponibles avec Premium et Ultra. Avec Ultra, tu peux aussi choisir 30.",
    countUltraText: "Les tests de 30 questions sont réservés à Ultra.",
    quitTextTests: "Tes réponses jusqu'ici ne seront pas enregistrées, et le test est quand même décompté de ceux du jour.",
    bankMissing: "Impossible de charger intrebari.js.",
    bankMissingHint: "Vérifie que le fichier se trouve dans le même dossier que index.html et qu'il ne manque aucune virgule, guillemet ou parenthèse.",
    bankSkipped: "{q} ignorée(s). Corrige-les dans intrebari.js :",
    bankMore: "…et {n} autre(s).",
    errEmpty: "est vide ou endommagée.",
    errText: "le texte de la question manque.",
    errCategory: "catégorie inconnue",
    errDifficulty: "difficulté inconnue",
    errOptions: "il faut exactement 4 réponses.",
    errCorrect: "la bonne réponse ne correspond exactement à aucune option.",
    errNoLanguage: "n'a de texte dans aucune langue.",
    questionWord: "Question",
    q1: "question", qMany: "questions"
  },

  de: {
    pageTitle: "Scienda",
    appTitle: "Scienda",
    sloganRest: ": wage zu wissen.",
    practice: "Übungstest",
    practiceSub: "Wähle eine Kategorie und einen Schwierigkeitsgrad",
    settings: "Einstellungen",
    settingsSub: "Fragen, Sprache, Design und Ton",
    statQuestions: "Fragen",
    statCategories: "Kategorien",
    statTests: "absolvierte Tests",
    back: "Zurück",
    chooseCategory: "Wähle eine Kategorie",
    chooseCategorySub: "Wähle ein Fach oder spiel alle gemischt.",
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
    inARow: "⚡ {n} in Folge",
    keyHint: "Tastatur: A–D oder 1–4 zum Antworten, Enter für die nächste Frage",
    timeTitle: "Zeit",
    streakTitle: "Richtige Antworten in Folge",
    scoreTitle: "Punkte",
    quitTitle: "Diesen Test beenden?",
    quitText: "Das zählt als verlorener Test: Er wird von deinen heutigen Tests abgezogen und du verlierst ein Herz.",
    quit: "Beenden",
    keepPlaying: "Weiterspielen",
    res100: ["Volle Punktzahl!", "Fehlerfrei. Du hast jede Frage richtig beantwortet."],
    res80: ["Ausgezeichnet!", "Sehr gut! Du kennst dich wirklich aus."],
    res60: ["Gut gemacht!", "Solides Ergebnis. Mit etwas mehr Übung schaffst du die volle Punktzahl."],
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
    mistakesShow1: "Deinen Fehler ansehen",
    mistakesShowMany: "Deine {n} Fehler ansehen",
    mistakesHide1: "Fehler ausblenden",
    mistakesHideMany: "Fehler ausblenden",
    noMistakes: "Diesmal keine Fehler. Nichts zu wiederholen! 🎉",
    yourAnswer: "✗ Deine Antwort: ",
    correctAnswer: "✓ Richtige Antwort: ",
    historyTitle: "Dein Verlauf: {d}",
    bestScores: "Bestwerte",
    pastTests: "Frühere Tests",
    noTests: "Du hast in dieser Kategorie noch keine Tests gemacht.",
    justNow: "Gerade eben",
    clearHistoryBtn: "Verlauf dieser Kategorie löschen",
    clearTitle: "Verlauf löschen?",
    clearText: "Alle gespeicherten Tests und Bestwerte für {d} werden gelöscht.",
    clear: "Löschen",
    cancel: "Abbrechen",
    settingsSaved: "Änderungen werden automatisch gespeichert.",
    qPerTest: "Fragen pro Test",
    qPerTestSub: "20 mit Premium, 30 mit Ultra",
    all: "Alle",
    language: "Sprache",
    darkMode: "Dunkelmodus",
    darkModeSub: "Angenehmer für die Augen am Abend",
    lightModeBtn: "Heller Modus",
    darkModeBtn: "Dunkelmodus",
    music: "Hintergrundmusik",
    musicMissing: "muzica.mp3 wurde im App-Ordner nicht gefunden.",
    volume: "Musiklautstärke",
    effects: "Soundeffekte",
    effectsSub: "Kurze Töne für richtige und falsche Antworten",
    // logarea și înregistrarea
    tabLogin: "Anmelden",
    tabRegister: "Registrieren",
    authLoginSub: "Willkommen zurück! Melde dich an, um weiterzumachen.",
    authRegisterSub: "Erstelle ein Konto, um deine Ergebnisse zu speichern.",
    username: "Benutzername",
    password: "Passwort",
    confirmPassword: "Passwort wiederholen",
    rememberMe: "Angemeldet bleiben",
    loginBtn: "Anmelden",
    registerBtn: "Konto erstellen",
    authNote: "Dein Konto wird nur in diesem Browser auf diesem Gerät gespeichert.",
    errFields: "Gib deinen Benutzernamen und dein Passwort ein.",
    errUsername: "Der Benutzername muss 3–20 Zeichen lang sein und darf Buchstaben, Ziffern, Punkte, Binde- und Unterstriche enthalten.",
    errTaken: "Dieser Name ist auf diesem Gerät schon vergeben.",
    errShortPass: "Das Passwort muss mindestens 4 Zeichen lang sein.",
    errMismatch: "Die beiden Passwörter stimmen nicht überein.",
    errNoUser: "Auf diesem Gerät gibt es kein Konto mit diesem Namen.",
    errWrongPass: "Falsches Passwort. Versuch es noch einmal.",
    logOut: "Abmelden",
    // melodia de fundal
    song: "Song",
    songDefault: "Standard",
    songOwn: "Eigene MP3",
    songChange: "Datei ändern",
    songTooBig: "Die Datei ist zu groß. Wähle eine MP3 mit höchstens {n} MB.",
    songNotMp3: "Bitte wähle eine MP3-Datei.",
    songNotSaved: "Das Stück läuft, aber dieser Browser konnte es nicht speichern. Beim nächsten Mal musst du es erneut auswählen.",
    songBroken: "Diese Datei kann nicht abgespielt werden. Versuch es mit einer anderen MP3.",
    // nivelul, zilele la rând, inimile și testele zilei
    levelLabel: "Stufe",
    dayStreakTitle: "Tage in Folge",
    day1: "Tag", dayMany: "Tage",
    weekDays: ["M", "D", "M", "D", "F", "S", "S"],
    levelNext: "Noch {z} bis {l}",
    levelMax: "Du hast die höchste Stufe erreicht! 👑",
    testsToday: "Tests heute übrig",
    heartIn: "+1 ❤️ in {t}",
    lifeStrip: "📝 {n}/{m} Tests heute übrig · ❤️ {h}/{hm}",
    noHeartsTitle: "Keine Herzen mehr 💔",
    noHeartsText: "Alle {o} Stunden bekommst du ein Herz zurück. Das nächste kommt in {t}.",
    noTestsTitle: "Das war's für heute",
    noTestsText: "Du hast heute alle {m} Tests gespielt. Neue gibt es in {t}.",
    okBtn: "OK",
    great: "Super!",
    heartLost: "💔 −1 Herz (unter {p} %)",
    streakPill: "🔥 {z} in Folge",
    heartsPill: "❤️ {h}/{hm}",
    testsPill: "📝 {n}/{m} Tests heute übrig",
    levelUpTitle: "Neue Stufe: {l}!",
    levelUpText: "{z} in Folge. Super! Halte deine Serie, um auf dieser Stufe zu bleiben.",
    streakLostTitle: "Serie verloren 💔",
    streakLostText: "Du hast einen Tag verpasst. Deine Serie war {z} lang und beginnt jetzt von vorn; deine Stufe ist wieder {l}.",
    unfinishedTitle: "Test nicht beendet",
    unfinishedText: "Du hast die App während eines Tests geschlossen, daher zählt er als verlorener Test: −1 ❤️.",
    // repetă greșelile
    reviewMode: "Fehler wiederholen",
    reviewSub: "{q} zum Wiederholen",
    reviewNone: "Noch keine Fehler zum Wiederholen",
    reviewLeft: "Noch {q} zum Wiederholen",
    reviewAllDone: "Alle Fehler korrigiert! 🎉",
    // profilul, abonamentul și notificările
    profileOpen: "Dein Profil",
    levelsTitle: "Stufen",
    levelsSub: "Halte deine tägliche Serie, um die nächste Stufe freizuschalten. Verpasst du einen Tag, fängst du wieder bei der ersten an.",
    levelCurrent: "Aktuelle Stufe",
    levelUnlocked: "Freigeschaltet",
    levelLocked: "Gesperrt",
    levelReq: "{z} in Folge",
    levelFromStart: "Ab dem ersten Tag",
    profileTitle: "Profil",
    nickname: "Spitzname",
    nicknameHint: "Du meldest dich weiterhin mit dem Benutzernamen {u} an.",
    save: "Speichern",
    saved: "Gespeichert ✓",
    errNickname: "Der Spitzname muss 2–20 Zeichen lang sein.",
    subscription: "Abo",
    planFree: "Kostenlos",
    planPremium: "Premium",
    planCurrent: "Dein Abo",
    planChoose: "Wählen",
    featHearts: "{n} Herzen",
    featTests: "{n} Tests pro Tag",
    featHeartsInf: "Unbegrenzte Herzen",
    featTestsInf: "Unbegrenzte Tests",
    notifications: "Benachrichtigungen",
    notifyDesc: "Du wirst benachrichtigt, wenn deine Herzen oder Tagestests zurückgesetzt und wieder vollständig sind.",
    notifyBlocked: "Dein Browser erlaubt hier keine Benachrichtigungen, du siehst die Nachricht stattdessen in der App.",
    notifyUltra: "Mit deinem Abo nicht nötig: Herzen und Tests sind unbegrenzt.",
    heartsFullTitle: "Deine Herzen sind zurück! ❤️",
    heartsFullText: "Du hast wieder alle {n} Herzen. Zeit für einen neuen Test!",
    testsFullTitle: "Deine Tagestests sind zurück! 📝",
    testsFullText: "Ein neuer Tag hat begonnen: Du hast wieder alle {n} Tests.",
    heartBackTitle: "Ein Herz ist zurück! ❤️",
    heartBackText: "Du kannst wieder spielen.",
    newDayTitle: "Neue Tests sind da! 📝",
    newTestsText: "Ein neuer Tag: Du hast wieder {m} Tests.",
    premiumOnlyTitle: "Premium-Funktion 👑",
    premiumOnlyText: "„Fehler wiederholen“ ist in Premium und Ultra enthalten. Mit Premium hast du außerdem unbegrenzte Herzen und {n} Tests pro Tag.",
    seePlans: "Abos ansehen",
    premiumOnlySub: "👑 Mit Premium oder Ultra",
    lifeStripPremium: "{p}: unbegrenzte Herzen und Tests",
    quitTextPremium: "Deine bisherigen Antworten werden nicht gespeichert.",
    // modul de învățare (Ultra)
    learnMode: "Lernmodus",
    learnSub: "Alle Fragen eines Fachs durchgehen",
    learnPickSub: "Wähle das Fach, das du lernen möchtest.",
    learnSeen: "{n} von {m} angesehen",
    showAnswer: "Antwort zeigen",
    prev: "Vorherige",
    goTo: "Gehe zu",
    learnHint: "Tastatur: ← → zum Blättern, A–D zum Antworten",
    ultraOnlySub: "💎 Nur mit Ultra",
    ultraOnlyTitle: "Ultra-Funktion 💎",
    ultraOnlyText: "Der Lernmodus gehört zu Ultra: Du gehst in deinem eigenen Tempo alle Fragen eines Fachs durch, mit Antworten und Erklärungen. Ultra enthält außerdem alles aus Premium.",
    planUltra: "Ultra",
    featQ: "{n} Fragen pro Test",
    featQUpTo: "Bis zu {n} Fragen pro Test",
    perMonth: "/Monat",
    countPremiumText: "Tests mit 20 Fragen gibt es mit Premium und Ultra. Mit Ultra kannst du auch 30 wählen.",
    countUltraText: "Tests mit 30 Fragen gibt es nur mit Ultra.",
    quitTextTests: "Deine bisherigen Antworten werden nicht gespeichert, und der Test wird trotzdem von deinen heutigen Tests abgezogen.",
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
  // în franceză, browserul pune un spațiu foarte îngust („1 680”), pe care fontul nu îl are; îl înlocuim cu unul obișnuit
  try { return Number(n).toLocaleString(l.local).replace(/ /g, " "); } catch (e) { return String(n); }
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

// „1 day” / „5 days” / „20 de zile” / „5 Tage”
function nrZile(n) {
  const x = TEXTE[limba()];
  const cuvant = (n === 1 || (limba() === "fr" && n === 0)) ? x.day1 : x.dayMany;
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
function domeniu(id) { return id === "greseli" ? DOMENIU_GRESELI : DOMENII.find(d => d.id === id); }
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
// opțiunea „All” la numărul de întrebări nu mai există: cine o alesese primește 10
if (!["10", "20", "30"].includes(setari.numar)) setari.numar = "10";

// dacă nu ai ales încă tema, o urmăm pe cea a telefonului sau a calculatorului
if (!("dark" in setariSalvate)) {
  const temaPagina = document.documentElement.getAttribute("data-theme");
  setari.dark = temaPagina ? temaPagina === "dark"
    : !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
}
// istoricul și recordurile sunt ale contului logat; se încarcă după logare (vezi 4b)
let istoric = [];       // lista tuturor testelor terminate
let recorduri = {};     // cel mai bun scor pe fiecare domeniu + dificultate

function salveazaSetari() { scrie("quiz-settings", setari); }

// un text simplu salvat (fără JSON), ex. numele contului ținut minte
function citesteText(cheie, unde) {
  try { return (unde || localStorage).getItem(cheie); } catch (e) { return null; }
}
function scrieText(cheie, valoare, unde) {
  try {
    if (valoare === null) (unde || localStorage).removeItem(cheie);
    else (unde || localStorage).setItem(cheie, valoare);
  } catch (e) {}
}


// =========================================================
// 4b. CONTURILE (înregistrare și logare)
// =========================================================
// Conturile se salvează doar în acest browser, pe acest dispozitiv (aplicația nu are server).
// Parola nu se păstrează ca text: păstrăm doar „amprenta” ei (SHA-256), calculată împreună
// cu un cod aleatoriu („sarea”), așa că din salvare nu se poate citi parola.

let conturi = citeste("quiz-users", {});   // ex. { "denis": { nume: "Denis", sare: "...", amprenta: "...", creat: ... } }
let utilizator = null;                       // contul logat acum (numele scris cu litere mici)

// cheia sub care se salvează ceva al contului logat, ex. „quiz-history:denis”
function cheiaContului(nume) { return nume + ":" + utilizator; }

// contul logat, numele afișat (nickname-ul, dacă l-ai ales) și abonamentul
function contul() { return utilizator ? conturi[utilizator] : null; }
function numeAfisat() { const c = contul(); return c ? (c.porecla || c.nume) : ""; }
// Premium și Ultra au inimi și teste nelimitate; doar Ultra are și modul de învățare
function ePremium() { const c = contul(); return !!c && (c.plan === "premium" || c.plan === "ultra"); }
function eUltra() { const c = contul(); return !!c && c.plan === "ultra"; }
function numePlan() { return eUltra() ? "💎 Ultra" : "👑 Premium"; }
// câte teste pe zi îți dă planul (Free 7, Premium 15, Ultra nelimitat)
function limitaTeste() { return eUltra() ? Infinity : ePremium() ? LIMITA_PREMIUM : LIMITA_TESTE; }
// câte întrebări poate avea un test (Free 10, Premium 20, Ultra 30)
function maxIntrebari() { return eUltra() ? 30 : ePremium() ? 20 : 10; }
function numarIntrebari() { return Math.min(Number(setari.numar) || 10, maxIntrebari()); }
function salveazaConturile() { scrie("quiz-users", conturi); }

function incarcaDateleContului() {
  istoric = citeste(cheiaContului("quiz-history"), []);
  recorduri = citeste(cheiaContului("quiz-best"), {});
  greseliDeRecapitulat = citeste(cheiaContului("quiz-mistakes"), {});
  mutaGreselileVechi();
  incarcaViata();
  incarcaSeria();
  inimiAnterioare = null;
  ziAnterioara = null;
}

// curățăm lista de recapitulat: scoatem întrebările deja rezolvate și o regăsim pe cea salvată la o materie redenumită (ex. vechea „Istorie”) după textul întrebării
function mutaGreselileVechi() {
  const chei = new Set(BANCA.map(q => q.cheie));
  let schimbat = false;
  Object.keys(greseliDeRecapitulat).forEach(function (k) {
    // întrebările la care ai răspuns deja corect (cu regula veche, de două ori) ies din listă
    if (greseliDeRecapitulat[k] >= CORECTE_LA_RAND) { delete greseliDeRecapitulat[k]; schimbat = true; return; }
    if (chei.has(k)) return;
    const text = k.slice(k.indexOf("|") + 1);
    const q = BANCA.find(x => x.cheie.slice(x.cheie.indexOf("|") + 1) === text);
    if (!q) return;
    greseliDeRecapitulat[q.cheie] = greseliDeRecapitulat[k];
    delete greseliDeRecapitulat[k];
    schimbat = true;
  });
  if (schimbat) scrie(cheiaContului("quiz-mistakes"), greseliDeRecapitulat);
}

// istoricul jucat înainte să existe conturi trece la primul cont creat
function mutaDateleVechi(id) {
  ["quiz-history", "quiz-best"].forEach(function (nume) {
    const vechi = citesteText(nume);
    if (vechi !== null) { scrieText(nume + ":" + id, vechi); scrieText(nume, null); }
  });
}

// un cod aleatoriu de 32 de caractere (0-9, a-f)
function codAleatoriu() {
  const octeti = new Uint8Array(16);
  try { crypto.getRandomValues(octeti); }
  catch (e) { octeti.forEach(function (x, i) { octeti[i] = Math.floor(Math.random() * 256); }); }
  return Array.from(octeti, x => x.toString(16).padStart(2, "0")).join("");
}

// amprenta SHA-256 a unui text (scrisă aici, ca să meargă offline, din orice folder)
function sha256(text) {
  const rot = (x, n) => (x >>> n) | (x << (32 - n));
  // constantele algoritmului vin din rădăcinile primelor 64 de numere prime
  const prime = [];
  for (let n = 2; prime.length < 64; n++) if (prime.every(p => n % p)) prime.push(n);
  const K = prime.map(p => (Math.cbrt(p) % 1) * 4294967296 | 0);
  const h = prime.slice(0, 8).map(p => (Math.sqrt(p) % 1) * 4294967296 | 0);

  const octeti = Array.from(new TextEncoder().encode(text));
  const biti = octeti.length * 8;
  octeti.push(0x80);
  while (octeti.length % 64 !== 56) octeti.push(0);
  for (let i = 7; i >= 0; i--) octeti.push(i >= 4 ? 0 : (biti >>> (i * 8)) & 255);

  for (let p = 0; p < octeti.length; p += 64) {
    const w = [];
    for (let i = 0; i < 64; i++) {
      if (i < 16) {
        w[i] = (octeti[p + 4 * i] << 24) | (octeti[p + 4 * i + 1] << 16) | (octeti[p + 4 * i + 2] << 8) | octeti[p + 4 * i + 3];
      } else {
        const s0 = rot(w[i - 15], 7) ^ rot(w[i - 15], 18) ^ (w[i - 15] >>> 3);
        const s1 = rot(w[i - 2], 17) ^ rot(w[i - 2], 19) ^ (w[i - 2] >>> 10);
        w[i] = (w[i - 16] + s0 + w[i - 7] + s1) | 0;
      }
    }
    let [a, b, c, d, e, f, g, k] = h;
    for (let i = 0; i < 64; i++) {
      const t1 = (k + (rot(e, 6) ^ rot(e, 11) ^ rot(e, 25)) + ((e & f) ^ (~e & g)) + K[i] + w[i]) | 0;
      const t2 = ((rot(a, 2) ^ rot(a, 13) ^ rot(a, 22)) + ((a & b) ^ (a & c) ^ (b & c))) | 0;
      k = g; g = f; f = e; e = (d + t1) | 0; d = c; c = b; b = a; a = (t1 + t2) | 0;
    }
    [a, b, c, d, e, f, g, k].forEach(function (x, i) { h[i] = (h[i] + x) | 0; });
  }
  return h.map(x => (x >>> 0).toString(16).padStart(8, "0")).join("");
}

function amprenta(cont, parola) { return sha256(cont.sare + ":" + parola); }

// contul ținut minte: cu „Remember me” (rămâne și după ce închizi browserul)
// sau fără (rămâne doar cât timp e deschisă fereastra)
function contSalvat() {
  const id = citesteText("quiz-session") || citesteText("quiz-session", sessionStorage);
  return id && conturi[id] ? id : null;
}

function intraInCont(id, tineMinte) {
  utilizator = id;
  scrieText("quiz-session", tineMinte ? id : null);
  scrieText("quiz-session", tineMinte ? null : id, sessionStorage);
  scrieText("quiz-last-user", id);
  incarcaDateleContului();
  arataContul();
}

function iesiDinCont() {
  utilizator = null;
  inimiAnterioare = null;
  ziAnterioara = null;
  istoric = [];
  recorduri = {};
  greseliDeRecapitulat = {};
  scrieText("quiz-session", null);
  scrieText("quiz-session", null, sessionStorage);
}


// =========================================================
// 4c. ZILELE LA RÂND (STREAK), NIVELUL, INIMILE ȘI TESTELE ZILEI
// =========================================================
// Totul e separat pentru fiecare cont.
// - o zi intră în streak dacă termini cel puțin un test în ziua aceea;
// - dacă sari peste o zi, streak-ul (și deci nivelul) o ia de la zero;
// - ai 3 inimi: pierzi una dacă termini un test sub 50% sau dacă abandonezi testul;
//   o inimă pierdută revine după 2 ore;
// - poți începe cel mult 5 teste pe zi (orice test, indiferent de rezultat).

let greseliDeRecapitulat = {};   // întrebările greșite: { cheie: de câte ori la rând ai răspuns corect de atunci }
let viata = {};                  // { zi, teste, inimi, reincarcareDe, inCurs }
let serie = {};                  // { zile, ultimaZi, jucate: [zilele în care ai terminat un test] }
let seriePierduta = 0;           // câte zile avea streak-ul pierdut (îl anunțăm o singură dată)
let inimiAnterioare = null;      // câte inimi erau acum o secundă (ca să știm când s-au refăcut toate)
let ziAnterioara = null;         // ziua de acum o secundă (ca să știm când începe o zi nouă)
let testeAnterioare = 0;         // câte teste făcuseși în ziua aceea

// ziua ca text: „2026-10-24”
function ziua(d) {
  d = d || new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

// câte zile sunt de la ziua a la ziua b (ambele scrise ca mai sus)
function zileIntre(a, b) {
  const x = String(a).split("-").map(Number);
  const y = String(b).split("-").map(Number);
  return Math.round((new Date(y[0], y[1] - 1, y[2]) - new Date(x[0], x[1] - 1, x[2])) / 86400000);
}

// 5025000 de milisecunde → „1:23:45”
function ceas(ms) {
  const s = Math.max(0, Math.ceil(ms / 1000));
  return Math.floor(s / 3600) + ":" + String(Math.floor(s % 3600 / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
}

// --- streak-ul și nivelul ---

function incarcaSeria() {
  serie = Object.assign({ zile: 0, ultimaZi: "", jucate: [] }, citeste(cheiaContului("quiz-streak"), {}));
  seriePierduta = 0;
  if (serie.zile > 0 && zileLaRand() === 0) {     // ai sărit peste o zi
    seriePierduta = serie.zile;
    serie.zile = 0;
    salveazaSeria();
  }
}

function salveazaSeria() { scrie(cheiaContului("quiz-streak"), serie); }

// streak-ul de acum: contează doar dacă ultima zi jucată a fost azi sau ieri
function zileLaRand() {
  if (!serie.zile || !serie.ultimaZi) return 0;
  return zileIntre(serie.ultimaZi, ziua()) <= 1 ? serie.zile : 0;
}

// la finalul unui test: ziua de azi intră în streak (o singură dată pe zi)
function adaugaZiDeJoc() {
  const azi = ziua();
  if (serie.ultimaZi === azi) return { crescut: false, nivelNou: null };
  const inainte = zileLaRand();
  serie.zile = inainte + 1;
  serie.ultimaZi = azi;
  serie.jucate = serie.jucate.filter(z => zileIntre(z, azi) < 60).concat(azi);   // ținem minte ultimele 2 luni
  salveazaSeria();
  const vechi = nivelPentru(inainte);
  const nou = nivelPentru(serie.zile);
  return { crescut: true, nivelNou: nou > vechi ? nou : null };
}

// al câtelea nivel (0, 1, 2...) corespunde unui număr de zile la rând
function nivelPentru(zile) {
  let n = 0;
  NIVELURI.forEach(function (x, i) { if (zile >= x.zile) n = i; });
  return n;
}

function numeNivel(i) { return NIVELURI[i].icon + " " + (NIVELURI[i].nume[limba()] || NIVELURI[i].nume.en); }

// --- inimile și testele zilei ---

function incarcaViata() {
  viata = Object.assign({ zi: "", teste: 0, inimi: MAX_INIMI, reincarcareDe: null, inCurs: false },
    citeste(cheiaContului("quiz-life"), {}));
  actualizeazaViata();
}

function salveazaViata() { scrie(cheiaContului("quiz-life"), viata); }

// o zi nouă aduce iar testele zilei; la fiecare 2 ore revine o inimă pierdută
function actualizeazaViata() {
  const azi = ziua();
  if (viata.zi !== azi) { viata.zi = azi; viata.teste = 0; }
  const pas = ORE_INIMA * 3600000;
  if (viata.inimi < MAX_INIMI && !viata.reincarcareDe) viata.reincarcareDe = Date.now();
  while (viata.inimi < MAX_INIMI && Date.now() >= viata.reincarcareDe + pas) {
    viata.inimi++;
    viata.reincarcareDe += pas;
  }
  if (viata.inimi >= MAX_INIMI) { viata.inimi = MAX_INIMI; viata.reincarcareDe = null; }
}

function pierdeInima() {
  actualizeazaViata();
  if (viata.inimi > 0) {
    if (viata.inimi === MAX_INIMI) viata.reincarcareDe = Date.now();   // de acum pornește ceasul inimii
    viata.inimi--;
  }
  salveazaViata();
}

function timpPanaLaInima() {
  return viata.reincarcareDe ? viata.reincarcareDe + ORE_INIMA * 3600000 - Date.now() : 0;
}

function timpPanaLaMiezulNoptii() {
  const miezulNoptii = new Date();
  miezulNoptii.setHours(24, 0, 0, 0);
  return miezulNoptii - Date.now();
}

// verifică dacă mai poți începe un test; dacă nu, explică de ce
// (mesajele au un ceas care curge în timp real, secundă cu secundă)
function poateJuca() {
  if (eUltra()) return true;         // Ultra: inimi și teste nelimitate
  actualizeazaViata();
  const m = limitaTeste();
  if (viata.teste >= m) {
    anuntaViu(t("noTestsTitle"), function () {
      actualizeazaViata();
      if (viata.teste < m) return { titlu: t("newDayTitle"), text: t("newTestsText", { m: m }) };
      return { text: t("noTestsText", { m: m, t: ceas(timpPanaLaMiezulNoptii()) }) };
    });
    return false;
  }
  if (!ePremium() && viata.inimi <= 0) {     // Premium: inimile sunt nelimitate
    anuntaViu(t("noHeartsTitle"), function () {
      actualizeazaViata();
      if (viata.inimi > 0) return { titlu: t("heartBackTitle"), text: t("heartBackText") };
      return { text: t("noHeartsText", { o: ORE_INIMA, t: ceas(timpPanaLaInima()) }) };
    });
    return false;
  }
  return true;
}

// imediat după logare: un test lăsat neterminat costă o inimă; un streak pierdut e anunțat
function verificaLaIntrare() {
  if (viata.inCurs) {
    viata.inCurs = false;
    if (ePremium()) salveazaViata();
    else {
      pierdeInima();
      anunta(t("unfinishedTitle"), t("unfinishedText"));
    }
  }
  if (seriePierduta) {
    anunta(t("streakLostTitle"), t("streakLostText", { z: nrZile(seriePierduta), l: numeNivel(0) }));
    seriePierduta = 0;
  }
}

// --- întrebările de recapitulat ---

function intrebariGresite() { return BANCA.filter(q => q.cheie in greseliDeRecapitulat); }

function noteazaRaspunsul(cheie, eCorect) {
  if (!eCorect) greseliDeRecapitulat[cheie] = 0;
  else if (cheie in greseliDeRecapitulat) {
    greseliDeRecapitulat[cheie]++;
    if (greseliDeRecapitulat[cheie] >= CORECTE_LA_RAND) delete greseliDeRecapitulat[cheie];
  }
  scrie(cheiaContului("quiz-mistakes"), greseliDeRecapitulat);
}


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
    if (!domeniu(dom) || dom === "mixt" || dom === "greseli") { PROBLEME.push({ nr: nr, cheie: "errCategory", extra: " „" + q.domeniu + "”" }); return; }
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
    // „cheia” recunoaște întrebarea în lista de greșeli (domeniul + textul ei în română sau engleză)
    const baza = texte.ro || texte.en || texte[Object.keys(texte)[0]];
    BANCA.push({ domeniu: dom, dificultate: dif, texte: texte, cheie: dom + "|" + baza.intrebare.trim() });
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
  document.documentElement.classList.remove("pornire");     // textul e gata tradus, îl putem arăta
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
    if (buton.dataset.go === "screen-learn-pick") deseneazaMateriileDeInvatat();
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

  deseneazaNumarul();     // 20 și 30 de întrebări depind de plan

  // butonul „Mod de învățare”: doar cu Ultra
  $("btn-learn").classList.toggle("ultra-lock", !eUltra());
  $("learn-sub").textContent = eUltra() ? t("learnSub") : t("ultraOnlySub");

  // butonul „Repetă greșelile”: doar cu Premium; arată câte întrebări ai de recapitulat
  const deRecapitulat = intrebariGresite().length;
  $("btn-review").classList.toggle("premium-lock", !ePremium());
  if (!ePremium()) {
    $("review-sub").textContent = t("premiumOnlySub");
    $("btn-review").disabled = false;
  } else {
    $("review-sub").textContent = deRecapitulat ? t("reviewSub", { q: nrIntrebari(deRecapitulat) }) : t("reviewNone");
    $("btn-review").disabled = deRecapitulat === 0;
  }

  deseneazaProgresul();
}

// cardul cu nivelul, zilele la rând, săptămâna, inimile și testele de azi
function deseneazaProgresul() {
  if (!utilizator) return;
  const zile = zileLaRand();
  const i = nivelPentru(zile);
  const nivel = NIVELURI[i];
  const urmator = NIVELURI[i + 1];

  $("level-icon").textContent = nivel.icon;
  $("level-icon").style.setProperty("--c1", nivel.c1);
  $("level-icon").style.setProperty("--c2", nivel.c2);
  $("level-name").textContent = nivel.nume[limba()] || nivel.nume.en;
  $("streak-count").textContent = numar(zile);
  $("streak-label").textContent = zile === 1 ? t("day1") : t("dayMany");
  // flacăra e aprinsă doar dacă ai terminat deja un test azi
  $("streak-pill").classList.toggle("on", serie.ultimaZi === ziua());

  if (urmator) {
    $("level-bar").style.width = ((zile - nivel.zile) / (urmator.zile - nivel.zile) * 100) + "%";
    $("level-next").textContent = t("levelNext", { z: nrZile(urmator.zile - zile), l: numeNivel(i + 1) });
  } else {
    $("level-bar").style.width = "100%";
    $("level-next").textContent = t("levelMax");
  }

  // săptămâna de luni până duminică; bifate zilele în care ai terminat un test
  const azi = new Date();
  const indexAzi = (azi.getDay() + 6) % 7;          // 0 = luni
  $("week-row").innerHTML = t("weekDays").map(function (litera, k) {
    const z = ziua(new Date(azi.getFullYear(), azi.getMonth(), azi.getDate() - indexAzi + k));
    const jucat = serie.jucate.includes(z);
    const clasa = (jucat ? " done" : "") + (k === indexAzi ? " today" : "") + (k > indexAzi ? " future" : "");
    return '<span class="week-day' + clasa + '"><small>' + litera + '</small><span class="dot">' + (jucat ? "✓" : "") + "</span></span>";
  }).join("");

  deseneazaInimile();
  arataContul();
}

// inimile, ceasul până la următoarea inimă și testele rămase azi
function deseneazaInimile() {
  actualizeazaViata();
  if (ePremium()) {                 // Premium și Ultra: inimi nelimitate
    $("hearts").innerHTML = '<span class="heart">❤️</span><span class="inf">∞</span>';
    $("hearts").title = t("featHeartsInf");
    $("heart-timer").textContent = "";
  } else {
    let inimi = "";
    for (let k = 0; k < MAX_INIMI; k++) inimi += '<span class="heart' + (k < viata.inimi ? "" : " empty") + '">❤️</span>';
    $("hearts").innerHTML = inimi;
    $("hearts").title = viata.inimi + "/" + MAX_INIMI;
    $("heart-timer").textContent = viata.inimi < MAX_INIMI ? t("heartIn", { t: ceas(timpPanaLaInima()) }) : "";
  }
  if (eUltra()) {                   // Ultra: teste nelimitate
    $("tests-left").textContent = "∞";
    $("tests-left").classList.remove("zero");
  } else {
    $("tests-left").textContent = testeRamase() + "/" + limitaTeste();
    $("tests-left").classList.toggle("zero", testeRamase() === 0);
  }
}

// câte teste mai poți începe azi
function testeRamase() { return Math.max(0, limitaTeste() - viata.teste); }

// cât timp ești pe meniu, ceasul inimii se actualizează în fiecare secundă
setInterval(function () {
  if (utilizator && ecranActiv() === "screen-menu") deseneazaInimile();
}, 1000);

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

  // ce te costă un test: inimile și testele rămase azi
  actualizeazaViata();
  $("diff-life").textContent = eUltra() ? t("lifeStripPremium", { p: numePlan() })
    : ePremium() ? t("testsPill", { n: testeRamase(), m: limitaTeste() }) + " · ❤️ ∞"
    : t("lifeStrip", { h: viata.inimi, hm: MAX_INIMI, n: testeRamase(), m: limitaTeste() });

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
  if (!poateJuca()) return;          // fără inimi sau fără teste azi, nu mergem mai departe
  deseneazaDomenii();
  arataEcran("screen-domain");
});
$("btn-review").addEventListener("click", function () {
  if (!ePremium()) { cerePremium(); return; }
  incepeTest("greseli", "mixed");
});

// „Repetă greșelile” e o funcție Premium: îți arătăm planurile
function cerePremium(text) {
  intreaba(t("premiumOnlyTitle"), text || t("premiumOnlyText", { n: LIMITA_PREMIUM }), t("seePlans"), t("cancel"), function () {
    deschideProfilul();
    setTimeout(function () { $("plan-list").scrollIntoView({ behavior: "smooth", block: "center" }); }, 300);
  }, "btn-primary");
}
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
  if (dom === "greseli" && !ePremium()) { cerePremium(); return; }
  if (!poateJuca()) return;
  // „Repetă greșelile” ia întrebările greșite din toate materiile
  const lista = amesteca(dom === "greseli" ? intrebariGresite() : disponibile(dom, dif));
  if (lista.length === 0) return;
  const cate = Math.min(numarIntrebari(), lista.length);

  // testul se scade din cele de azi chiar de la început (7 cu Free, 15 cu Premium; cu Ultra nu se numără);
  // „inCurs” rămâne salvat până la final, ca un test abandonat (sau închis) să coste o inimă
  if (!eUltra()) {
    viata.teste++;
    if (!ePremium()) viata.inCurs = true;      // cu Premium nu pierzi inimi
    salveazaViata();
  }

  joc.domeniu = dom;
  joc.dificultate = dif;
  // luăm primele întrebări din lista amestecată, în limba aleasă, și le amestecăm variantele
  joc.intrebari = lista.slice(0, cate).map(function (q) {
    const text = textIntrebare(q);
    return Object.assign({ domeniu: q.domeniu, dificultate: q.dificultate, cheie: q.cheie }, text, { ordine: amesteca(text.variante) });
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
  $("pill-streak").textContent = "⚡ " + joc.serie;
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
  noteazaRaspunsul(q.cheie, eCorect);      // greșelile intră în „Repetă greșelile”

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
  // ieșirea din test contează ca test pierdut, deci întrebăm mereu înainte
  const text = eUltra() ? t("quitTextPremium") : ePremium() ? t("quitTextTests") : t("quitText");
  intreaba(t("quitTitle"), text, t("quit"), t("keepPlaying"), iesiDinTest);
}

function iesiDinTest() {
  clearInterval(joc.ceas);
  viata.inCurs = false;
  if (ePremium()) salveazaViata();
  else pierdeInima();                  // test abandonat = test pierdut
  if (joc.domeniu === "greseli") {
    deseneazaMeniul();
    arataEcran("screen-menu");
  } else {
    deseneazaDificultati();
    arataEcran("screen-difficulty");
  }
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
  const recapitulare = joc.domeniu === "greseli";       // testul „Repetă greșelile” nu are recorduri
  const vechi = recapitulare ? null : recorduri[cheie]; // recordul de dinainte
  const eRecord = !recapitulare && (!vechi || procent > vechi.procent);

  // salvăm recordul nou și testul în istoric
  if (eRecord) recorduri[cheie] = { procent: procent, scor: joc.scor, total: total, data: Date.now() };
  istoric.push({ domeniu: joc.domeniu, dificultate: joc.dificultate, scor: joc.scor, total: total, procent: procent, durata: durata, data: Date.now() });
  if (istoric.length > MAX_ISTORIC) istoric = istoric.slice(-MAX_ISTORIC);   // păstrăm doar cele mai noi
  scrie(cheiaContului("quiz-best"), recorduri);
  scrie(cheiaContului("quiz-history"), istoric);

  // inimile și streak-ul: sub 50% pierzi o inimă; orice test terminat ține streak-ul în viață
  viata.inCurs = false;
  const inimaPierduta = !ePremium() && procent < PRAG_INIMA;
  if (inimaPierduta) pierdeInima();
  else salveazaViata();
  const zi = adaugaZiDeJoc();

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
  const ramase = intrebariGresite().length;
  if (recapitulare) {
    // la „Repetă greșelile”: câte au mai rămas
    insigna.textContent = ramase ? t("reviewLeft", { q: nrIntrebari(ramase) }) : t("reviewAllDone");
    if (ramase) insigna.classList.add("badge-plain");
  }
  else if (!vechi) insigna.textContent = t("firstScore");
  else if (eRecord) insigna.textContent = t("newBest", { p: vechi.procent });
  else { insigna.textContent = t("bestInMode", { p: vechi.procent }); insigna.classList.add("badge-plain"); }

  deseneazaViataLaRezultat(inimaPierduta, zi.crescut);
  umpleCercul(procent, joc.scor);
  deseneazaReview();
  $("history-card").classList.toggle("hidden", recapitulare);
  if (!recapitulare) deseneazaIstoricul(true);
  // „Play again” dispare când nu mai ai greșeli de recapitulat
  $("btn-again").classList.toggle("hidden", recapitulare && ramase === 0);

  arataEcran("screen-result");
  sunet("final");
  if (procent >= 80) confetti();

  // nivel nou? îl sărbătorim după ce se umple cercul cu scorul
  if (zi.nivelNou !== null) {
    setTimeout(function () {
      anunta(t("levelUpTitle", { l: numeNivel(zi.nivelNou) }), t("levelUpText", { z: nrZile(serie.zile) }), t("great"));
      confetti();
    }, 1300);
  }
}

// sub scor: streak-ul, inima pierdută (dacă e cazul), inimile și testele rămase
function deseneazaViataLaRezultat(inimaPierduta, zileCrescute) {
  $("result-life").innerHTML =
    (inimaPierduta ? '<span class="life-pill life-pill-bad">' + sigur(t("heartLost", { p: PRAG_INIMA })) + "</span>" : "") +
    '<span class="life-pill life-pill-streak' + (zileCrescute ? " up" : "") + '">' + sigur(t("streakPill", { z: nrZile(zileLaRand()) })) + "</span>" +
    (eUltra()
      ? '<span class="life-pill">' + sigur(t("lifeStripPremium", { p: numePlan() })) + "</span>"
      : '<span class="life-pill">' + sigur(t("testsPill", { n: testeRamase(), m: limitaTeste() })) + "</span>" +
        '<span class="life-pill">' + (ePremium() ? "❤️ ∞" : sigur(t("heartsPill", { h: viata.inimi, hm: MAX_INIMI }))) + "</span>");
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

// lista de greșeli stă ascunsă sub un buton; se deschide doar dacă apeși pe el
let greseliDeschise = false;

function deseneazaReview() {
  greseliDeschise = false;
  const fara = joc.greseli.length === 0;
  $("btn-show-mistakes").classList.toggle("hidden", fara);
  $("review-list").classList.toggle("hidden", !fara);
  textGreseli();
  if (fara) {
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

// textul butonului: „Vezi cele 7 greșeli” / „Vezi cele 20 de greșeli” / „Ascunde greșelile”
function textGreseli() {
  const n = joc.greseli.length;
  // în română se spune „20 de greșeli”, dar „19 greșeli”
  const nr = numar(n) + (limba() === "ro" && (n % 100 === 0 || n % 100 >= 20) ? " de" : "");
  const cheie = (greseliDeschise ? "mistakesHide" : "mistakesShow") + (n === 1 ? "1" : "Many");
  $("mistakes-toggle-text").textContent = t(cheie, { n: nr });
  $("btn-show-mistakes").setAttribute("aria-expanded", greseliDeschise ? "true" : "false");
  $("btn-show-mistakes").classList.toggle("open", greseliDeschise);
}

$("btn-show-mistakes").addEventListener("click", function () {
  greseliDeschise = !greseliDeschise;
  $("review-list").classList.toggle("hidden", !greseliDeschise);
  textGreseli();
});

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
    scrie(cheiaContului("quiz-history"), istoric);
    scrie(cheiaContului("quiz-best"), recorduri);
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
const anunturiInAsteptare = [];   // mesajele care așteaptă să se închidă fereastra de acum
let textViu = null;               // pentru mesajele cu ceas: funcția care dă textul de acum

// o întrebare cu două butoane (fără textAnulare: un simplu mesaj, cu un singur buton)
function intreaba(titlu, text, textOk, textAnulare, functie, stilOk) {
  textViu = null;
  $("modal-title").textContent = titlu;
  $("modal-text").textContent = text;
  $("modal-ok").textContent = textOk;
  $("modal-ok").className = "btn " + (stilOk || (textAnulare ? "btn-danger-solid" : "btn-primary"));
  $("modal-cancel").textContent = textAnulare || "";
  $("modal-cancel").classList.toggle("hidden", !textAnulare);
  laConfirmare = functie;
  $("modal").classList.remove("hidden");
  (textAnulare ? $("modal-cancel") : $("modal-ok")).focus();
}

// un mesaj (ex. „Nu mai ai inimi”); dacă e deja unul pe ecran, îl arătăm după el
function anunta(titlu, text, textOk) {
  if (!$("modal").classList.contains("hidden")) { anunturiInAsteptare.push([titlu, text, textOk]); return; }
  intreaba(titlu, text, textOk || t("okBtn"), null, null);
}

// un mesaj al cărui text se schimbă singur, în fiecare clipă (ex. ceasul până la următoarea inimă)
function anuntaViu(titlu, functieText) {
  if (!$("modal").classList.contains("hidden")) return;
  intreaba(titlu, "", t("okBtn"), null, null);
  textViu = functieText;
  actualizeazaTextViu();
}

function actualizeazaTextViu() {
  if (!textViu || $("modal").classList.contains("hidden")) return;
  const r = textViu();
  if (r.titlu) $("modal-title").textContent = r.titlu;
  $("modal-text").textContent = r.text;
}
setInterval(actualizeazaTextViu, 500);

function inchideFereastra() {
  $("modal").classList.add("hidden");
  laConfirmare = null;
  textViu = null;
  if (anunturiInAsteptare.length) {
    const urmatorul = anunturiInAsteptare.shift();
    setTimeout(function () { anunta.apply(null, urmatorul); }, 250);
  }
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
// 11b. ECRANUL DE LOGARE ȘI ÎNREGISTRARE
// =========================================================

let modLogare = "login";      // „login” = intri în cont, „register” = îți faci cont nou

// lista de limbi din colțul ecranului
$("auth-lang").innerHTML = LIMBI.map(l => '<option value="' + l.id + '">' + l.nume + "</option>").join("");

function arataLogarea() {
  // dacă nu există încă niciun cont, pornim direct pe „Create account”
  schimbaModul(Object.keys(conturi).length ? "login" : "register");
  // numele ultimului cont folosit e deja scris (parola, niciodată)
  const ultimul = citesteText("quiz-last-user");
  $("auth-user").value = ultimul && conturi[ultimul] ? conturi[ultimul].nume : "";
  $("auth-pass").value = "";
  $("auth-pass2").value = "";
  $("auth-remember").checked = false;
  arataEcran("screen-auth");
}

// trece între „Log in” și „Create account”
function schimbaModul(mod) {
  modLogare = mod;
  const nou = mod === "register";
  document.querySelectorAll(".auth-tab").forEach(f => f.classList.toggle("selected", f.dataset.mod === mod));
  $("field-pass2").classList.toggle("hidden", !nou);
  $("auth-pass").setAttribute("autocomplete", nou ? "new-password" : "current-password");
  $("auth-subtitle").textContent = t(nou ? "authRegisterSub" : "authLoginSub");
  $("auth-submit").textContent = t(nou ? "registerBtn" : "loginBtn");
  arataEroareaLogarii(null);
}

// mesajul roșu de sub formular; câmpul greșit primește chenar roșu
function arataEroareaLogarii(cheie, camp) {
  document.querySelectorAll(".field input").forEach(c => c.classList.remove("invalid"));
  $("auth-error").classList.toggle("hidden", !cheie);
  if (!cheie) return;
  $("auth-error").textContent = t(cheie);
  if (camp) { $(camp).classList.add("invalid"); $(camp).focus(); }
}

document.querySelector(".auth-tabs").addEventListener("click", function (e) {
  const fila = e.target.closest(".auth-tab");
  if (fila) schimbaModul(fila.dataset.mod);
});

// numele: 3–20 caractere, litere (și cu diacritice), cifre, punct, cratimă sau liniuță jos
const NUME_BUN = /^[A-Za-z0-9._\-\u00C0-\u024F]{3,20}$/;

$("auth-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const nume = $("auth-user").value.trim();
  const parola = $("auth-pass").value;
  const id = nume.toLowerCase();

  if (modLogare === "register") {
    if (!NUME_BUN.test(nume)) return arataEroareaLogarii("errUsername", "auth-user");
    if (conturi[id]) return arataEroareaLogarii("errTaken", "auth-user");
    if (parola.length < 4) return arataEroareaLogarii("errShortPass", "auth-pass");
    if (parola !== $("auth-pass2").value) return arataEroareaLogarii("errMismatch", "auth-pass2");
    const primulCont = Object.keys(conturi).length === 0;
    const cont = { nume: nume, sare: codAleatoriu(), creat: Date.now() };
    cont.amprenta = amprenta(cont, parola);
    conturi[id] = cont;
    scrie("quiz-users", conturi);
    if (primulCont) mutaDateleVechi(id);
  } else {
    if (!nume || !parola) return arataEroareaLogarii("errFields", nume ? "auth-pass" : "auth-user");
    const cont = conturi[id];
    if (!cont) return arataEroareaLogarii("errNoUser", "auth-user");
    if (amprenta(cont, parola) !== cont.amprenta) {
      $("auth-pass").value = "";
      return arataEroareaLogarii("errWrongPass", "auth-pass");
    }
  }

  intraInCont(id, $("auth-remember").checked);
  $("auth-pass").value = "";
  $("auth-pass2").value = "";
  deseneazaMeniul();
  arataEcran("screen-menu");
  verificaLaIntrare();
});

// limba se poate schimba și de pe ecranul de logare
$("auth-lang").addEventListener("change", function () {
  setari.limba = this.value;
  salveazaSetari();
  aplicaSetarile();
  traducePagina();
  schimbaModul(modLogare);
});

// pe meniu, sus în stânga: iconița nivelului și numele tău (apasă pe el ca să deschizi profilul)
function arataContul() {
  if (!utilizator) return;
  const nivel = NIVELURI[nivelPentru(zileLaRand())];
  $("user-chip").textContent = nivel.icon + " " + numeAfisat();
}

$("user-chip").addEventListener("click", deschideProfilul);

// „Log out”, jos pe pagina de profil → înapoi la ecranul de logare
$("btn-logout").addEventListener("click", function () {
  iesiDinCont();
  arataLogarea();
});


// =========================================================
// 11c. PROFILUL: NIVELURILE, NICKNAME-UL, ABONAMENTUL, NOTIFICĂRILE
// =========================================================

function deschideProfilul() {
  deseneazaProfilul();
  $("nick-msg").classList.add("hidden");
  arataEcran("screen-profile");
}

function deseneazaProfilul() {
  const c = contul();
  if (!c) return;
  const zile = zileLaRand();
  const i = nivelPentru(zile);
  const nivel = NIVELURI[i];

  // capul paginii
  $("profile-avatar").textContent = nivel.icon;
  $("profile-avatar").style.setProperty("--c1", nivel.c1);
  $("profile-avatar").style.setProperty("--c2", nivel.c2);
  $("profile-name").textContent = numeAfisat();
  $("profile-meta").innerHTML = "@" + sigur(c.nume) +
    (ePremium() ? ' · <span class="premium-badge' + (eUltra() ? " ultra-badge" : "") + '">' + numePlan() + "</span>" : "");
  $("profile-level").textContent = numeNivel(i);
  $("profile-streak").textContent = t("streakPill", { z: nrZile(zile) });

  // nivelurile: cele trecute și cel actual sunt deblocate, celelalte au lacăt
  $("level-grid").innerHTML = NIVELURI.map(function (n, k) {
    const stare = k < i ? "done" : k === i ? "current" : "locked";
    const cerinta = n.zile === 0 ? t("levelFromStart") : t("levelReq", { z: nrZile(n.zile) });
    const eticheta = stare === "current" ? t("levelCurrent") : stare === "done" ? "✓ " + t("levelUnlocked") : "🔒 " + t("levelLocked");
    const bara = k === i + 1
      ? '<span class="level-tile-bar"><span style="width:' + Math.round(zile / n.zile * 100) + '%"></span></span>' : "";
    return '<div class="level-tile ' + stare + '" style="--c1:' + n.c1 + ";--c2:" + n.c2 + '">' +
      '<span class="level-tile-icon">' + n.icon + (stare === "locked" ? '<span class="lock">🔒</span>' : "") + "</span>" +
      "<strong>" + sigur(n.nume[limba()] || n.nume.en) + "</strong>" +
      "<small>" + sigur(cerinta) + "</small>" +
      '<span class="level-tile-tag">' + sigur(eticheta) + "</span>" + bara +
    "</div>";
  }).join("");

  // nickname-ul
  $("nick-input").value = c.porecla || c.nume;
  $("nick-hint").textContent = t("nicknameHint", { u: c.nume });

  deseneazaPlanurile();
  arataNotaNotificari();
}

// un preț scris ca în limba aleasă: „4,99 €” în română, franceză și germană, „€4.99” în engleză
function pret(euro) {
  const suma = euro % 1 ? euro.toFixed(2) : String(euro);
  return limba() === "en" ? "€" + suma : suma.replace(".", ",") + "\u00A0€";
}

// cele trei planuri: Free, Premium (15 teste pe zi) și Ultra (tot din Premium + teste nelimitate și modul de învățare)
function deseneazaPlanurile() {
  const planuri = [
    { id: "free", icon: "🎟️", nume: t("planFree"),
      beneficii: [[true, "📝 " + t("featTests", { n: LIMITA_TESTE })], [true, "❤️ " + t("featHearts", { n: MAX_INIMI })],
                  [true, "🔢 " + t("featQ", { n: 10 })], [false, "🔁 " + t("reviewMode")], [false, "📖 " + t("learnMode")]] },
    { id: "premium", icon: "👑", nume: t("planPremium"),
      beneficii: [[true, "📝 " + t("featTests", { n: LIMITA_PREMIUM })], [true, "❤️ " + t("featHeartsInf")],
                  [true, "🔢 " + t("featQUpTo", { n: 20 })], [true, "🔁 " + t("reviewMode")], [false, "📖 " + t("learnMode")]] },
    { id: "ultra", icon: "💎", nume: t("planUltra"),
      beneficii: [[true, "📝 " + t("featTestsInf")], [true, "❤️ " + t("featHeartsInf")],
                  [true, "🔢 " + t("featQUpTo", { n: 30 })], [true, "🔁 " + t("reviewMode")], [true, "📖 " + t("learnMode")]] }
  ];
  const actual = eUltra() ? "ultra" : ePremium() ? "premium" : "free";
  $("plan-list").innerHTML = planuri.map(function (p) {
    const ales = p.id === actual;
    return '<button class="plan-card ' + p.id + (ales ? " selected" : "") + '" data-plan="' + p.id + '">' +
      '<span class="plan-name">' + p.icon + " " + sigur(p.nume) + "</span>" +
      '<span class="plan-price"><strong>' + pret(PRETURI[p.id]) + "</strong><small>" + sigur(t("perMonth")) + "</small></span>" +
      "<ul>" + p.beneficii.map(b => '<li class="' + (b[0] ? "yes" : "no") + '">' + sigur(b[1]) + "</li>").join("") + "</ul>" +
      '<span class="plan-tag">' + sigur(ales ? t("planCurrent") : t("planChoose")) + "</span>" +
    "</button>";
  }).join("");
}

// alegi un plan
$("plan-list").addEventListener("click", function (e) {
  const card = e.target.closest(".plan-card");
  const c = contul();
  if (!card || !c || (c.plan || "free") === card.dataset.plan) return;
  c.plan = card.dataset.plan;
  salveazaConturile();
  viata.inCurs = false;
  salveazaViata();
  deseneazaProfilul();
  if (ePremium()) confetti();
});

// schimbarea nickname-ului
$("nick-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const c = contul();
  if (!c) return;
  const nou = $("nick-input").value.trim().replace(/\s+/g, " ");
  const mesaj = $("nick-msg");
  mesaj.classList.remove("hidden");
  if (nou.length < 2 || nou.length > 20) {
    mesaj.textContent = t("errNickname");
    mesaj.classList.add("error");
    return;
  }
  c.porecla = nou;
  salveazaConturile();
  mesaj.textContent = t("saved");
  mesaj.classList.remove("error");
  deseneazaProfilul();
  arataContul();
});

// --- notificarea „ți s-au refăcut toate inimile” ---

function notificariPermise() {
  return "Notification" in window && Notification.permission === "granted";
}

// textul mic de lângă comutator
function arataNotaNotificari() {
  const c = contul();
  if (!c) return;
  $("set-notify").checked = !!c.notificari;
  $("set-notify").disabled = eUltra();
  let nota = t("notifyDesc");
  if (eUltra()) nota = t("notifyUltra");
  else if (c.notificari && (!("Notification" in window) || Notification.permission === "denied")) {
    nota += " " + t("notifyBlocked");
  }
  $("notify-note").textContent = nota;
}

$("set-notify").addEventListener("change", function () {
  const c = contul();
  if (!c) return;
  c.notificari = this.checked;
  salveazaConturile();
  // prima dată, browserul te întreabă dacă aplicația are voie să trimită notificări
  if (c.notificari && "Notification" in window && Notification.permission === "default") {
    try {
      const raspuns = Notification.requestPermission(arataNotaNotificari);
      if (raspuns && raspuns.then) raspuns.then(arataNotaNotificari, arataNotaNotificari);
    } catch (e) {}
  }
  arataNotaNotificari();
});

// „cheia” e "inimi" sau "teste": alege titlul și textul potrivit
function anuntaRefacerea(cheie) {
  const titlu = t(cheie === "inimi" ? "heartsFullTitle" : "testsFullTitle");
  const text = cheie === "inimi" ? t("heartsFullText", { n: MAX_INIMI }) : t("testsFullText", { n: limitaTeste() });
  // dacă aplicația e într-un tab din fundal: notificare a sistemului (dacă browserul o permite)
  if (document.hidden && notificariPermise()) {
    try { new Notification(titlu, { body: text }); return; } catch (e) {}
  }
  // în timpul unui test nu te întrerupem: mesajul apare după ce termini
  if (ecranActiv() === "screen-quiz") { setTimeout(function () { anuntaRefacerea(cheie); }, 3000); return; }
  anunta(titlu, text);
}

// în fiecare secundă: s-au refăcut toate inimile? a început o zi nouă, cu testele resetate?
// (inimile contează doar la contul gratuit, testele la gratuit și Premium; Ultra are totul nelimitat)
setInterval(function () {
  if (!utilizator || eUltra()) { inimiAnterioare = null; ziAnterioara = null; return; }
  actualizeazaViata();
  const inimiRefacute = !ePremium() && inimiAnterioare !== null && inimiAnterioare < MAX_INIMI && viata.inimi >= MAX_INIMI;
  const testeResetate = ziAnterioara !== null && ziAnterioara !== viata.zi && testeAnterioare > 0;
  if (inimiRefacute || testeResetate) {
    salveazaViata();
    if (contul().notificari) {
      if (testeResetate) anuntaRefacerea("teste");
      // dacă s-au întâmplat amândouă deodată, al doilea mesaj vine puțin mai târziu
      if (inimiRefacute) setTimeout(function () { anuntaRefacerea("inimi"); }, testeResetate ? 4000 : 0);
    }
  }
  inimiAnterioare = ePremium() ? null : viata.inimi;
  ziAnterioara = viata.zi;
  testeAnterioare = viata.teste;
}, 1000);


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
  deseneazaNumarul();
  document.querySelectorAll("#lang-list .lang-btn").forEach(c => c.classList.toggle("selected", c.dataset.lang === limba()));
  $("lang-current").textContent = LIMBI.find(l => l.id === limba()).nume;
  $("set-dark").checked = setari.dark;
  $("auth-lang").value = limba();
  $("set-music").checked = setari.muzica;
  $("set-effects").checked = setari.efecte;
  $("music-volume").value = setari.volum;
  $("volume-label").textContent = procent(setari.volum);
  aplicaStareaMuzicii();
  aplicaTema();
}

function aplicaTema() {
  document.documentElement.classList.toggle("dark", setari.dark);
  $("btn-theme").textContent = setari.dark ? "☀️" : "🌙";
  $("btn-theme").title = setari.dark ? t("lightModeBtn") : t("darkModeBtn");
  $("btn-theme").setAttribute("aria-label", $("btn-theme").title);
}

// numărul de întrebări per test: 10 pentru toți, 20 cu Premium, 30 cu Ultra
function deseneazaNumarul() {
  const ales = String(numarIntrebari());
  document.querySelectorAll("#count-group .chip").forEach(function (c) {
    c.classList.toggle("selected", c.dataset.count === ales);
    c.classList.toggle("lock-premium", c.dataset.count === "20" && !ePremium());
    c.classList.toggle("lock-ultra", c.dataset.count === "30" && !eUltra());
  });
}

$("count-group").addEventListener("click", function (e) {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  if (chip.classList.contains("lock-premium")) { cerePremium(t("countPremiumText")); return; }
  if (chip.classList.contains("lock-ultra")) { cereUltra(t("countUltraText")); return; }
  setari.numar = chip.dataset.count;
  salveazaSetari();
  deseneazaNumarul();
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
  deseneazaProfilul();
  deseneazaMateriileDeInvatat();
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
  aplicaStareaMuzicii();
  if (setari.muzica) pornesteMuzica();
  else muzica.pause();
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

let muzicaLipsa = false;      // devine true dacă nu există fișierul muzica.mp3
let melodieProprie = null;    // MP3-ul ales de tine: { nume, date }
let adresaProprie = null;     // adresa temporară prin care playerul citește MP3-ul tău
let notaMuzica = null;        // mesajul roșu de sub „Song” (ex. fișier prea mare)

// MP3-ul tău e prea mare pentru salvarea obișnuită, așa că stă în „baza de date” a browserului (IndexedDB)
function bazaDeDate() {
  return new Promise(function (ok, gresit) {
    try {
      const cerere = indexedDB.open("quiz-fisiere", 1);
      cerere.onupgradeneeded = function () { cerere.result.createObjectStore("fisiere"); };
      cerere.onsuccess = function () { ok(cerere.result); };
      cerere.onerror = function () { gresit(cerere.error); };
    } catch (e) { gresit(e); }
  });
}

function salveazaInBrowser(cheie, valoare) {
  return bazaDeDate().then(db => new Promise(function (ok, gresit) {
    const tx = db.transaction("fisiere", "readwrite");
    tx.objectStore("fisiere").put(valoare, cheie);
    tx.oncomplete = function () { db.close(); ok(); };
    tx.onerror = tx.onabort = function () { db.close(); gresit(tx.error); };
  }));
}

function citesteDinBrowser(cheie) {
  return bazaDeDate().then(db => new Promise(function (ok, gresit) {
    const cerere = db.transaction("fisiere", "readonly").objectStore("fisiere").get(cheie);
    cerere.onsuccess = function () { db.close(); ok(cerere.result); };
    cerere.onerror = function () { db.close(); gresit(cerere.error); };
  }));
}

// ce melodie cântă de fapt: a ta, dacă ai ales-o și există, altfel muzica.mp3
function sursaActiva() {
  return setari.sursaMuzica === "proprie" && melodieProprie ? "proprie" : "implicit";
}

// pune în player fișierul potrivit (doar dacă s-a schimbat)
function alegeSursa() {
  if (sursaActiva() === "proprie") {
    if (!adresaProprie) adresaProprie = URL.createObjectURL(new Blob([melodieProprie.date], { type: "audio/mpeg" }));
    if (muzica.getAttribute("src") !== adresaProprie) muzica.src = adresaProprie;
  } else if (muzica.getAttribute("src") !== "muzica.mp3") {
    muzica.src = "muzica.mp3";
  }
}

// rândurile „Song” și „Music volume”: estompate și blocate cât timp muzica e oprită
function aplicaStareaMuzicii() {
  const pornita = setari.muzica;
  document.querySelectorAll(".music-dep").forEach(r => r.classList.toggle("disabled", !pornita));
  $("music-volume").disabled = !pornita;
  document.querySelectorAll("#song-group .chip").forEach(function (c) {
    c.disabled = !pornita;
    c.classList.toggle("selected", c.dataset.sursa === sursaActiva());
  });
  // sub „Song”: numele MP3-ului tău și butonul de schimbare
  const aMea = sursaActiva() === "proprie";
  $("song-info").innerHTML = aMea
    ? "🎵 " + sigur(melodieProprie.nume) + ' · <button type="button" id="song-change" class="link-btn"' +
      (pornita ? "" : " disabled") + ">" + sigur(t("songChange")) + "</button>"
    : "";
  $("song-info").classList.toggle("hidden", !aMea);
  arataNotaMuzica();
}

// mesajul roșu: o problemă cu fișierul tău sau lipsa lui muzica.mp3
function arataNotaMuzica() {
  let cheie = notaMuzica;
  if (!cheie && setari.muzica && sursaActiva() === "implicit" && muzicaLipsa) cheie = "musicMissing";
  $("music-note").textContent = cheie ? t(cheie, { n: MAX_MP3_MB }) : "";
  $("music-note").classList.toggle("hidden", !cheie);
}

muzica.addEventListener("error", function () {
  if (!muzica.getAttribute("src")) return;
  if (muzica.getAttribute("src") === "muzica.mp3") muzicaLipsa = true;
  else notaMuzica = "songBroken";
  arataNotaMuzica();
});

function pornesteMuzica() {
  arataNotaMuzica();
  if (!setari.muzica) return;
  alegeSursa();
  muzica.volume = setari.volum / 100;
  const pornire = muzica.play();
  if (pornire) pornire.catch(function (err) {
    if (err.name !== "NotSupportedError") return;
    if (sursaActiva() === "implicit") muzicaLipsa = true;
    else notaMuzica = "songBroken";
    arataNotaMuzica();
  });
}

// click pe „Default” sau „My MP3”
$("song-group").addEventListener("click", function (e) {
  const chip = e.target.closest(".chip");
  if (!chip || !setari.muzica) return;
  // dacă n-ai ales încă un MP3, „My MP3” deschide întâi fereastra de alegere a fișierului
  if (chip.dataset.sursa === "proprie" && !melodieProprie) { $("song-file").click(); return; }
  setari.sursaMuzica = chip.dataset.sursa;
  notaMuzica = null;
  salveazaSetari();
  aplicaStareaMuzicii();
  pornesteMuzica();
});

// „Change file” de sub numele melodiei tale
$("song-info").addEventListener("click", function (e) {
  if (e.target.closest("#song-change")) $("song-file").click();
});

// citește fișierul ales, ca șir de octeți
function citesteFisierul(fisier) {
  return new Promise(function (ok, gresit) {
    const cititor = new FileReader();
    cititor.onload = function () { ok(cititor.result); };
    cititor.onerror = function () { gresit(cititor.error); };
    cititor.readAsArrayBuffer(fisier);
  });
}

// ai ales un fișier: verificăm că e MP3 și nu e prea mare, apoi îl folosim și îl salvăm
$("song-file").addEventListener("change", function () {
  const fisier = this.files && this.files[0];
  this.value = "";                 // ca să poți alege din nou același fișier
  if (!fisier) return;
  const eMp3 = /\.mp3$/i.test(fisier.name) || fisier.type === "audio/mpeg" || fisier.type === "audio/mp3";
  if (!eMp3) { notaMuzica = "songNotMp3"; arataNotaMuzica(); return; }
  if (fisier.size > MAX_MP3_MB * 1024 * 1024) { notaMuzica = "songTooBig"; arataNotaMuzica(); return; }

  citesteFisierul(fisier).then(function (date) {
    const melodie = { nume: fisier.name, date: date };
    folosesteMelodia(melodie);
    salveazaInBrowser("melodie", melodie).catch(function () {
      notaMuzica = "songNotSaved";
      arataNotaMuzica();
    });
  }).catch(function () { notaMuzica = "songBroken"; arataNotaMuzica(); });
});

function folosesteMelodia(melodie) {
  melodieProprie = melodie;
  if (adresaProprie) { URL.revokeObjectURL(adresaProprie); adresaProprie = null; }
  setari.sursaMuzica = "proprie";
  notaMuzica = null;
  salveazaSetari();
  alegeSursa();
  aplicaStareaMuzicii();
  pornesteMuzica();
}

// la pornire: dacă ai ales MP3-ul tău, îl citim din browser
if (setari.sursaMuzica === "proprie") {
  citesteDinBrowser("melodie").then(function (m) {
    if (m && m.date) melodieProprie = m;
  }).catch(function () {}).then(function () {
    const canta = !muzica.paused;
    alegeSursa();
    aplicaStareaMuzicii();
    if (canta) pornesteMuzica();
  });
} else {
  alegeSursa();
}

// browserele nu lasă muzica să pornească singură, așa că o pornim la primul click sau tastă
document.addEventListener("pointerdown", pornesteMuzica, { once: true });
document.addEventListener("keydown", pornesteMuzica, { once: true });


// =========================================================
// 14b. MODUL DE ÎNVĂȚARE (Ultra)
// =========================================================
// Parcurgi toate întrebările unei materii, una câte una, fără scor, fără timp, fără inimi.
// Apeși pe o variantă ca să vezi dacă ai avut dreptate, sau „Arată răspunsul”.
// Aplicația ține minte unde ai rămas și ce întrebări ai parcurs, la fiecare materie.

const studiu = { domeniu: "", filtru: "toate", lista: [], index: 0, gata: false };
let progresInvatare = {};   // { domeniu: { poz: { toate: 0, usor: 0, ... }, vazute: { cheie: 1 } } }

function incarcaInvatarea() { progresInvatare = citeste(cheiaContului("quiz-learn"), {}); }
function salveazaInvatarea() { scrie(cheiaContului("quiz-learn"), progresInvatare); }
function progresMaterie(dom) {
  if (!progresInvatare[dom]) progresInvatare[dom] = { poz: {}, vazute: {} };
  return progresInvatare[dom];
}

// variantele unei întrebări, amestecate mereu la fel (ca să nu fie corect mereu „A”,
// dar să le găsești în aceeași ordine când revii la întrebare)
function ordineFixa(variante, cheie) {
  let h = 2166136261;
  for (let k = 0; k < cheie.length; k++) { h ^= cheie.charCodeAt(k); h = Math.imul(h, 16777619); }
  const v = variante.slice();
  for (let i = v.length - 1; i > 0; i--) {
    h = Math.imul(h ^ (h >>> 15), 2246822507) ^ Math.imul(h ^ (h >>> 13), 3266489909);
    const j = (h >>> 0) % (i + 1);
    const x = v[i]; v[i] = v[j]; v[j] = x;
  }
  return v;
}

// întrebările unei materii, în ordinea din intrebari.js (întâi ușoare, apoi medii și grele)
function intrebariDeInvatat(dom, filtru) {
  return BANCA.filter(q => q.domeniu === dom && (filtru === "toate" || q.dificultate === filtru));
}

$("btn-learn").addEventListener("click", function () {
  if (!eUltra()) { cereUltra(); return; }
  deseneazaMateriileDeInvatat();
  arataEcran("screen-learn-pick");
});

function cereUltra(text) {
  intreaba(t("ultraOnlyTitle"), text || t("ultraOnlyText"), t("seePlans"), t("cancel"), function () {
    deschideProfilul();
    setTimeout(function () { $("plan-list").scrollIntoView({ behavior: "smooth", block: "center" }); }, 300);
  }, "btn-primary");
}

// cardurile materiilor, fiecare cu câte întrebări ai parcurs
function deseneazaMateriileDeInvatat() {
  if (!utilizator) return;
  incarcaInvatarea();
  $("learn-grid").innerHTML = DOMENII.filter(d => d.id !== "mixt").map(function (d) {
    const toate = intrebariDeInvatat(d.id, "toate");
    const vazute = toate.filter(q => progresMaterie(d.id).vazute[q.cheie]).length;
    const procentVazut = toate.length ? Math.round(vazute / toate.length * 100) : 0;
    return '<button class="domain-card" data-domeniu="' + d.id + '" style="--c1:' + d.c1 + ";--c2:" + d.c2 + '"' + (toate.length ? "" : " disabled") + ">" +
      '<span class="domain-icon">' + d.icon + "</span>" +
      '<span class="domain-text"><span class="domain-name">' + sigur(numeDomeniu(d)) + "</span>" +
      '<span class="domain-count">' + sigur(t("learnSeen", { n: numar(vazute), m: numar(toate.length) })) + "</span>" +
      '<span class="learn-progress"><span style="width:' + procentVazut + '%"></span></span></span>' +
    "</button>";
  }).join("");
}

$("learn-grid").addEventListener("click", function (e) {
  const card = e.target.closest(".domain-card");
  if (!card || card.disabled) return;
  incepeInvatarea(card.dataset.domeniu, "toate");
});

// pornește (sau continuă de unde ai rămas) o materie, cu un anumit filtru de dificultate
function incepeInvatarea(dom, filtru) {
  studiu.domeniu = dom;
  studiu.filtru = filtru;
  studiu.lista = intrebariDeInvatat(dom, filtru);
  const poz = progresMaterie(dom).poz[filtru] || 0;
  studiu.index = Math.min(poz, Math.max(studiu.lista.length - 1, 0));
  coloreaza($("screen-learn"), domeniu(dom));
  const d = domeniu(dom);
  $("learn-domain").textContent = d.icon + " " + numeDomeniu(d);

  // filtrul: Toate / Ușor / Mediu / Greu
  $("learn-filter").innerHTML = [["toate", t("all")]].concat(
    DIFICULTATI.filter(x => x.id !== "mixed").map(x => [x.id, numeDif(x)])
  ).map(f => '<button class="chip' + (f[0] === filtru ? " selected" : "") + '" data-filtru="' + f[0] + '">' + sigur(f[1]) + "</button>").join("");

  arataEcran("screen-learn");
  arataIntrebareaDeInvatat();
}

$("learn-filter").addEventListener("click", function (e) {
  const chip = e.target.closest(".chip");
  if (chip && chip.dataset.filtru !== studiu.filtru) incepeInvatarea(studiu.domeniu, chip.dataset.filtru);
});

function arataIntrebareaDeInvatat() {
  const n = studiu.lista.length;
  const q = studiu.lista[studiu.index];
  if (!q) return;
  const text = textIntrebare(q);
  const dif = dificultate(q.dificultate);
  studiu.gata = false;
  studiu.variante = ordineFixa(text.variante, q.cheie);

  $("learn-counter").textContent = t("questionOf", { i: studiu.index + 1, n: n });
  $("learn-difficulty").textContent = numeDif(dif);
  $("learn-difficulty").className = "tag tag-" + dif.clasa;
  $("learn-question").textContent = text.intrebare;
  $("learn-bar").style.width = ((studiu.index + 1) / n * 100) + "%";
  $("learn-answers").className = "answers";
  $("learn-answers").innerHTML = studiu.variante.map((v, i) =>
    '<button class="answer" data-i="' + i + '"><span class="letter">' + "ABCD"[i] + "</span><span>" + sigur(v) + "</span></button>"
  ).join("");
  $("learn-feedback").className = "feedback";
  $("learn-prev").disabled = studiu.index === 0;
  $("learn-next").disabled = studiu.index >= n - 1;
  $("learn-show").disabled = false;
  $("learn-goto").max = n;
  $("learn-goto").value = "";
  $("learn-goto").placeholder = studiu.index + 1;
  arataCateAiParcurs();

  // ținem minte unde ai rămas
  progresMaterie(studiu.domeniu).poz[studiu.filtru] = studiu.index;
  salveazaInvatarea();
  animatie($("learn-card"), "enter");
}

function arataCateAiParcurs() {
  const vazute = studiu.lista.filter(q => progresMaterie(studiu.domeniu).vazute[q.cheie]).length;
  $("learn-seen").textContent = t("learnSeen", { n: numar(vazute), m: numar(studiu.lista.length) });
}

// ai ales o variantă (ales = -1 înseamnă „Arată răspunsul”)
function raspundeLaInvatare(ales) {
  if (studiu.gata) return;
  studiu.gata = true;
  const q = studiu.lista[studiu.index];
  const text = textIntrebare(q);
  const corect = studiu.variante.indexOf(text.corect);
  $("learn-answers").querySelectorAll(".answer").forEach(function (b, k) {
    if (k === corect) b.classList.add("correct");
    else if (k === ales) b.classList.add("wrong");
  });
  $("learn-answers").classList.add("locked");
  const bine = ales === corect || ales === -1;
  $("learn-feedback").className = "feedback show " + (bine ? "feedback-correct" : "feedback-wrong");
  $("learn-feedback-title").textContent = ales === -1 ? t("correctAnswer") + text.corect : (bine ? t("correct") : t("wrong"));
  $("learn-feedback-text").textContent = text.explicatie;
  $("learn-feedback-text").classList.toggle("hidden", !text.explicatie);
  $("learn-show").disabled = true;
  if (ales >= 0) sunet(bine ? "corect" : "gresit");

  progresMaterie(studiu.domeniu).vazute[q.cheie] = 1;
  salveazaInvatarea();
  arataCateAiParcurs();
}

function mergiLaIntrebarea(i) {
  if (i < 0 || i >= studiu.lista.length || i === studiu.index) return;
  studiu.index = i;
  arataIntrebareaDeInvatat();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

$("learn-answers").addEventListener("click", function (e) {
  const b = e.target.closest(".answer");
  if (b) raspundeLaInvatare(Number(b.dataset.i));
});
$("learn-show").addEventListener("click", function () { raspundeLaInvatare(-1); });
$("learn-prev").addEventListener("click", function () { mergiLaIntrebarea(studiu.index - 1); });
$("learn-next").addEventListener("click", function () { mergiLaIntrebarea(studiu.index + 1); });
$("learn-goto").addEventListener("change", function () {
  const nr = parseInt(this.value, 10);
  if (nr >= 1 && nr <= studiu.lista.length) mergiLaIntrebarea(nr - 1);
  this.value = "";
});

// tastatura: ← → pentru navigare, A–D sau 1–4 pentru răspuns, Enter pentru următoarea
function tasteInvatare(e) {
  if (e.target && e.target.tagName === "INPUT") return;
  let i = ["1", "2", "3", "4"].indexOf(e.key);
  if (i === -1) i = ["a", "b", "c", "d"].indexOf(e.key.toLowerCase());
  if (i !== -1) raspundeLaInvatare(i);
  else if (e.key === "ArrowLeft") mergiLaIntrebarea(studiu.index - 1);
  else if (e.key === "ArrowRight" || e.key === "Enter") { e.preventDefault(); mergiLaIntrebarea(studiu.index + 1); }
}


// =========================================================
// 15. TASTATURA
// =========================================================

document.addEventListener("keydown", function (e) {
  // cât timp e deschisă fereastra de confirmare, doar Escape o închide
  if (!$("modal").classList.contains("hidden")) {
    if (e.key === "Escape") inchideFereastra();
    return;
  }
  if (e.ctrlKey || e.altKey || e.metaKey) return;
  if (ecranActiv() === "screen-learn") { tasteInvatare(e); return; }
  if (ecranActiv() !== "screen-quiz") return;

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

// ești deja logat (cu „Remember me”, sau în aceeași fereastră)? atunci intri direct în aplicație
const contPornire = contSalvat();
if (contPornire) {
  utilizator = contPornire;
  scrieText("quiz-last-user", contPornire);
  incarcaDateleContului();
  arataContul();
} else {
  arataLogarea();
}

traducePagina();
deseneazaMeniul();
if (contPornire) verificaLaIntrare();
