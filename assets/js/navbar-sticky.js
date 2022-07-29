// Navbar stick on scroll ++ styles

var navbar = document.querySelector("[navbar-main]");
const white_elements = navbar.querySelectorAll(".text-white");
const white_bg_elements = navbar.querySelectorAll("[sidenav-trigger] i.bg-white");
const white_before_elements = navbar.querySelectorAll(".before\\:text-white");


window.onscroll = function () {
  let blur = navbar.getAttribute("navbar-scroll");
  if (blur == "true") stickyNav();
};

function stickyNav() {
  if (window.scrollY >= 5) {
    navbar.classList.add("sticky", "top-[1%]", "backdrop-saturate-200", "dark:bg-slate-850/80", "dark:shadow-dark-blur", "backdrop-blur-2xl", "bg-[hsla(0,0%,100%,0.8)]", "shadow-blur", "z-110");
    white_elements.forEach(element => {
      element.classList.remove("text-white")
      element.classList.add("dark:text-white")
    });
    white_bg_elements.forEach(element => {
      element.classList.remove("bg-white")
      element.classList.add("dark:bg-white")
      element.classList.add("bg-slate-500")
    });
    white_before_elements.forEach(element => {
      element.classList.add("dark:before:text-white")
      element.classList.remove("before:text-white")
    });
  } else {
    navbar.classList.remove("sticky", "top-[1%]", "backdrop-saturate-200", "dark:bg-slate-850/80", "dark:shadow-dark-blur", "backdrop-blur-2xl", "bg-[hsla(0,0%,100%,0.8)]", "shadow-blur", "z-110");
    white_elements.forEach(element => {
      element.classList.add("text-white")
      element.classList.remove("dark:text-white")
    });
    white_bg_elements.forEach(element => {
      element.classList.add("bg-white")
      element.classList.remove("dark:bg-white")
      element.classList.remove("bg-slate-500")
    });
    white_before_elements.forEach(element => {
      element.classList.remove("dark:before:text-white")
      element.classList.add("before:text-white")
    });
  }
}
