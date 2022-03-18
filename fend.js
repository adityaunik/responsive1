const nav = document.querySelectorAll('.nav');
const menu = document.querySelector('#menu');
const close = document.querySelector('#close')

for (var i = 0; i < nav.length; i++) {
    nav[i].addEventListener('click', () => {
        alert('Page not available');
    });
}


menu.addEventListener('click', () => {
    document.querySelector('.header').style.display = 'none';
    document.querySelector('#sidebar').style.display = 'block';
});


close.addEventListener('click', () => {
    document.querySelector('.header').style.display = 'flex';
    document.querySelector('#sidebar').style.display = 'none';
});


