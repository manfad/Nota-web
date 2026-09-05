// Simplified Chinese (zh-CN)
import type { Translation } from "./en";

const zh: Translation = {
  meta: {
    title: "Nota — 小小的记事本，装得下一切。",
    description:
      "一款原生 Mac 记事本，随手记下想法，打开文本文件，读你正在读的一切。标签页常驻、图片内嵌、Vim 操作，还有一份安心。开源，无需登录。",
    ogImageAlt: "Nota。小小的记事本，装得下一切。",
  },
  skipLink: "跳到主要内容",
  nav: {
    home: "Nota 首页",
    macLabel: "Mac 版",
    label: "主导航",
    features: "功能",
    github: "GitHub",
    download: "获取 Nota",
    language: "切换语言",
  },
  hero: {
    eyebrow: "一款小应用，安放日常的念头",
    heading: ["小小的记事本。", "装得下一切。"] as [string, string],
    description: [
      "一款原生 Mac 记事本，随手记下想法，打开文本文件，",
      "读你正在读的一切。新建一个标签页，随意就好。",
    ] as [string, string],
    download: "下载 macOS 版",
    viewSource: "查看源码",
    compatibility: "支持 macOS 14 及以上",
    noAccount: "无需注册账号",
    screenshotAlt:
      "Nota 以实时分栏视图显示一篇 Markdown 笔记，旁边是 Untitled、Field notes 和 EPUB 标签页。",
  },
  showcase: {
    eyebrow: "小小的应用，细致的用心。",
    heading: "不只是一个记事本。",
    listLabel: "Nota 功能",
    /** Placeholders: {name} {index} {total} {description} */
    announcement: "{name}，第 {index} 项功能，共 {total} 项。{description}",
    features: [
      {
        name: "标签页常驻",
        title: "从上次停下的地方继续。",
        description:
          "打开就是一个干净的 Untitled 标签页。再次启动 Nota 时，之前开着的标签页和缓存的笔记都会回来，包括还没存成文件的那些。",
        alt: "Nota 编辑器中同时打开着 Small things、Untitled 和 Field notes 三个标签页。",
        caption: "为手边未完成的事，留一处小小空间。",
      },
      {
        name: "图片内嵌",
        title: "完整画面，一并留下。",
        description:
          "粘贴一张截图，或者把图片拖进来。文字之间会留下一枚清爽的图片标记，完整的画面就在旁边的图库里。",
        alt: "一篇笔记中有两枚内嵌图片标记，Nota 的图库里显示着笔记本的图片。",
        caption: "笔记里是小小的标记，旁边是完整的图。",
      },
      {
        name: "实时预览",
        title: "写下来，随即看见。",
        description:
          "分栏实时预览，让 Markdown 在编辑器旁边渐渐成形。想安静读一读的时候，切到阅读模式就好。",
        alt: "Nota 中 Markdown 源码与渲染后的标题、清单和引用并排显示。",
        caption:
          "一边是你写下的字，一边是渐渐成形的页面。",
      },
      {
        name: "禅模式",
        title: "屏幕上，少一点。",
        description:
          "隐去标签页、控件和状态栏。禅模式让文字多一些呼吸的空间，而你熟悉的快捷键依旧好用。",
        alt: "Nota 处于极简状态，标签页、控件、行号和状态栏都已隐藏。",
        caption: "还是那个小记事本，只是更安静了。",
      },
      {
        name: "Vim 操作",
        title: "手指自己认得路。",
        description:
          "打开 Vim 模式，熟悉的移动方式和快捷键都在。在笔记间穿梭、随手改上一笔，思路不被打断。",
        alt: "Nota 的文本编辑器已启用 Vim，显示着 Normal 模式标记。",
        caption: "熟悉的节奏，原生的 Mac 记事本。",
      },
      {
        name: "文本文件",
        title: "拖进来，就是一个标签页。",
        description:
          "纯文本、Markdown、代码，或是没有扩展名的 README。Nota 能打开各种 UTF-8 文本文件，让那些琐碎细节都有处安放。",
        alt: "一个 Markdown 文件和一个纯文本文件在 Nota 中作为标签页同时打开。",
        caption: ".txt · .md · .json · .csv · README · 以及更多",
      },
      {
        name: "书籍与 PDF",
        title: "让参考资料就在手边。",
        description:
          "EPUB、PDF、图片或 GIF，都能各自打开一个标签页。一边看笔记一边翻阅，全在同一扇小窗里。",
        alt: "Nota 中打开着一本 EPUB，旁边是一个 Markdown 笔记标签页。",
        caption: "一篇笔记、一本书、一张图，都欢迎。",
      },
      {
        name: "书签",
        title: "有些东西，值得留着。",
        description:
          "把常翻的文件加上书签，需要时随时再打开。下一次要读的、要查的，都离你不远。",
        alt: "Nota 中已加书签的 Markdown 和文本标签页，带有小小的书签标记。",
        caption: "把好东西放在触手可及的地方。",
      },
    ],
  },
  openSource: {
    eyebrow: "用起来就像你的 Mac，因为它本来就是。",
    heading: ["随你使用。", "向所有人开放。"] as [string, string],
    description:
      "为 macOS 原生打造，用起来就像本该属于这里的应用。不用注册账号。源码也都在那里，欢迎好奇的你。",
    link: "去 GitHub 看看",
    values: [
      {
        number: "01",
        title: "原生，本该如此",
        description: "用 Swift 和 AppKit 打造，在你的 Mac 上如鱼得水。",
      },
      {
        number: "02",
        title: "开放，出于选择",
        description:
          "读读代码，提点想法，或者改成你自己的样子。",
      },
      {
        number: "03",
        title: "随时准备好",
        description: "无需登录。打开 Nota，写就是了。",
      },
    ],
  },
  closing: {
    iconAlt: "Nota 的笔记本与铅笔应用图标",
    heading: ["为下一个念头，", "腾一点地方。"] as [string, string],
    description: "不必郑重其事，打开一个标签页就好。",
    download: "下载 macOS 版",
    compatibility: "支持 macOS 14 及以上",
  },
  footer: {
    home: "Nota 首页",
    tagline: "一个属于你 Mac 的小记事本。",
    link: "开源打造",
  },
};

export default zh;
