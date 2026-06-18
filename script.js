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
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const btn = dropdown.querySelector('.dropdown-btn');

  if(btn){
    btn.addEventListener('click', () => {
      if(window.innerWidth <= 900){
        dropdown.classList.toggle('active');
      }
    });
  }
});
