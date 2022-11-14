const nav_toggle = document.querySelector("#my_nav_toggle");
const nav_menu = document.querySelector("#my_nav_menu");

nav_toggle.addEventListener('click', function() {
    nav_menu.classList.toggle('active')
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items : 1,
        margin : 30,
        loop : true,
        responsive : {
            576 : {
                items : 3,
            }
        }
    });
  });