let menus = document.querySelector("nav");
let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", function () {
  menus.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  menus.classList.remove("active");
});

// Swiper JS code

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

// function dispplayImages() {
//   var images = [
//     "../images/food_lover_1.jpg",
//     "../images/food_lover_2.jpg",
//     "../images/food_lover_3.jpg",
//     "../images/food_lover_4.jpg",
//     "../images/food_lover_5.jpg",
//     "../images/food_lover_6.jpg",
//   ];
//   var article = document.querySelector(".img_cards");
//   for (var i = 0; i < images.length; i++) {
//     var img = document.createElement("img");
//     img.src = images[i];
//     img.alt = "Food Lover Image " + (i + 1);
//     article.appendChild(img);
//   }
// }
// dispplayImages();

console.log("Welcome to Taste Drive!");
