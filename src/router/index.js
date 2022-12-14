import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Login.vue'
import ForgotPassword from "@/components/ForgotPassword";

const routes = [
  {
    path: "/forgot-password",
    name: "forgotPassword",
    component: ForgotPassword,
    beforeEnter(to, from, next) {
      const user = firebase.auth().currentUser;
      if (user) {
        next({ name: "dashboard" });
      } else {
        next();
      }
    },
  },
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
    component: () => import('../views/ForgotPassword.vue'),
    meta: {
      hideNavbar: true,
     }
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: () => import('../views/HomePage.vue'),
    meta: { 
       needsAuth: true,
       },
  },
  {
    path: '/cd1',
    name: 'cd1',
    component: () => import('../views/Ashera.vue'),
    meta: { 
      needsAuth: true,
      },
  },
  {
    path: '/cd2',
    name: 'cd2',
    component: () => import('../views/Savannah.vue'),
    meta: { 
      needsAuth: true,
      },
  },
  {
    path: '/cd3',
    name: 'cd3',
    component: () => import('../views/Bengal.vue'),
    meta: { 
      needsAuth: true,
      },
  },
  {
    path: '/cd4',
    name: 'cd4',
    component: () => import('../views/Persian.vue'),
    meta: { 
      needsAuth: true,
      },
  },
  {
    path: '/cd5',
    name: 'cd5',
    component: () => import('../views/Peterbald.vue'),
    meta: { 
      needsAuth: true,
      },
  },
  {
    path: '/cd6',
    name: 'cd6',
    component: () => import('../views/Sphynx.vue'),
    meta: { 
      needsAuth: true,
      },
  },
  {
    path: '/cd7',
    name: 'cd7',
    component: () => import('../views/ScottishFold.vue'),
    meta: { 
      needsAuth: true,
      },
  },
  {
    path: '/cd8',
    name: 'cd8',
    component: () => import('../views/RussianBlue.vue'),
    meta: { 
      needsAuth: true,
      },
  },
  {
    path: '/cd9',
    name: 'cd9',
    component: () => import('../views/AmericanCurl.vue'),
    meta: { 
      needsAuth: true,
      },
  },
  {
    path: '/cd10',
    name: 'cd10',
    component: () => import('../views/MaineCoon.vue'),
    meta: { 
      needsAuth: true,
      },
  },
  {
    path: '/co',
    name: 'co',
    component: () => import('../views/Checkout.vue'),
    meta: { 
      needsAuth: true,
      },
  },
  {
    path: '/os',
    name: 'os',
    component: () => import('../views/OrderStatus.vue'),
    meta: { 
      needsAuth: true,
      },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


export default router

