// inisialisasi variabel"
const navbar = document.querySelector("#my-nav");
const btnToggle = document.querySelector("#toggle-menu");
const btnToggleClose = document.querySelector("#toggle-close");
const myMenu = document.querySelector("#my-menu");
const menuLists = document.querySelectorAll(".my-nav-menu ul li a");
const allSection = document.querySelectorAll("section");

const myText = new AutoTyping({
  id: 'hero-name',
  typeText: ['Rifan Hidayat'],
  textColor: "#5C7AEA",
  cursorColor: "#5C7AEA",
  typeSpeed: 200
}).init();

// action 
window.addEventListener("DOMContentLoaded", () => {
  
  if((window.innerHeight > 768) && (window.innerWidth > 768)) {
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

btnToggle.addEventListener("click" , (e) => {
  myMenu.classList.add("menu-active");
})

btnToggleClose.addEventListener("click" , (e) => {
  myMenu.classList.remove("menu-active");
})

menuLists.forEach((e) => {
  e.addEventListener("click", (el) => {
    myMenu.classList.remove("menu-active");
  })
})