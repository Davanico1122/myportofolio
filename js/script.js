document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const sidebarMenu = document.getElementById('sidebar-menu');
  const sidebarClose = document.getElementById('sidebar-close');
  const htmlElement = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const sidebarThemeToggle = document.getElementById('sidebar-theme-toggle');

  // Sidebar toggle open/close with ARIA update
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isOpen);

    if (sidebarMenu.hasAttribute('hidden')) {
      sidebarMenu.removeAttribute('hidden');
      sidebarMenu.classList.add('open');
      sidebarMenu.focus();
    } else {
      sidebarMenu.setAttribute('hidden', '');
      sidebarMenu.classList.remove('open');
    }
  });

  // Sidebar close button
  sidebarClose.addEventListener('click', () => {
    sidebarMenu.setAttribute('hidden', '');
    sidebarMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', false);
    menuToggle.focus();
  });

  // Close sidebar on link or theme toggle click
  sidebarMenu.querySelectorAll('a, button#sidebar-theme-toggle').forEach(el => {
    el.addEventListener('click', () => {
      sidebarMenu.setAttribute('hidden', '');
      sidebarMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', false);
      menuToggle.focus();
    });
  });

  // Theme toggle function
  function toggleTheme() {
    const current = htmlElement.getAttribute('data-theme');
    if (current === 'dark') {
      htmlElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      htmlElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  }
  themeToggle.addEventListener('click', toggleTheme);
  sidebarThemeToggle.addEventListener('click', toggleTheme);

  // Load saved or system theme on load
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    htmlElement.setAttribute('data-theme', 'dark');
  }

  // Navbar hide/show on scroll
  let lastScrollY = window.scrollY;
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        navbar.style.top = '0';
      } else if (window.scrollY > lastScrollY && window.scrollY > 100) {
        navbar.style.top = '-80px';
      } else {
        navbar.style.top = '0';
      }
      lastScrollY = window.scrollY;
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if(targetId && targetId !== '#'){
        const targetElem = document.querySelector(targetId);
        if(targetElem){
          targetElem.scrollIntoView({behavior: 'smooth'});
        }
      }
    });
  });
});
