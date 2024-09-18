const buttons = document.querySelectorAll("[data-carousel-button]");
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
const slideInterval = setInterval(nextSlide, 2000);

// Add click event listeners to buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    clearInterval(slideInterval); // Stop auto-sliding when a button is clicked
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    changeSlide(offset);
  });
});

// Optional: Pause auto-sliding when hovering over the carousel
carousel.addEventListener("mouseenter", () => clearInterval(slideInterval));
carousel.addEventListener("mouseleave", () => setInterval(nextSlide, 2000));