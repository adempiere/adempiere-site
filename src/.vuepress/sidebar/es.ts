import { sidebar } from "vuepress-theme-hope";

export const esSidebarConfig = sidebar([
    "/es/",
    {
      text: "Nosotros",
      icon: "id-card-clip",
      prefix: "/es/about/",
      collapsible: true,
      children: [
        { text: "Acerca de",
          icon: "user",
          link: "/es/about/", 
          activeMatch: "^/es/about/$" },
        {
          text: "Algo de Historia",
          icon: "newspaper",
          prefix: "/es/about/",
          collapsible: true,
          children: [
            "branding",
            "the-beginning",
          ],
        },
        {
          text: "Reuniones",
          icon: "user-tie",
          prefix: "/es/about/meeting/",
          collapsible: true,
          children: [
            "berlin-2009",
            "berlin-2014",
          ],
        },
        {
          text: "Artículos",
          icon: "fa-solid fa-newspaper",
          prefix: "/es/about/articles/",
          collapsible: true,
          children: [
            "2015-06-22-the-future-of-adempiere-as-a-ddd-reactive-system.md",
            "2015-08-06-world-announcement-for-adempiere.md",
          ],
        },
      ],
    },
    {
      text: "Producto",
      icon: "box",
      prefix: "/es/product/",
      collapsible: true,
      children: [
        { text: "Características de ADempiere", 
          link: "/es/product/", 
          icon: "box", 
          activeMatch: "^/es/product/$" 
        },
        {
          text: "Tecnología",
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
      text: "Comunidad",
      icon: "users",
      collapsible: true,
      prefix: "/es/community/",
      children: [
        {
          text: "Comunidad",
          icon: "people-group",
          collapsible: true,
          link: "/es/community/",
          activeMatch: "^/es/community/$",
        },
        {
          text: "Comunidad de ADempiere ERP",
          icon: "people-carry-box",
          collapsible: true,
          children: [
            "code-of-conduct", 
            "duties-and-rigths",
            "community-detail",
            "apply-for-projects-to-allocate-funds-from-the-foundation",
            "/es/community/citizens",
            "/es/community/community-council-team",
            "/es/community/project-charter"
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
      text: "Documentación",
      icon: "book",
      prefix: "/es/docs/",
      collapsible: true,
      children: [
        { text: "ADempiere Estándar", 
          link: "/es/docs/", 
          icon: "book", 
          activeMatch: "^/es/docs/$" },
        {
          text: "Gestión Básica",
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
      text: "Descargas",
      icon: "download",
      prefix: "/es/downloads/",
      collapsible: true,
      children: [
        { text: "Descargas", 
          link: "/es/downloads/", 
          icon: "download", 
          activeMatch: "^/es/downloads/$" },
        {
          text: "Archivos Binarios",
          icon: "file-code",
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
      text: "Fundación",
      icon: "user-plus",
      prefix: "/es/foundation",
      collapsible: true,
      children: [
        { text: "Acerca de la Asociación", 
          link: "/es/foundation/", 
          icon: "user-plus", 
          activeMatch: "^/es/foundation/$" },
        {
          text: "¿Como hacer?...",
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