# Website — Dari Buku Untuk Negeri (Bekal Bersama Kak L)

Website multi-halaman untuk program pengabdian "Dari Buku Untuk Negeri: Dunia
Ada di Tangan Anak — Ensiklopedia Pengetahuan Seru untuk Si Kecil".

## Halaman

| File | Isi |
|---|---|
| `index.html` | **Beranda** — hero, kenapa buku ini, cuplikan 4 judul katalog |
| `katalog.html` | **Katalog** — 30+ judul lengkap dengan filter kategori |
| `isi-buku.html` | **Isi Buku** — demo mewarnai interaktif + contoh halaman buku |
| `testimoni.html` | **Testimoni** — kata orang tua + tim di balik program |
| `kontak.html` | **Kontak** — FAQ + cara pesan & info kontak |

Kelima halaman berbagi header (nav), footer, dan tombol WhatsApp mengambang
yang sama, jadi tampilannya konsisten di mana pun pengunjung berada.

## Struktur folder

```
├── index.html / katalog.html / isi-buku.html / testimoni.html / kontak.html
├── css/
│   └── style.css       → semua styling halaman
├── scripts/
│   ├── books.js         → data katalog buku (judul, kategori, deskripsi)
│   ├── reviews.js        → data testimoni (masih contoh/ilustratif)
│   ├── main.js            → render katalog/testimoni, pop-up cover, animasi — dipakai di semua halaman
│   └── interactive.js      → filter kategori katalog, accordion FAQ, demo mewarnai interaktif
├── images/
│   ├── logo.jpg
│   ├── icons/wa-icon.png  → logo WhatsApp custom (dipakai di semua tombol order)
│   ├── promo/              → foto keluarga & buku
│   ├── covers/              → cover buku (versi grid + versi "-full" untuk pop-up)
│   └── sample/                → contoh halaman isi buku
└── README.md
```

## Cara membuka

Cukup buka `index.html` langsung di browser (double click), atau upload
seluruh folder ini ke hosting statis (GitHub Pages, Netlify, dsb). Tidak
perlu server khusus — semua data (katalog & testimoni) ditulis sebagai
file `.js` biasa (bukan `.json` yang di-fetch), supaya halaman tetap
berfungsi normal meskipun dibuka langsung dari file lokal tanpa server.

## Yang mudah diedit

- **Tambah/ubah judul buku** → edit `scripts/books.js`, lalu taruh file
  gambarnya di `images/covers/` dengan nama `<slug>.jpg` (grid) dan
  `<slug>-full.jpg` (pop-up).
- **Ganti testimoni** → edit `scripts/reviews.js`.
- **Ganti nomor WhatsApp** → ubah `WA_NUMBER` di baris atas `scripts/main.js`.

## Masih perlu dilengkapi

1. **Nama panggilan anggota tim lain** (nama pangilan), menyusul di `testimoni.html`.
2. **Instagram** — menyusul.
3. **Testimoni asli** dari pembeli, untuk menggantikan testimoni contoh di `scripts/reviews.js`.
