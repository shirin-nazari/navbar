const header = document.querySelector("header");
const ulMenu = document.querySelector(".ul-nav");
const li = document.querySelectorAll(".ul-nav li");
const icons = document.querySelector(".line");
// header.addEventListener("fullscreenchange", () => {
//   console.log(screen);
//   if (screen.availWidth < 1024) {
//     ulMenu.style.display = "none";
//     const icons = document.createElement("i");
//     icons.className = "fas fa-bars";
//     header.append(icons);
//   }
// });
icons.addEventListener("click", () => {
  ulMenu.classList.toggle("nav-active");
  // li.style.opacity = "1%";
});
