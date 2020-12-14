import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MyTrips from '../views/MyTrips.vue'
import MyAccount from '../views/MyAccount.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/minhas-viagens',
    name: 'MyTrips',
    component: MyTrips
  },
  {
    path: '/minha-conta',
    name: 'MyAccount',
    component: MyAccount
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
