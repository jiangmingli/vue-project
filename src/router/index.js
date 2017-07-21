import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import list from '@/components/list'
import detail from '@/components/detail'
import info from '@/components/info'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
