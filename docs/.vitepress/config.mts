import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "BlazePHP",
  description: "Blazingly",
  themeConfig: {
    search: {
      provider: "local"
    },
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Quickstart', link: '/quickstart' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Routing', link: '/routing' },
        ]
      },
      {
        text: 'Utilities',
        items: [
          { text: 'View', link: '/view' },
          { text: 'Migration', link: '/migration' },
          { text: 'Model', link: '/model' },
          { text: 'CLI', link: '/cli' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/blazephps/blaze' }
    ]
  },
  cleanUrls: true,
})
