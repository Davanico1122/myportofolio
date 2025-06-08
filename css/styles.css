@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

/* === Tema Warna === */
:root {
  --bg-color: #0d0d0d;
  --text-color: #ffffff;
  --primary-color: #8b5cf6;
  --secondary-color: #ec4899;
  --card-bg: #1a1a1a;
  --border-color: rgba(255, 255, 255, 0.1);
  --secondary-text-color: #aaa;
  --button-text-color: #ffffff;
  --link-color: var(--primary-color);
  --link-hover-color: var(--secondary-color);
}

[data-theme="light"] {
  --bg-color: #ffffff;
  --text-color: #0d0d0d;
  --primary-color: #7c3aed;
  --secondary-color: #db2777;
  --card-bg: #f4f4f4;
  --border-color: rgba(0, 0, 0, 0.1);
  --secondary-text-color: #555;
  --button-text-color: #ffffff;
  --link-color: var(--primary-color);
  --link-hover-color: var(--secondary-color);
}

/* === Umum === */
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  background-color: var(--bg-color);
  color: var(--text-color);
  line-height: 1.6;
  scroll-behavior: smooth;
  padding-top: 68px; /* untuk navbar sticky */
}

/* === Container === */
.container {
  width: 92%;
  max-width: 1200px;
  margin: auto;
  padding: 60px 0;
}

/* === Navbar === */
.navbar {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: var(--bg-color);
  padding: 0.75rem 0;
  z-index: 9999;
  transition: top 0.3s;
  border-bottom: 1px solid var(--border-color);
  box-shadow: 0 4px 16px rgba(0,0,0,0.07);
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.logo {
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--primary-color);
  text-decoration: none;
  letter-spacing: 1px;
  margin-right: 2.5rem;
  transition: color 0.3s;
}

.logo:hover {
  color: var(--secondary-color);
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2.2rem;
  margin: 0;
  align-items: center;
  padding: 0;
}

.nav-links li {
  position: relative;
}

.nav-links a,
#theme-toggle {
  color: var(--text-color);
  text-decoration: none;
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease, background 0.2s;
  padding: 0.5rem 0.9rem;
  border-radius: 6px;
}

.nav-links a:hover,
.nav-links a:focus {
  background: var(--primary-color);
  color: #fff;
  outline: none;
}

#theme-toggle {
  padding: 0.5rem 0.9rem;
  border: 1px solid var(--primary-color);
  border-radius: 6px;
  margin-left: 0.7rem;
  color: var(--primary-color);
  background: transparent;
  font-size: 1.1rem;
  transition: color 0.2s, background 0.2s, border 0.2s;
}

#theme-toggle:hover,
#theme-toggle:focus {
  background: var(--secondary-color);
  color: #fff;
  border-color: var(--secondary-color);
}

/* Hamburger Menu (Mobile) */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  background: transparent;
  border: none;
  cursor: pointer;
  margin-left: 1rem;
}

.menu-toggle span {
  display: block;
  width: 100%;
  height: 4px;
  margin: 4px 0;
  background-color: var(--primary-color);
  border-radius: 2px;
  transition: all 0.3s;
}

/* === Hero Section === */
.hero {
  padding-top: 3rem;
  padding-bottom: 4rem;
  text-align: center;
}

.hero h2 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
}

.hero p {
  max-width: 600px;
  margin: auto;
  font-size: 1rem;
}

.profile-pic {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  margin: 30px auto 0;
  border: 4px solid var(--primary-color);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  display: block;
  transition: transform 0.3s ease;
}

.profile-pic:hover {
  transform: scale(1.05);
}

/* === Section Title === */
#about h2,
#skills h2,
#projects h2,
#contact h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.2rem;
  color: var(--primary-color);
}

/* === About === */
#about p {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

/* === Skills === */
#skills ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

#skills li {
  background-color: var(--card-bg);
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 1em;
  color: var(--text-color);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

#skills li:hover {
  transform: translateY(-3px);
}

/* === Projects === */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: var(--card-bg);
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  max-height: 180px;
  object-fit: cover;
  margin-bottom: 1rem;
}

.project-card h3 {
  font-size: 1.3rem;
  margin: 0.5rem 0;
  color: var(--primary-color);
}

.project-card p {
  font-size: 0.95rem;
  flex-grow: 1;
  color: var(--secondary-text-color);
}

.btn-project {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.6rem 1.2rem;
  font-size: 0.95rem;
  background-color: var(--primary-color);
  color: var(--button-text-color);
  border: none;
  border-radius: 5px;
  text-align: center;
  transition: background 0.3s ease;
  text-decoration: none;
  align-self: flex-start;
}

