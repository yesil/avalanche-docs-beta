// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Avalanche Docs',
  tagline: 'Documentation and Tutorials for Avalanche',
  url: 'https://docs-beta.avax.network',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'ava-labs', // Usually your GitHub org/user name.
  projectName: 'avalanche-docs-beta', // Usually your repo name.

  plugins: [require.resolve('docusaurus-lunr-search')],

  scripts: [
    'scripts/intercom-app.js',
    'scripts/intercom-scripts.js'
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl: 'https://github.com/ava-labs/avalanche-docs-beta/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Avalanche Docs',
        logo: {
          alt: 'Avalanche Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/ava-labs/avalanche-docs-beta',
            label: 'GitHub',
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
                label: 'Discord',
                href: 'https://chat.avax.network',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/avalancheavax',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/avalancheavax',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Ecosystem',
                href: 'https://ecosystem.avax.network',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/avalancheavax',
              },
              {
                label: 'YouTube',
                href: 'https://youtube.com/avalancheavax',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ava Labs, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
