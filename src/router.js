import { createWebHistory, createRouter } from 'vue-router'
import Home from './Views/Home.vue'
import Search from './Views/Search.vue'

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/search',
        name: 'Search',
        component: Search
      },
    ]
  })
  


