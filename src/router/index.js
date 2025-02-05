import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Register from '@/views/Register.vue'
import Locator from '@/views/Locator.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{showHeaderFooter: true},
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta:{showHeaderFooter: false},
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta:{showHeaderFooter: false},
    },
    {
      path: '/locator',
      name: 'Locator',
      component: Locator,
      meta:{showHeaderFooter: true},
    },
   
  ],
})

export default router
