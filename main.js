let toggleBtn = document.querySelector(".toggle-menu");
let ulLinks = document.querySelector("nav ul");
let navContainer = document.querySelector("nav");

toggleBtn.onclick = function (e) {
  e.stopPropagation();
  navContainer.classList.toggle("open");
};

document.addEventListener("click", (e) => {
  if (e.target !== toggleBtn && e.target !== ulLinks) {
    if (navContainer.classList.contains("open")) {
      navContainer.classList.toggle("open");
    }
  }
});