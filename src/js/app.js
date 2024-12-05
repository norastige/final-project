// Selecte elementene vi trenger å nå fra HTML
const toggleMenuButton = document.querySelector(".navbar__toggle-button");
const navbarLinksContainer = document.querySelector(".navbar__links");
const links = document.querySelectorAll(".navbar__link");
const titleContainers = document.querySelectorAll(
  ".accordion__title-container"
);
const descriptionContainers = document.querySelectorAll(
  ".accordion__description-container"
);

//
toggleMenuButton.addEventListener("click", () => {
  navbarLinksContainer.classList.toggle("navbar__links-active");
});

// Add event listeners to each link when it is clicked

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    links.forEach((link) => link.classList.remove("navbar__link-active"));
    e.currentTarget.classList.add("navbar__link-active");
  });
});

// Accordion functionality
// Access the arrow
const accordionToggleLogo = document.querySelectorAll(
  ".accordion__toggle-logo"
);

// Event Listener to Each of the titles (bruker for each loop)
titleContainers.forEach((title, index) => {
  title.addEventListener("click", () => {
    descriptionContainers[index].classList.toggle(
      "accordion__description-container--active"
    );
    accordionToggleLogo[index].classList.toggle("rotate-arrow");
  });
});
