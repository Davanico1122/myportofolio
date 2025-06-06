// script.js

// Menyimpan referensi elemen
const projectCards = document.querySelectorAll('.project-card');
const mainSection = document.querySelector('main');

// Menambahkan event listener pada setiap kartu proyek
projectCards.forEach((card) => {
    const viewButton = card.querySelector('.view-project');
    viewButton.addEventListener('click', () => {
        alert('Detail proyek akan ditampilkan di sini.');
        // Di sini Anda bisa menambahkan logika untuk menampilkan detail proyek
    });
});
