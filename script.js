const burger = document.getElementById("burger");
const navMenu = document.getElementById("navMenu");
const themeToggle = document.getElementById("themeToggle");

// Toggle menu mobile
burger.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    const menuHeight = navMenu.scrollHeight;
    document.documentElement.style.setProperty(
      "--menu-height",
      menuHeight + "px"
    );
  } else {
    document.documentElement.style.setProperty(
      "--menu-height",
      "0px"
    );
  }
});



// Toggle dark/light mode
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark")
    ? "☀️"
    : "🌙";
});

const track = document.getElementById("sliderTrack");
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");

let index = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(d => d.classList.remove("active"));
  dots[index].classList.add("active");
}

document.getElementById("nextBtn").onclick = () => {
  index = (index + 1) % slides.length;
  updateCarousel();
};

document.getElementById("prevBtn").onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
};

