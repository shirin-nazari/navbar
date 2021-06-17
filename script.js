const header = document.querySelector("header");
const ulMenu = document.querySelector(".ul-nav");
const li = document.querySelectorAll(".ul-nav li");
const icons = document.querySelector(".line");

icons.addEventListener("click", () => {
  ulMenu.classList.toggle("nav-active");
  // li.style.opacity = "1%";
});
