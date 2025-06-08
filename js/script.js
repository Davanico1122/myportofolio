document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const sidebarThemeToggle = document.getElementById('sidebar-theme-toggle');
    const htmlElement = document.documentElement; // Mengambil elemen <html>

    if (themeToggle || sidebarThemeToggle) { // Pastikan tombol toggle ada di HTML
        // Cek preferensi tema dari local storage saat halaman dimuat
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme) {
            // Jika ada tema yang disimpan, terapkan
            htmlElement.setAttribute('data-theme', savedTheme);
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // Jika tidak ada di local storage, cek preferensi sistem operasi
            htmlElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark'); // Simpan preferensi sistem sebagai default
        } else {
            // Default ke tema terang jika tidak ada preferensi
            htmlElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light'); // Simpan preferensi default
        }

        // Tambahkan event listener untuk tombol toggle
        const toggleTheme = () => {
            let currentTheme = htmlElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                htmlElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light'); // Simpan preferensi ke local storage
            } else {
                htmlElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark'); // Simpan preferensi ke local storage
            }
        };

        themeToggle.addEventListener('click', toggleTheme);
        sidebarThemeToggle.addEventListener('click', toggleTheme);
    }

    // --- Navbar Hide/Show on Scroll ---
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if (navbar) { // Pastikan navbar ada di HTML
        window.addEventListener('scroll', () => {
            // Jangan sembunyikan navbar jika di paling atas halaman
            if (window.scrollY === 0) {
                navbar.style.top = '0';
            } else if (window.scrollY > lastScrollY && window.scrollY > 100) {
                // Scrolling ke bawah dan sudah melewati 100px dari atas
                navbar.style.top = '-80px'; // Sesuaikan ini dengan tinggi navbar Anda
            } else {
                // Scrolling ke atas
                navbar.style.top = '0';
            }
            lastScrollY = window.scrollY;
        });
    }

    // --- Smooth Scroll for Internal Links ---
    // Mencegah perilaku default (loncat) dan membuat scroll halus ke target ID
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Mencegah loncat langsung

            const targetId = this.getAttribute('href');
            // Cek apakah target bukan hanya '#' kosong
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) { // Pastikan elemen target ada
                    targetElement.scrollIntoView({
                        behavior: 'smooth' // Membuat scroll menjadi halus
                    });
                }
            }
        });
    });

    // --- Menu Toggle ---
    const menuToggle = document.getElementById('menu-toggle');
    const sidebarMenu = document.getElementById('sidebar-menu');

    if (menuToggle) { // Pastikan tombol toggle ada di HTML
        menuToggle.addEventListener('click', () => {
            const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !expanded);
            sidebarMenu.classList.toggle('open');
            if (sidebarMenu.classList.contains('open')) {
                sidebarMenu.removeAttribute('hidden');
                sidebarMenu.focus();
            } else {
                sidebarMenu.setAttribute('hidden', '');
            }
        });
    }
});
