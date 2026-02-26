// // menu.js

// const menuBtn = document.getElementById("headerMenuToggle");
// const backdrop = document.getElementById("backdrop");
// const body = document.body;

// function toggleMenu() {
//   body.classList.toggle("menu-open");
//   menuBtn.classList.toggle("active");
// }

// // menuBtn.addEventListener("click", toggleMenu);
// backdrop.addEventListener("click", toggleMenu);

// /*
//  Optional enhancement:
//  Add swipe-down to close on mobile
// */
// let startY = null;

// window.addEventListener("touchstart", (e) => {
//   startY = e.touches[0].clientY;
// });

// window.addEventListener("touchend", (e) => {
//   if (!startY) return;
//   const endY = e.changedTouches[0].clientY;
//   if (endY - startY > 80 && body.classList.contains("menu-open")) {
//     toggleMenu();
//   }
//   startY = null;
// });


/* --------------------------------------------------------------- */
/* ============================ Toggle Icon Navbar ============================ */
// let menuIcon = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".header-nav");
// let sidebar = document.querySelector(".sidebar");

// menuIcon.onclick = () => {
//   menuIcon.classList.toggle("bx-x");
//   navbar.classList.toggle("active");
// };

/* =========================== Scroll Section Active Link =========================== */
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll("header nav a");
// console.log(navLinks)

// window.onscroll = () => {
  // sections.forEach((sec) => {
  //   let top = window.scrollY;
  //   let offset = sec.offsetTop - 150;
  //   let height = sec.offsetHeight;
  //   let id = sec.getAttribute("id");

  //   if (top >= offset && top < offset + height) {
  //     navLinks.forEach((links) => {
  //       links.classList.remove("active");
  //       document
  //         .querySelector(`header nav a[href*="${id}"]`)
  //         .classList.add("active");
  //     });
  //   }
  // });

  /* ============================ Scroll Section Active Link ============================ */
  // let header = document.querySelector("header");

  // header.classList.toggle("sticky", window.scrollY > 100);

  /* =========== Remove Toggle Icon and Navbar when clicked navbar link (scroll) =========== */
//   menuIcon.classList.remove("bx-x");
  
//   navbar.classList.remove("active");
//   navbar.classList.remove("open");

//   sidebar.classList.add("closed")
// };
