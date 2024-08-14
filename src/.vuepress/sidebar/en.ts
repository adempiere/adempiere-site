import { sidebar } from "vuepress-theme-hope";

export const enSidebarConfig = sidebar([
    "/",
    {
        text: "We",
        icon: "id-card-clip",
        prefix: "/about/",
        collapsible: true,
        children: [
          { text: "About",
            icon: "user",
            link: "/about/", 
            activeMatch: "^/about/$" },
          {
            text: "Some History",
            icon: "newspaper",
            prefix: "/about/",
            collapsible: true,
            children: [
              "branding",
              "the-beginning",
            ],
          },
          {
            text: "Meeting",
            icon: "user-tie",
            prefix: "/about/meeting/",
            collapsible: true,
            children: [
              "berlin-2009",
              "berlin-2014",
            ],
          },
          {
            text: "Articles",
            icon: "fa-solid fa-newspaper",
            prefix: "/about/articles/",
            collapsible: true,
            children: [
              "2015-06-22-the-future-of-adempiere-as-a-ddd-reactive-system.md",
              "2015-08-06-world-announcement-for-adempiere.md",
            ],
          },
        ],
      },
      {
        text: "Product",
        icon: "box",
        prefix: "/product/",
        collapsible: true,
        children: [
          { text: "ADempiere Features", 
            link: "/product/", 
            icon: "box", 
            activeMatch: "^/product/$" 
          },
          {
            text: "Technology",
            icon: "microchip",
            collapsible: true,
            children: [
              "technology",
              "business-process",
              "benefits",
              "source-code",
              "demo",
              "how-to-install/"
            ],
          },
        ],
      },
      {
        text: "Community",
        icon: "users",
        collapsible: true,
        prefix: "/community/",
        children: [
          {
            text: "Community",
            icon: "people-group",
            collapsible: true,
            link: "/community/",
            activeMatch: "^/community/$",
          },
          {
            text: "Community of ADempiere ERP",
            icon: "people-carry-box",
            collapsible: true,
            children: [
              "code-of-conduct", 
              "duties-and-rigths",
              "community-detail",
              "apply-for-projects-to-allocate-funds-from-the-foundation",
              "/community/citizens",
              "/community/community-council-team",
              "/community/project-charter"
            ],
          },
          {
            text: "Wiki",
            icon: "file-lines",
            collapsible: true,
            children: [
              "wiki/developers-guide/",
              "wiki/preface/",
              "wiki/meetings/",
              "wiki/user-guide/",
              "wiki/functional-howtos/",
            ],
          },
        ],
      },
      {
        text: "Documentation",
        icon: "book",
        prefix: "/docs/",
        collapsible: true,
        children: [
          { text: "Standard ADempiere", 
            link: "/docs/", 
            icon: "book", 
            activeMatch: "^/docs/$" },
          {
            text: "Basic Management",
            icon: "bookmark",
            collapsible: true,
            children: [
              "developer-guide",
              "getting-started",
              "material-management",
              "system-administration"
            ],
          },
        ],
      },
      {
        text: "Downloads",
        icon: "download",
        prefix: "/downloads",
        collapsible: true,
        children: [
          { text: "Download", 
            link: "/download/", 
            icon: "download", 
            activeMatch: "^/downloads/$" },
          {
            text: "Basic Management",
            icon: "bookmark",
            collapsible: true,
            children: [
              "binary",
              "docker",
              "helm",
              "operator"
            ]
          },
        ],
      },
      {
        text: "Foundation",
        icon: "user-plus",
        prefix: "/foundation",
        collapsible: true,
        children: [
          { text: "About the Association", 
            link: "/foundation/", 
            icon: "user-plus", 
            activeMatch: "^/foundation/$" },
          {
            text: "How To",
            icon: "circle-question",
            collapsible: true,
            children: [
              "board",
              "how-to-contribute",
              "membership",
              "sponsors",
              "statutes"
            ]
          },
        ],
      },
]);

