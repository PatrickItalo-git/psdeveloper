// Initialize Lucide icons
lucide.createIcons();

// Mouse hover parallax for hologram
const hologram = document.querySelector('.hologram');
document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 30;
    const y = (window.innerHeight / 2 - e.pageY) / 30;
    
    if (hologram && window.innerWidth > 1024) {
        hologram.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
    }
});

// Scroll Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card').forEach(card => {
    observer.observe(card);
});

// Sound effect simulation (optional wow factor)
document.querySelectorAll('.buy-btn, .nav-icons i').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        // Here you could add a subtle futuristic beep sound
        console.log('Nebula hover');
    });
});
