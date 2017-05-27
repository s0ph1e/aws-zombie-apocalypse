import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/App.vue'
// import Profile from '@/components/profile'
import Landing from '@/components/Landing.vue'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/app',
      name: 'app',
      component: App,
      children: [
        {
          path: '/',
          component: Home
        }
      ]
    }
  ]
})
