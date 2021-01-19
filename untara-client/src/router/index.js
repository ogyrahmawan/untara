import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Survey from '../views/Survey.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Product from '../views/Product.vue'
import Answer from '../views/Answer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: 'product',
        name: 'Product',
        component: Product
      },
      {
        path: 'answer',
        name: 'Answer',
        component: Answer
      }
    ]
  },
  {
    path: '/survey',
    name: 'Survey',
    component: Survey
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && to.name !== 'Home' && to.name !== 'Survey' && !localStorage.access_token) next({ name: 'Home' })
  else if (to.name === 'login' && localStorage.access_token) next({ name: 'Dashboard' })
  else {
    next()
  }
})

export default router
