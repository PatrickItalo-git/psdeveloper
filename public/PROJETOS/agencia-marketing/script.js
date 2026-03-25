// Initialize Lucide icons
lucide.createIcons();

// Mouse parallax effect for hero image
document.addEventListener('mousemove', (e) => {
    const glass = document.querySelector('.glass-container');
    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;
    
    if (window.innerWidth > 1024) {
        glass.style.transform = `perspective(1000px) rotateY(${-15 + x}deg) rotateX(${y}deg)`;
    }
});

// Card intersection observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card-glass').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.8s ease-out';
    observer.observe(card);
});
