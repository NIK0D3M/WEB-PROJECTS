document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger-menu');
  const sideMenu = document.querySelector('.side-menu');
  const menuLinks = document.querySelectorAll('.side-menu a');

  const toggleMenu = () => {
    if (sideMenu.style.right === '0px') {
      sideMenu.style.right = '-100%';
    } else {
      sideMenu.style.right = '0';
    }
  };

  hamburger.addEventListener('click', toggleMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      sideMenu.style.right = '-100%';
    });
  });
});