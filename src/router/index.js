import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MyTrips from '../views/MyTrips.vue'
import MyAccount from '../views/MyAccount.vue'
import Results from '../views/Results.vue'

Vue.use(VueRouter)

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
  },
  {
    path: '/resultados',
    name: 'Results',
    component: Results
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
