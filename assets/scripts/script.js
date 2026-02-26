/* ===============================
   DOM REFERENCES
   =============================== */
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

const sections = document.querySelectorAll(".content-section");
const headerNav = document.getElementById("headerNav");
const sidebar = document.getElementById("sidebar");

const sidebarToggle = document.getElementById("sidebarToggle");
const themeToggle = document.getElementById("themeToggle");
const headerMenuToggle = document.getElementById("headerMenuToggle");

const mobileMenuIcon = document.querySelector("#mobileMenuIcon");
const sidebarToggleIcon = document.querySelector("#sidebarToggleIcon");
const themeToggleIcon = document.querySelector("#themeToggleIcon");

const selectAllBtn = document.getElementById("selectAll");
const clearAllBtn = document.getElementById("clearAll");



/* ===============================
   RESTORE STATE ON LOAD
   =============================== */
document.addEventListener("DOMContentLoaded", () => {
  restoreSections();
  restoreTheme();
  restoreSidebar();
  restoreSidebarToggle();
  updateHeaderNav();
});

/* ===============================
   SECTION TOGGLING
   =============================== */
checkboxes.forEach((cb) => {
  cb.addEventListener("change", () => {
    toggleSection(cb.dataset.section, cb.checked);
    persistSections();
    updateHeaderNav();
    // window.location.reload();
  });
});

function toggleSection(id, show) {
  const section = document.getElementById(id);
  section.classList.toggle("active", show);
}

selectAllBtn.addEventListener("click", () => {
  // window.location.reload();
  checkboxes.forEach((cb) => {
    cb.checked = true;
    cb.parentElement.classList.add("checked");
    toggleSection(cb.dataset.section, true);
  });
  persistSections();
  updateHeaderNav();
});

clearAllBtn.addEventListener("click", () => {
  // window.location.reload();
  checkboxes.forEach((cb) => {
    cb.checked = false;
    cb.parentElement.classList.remove("checked");
    toggleSection(cb.dataset.section, false);
  });
  persistSections();
  updateHeaderNav();
});

/* ===============================
   HEADER NAV LINKS
   =============================== */
function updateHeaderNav() {
  headerNav.innerHTML = "";

  checkboxes.forEach((cb) => {
    if (!cb.checked) return;

    const link = document.createElement("a");
    link.href = `#${cb.dataset.section}`;
    link.textContent = cb.dataset.section;

    link.addEventListener("click", () => {
      headerNav.classList.remove("open");
    });

    headerNav.appendChild(link);
  });
}

/* ===============================
   SIDEBAR TOGGLE
   =============================== */
sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("closed");
  sidebarToggleIcon.classList.toggle("bx-chevron-right-circle");
  persistSidebar();
  persistSidebarToggle();
});

/* ===============================
HEADER NAV TOGGLE
=============================== */
headerMenuToggle.addEventListener("click", () => {
  headerNav.classList.toggle("open");
  mobileMenuIcon.classList.toggle("bx-x");
});


/* ===============================
THEME TOGGLE
=============================== */
themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.dataset.theme === "dark";
  document.documentElement.dataset.theme = isDark ? "light" : "dark";
  localStorage.setItem("theme", document.documentElement.dataset.theme);
  themeToggleIcon.classList.toggle("bx-sun");
});

/* ===============================
   LOCAL STORAGE - PERSIST DATA
   =============================== */
function persistSections() {
  const state = {};
  checkboxes.forEach((cb) => (state[cb.dataset.section] = cb.checked));
  localStorage.setItem("sections", JSON.stringify(state));
}

function persistSidebar() {
  localStorage.setItem("sidebarClosed", sidebar.classList.contains("closed"));
}

function persistSidebarToggle() {
  localStorage.setItem(
    "icon",
    sidebarToggleIcon.classList.contains("bx-chevron-right-circle"),
  );
}

/* ===============================
   RESTORE STORAGE
   =============================== */
function restoreSections() {
  const state = JSON.parse(localStorage.getItem("sections")) || {};
  checkboxes.forEach((cb) => {
    cb.checked = state[cb.dataset.section] || false;
    toggleSection(cb.dataset.section, cb.checked);
  });
}

function restoreSidebar() {
  const closed = localStorage.getItem("sidebarClosed") === "true";
  sidebar.classList.toggle("closed", closed);
}

function restoreSidebarToggle() {
  const closedIcon = localStorage.getItem("icon") === "true";
  sidebarToggleIcon.classList.toggle("bx-chevron-right-circle", closedIcon);
}

function restoreTheme() {
  document.documentElement.dataset.theme =
    localStorage.getItem("theme") || "light";
}

/* ===============================
   CLOSE MENU ON RESIZE OR SCROLL
   =============================== */
function applyResponsiveSidebar() {
  if (window.innerWidth <= 1023) {
    sidebar.classList.add("closed");
  } else {
    sidebar.classList.remove("closed");
  }
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    headerNav.classList.remove("closed");
    sidebar.classList.remove("closed")
  }
  if (window.innerWidth <= 767) {
    sidebar.classList.add("closed");
  }
});

// Apply on load & resize
window.addEventListener("load", applyResponsiveSidebar);
window.addEventListener("resize", applyResponsiveSidebar);

window.onscroll = () => {
  headerNav.classList.remove("open");
  mobileMenuIcon.classList.remove("bx-x");
}