const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

function toggleMenu() {
  nav.classList.toggle('open');
  menuToggle.classList.toggle('open');
}

menuToggle.addEventListener('click', toggleMenu);

document.addEventListener('click', (e) => {
  if (nav.classList.contains('open') && !nav.contains(e.target) && !menuToggle.contains(e.target)) {
    toggleMenu();
  }
});

const topBtn = document.querySelector('.top-btn');
topBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
