import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/App.vue'
import Landing from '@/components/Landing.vue'
import Users from '@/components/Users'

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
          component: Users
        },
        {
          path: 'contacts',
          component: Users
        }
      ]
    }
  ]
})
