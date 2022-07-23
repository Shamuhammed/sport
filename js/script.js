
const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackkBerry/i);
   },
   IOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any : function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.IOS() ||
         isMobile.Opera() ||
         isMobile.Windows());
   }
};

if (isMobile.any()) {
   document.body.classList.add('_touch');
} else {
   document.body.classList.add('_pc');
}

// menu burger

const iconMenu = document.querySelector('.navbar__button');
const menuBody = document.querySelector('.navbar__menu');
if (iconMenu) {
   iconMenu.addEventListener('click', function(e) {
      document.body.classList.toggle('lock');
      iconMenu.classList.toggle('active');
      menuBody.classList.toggle('active');
   });
}

//прокрутка к секции

const menuLinks = document.querySelectorAll('.navbar__link[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

         if (iconMenu.classList.contains('active')) {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('active');
            menuBody.classList.remove('active');
         }

         window.scrollTo({
            top: gotoBlockValue,
            behavior: 'smooth'
         });
         e.preventDefault();
      }
   }
} 

// swiper

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

// header
let header = document.querySelector('header')
function headerToggle() {
   if (window.pageYOffset > 80) {
      header.classList.add('active')
   } else if (window.pageYOffset < 80) {
      header.classList.remove('active')
   }
}
window.addEventListener('scroll', headerToggle);

// footer
let footerRows = document.querySelectorAll('.footer-nav__title');
let i;
for (i = 0; i < footerRows.length; i++) {
   footerRows[i].addEventListener('click', function () {
      this.classList.toggle('active');
      var panel = this.nextElementSibling;
      if (this.classList.contains('active')) {
         panel.style.height = panel.scrollHeight + 'px';  
      } else {
         panel.style.height = "0";
      }
   })
}


// up
const up = document.querySelector('.goto-up');
const effectUp = up.querySelector('span');
up.addEventListener('click', gotoUp);
function gotoUp() {
   effectUp.classList.add('active');
   window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
   });
   
}
window.addEventListener('scroll', function () {
   let height = document.querySelector('.banner').clientHeight;
   if (window.pageYOffset > height) up.classList.add('active');
   else up.classList.remove('active');
});


// section animate
const sections = document.querySelectorAll('.section-animate');
function sectionAnimate() {
   for (let i = 0; i < sections.length; i++) {
      const section = sections[i];  
      if (section.offsetTop - section.clientHeight <= window.pageYOffset) {
         section.classList.add('visible');
         addAnim(section, '.front', 'fadeIn')
         addAnim(section, '.right', 'fadeInRight')
         addAnim(section, '.left', 'fadeInLeft')
      }
   }
}
window.addEventListener('scroll', sectionAnimate);

function addAnim(elem, side, anim) {
   if (elem.querySelector(side)) {
      elem.querySelector(side).classList.add(`animate__${anim}`)
   } 
   return
}