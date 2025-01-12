const hamburger = document.querySelector('.hamburger-menu');
const sideMenu = document.querySelector('.side-menu');

hamburger.addEventListener('click', () => {
  if (sideMenu.style.right === '0px') {
    sideMenu.style.right = '-100%';
  } else {
    sideMenu.style.right = '0';
  }
});