// Header - Menu
let menu = document.querySelector('.menu');
let navbar = document.querySelector('.navbar');


function display(){
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    cart.classList.remove('active');
    form.classList.remove('active');
}

// Header - Cart
let cart = document.querySelector('.cart');

function toggle(){
    cart.classList.toggle('active');
    navbar.classList.remove('active');
    menu.classList.remove('move');
    form.classList.remove('active');
}

// Header - LoginForm
let form = document.querySelector('.login-form');

function login(){
    form.classList.toggle('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
    menu.classList.remove('move');
}

// On Click On Menu Links Removed Menu
window.onscroll = function(){
    navbar.classList.remove('active');
    menu.classList.remove('move');
    
}

// Change Header Background & Shadow On Scroll 
let header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("shadow" , window.scrollY > 0);
});

// Scroll Top
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll",function(){
    scrollTop.classList.toggle("active" , window.scrollY > 0);
});
alert(`User live server or local server`);

