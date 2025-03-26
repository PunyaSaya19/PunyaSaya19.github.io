// alert(window.innerWidth)

// variables
// page loader
const PageLoader = document.querySelector("#page-loader");
// for portfolio
const PortfolioContainer = document.querySelector(".portfolio-content-desc");
const PortfolioDetail = document.querySelector("#portfolio-detail");
const PortfolioCloseBtn = document.querySelector("#portfolio-detail-close");
const PortfolioDetailImgDisplay = document.querySelector(
  ".portfolio-detail-img-list"
);
const PortfolioDetailImgDescription = document.querySelector(
  ".portfolio-detail-content"
);
const PortfolioBtnNext = document.querySelector(
  "#portfolio-detail-img-nav-next"
);
const PortfolioBtnPrev = document.querySelector(
  "#portfolio-detail-img-nav-prev"
);
const PortfolioLists = document.querySelectorAll(".portfolio-content-list");
let PortfolioIDProject = null;
let PortfolioImgNow = 0;
let PortfolioImgMax = 0;
let PortfolioImgSource = "";
let PortfolioImgDesc = "";

// functions
// for portfolio
function showPortfolioLayer(show = true) {
  if (show) {
    PortfolioDetail.classList.add("active");
  } else {
    PortfolioDetail.classList.remove("active");
  }
}
function filterPortfolioData(datas, id) {
  let rslt = null;
  datas.forEach((dt) => {
    if (dt.id == id) {
      rslt = dt;
    }
  });
  return rslt;
}
function setPortfolioVariables(data) {
  PortfolioIDProject = data.id;
  PortfolioImgMax = data.img_count;
  PortfolioImgSource = data.img_folder;
  PortfolioImgDesc = data.deskripsi;
  PortfolioImgNow = 0;
}
function showPortfolioImg(source, name) {
  PortfolioDetailImgDisplay.setAttribute("src", source + name + ".png");
}
function changePortfolioDesc() {
  PortfolioDetailImgDescription.innerHTML = PortfolioImgDesc;
}
function getDataPortfolio(id) {
  const xhr = new XMLHttpRequest();
  xhr.onload = (e) => {
    if (xhr.status == 200) {
      const result = JSON.parse(xhr.responseText);
      const filterData = filterPortfolioData(result.datas, id);
      setPortfolioVariables(filterData);
      showPortfolioImg(PortfolioImgSource, "main");
      changePortfolioDesc();
      showPortfolioLayer(true);
    } else {
      alert("Gagal load data");
      showPortfolioLayer(false);
    }
  };
  xhr.open("GET", "resource.json");
  xhr.send();
}
function loadAllPortfolio() {
  const xhr = new XMLHttpRequest();
  xhr.onload = (e) => {
    if (xhr.status == 200) {
      const result = JSON.parse(xhr.responseText);
      if(PortfolioContainer) {
        PortfolioContainer.innerHTML = loadPortfolioTemplate(result.datas);
      }
    } else {
      alert("Gagal load data");
    }
  };
  xhr.open("GET", "resource.json");
  xhr.send();
}
function loadPortfolioTemplate(data) {
  let tmplt = ``;
  data.forEach((dt) => {
    tmplt += `
        <div class="portfolio-content-list" data-id="${dt.id}" onclick="displayPortfolioDetail('${dt.id}')">
            <img src="${dt.img_folder}main.png" alt="Portfolio Photo" srcset="" class="portfolio-content-list-img">
            <h4 class="portfolio-content-list-title">
                ${dt.judul}
            </h4>
            <div class="portfolio-content-list-layer">
                <i class="fas fa-plus"></i>
            </div>
        </div>
        `;
  });
  return tmplt;
}
function displayPortfolioDetail(id) {
  getDataPortfolio(id);
}
// actions
// for portfolio
if (PortfolioCloseBtn != null) {
  PortfolioCloseBtn.addEventListener("click", () => {
    showPortfolioLayer(false);
  });
}
if (PortfolioBtnNext != null) {
  PortfolioBtnNext.addEventListener("click", () => {
    if (PortfolioImgNow < PortfolioImgMax) {
      PortfolioImgNow = PortfolioImgNow + 1;
      showPortfolioImg(PortfolioImgSource, PortfolioImgNow);
    }
  });
}

if (PortfolioBtnPrev != null) {
  PortfolioBtnPrev.addEventListener("click", () => {
    if (PortfolioImgNow > 1) {
      PortfolioImgNow = PortfolioImgNow - 1;
      showPortfolioImg(PortfolioImgSource, PortfolioImgNow);
    }
  });
}

// load all portfolio
loadAllPortfolio();
// global
window.addEventListener("load", () => {
  setTimeout(() => {
    PageLoader.classList.add("page-loader-none");
  }, 500);
});
