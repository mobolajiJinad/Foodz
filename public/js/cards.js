// Card container info

const cardsInfo = [
  {
    img: {
      src: "./images/Gimbap.png",
      alt: "Food available",
    },
    info: {
      name: "Gimbap",
      reviewStars: 4,
      reviewText: "214",
      price: "$12.99",
    },
  },
  {
    img: {
      src: "./images/Gimbap.png",
      alt: "Food available",
    },
    info: {
      name: "Gimbap",
      reviewStars: 4,
      reviewText: "214",
      price: "$12.99",
    },
  },
  {
    img: {
      src: "./images/Gimbap.png",
      alt: "Food available",
    },
    info: {
      name: "Gimbap",
      reviewStars: 4,
      reviewText: "214",
      price: "$12.99",
    },
  },
  {
    img: {
      src: "./images/Gimbap.png",
      alt: "Food available",
    },
    info: {
      name: "Gimbap",
      reviewStars: 4,
      reviewText: "214",
      price: "$12.99",
    },
  },
  {
    img: {
      src: "./images/KoreaBBQ.png",
      alt: "Food available",
    },
    info: {
      name: "Korea BBQ",
      reviewStars: 3,
      reviewText: "512",
      price: "$24.99",
    },
  },
  {
    img: {
      src: "./images/Gimbap.png",
      alt: "Food available",
    },
    info: {
      name: "Gimbap",
      reviewStars: 4,
      reviewText: "214",
      price: "$12.99",
    },
  },
  {
    img: {
      src: "./images/KoreaBBQ.png",
      alt: "Food available",
    },
    info: {
      name: "Korea BBQ",
      reviewStars: 5,
      reviewText: "512",
      price: "$24.99",
    },
  },
  {
    img: {
      src: "./images/Gimbap.png",
      alt: "Food available",
    },
    info: {
      name: "Gimbap",
      reviewStars: 4,
      reviewText: "214",
      price: "$12.99",
    },
  },
];

const cardContainer = document.getElementById("card_container");

cardsInfo.forEach((card) => {
  const div = document.createElement("div");
  div.classList.add("card");

  const starsHTML = Array(card.info.reviewStars)
    .fill('<img src="./images/StarIcon.png" alt="A star" class="reviewStar"/>')
    .join("");

  const innerHTML = `
    <img src="${card.img.src}" alt="${card.img.alt}" class="foodImg" />
    
    <div class="info">
      <h5 class="name">${card.info.name}</h5>

      <div class="review">
        <div class="stars">
          ${starsHTML}
        </div>
        <p class="reviewText">${card.info.reviewText} reviews</p>
      </div>

      <div class="price">
        <p class="foodPrice">${card.info.price}</p>
        <button class="order">order now</button>
      </div>
    </div>`;

  div.innerHTML = innerHTML;
  cardContainer.appendChild(div);
});
