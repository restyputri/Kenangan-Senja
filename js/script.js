//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika hamburber menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar untuk menghilangkan nav
const hamburber = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburber.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
