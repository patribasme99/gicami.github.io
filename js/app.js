var header = document.getElementById('menu');
var header_historia = document.getElementById("menu_historia");

window.addEventListener('scroll', ()=>{
    var scroll = window.scrollY;
    if (scroll > 10) {
        header.style.backgroundColor = '#161616';
    } else {
        header.style.backgroundColor = 'transparent';
    }
})

window.addEventListener('scroll', ()=>{
    var scroll = window.scrollY;
    if (scroll > 10) {
        header_historia.style.backgroundColor = '#161616';
        header_historia.style.color = '#fff';
    } else {
        header_historia.style.backgroundColor = 'transparent';
    }
})