// Mobile sidebar toggle — shared across every page of the site.
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var sidebar = document.querySelector(".sidebar");
  var overlay = document.querySelector(".sidebar-overlay");
  if (!toggle || !sidebar || !overlay) return;

  function closeNav() {
    sidebar.classList.remove("open");
    overlay.classList.remove("visible");
  }

  toggle.addEventListener("click", function () {
    sidebar.classList.toggle("open");
    overlay.classList.toggle("visible");
  });

  overlay.addEventListener("click", closeNav);

  sidebar.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeNav);
  });
});

// Theme toggle — shared across every page of the site.
document.addEventListener("DOMContentLoaded", function () {
  var root = document.documentElement;
  document.querySelectorAll(".theme-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  });
});
