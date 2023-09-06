// cardContainer has been imported from cards.js
const cards = document.querySelectorAll(".card");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const cardWidth = cards[0].clientWidth + 24;
let currentIndex = 0; // Start with the middle card

const update = () => {
  const translateValue = -currentIndex * cardWidth;
  cardContainer.style.transform = `translateX(${translateValue}px)`;

  cards.forEach((card, index) => {
    if (index === currentIndex) {
      card.style.transform = "scale(1.05)";
      card.style.width = "calc(30% + 48px)"; // Expand the middle card
    } else {
      card.style.transform = "scale(1)";
      card.style.width = "30%"; // Reset width for other cards
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
