import { defineClientAppEnhance } from '@vuepress/client'
import Redirect from './components/Redirect.vue'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component(Redirect.name, Redirect)
})