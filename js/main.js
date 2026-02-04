/**
 * Toggles the visibility of project cards.
 * Implements an "Accordion" effect where only one project remains open at a time.
 * @param {HTMLElement} headerElement - The header element of the clicked project.
 */
const toggleProject = (headerElement) => {
  // Select the parent project article element
  const currentItem = headerElement.parentElement;

  // Check if the clicked project is already expanded
  const isActive = currentItem.classList.contains("active");

  // Retrieve all project items to reset their state
  const allItems = document.querySelectorAll(".project-item");

  // Close all open projects before toggling the new one
  allItems.forEach((item) => {
    item.classList.remove("active");
  });

  // If the clicked project was not active, expand it
  if (!isActive) {
    currentItem.classList.add("active");
  }
};

// Application initialization log
console.log(
  "Portfolio ready! The fusion of Chemistry and Code has successfully loaded. 🧪💻",
);
