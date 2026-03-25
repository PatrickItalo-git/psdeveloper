// Initialize icons
lucide.createIcons();

// Category filtering
const catButtons = document.querySelectorAll('.cat-btn');
const menuItems = document.querySelectorAll('.menu-item');

catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');
        
        // Update active button
        catButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter items
        menuItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'flex';
                setTimeout(() => item.style.opacity = '1', 10);
            } else {
                item.style.opacity = '0';
                setTimeout(() => item.style.display = 'none', 300);
            }
        });
    });
});

// Cart Simulation
let cartCount = 0;
let cartTotal = 0;
const cartInfo = document.querySelector('.cart-info span');
const totalDisplay = document.querySelector('.total');

document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const priceText = btn.parentElement.querySelector('h3 span').innerText;
        const price = parseFloat(priceText.replace('R$ ', ''));
        
        cartCount++;
        cartTotal += price;
        
        cartInfo.innerText = `Seu Pedido (${cartCount} itens)`;
        totalDisplay.innerText = `R$ ${cartTotal.toFixed(2).replace('.', ',')}`;
        
        // Feedback animation
        btn.style.transform = 'scale(1.2)';
        setTimeout(() => btn.style.transform = 'scale(1)', 200);
    });
});
