ocument.addEventListener('DOMContentLoaded', () => {
    // Ambil elemen-elemen yang diperlukan
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const closeSidebarButton = document.getElementById('close-sidebar');
    const htmlElement = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    const sidebarThemeToggle = document.getElementById('sidebar-theme-toggle');

    // --- Sidebar Toggle (Hamburger Menu) ---
    if (menuToggle && sidebar && closeSidebarButton) {
        menuToggle.addEventListener('click', () => {
            const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isOpen);

            if (sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
                sidebar.setAttribute('hidden', '');
                menuToggle.focus();
            } else {
                sidebar.classList.add('open');
                sidebar.removeAttribute('hidden');
                sidebar.focus();
            }
        });

        closeSidebarButton.addEventListener('click', () => {
            sidebar.classList.remove('open');
            sidebar.setAttribute('hidden', '');
            menuToggle.setAttribute('aria-expanded', false);
            menuToggle.focus();
        });

        // Tutup sidebar saat mengklik link atau tombol tema di dalam sidebar
        sidebar.addEventListener('click', (event) => {
            if (event.target.matches('.sidebar-link')) {
                sidebar.classList.remove('open');
                sidebar.setAttribute('hidden', '');
                menuToggle.setAttribute('aria-expanded', false);
                if (event.target.tagName === 'A') {
                    // Cek jika link adalah internal anchor, jangan scroll di sini
                    const href = event.target.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        // Biarkan smooth scroll handler yang menanganinya
                    }
                } else if (event.target.id === 'sidebar-theme-toggle') {
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
    const navbar = document.querySelector('.navbar');
    const isDetailPage = document.body.classList.contains('project-detail-page');

    if (navbar && !isDetailPage) {
        let lastScrollY = window.scrollY;
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

    // --- Smooth Scroll for Internal Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.hostname === window.location.hostname && this.pathname === window.location.pathname) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId && targetId !== '#') {
                    const targetElem = document.querySelector(targetId);
                    if (targetElem) {
                        const navbarHeight = navbar ? navbar.offsetHeight : 0;
                        const elementPosition = targetElem.getBoundingClientRect().top + window.scrollY;
                        const offsetPosition = elementPosition - navbarHeight - 20;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });

                        targetElem.focus();
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
                closeSidebarButton.click();
            }
        }
    });
});
