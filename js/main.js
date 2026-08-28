"use strict";

const translations = {
  sr: {
    "meta.description":
      "Ivana Tatić - Master organske hemije i Frontend Developer. Portfolio sa naučnim web aplikacijama i modernim JavaScript rešenjima.",
    "meta.title": "Ivana Tatić | Master organske hemije i Frontend Developer",
    "brand.logoAlt": "Ivana Tatić atom logo",
    "nav.about": "O meni",
    "nav.projects": "Projekti",
    "nav.methodology": "Metodologija",
    "nav.faq": "Česta pitanja",
    "nav.cv": "CV",
    "language.label": "Izbor jezika",
    "hero.title": "Od laboratorije do ",
    "hero.titleAccent": "čistog koda",
    "hero.description":
      "Master organske hemije sa fokusom na frontend razvoj i analitički pristup rešavanju problema.",
    "hero.cta": "Pogledaj radove",
    "about.title": "Naučna preciznost u digitalnom svetu",
    "about.description":
      "Kao master organske hemije, navikla sam na analitičku preciznost i dešifrovanje kompleksnih sistema. Prelazak u IT vidim kao prirodnu evoluciju moje radoznalosti: danas, umesto molekula, strukturiram čist i funkcionalan kod kao Frontend Developer fokusiran na besprekorno korisničko iskustvo.",
    "about.achievementOne.rank": "1. mesto - državno takmičenje",
    "about.achievementOne.title": "Lančana reakcija",
    "about.achievementOne.description": "Mentorski rad sa učenicima gimnazije.",
    "about.achievementTwo.rank": "2. mesto - državno takmičenje",
    "about.achievementTwo.title": "Heroji budućnosti",
    "about.achievementTwo.description":
      "Inovativni pristup rešavanju problema.",
    "about.imageAlt": "Ivana Tatić",
    "projects.title": "Istaknuti projekti",
    "projects.label.description": "Opis:",
    "projects.label.tech": "Tehnologije:",
    "projects.label.features": "Funkcionalnosti:",
    "projects.motivator.category": "Web aplikacija",
    "projects.motivator.imageAlt": "Prikaz aplikacije Moj Motivator",
    "projects.motivator.description":
      "Aplikacija za dnevni fokus i inspirativne poruke, sa mogućnošću kreiranja sopstvenih poruka i čuvanja omiljenih.",
    "projects.motivator.tech":
      "HTML, CSS, JavaScript, Jest, LocalStorage, Lucide Icons.",
    "projects.motivator.features":
      "Generator poruka, CRUD za lične poruke, favoriti, svetla i tamna tema, toast povratne informacije i podrška za pristupačnost.",
    "projects.supplement.category": "Web aplikacija / zdravlje",
    "projects.supplement.imageAlt": "Prikaz aplikacije Supplement Tracker",
    "projects.supplement.description":
      "Aplikacija za praćenje suplemenata i hidratacije, sa podacima odvojenim po prijavljenom korisniku.",
    "projects.supplement.tech":
      "HTML, CSS, JavaScript, Firebase Authentication, LocalStorage, OpenFoodFacts API, Node test runner.",
    "projects.supplement.features":
      "Email/password prijava, CRUD suplemenata, hydration tracker, browser podsetnici, srpski/engleski interfejs, API pretraga i in-app obrada grešaka.",
    "projects.labcalc.category": "Web aplikacija / laboratorijski alati",
    "projects.labcalc.imageAlt": "Prikaz aplikacije LabCalc",
    "projects.labcalc.description":
      "Kalkulator za laboratorijske proračune koji objedinjuje najčešće formule pri pripremi rastvora.",
    "projects.labcalc.tech": "HTML, CSS, JavaScript, Jest.",
    "projects.labcalc.features":
      "Proračuni molarnosti, masenog procenta i razblaženja, konverzije jedinica, istorija proračuna, preset vrednosti, validacija, pristupačni tabovi i toast obaveštenja.",
    "methodology.title": "Metodologija i pristup",
    "methodology.analytical.title": "Analitički pristup",
    "methodology.analytical.description":
      "Kao master organske hemije, prenosim laboratorijsku disciplinu u kod. Svaki problem razlažem na manje, rešive komponente uz maksimalnu preciznost.",
    "methodology.standards.title": "Moderni standardi",
    "methodology.standards.description":
      "Koristim Scrimba i Kampster metodologiju: semantički HTML, napredni CSS (Flexbox/Grid) i čistu logiku JavaScript-a.",
    "methodology.growth.title": "Kontinuirani razvoj",
    "methodology.growth.description":
      "U IT svetu, kao i u nauci, učenje nikada ne prestaje. Trenutno produbljujem znanje JavaScript-a kroz napredne kurseve.",
    "faq.title": "Česta pitanja",
    "faq.first.question": "Kako 18 godina hemije pomaže u kucanju koda?",
    "faq.first.answer":
      "Struktura, disciplina i sposobnost da satima rešavam kompleksne probleme bez odustajanja. Rad u laboratoriji i programiranje dele istu osnovu: precizno praćenje protokola i analitičko rešavanje problema.",
    "faq.second.question": "Koji je tvoj sledeći korak u učenju?",
    "faq.second.answer":
      "Nakon utvrđivanja osnova JavaScript-a, planiram prelazak na React framework i dublje izučavanje Sass-a, kako bih dodatno optimizovala proces stilizovanja.",
    "faq.third.question": "Da li si spremna za rad u timu?",
    "faq.third.answer":
      "Kroz rad u obrazovanju i mentorstvo, razvila sam visok nivo komunikacije i timskog duha. Verujem da je razmena znanja ključna za uspeh svakog projekta.",
    "footer.role": "Master organske hemije - Frontend Developer",
    "footer.contact": "Kontakt",
  },
  en: {
    "meta.description":
      "Ivana Tatić - MSc in Organic Chemistry and Frontend Developer. Portfolio featuring scientific web applications and modern JavaScript solutions.",
    "meta.title": "Ivana Tatić | MSc in Organic Chemistry & Frontend Developer",
    "brand.logoAlt": "Ivana Tatić atom logo",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.methodology": "Approach",
    "nav.faq": "FAQ",
    "nav.cv": "CV",
    "language.label": "Language selection",
    "hero.title": "From laboratory work to ",
    "hero.titleAccent": "clean code",
    "hero.description":
      "MSc in Organic Chemistry focused on frontend development and analytical problem-solving.",
    "hero.cta": "View projects",
    "about.title": "Scientific Precision in the Digital World",
    "about.description":
      "As an MSc in Organic Chemistry, I am accustomed to analytical precision and untangling complex systems. I see my move into IT as a natural evolution of my curiosity: today, instead of molecules, I structure clean, functional code as a Frontend Developer focused on a seamless user experience.",
    "about.achievementOne.rank": "1st place - national competition",
    "about.achievementOne.title": "Chain Reaction",
    "about.achievementOne.description":
      "Mentoring work with grammar school students.",
    "about.achievementTwo.rank": "2nd place - national competition",
    "about.achievementTwo.title": "Heroes of the Future",
    "about.achievementTwo.description":
      "An innovative approach to problem-solving.",
    "about.imageAlt": "Ivana Tatić",
    "projects.title": "Featured Projects",
    "projects.label.description": "Description:",
    "projects.label.tech": "Tech stack:",
    "projects.label.features": "Key features:",
    "projects.motivator.category": "Web application",
    "projects.motivator.imageAlt": "Moj Motivator application preview",
    "projects.motivator.description":
      "An app for daily focus and inspirational messages, with custom message creation and saved favourites.",
    "projects.motivator.tech":
      "HTML, CSS, JavaScript, Jest, LocalStorage, Lucide Icons.",
    "projects.motivator.features":
      "Message generator, custom message CRUD, favourites, light and dark theme, toast feedback, and accessibility support.",
    "projects.supplement.category": "Web application / health",
    "projects.supplement.imageAlt": "Supplement Tracker application preview",
    "projects.supplement.description":
      "An application for tracking supplements and hydration, with data separated for each signed-in user.",
    "projects.supplement.tech":
      "HTML, CSS, JavaScript, Firebase Authentication, LocalStorage, OpenFoodFacts API, Node test runner.",
    "projects.supplement.features":
      "Email/password sign-in, supplement CRUD, hydration tracker, browser reminders, Serbian/English interface, API search, and in-app error handling.",
    "projects.labcalc.category": "Web application / laboratory tools",
    "projects.labcalc.imageAlt": "LabCalc application preview",
    "projects.labcalc.description":
      "A laboratory calculator that brings together common formulas used when preparing solutions.",
    "projects.labcalc.tech": "HTML, CSS, JavaScript, Jest.",
    "projects.labcalc.features":
      "Molarity, mass percentage, and dilution calculations; unit conversions; calculation history; presets; validation; accessible tabs; and toast notifications.",
    "methodology.title": "Methodology and Approach",
    "methodology.analytical.title": "Analytical Approach",
    "methodology.analytical.description":
      "As an MSc in Organic Chemistry, I transfer laboratory discipline into code. I break every problem into smaller, solvable components with maximum precision.",
    "methodology.standards.title": "Modern Standards",
    "methodology.standards.description":
      "I use the Scrimba and Kampster learning approach: semantic HTML, advanced CSS with Flexbox and Grid, and clean JavaScript logic.",
    "methodology.growth.title": "Continuous Learning",
    "methodology.growth.description":
      "In IT, as in science, learning never stops. I am currently deepening my JavaScript knowledge through advanced courses.",
    "faq.title": "Frequently Asked Questions",
    "faq.first.question": "How do 18 years of chemistry help with coding?",
    "faq.first.answer":
      "Structure, discipline, and the ability to work through complex problems for hours without giving up. Laboratory work and programming share the same foundation: following protocols precisely and solving problems analytically.",
    "faq.second.question": "What is your next learning step?",
    "faq.second.answer":
      "After consolidating my JavaScript foundations, I plan to move on to React and study Sass more deeply to further improve my styling workflow.",
    "faq.third.question": "Are you ready to work in a team?",
    "faq.third.answer":
      "Through my work in education and mentoring, I have developed strong communication and teamwork skills. I believe that sharing knowledge is central to every project's success.",
    "footer.role": "MSc in Organic Chemistry - Frontend Developer",
    "footer.contact": "Contact",
  },
};

