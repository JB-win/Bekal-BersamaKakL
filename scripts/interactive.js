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
  setupMobileNav();
  setupPhotoZoom();
});

/* ---------------- Pop-up Foto Promosi (bukan cover buku) ---------------- */
function buildPhotoLightbox() {
  if (document.getElementById("photoLightbox")) return;
  const lb = document.createElement("div");
  lb.className = "photo-lightbox";
  lb.id = "photoLightbox";
  lb.innerHTML = `
    <button class="photo-lightbox-close" id="photoLbClose" aria-label="Tutup">✕</button>
    <img class="photo-lightbox-img" id="photoLbImg" src="" alt="">
  `;
  document.body.appendChild(lb);

  lb.addEventListener("click", (e) => { if (e.target === lb) closePhotoLightbox(); });
  document.getElementById("photoLbClose").addEventListener("click", closePhotoLightbox);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closePhotoLightbox(); });
}

function openPhotoLightbox(src, alt) {
  document.getElementById("photoLbImg").src = src;
  document.getElementById("photoLbImg").alt = alt || "";
  document.getElementById("photoLightbox").classList.add("open");
  document.body.classList.add("lb-open");
}

function closePhotoLightbox() {
  const lb = document.getElementById("photoLightbox");
  if (!lb) return;
  lb.classList.remove("open");
  document.body.classList.remove("lb-open");
}

function setupPhotoZoom() {
  const zoomEls = document.querySelectorAll(".photo-zoom");
  if (!zoomEls.length) return;
  buildPhotoLightbox();

  zoomEls.forEach(el => {
    const img = el.querySelector("img");
    if (!img) return;
    const open = () => openPhotoLightbox(img.src, img.alt);
    el.addEventListener("click", open);
    el.addEventListener("keypress", (e) => { if (e.key === "Enter") open(); });
  });
}

/* ---------------- Menu Mobile (Hamburger) ---------------- */
function setupMobileNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Tutup menu otomatis saat salah satu link diklik
  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

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
