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

// Reading progress ring — shared across every page of the site.
document.addEventListener("DOMContentLoaded", function () {
  var wrap = document.querySelector(".reading-progress");
  var fill = document.querySelector(".rp-fill");
  var percent = document.querySelector(".rp-percent");
  if (!wrap || !fill || !percent) return;

  var circumference = 2 * Math.PI * 19;

  function update() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var pct = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
    fill.style.strokeDashoffset = String(circumference * (1 - pct));
    percent.textContent = Math.round(pct * 100) + "%";
    wrap.classList.toggle("visible", scrollTop > 80);
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();

  wrap.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
