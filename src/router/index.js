import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: () => import('@/views/home')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home')
  },
  {
    path: '/bookcase',
    name: 'bookcase',
    component: () => import('@/views/bookcase')
  },
  {
    path: '/class',
    name: 'class',
    component: () => import('@/views/class')
  },
  {
    path: '/rank',
    name: 'rank',
    component: () => import('@/views/rank')
  }
  ]
})
