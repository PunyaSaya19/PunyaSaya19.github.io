// inisialisasi variabel"
const navbar = document.querySelector("#my_nav");
const navMenu = document.querySelector("#my_nav_menu");
const btnToggle = document.querySelector("#my_toggle_menu");
const btnToggleClose = document.querySelector("#my_toggle_close");
const menuLists = document.querySelectorAll("#my_nav_menu ul li a");
const navLayer = document.querySelector("#my_nav_layer");
const allSection = document.querySelectorAll("section");


// action 
window.addEventListener("DOMContentLoaded", () => {
  // set section height
  setSectionHeight()
  
  // set padding top section
  setSectionPadTop();
  // text typing
  const myText = new AutoTyping({
    id: 'hero_name',
    typeText: ['Rifan Hidayat'],
    textColor: "#1597E5",
    cursorColor: "#1597E5",
    typeSpeed: 200
  }).init();
});

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


// function 
function setSectionHeight() {
  if ((window.innerHeight > 850) && (window.innerWidth > 768)) {
    document.documentElement.style.setProperty('--section-min-height', '600px');
  }
}

function setSectionPadTop() {
  const navHeight = navbar.clientHeight + 5;
  document.documentElement.style.setProperty('--section-padding-top', `${navHeight + 5}px`);
}