import {defineUserConfig, defaultTheme} from 'vuepress'
import {searchPlugin} from '@vuepress/plugin-search'
import { en } from './locales/en'
import { zh } from './locales/zh'
import CleanUrlsPlugin from './plugins/clean-urls'

export default defineUserConfig({
  // site config
  title: '.bit Document',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  locales: {
    '/': {
      lang: 'en-US',
      description: '.bit Documents',
    },
    '/zh/': {
      lang: 'zh-CN',
      description: '.bit 文档',
    }
  },


  // theme and its config
  // theme: 'vuepress-theme-book',
  theme: defaultTheme({
    darkMode: false,
    contributors: false,
    logo: '/logo.png',
    repo: 'https://github.com/dotbitHQ/dotbithq.github.io',
    locales: {
      '/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Languages',
        sidebar: en.sidebar,
        navbar: [{
          text: 'Home',
          link: 'https://did.id'
        }],
      },
      '/zh/': {
        selectLanguageName: '中文',
        selectLanguageText: 'Languages',
        editLinkText: '编辑此页',
        sidebar: zh.sidebar,
        navbar: [{
          text: '官网',
          link: 'https://did.id'
        }],
      }
    },
  }),
  plugins: [
      CleanUrlsPlugin({
        notFoundPath: '/404',
      }),
    // [
    //   // 'vuepress-plugin-redirect',
    //   'vuepress-plugin-redirect',
    //   {
    //     // locales: true,
    //     redirectors: [
    //       {
    //         base: '/',
    //         alternative: '/guide/',
    //       },
    //     ],
    //   },
    // ],
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    })
  ]
})