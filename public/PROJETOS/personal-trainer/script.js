// Custom Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Cursor hover effect
document.querySelectorAll('a, button, .card').forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2.5)';
        cursor.style.background = 'white';
    });
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.background = '#ff4d00';
    });
});

// Text reveal on scroll
const reveal = () => {
    const title = document.querySelector('.hero-content h1');
    const scrollPos = window.scrollY;
    title.style.transform = `translateY(${scrollPos * 0.3}px)`;
};

window.addEventListener('scroll', reveal);
