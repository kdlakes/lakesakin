const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const navMenu = document.getElementById('nav-menu');

openBtn.addEventListener('click', () => {
    navMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    navMenu.style.display = 'none';
});

