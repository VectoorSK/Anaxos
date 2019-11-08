import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import Paie from './components/Paie'
import Interim from './components/Interim'
import Formation from './components/Formation'
import Conseil from './components/Conseil'
import Contact from './components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/paie',
      name: 'paie',
      component: Paie
    },
    {
      path: '/interim',
      name: 'interim',
      component: Interim
    },
    {
      path: '/formation',
      name: 'formation',
      component: Formation
    },
    {
      path: '/conseil',
      name: 'conseil',
      component: Conseil
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
