import { createRouter, createWebHistory } from "vue-router"
import HomeView from "./views/HomeView.vue"
import MaimaidView from "./views/MaimaidView.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomeView,
      meta: { title: "Rhythmeta — Open tools for rhythm players" },
    },
    {
      path: "/maimaid",
      component: MaimaidView,
      meta: { title: "maimaid — Rhythmeta" },
    },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: "smooth" }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = String(to.meta.title ?? "Rhythmeta")
})

export default router
