// Google Analytics Configuration
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-W9FKDMF63S');

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Email Obfuscation to prevent bot scraping
document.addEventListener("DOMContentLoaded", function () {
    // Base64 encoded email to hide from simple spam scrapers
    const encodedEmail = "b2ZmaWNpYWwuc2hpeWFzQGdtYWlsLmNvbQ==";
    const email = atob(encodedEmail);

    // Populate email text
    document.getElementById("email-display").innerText = email;

    // Populate href attributes
    document.getElementById("mail-app-btn").setAttribute("href", "mailto:" + email);
    document.getElementById("gmail-btn").setAttribute("href", "https://mail.google.com/mail/?view=cm&fs=1&to=" + email);

    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            const isActive = mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
            mobileMenu.setAttribute('aria-expanded', isActive);
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
                mobileMenu.setAttribute('aria-expanded', 'false');
            });
        });
    }
});
