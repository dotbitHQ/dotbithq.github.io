import { defineClientConfig } from '@vuepress/client'
import Redirect from './components/Redirect.vue'

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Wait for an element with specific selector to show.
 * @param selector
 * @param timeout
 */
async function waitFor(selector: string, timeout = 2000) {
  let $el
  let startAt = Date.now()
  let now = Date.now()

  while (!$el && now - startAt < timeout) {
    $el = document.querySelector(selector)

    if ($el) break

    await sleep(100)

    now = Date.now()
  }

  return $el
}

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
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

    // For some unknown reason, the anchor(hash) didn't take effect, so we have to handle it manually
    // Hope it can be fixed one day.
    router.afterEach((async (to, from, failure) => {
      if (!from.name && to.name && to.hash) {
        const $el = await waitFor(to.hash)
        $el?.scrollIntoView()

        await sleep(500)

        // it is very strange that the element will be rebuilt, thus they are not the same element.
        const $el2 = await waitFor(to.hash)
        if ($el !== $el2) {
          $el2?.scrollIntoView()
        }
      }
    }))
  }
})