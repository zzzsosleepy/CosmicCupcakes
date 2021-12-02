//Get the back-to-top button:
let backToTopButton = document.getElementById("myBtn");

//Get the CTA button
let galleryCTAButton = document.getElementById("productsCTA");

//Get navbar, nav links, and nav logo
let navBar = document.getElementById("navBar");
let navLogo = document.getElementById("navLogo");

let navLinks = [];
navLinks.push(document.getElementById("navHome"));
navLinks.push(document.getElementById("navProducts"));
navLinks.push(document.getElementById("navContact"));

let navLinkDefaultColor = navLinks[0].style.color;
let navLinkAltColor = "var(--clr100)";

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        backToTopButton.style.opacity = 100;
    } else {
        backToTopButton.style.opacity = 0;
    }
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
        navBar.style.backgroundColor = "#ff87ab";
        navLinks.forEach(link => link.style.color = navLinkAltColor);
        navLogo.src = "img/logo_alt.png";
    } else {
        //AT TOP
        navBar.style.backgroundColor = "#e6e6e6";
        navLinks.forEach(link => link.style.color = navLinkDefaultColor);
        navLogo.src = "img/logo.png";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
}

// When the user clicks on the button, scroll to the gallery
function galleryFunction() {
    window.scroll({
        top: 1000,
        behavior: 'smooth'
    })
}

//SET UP AND DISPLAY LOADING SCREEN 
const loader = document.querySelector(".loader");
window.onload = function () {
    setTimeout(function () {
        loader.style.pointerEvents = "none";
        loader.style.transform = "translateY(-100%)";
        setTimeout(function () {
            loader.style.display = "none";
        }, 1700);
    }, 1800);
}