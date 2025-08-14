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

//Dynamcally adding images to the menu section

const SectionCenter = document.querySelector(".menus_items_container");
const filterBtns = document.querySelectorAll(".btn_cat");

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const Category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (menuItem) {
      if (menuItem.Category === Category) {
        return menuItem;
      }
    });
    if (Category === "all") {
      displayMenusItem(menu);
    } else {
      displayMenusItem(menuCategory);
    }
  });
});

const menu = [
  {
    id: 1,
    title: " Tandoori Chicken",
    Category: "Dinner",
    price: 150,
    img: "./images/food_lover_1.jpg",
  },
  {
    id: 2,
    title: " Tender Fish Fry",
    Category: "Starter",
    price: 150,
    img: "./images/food_lover_2.jpg",
  },
  {
    id: 3,
    title: " Panner Tikka",
    Category: "Starter",
    price: 100,
    img: "./images/food_lover_3.jpg",
  },
  {
    id: 4,
    title: " Fish Curry",
    Category: "Dinner",
    price: 125,
    img: "./images/food_lover_4.jpg",
  },
  {
    id: 5,
    title: " Afgani Chicken Tikka",
    Category: "Starter",
    price: 199,
    img: "./images/food_lover_5.jpg",
  },
  {
    id: 6,
    title: " Chicken Briyani",
    Category: "Lunch",
    price: 149,
    img: "./images/food_lover_6.jpg",
  },
  {
    id: 7,
    title: " Veg Briyani",
    Category: "Lunch",
    price: 100,
    img: "./images/food_lover_7.jpg",
  },
  {
    id: 8,
    title: " Spring Rolls",
    Category: "Starter",
    price: 100,
    img: "./images/food_lover_8.jpg",
  },
  {
    id: 9,
    title: " Mojito Drinks",
    Category: "Drinks",
    price: 100,
    img: "./images/food_lover_9.jpg",
  },
];

window.addEventListener("DOMContentLoaded", function () {
  displayMenusItem(menu);
});

function displayMenusItem(menuItem) {
  let displayMenusItem = menuItem.map(function (item) {
    return `<div class="img_cards">
              <img src=${item.img} alt="" />
              <p class="price">Only on ${item.price} Rupees</p>
              <p>${item.title}</p>
            </div>`;
  });
  displayMenusItem = displayMenusItem.join("");
  SectionCenter.innerHTML = displayMenusItem;
}
console.log("Welcome to Taste Drive!");
