// inisialisasi variabel"
const navbar = document.querySelector("#my_nav");
const navMenu = document.querySelector("#my_nav_menu");
const btnToggle = document.querySelector("#my_toggle_menu");
const btnToggleClose = document.querySelector("#my_toggle_close");
const menuLists = document.querySelectorAll("#my_nav_menu ul li a");
const navLayer = document.querySelector("#my_nav_layer");
const allSection = document.querySelectorAll("section");

/*
const myText = new AutoTyping({
  id: 'hero-name',
  typeText: ['Rifan Hidayat'],
  textColor: "#5C7AEA",
  cursorColor: "#5C7AEA",
  typeSpeed: 200
}).init();
*/

// action 
window.addEventListener("DOMContentLoaded", () => {
  if ((window.innerHeight > 850) && (window.innerWidth > 768)) {
    document.documentElement.style.setProperty('--section-min-height', '600px');
  }
})

window.onscroll = () => {
  if (window.pageYOffset > 0) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
}

btnToggle.addEventListener("click", (e) => {
  navMenu.classList.add("menu_active");
  navLayer.classList.add("layer_active");
});
btnToggleClose.addEventListener("click", (e) => {
  navMenu.classList.remove("menu_active");
  navLayer.classList.remove("layer_active");
});
menuLists.forEach((e) => {
  e.addEventListener("click", (el) => {
    navMenu.classList.remove("menu_active");
    navLayer.classList.remove("layer_active");
  })
})
