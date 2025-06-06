// js/script.js
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
  const html = document.documentElement;
  if (html.getAttribute('data-theme') === 'dark') {
    html.setAttribute('data-theme', 'light');
  } else {
    html.setAttribute('data-theme', 'dark');
  }
});