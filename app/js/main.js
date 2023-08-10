$(".nav__burger-btn").on("click", function () {
  $(".nav__list").toggleClass("menu--open");
});

// $(function () {
// $(".reviews__slider").slick({
//   dots: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false

  //     responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {},
  //   },
  //   {
  //     breakpoint: 640,
  //     settings: {
  //       arrows: false,
  //     },
  //   },
  // ],
// });
// });

const swiperOne = new Swiper(".reviews__slider", {
  loop: true,
  // effect: "coverflow",
  // effect: 'fade',
  pagination: {
    el: ".swiper-pagination",
  },
//   autoplay: {
//     delay: 4000,
//     disableOnInteraction: true
//   }
});

const swiperTvo = new Swiper(".certificates__slider", {
  // loop: true,
  slidesPerView: 1,
  spaceBetween: 10,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
//   autoplay: {
//     delay: 4000,
//     disableOnInteraction: true
//   }
});
