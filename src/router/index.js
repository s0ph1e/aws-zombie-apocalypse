import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/App.vue'
import Landing from '@/components/Landing.vue'
import Users from '@/components/Users'
import UsersList from '@/components/Users/UsersList'
import UsersMap from '@/components/Users/UsersMap'
import Conversations from '@/components/Conversations'
import Conversation from '@/components/Conversations/Conversation'

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
          component: Users,
          children: [
            {
              path: 'contacts',
              component: UsersList
            },
            {
              path: 'map',
              component: UsersMap
            }
          ]
        },
        {
          path: 'chats',
          component: Conversations
        },
        {
          path: 'chat-with/:user_id',
          component: Conversation
        }
      ]
    }
  ]
})
