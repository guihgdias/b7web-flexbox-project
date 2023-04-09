const mobileMenu = document.querySelector('.mobile-menu');
const navMenu = document.querySelector('.main-navigation');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('opened');
  navMenu.classList.toggle('opened');
  document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'visible' : 'hidden';
})

window.onscroll = () => {
  document.body.style.overflow = 'visible';
  mobileMenu.classList.remove('opened');
  navMenu.classList.remove('opened');
}