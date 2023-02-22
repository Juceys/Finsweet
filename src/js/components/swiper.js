let swiper = new Swiper("#swiper", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.btn-right',
    prevEl: '.btn-left'
  },

  // breakpoints: {
  //   480: {
  //     slidesPerView: 2,
  //     centeredSlides: false,
  //     spaceBetween: 30,

  //   },
  //   768: { slidesPerView: 3 },
  //   1100: { slidesPerView: 5 }

  // }
});
