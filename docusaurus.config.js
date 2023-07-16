module.exports = {
  title: "Zipper",
  url: "https://stanch.github.io",
  baseUrl: "/",
  favicon: "img/favicon.png",
  organizationName: "stanch",
  projectName: "Zipper",
  onBrokenLinks: "throw",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/stanch/zipper/edit/master",
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  scripts: [
    // See comments in static/js/fix-location.js
    {
      src: "/js/fix-location.js",
      async: false,
      defer: false,
    },
  ],
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      }
  },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "Zipper Logo",
        src: "img/logo.png",
      },
      items: [
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Website",
              href: "https://stanch.github.io/zipper/",
            },
            {
              label: "Documentation",
              href: "https://github.com/stanch/zipper/tree/master/images/readme",
            },
            {
              label: "GitHub",
              href: "https://github.com/stanch/zipper",
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Zipper`,
    },
  },
};
