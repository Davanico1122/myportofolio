// === Tombol "Lihat Proyek" ===
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card) => {
    const viewButton = card.querySelector('.btn-project');
    viewButton.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Detail proyek akan ditampilkan di sini.');
    });
});

// === Navbar Auto-hide ===
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll ke bawah
        navbar.style.top = "-100px";
    } else {
        // Scroll ke atas
        navbar.style.top = "0";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
