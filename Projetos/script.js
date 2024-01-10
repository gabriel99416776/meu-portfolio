var prevScrollpos = window.pageYOffset;
var header = document.getElementById("site-header");

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        header.style.top = "0";
    } else {
        header.style.top = "-100px"; // Altura do cabeçalho + 5px de margem negativa
    }

    prevScrollpos = currentScrollPos;
};
