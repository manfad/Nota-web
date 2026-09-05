// Malay (ms)
import type { Translation } from "./en";

const ms: Translation = {
  meta: {
    title: "Nota — Notepad kecil. Ruang untuk semuanya.",
    description:
      "Notepad Mac asli untuk buah fikiran pantas, fail teks, dan segala yang anda baca. Tab yang kekal, imej dalam nota, gerakan Vim, dan sedikit ketenangan. Sumber terbuka. Tiada log masuk diperlukan.",
    ogImageAlt: "Nota. Notepad kecil. Ruang untuk semuanya.",
  },
  skipLink: "Langkau ke kandungan",
  nav: {
    home: "Laman utama Nota",
    macLabel: "untuk Mac",
    label: "Navigasi utama",
    features: "Ciri",
    github: "GitHub",
    download: "Dapatkan Nota",
    language: "Tukar bahasa",
  },
  hero: {
    eyebrow: "Aplikasi kecil untuk fikiran harian anda",
    heading: ["Notepad kecil.", "Ruang untuk semuanya."] as [string, string],
    description: [
      "Notepad Mac asli untuk buah fikiran pantas, fail teks, dan",
      "segala yang anda baca. Buka satu tab. Buat macam rumah sendiri.",
    ] as [string, string],
    download: "Muat turun untuk macOS",
    viewSource: "Lihat kod sumber",
    compatibility: "Untuk macOS 14 dan ke atas",
    noAccount: "Tiada akaun diperlukan",
    screenshotAlt:
      "Nota memaparkan nota Markdown dalam paparan belah langsung, dengan tab Untitled, Field notes, dan EPUB di sebelahnya.",
  },
  showcase: {
    eyebrow: "Aplikasi kecil. Perincian yang teliti.",
    heading: "Lebih sedikit daripada sekadar notepad.",
    listLabel: "Ciri-ciri Nota",
    /** Placeholders: {name} {index} {total} {description} */
    announcement: "{name}, ciri {index} daripada {total}. {description}",
    features: [
      {
        id: "tabs",
        name: "Tab yang kekal",
        title: "Sambung di tempat anda berhenti.",
        description:
          "Mula dengan tab Untitled yang baharu. Tab yang terbuka dan nota tersimpan sementara akan kembali apabila anda buka Nota semula, termasuk yang belum anda simpan ke fail.",
        alt: "Editor Nota dengan tab Small things, Untitled, dan Field notes terbuka.",
        caption: "Ruang kecil untuk perkara yang belum anda selesaikan.",
      },
      {
        id: "images",
        name: "Imej dalam nota",
        title: "Simpan gambaran penuhnya.",
        description:
          "Tampal tangkap layar atau seret masuk gambar. Cip imej yang kemas duduk bersama tulisan anda, dan galeri menyimpan gambar penuhnya betul-betul di sebelah.",
        alt: "Dua cip imej dalam sesebuah nota, dengan gambar buku nota dalam galeri Nota.",
        caption: "Cip kecil dalam nota anda. Gambar penuh di sebelahnya.",
      },
      {
        id: "preview",
        name: "Pratonton langsung",
        title: "Tulis dulu. Kemudian lihat.",
        description:
          "Lihat Markdown anda terbentuk di sebelah editor dengan pratonton belah langsung. Tukar ke mod bacaan bila anda cuma mahu menyelami halaman itu.",
        alt: "Sumber Markdown di sebelah tajuk, senarai semak, dan petikan yang telah dipaparkan dalam Nota.",
        caption:
          "Perkataan anda di satu sisi. Halaman anda terbentuk di sisi satu lagi.",
      },
      {
        id: "html",
        name: "Pratonton HTML",
        title: "Halaman itu halaman.",
        description:
          "Buka fail .html dan lihat WebKit melukisnya di sebelah editor. Stylesheet dan gambar di sebelah fail itu turut serta. Suntingan yang belum disimpan itulah halamannya.",
        alt: "Sumber HTML di sebelah halaman langsungnya dalam Nota, dengan tab Small things dan Field notes.",
        caption:
          "Sumber di satu sisi. Halaman, seperti yang dilihat pelayar, di sisi satu lagi.",
      },
      {
        id: "tables",
        name: "Jadual CSV",
        title: "Hamparan, masih fail teks.",
        description:
          "Fail .csv atau .tsv dibuka dengan grid di sebelah editor. Isih lajur, tukar halaman, klik baris untuk mendarat padanya dalam fail. Fail kekal teks biasa.",
        alt: "Products.csv dalam Nota, dengan sumber dipisahkan koma di sebelah jadual yang boleh diisih.",
        caption: "Fail yang boleh anda cari. Jadual yang boleh anda baca.",
      },
      {
        id: "sql",
        name: "Dump SQL",
        title: "Jalankan dump. Baca pangkalan data.",
        description:
          "Fail .sql dijalankan ke SQLite dalam memori — bukan fail di cakera. Pilih jadual, tanya dalam kotak, salin sel. Tiada apa yang ditulis semula.",
        alt: "Shop.sql dalam Nota, dengan dump di sebelah jadual products dan kotak pertanyaan.",
        caption: "Dump di kiri. Pangkalan data yang dibinanya, di kanan.",
      },
      {
        id: "zen",
        name: "Mod zen",
        title: "Sedikit lebih lapang di skrin.",
        description:
          "Sembunyikan tab, kawalan, dan bar status. Mod zen memberi tulisan anda ruang untuk bernafas, sementara pintasan papan kekunci biasa anda terus berfungsi.",
        alt: "Nota dalam susunan paling minimum dengan tab, kawalan, nombor baris, dan bar statusnya disembunyikan.",
        caption: "Pandangan yang lebih tenang bagi notepad kecil yang sama.",
      },
      {
        id: "vim",
        name: "Gerakan Vim",
        title: "Jari anda sudah tahu jalannya.",
        description:
          "Hidupkan mod Vim untuk gerakan dan pintasan papan kekunci yang biasa. Bergerak dalam nota anda, buat suntingan, dan kekal dalam rentak anda.",
        alt: "Editor teks Nota dengan Vim dihidupkan dan lencana mod Normal.",
        caption: "Rentak yang biasa. Notepad Mac yang asli.",
      },
      {
        id: "text",
        name: "Fail teks",
        title: "Seret masuk. Jadikan satu tab.",
        description:
          "Teks biasa, Markdown, kod, atau README tanpa sambungan fail. Nota membuka fail teks UTF-8 pelbagai jenis, jadi perincian kecil pun ada tempatnya.",
        alt: "Settings.json dalam Nota, dengan tab README, notes, dan Products.csv di sebelahnya.",
        caption:
          "Fail tetapan, README, nota, CSV. Tetingkap kecil yang sama.",
      },
      {
        id: "books",
        name: "Buku & PDF",
        title: "Simpan rujukan anda dekat.",
        description:
          "Buka EPUB, PDF, gambar, atau GIF dalam tabnya sendiri. Baca dan tatal bersebelahan nota anda, semuanya dalam tetingkap kecil yang sama.",
        alt: "Sebuah EPUB terbuka dalam Nota dengan senarai kandungannya di bar sisi, di sebelah tab Markdown dan teks.",
        caption: "Satu nota, satu buku, satu gambar. Semuanya dialu-alukan.",
      },
      {
        id: "bookmarks",
        name: "Penanda buku",
        title: "Ada perkara yang berbaloi disimpan.",
        description:
          "Tandakan fail yang kerap anda buka, dan buka semula bila-bila anda perlukannya. Bacaan atau rujukan seterusnya sentiasa dekat.",
        alt: "Tab Markdown dan teks yang ditanda dalam Nota, dengan lencana penanda buku yang kecil.",
        caption: "Simpan yang berguna dalam capaian.",
      },
    ],
  },
  fileTypes: {
    eyebrow: "Teks. Satu halaman. Satu gambar.",
    heading: "Seret masuk.",
    intro:
      "Kebanyakan fail dibuka sebagai teks. Ada yang dibaca. Beberapa mendapat panel di sebelah editor.",
    columns: {
      edit: {
        title: "Sunting",
        note: "Teks biasa kekal teks.",
      },
      preview: {
        title: "Pratonton",
        note: "Dibuka untuk dibaca, bukan ditulis.",
      },
      split: {
        title: "Belah",
        note: "Sumber di satu sisi. Pratonton di sisi satu lagi.",
      },
    },
    footer: "Dan apa-apa lagi yang dinyahkod sebagai UTF-8.",
  },
  openSource: {
    eyebrow: "Terasa seperti Mac anda. Kerana memang begitu.",
    heading: ["Milik anda.", "Terbuka untuk semua."] as [string, string],
    description:
      "Dibina secara asli untuk macOS, dengan rasa biasa sebuah aplikasi yang memang tempatnya di situ. Tiada akaun untuk dibuat. Dan kod sumbernya terbuka untuk sesiapa yang ingin tahu.",
    link: "Lihat di GitHub",
    values: [
      {
        number: "01",
        title: "Asli secara semula jadi",
        description: "Dibina dengan Swift dan AppKit. Selesa di Mac anda.",
      },
      {
        number: "02",
        title: "Terbuka atas pilihan",
        description:
          "Baca kodnya, cadangkan idea, atau jadikan ia milik anda.",
      },
      {
        number: "03",
        title: "Sedia bila anda sedia",
        description: "Tiada log masuk diperlukan. Buka Nota dan mula menaip.",
      },
    ],
  },
  closing: {
    iconAlt: "Ikon aplikasi Nota berupa buku nota dan pensel",
    heading: ["Beri ruang untuk", "fikiran anda seterusnya."] as [
      string,
      string,
    ],
    description: "Ia tak perlu jadi sesuatu yang besar. Cukup buka satu tab.",
    download: "Muat turun untuk macOS",
    compatibility: "Untuk macOS 14 dan ke atas",
  },
  footer: {
    home: "Laman utama Nota",
    tagline: "Notepad kecil untuk Mac anda.",
    link: "Dibina secara terbuka",
  },
};

export default ms;
