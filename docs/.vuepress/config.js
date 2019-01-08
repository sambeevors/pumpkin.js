module.exports = {
  title: 'pumpkin.js 🎃',
  description:
    'A micro-library for writing vanilla javascript as efficiently as possible.',
  head: [
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      }
    ],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    [
      'link',
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#d9773f' }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#eae4df' }],
    ['meta', { name: 'theme-color', content: '#eae4df ' }]
  ],
  servceWorker: true,
  updatePopup: {
    message: 'A new version of this page is available',
    buttonText: 'Update'
  },
  lastUpdated: 'Last Updated',
  repo: 'sambeevors/pumpkin.js',
  docsDir: 'docs',
  editLinks: true,
  ga: 'UA-128293838-1',
  base: '/pumpkin.js/',
  themeConfig: {
    nav: [
      { text: 'Getting Started', link: '/guide/' },
      {
        text: 'Functions',
        items: [
          { text: 'Array', link: '/functions/array/' },
          { text: 'DOM', link: '/functions/dom/' },
          { text: 'String', link: '/functions/string/' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/sambeevors/pumpkin.js' }
    ],
    sidebar: 'auto'
  }
}
