var pageName = window.location.pathname.split("/").pop().split(".")[0];

var fixedPlugin = document.querySelector("[fixed-plugin]");
var fixedPluginButton = document.querySelector("[fixed-plugin-button]");
var fixedPluginButtonNav = document.querySelector("[fixed-plugin-button-nav]");
var fixedPluginCard = document.querySelector("[fixed-plugin-card]");
var fixedPluginCloseButton = document.querySelector("[fixed-plugin-close-button]");

var navbar = document.querySelector("[navbar-main]");

var buttonNavbarFixed = document.querySelector("[navbarFixed]");

var sidenav = document.querySelector("aside");
var sidenav_icons = sidenav.querySelectorAll("li a div");

var sidenav_target = "../pages/" + pageName + ".html";

var whiteBtn = document.querySelector("[transparent-style-btn]");
var darkBtn = document.querySelector("[white-style-btn]");

var non_active_style = ["bg-none", "bg-transparent", "text-blue-500", "border-blue-500"];
var active_style = ["bg-gradient-blue", "bg-blue-500", "text-white", "border-transparent"];

var white_sidenav_classes = ["bg-white", "shadow-xl"];
// var white_sidenav_highlighted = ["shadow-xl"];
// var white_sidenav_icons = ["bg-white"];

var black_sidenav_classes = ["bg-slate-850", "shadow-none"];
// var black_sidenav_highlighted = ["shadow-none"];
// var black_sidenav_icons = ["bg-gray-200"];

var sidenav_highlight = document.querySelector("a[href=" + CSS.escape(sidenav_target) + "]");

// fixed plugin toggle
if (pageName != "rtl") {
  fixedPluginButton.addEventListener("click", function () {
    fixedPluginCard.classList.toggle("-right-90");
    fixedPluginCard.classList.toggle("right-0");
  });

  fixedPluginButtonNav.addEventListener("click", function () {
    fixedPluginCard.classList.toggle("-right-90");
    fixedPluginCard.classList.toggle("right-0");
  });

  fixedPluginCloseButton.addEventListener("click", function () {
    fixedPluginCard.classList.toggle("-right-90");
    fixedPluginCard.classList.toggle("right-0");
  });

  window.addEventListener("click", function (e) {
    if (!fixedPlugin.contains(e.target) && !fixedPluginButton.contains(e.target) && !fixedPluginButtonNav.contains(e.target)) {
      if (fixedPluginCard.classList.contains("right-0")) {
        fixedPluginCloseButton.click();
      }
    }
  });
} else {
  fixedPluginButton.addEventListener("click", function () {
    fixedPluginCard.classList.toggle("-left-90");
    fixedPluginCard.classList.toggle("left-0");
  });

  fixedPluginButtonNav.addEventListener("click", function () {
    fixedPluginCard.classList.toggle("-left-90");
    fixedPluginCard.classList.toggle("left-0");
  });

  fixedPluginCloseButton.addEventListener("click", function () {
    fixedPluginCard.classList.toggle("-left-90");
    fixedPluginCard.classList.toggle("left-0");
  });

  window.addEventListener("click", function (e) {
    if (!fixedPlugin.contains(e.target) && !fixedPluginButton.contains(e.target) && !fixedPluginButtonNav.contains(e.target)) {
      if (fixedPluginCard.classList.contains("left-0")) {
        fixedPluginCloseButton.click();
      }
    }
  });
}

// color sidenav

function sidebarColor(a) {
  var color = a.getAttribute("data-color");
  var parent = a.parentElement.children;
  var activeColor;

  var activeSidenavIconColorClass;

  var checkedSidenavIconColor = "bg-" + color + "-500/30";

  var sidenavIcon = document.querySelector("a[href=" + CSS.escape(sidenav_target) + "]");

  for (var i = 0; i < parent.length; i++) {
    if (parent[i].hasAttribute("active-color")) {
      activeColor = parent[i].getAttribute("data-color");

      parent[i].classList.toggle("border-white");
      parent[i].classList.toggle("border-slate-700");

      activeSidenavIconColorClass = "bg-" + activeColor + "-500/30";
    }
    parent[i].removeAttribute("active-color");
  }

  var att = document.createAttribute("active-color");

  a.setAttributeNode(att);
  a.classList.toggle("border-white");
  a.classList.toggle("border-slate-700");

  //   remove active style

  sidenavIcon.classList.remove(activeSidenavIconColorClass);

  //   add new style

  sidenavIcon.classList.add(checkedSidenavIconColor);
}

