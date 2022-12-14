import { createRouter, createWebHistory } from 'vue-router'
import Register from '../pages/Register.vue'
import login from '../pages/login.vue'
import Home from '../pages/Home.vue'
//////////////////////////////////
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
  ]
})

export default router
