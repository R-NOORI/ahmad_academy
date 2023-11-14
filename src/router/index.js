import routes from './routers'
import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebase/config'
const getCurrentUser = () => {
  return new Promise((resolove, reject) => {
    const removeListener = auth.onAuthStateChanged((user) => {
      removeListener()
      resolove(user)
    }, reject)
  })
}

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({
    y: 0,
  }),
  routes,
})
router.beforeEach(async (to, from, next) => {
  const authenticatedUser = await getCurrentUser()
  const requireAuth = to.matched.some((record) => record.meta.requireAuth)
  if (!['/portal', '/portal/setting'].includes(to.path)) return next()
  if (requireAuth && !authenticatedUser) {
    return next({
      replace: true,
      path: '/',
      query: { redirect: to.fullPath },
    })
  } else {
    next()
  }
})
router.afterEach(() => {
  window.scrollTo(0, 0)
})
export default router
