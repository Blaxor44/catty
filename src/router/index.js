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
  },
  {
    path: '/cd1',
    name: 'cd1',
    component: () => import('../views/Ashera.vue')
  },
  {
    path: '/cd2',
    name: 'cd2',
    component: () => import('../views/Savannah.vue')
  },
  {
    path: '/cd3',
    name: 'cd3',
    component: () => import('../views/Bengal.vue')
  },
  {
    path: '/cd4',
    name: 'cd4',
    component: () => import('../views/Persian.vue')
  },
  {
    path: '/cd5',
    name: 'cd5',
    component: () => import('../views/Peterbald.vue')
  },
  {
    path: '/cd6',
    name: 'cd6',
    component: () => import('../views/Sphynx.vue')
  },
  {
    path: '/cd7',
    name: 'cd7',
    component: () => import('../views/ScottishFold.vue')
  },
  {
    path: '/cd8',
    name: 'cd8',
    component: () => import('../views/RussianBlue.vue')
  },
  {
    path: '/cd9',
    name: 'cd9',
    component: () => import('../views/AmericanCurl.vue')
  },
  {
    path: '/cd10',
    name: 'cd10',
    component: () => import('../views/MaineCoon.vue')
  },
  {
    path: '/co',
    name: 'co',
    component: () => import('../views/Checkout.vue')
  },
  {
    path: '/os',
    name: 'os',
    component: () => import('../views/OrderStatus.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

