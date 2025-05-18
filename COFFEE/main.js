const navLinks = document.querySelectorAll(".navmenu .navlink");
const menuOpenButton = document.getElementById("menuopenbutton");
const menuCloseButton = document.getElementById("menuclosebutton");
menuOpenButton.addEventListener("click", () =>{
  document.body.classList.toggle("showmobilemenu")
});
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navLinks.forEach(link =>{
  link.addEventListener("click", () =>menuOpenButton.click());
})

const swiper = new Swiper('.sliderwrapper', {
  loop: true,
  spaceBetween: 25,
  grabCursor:true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,


  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView : 1
    },
    768: {
      slidesPerView : 2
    },
    1024: {
      slidesPerView : 3
    }
  }
});