import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyHistory from '../views/MyHistory.vue'
import MyPortfolio from '../views/MyPortfolio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/portfolios',
    name: 'myportfolio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MyPortfolio.vue')
  },
  {
    path: '/history',
    name: 'history',
    component: MyHistory
  },
  {
    path: '/portfolios',
    name: 'portfolios',
    component: MyPortfolio
  },
  {
    path: '*',
    redirect: '/' 
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
