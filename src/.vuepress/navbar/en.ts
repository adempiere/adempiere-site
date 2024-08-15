import { navbar } from "vuepress-theme-hope";

export const enNavbarConfig = navbar([
  "/",
  {
    text: "We",
    icon: "id-card-clip",
    prefix: "/about/",
    children: [
      { text: "About", icon: "info", link: "", activeMatch: "^/about/$" },
      {
        text: "Some History",
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
    ],
  },
  {
    text: "Product",
    icon: "box",
    prefix: "/product/",
    children: [
      { text: "Product", icon: "box", link: "", activeMatch: "^/product/$" },
      {
        text: "Technology",
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
    text: "Community",
    icon: "users",
    prefix: "/community/",
    children: [
      {
        text: "Community",
        icon: "people-group",
        link: "",
        activeMatch: "^/community/$",
      },
      {
        text: "Community of ADempiere ERP",
        children: [
          "code-of-conduct", 
          "duties-and-rigths", 
          "community-detail",
          "apply-for-projects-to-allocate-funds-from-the-foundation",
          "citizens",
          "community-council-team",
          "project-charter" 
        ],
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
    text: "Documentation",
    icon: "book",
    prefix: "/docs/",
    children: [
      { text: "Docs", link: "", icon: "book", activeMatch: "^/docs/$" },
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
        text: "How to Contribute",
        children: [
          "getting-started",
          //"material-management/warehouse/",
        ],
      },
      {
        text: "Developer Guide",
        children: [
          "developer-guide/",
          // "material-management/warehouse/",
        ],
      },
      {
        text: "System Administration",
        children: [
          "system-administration/",
        ],
      },
      {
        text: "Material Management",
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
    text: "Downloads",
    icon: "download",
    prefix: "/downloads/",
    children: [
      {
        text: "Downloads",
        icon: "download",
        link: "",
        activeMatch: "^/downloads/$",
      },
      {
        text: "Binary Files",
        children: ["docker", "helm", "operator", "binary"],
      },
    ],
  },
  {
    text: "Foundation",
    icon: "user-plus",
    prefix: "/foundation/",
    children: [
      {
        text: "About the Association",
        icon: "user-plus",
        link: "",
        activeMatch: "^/foundation/$",
      },
      {
        text: "How To",
        children: [
          "how-to-contribute",
          "membership",
          "board",
          "statutes",
          "sponsors",
        ],
      },
    ],
  },
]);