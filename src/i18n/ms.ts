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
        name: "Tab yang kekal",
        title: "Sambung di tempat anda berhenti.",
        description:
          "Mula dengan tab Untitled yang baharu. Tab yang terbuka dan nota tersimpan sementara akan kembali apabila anda buka Nota semula, termasuk yang belum anda simpan ke fail.",
        alt: "Editor Nota dengan tab Small things, Untitled, dan Field notes terbuka.",
        caption: "Ruang kecil untuk perkara yang belum anda selesaikan.",
      },
      {
        name: "Imej dalam nota",
        title: "Simpan gambaran penuhnya.",
        description:
          "Tampal tangkap layar atau seret masuk gambar. Cip imej yang kemas duduk bersama tulisan anda, dan galeri menyimpan gambar penuhnya betul-betul di sebelah.",
        alt: "Dua cip imej dalam sesebuah nota, dengan gambar buku nota dalam galeri Nota.",
        caption: "Cip kecil dalam nota anda. Gambar penuh di sebelahnya.",
      },
      {
        name: "Pratonton langsung",
        title: "Tulis dulu. Kemudian lihat.",
        description:
          "Lihat Markdown anda terbentuk di sebelah editor dengan pratonton belah langsung. Tukar ke mod bacaan bila anda cuma mahu menyelami halaman itu.",
        alt: "Sumber Markdown di sebelah tajuk, senarai semak, dan petikan yang telah dipaparkan dalam Nota.",
        caption:
          "Perkataan anda di satu sisi. Halaman anda terbentuk di sisi satu lagi.",
      },
      {
        name: "Mod zen",
        title: "Sedikit lebih lapang di skrin.",
        description:
          "Sembunyikan tab, kawalan, dan bar status. Mod zen memberi tulisan anda ruang untuk bernafas, sementara pintasan papan kekunci biasa anda terus berfungsi.",
        alt: "Nota dalam susunan paling minimum dengan tab, kawalan, nombor baris, dan bar statusnya disembunyikan.",
        caption: "Pandangan yang lebih tenang bagi notepad kecil yang sama.",
      },
      {
        name: "Gerakan Vim",
        title: "Jari anda sudah tahu jalannya.",
        description:
          "Hidupkan mod Vim untuk gerakan dan pintasan papan kekunci yang biasa. Bergerak dalam nota anda, buat suntingan, dan kekal dalam rentak anda.",
        alt: "Editor teks Nota dengan Vim dihidupkan dan lencana mod Normal.",
        caption: "Rentak yang biasa. Notepad Mac yang asli.",
      },
      {
        name: "Fail teks",
        title: "Seret masuk. Jadikan satu tab.",
        description:
          "Teks biasa, Markdown, kod, atau README tanpa sambungan fail. Nota membuka fail teks UTF-8 pelbagai jenis, jadi perincian kecil pun ada tempatnya.",
        alt: "Satu fail Markdown dan satu fail teks biasa terbuka bersama sebagai tab dalam Nota.",
        caption: ".txt · .md · .json · .csv · README · dan banyak lagi",
      },
      {
        name: "Buku & PDF",
        title: "Simpan rujukan anda dekat.",
        description:
          "Buka EPUB, PDF, gambar, atau GIF dalam tabnya sendiri. Baca dan tatal bersebelahan nota anda, semuanya dalam tetingkap kecil yang sama.",
        alt: "Sebuah EPUB terbuka dalam Nota di sebelah tab nota Markdown.",
        caption: "Satu nota, satu buku, satu gambar. Semuanya dialu-alukan.",
      },
      {
        name: "Penanda buku",
        title: "Ada perkara yang berbaloi disimpan.",
        description:
          "Tandakan fail yang kerap anda buka, dan buka semula bila-bila anda perlukannya. Bacaan atau rujukan seterusnya sentiasa dekat.",
        alt: "Tab Markdown dan teks yang ditanda dalam Nota, dengan lencana penanda buku yang kecil.",
        caption: "Simpan yang berguna dalam capaian.",
      },
    ],
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
