// script.js

// Menyimpan referensi elemen project
const projectCards = document.querySelectorAll('.project-card');

// Event listener untuk tombol "Lihat Proyek"
projectCards.forEach((card) => {
    const viewButton = card.querySelector('.view-project');
    viewButton.addEventListener('click', () => {
        alert('Detail proyek akan ditampilkan di sini.');
        // Di sini Anda bisa menambahkan logika lanjutan
    });
});

// === Navbar Scroll Auto-hide ===
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll ke bawah → sembunyikan navbar
        navbar.style.top = "-100px";
    } else {
        // Scroll ke atas → tampilkan navbar
        navbar.style.top = "0";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});