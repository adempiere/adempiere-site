import { navbar } from "vuepress-theme-hope";

export const enNavbarConfig = navbar([
  "/",
  {
    text: "About",
    icon: "profile",
    prefix: "/about/",
    children: [
      { text: "About", icon: "software", link: "", activeMatch: "^/about/$" },
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
      "articles/",
    ],
  },
  {
    text: "Product",
    icon: "engine",
    prefix: "/product/",
    children: [
      { text: "Product", icon: "engine", link: "", activeMatch: "^/product/$" },
      {
        text: "Technology",
        children: [
          "technology",
          "business-process",
          "benefits",
          "source-code",
          "demo",
        ],
      },
    ],
  },
  {
    text: "Community",
    icon: "group",
    prefix: "/community/",
    children: [
      {
        text: "Community",
        icon: "group",
        link: "",
        activeMatch: "^/community/$",
      },
      {
        text: "Community",
        children: ["code-of-conduct", "duties-and-rigths", "community-detail" , "preface" ],
      },
    ],
  },
  {
    text: "Documentation",
    icon: "creative",
    prefix: "/docs/",
    children: [
      { text: "Docs", link: "", icon: "note", activeMatch: "^/docs/$" },
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
        text: "Develop Guide",
        children: [
          "develop-guide/getting-started/",
          // "material-management/warehouse/",
        ],
      },
      {
        text: "Material Management",
        children: [
          "material-management/product/",
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
    icon: "software",
    prefix: "/downloads/",
    children: [
      {
        text: "Downloads",
        icon: "software",
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
    icon: "software",
    prefix: "/foundation/",
    children: [
      {
        text: "Foundation",
        icon: "software",
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

export const zhNavbarConfig = navbar([
  "/zh/",
  "/zh/about/",
  "/zh/product/",
  "/zh/community/",
  "/zh/support/",
  "/zh/docs/",
  "/zh/downloads/",
  "/zh/foundation/",
]);

export const esNavbarConfig = navbar([
  "/es/",
  "/es/about/",
  "/es/product/",
  "/es/community/",
  "/es/support/",
  "/es/docs/",
  "/es/downloads/",
  "/es/foundation/",
]);
