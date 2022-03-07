import { defineClientAppEnhance } from '@vuepress/client'
import Redirect from './components/Redirect.vue'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component(Redirect.name, Redirect)

  // redirect legacy path to new path
  router.beforeEach((to, from, next) => {
    let path = to.path.replace('/docs/', '/').replace('/v/english-1/', '/')

    // redirect legacy chinese doc to current path
    if (path.match('/v/chinese-1')) {
      path = path
        .replace('/v/chinese-1', '/zh')
        .replace('gong-tong-jian-she', 'contribute-to-das')
        .replace('kai-fa-zhe', 'developers')
        .replace('qi-ta', 'others')
        .replace('zhu-ce-das', 'register-das')
    }

    if (path !== to.path) {
      next(path)
    }
    else {
      next()
    }
  })
})