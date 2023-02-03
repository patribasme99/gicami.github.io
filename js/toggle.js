var toggle = document.getElementById("container-toggle");
var historia = document.getElementById("historia_oscuro");
var logo = document.getElementById("logo_historia");

toggle.onclick = function() {
    toggle.classList.toggle("active");
    historia.classList.toggle("active");
    logo.classList.toggle("active");  
}