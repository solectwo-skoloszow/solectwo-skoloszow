const carousel = document.querySelector("[data-carousel]");
const slides = carousel.querySelector("[data-slides]");

function changeSlide(offset) {
  const activeSlide = slides.querySelector("[data-active]");
  let newIndex = [...slides.children].indexOf(activeSlide) + offset;
  if (newIndex < 0) newIndex = slides.children.length - 1;
  if (newIndex >= slides.children.length) newIndex = 0;

  slides.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;
}

// Function to move to the next slide
function nextSlide() {
  changeSlide(1);
}

// Set up automatic slide change every 2 seconds
const slideInterval = setInterval(nextSlide, 4000);