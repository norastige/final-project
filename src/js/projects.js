// Arrey with projects
const projects = [
  {
    id: 1,
    title: "Lemstove",
    date: "2024-01-01",
    description: "Lorem ipsum dolor",
    image: "./assets/images/Lemstove/modell-1.jpeg",
    link: "../lemstove.html",
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
const searchInput = document.querySelector(".search-input");

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

// // Filter and sort
// function filterProjects(filter) {
//   let filteredProjects = [...projects];

//   if (filter === "newest") {
//     filteredProjects.sort((a, b) => new Date(b.date) - new Date(a.date));
//   } else if (filter === "oldest") {
//     filteredProjects.sort((a, b) => new Date(a.date) - new Date(b.date));
//   }

//   // Search
//   if (searchTerm) {
//     filteredProjects = filteredProjects.filter(
//       (project) =>
//         project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         project.description.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }

//   renderProjects(filteredProjects);
// }

// Combining filter and search
function filterAndSearchProjects(filter, searchTerm) {
  let filteredProjects = [...projects];

  // Filter based on selected filter
  if (filter === "newest") {
    filteredProjects.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (filter === "oldest") {
    filteredProjects.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  // Filter based on search term
  if (searchTerm) {
    filteredProjects = filteredProjects.filter(
      (project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  renderProjects(filteredProjects);
}

// Event Listeners for Search input
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.trim();
  const activeFilter = document
    .querySelector(".filter-active")
    .getAttribute("data-filter");
  filterAndSearchProjects(activeFilter, searchTerm);
});

// Event Listeners for filter-links
filterLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Removing active class from links
    filterLinks.forEach((link) => link.classList.remove("filter-active"));

    // Adding active class to clicked link
    e.target.classList.add("filter-active");

    // Filter based on selected filter link
    const filter = e.target.getAttribute("data-filter");
    const searchTerm = searchInput.value.trim();
    filterAndSearchProjects(filter, searchTerm);
    // filterProjects(filter);
  });
});

// Initializing with all projects
renderProjects(projects);
