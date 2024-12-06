const slidePictrue = [
  {
    image: "./assets/images/RomForVenner/Eksteriør3.jpeg",
    description: "sunset",
  },
  {
    image: "./assets/images/RomForVenner/Eksteriør2.jpeg",
    description: "mountains",
  },
  {
    image: "./assets/images/RomForVenner/Eksteriør1.jpeg",
    description: "sunrise",
  },
  {
    image: "./assets/images/RomForVenner/Interiør1.jpeg",
    description: "beach",
  },
  {
    image: "./assets/images/RomForVenner/Interiør5.jpeg",
    description: "forest",
  },
  {
    image: "./assets/images/RomForVenner/Interiør3.jpeg",
    description: "sunset",
  },
  {
    image: "./assets/images/RomForVenner/Interiør7.jpeg",
    description: "sunset",
  },
  {
    image: "./assets/images/RomForVenner/rfv-3.jpg",
    description: "sunset",
  },
  {
    image: "./assets/images/RomForVenner/rfv-5.jpg",
    description: "sunset",
  },
  {
    image: "./assets/images/RomForVenner/rfv-7.png",
    description: "sunset",
  },
];

const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");

const slideContainer = document.querySelector(".slideshow__container");
const bulletsContainer = document.querySelector(".bullets__container");

slidePictrue.forEach((slide, index) => {
  const slideElement = document.createElement("div");
  slideElement.classList.add("slide");

  if (index === 0) slideElement.classList.add("active");

  const imageElement = document.createElement("img");
  imageElement.src = slide.image;
  imageElement.alt = `lysbilde ${index + 1}`;

  slideElement.appendChild(imageElement);

  slideContainer.appendChild(slideElement);

  const bulletElement = document.createElement("span");
  bulletElement.classList.add("dot");

  if (index === 0) bulletElement.classList.add("active");

  bulletElement.addEventListener("click", () => goToSlide(index));
  bulletsContainer.appendChild(bulletElement);
});

function changeSlide(direction) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let currentSlide = Array.from(slides).findIndex((slide) =>
    slide.classList.contains("active")
  );

  slides[currentSlide].classList.remove("active");
  dots[currentSlide].classList.remove("active");

  currentSlide += direction;
  if (currentSlide >= slides.length) currentSlide = 0;
  if (currentSlide < 0) currentSlide = slides.length - 1;

  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");

  updateCounter(currentSlide, slides.length);
}

function goToSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");

  updateCounter(index, slides.length);
}

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  if (slides.length > 0) {
    slides[0].classList.add("active");
    dots[0].classList.add("active");
    updateCounter(0, slides.length);
  }
});

previousButton.addEventListener("click", () => changeSlide(-1));
nextButton.addEventListener("click", () => changeSlide(+1));
