// inisialisasi variabel"
const navbar = document.querySelector("#my_nav");
const navMenu = document.querySelector("#my_nav_menu");
const btnToggle = document.querySelector("#my_toggle_menu");
const menuLists = document.querySelectorAll("#my_nav_menu ul li a");
const navLayer = document.querySelector("#my_nav_layer");
const hero = document.querySelector("#hero");
const allSection = document.querySelectorAll("section");
const loadingScreen = document.querySelector("#loading_screen");

// action 
window.addEventListener("load", () => {
  // remove lpading screen 
  removeLoadingScreen();
  // set section height
  setHeroHeight();
  // set padding top section
  setSectionPadTop();
  // text typing
  const myText = new AutoTyping({
    id: 'hero_name',
    typeText: ['Rifan Hidayat'],
    textColor: "#1597E5",
    cursorColor: "#4070F4",
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

navLayer.addEventListener("click" ,() => {
  navMenu.classList.remove("menu_active");
  navLayer.classList.remove("layer_active");
})

btnToggle.addEventListener("click", (e) => {
  navMenu.classList.add("menu_active");
  navLayer.classList.add("layer_active");
});
menuLists.forEach((e) => {
  e.addEventListener("click", (el) => {
    navMenu.classList.remove("menu_active");
    navLayer.classList.remove("layer_active");
  })
})


// function 
function setHeroHeight() {
  if ((window.innerHeight > 850) && (window.innerWidth > 768)) {
    hero.style.minHeight = "500px";
  }
}

function setSectionPadTop() {
  const navHeight = navbar.clientHeight + 5;
  document.documentElement.style.setProperty('--section-padding-top', `${navHeight + 16}px`);
}

function removeLoadingScreen() {
  loadingScreen.style.display = "none";
}