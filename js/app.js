const $mainWrapper = document.querySelector(".main-wrapper");
const $previousButton = document.querySelector(".previous-button");
const $nextButton = document.querySelector(".next-button");

const $testimonialAuthor = document.querySelector(".testimonial-author");
const $testimonialPosition = document.querySelector(".testimonial-position");
const $testimonialText = document.querySelector(".testimonial-text");
const $testimonialPicture = document.querySelector(".testimonial-picture");

let timer;

const testimonials = [
  {
    author: "Tanya Sinclar",
    position: "UX Engineer",
    content: `La programmation m'intéressait depuis un certain temps mais je n’avais
          jamais sauté le pas. Ce cours a été une révélation pour moi. Il m’a
          permis d’obtenir le job de mes rêves.`,
    picture: "./images/image-tanya.jpg",
    pictureDescription: "Tanya Sinclar - UX Engineer",
  },
  {
    author: "Marc Dutpon",
    position: "Cuisiner amateur",
    content: `Grâce aux cours de cuisine, j'ai pu développer mes compétences
          culinaires et surprendre mes proches avec des plats délicieux.
          L'ambiance est conviviale et les astuces des chefs sont inestimables.`,
    picture: "./images/image-marc.jpg",
    pictureDescription: "Marc Dupton - Cuisiner amateur",
  },
  {
    author: "Sophie Martin",
    position: "Architecte",
    content: `Les cours de cuisine m'ont permis de perfectionner mes techniques et
          de découvrir de nouvelles recettes. Chaque session est un vrai moment
          de plaisir et d'apprentissage.`,
    picture: "./images/image-sophie.jpg",
    pictureDescription: "Sophie Martin - Architecte",
  },
  {
    author: "Claire Dubois",
    position: "Graphiste",
    content: `Grâce aux cours de cuisine, j'ai gagné en confiance et je prends
          désormais plaisir à préparer des repas pour ma famille. L'encadrement
          est excellent et les recettes sont faciles à reproduire.`,
    picture: "./images/image-claire.jpg",
    pictureDescription: "Claire Dubois - Graphiste",
  },
];

let currentSlide = 0;

function moveLeft() {
  if (currentSlide === 0) {
    currentSlide = 3;
    $testimonialAuthor.textContent = testimonials[currentSlide].author;
    $testimonialPosition.textContent = testimonials[currentSlide].position;
    $testimonialText.textContent = testimonials[currentSlide].content;
    $testimonialPicture.setAttribute("src", testimonials[currentSlide].picture);
    $testimonialPicture.setAttribute(
      "alt",
      testimonials[currentSlide].pictureDescription
    );
  } else {
    currentSlide--;
    $testimonialAuthor.textContent = testimonials[currentSlide].author;
    $testimonialPosition.textContent = testimonials[currentSlide].position;
    $testimonialText.textContent = testimonials[currentSlide].content;
    $testimonialPicture.setAttribute("src", testimonials[currentSlide].picture);
    $testimonialPicture.setAttribute(
      "alt",
      testimonials[currentSlide].pictureDescription
    );
  }
}

function moveRight() {
  if (currentSlide === 3) {
    currentSlide = 0;
    $testimonialAuthor.textContent = testimonials[currentSlide].author;
    $testimonialPosition.textContent = testimonials[currentSlide].position;
    $testimonialText.textContent = testimonials[currentSlide].content;
    $testimonialPicture.setAttribute("src", testimonials[currentSlide].picture);
    $testimonialPicture.setAttribute(
      "alt",
      testimonials[currentSlide].pictureDescription
    );
  } else {
    currentSlide++;
    $testimonialAuthor.textContent = testimonials[currentSlide].author;
    $testimonialPosition.textContent = testimonials[currentSlide].position;
    $testimonialText.textContent = testimonials[currentSlide].content;
    $testimonialPicture.setAttribute("src", testimonials[currentSlide].picture);
    $testimonialPicture.setAttribute(
      "alt",
      testimonials[currentSlide].pictureDescription
    );
  }
}

$nextButton.addEventListener("click", async function () {
  moveRight();
});

$previousButton.addEventListener("click", function () {
  moveLeft();
});

document.body.addEventListener("keydown", function (event) {
  const key = event.key;
  switch (key) {
    case "ArrowLeft":
      moveLeft();
      break;
    case "ArrowRight":
      moveRight();
      break;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  timer();
  function timer() {
    timer = setInterval(function () {
      moveRight();
    }, 10000);
    timer();
  }
});
