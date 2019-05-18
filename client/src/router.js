import Vue from 'vue'
import Router from 'vue-router'
import CreatePoker from './views/CreatePoker.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'create-poker', component: CreatePoker },
  ]
})
