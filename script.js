function updateViewBox() {
  const svg = document.querySelector(".main-svg");
  if (window.innerWidth > 768) {
    svg.setAttribute("viewBox", "0 0 1000 400");
  } else {
    svg.setAttribute("viewBox", "0 0 1000 1000");
  }
}

window.addEventListener("load", updateViewBox);
window.addEventListener("resize", updateViewBox);
