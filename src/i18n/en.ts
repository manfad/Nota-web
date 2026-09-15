const en = {
  meta: {
    title: "Nota — A little notepad. Room for everything.",
    description:
      "A native Mac notepad for quick thoughts, text files, and everything you’re reading. It previews Markdown and LaTeX, shows JSON and XML as trees, and opens CSV, SQL, PDFs, books, and pictures. Open source, and no account needed.",
    ogImageAlt: "Nota. A little notepad. Room for everything.",
  },
  skipLink: "Skip to content",
  nav: {
    home: "Nota home",
    macLabel: "for Mac",
    label: "Main navigation",
    features: "Features",
    github: "GitHub",
    download: "Get Nota",
    language: "Change language",
    theme: {
      toDark: "Switch to dark mode",
      toLight: "Switch to light mode",
    },
  },
  hero: {
    eyebrow: "A small app for your everyday thoughts",
    heading: ["A little notepad.", "Room for everything."] as [string, string],
    description: [
      "A native Mac notepad for quick thoughts, text files, and everything",
      "you’re reading. Open a tab and make yourself at home.",
    ] as [string, string],
    download: "Download for macOS",
    viewSource: "View source",
    compatibility: "For macOS 14 and later",
    noAccount: "No account needed",
    screenshotAlt:
      "Nota with a Markdown file open beside its preview, showing a rendered table and two Mermaid diagrams.",
  },
  showcase: {
    eyebrow: "Small app. Thoughtful details.",
    heading: "A little more than a notepad.",
    listLabel: "Nota features",
    /** Placeholders: {name} {index} {total} {description} */
    announcement: "{name}, feature {index} of {total}. {description}",
    features: [
      {
        id: "notes",
        name: "Notes",
        title: "It starts as a notepad.",
        description:
          "Open Nota and a fresh Untitled tab is waiting. Line numbers run down the left, and the status bar counts your words as you type.",
        alt: "An Untitled tab in Nota with “This is Nota App” typed on the first line.",
        caption: "There’s nothing to set up before you start typing.",
      },
      {
        id: "markdown",
        name: "Markdown",
        title: "See your Markdown as you write it.",
        description:
          "Nota renders your Markdown in a pane beside the editor. Headings, checklists, and tables all show up there. Mermaid diagrams are drawn too, so a flowchart in your notes appears as a flowchart.",
        alt: "Markdown source beside its rendered preview in Nota, with a checklist, a table, and two Mermaid diagrams.",
        caption: "You write on the left and watch the page on the right.",
      },
      {
        id: "html",
        name: "HTML",
        title: "See the page, not just the code.",
        description:
          "Open an .html file and Nota draws the real page beside the editor. Styles apply, buttons click, and scripts run, the same way they would in a browser.",
        alt: "HTML source beside its live page in Nota, a small demo site with cards and buttons.",
        caption: "The preview behaves like a real browser tab.",
      },
      {
        id: "latex",
        name: "LaTeX",
        title: "Your paper, typeset as you write.",
        description:
          "Open a .tex file and Nota typesets it beside the source. The abstract, the numbered sections, and the numbered equations all appear the way they will in the finished paper.",
        alt: "LaTeX source beside a typeset paper in Nota, with an abstract, numbered sections, and equations.",
        caption: "The markup on the left becomes the paper on the right.",
      },
      {
        id: "json",
        name: "JSON",
        title: "Read JSON as a tree.",
        description:
          "A .json file opens with a collapsible tree next to the text. It shows every key with its value, colored by type, and highlights the row you’re on. Fold away the parts you don’t need.",
        alt: "JSON source beside a collapsible tree in Nota, showing keys and typed values with one row selected.",
        caption: "The tree makes a long file easy to move around in.",
      },
      {
        id: "xml",
        name: "XML",
        title: "XML gets the same tree.",
        description:
          "An .xml file opens with the same collapsible tree, and it shows attributes and CDATA text in place. Deeply nested tags unfold one level at a time, so you can go as deep as you need.",
        alt: "XML source beside a collapsible tree in Nota, showing attributes and CDATA text.",
        caption: "Attributes and CDATA text appear right in the tree.",
      },
      {
        id: "csv",
        name: "CSV",
        title: "See your CSV as a table.",
        description:
          "A .csv or .tsv file opens as a sortable table beside the editor. Sort by a column, page through the rows, or export a copy. The file itself stays plain text.",
        alt: "Comma-separated source beside a sortable table in Nota, with pagination and an Export CSV button.",
        caption: "The same file, just easier to read.",
      },
      {
        id: "sql",
        name: "SQL",
        title: "Run a SQL dump and query it.",
        description:
          "Nota runs a .sql file into a SQLite database in memory, never the file on disk. Pick a table to browse, or write your own query with the column names suggested as you type. The results export as CSV.",
        alt: "A SQL dump beside a query box in Nota, with column-name autocomplete and a results grid.",
        caption:
          "The dump on the left becomes a database you can query on the right.",
      },
      {
        id: "images",
        name: "Images",
        title: "Pictures live inside your notes.",
        description:
          "Paste a screenshot or drag a picture into a note and it becomes a small chip in your text. The gallery beside the editor keeps every picture you add, so your writing stays readable and nothing gets lost.",
        alt: "Two inline image chips in a note, with both pictures in Nota’s image gallery.",
        caption:
          "The chip sits in your text and the full picture waits in the gallery.",
      },
      {
        id: "pdf",
        name: "PDF",
        title: "Keep a PDF beside your notes.",
        description:
          "A PDF opens read-only in its own tab, with a thumbnail of every page in the sidebar. Click a thumbnail to go straight to that page, and the status bar shows which page you’re on.",
        alt: "A PDF open read-only in Nota, with a Pages sidebar of page thumbnails.",
        caption: "The document sits one tab away from the note you’re writing.",
      },
      {
        id: "epub",
        name: "EPUB",
        title: "Read a book in a tab.",
        description:
          "An EPUB opens read-only with its table of contents in the sidebar: parts, chapters, and sections. Click any chapter to go straight to it, and the status bar shows which one you’re on.",
        alt: "An EPUB open in Nota with a Contents sidebar listing parts, chapters, and sections.",
        caption: "Twenty-seven chapters, and you can see the one you’re on.",
      },
      {
        id: "picture",
        name: "Pictures",
        title: "Open a picture. That’s it.",
        description:
          "A PNG, JPEG, GIF, or HEIC opens centered in its own read-only tab. The status bar shows its size in pixels. There’s nothing to click through first.",
        alt: "A PNG open read-only in Nota, centered, with its dimensions in the status bar.",
        caption: "Open it, look at it, and close the tab.",
      },
      {
        id: "bookmarks",
        name: "Bookmarks",
        title: "Keep your usual files close.",
        description:
          "Bookmark the tab you’re on and it joins the list in the bookmarks panel. Open the panel later, type a few letters of the name, and go straight back to the file.",
        alt: "Nota’s bookmarks panel floating over the editor, with a search field and a list of saved files.",
        caption:
          "The files you keep coming back to are always one search away.",
      },
      {
        id: "zen",
        name: "Zen mode",
        title: "Hide everything but your words.",
        description:
          "Zen mode takes away the tabs, the controls, the line numbers, and the status bar. What’s left is the window, your words, and nothing else.",
        alt: "Nota in Zen mode: a blank window with only the words “Zen mode” on it.",
        caption: "It’s the same notepad with less on the screen.",
      },
    ],
  },
  install: {
    tabsLabel: "Install method",
    homebrewCommand: "brew install --cask manfad/nota/nota",
    curlCommand:
      "curl --proto '=https' --tlsv1.2 -LsSf https://nota-app.xyz/install.sh | sh",
    copy: "Copy",
    copied: "Copied",
    aboutGatekeeper: "Why macOS may block Nota",
    gatekeeperNote:
      "Nota isn’t notarized by Apple yet. If macOS blocks it, open System Settings › Privacy & Security and allow it there.",
  },
  fileTypes: {
    eyebrow: "Text, pages, and pictures",
    heading: "Drop almost anything in.",
    intro:
      "Nota opens each file in the way that suits it best. Here are the types it knows.",
    columns: {
      edit: {
        title: "Edit",
        note: "These open as text you can edit and save.",
      },
      preview: {
        title: "Preview",
        note: "These open read-only, just to be read.",
      },
      split: {
        title: "Split",
        note: "These open with a preview beside the editor.",
      },
    },
    footer: "Plus any other file that reads as UTF-8 text.",
  },
  openSource: {
    eyebrow: "Feels like your Mac. Because it is.",
    heading: ["Yours to use.", "Open to everyone."] as [string, string],
    description:
      "Nota is built natively for macOS, so it works the way your other Mac apps do. There’s no account to create and nothing to sign in to. The whole source is on GitHub if you want to look.",
    link: "Take a look on GitHub",
    values: [
      {
        number: "01",
        title: "Native to the Mac",
        description:
          "Written in Swift and AppKit, so it feels like the rest of your Mac.",
      },
      {
        number: "02",
        title: "Open source",
        description: "Read the code, suggest an idea, or make it your own.",
      },
      {
        number: "03",
        title: "Ready when you are",
        description: "Nothing to sign up for. Open Nota and start typing.",
      },
    ],
  },
  closing: {
    iconAlt: "Nota notebook and pencil app icon",
    heading: ["Make room for", "your next thought."] as [string, string],
    description:
      "It doesn’t have to be a big idea. Just open a tab and write it down.",
    download: "Download for macOS",
    compatibility: "For macOS 14 and later",
  },
  footer: {
    home: "Nota home",
    tagline: "A little notepad for your Mac.",
    link: "View on GitHub",
  },
};

export type Translation = typeof en;

export default en;
