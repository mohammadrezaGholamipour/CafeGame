import { createRouter, createWebHistory } from 'vue-router'
import login from '../pages/login.vue'
import Home from '../pages/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
  ]
})

export default router