.btn-project.secondary {
  background-color: transparent;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
}

.btn-project:hover {
  background-color: var(--secondary-color);
}

/* === Contact === */
#contact {
  text-align: center;
}

#contact p {
  margin-bottom: 30px;
  font-size: 1.1em;
  line-height: 1.6;
  color: var(--text-color);
}

.contact-info {
  margin-top: 30px;
  font-size: 1.2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.contact-info p {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
}

.contact-info a {
  color: var(--link-color);
  text-decoration: none;
  transition: color 0.3s ease, text-decoration 0.3s ease;
}

.contact-info a:hover {
  color: var(--link-hover-color);
  text-decoration: underline;
}

.contact-info p i {
  font-size: 1.2em;
  color: var(--primary-color);
}

/* === Footer === */
footer {
  padding: 2rem 0;
  text-align: center;
  font-size: 0.9rem;
  color: var(--secondary-text-color);
  border-top: 1px solid var(--border-color);
  margin-top: 60px;
}

/* === Project Detail Page === */
.project-detail-page {
  padding-top: 7rem;
  padding-bottom: 4rem;
}

.back-to-portfolio {
  display: inline-block;
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: var(--button-text-color);
  text-decoration: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-bottom: 30px;
}

.back-to-portfolio i {
  font-size: 1em;
  margin-right: 8px;
  color: inherit;
}

.back-to-portfolio:hover {
  background-color: var(--secondary-color);
  color: var(--button-text-color);
  text-decoration: none;
}

.project-hero {
  text-align: center;
  margin-bottom: 2rem;
}

.project-title {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
}

.project-hero p {
  max-width: 800px;
  margin: auto;
  font-size: 1rem;
  margin-bottom: 40px;
}

.poster-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  justify-content: center;
  margin-bottom: 3rem;
}

.poster-item {
  background-color: var(--card-bg);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.poster-item:hover {
  transform: translateY(-5px);
}

.poster-item img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
}

.poster-caption {
  padding: 15px;
  font-size: 0.9em;
  color: var(--secondary-text-color);
  flex-grow: 1;
}

.project-description {
  max-width: 800px;
  margin: auto;
  padding: 1rem;
}

.project-description h3 {
  margin-top: 1.5rem;
  color: var(--primary-color);
}

.project-description ul.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
  justify-content: center;
}

.project-description ul.skills li {
  background-color: var(--card-bg);
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
  font-size: 0.85rem;
}

.project-links {
  margin-top: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.project-links .btn-project {
  margin-top: 0;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
}

/* === Responsiveness === */
@media (max-width: 1024px) {
  .navbar .container { padding: 0 1rem; }
  .nav-links { gap: 1.2rem; }
}

@media (max-width: 900px) {
  .navbar .container { padding: 0 0.5rem; }
  .logo { margin-right: 1rem; }
  .nav-links { gap: 1rem; }
}

/* Mobile Navbar - Hamburger */
@media (max-width: 700px) {
  body { padding-top: 60px; }
  .navbar .container { padding: 0 0.5rem; }
  .menu-toggle { display: flex; }
  .nav-links {
    position: absolute;
    top: 100%;
    right: 0;
    background: var(--bg-color);
    flex-direction: column;
    gap: 0.5rem;
    width: 180px;
    padding: 1.2rem 1.2rem 1.2rem 0.7rem;
    border-radius: 0 0 12px 12px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    display: none;
  }
  .nav-links.open {
    display: flex;
  }
  .hero h2 { font-size: 2rem; }
  .project-card h3 { font-size: 1.1rem; }
  .contact-info { font-size: 1em; }
  #skills li { padding: 6px 12px; font-size: 0.9em; }
  .profile-pic { width: 120px; height: 120px; margin-top: 20px; }
  .poster-gallery { grid-template-columns: 1fr; gap: 20px; }
  .poster-item img { height: 180px; }
}

/* Hamburger logic (needs JS to toggle .open on .nav-links) */
@media (max-width: 700px) {
  .nav-links { display: none; }
  .nav-links.open { display: flex; }
}

/* Extra small screen */
@media (max-width: 480px) {
  .container { padding: 25px 0; }
  .hero h2 { font-size: 1.5rem; }
  #about p { font-size: 0.9em; }
  .btn-project { padding: 0.5rem 1rem; font-size: 0.9em; }
  #contact p { font-size: 1em; }
  .contact-info { font-size: 0.9em; }
  .poster-item img { height: 120px; }
  .project-links { flex-direction: column; gap: 10px; }
}
