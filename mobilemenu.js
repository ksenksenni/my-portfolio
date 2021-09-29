var mobileMenu = document.querySelector('.mobile-menu__container');
var mobileBtn = document.querySelector('.mobile-menu');

mobileBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle("shown");

})