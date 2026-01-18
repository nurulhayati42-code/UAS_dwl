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

const menuData = [
  {
    title: "Mille Feuille",
    price: "Rp 45.000",
    desc: "Pastry berlapis renyah dengan krim lembut khas Prancis.",
    img: "https://i.pinimg.com/1200x/e3/09/0e/e3090e756e66031d6e06174280087124.jpg"
  },
  {
    title: "Chocolate Almond Croissant",
    price: "Rp 38.000",
    desc: "Croissant cokelat dengan almond panggang di atasnya.",
    img: "https://i.pinimg.com/1200x/cf/9b/af/cf9bafa8f904bb4c2aacf06cebf46331.jpg"
  },
  {
    title: "Choux Pastry",
    price: "Rp 32.000",
    desc: "Choux pastry lembut berisi krim vanilla halus.",
    img: "https://i.pinimg.com/736x/5e/01/db/5e01db1d5951ad086bddbb40625945a6.jpg"
  },
  {
    title: "Berry Danish Delight",
    price: "Rp 40.000",
    desc: "Danish pastry dengan topping buah beri segar.",
    img: "https://i.pinimg.com/736x/24/0f/dc/240fdc3ae3a8d703385577c059c6b8dc.jpg"
  },
  {
    title: "Classic Pain au Chocolat",
    price: "Rp 35.000",
    desc: "Pastry cokelat klasik dengan rasa autentik.",
    img: "https://i.pinimg.com/736x/5b/8c/39/5b8c399abcf4e4ed652d6fddedc2b1ee.jpg"
  },
  {
    title: "Vanilla Cream Tart",
    price: "Rp 42.000",
    desc: "Tart lembut dengan krim vanilla yang halus.",
    img: "https://i.pinimg.com/736x/18/ac/fb/18acfba17603ab2530c38df43e4cd181.jpg"
  }
];

  const form = document.querySelector(".contact-form");
  const successPopup = document.getElementById("successPopup");
  const errorPopup = document.getElementById("errorPopup");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea, select");
    let isFilled = true;

    inputs.forEach(input => {
      if (input.value.trim() === "") {
        isFilled = false;
      }
    });

    if (isFilled) {
      successPopup.style.display = "flex";
      form.reset();
    } else {
      errorPopup.style.display = "flex";
    }
  });

  function closePopup(id) {
    document.getElementById(id).style.display = "none";
  }




