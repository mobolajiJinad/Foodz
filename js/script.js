// cardContainer has been imported from cards.js
const cards = document.querySelectorAll(".card");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const hamburgerIcon = document.querySelector(".hamburgerMenu").children[0];

hamburgerIcon.addEventListener("click", () => {
  console.log(hamburgerIcon.src);
  if (hamburgerIcon.src.includes("hamburger.svg")) {
    hamburgerIcon.src = "/images/hamburgerOpen.svg";
  } else {
    hamburgerIcon.src = "/images/hamburger.svg";
    console.log("dasjdjks");
  }

  document.querySelector(".menu").classList.toggle("menu-mobile");
});

const cardWidth = cards[0].clientWidth + 24;
let currentIndex = 0; // Start with the middle card

const update = () => {
  const translateValue = -currentIndex * (cardWidth + 10);
  cardContainer.style.transform = `translateX(${translateValue}px)`;

  cards.forEach((card, index) => {
    if (index === currentIndex) {
      card.style.transform = "scale(1.05)";
      card.style.width = `calc(${card.innerWidth} + 48px)`; // Expand the middle card
    } else {
      card.style.transform = "scale(1)";
      card.style.width = `${card.innerWidth}`; // Reset width for other cards
    }
  });
};

prevBtn.addEventListener("click", () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  update();
});

nextBtn.addEventListener("click", () => {
  currentIndex = Math.min(currentIndex + 1, cards.length - 1);
  update();
});

update();
