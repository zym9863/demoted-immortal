import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/poems',
      name: 'poems',
      component: () => import('../views/PoemListView.vue')
    },
    {
      path: '/poems/:id',
      name: 'poem-detail',
      component: () => import('../views/PoemDetailView.vue'),
      props: true
    }
  ]
})

export default router
