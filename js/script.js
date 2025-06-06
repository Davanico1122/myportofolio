// script.js

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Scroll animation with Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

// Optional: Hamburger menu toggle (if you add it in HTML)
const toggleMenu = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (toggleMenu && navMenu) {
  toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}