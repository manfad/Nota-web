// Malay (ms)
import type { Translation } from "./en";

const ms: Translation = {
  meta: {
    title: "Nota — Notepad kecil. Ruang untuk semuanya.",
    description:
      "Notepad Mac asli untuk buah fikiran pantas, fail teks, dan segala yang anda baca. Ia memberi pratonton Markdown dan LaTeX, memaparkan JSON dan XML sebagai pokok, serta membuka CSV, SQL, PDF, buku, dan gambar. Sumber terbuka, dan tiada akaun diperlukan.",
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
    theme: {
      toDark: "Tukar ke mod gelap",
      toLight: "Tukar ke mod cerah",
    },
  },
  hero: {
    eyebrow: "Aplikasi kecil untuk fikiran harian anda",
    heading: ["Notepad kecil.", "Ruang untuk semuanya."] as [string, string],
    description: [
      "Notepad Mac asli untuk buah fikiran pantas, fail teks, dan",
      "segala yang anda baca. Buka satu tab dan buat macam rumah sendiri.",
    ] as [string, string],
    download: "Muat turun untuk macOS",
    viewSource: "Lihat kod sumber",
    compatibility: "Untuk macOS 14 dan ke atas",
    noAccount: "Tiada akaun diperlukan",
    screenshotAlt:
      "Nota dengan fail Markdown terbuka di sebelah pratontonnya, menunjukkan sebuah jadual dan dua rajah Mermaid.",
  },
  showcase: {
    eyebrow: "Aplikasi kecil. Perincian yang teliti.",
    heading: "Lebih sedikit daripada sekadar notepad.",
    listLabel: "Ciri-ciri Nota",
    /** Placeholders: {name} {index} {total} {description} */
    announcement: "{name}, ciri {index} daripada {total}. {description}",
    features: [
      {
        id: "notes",
        name: "Catatan",
        title: "Ia bermula sebagai notepad.",
        description:
          "Buka Nota dan satu tab Untitled yang baharu sudah menunggu. Nombor baris di sebelah kiri, dan bar status mengira perkataan anda sambil anda menaip.",
        alt: "Satu tab Untitled dalam Nota dengan “This is Nota App” ditaip pada baris pertama.",
        caption: "Tiada apa-apa untuk disediakan sebelum anda mula menaip.",
      },
      {
        id: "markdown",
        name: "Markdown",
        title: "Lihat Markdown anda sambil menulisnya.",
        description:
          "Nota memaparkan Markdown anda dalam panel di sebelah editor. Tajuk, senarai semak, dan jadual semuanya muncul di situ. Rajah Mermaid turut dilukis, jadi carta alir dalam nota anda kelihatan sebagai carta alir.",
        alt: "Sumber Markdown di sebelah pratonton terpaparnya dalam Nota, dengan senarai semak, jadual, dan dua rajah Mermaid.",
        caption: "Anda menulis di kiri dan melihat halamannya di kanan.",
      },
      {
        id: "html",
        name: "HTML",
        title: "Lihat halamannya, bukan sekadar kodnya.",
        description:
          "Buka fail .html dan Nota melukis halaman sebenar di sebelah editor. Gaya digunakan, butang boleh diklik, dan skrip berjalan, sama seperti dalam pelayar.",
        alt: "Sumber HTML di sebelah halaman langsungnya dalam Nota, sebuah tapak demo kecil dengan kad dan butang.",
        caption: "Pratonton itu berkelakuan seperti tab pelayar sebenar.",
      },
      {
        id: "latex",
        name: "LaTeX",
        title: "Kertas anda, ditaip atur sambil anda menulis.",
        description:
          "Buka fail .tex dan Nota menaip aturnya di sebelah sumber. Abstrak, bahagian bernombor, dan persamaan bernombor semuanya muncul seperti dalam kertas yang siap.",
        alt: "Sumber LaTeX di sebelah kertas yang ditaip atur dalam Nota, dengan abstrak, bahagian bernombor, dan persamaan.",
        caption: "Markup di kiri menjadi kertas di kanan.",
      },
      {
        id: "json",
        name: "JSON",
        title: "Baca JSON sebagai pokok.",
        description:
          "Fail .json dibuka dengan pokok boleh lipat di sebelah teksnya. Ia menunjukkan setiap kunci dengan nilainya, diwarnakan mengikut jenis, dan menyerlahkan baris yang anda berada padanya. Lipat bahagian yang anda tak perlukan.",
        alt: "Sumber JSON di sebelah pokok boleh lipat dalam Nota, memaparkan kunci dan nilai bertaip dengan satu baris dipilih.",
        caption: "Pokok itu memudahkan anda bergerak dalam fail yang panjang.",
      },
      {
        id: "xml",
        name: "XML",
        title: "XML dapat pokok yang sama.",
        description:
          "Fail .xml dibuka dengan pokok boleh lipat yang sama, dan ia menunjukkan atribut serta teks CDATA pada tempatnya. Tag yang bersarang dalam terbuka satu lapis pada satu masa, jadi anda boleh masuk sedalam yang perlu.",
        alt: "Sumber XML di sebelah pokok boleh lipat dalam Nota, menunjukkan atribut dan teks CDATA.",
        caption: "Atribut dan teks CDATA muncul terus dalam pokok itu.",
      },
      {
        id: "csv",
        name: "CSV",
        title: "Lihat CSV anda sebagai jadual.",
        description:
          "Fail .csv atau .tsv dibuka sebagai jadual boleh isih di sebelah editor. Isih ikut lajur, tukar halaman baris, atau eksport satu salinan. Failnya sendiri kekal teks biasa.",
        alt: "Sumber dipisahkan koma di sebelah jadual boleh isih dalam Nota, dengan penomboran halaman dan butang Export CSV.",
        caption: "Fail yang sama, cuma lebih senang dibaca.",
      },
      {
        id: "sql",
        name: "SQL",
        title: "Jalankan dump SQL dan buat pertanyaan padanya.",
        description:
          "Nota menjalankan fail .sql ke dalam pangkalan data SQLite dalam memori, bukan fail di cakera. Pilih jadual untuk dilihat, atau tulis pertanyaan anda sendiri dengan nama lajur dicadangkan sambil anda menaip. Hasilnya dieksport sebagai CSV.",
        alt: "Dump SQL di sebelah kotak pertanyaan dalam Nota, dengan autolengkap nama lajur dan grid hasil.",
        caption:
          "Dump di kiri menjadi pangkalan data yang boleh anda tanya di kanan.",
      },
      {
        id: "images",
        name: "Imej",
        title: "Gambar tinggal di dalam nota anda.",
        description:
          "Tampal tangkap layar atau seret gambar ke dalam nota dan ia menjadi cip kecil dalam teks anda. Galeri di sebelah editor menyimpan setiap gambar yang anda tambah, jadi tulisan anda kekal mudah dibaca dan tiada apa yang hilang.",
        alt: "Dua cip imej dalam sesebuah nota, dengan kedua-dua gambar dalam galeri imej Nota.",
        caption:
          "Cip itu duduk dalam teks anda dan gambar penuhnya menunggu dalam galeri.",
      },
      {
        id: "pdf",
        name: "PDF",
        title: "Simpan PDF di sebelah nota anda.",
        description:
          "PDF dibuka baca sahaja dalam tabnya sendiri, dengan imej kecil setiap halaman di bar sisi. Klik imej kecil untuk terus ke halaman itu, dan bar status menunjukkan halaman yang anda berada padanya.",
        alt: "Sebuah PDF dibuka baca sahaja dalam Nota, dengan bar sisi Pages berisi imej kecil setiap halaman.",
        caption:
          "Dokumen itu hanya satu tab jauhnya daripada nota yang anda tulis.",
      },
      {
        id: "epub",
        name: "EPUB",
        title: "Baca buku dalam satu tab.",
        description:
          "EPUB dibuka baca sahaja dengan senarai kandungannya di bar sisi: bahagian, bab, dan seksyen. Klik mana-mana bab untuk terus ke sana, dan bar status menunjukkan bab yang anda sedang baca.",
        alt: "Sebuah EPUB terbuka dalam Nota dengan bar sisi Contents menyenaraikan bahagian, bab, dan seksyen.",
        caption:
          "Dua puluh tujuh bab, dan anda nampak yang mana satu anda baca.",
      },
      {
        id: "picture",
        name: "Gambar",
        title: "Buka satu gambar. Itu sahaja.",
        description:
          "PNG, JPEG, GIF, atau HEIC dibuka di tengah dalam tab baca sahajanya sendiri. Bar status menunjukkan saiznya dalam piksel. Tiada apa-apa untuk diklik dahulu.",
        alt: "Sebuah PNG dibuka baca sahaja dalam Nota, di tengah, dengan dimensinya pada bar status.",
        caption: "Buka, lihat, dan tutup tabnya.",
      },
      {
        id: "bookmarks",
        name: "Penanda buku",
        title: "Simpan fail biasa anda berdekatan.",
        description:
          "Tandakan tab yang anda sedang buka dan ia masuk ke dalam senarai pada panel penanda buku. Buka panel itu kemudian, taip beberapa huruf namanya, dan terus kembali ke fail itu.",
        alt: "Panel penanda buku Nota terapung di atas editor, dengan medan carian dan senarai fail tersimpan.",
        caption:
          "Fail yang anda sering kembali padanya sentiasa satu carian sahaja.",
      },
      {
        id: "zen",
        name: "Mod zen",
        title: "Sembunyikan semuanya kecuali tulisan anda.",
        description:
          "Mod zen mengalih keluar tab, kawalan, nombor baris, dan bar status. Yang tinggal hanyalah tetingkap dan tulisan anda.",
        alt: "Nota dalam mod zen: tetingkap kosong dengan hanya perkataan “Zen mode” padanya.",
        caption: "Notepad yang sama, cuma kurang benda di skrin.",
      },
    ],
  },
  install: {
    tabsLabel: "Kaedah pemasangan",
    homebrewCommand: "brew install --cask manfad/nota/nota",
    curlCommand:
      "curl --proto '=https' --tlsv1.2 -LsSf https://nota-app.xyz/install.sh | sh",
    copy: "Salin",
    copied: "Disalin",
    aboutGatekeeper: "Kenapa macOS mungkin menyekat Nota",
    gatekeeperNote:
      "Nota belum disahkan (notarized) oleh Apple lagi. Jika macOS menyekatnya, buka Tetapan Sistem › Privasi & Keselamatan dan benarkan ia di situ.",
  },
  fileTypes: {
    eyebrow: "Teks, halaman, dan gambar",
    heading: "Seret masuk hampir apa sahaja.",
    intro:
      "Nota membuka setiap fail dengan cara yang paling sesuai untuknya. Ini jenis-jenis yang ia kenal.",
    columns: {
      edit: {
        title: "Sunting",
        note: "Ini dibuka sebagai teks yang boleh anda sunting dan simpan.",
      },
      preview: {
        title: "Pratonton",
        note: "Ini dibuka baca sahaja, semata-mata untuk dibaca.",
      },
      split: {
        title: "Belah",
        note: "Ini dibuka dengan pratonton di sebelah editor.",
      },
    },
    footer: "Serta apa-apa fail lain yang boleh dibaca sebagai teks UTF-8.",
  },
  openSource: {
    eyebrow: "Terasa seperti Mac anda. Kerana memang begitu.",
    heading: ["Milik anda.", "Terbuka untuk semua."] as [string, string],
    description:
      "Nota dibina secara asli untuk macOS, jadi ia berfungsi seperti aplikasi Mac anda yang lain. Tiada akaun untuk dibuat dan tiada apa untuk dilog masuk. Keseluruhan kod sumbernya ada di GitHub jika anda ingin melihatnya.",
    link: "Lihat di GitHub",
    values: [
      {
        number: "01",
        title: "Asli untuk Mac",
        description:
          "Ditulis dengan Swift dan AppKit, jadi rasanya seperti aplikasi Mac anda yang lain.",
      },
      {
        number: "02",
        title: "Sumber terbuka",
        description: "Baca kodnya, cadangkan idea, atau jadikan ia milik anda.",
      },
      {
        number: "03",
        title: "Sedia bila anda sedia",
        description: "Tiada pendaftaran. Buka Nota dan mula menaip.",
      },
    ],
  },
  closing: {
    iconAlt: "Ikon aplikasi Nota berupa buku nota dan pensel",
    heading: ["Beri ruang untuk", "fikiran anda seterusnya."] as [
      string,
      string,
    ],
    description:
      "Ia tak perlu jadi idea yang besar. Cukup buka satu tab dan tuliskannya.",
    download: "Muat turun untuk macOS",
    compatibility: "Untuk macOS 14 dan ke atas",
  },
  footer: {
    home: "Laman utama Nota",
    tagline: "Notepad kecil untuk Mac anda.",
    link: "Lihat di GitHub",
  },
};

export default ms;
