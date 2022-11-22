const img_mains = document.querySelectorAll(".img_mains");
const img_control = document.querySelector(".img_control");
const img_prev = document.querySelector(".img_prev");
const img_next = document.querySelector(".img_next");

img_next.addEventListener("click", (e) => {
  let i_now = parseInt(img_control.getAttribute("data-now"));
  let i_max = parseInt(img_control.getAttribute("data-max"));
  let i_next = i_now + 1;
  if (i_next <= i_max) {
    img_control.setAttribute("data-now", i_next);
    showImage(i_next);
  } else {
    img_control.setAttribute("data-now", 1);
    showImage(1);
  }
});

img_prev.addEventListener("click", (e) => {
  let i_now = parseInt(img_control.getAttribute("data-now"));
  let i_max = parseInt(img_control.getAttribute("data-max"));
  let i_prev = i_now - 1;
  if (i_prev >= 1) {
    img_control.setAttribute("data-now", i_prev);
    showImage(i_prev);
  } else {
    img_control.setAttribute("data-now", i_max);
    showImage(i_max);
  }
});

function showImage(i) {
  img_mains.forEach((el) => {
    if (el.getAttribute("data-order") == i) {
      el.classList.remove("d_none");
    } else {
      el.classList.add("d_none");
    }
  });
}
