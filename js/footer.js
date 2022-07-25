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