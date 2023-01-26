var header = document.getElementById('menu');

window.addEventListener('scroll', ()=>{
    var scroll = window.scrollY;
    if (scroll > 10) {
        header.style.backgroundColor = '#161616';
    } else {
        header.style.backgroundColor = 'transparent';
    }
})