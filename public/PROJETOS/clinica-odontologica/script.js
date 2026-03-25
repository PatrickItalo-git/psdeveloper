// Initialize Lucide icons
lucide.createIcons();

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 80px';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.padding = '20px 80px';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
