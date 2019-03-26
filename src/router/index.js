import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [{
        path: '',
        name: 'home',
        component: () => import('@/views/home')
      }]
    },
    {
      path: '/home',
      component: Layout,
      children: [{
        path: '',
        name: 'home',
        component: () => import('@/views/home')
      }]
    },
    {
      path: '/bookcase',
      component: Layout,
      children: [{
        path: '',
        name: 'bookcase',
        component: () => import('@/views/bookcase')
      }]

    },
    {
      path: '/class',
      component: Layout,
      children: [{
        path: '',
        name: 'class',
        component: () => import('@/views/class')
      }]
    },
    {
      path: '/rank',
      component: Layout,
      children: [{
        path: '',
        name: 'rank',
        component: () => import('@/views/rank')
      }]

    },
    {
      path: '/clylist/:major:gender',
      component: Layout,
      children: [{
        path: '',
        name: 'clylist',
        component: () => import('@/views/clylist')
      }]
    },
    {
      path: '/book:bookid',
      component: Layout,
      children: [{
        path: '',
        name: 'book',
        component: () => import('@/views/book')
      }]
    },
    {
      path: '/read:id:booktitle',
      name: 'read',
      component: () => import('@/views/read')
    }
  ]
})
