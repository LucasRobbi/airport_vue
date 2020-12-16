import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MyTrips from '../views/MyTrips.vue'
import MyAccount from '../views/MyAccount.vue'
import Results from '../views/Results.vue'

import AdminNewCompany from '../views/admin/AdminNewCompany.vue'
import AdminNewTrip from '../views/admin/AdminNewTrip.vue'
import AdminNewUser from '../views/admin/AdminNewUser.vue'
import AdminTrips from '../views/admin/AdminTrips.vue'
import AdminHome from '../views/admin/AdminHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'AdminHome',
    component: AdminHome
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
  },
  {
    path: '/nova-companhia',
    name: 'AdminNewCompany',
    component: AdminNewCompany
  },
  {
    path: '/novo-voo',
    name: 'AdminNewTrip',
    component: AdminNewTrip
  },
  {
    path: '/novo-usuario',
    name: 'AdminNewUser',
    component: AdminNewUser
  },
  {
    path: '/voo',
    name: 'AdminTrips',
    component: AdminTrips
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
