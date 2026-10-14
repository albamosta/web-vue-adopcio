import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AnimalsView from '../views/AnimalsView.vue'
import ContacteView from '../views/ContacteView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/inici',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/animals',
      name: 'animals',
      component: AnimalsView,
    },
    {
      path: '/contacte',
      name: 'contacte',
      component: ContacteView,
    },
  ],
})

export default router
