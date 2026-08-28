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
      "Frontend developer sa master diplomom iz organske hemije, fokusirana na jasne, funkcionalne i pristupačne web interfejse.",
    "hero.cta": "Istraži radove",
    "about.title": "Naučna preciznost u digitalnom svetu",
    "about.description":
      "Kao master organske hemije, navikla sam na analitičku preciznost i razumevanje kompleksnih sistema. Prelazak u IT vidim kao prirodan nastavak svoje radoznalosti: danas, umesto molekula, gradim čist, funkcionalan i pristupačan frontend interfejs.",
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
      "Kompleksne zadatke razlažem na jasne, proverljive korake. Iskustvo iz laboratorijskog rada primenjujem kroz pažnju prema detaljima, validaciju i sistematično rešavanje problema.",
    "methodology.standards.title": "Kvalitet u implementaciji",
    "methodology.standards.description":
      "Gradim semantične, responzivne i pristupačne interfejse uz HTML, CSS i JavaScript. Posebnu pažnju posvećujem jasnoći koda, validaciji unosa i korisnom feedback-u za korisnika.",
    "methodology.growth.title": "Kontinuirani razvoj",
    "methodology.growth.description":
      "Učenje gradim kroz praktične projekte: istražujem, testiram, dokumentujem odluke i postepeno unapređujem način na koji razvijam web aplikacije.",
    "faq.title": "Česta pitanja",
    "faq.first.question":
      "Kako moje iskustvo iz hemije doprinosi radu u frontend razvoju?",
    "faq.first.answer":
      "Laboratorijski rad me je naučio preciznosti, dokumentovanju postupaka i sistematičnom rešavanju problema. Isti pristup primenjujem kada planiram, razvijam i proveravam web interfejse.",
    "faq.second.question": "Na čemu trenutno radim i šta dalje učim?",
    "faq.second.answer":
      "Nastavljam da produbljujem JavaScript kroz praktične projekte, testiranje i rad sa realnim korisničkim scenarijima. Sledeći fokus su React i savremeni frontend alati.",
    "faq.third.question": "Kako pristupam radu u timu?",
    "faq.third.answer":
      "Iskustvo u obrazovanju i mentorstvu razvilo je moje komunikacione i saradničke veštine. Cenim jasnu razmenu informacija, konstruktivan feedback i zajedničko rešavanje problema.",
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
      "Frontend Developer with an MSc in Organic Chemistry, focused on clear, functional, and accessible web interfaces.",
    "hero.cta": "Explore projects",
    "about.title": "Scientific Precision in the Digital World",
    "about.description":
      "As an MSc in Organic Chemistry, I am used to analytical precision and understanding complex systems. I see my move into IT as a natural continuation of my curiosity: today, instead of molecules, I build clean, functional, and accessible frontend interfaces.",
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
      "I break complex tasks into clear, verifiable steps. I apply my laboratory background through attention to detail, validation, and systematic problem-solving.",
    "methodology.standards.title": "Thoughtful Implementation",
    "methodology.standards.description":
      "I build semantic, responsive, and accessible interfaces with HTML, CSS, and JavaScript. I pay close attention to code clarity, input validation, and useful user feedback.",
    "methodology.growth.title": "Continuous Learning",
    "methodology.growth.description":
      "I learn through practical projects: I research, test, document decisions, and steadily improve how I build web applications.",
    "faq.title": "Frequently Asked Questions",
    "faq.first.question":
      "How does my chemistry background support my frontend work?",
    "faq.first.answer":
      "Laboratory work taught me precision, documentation, and systematic problem-solving. I apply the same approach when planning, building, and testing web interfaces.",
    "faq.second.question": "What am I currently working on and learning next?",
    "faq.second.answer":
      "I continue to deepen my JavaScript skills through practical projects, testing, and real user scenarios. My next focus is React and modern frontend tools.",
    "faq.third.question": "How do I approach teamwork?",
    "faq.third.answer":
      "My experience in education and mentoring has developed my communication and collaboration skills. I value clear communication, constructive feedback, and shared problem-solving.",
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
