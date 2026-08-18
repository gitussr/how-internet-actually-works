document.addEventListener("DOMContentLoaded", function () {
  var input = document.querySelector(".search-input");
  var results = document.querySelector(".search-results");
  if (!input || !results || !window.SITE_SEARCH_INDEX) return;

  var index = window.SITE_SEARCH_INDEX;

  function escapeHtml(s) {
    var div = document.createElement("div");
    div.textContent = s;
    return div.innerHTML;
  }

  function search(query) {
    var q = query.trim().toLowerCase();
    if (!q) return [];
    return index
      .map(function (page) {
        var titleMatch = page.title.toLowerCase().indexOf(q) !== -1;
        var snippetMatch = page.snippet.toLowerCase().indexOf(q) !== -1;
        var headingMatch = page.headings.find(function (h) {
          return h.toLowerCase().indexOf(q) !== -1;
        });
        if (!titleMatch && !snippetMatch && !headingMatch) return null;
        var score = (titleMatch ? 3 : 0) + (headingMatch ? 2 : 0) + (snippetMatch ? 1 : 0);
        return {
          title: page.title,
          url: page.url,
          sub: headingMatch || page.snippet,
          score: score
        };
      })
      .filter(Boolean)
      .sort(function (a, b) { return b.score - a.score; });
  }

  function render(matches, query) {
    if (!query.trim()) {
      results.innerHTML = "";
      results.classList.remove("visible");
      return;
    }
    if (matches.length === 0) {
      results.innerHTML = '<div class="search-empty">No matches for "' + escapeHtml(query) + '"</div>';
      results.classList.add("visible");
      return;
    }
    results.innerHTML = matches.slice(0, 8).map(function (m) {
      return '<a class="search-result" href="' + m.url + '">' +
        '<span class="sr-title">' + escapeHtml(m.title) + '</span>' +
        '<span class="sr-section">' + escapeHtml(m.sub) + '</span>' +
        '</a>';
    }).join("");
    results.classList.add("visible");
  }

  input.addEventListener("input", function () {
    render(search(input.value), input.value);
  });

  input.addEventListener("focus", function () {
    if (input.value.trim()) render(search(input.value), input.value);
  });

  input.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      input.value = "";
      render([], "");
      input.blur();
    } else if (e.key === "Enter") {
      var first = results.querySelector(".search-result");
      if (first) window.location.href = first.getAttribute("href");
    }
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".search-box")) {
      results.classList.remove("visible");
    }
  });
});
