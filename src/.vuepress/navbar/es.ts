import { navbar } from "vuepress-theme-hope";

export const esNavbarConfig = navbar([
    "/es/",
    {
      text: "Nosotros",
      icon: "id-card-clip",
      prefix: "/es/about/",
      children: [
        { text: "Acerca de", icon: "user", link: "", activeMatch: "^/es/about/$" },
        {
          text: "Algo de Historia",
          children: ["the-beginning", "branding"],
        },
        {
          text: "Meeting",
          prefix: "meeting/",
          children: ["berlin-2009", "berlin-2014"],
        },
        {
          text: "Articles",
          prefix: "articles/",
          children: [
            "2015-06-22-the-future-of-adempiere-as-a-ddd-reactive-system",
            "2015-08-06-world-announcement-for-adempiere",
          ],
        },
        "articles/",
      ],
    },
  
    {
      text: "Producto",
      icon: "box",
      prefix: "/es/product/",
      children: [
        { text: "Producto", icon: "box", link: "", activeMatch: "^/es/product/$" },
        {
          text: "Tecnología",
          children: [
            "technology",
            "how-to-install",
            "business-process",
            "benefits",
            "source-code",
            "demo"
          ],
        },
      ],
    },
  
    {
      text: "Comunidad",
      icon: "users",
      prefix: "/es/community/",
      children: [
        {
          text: "Comunidad",
          icon: "people-group",
          link: "",
          activeMatch: "/es/community/$",
        },
        {
          text: "Comunidad",
          children: ["code-of-conduct", "duties-and-rigths", "community-detail" ],
        },
        {
          text: "Wiki",
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
      children: [
        { text: "Documentación", 
          link: "", 
          icon: "book", 
          activeMatch: "^/es/docs/$" },
        // {
        //   text: "Intro",
        //   children: [
        //     "intro/basic-steps/",
        //     "intro/how-to-contribute/",
        //     "intro/auto-generated/",
        //   ],
        // },
        // {
        //   text: "ERP Standard Process",
        //   children: [
        //     "standard-procedures/requisition-to-invoice/",
        //     "standard-procedures/quote-to-invoice/",
        //     "standard-procedures/open-items/",
        //     "standard-procedures/scm/",
        //     "standard-procedures/performance-analysis/",
        //   ],
        // },
        {
          text: "Cómo contribuir",
          children: [
            "getting-started.md",
            // "material-management/warehouse/",
          ],
        },
        {
          text: "Guía del Desarrollador",
          children: [
            "developer-guide/",
            // "material-management/warehouse/",
          ],
        },
        {
          text: "Administración del Sistema",
          children: [
            "system-administration/",
          ],
        },
        {
          text: "Gestión de Materiales",
          children: [
            "material-management/",
            // "material-management/warehouse/",
          ],
        },
        // {
        //   text: "Manufacturing",
        //   children: [
        //     "manufacturing/manufacturing",
        //     "manufacturing/production-light",
        //   ],
        // },
        // {
        //   text: "Human Resource and Payroll",
        //   children: [
        //     "human-resource/human-resource/",
        //     "human-resource/payroll/",
        //     "human-resource/time-and-attendance/",
        //   ],
        // },
        // {
        //   text: "Retail",
        //   children: ["retail/point-of-sales/", "retail/distribution/"],
        // },
        // {
        //   text: "Verticals",
        //   children: [
        //     "verticals/investment-and-loan/",
        //     "verticals/farmer-assistance-program/",
        //   ],
        // },
        // {
        //   text: "Locations",
        //   children: [
        //     "locations/lve/",
        //     "locations/lmx/",
        //     "locations/lsv/",
        //     "locations/luy/",
        //   ],
        // },
      ],
    },
    
    {
      text: "Descargas",
      icon: "download",
      prefix: "/es/downloads/",
      children: [
        {
          text: "Descargas",
          icon: "download",
          link: "",
          activeMatch: "^/es/downloads/$",
        },
        {
          text: "Archivos Binarios",
          children: ["binary", "docker", "operator", "helm"],
        },
      ],
    },
  
    {
      text: "Fundación",
      icon: "user-plus",
      prefix: "/es/foundation/",
      children: [
        {
          text: "Fundación",
          icon: "user-plus",
          link: "",
          activeMatch: "^/es/foundation/$",
        },
        {
          text: "Cómo",
          children: [
            "how-to-contribute",
            "membership",
            "statutes",
            "sponsors",
          ],
        },
      ],
    },
  
  ]);