function updateViewBox() {
  const svg = document.querySelector(".main-svg");
  if (window.innerWidth > 768) {
    svg.setAttribute("viewBox", "0 0 990 250");
  } else {
    svg.setAttribute("viewBox", "0 0 990 900");
  }
}

window.addEventListener("load", updateViewBox);
window.addEventListener("resize", updateViewBox);
