new Swiper(".gallery_swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 30,
});
new Swiper(".testimonials_swiper", {
  loop: false,
  spaceBetween: 30,
  scrollbar: {
    el: ".swiper-scrollbar",
    enabled: true,
    draggable: true,
  },
  slidesPerView: 4,
});
