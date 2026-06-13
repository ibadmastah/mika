const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");
const menuLinks = navMenu.querySelectorAll("a");

menuButton.addEventListener("click", function () {
  const isOpen = navMenu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
});

menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
