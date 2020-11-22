import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Home.vue'
import Category from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/alternative/:slug/:id',
    name: 'Details',
    component: Details,
    props: (route) => ({ id: route.params.id })
  },
  {
    path: '/category/:category',
    name: 'Category',
    component: Category,
    props: (route) => ({ category: route.params.category })
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
