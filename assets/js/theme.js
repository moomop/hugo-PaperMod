const themeInit = () => {
    var hamburger = document.getElementById('header-hamburger');
    var menu = document.getElementById('menu');
    //element.style.backgroundColor = 'blue';
    hamburger.addEventListener("click", function() {
        this.classList.toggle("is-active");
        menu.classList.toggle("is-active");
      }, false);
};


if (document.readyState !== 'loading') {
    themeInit();
} else {
    document.addEventListener('DOMContentLoaded', themeInit);
}