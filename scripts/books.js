/**
 * books.js
 * Data katalog buku untuk landing page "Dari Buku Untuk Negeri".
 * Setiap entri butuh: slug (nama file gambar tanpa ekstensi & "-full"),
 * title, tag (kategori), dan desc singkat untuk ditampilkan di pop-up cover.
 *
 * Tambah judul baru di sini otomatis akan muncul di grid katalog,
 * pastikan file gambarnya ada di images/covers/ dengan nama:
 *   images/covers/<slug>.jpg      (thumbnail grid)
 *   images/covers/<slug>-full.jpg (versi besar untuk pop-up)
 */
const BOOKS = [
  { slug: "hewan-hutan", title: "Hewan Hutan", tag: "DUNIA HEWAN",
    desc: "Mengenal aneka satwa penghuni hutan, dari mamalia besar sampai burung, lengkap dengan halaman mewarnai bertema alam liar." },
  { slug: "hiu", title: "Jenis-Jenis Hiu", tag: "DUNIA HEWAN",
    desc: "Jelajahi dunia bawah laut dan kenali ragam jenis hiu, dari hiu putih besar sampai hiu martil, dengan fakta unik di tiap halaman." },
  { slug: "ular", title: "Jenis-Jenis Ular", tag: "DUNIA HEWAN",
    desc: "Ajak anak mengenal berbagai jenis ular tanpa takut, disajikan lewat ilustrasi ramah anak dan fakta menarik seputar reptil ini." },
  { slug: "serangga", title: "Jenis-Jenis Serangga", tag: "DUNIA HEWAN",
    desc: "Dunia serangga yang penuh warna, dari kupu-kupu sampai kumbang, dikemas jadi aktivitas mewarnai sambil belajar." },
  { slug: "kucing", title: "Jenis-Jenis Kucing", tag: "DUNIA HEWAN",
    desc: "Untuk si kecil pecinta kucing, kenali berbagai ras kucing dari seluruh dunia lengkap dengan ciri khasnya masing-masing." },
  { slug: "dinosaurus", title: "Dinosaurus Dunia", tag: "SAINS",
    desc: "Petualangan ke masa purba! Anak-anak akan mengenal nama-nama dinosaurus populer sambil mewarnai ilustrasi zaman prasejarah." },
  { slug: "hewan-laut", title: "Hewan Laut", tag: "DUNIA HEWAN",
    desc: "Menyelam ke lautan biru untuk mengenal ikan, mamalia laut, dan biota unik lain yang hidup di dalamnya." },
  { slug: "luar-angkasa", title: "Benda Luar Angkasa", tag: "SAINS",
    desc: "Mengenalkan planet, bintang, dan benda-benda langit lain dengan cara yang seru dan mudah dipahami anak usia dini." },
  { slug: "negara-dunia", title: "Negara Di Dunia", tag: "DUNIA & BUDAYA",
    desc: "Keliling dunia lewat buku! Anak diajak mengenal nama negara, bendera, dan ciri khas budaya dari berbagai benua." },
  { slug: "baju-adat", title: "Baju Adat Indonesia", tag: "DUNIA & BUDAYA",
    desc: "Mengenalkan kekayaan budaya Nusantara lewat ragam pakaian adat dari Sabang sampai Merauke." },
  { slug: "batu-permata", title: "Batu Permata", tag: "SAINS",
    desc: "Kenali keindahan dan keunikan berbagai batu permata dari seluruh dunia sambil menambah kosakata baru." },
  { slug: "unsur-kimia", title: "Unsur Kimia", tag: "SAINS",
    desc: "Pengenalan dasar unsur kimia yang dikemas sederhana dan visual, cocok untuk menumbuhkan rasa ingin tahu anak pada sains." },
  { slug: "tokoh-penemu", title: "Tokoh Penemu Dunia", tag: "SAINS",
    desc: "Mengenal kisah para penemu dunia dan penemuan mereka yang mengubah kehidupan sehari-hari kita." },
  { slug: "satwa-langka", title: "Satwa Langka", tag: "DUNIA HEWAN",
    desc: "Menumbuhkan kepedulian anak sejak dini terhadap satwa-satwa langka yang perlu dilindungi." },
  { slug: "bangunan-sejarah", title: "Bangunan Bersejarah Dunia", tag: "DUNIA & BUDAYA",
    desc: "Berkenalan dengan bangunan-bangunan ikonik dan bersejarah dari berbagai belahan dunia." },
  { slug: "makanan-indonesia", title: "Makanan Indonesia", tag: "DUNIA & BUDAYA",
    desc: "Mengenalkan ragam kuliner khas Nusantara pada anak lewat ilustrasi penuh warna dan fakta menarik di baliknya." }
];
