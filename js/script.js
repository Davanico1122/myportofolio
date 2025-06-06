// script.js

// Tidak perlu mengubah ini. Karena href pada tag <a> sudah mengurus navigasi.
// const projectCards = document.querySelectorAll('.project-card');
// projectCards.forEach((card) => {
//     const viewButton = card.querySelector('.btn-project');
//     viewButton.addEventListener('click', (e) => {
//         // Default behavior is already using <a href="projectX.html"> so you don't need JS unless for dynamic navigation
//         // You can enhance it later if needed
//     });
// });

// Navbar auto-hide
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

// Memastikan navbar ada sebelum menambahkan event listener
if (navbar) {
    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            navbar.style.top = "-100px"; // Sembunyikan navbar
        } else {
            navbar.style.top = "0"; // Tampilkan navbar
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
}
