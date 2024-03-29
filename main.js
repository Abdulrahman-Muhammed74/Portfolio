

let navBar = document.querySelector(".navigation"); 

function toggleMenu() {
  navBar.addEventListener("click", function () {
    if (navBar.classList.contains("menuClick")) {
      navBar.classList.remove("menuClick");
    } else {
      navBar.classList.add("menuClick");
    }
  });
}
toggleMenu();

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 40,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});