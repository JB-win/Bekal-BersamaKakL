/**
 * interactive.js
 * Fitur interaktif tambahan: filter kategori katalog, accordion FAQ,
 * dan mini-demo mewarnai (ilustrasi singa yang bisa diwarnai).
 * Berjalan setelah scripts/main.js selesai me-render katalog & testimoni.
 */

/* ---------------- Filter Katalog ---------------- */
function setupCatalogFilter() {
  const chips = document.querySelectorAll("#catFilter .chip");
  if (!chips.length) return;

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      const filter = chip.dataset.filter;
      document.querySelectorAll("#catGrid .cat-card").forEach(card => {
        const match = filter === "all" || card.dataset.tag === filter;
        card.style.display = match ? "" : "none";
      });
    });
  });
}

/* ---------------- FAQ Accordion ---------------- */
function setupFAQ() {
  document.querySelectorAll(".faq-item").forEach(item => {
    const btn = item.querySelector(".faq-q");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(other => {
        if (other !== item) other.classList.remove("open");
      });
      item.classList.toggle("open", !isOpen);
    });
  });
}

/* ---------------- Mini Demo Mewarnai ---------------- */
function setupColorDemo() {
  const svg = document.getElementById("colorLion");
  const swatchWrap = document.getElementById("swatches");
  const resetBtn = document.getElementById("colorReset");
  const hint = document.getElementById("colorHint");
  if (!svg || !swatchWrap) return;

  let activeColor = swatchWrap.querySelector(".swatch.active")?.dataset.color || "#f5a428";
  let paintedOnce = false;

  swatchWrap.querySelectorAll(".swatch").forEach(sw => {
    sw.addEventListener("click", () => {
      swatchWrap.querySelectorAll(".swatch").forEach(s => s.classList.remove("active"));
      sw.classList.add("active");
      activeColor = sw.dataset.color;
    });
  });

  svg.querySelectorAll(".cd-part").forEach(part => {
    part.addEventListener("click", () => {
      part.setAttribute("fill", activeColor);
      if (!paintedOnce) {
        paintedOnce = true;
        if (hint) hint.textContent = "Asyik kan? Yuk lanjut warnai bagian lain 🎨";
      }
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      svg.querySelectorAll(".cd-part").forEach(part => {
        part.setAttribute("fill", part.dataset.default);
      });
      paintedOnce = false;
      if (hint) hint.textContent = "Ketuk bagian singa untuk mewarnai ✏️";
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupCatalogFilter();
  setupFAQ();
  setupColorDemo();
  setupWaTooltip();
});

/* ---------------- Tooltip WhatsApp Mengambang ---------------- */
function setupWaTooltip() {
  const tip = document.getElementById("waTooltip");
  const closeBtn = document.getElementById("waTooltipClose");
  if (!tip) return;

  let dismissed = false;
  try { dismissed = sessionStorage.getItem("waTooltipDismissed") === "1"; } catch (e) {}

  if (!dismissed) {
    setTimeout(() => tip.classList.add("show"), 1600);
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      tip.classList.remove("show");
      try { sessionStorage.setItem("waTooltipDismissed", "1"); } catch (e) {}
    });
  }
}
