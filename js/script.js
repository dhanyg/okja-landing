const navButton = document.getElementById('navButton');
const navMenu = document.getElementById('navMenu');
const navLogin = document.getElementById('navLogin');
/** Show-Hide menu */
navButton.addEventListener('click', function (e) {
    navMenu.classList.toggle('hidden');
    navLogin.classList.toggle('hidden');
});

const backToTop = document.querySelector('#backToTop');
const hero = document.querySelector('#hero');
/** Set display of button */
window.onscroll = function () {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        backToTop.style.display = "block";
    }
    else {
        backToTop.style.display = "none";
    }
}
/** Action Back to Top button */
backToTop.addEventListener('click', function (e) {
    Jump(hero);
});