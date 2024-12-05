// Arrey with projects
const projects = [
  {
    id: 1,
    title: "Lemstove",
    date: "2024-01-01",
    description: "Lorem ipsum dolor",
    image: "./assets/images/Lemstove/modell-1.jpeg",
    link: "romforvenner.html",
  },
  {
    id: 2,
    title: "Rom For Venner",
    date: "2023-12-15",
    description: "Lorem ipsum dolor",
    image: "./assets/images/RomForVenner/Interiør7.jpeg",
    link: "lemstove.html",
  },
  {
    id: 3,
    title: "Project C",
    date: "2023-11-20",
    description: "Lorem ipsum dolor",
    image: "./assets/images/RomForVenner/Eksteriør2.jpeg",
    link: "prosjekt3.html",
  },
  {
    id: 4,
    title: "Project D",
    date: "2023-10-05",
    description: "Lorem ipsum dolor",
    image: "./assets/images/RomForVenner/Eksteriør3.jpeg",
    link: "prosjekt4.html",
  },
];

// Select Elements
const filterLinks = document.querySelectorAll(".filter-link");
const projectsContainer = document.querySelector(".projects-container");

// Showing the projects
function renderProjects(filteredProjects) {
  projectsContainer.innerHTML = ""; // Empty the HTML Container

  filteredProjects.forEach((project) => {
    //Creating Elements
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    // Adding the images with innerHTML
    projectCard.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="project-image" />
      <h3><a href=${project.link}">${project.title}</a></h3>
      <p>${project.description}</p>
    `;

    projectsContainer.appendChild(projectCard);
  });
}

// Filter and sort
function filterProjects(filter) {
  let filteredProjects = [...projects];

  if (filter === "newest") {
    filteredProjects.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (filter === "oldest") {
    filteredProjects.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  renderProjects(filteredProjects);
}

// Event Listeners for filter-links
filterLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Removing active class from links
    filterLinks.forEach((link) => link.classList.remove("filter-active"));

    // Adding active class to clicked link
    e.target.classList.add("filter-active");

    // Filter based on selected filter link
    const filter = e.target.getAttribute("data-filter");
    filterProjects(filter);
  });
});

// Initializing with all projects
renderProjects(projects);
