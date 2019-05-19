import Vue from 'vue'
import Router from 'vue-router'
import CreatePoker from './views/CreatePoker.vue'
import MasterBoard from './views/MasterBoard.vue'
import TeamBoard from './views/TeamBoard.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', name: 'create-poker', component: CreatePoker, meta: {title: 'Create Poker'}},
    {
      path: '/master-dashboard/:pokerName',
      name: 'master-dashboard',
      component: MasterBoard,
      meta: {title: 'Master Dashboard'}
    },
    {path: '/team-board/:pokerName', name: 'team-board', component: TeamBoard, meta: {title: 'Team Board'}}
  ]
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router

