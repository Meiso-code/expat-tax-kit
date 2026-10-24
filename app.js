// Activa o desactiva los botones según los links de config.js.
(function () {
  var k = window.KIT || {};
  document.querySelectorAll("[data-checkout]").forEach(function (a) {
    if (k.checkout) { a.href = k.checkout; }
    else {
      a.removeAttribute("href");
      a.setAttribute("aria-disabled", "true");
      a.style.opacity = ".55"; a.style.cursor = "default";
      a.textContent = a.closest("html").lang === "es" ? "La pre-venta abre esta semana" : "Pre-orders open this week";
    }
  });
  document.querySelectorAll("[data-affiliate]").forEach(function (el) {
    if (k.affiliate) { el.querySelector("a").href = k.affiliate; el.hidden = false; }
  });
})();
