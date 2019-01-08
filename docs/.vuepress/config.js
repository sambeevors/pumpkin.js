module.exports = {
  title: 'pumpkin.js 🎃',
  description:
    'A micro-library for writing vanilla javascript as efficiently as possible.',
  servceWorker: true,
  ga: 'UA-128293838-1',
  themeConfig: {
    algolia: {
      apiKey: 'a99a0ed2c5ff3933253ee3931dcf0e88',
      indexName: 'pumpkin docs'
    },
    nav: [
      { text: 'Getting Started', link: '/guide/' },
      { text: 'Functions', link: '/functions/' },
      { text: 'GitHub', link: 'https://github.com/sambeevors/pumpkin.js' }
    ],
    sidebar: 'auto'
  }
}
