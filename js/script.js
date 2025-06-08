document.addEventListener('DOMContentLoaded', () => {
    // Ambil elemen-elemen yang diperlukan
    const menuToggle = document.getElementById('menu-toggle');
    // Perubahan: ID 'sidebar-menu' di HTML menjadi 'sidebar'
    const sidebar = document.getElementById('sidebar');
    // Perubahan: ID 'sidebar-close' di HTML menjadi 'close-sidebar'
    const closeSidebarButton = document.getElementById('close-sidebar');

    const htmlElement = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle'); // Tombol di navbar desktop
    const sidebarThemeToggle = document.getElementById('sidebar-theme-toggle'); // Tombol di sidebar mobile

    // Pastikan semua elemen ditemukan sebelum menambahkan event listener
    // Ini penting agar script tidak error jika elemen tidak ada di halaman tertentu
    // (misalnya, tombol menu di halaman detail proyek mungkin tidak ada)

    // --- Sidebar Toggle (Hamburger Menu) ---
    if (menuToggle && sidebar && closeSidebarButton) {
        menuToggle.addEventListener('click', () => {
            const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isOpen);

            if (sidebar.classList.contains('open')) {
                // Jika sidebar terbuka, tutup
                sidebar.classList.remove('open');
                sidebar.setAttribute('hidden', '');
                // Kembali fokus ke tombol hamburger setelah menutup sidebar
                menuToggle.focus();
            } else {
                // Jika sidebar tertutup, buka
                sidebar.classList.add('open');
                sidebar.removeAttribute('hidden');
                // Fokuskan sidebar agar user bisa langsung navigasi dengan keyboard
                sidebar.focus();
            }
        });

        // Event listener untuk tombol tutup sidebar
        closeSidebarButton.addEventListener('click', () => {
            sidebar.classList.remove('open');
            sidebar.setAttribute('hidden', '');
            menuToggle.setAttribute('aria-expanded', false);
            menuToggle.focus(); // Kembali fokus ke tombol hamburger
        });

        // Tutup sidebar saat mengklik link atau tombol tema di dalam sidebar
        // Menggunakan delegasi event pada 'sidebar' untuk efisiensi
        sidebar.addEventListener('click', (event) => {
            // Cek apakah yang diklik adalah link atau tombol sidebar-theme-toggle
            if (event.target.matches('.sidebar-link')) {
                sidebar.classList.remove('open');
                sidebar.setAttribute('hidden', '');
                menuToggle.setAttribute('aria-expanded', false);
                // Untuk link, fokus ke target link setelah sidebar tertutup
                // Untuk tombol tema, fokus kembali ke tombol hamburger
                if (event.target.tagName === 'A') {
                    // Hanya lakukan scroll jika target adalah ID di halaman ini
                    const href = event.target.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        // Jangan scroll here, smooth scroll handler akan menanganinya
                    }
                } else if (event.target.id === 'sidebar-theme-toggle') {
                    // Jika tombol theme toggle di sidebar, fokus kembali ke menuToggle
                    menuToggle.focus();
                }
            }
        });
    }


    // --- Theme Toggle Function ---
    function toggleTheme() {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

    // Event listeners untuk tombol tema (desktop dan mobile)
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    if (sidebarThemeToggle) {
        sidebarThemeToggle.addEventListener('click', toggleTheme);
    }

    // --- Load Saved or System Theme on Page Load ---
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        htmlElement.setAttribute('data-theme', 'dark');
    }

    // --- Navbar Hide/Show on Scroll (Hanya untuk halaman utama/index) ---
    // Pastikan ini hanya berjalan di halaman yang memiliki scroll panjang
    const navbar = document.querySelector('.navbar');
    // Memeriksa apakah body memiliki class 'project-detail-page'
    const isDetailPage = document.body.classList.contains('project-detail-page');

    if (navbar && !isDetailPage) { // Hanya aktifkan fitur ini di halaman non-detail
        let lastScrollY = window.scrollY;
        window.addEventListener('scroll', () => {
            if (window.scrollY === 0) {
                // Di paling atas halaman, selalu tampilkan navbar
                navbar.style.top = '0';
            } else if (window.scrollY > lastScrollY && window.scrollY > 100) {
                // Scroll ke bawah dan sudah melewati 100px, sembunyikan navbar
                navbar.style.top = '-80px'; // Sesuaikan tinggi navbar jika perlu
            } else {
                // Scroll ke atas, tampilkan navbar
                navbar.style.top = '0';
            }
            lastScrollY = window.scrollY;
        });
    }

    // --- Smooth Scroll for Internal Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Hanya cegah default jika bukan link ke halaman lain
            if (this.hostname === window.location.hostname && this.pathname === window.location.pathname) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId && targetId !== '#') {
                    const targetElem = document.querySelector(targetId);
                    if (targetElem) {
                        // Tambahkan offset untuk navbar agar judul tidak tertutup
                        const navbarHeight = navbar ? navbar.offsetHeight : 0;
                        const elementPosition = targetElem.getBoundingClientRect().top + window.scrollY;
                        const offsetPosition = elementPosition - navbarHeight - 20; // 20px padding tambahan

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });

                        // Tambahkan fokus setelah scroll selesai untuk aksesibilitas
                        targetElem.focus();
                        // Pastikan targetElem dapat menerima fokus
                        if (!targetElem.hasAttribute('tabindex')) {
                            targetElem.setAttribute('tabindex', '-1');
                        }
                    }
                }
            }
        });
    });

    // Handle accessibility for closing sidebar with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            if (sidebar && sidebar.classList.contains('open')) {
                closeSidebarButton.click(); // Simulasikan klik tombol tutup
            }
        }
    });
});
