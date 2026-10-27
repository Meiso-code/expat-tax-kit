// Activa los botones según los links de config.js: venta si hay checkout, lista de espera si no.
(function () {
  var k = window.KIT || {};
  document.querySelectorAll("[data-checkout]").forEach(function (a) {
    var es = a.closest("html").lang === "es";
    if (k.checkout) { a.href = k.checkout; return; }
    if (k.waitlist) {
      a.href = k.waitlist; a.target = "_blank"; a.rel = "noopener";
      a.textContent = es ? "Anotarme en la lista de espera (gratis)" : "Join the waitlist (free)";
      return;
    }
    a.removeAttribute("href");
    a.setAttribute("aria-disabled", "true");
    a.style.opacity = ".55"; a.style.cursor = "default";
    a.textContent = es ? "La lista de espera abre pronto" : "Waitlist opens soon";
  });
})();
