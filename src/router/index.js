import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import Detail from '../views/Detail.vue'

Vue.use(Router)
const router = new Router({
  routes: [{
    path: '/',
    redirect: '/Main'
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/main',
    name: 'Main',
    component: Main
  }, {
    path: '/detail',
    name: 'Detail',
    component: Detail
  }]
})

export default router
