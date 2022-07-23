const popLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popLinks.length > 0) { 
   for (let index = 0; index < popLinks.length; index++) {
      const popLink = popLinks[index];
      popLink.addEventListener('click', function (e) {
         const popupName = popLink.getAttribute('href').replace('#', '');//из атрибута href убираем #
         const currentPopup = document.getElementById(popupName); //получаем элемент popapName=popupId
         popupOpen(currentPopup);//открытие попапа
         e.preventDefault();//запрет на перезагрузку страницы / блокировка ссылки
      });
   }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {//Проверка существуютли такие класы
   for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];//получаем конкретные объекты
      el.addEventListener('click', function (e) { //событие при клике
         popupClose(el.closest('.popup'));//отправляем в функцию закрытия ближайщий родитель с клссом popup
         e.preventDefault();
      });
   }
}

function popupOpen(currentPopup) {
   if (currentPopup && unlock) { 
      const popupActive = document.querySelector('.popup.open'); 
      if (popupActive) {
         popupClose(popupActive, false); 
      } else {
         bodyLock();
      }
      currentPopup.classList.add('open'); 
      currentPopup.addEventListener('click', function (e) {
         if (!e.target.closest('.popup__content')) {
            popupClose(e.target.closest('.popup'));
         }
      });
   }
}

function popupClose(popupActive, doUnlock = true) {
   if (unlock) {
      popupActive.classList.remove('open');
      if (doUnlock) {
         bodyUnLock();
      }
   }
}

function bodyLock() {
   const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';//Получаю ширину скролла

   if (lockPadding.length > 0) { 
      for (let index = 0; index < lockPadding.length; index++) {
         const el = lockPadding[index];
         el.style.paddingRight = lockPaddingValue; 
      }
   }
   body.style.paddingRight = lockPaddingValue;
   body.classList.add('lock');

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}


function bodyUnLock() {
   setTimeout(function () {
      if (lockPadding.length > 0) {
         for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
         }
      }
      body.style.paddingRight = '0px';
      body.classList.remove('lock');
   }, timeout);

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

document.addEventListener('keydown', function (e) {
   if (e.which === 27) {
      const popupActive = document.querySelector('.popup.open');
      popupClose(popupActive);
   }
});

(function () {
   if (!Element.prototype.closest) {
      Element.prototype.closest = function (css) {
         var node = this;
         while (node) {
            if (node.matches(css)) return node;
            else node = node.parentElement;
         }
         return null
      };
   }
}) ();
(function () {
   if (Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.matchesSelector ||
         Element.prototype.webkitMatchesSelector ||
         Element.prototype.mozMatchesSelector ||
         Element.prototype.msMatchesSelector;
   }
})();