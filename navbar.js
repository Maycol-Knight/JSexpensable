const navbarMenu = document.querySelector(".js-navbar-menu");
const navbar = document.querySelector(".js-navbar");

navbarMenu.addEventListener("click", () => {
  navbar.classList.toggle("navbar--open");
});
// console.log(navBar);
