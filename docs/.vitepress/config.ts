import { defineConfig } from "vitepress"

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: "en-US",
  title: "CloudPirates Developer Portal",
  description:
    "The CloudPirates Developer Portal provides developers with the resources they need to integrate our products into their own applications using our API.",
  cleanUrls: true,
  themeConfig: {
    siteTitle: "Developer Portal",
    logo: {
      dark: "/logo-white.svg",
      light: "/logo.svg",
    },
    nav: [
      { text: "Website", link: "https://www.cloudpirates.io" },
      { text: "Customer Portal", link: "https://auth.cloudpirates.io" },
    ],

    sidebar: [
      {
        text: "CloudPirates API",
        items: [
          { text: "Quick Start", link: "/api/" },
          { text: "Error Handling", link: "/api/error-handling" },
        ],
      },
      {
        text: "Managed Observability",
        items: [
          { text: "Overview", link: "/managed-observability/" },
          {
            text: "Setup Instructions",
            link: "/managed-observability/setup-instructions",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/CloudPirates-io" },
    ],

    // editLink: {
    //   pattern:
    //     "https://github.com/CloudPirates-io/developer-portal/edit/main/docs/:path",
    //   text: "Edit this page on GitHub",
    // },

    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },

    footer: {
      copyright: "Copyright © 2024 CloudPirates GmbH & Co. KG",
    },
  },
});
