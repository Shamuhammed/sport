// go up
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