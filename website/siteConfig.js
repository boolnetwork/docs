/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


const siteConfig = {
    title: 'BOOL Network Docs', // Title for your website.
    tagline: 'BOOL Network Documentations',
    url: 'https://docs.bool.network', // Your website URL
    baseUrl: '/', // Base URL for your project */
    cname: 'docs.nervos.org',


    // Used for publishing and more
    projectName: 'docs',
    organizationName: 'boolnetwork',
    // For top-level user or org sites, the organization is still the same.
    // e.g., for the https://JoelMarcey.github.io site, it would be set like...
    //   organizationName: 'JoelMarcey'

    // For no header links in the top nav bar -> headerLinks: [],
    headerLinks: [
        { doc: 'doc1', label: 'Docs' },
        { doc: 'doc4', label: 'API' },
    ],

    /* path to images for header/footer */
    headerIcon: 'img/logo.png',
    footerIcon: 'img/logo.png',
    favicon: 'img/logo.png',

    /* Colors for website */
    colors: {
        primaryColor: '#00ce88',
        secondaryColor: '#1c4071',
    },

    /* Custom fonts for website */
    fonts: {
        lato: [
            "Lato",
            "sans-serif"
        ],
    },

    stylesheets: [
        "https://fonts.googleapis.com/css2?family=Lato&display=swap"
    ],

    // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
    copyright: `Copyright © ${new Date().getFullYear()} BOOL Network. All Rights Reserved.`,

    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks.
        theme: 'default',
    },

    // Add custom scripts here that would be placed in <script> tags.
    scripts: ['https://buttons.github.io/buttons.js'],

    // On page navigation for the current documentation page.
    onPageNav: 'separate',
    // No .html extensions for paths.
    cleanUrl: true,

    // Open Graph and Twitter card images.
    ogImage: 'img/undraw_online.svg',
    twitterImage: 'img/undraw_tweetstorm.svg',

    // For sites with a sizable amount of content, set collapsible to true.
    // Expand/collapse the links and subcategories under categories.
    // docsSideNavCollapsible: true,

    // Show documentation's last contributor's name.
    // enableUpdateBy: true,

    // Show documentation's last update time.
    // enableUpdateTime: true,

    // You may provide arbitrary config keys to be used as needed by your
    // template. For example, if you need your repo's URL...
    // repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
