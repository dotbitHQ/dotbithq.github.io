import { defineClientAppEnhance } from '@vuepress/client'
import Redirect from './components/Redirect.vue'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component(Redirect.name, Redirect)

  // redirect legacy chinese doc to current path
  router.beforeEach((to, from, next) => {
    if (to.path.match('/v/chinese-1')) {
      const path = to.path
        .replace('/v/chinese-1', '/zh')
        .replace('gong-tong-jian-she', 'contribute-to-das')
        .replace('kai-fa-zhe', 'developers')
        .replace('qi-ta', 'others')
        .replace('zhu-ce-das', 'register-das')

      next(path)
    } else {
      next()
    }
  })
})