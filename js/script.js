// variables
const nav_toggle = document.querySelector("#my_nav_toggle");
const nav_menu = document.querySelector("#my_nav_menu");
const portfolio_boxs = document.querySelector(".portfolio_boxs");
const xhr = new XMLHttpRequest();

// actions
nav_toggle.addEventListener("click", function () {
  nav_menu.classList.toggle("active");
});
$(document).ready(function () {
  showPortfolio();
});

// functions
function showPortfolio() {
  xhr.onload = () => {
    if (xhr.status == 200) {
      const data = JSON.parse(xhr.responseText);
      const portfolios = data.datas;
      portfolio_boxs.innerHTML = tmpltPortfolio(portfolios);
      $(".owl-carousel").owlCarousel({
        items: 1,
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        // nav:true,
        responsive: {
          576: {
            items: 3,
          },
        },
      });
    } else {
      alert("gagal load data");
    }
  };
  xhr.open("GET", "resource.json");
  xhr.send();
}

function tmpltPortfolio(data) {
  let tmplt = "";
  data.forEach((dt) => {
    tmplt += `
      <div class="portfolio_box">
        <div class="portfolio_bx">
          <div class="portfolio_img">
            <img src="${dt.img_folder + dt.img_main}.png" alt="" srcset="">
            <div class="portfolio_img_layer">
              <a href="detail_project.html?id=${
                dt.id
              }" class="portfolio_img_layer_btn">
                View Detail 
              </a>
            </div>
          </div>
          <div class="portfolio_info">
            <h6 class="portfolio_info_title">
            ${dt.judul}
            </h6>
          </div>
        </div>
      </div>
    `;
  });
  console.log(tmplt);
  return tmplt;
}
