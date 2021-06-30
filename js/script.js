const navbar = document.getElementById("navbar");
const about = document.getElementById("about");
const skills = document.getElementById("skills");
const portfolio = document.getElementById("portfolio");
const education = document.getElementById("education");
const contact = document.getElementById("contact");

about.style.paddingTop = (navbar.clientHeight + 10) + "px";
skills.style.paddingTop = (navbar.clientHeight + 10) + "px";
portfolio.style.paddingTop = (navbar.clientHeight + 10) + "px";
education.style.paddingTop = (navbar.clientHeight + 10) + "px";
contact.style.paddingTop = (navbar.clientHeight + 10) + "px";

const img_portfolio = document.querySelectorAll(".img-portfolio");
const info_img_portfolio = document.querySelectorAll(".info-img-portfolio");
    
img_portfolio.forEach(function(e, i){
  e.addEventListener("mouseenter", function(el){
    info_img_portfolio[i].style.animation = "1s muncul forwards"
  });
  e.addEventListener("mouseout", function(el){
    info_img_portfolio[i].style.animation = "1s sembunyi forwards"
   });
})