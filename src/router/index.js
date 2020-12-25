import Vue from 'vue'
import VueRouter from 'vue-router'
import {
  Home,
  page1,
  page2,
  page3,
  page4,
  page5,
  page6,
  connect,
  join
} from '../views/index'

Vue.use(VueRouter)

const routes = [
  { path: '*',redirect: '/Home' },
  { path: '/Home',name: 'Home',component: Home },
  { path: '/page1',name: 'page1',component: page1 },
  { path: '/page2',name: 'page2',component: page2 },
  { path: '/page3',name: 'page3',component: page3 },
  { path: '/page4',name: 'page4',component: page4 },
  { path: '/page5',name: 'page5',component: page5 },
  { path: '/page6',name: 'page6', redirect: "/page6/connect", component: page6 ,children:[
    {
      path: '/page6/connect',
      component: connect
    },
    {
      path: '/page6/join',
      component: join
    },
  ]},
]

const router = new VueRouter({
  routes
})

export default router
