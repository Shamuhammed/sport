// swiper
// section classes
let classes = new Swiper(".classes__slider", {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
      clickable: true,   
   },
   watchOverflow: true,
   loop: false,

   slidesPerView: 3,
   spaceBetween: 20,
   slidesPerGroup: 1,
   freeMode: true,
   speed: 800,

   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      480: {
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 3,
      },
   },

   preloadImages: false,
   lazy: {
      loadOnTransitionStart: true,
      loadPrevNext: true,
   },
});
// section instructors
let instructors = new Swiper(".instructors__slider", {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
      clickable: true,   
   },
   watchOverflow: true,
   loop: false,

   slidesPerView: 3,
   spaceBetween: 20,
   slidesPerGroup: 1,
   freeMode: true,
   speed: 800,

   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      480: {
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 3,
      },
   },

   preloadImages: false,
   lazy: {
      loadOnTransitionStart: true,
      loadPrevNext: true,
   },
});
// section reviews
let reviews = new Swiper(".reviews__slider", {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
      clickable: true,   
   },
   watchOverflow: true,
   loop: true,
   loopedSlides: 1,
   spaceBetween: 40,

   slidesPerView: 1,
   slidesPerGroup: 1,
   freeMode: true,
   speed: 800,
});