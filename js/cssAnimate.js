// section animate with cssAnimate
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