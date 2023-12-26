import { hopeTheme } from "vuepress-theme-hope";

import { enNavbarConfig, esNavbarConfig } from "./navbar";
// import { esSidebarConfig, enSidebarConig } from "./sidebar";

export default hopeTheme({
  hostname: "https://github.com/adempiere/adempiere-site.github.io",

  author: {
    name: "ADempiere",
    url: "https://adempiere-site.erpya.com",
  },

  themeColor: {
    blue: "#933e95",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  iconAssets: "//at.alicdn.com/t/font_2410206_vuzkjonf4s9.css",
  iconPrefix: "iconfont icon-",

  logo: "/logo.svg",

  repo: "https://github.com/adempiere/adempiere-site",

  repoDisplay: false,

  docsDir: "src",

  locales: {
    "/": {
      navbar: enNavbarConfig,
      // sidebar: enSidebarConig,

      blog: {
        description: "ADempiere ERP Community",
        intro: "/about/",
        medias: {
          Gmail: "mailto:info@adempiere.io",
          GitHub: "https://github.com/adempiere/adempiere-site",
        },
      },
    },
    "/es/": {
      navbar: esNavbarConfig,
      // sidebar: esSidebarConfig,

      blog: {
        description:
          "VuePress project member, front-end developer, studying for a master's degree in theoretical physics",
        intro: "/es/about/",
        medias: {
          Gmail: "mailto:info@adempiere.io",
          GitHub: "https://github.com/adempiere/adempiere-site",
          Discord: "https://discord.gg/8eFAqkhb",
          Twitter: "https://twitter.com/ADempiereERP",
        },
      },
    },
  },

  displayFooter: true,
  copyright: "Copyright © 2022-present ADempiere Community",

  plugins: {
    blog: true,

    comment: {
      provider: "Waline",
      serverURL: "https://<to-be-defined>",
    },

    feed: {
      atom: true,
      json: true,
      rss: true,
    },

    mdEnhance: {
      align: true,
      codetabs: true,
      demo: true,
      flowchart: true,
      footnote: true,
      imageMark: true,
      presentation: true,
      sub: true,
      sup: true,
      tex: true,
      vpre: true,
    },

    pwa: {
      favicon: "/favicon.ico",
      themeColor: "#5c92d1",
      cacheHTML: false,
      maxSize: 3072,
      apple: {
        icon: "/assets/icon/apple-touch-icon.png",
        statusBarColor: "white",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        name: "ADempiere ERP Community",
        short_name: "ADempiere ERP",
        description: "ADempiere ERP, created by peoples like you",
        theme_color: "#5c92d1",
        icons: [
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Classification",
            short_name: "Classification",
            icons: [
              {
                src: "/assets/icon/category-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/category-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
            url: "/category/",
            description: "Classification Group",
          },
          {
            name: "Label",
            short_name: "Label",
            icons: [
              {
                src: "/assets/icon/tag-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/tag-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
            url: "/tag/",
            description: "Tag Grouping",
          },
          {
            name: "Timeline",
            short_name: "Timeline",
            icons: [
              {
                src: "/assets/icon/timeline-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/timeline-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
            url: "/timeline/",
            description: "Timeline Article List",
          },
          {
            name: "Self Introduction",
            short_name: "Self Introduction",
            icons: [
              {
                src: "/assets/icon/about-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/about-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
            url: "/about/",
            description: "Self Introduction",
          },
        ],
      },
    },
  },
});
