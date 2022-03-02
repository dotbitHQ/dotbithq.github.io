import {defineUserConfig, DefaultThemeOptions} from 'vuepress'
import { en } from './locales/en'
import { zh } from './locales/zh'
import CleanUrlsPlugin from './plugins/clean-urls'

export default defineUserConfig<DefaultThemeOptions>({
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
  theme: '@vuepress/theme-default',
  themeConfig: {
    darkMode: false,
    contributors: false,
    logo: '/logo.png',
    repo: 'https://github.com/DeAccountSystems/docs.da.systems',
    locales: {
      '/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Languages',
        sidebar: en.sidebar,
        navbar: [{
          text: 'Home',
          link: 'https://da.systems'
        }],
      },
      '/zh/': {
        selectLanguageName: '中文',
        selectLanguageText: 'Languages',
        editLinkText: '编辑此页',
        sidebar: zh.sidebar,
        navbar: [{
          text: '官网',
          link: 'https://da.systems'
        }],
      }
    }
  },
  plugins: [
    [CleanUrlsPlugin, {
      notFoundPath: '/404',
    }],
    [
      // 'vuepress-plugin-redirect',
      'vuepress-plugin-redirect',
      {
        // locales: true,
        redirectors: [
          {
            base: '/',
            alternative: '/guide/',
          },
        ],
      },
    ],
    ['@vuepress/plugin-search', {
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }],
  ]
})