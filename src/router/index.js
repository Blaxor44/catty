import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'homelogin',
    component: HomeView,
    meta: {
      hideNavbar: true,
     }
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/Signup.vue'),
    meta: {
      hideNavbar: true,
     }
  },
  {
    path: '/resetpw',
    name: 'resetpw',
    component: () => import('../views/ResetPw.vue'),
    meta: {
      hideNavbar: true,
     }
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: () => import('../views/HomePage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

