// Simplified Chinese (zh-CN)
import type { Translation } from "./en";

const zh: Translation = {
  meta: {
    title: "Nota — 小小的记事本，装得下一切。",
    description:
      "一款原生 Mac 记事本，随手记下想法，打开文本文件，读你正在读的一切。它能预览 Markdown 和 LaTeX，把 JSON 和 XML 显示成一棵树，也能打开 CSV、SQL、PDF、电子书和图片。开源，无需账号。",
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
    theme: {
      toDark: "切换到深色模式",
      toLight: "切换到浅色模式",
    },
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
      "Nota 中打开着一个 Markdown 文件，旁边是它的预览，显示着渲染后的表格和两幅 Mermaid 图。",
  },
  showcase: {
    eyebrow: "小小的应用，细致的用心。",
    heading: "不只是一个记事本。",
    listLabel: "Nota 功能",
    /** Placeholders: {name} {index} {total} {description} */
    announcement: "{name}，第 {index} 项功能，共 {total} 项。{description}",
    features: [
      {
        id: "notes",
        name: "笔记",
        title: "先是一个记事本。",
        description:
          "打开 Nota，一个干净的 Untitled 标签页已经等在那里。左边是行号，状态栏一边打字一边帮你数着字数。",
        alt: "Nota 中的一个 Untitled 标签页，第一行写着 “This is Nota App”。",
        caption: "开始打字之前，没有什么要设置的。",
      },
      {
        id: "markdown",
        name: "Markdown",
        title: "边写 Markdown，边看见它。",
        description:
          "Nota 会在编辑器旁边的一栏里渲染你的 Markdown。标题、清单和表格都会显示在那里。Mermaid 图也会画出来，笔记里的流程图，看起来就是一张流程图。",
        alt: "Nota 中 Markdown 源码与渲染后的预览并排，其中有一份清单、一张表格和两幅 Mermaid 图。",
        caption: "左边写字，右边看着页面成形。",
      },
      {
        id: "html",
        name: "HTML",
        title: "看见的是页面，不只是代码。",
        description:
          "打开 .html 文件，Nota 会在编辑器旁边把真正的页面画出来。样式生效，按钮能点，脚本会跑，和在浏览器里一样。",
        alt: "Nota 中 HTML 源码与实时页面并排，是一个带卡片和按钮的小示例站点。",
        caption: "这一栏预览，就像一个真的浏览器标签页。",
      },
      {
        id: "latex",
        name: "LaTeX",
        title: "边写，边把论文排好版。",
        description:
          "打开 .tex 文件，Nota 会在源码旁边把它排好版。摘要、编号的章节、编号的公式，都是成稿里的样子。",
        alt: "Nota 中 LaTeX 源码与排版后的论文并排，有摘要、编号章节和公式。",
        caption: "左边的标记，成了右边的论文。",
      },
      {
        id: "json",
        name: "JSON",
        title: "把 JSON 当成一棵树来读。",
        description:
          ".json 文件打开时，文本旁边会有一棵可折叠的树。每个键和它的值都在，值按类型标了颜色，你所在的那一行会高亮。用不上的部分，收起来就好。",
        alt: "Nota 中 JSON 源码与可折叠的树并排，显示着键和带类型的值，其中一行处于选中状态。",
        caption: "有了这棵树，再长的文件也好走。",
      },
      {
        id: "xml",
        name: "XML",
        title: "XML 也有同一棵树。",
        description:
          ".xml 文件打开时是同一棵可折叠的树，属性和 CDATA 文本都显示在各自的位置上。嵌套很深的标签一层一层展开，想看多深就看多深。",
        alt: "Nota 中 XML 源码与可折叠的树并排，显示着属性和 CDATA 文本。",
        caption: "属性和 CDATA 文本，就显示在树里。",
      },
      {
        id: "csv",
        name: "CSV",
        title: "把 CSV 看成一张表。",
        description:
          ".csv 或 .tsv 文件会在编辑器旁边打开成一张可排序的表格。按某一列排序、翻页，或者导出一份。文件本身还是纯文本。",
        alt: "Nota 中逗号分隔的源码与可排序表格并排，带分页和 Export CSV 按钮。",
        caption: "还是那个文件，只是更好读了。",
      },
      {
        id: "sql",
        name: "SQL",
        title: "跑一遍 SQL 转储，再查询它。",
        description:
          "Nota 会把 .sql 文件跑进内存里的 SQLite 数据库，不会动磁盘上的文件。选一张表来看，或者自己写查询——列名会随打随提示。结果可以导出成 CSV。",
        alt: "Nota 中 SQL 转储与查询框并排，有列名自动补全和一张结果表格。",
        caption: "左边的转储，成了右边可以查询的数据库。",
      },
      {
        id: "images",
        name: "内嵌图片",
        title: "图片就住在笔记里。",
        description:
          "粘贴一张截图，或者把图片拖进笔记，它会在文字里变成一枚小标记。旁边的图库会留下你加进来的每一张图，文字依旧好读，也什么都不会丢。",
        alt: "一篇笔记中有两枚内嵌图片标记，两张图都在 Nota 的图库里。",
        caption: "小标记留在文字里，完整的图在图库里等着。",
      },
      {
        id: "pdf",
        name: "PDF",
        title: "让 PDF 就在笔记旁边。",
        description:
          "PDF 会以只读方式在自己的标签页里打开，侧栏里是每一页的缩略图。点一下缩略图就直接跳到那一页，状态栏会显示你正在第几页。",
        alt: "Nota 中以只读方式打开的一份 PDF，侧栏 Pages 里是每一页的缩略图。",
        caption: "你正在写的笔记，和这份文档只隔一个标签页。",
      },
      {
        id: "epub",
        name: "EPUB",
        title: "在一个标签页里读一本书。",
        description:
          "EPUB 以只读方式打开，目录就在侧栏里：卷、章、节。点任意一章就直接过去，状态栏会告诉你正读到哪一章。",
        alt: "Nota 中打开着一本 EPUB，侧栏 Contents 里列着卷、章和节。",
        caption: "二十七章，你正读到哪一章，一眼就看得见。",
      },
      {
        id: "picture",
        name: "图片",
        title: "打开一张图，就这样。",
        description:
          "PNG、JPEG、GIF 或 HEIC 会居中显示在自己的只读标签页里。状态栏显示它的像素尺寸。不用先点开几层。",
        alt: "Nota 中以只读方式打开的一张 PNG，居中显示，状态栏里是它的尺寸。",
        caption: "打开，看一眼，关掉标签页。",
      },
      {
        id: "bookmarks",
        name: "书签",
        title: "常用的文件，就放在手边。",
        description:
          "给当前标签页加个书签，它就进了书签面板的列表。之后打开面板，敲几个字母，就直接回到那个文件。",
        alt: "Nota 的书签面板浮在编辑器之上，有一个搜索框和一份已加书签的文件列表。",
        caption: "总要回头翻的那些文件，搜一下就在。",
      },
      {
        id: "zen",
        name: "Zen 模式",
        title: "除了文字，其他都藏起来。",
        description:
          "Zen 模式会收走标签页、控件、行号和状态栏。剩下的，只有一扇窗口和你的文字。",
        alt: "Nota 处于 Zen 模式：一扇空白的窗口，上面只有 “Zen mode” 这几个字。",
        caption: "还是那个记事本，只是屏幕上少了些东西。",
      },
    ],
  },
  install: {
    tabsLabel: "安装方式",
    homebrewCommand: "brew install --cask manfad/nota/nota",
    curlCommand:
      "curl --proto '=https' --tlsv1.2 -LsSf https://nota-app.xyz/install.sh | sh",
    copy: "复制",
    copied: "已复制",
    aboutGatekeeper: "macOS 为什么可能拦下 Nota",
    gatekeeperNote:
      "Nota 还没有经过 Apple 公证。如果 macOS 拦下它，打开系统设置 › 隐私与安全性，在那里允许即可。",
  },
  fileTypes: {
    eyebrow: "文本、页面和图片",
    heading: "几乎什么都能拖进来。",
    intro: "Nota 会用最合适的方式打开每一个文件。下面是它认得的类型。",
    columns: {
      edit: {
        title: "编辑",
        note: "这些按文本打开，可以编辑和保存。",
      },
      preview: {
        title: "预览",
        note: "这些以只读方式打开，只用来读。",
      },
      split: {
        title: "分栏",
        note: "这些打开时，编辑器旁边会有一栏预览。",
      },
    },
    footer: "以及任何能按 UTF-8 文本读取的文件。",
  },
  openSource: {
    eyebrow: "用起来就像你的 Mac，因为它本来就是。",
    heading: ["随你使用。", "向所有人开放。"] as [string, string],
    description:
      "Nota 为 macOS 原生打造，用起来和你 Mac 上别的应用一样。不用注册账号，也没有什么要登录的。想看的话，全部源码都在 GitHub 上。",
    link: "去 GitHub 看看",
    values: [
      {
        number: "01",
        title: "原生于 Mac",
        description: "用 Swift 和 AppKit 写成，和你 Mac 上的其他应用一个样子。",
      },
      {
        number: "02",
        title: "开源",
        description: "读读代码，提点想法，或者改成你自己的样子。",
      },
      {
        number: "03",
        title: "随时准备好",
        description: "不用注册。打开 Nota，写就是了。",
      },
    ],
  },
  closing: {
    iconAlt: "Nota 的笔记本与铅笔应用图标",
    heading: ["为下一个念头，", "腾一点地方。"] as [string, string],
    description: "不必是什么大想法，打开一个标签页写下来就好。",
    download: "下载 macOS 版",
    compatibility: "支持 macOS 14 及以上",
  },
  footer: {
    home: "Nota 首页",
    tagline: "一个属于你 Mac 的小记事本。",
    link: "在 GitHub 上查看",
  },
};

export default zh;
