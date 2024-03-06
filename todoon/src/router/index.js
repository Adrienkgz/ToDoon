import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import HomeView from '../views/HomeView.vue'
import WhatView from '../views/WhatView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/what',
    name: 'what',
    component: WhatView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
