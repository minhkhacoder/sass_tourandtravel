const toggle = document.querySelector(".menu-toggle");
const close = document.querySelector(".menu-close");
const menu = document.querySelector(".menu");
const activeOpen = "is-show";
const activeClose = "is-close";
toggle.addEventListener("click", () => {
  menu.classList.add(activeOpen);
});

toggle.addEventListener("click", () => {
  menu.classList.add(activeClose);
});

window.addEventListener("click", (e) => {
  if((!menu.contains(e.target) && !e.target.matches(".menu-toggle")) || (menu.contains(e.target) && e.target.matches(".menu-close"))) {
    menu.classList.remove(activeOpen);
    menu.classList.remove(activeClose);
  }
})