const languageButtons = document.querySelectorAll("[data-language]");
const currentYear = document.querySelector("#current-year");

const setLanguage = (language) => {
  if (!translations[language]) {
    return;
  }

  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translations[language][element.dataset.i18n];
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.alt = translations[language][element.dataset.i18nAlt];
  });

  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    element.content = translations[language][element.dataset.i18nContent];
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute(
      "aria-label",
      translations[language][element.dataset.i18nAriaLabel],
    );
  });

  languageButtons.forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.language === language),
    );
  });

  localStorage.setItem("portfolio-language", language);
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

currentYear.textContent = new Date().getFullYear();

const savedLanguage = localStorage.getItem("portfolio-language");
setLanguage(savedLanguage || document.documentElement.lang);

/**
 * Toggles the visibility of project cards.
 * Implements an "Accordion" effect where only one project remains open at a time.
 * @param {HTMLElement} headerElement - The header element of the clicked project.
 */
const toggleProject = (buttonElement) => {
  // Select the parent project article element
  const currentItem = buttonElement.parentElement;

  // Check if the clicked project is already expanded
  const isActive = currentItem.classList.contains("active");

  // Retrieve all project items to reset their state
  const allItems = document.querySelectorAll(".project-item");

  // Close all open projects before toggling the new one
  allItems.forEach((item) => {
    item.classList.remove("active");
    item
      .querySelector(".project-header")
      .setAttribute("aria-expanded", "false");
  });

  // If the clicked project was not active, expand it
  if (!isActive) {
    currentItem.classList.add("active");
    buttonElement.setAttribute("aria-expanded", "true");
  }
};

// Application initialization log
console.log(
  "Portfolio ready! The fusion of Chemistry and Code has successfully loaded. 🧪💻",
);
