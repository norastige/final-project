// Selecte elementene vi trenger å nå fra HTML
const toggleMenuButton = document.querySelector(".navbar__toggle-button");
const navbarLinksContainer = document.querySelector(".navbar__links");
const links = document.querySelectorAll(".navbar__link");

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
