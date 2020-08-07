const menuBtn = document.querySelector('.m-menu'),
   menu = document.querySelector(".menu-sidebar");

const toogleBtn = document.querySelector('.hoverBtn'),
   hideModalBtn = document.querySelector('.toogle-btn');

const dotsButtonJs = document.querySelector('.dots-button-js'),
   optionsBtn = document.querySelector('.options-btn'),
   postHeader = document.querySelector('.post-header')

menuBtn.addEventListener('click', function () {
   menu.classList.toggle('active');
});

toogleBtn.addEventListener('click', () => {
   hideModalBtn.classList.toggle('toogle-btn-js');
});

dotsButtonJs.addEventListener('click', event => {
   const target = event.target;

   if (target.classList.contains('dots-button-js') || target.classList.contains('imgModal')) {
      optionsBtn.classList.toggle('modal');

   }
});












// window.addEventListener('click', outsideClick);

// function outsideClick(event) {
//    if (event.target == hideModalBtn) {
//       hideModalBtn.classList.toggle('toogle-btn-js');
//       console.log(1);
//    }
// }