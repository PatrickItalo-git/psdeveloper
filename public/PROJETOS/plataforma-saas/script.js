// Initialize Lucide icons
lucide.createIcons();

// Smooth scroll for input interaction
const startBtn = document.querySelector('.input-group button');
const emailInput = document.querySelector('.input-group input');

startBtn.addEventListener('click', () => {
    if (emailInput.value !== '') {
        startBtn.innerHTML = '<i data-lucide="check"></i> Enviado!';
        lucide.createIcons();
        startBtn.style.background = '#059669';
    } else {
        emailInput.focus();
        emailInput.style.borderColor = '#ef4444';
        setTimeout(() => emailInput.style.borderColor = '', 2000);
    }
});

// Floating elements animation
document.addEventListener('mousemove', (e) => {
    const frame = document.querySelector('.window-frame');
    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;
    
    if (window.innerWidth > 1024) {
        frame.style.transform = `perspective(1000px) rotateY(${-5 + x}deg) rotateX(${2 + y}deg)`;
    }
});
