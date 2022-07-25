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

// go to section
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
