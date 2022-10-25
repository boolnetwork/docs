// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "BOOLNetwork Documentations",
  tagline: "web3 Infrastructure",
  url: "https://docs.bool.network",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "MatrixLabs", // Usually your GitHub org/user name.
  projectName: "BOOLNetwork", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh",
    locales: ["zh", "en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/boolnetwork/docs.git",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "BOOL Docs",
        logo: {
          src: "img/logo.svg",
        },
        items: [
          {
            type: "localeDropdown",
            position: "right",
          },
          //   {
          //     type: "doc",
          //     docId: "welcome",
          //     position: "left",
          //     label: "入门指南",
          //   },
          {
            href: "https://github.com/boolnetwork/docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "社区",
            items: [
              {
                label: "Telegram",
                href: "https://t.me/+qS6FYIBzZXY2NmQx",
              },
              {
                label: "Discord",
                href: "https://discord.com/invite/DVd4q9qq7a",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/bool_network_",
              },
            ],
          },
          {
            title: "更多",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/boolnetwork",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BOOL Network. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
