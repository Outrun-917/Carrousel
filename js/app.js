const $mainWrappers = document.querySelectorAll(".main-wrapper");
const $previousButtons = document.querySelectorAll(".previous-button");
const $nextButtons = document.querySelectorAll(".next-button");

const $testimonialText = document.querySelector(".testimonial-text");

// const testimonials = [
//   {
//     author: "Tanya Sinclar",
//     position: "UX Engineer",
//     content: `La programmation m'intéressait depuis un certain temps mais je n’avais
//           jamais sauté le pas. Ce cours a été une révélation pour moi. Il m’a
//           permis d’obtenir le job de mes rêves.`,
//     picture: "./images/image-tanya.jpg",
//     pictureDescription: "Tanya Sinclar - UX Engineer",
//   },
//   {
//     author: "Marc Dutpon",
//     position: "Cuisiner amateur",
//     content: `Grâce aux cours de cuisine, j'ai pu développer mes compétences
//           culinaires et surprendre mes proches avec des plats délicieux.
//           L'ambiance est conviviale et les astuces des chefs sont inestimables.`,
//     picture: "./images/image-marc.jpg",
//     pictureDescription: "Marc Dupton - Cuisiner amateur",
//   },
//   {
//     author: "Sophie Martin",
//     position: "Architecte",
//     content: `Les cours de cuisine m'ont permis de perfectionner mes techniques et
//           de découvrir de nouvelles recettes. Chaque session est un vrai moment
//           de plaisir et d'apprentissage.`,
//     picture: "./images/image-sophie.jpg",
//     pictureDescription: "Sophie Martin - Architecte",
//   },
//   {
//     author: "Claire Dubois",
//     position: "Graphiste",
//     content: `Grâce aux cours de cuisine, j'ai gagné en confiance et je prends
//           désormais plaisir à préparer des repas pour ma famille. L'encadrement
//           est excellent et les recettes sont faciles à reproduire.`,
//     picture: "./images/image-claire.jpg",
//     pictureDescription: "Claire Dubois - Graphiste",
//   },
// ];

let currentSlide = 0;

function moveLeft() {
  if (currentSlide === 0) {
    currentSlide = 3;
    $mainWrappers[0].classList.add("hidden");
    $mainWrappers[3].classList.remove("hidden");
  } else {
    $mainWrappers[currentSlide].classList.add("hidden");
    currentSlide--;
    $mainWrappers[currentSlide].classList.remove("hidden");
  }
}

function moveRight() {
  if (currentSlide === 3) {
    currentSlide = 0;
    $mainWrappers[3].classList.add("hidden");
    $mainWrappers[0].classList.remove("hidden");
  } else {
    $mainWrappers[currentSlide].classList.add("hidden");
    currentSlide++;
    $mainWrappers[currentSlide].classList.remove("hidden");
  }
}

$previousButtons.forEach(function ($previousButton) {
  $previousButton.addEventListener("click", function () {
    moveLeft();
  });
});

$nextButtons.forEach(function ($nextButton) {
  $nextButton.addEventListener("click", function () {
    moveRight();
    // $testimonialText.textContent = testimonials[1].content;
  });
});
