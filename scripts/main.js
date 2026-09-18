/**
 * main.js
 * Logika halaman: render katalog buku & testimoni dari data (books.js,
 * reviews.js), pop-up (lightbox) saat cover buku diklik, dan animasi
 * reveal saat scroll. Ditulis tanpa fetch()/AJAX supaya tetap jalan
 * meski file index.html dibuka langsung (double click) tanpa server.
 * File ini dipakai bersama di semua halaman (index, katalog, isi-buku,
 * testimoni, kontak), setiap fungsi otomatis tidak melakukan apa-apa
 * jika elemen targetnya tidak ada di halaman tersebut.
 */

const WA_NUMBER = "6282175756560"; // 0821-7575-6560 dalam format internasional

function waLink(message) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* ---------------- Kartu Buku (dipakai katalog penuh & preview beranda) ---------------- */
function bookCardHTML(book, index) {
  return `
    <div class="cat-card" data-tag="${book.tag}">
      <div class="thumb" data-index="${index}" role="button" tabindex="0" aria-label="Lihat cover ${book.title}">
        <img src="images/covers/${book.slug}.jpg" alt="Cover buku ${book.title}" loading="lazy">
      </div>
      <div class="cat-body">
        <span class="cat-tag">${book.tag}</span>
        <span class="cat-title">${book.title}</span>
        <a class="cat-order" href="${waLink('Halo Kak L, saya mau tanya soal buku ' + book.title)}" target="_blank" rel="noopener"><img src="images/icons/wa-icon.png" alt="" class="wa-ico wa-ico-sm"> Tanya & Pesan →</a>
      </div>
    </div>
  `;
}

function attachThumbHandlers(container) {
  container.querySelectorAll(".thumb").forEach(el => {
    el.addEventListener("click", () => openLightbox(Number(el.dataset.index)));
    el.addEventListener("keypress", (e) => {
      if (e.key === "Enter") openLightbox(Number(el.dataset.index));
    });
  });
}

/* ---------------- Render Katalog Penuh (katalog.html) ---------------- */
function renderCatalog() {
  const grid = document.getElementById("catGrid");
  if (!grid || typeof BOOKS === "undefined") return;
  grid.innerHTML = BOOKS.map((book, i) => bookCardHTML(book, i)).join("");
  attachThumbHandlers(grid);
}

/* ---------------- Render Cuplikan Katalog (beranda) ---------------- */
function renderCatalogPreview(limit = 4) {
  const grid = document.getElementById("catPreview");
  if (!grid || typeof BOOKS === "undefined") return;
  const subset = BOOKS.slice(0, limit);
  grid.innerHTML = subset.map((book, i) => bookCardHTML(book, i)).join("");
  attachThumbHandlers(grid);
}

/* ---------------- Render Testimoni ---------------- */
function renderReviews() {
  const grid = document.getElementById("testiGrid");
  if (!grid || typeof REVIEWS === "undefined") return;

  grid.innerHTML = REVIEWS.map(r => `
    <div class="testi-card">
      <div class="testi-stars">★★★★★</div>
      <p class="testi-quote">"${r.quote}"</p>
      <div class="testi-who">
        <div class="testi-avatar">${r.initials}</div>
        <div>
          <div class="testi-name">${r.name}</div>
          <div class="testi-role">${r.role}</div>
        </div>
      </div>
    </div>
  `).join("");
}

/* ---------------- Lightbox / Cover Pop-up ---------------- */
function buildLightbox() {
  if (document.getElementById("coverLightbox")) return;
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.id = "coverLightbox";
  lb.innerHTML = `
    <button class="lightbox-close" id="lbClose" aria-label="Tutup">✕</button>
    <div class="lightbox-box" role="dialog" aria-modal="true">
      <div class="lightbox-img"><img id="lbImg" src="" alt=""></div>
      <div class="lightbox-info">
        <span class="lightbox-tag" id="lbTag"></span>
        <h3 class="lightbox-title" id="lbTitle"></h3>
        <p class="lightbox-desc" id="lbDesc"></p>
        <div class="lightbox-actions">
          <a class="btn btn-gold btn-small" id="lbOrder" target="_blank" rel="noopener"><img src="images/icons/wa-icon.png" alt="" class="wa-ico"> Pesan Judul Ini</a>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(lb);

  lb.addEventListener("click", (e) => { if (e.target === lb) closeLightbox(); });
  document.getElementById("lbClose").addEventListener("click", closeLightbox);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });
}

function openLightbox(index) {
  if (typeof BOOKS === "undefined") return;
  const book = BOOKS[index];
  if (!book) return;
  document.getElementById("lbImg").src = `images/covers/${book.slug}-full.jpg`;
  document.getElementById("lbImg").alt = `Cover buku ${book.title} ukuran penuh`;
  document.getElementById("lbTag").textContent = book.tag;
  document.getElementById("lbTitle").textContent = book.title;
  document.getElementById("lbDesc").textContent = book.desc;
  document.getElementById("lbOrder").href = waLink("Halo Kak L, saya mau pesan buku " + book.title);
  document.getElementById("coverLightbox").classList.add("open");
  document.body.classList.add("lb-open");
}

function closeLightbox() {
  const lb = document.getElementById("coverLightbox");
  if (!lb) return;
  lb.classList.remove("open");
  document.body.classList.remove("lb-open");
}

/* ---------------- Scroll Reveal ---------------- */
function setupReveal() {
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  els.forEach(el => io.observe(el));
}

/* ---------------- Cover buku di hero (beranda) ---------------- */
function setupHeroStackClicks() {
  document.querySelectorAll(".stack-card[data-slug]").forEach(card => {
    card.addEventListener("click", () => {
      if (typeof BOOKS === "undefined") return;
      const idx = BOOKS.findIndex(b => b.slug === card.dataset.slug);
      if (idx > -1) openLightbox(idx);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
  renderCatalogPreview();
  renderReviews();
  buildLightbox();
  setupReveal();
  setupHeroStackClicks();
});
