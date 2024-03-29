// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  title: 'Butter Network Docs',
  tagline: 'Documentation and Tutorials for Butter Network',
  url: 'https://docs.butternetwork.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  projectName: 'butterswap-docs', // Usually your repo name.


  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // googleAnalytics: {
        //   trackingID: 'UA-126268251-10',
        //   anonymizeIP: true,
        // },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.png?force-reload-1',
      navbar: {
        title: '',
        logo: {
          alt: 'Butter Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/ButterNetworkio',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/Butterswap',
              },
            ],
          },

        ],
        copyright: `Copyright © ${new Date().getFullYear()} Butter Network Ltd. All Rights Reseved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // algolia: {
      //   appId: 'UAFD8IBIF7',
      //   apiKey: '20006f8de4bf55970ebca9129c345a1d',
      //   indexName: 'avax',
      //   contextualSearch: true,
      // },
    }),
};

module.exports = config;
