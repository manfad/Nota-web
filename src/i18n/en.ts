const en = {
  meta: {
    title: "Nota — A little notepad. Room for everything.",
    description:
      "A native Mac notepad for quick thoughts, text files, and everything you’re reading. Persistent tabs, inline images, Vim motions, and a little peace of mind. Open source. No login required.",
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
  },
  hero: {
    eyebrow: "A small app for your everyday thoughts",
    heading: ["A little notepad.", "Room for everything."] as [string, string],
    description: [
      "A native Mac notepad for quick thoughts, text files, and",
      "everything you’re reading. Open a tab. Make yourself at home.",
    ] as [string, string],
    download: "Download for macOS",
    viewSource: "View source",
    compatibility: "For macOS 14 and later",
    noAccount: "No account needed",
    screenshotAlt:
      "Nota showing a Markdown note in a live split view, with Untitled, Field notes, and EPUB tabs beside it.",
  },
  showcase: {
    eyebrow: "Small app. Thoughtful details.",
    heading: "A little more than a notepad.",
    listLabel: "Nota features",
    /** Placeholders: {name} {index} {total} {description} */
    announcement: "{name}, feature {index} of {total}. {description}",
    features: [
      {
        name: "Persistent tabs",
        title: "Pick up where you left off.",
        description:
          "Start with a fresh Untitled tab. Your open tabs and cached notes come back when you reopen Nota, including the ones you haven’t saved to a file.",
        alt: "Nota’s editor with Small things, Untitled, and Field notes tabs open.",
        caption: "A little place for the things you’re in the middle of.",
      },
      {
        name: "Inline images",
        title: "Keep the whole picture.",
        description:
          "Paste a screenshot or drop in a picture. A tidy image chip sits with your words, and the gallery keeps the full picture right beside them.",
        alt: "Two inline image chips in a note, with notebook images in Nota’s gallery.",
        caption: "Small chips in your note. The full picture beside it.",
      },
      {
        name: "Live preview",
        title: "Write it. Then see it.",
        description:
          "Watch your Markdown take shape beside the editor with a live split preview. Switch to reading mode when you just want to settle into the page.",
        alt: "Markdown source beside its rendered headings, checklist, and quotation in Nota.",
        caption:
          "Your words on one side. Your page coming together on the other.",
      },
      {
        name: "Zen mode",
        title: "A little less on your screen.",
        description:
          "Hide the tabs, controls, and status bar. Zen mode gives your words room to breathe, while your familiar keyboard shortcuts keep working.",
        alt: "Nota in a minimal configuration with its tabs, controls, line numbers, and status bar hidden.",
        caption: "A quieter view of the same little notepad.",
      },
      {
        name: "Vim motions",
        title: "Your fingers know the way.",
        description:
          "Turn on Vim mode for familiar motions and keyboard shortcuts. Move through your notes, make an edit, and stay in your flow.",
        alt: "Nota’s text editor with Vim enabled and a Normal mode badge.",
        caption: "A familiar rhythm. A native Mac notepad.",
      },
      {
        name: "Text files",
        title: "Drop it in. Make it a tab.",
        description:
          "Plain text, Markdown, code, or a README with no extension. Nota opens UTF-8 text files of all kinds, so the little details have somewhere to land.",
        alt: "A Markdown file and a plain text file open together as tabs in Nota.",
        caption: ".txt · .md · .json · .csv · README · and more",
      },
      {
        name: "Books & PDFs",
        title: "Keep your references close.",
        description:
          "Open an EPUB, a PDF, a picture, or a GIF in its own tab. Read and browse alongside your notes, all in the same little window.",
        alt: "An EPUB open in Nota beside a Markdown note tab.",
        caption: "A note, a book, a picture. All welcome here.",
      },
      {
        name: "Bookmarks",
        title: "Some things are worth keeping.",
        description:
          "Bookmark the files you reach for often, and open them again whenever you need them. Your next read or reference is never far away.",
        alt: "Bookmarked Markdown and text tabs in Nota, marked with small bookmark badges.",
        caption: "Keep the good stuff within reach.",
      },
    ],
  },
  openSource: {
    eyebrow: "Feels like your Mac. Because it is.",
    heading: ["Yours to use.", "Open to everyone."] as [string, string],
    description:
      "Built natively for macOS, with the familiar feel of an app that belongs there. No account to create. And the source is there for anyone who’s curious.",
    link: "Take a look on GitHub",
    values: [
      {
        number: "01",
        title: "Native by nature",
        description: "Built with Swift and AppKit. Right at home on your Mac.",
      },
      {
        number: "02",
        title: "Open by choice",
        description:
          "Read the code, suggest an idea, or make it your own.",
      },
      {
        number: "03",
        title: "Ready when you are",
        description: "No login required. Open Nota and start typing.",
      },
    ],
  },
  closing: {
    iconAlt: "Nota notebook and pencil app icon",
    heading: ["Make room for", "your next thought."] as [string, string],
    description: "It doesn’t have to be a whole thing. Just open a tab.",
    download: "Download for macOS",
    compatibility: "For macOS 14 and later",
  },
  footer: {
    home: "Nota home",
    tagline: "A little notepad for your Mac.",
    link: "Made in the open",
  },
};

export type Translation = typeof en;

export default en;
