// js/script.js

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

if (navbar) {
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    navbar.style.top = currentScroll > lastScrollTop ? "-100px" : "0";
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
}

const toggleBtn = document.getElementById('theme-toggle');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    html.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
  });
}