// sidenav style

whiteBtn.addEventListener("click", function () {
  const active_style_attr = document.createAttribute("active-style");
  if (!this.hasAttribute(active_style_attr)) {
    // change trigger buttons style

    this.setAttributeNode(active_style_attr);

    non_active_style.forEach((style_class) => {
      this.classList.remove(style_class);
    });

    active_style.forEach((style_class) => {
      this.classList.add(style_class);
    });

    darkBtn.removeAttribute(active_style_attr);

    active_style.forEach((style_class) => {
      darkBtn.classList.remove(style_class);
    });

    non_active_style.forEach((style_class) => {
      darkBtn.classList.add(style_class);
    });

    // change actual styles

    black_sidenav_classes.forEach((style_class) => {
      sidenav.classList.remove(style_class);
    });
    white_sidenav_classes.forEach((style_class) => {
      sidenav.classList.add(style_class);
    });
    sidenav.classList.remove("dark");
  }
});

darkBtn.addEventListener("click", function () {
  const active_style_attr = document.createAttribute("active-style");
  if (!this.hasAttribute(active_style_attr)) {
    this.setAttributeNode(active_style_attr);
    non_active_style.forEach((style_class) => {
      this.classList.remove(style_class);
    });
    active_style.forEach((style_class) => {
      this.classList.add(style_class);
    });

    whiteBtn.removeAttribute(active_style_attr);
    active_style.forEach((style_class) => {
      whiteBtn.classList.remove(style_class);
    });
    non_active_style.forEach((style_class) => {
      whiteBtn.classList.add(style_class);
    });

    // change actual styles

    white_sidenav_classes.forEach((style_class) => {
      sidenav.classList.remove(style_class);
    });
    black_sidenav_classes.forEach((style_class) => {
      sidenav.classList.add(style_class);
    });
    sidenav.classList.add("dark");
  }
});

// navbar fixed plugin

if (navbar) {
  if (navbar.getAttribute("navbar-scroll") == "true") {
    buttonNavbarFixed.setAttribute("checked", "true");
  }
  const white_elements = navbar.querySelectorAll(".text-white");
  const white_bg_elements = navbar.querySelectorAll("[sidenav-trigger] i.bg-white");
  const white_before_elements = navbar.querySelectorAll(".before\\:text-white");
  buttonNavbarFixed.addEventListener("change", function () {

    if (this.checked) {
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
      navbar.setAttribute("navbar-scroll", "true");
      navbar.classList.add("sticky");
      navbar.classList.add("top-[1%]");
      navbar.classList.add("backdrop-saturate-200");
      navbar.classList.add("backdrop-blur-2xl");
      navbar.classList.add("dark:bg-slate-850/80");
      navbar.classList.add("dark:shadow-dark-blur");
      navbar.classList.add("bg-[hsla(0,0%,100%,0.8)]");
      navbar.classList.add("shadow-blur");
      navbar.classList.add("z-110");
    } else {
      navbar.setAttribute("navbar-scroll", "false");
      navbar.classList.remove("sticky");
      navbar.classList.remove("top-[1%]");
      navbar.classList.remove("backdrop-saturate-200");
      navbar.classList.remove("backdrop-blur-2xl");
      navbar.classList.remove("dark:bg-slate-850/80");
      navbar.classList.remove("dark:shadow-dark-blur");
      navbar.classList.remove("bg-[hsla(0,0%,100%,0.8)]");
      navbar.classList.remove("shadow-blur");
      navbar.classList.remove("z-110");
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
  });
} else {
  // buttonNavbarFixed.setAttribute("checked", "true");
  buttonNavbarFixed.setAttribute("disabled", "true");
}

var dark_mode_toggle = document.querySelector("[dark-toggle]");
var root_html = document.querySelector("html");

dark_mode_toggle.addEventListener("change", function () {
  dark_mode_toggle.setAttribute("manual", "true");
  if (this.checked) {
    root_html.classList.add("dark");
  } else {
    root_html.classList.remove("dark");
  }
});