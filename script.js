const header = document.querySelector("header");
const ulMenu = document.querySelector("ul");
header.addEventListener("fullscreenchange", () => {
  console.log(screen);
  if (screen.availWidth < 1024) {
    ulMenu.style.display = "none";
    const icons = document.createElement("i");
    icons.className = "fas fa-bars";
    header.append(icons);
  }
});
