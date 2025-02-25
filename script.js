const menuIcon = document.querySelector(".menu-icon");
const navbarLinks = document.querySelector(".navbar-links");

// Toggle menu on click
menuIcon.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent closing when clicking on the menu icon
  navbarLinks.classList.toggle("show");
  menuIcon.innerHTML = navbarLinks.classList.contains("show") ? "&times;" : "&#9776;";
});

// Close menu on scroll
window.addEventListener("scroll", () => {
  if (navbarLinks.classList.contains("show")) {
    navbarLinks.classList.remove("show");
    menuIcon.innerHTML = "&#9776;";
  }
});

// Close menu when clicking a link
document.querySelectorAll(".navbar-links a").forEach(link => {
  link.addEventListener("click", () => {
    navbarLinks.classList.remove("show");
    menuIcon.innerHTML = "&#9776;";
  });
});

// Close menu when clicking outside of it
document.addEventListener("click", (event) => {
  if (!navbarLinks.contains(event.target) && !menuIcon.contains(event.target)) {
    navbarLinks.classList.remove("show");
    menuIcon.innerHTML = "&#9776;";
  }
});
