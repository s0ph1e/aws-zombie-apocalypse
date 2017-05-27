import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/App.vue'
import Landing from '@/components/Landing.vue'
import Users from '@/components/Users'
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
          component: Users
        },
        {
          path: 'contacts',
          component: Users
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
