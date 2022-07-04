const body = document.getElementById("body");
const hamburgerIcon = document.getElementById("nav-menu-icon");
const mobileMenu = document.getElementById("nav-mobile-menu");

hamburgerIcon.addEventListener("click", (e) => {
    e.preventDefault();
    mobileMenu.classList.toggle("nav-mobile-menu-open");
    body.classList.toggle("overflowHidden");
    if(mobileMenu.classList.contains("nav-mobile-menu-open")){
        hamburgerIcon.src = "images/icon-close.svg";
    } else {
        hamburgerIcon.src = "images/icon-hamburger.svg";
    }  
})

