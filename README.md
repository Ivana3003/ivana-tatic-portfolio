# Ivana Tatic | Frontend Developer Portfolio

A responsive personal portfolio that presents my transition from organic chemistry to frontend development. It highlights practical projects, an analytical approach to problem-solving, and a focus on clear, functional, and accessible web interfaces.

## Links

- [Live portfolio](https://ivana-tatic-portfolio.netlify.app/)
- [GitHub repository](https://github.com/Ivana3003/ivana-tatic-portfolio)
- [Curriculum Vitae](./assets/Ivana-Tatic-CV.pdf)

## Features

- Serbian and English interface with a saved language preference in `localStorage`
- Responsive layouts for mobile, tablet, and desktop screens
- Keyboard-accessible project accordion with ARIA expanded states
- Visible keyboard focus styles and semantic HTML structure
- Lazy-loaded project previews hosted locally in `images/projects/`
- Dynamic footer year and secure external links

## Tech Stack

- HTML5
- CSS3: custom properties, Flexbox, Grid, responsive media queries
- Vanilla JavaScript: DOM updates, i18n, `localStorage`, and accessible accordion behavior
- Git and GitHub
- Netlify deployment

## Featured Projects

### [Supplement Tracker](https://it-supplement-tracker.netlify.app/)

[GitHub repository](https://github.com/Ivana3003/supplement-tracker)

A supplement and hydration tracking application with data separated for each signed-in user.

- **Stack:** HTML, CSS, JavaScript, Firebase Authentication, LocalStorage, OpenFoodFacts API, Node test runner
- **Highlights:** Email/password sign-in, supplement CRUD, hydration tracker, browser reminders, Serbian/English interface, API search, and in-app error handling

### [LabCalc](https://it-lab-calc.netlify.app/)

[GitHub repository](https://github.com/Ivana3003/lab-calc)

A laboratory calculator that brings together common formulas used when preparing solutions.

- **Stack:** HTML, CSS, JavaScript, Jest
- **Highlights:** Molarity, mass percentage, and dilution calculations; unit conversions; calculation history; presets; validation; accessible tabs; and toast notifications

### [Moj Motivator](https://it-moj-motivator.netlify.app/)

[GitHub repository](https://github.com/Ivana3003/moj-motivator)

An application for daily focus and inspirational messages, with custom message creation and saved favorites.

- **Stack:** HTML, CSS, JavaScript, Jest, LocalStorage, Lucide Icons
- **Highlights:** Message generator, custom message CRUD, favorites, light and dark theme, toast feedback, and accessibility support

## Approach

My background in organic chemistry shapes how I work with frontend code: I break complex tasks into verifiable steps, pay attention to details, validate inputs, and document decisions. I continue learning through practical projects, testing, and iterative improvement.

## Selected Achievements

- Mentored grammar school students on the "Chain Reaction" project, awarded first place at a national competition
- Contributed to the "Heroes of the Future" project, awarded second place at a national competition

## Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Ivana3003/ivana-tatic-portfolio.git
   ```

2. Open the project folder in VS Code.
3. Start `index.html` with the Live Server extension, or open it directly in a browser.

## Project Structure

```text
.
|-- assets/
|   `-- Ivana-Tatic-CV.pdf
|-- css/
|   `-- style.css
|-- images/
|   |-- projects/
|   |   |-- lab-calc.png
|   |   |-- moj-motivator.png
|   |   `-- supplement-tracker.png
|   |-- atom.png
|   `-- ivana-tatic.jpg
|-- js/
|   `-- main.js
|-- index.html
`-- README.md
```

## Deployment

The portfolio is deployed on [Netlify](https://www.netlify.com/). Pushes to the production branch can be configured to trigger a new deployment.
