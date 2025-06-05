// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const htmlElement = document.documentElement;

// Initialize theme based on user or system preference
const initTheme = () => {
  if (
    localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    htmlElement.classList.add('dark');
  } else {
    htmlElement.classList.remove('dark');
  }
};
initTheme();

// Toggle dark mode and save preference
themeToggle.addEventListener('click', () => {
  if (htmlElement.classList.contains('dark')) {
    htmlElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    htmlElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
});

// Toggle mobile menu visibility
mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for internal links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    mobileMenu.classList.add('hidden'); // close menu on mobile
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
