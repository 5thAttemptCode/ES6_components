function toggleMenu() {
  const menuBtn = document.querySelector('.menubtn');
  const menu = document.querySelector('.menu');
  
  const isActive = () => menu.classList.contains('is-active');

  if (isActive()) {
    menu.classList.remove('is-active');
    menuBtn.classList.remove('is-active');
    menuBtn.setAttribute('aria-expanded', 'false');
  } else {
    menu.classList.add('is-active');
    menuBtn.classList.add('is-active');
    menuBtn.setAttribute('aria-expanded', 'true');
  }
}

document.querySelector('.menubtn').addEventListener('click', toggleMenu);
document.querySelector("ul").addEventListener('click', toggleMenu);
