<template>
  <div>
    <h3>Conversation with {{ userId }}</h3>
    <div class="messages-container">
      <div v-for="message in messages" class="message">
        <UserAvatar v-bind:user="message.author" />
        <div class="speech-bubble">{{message.text}}</div>
      </div>
    </div>

    <div class="create-message">
      <b-form-input textarea :rows="3" v-model="message" placeholder="Type your message here.."></b-form-input>
      <b-button variant="success" @click="send">Send</b-button>
    </div>
  </div>
</template>

<script>
  import UserAvatar from '../Users/UserAvatar.vue'

  export default {
    name: 'conversation',
    data: function () {
      return {
        userId: this.$route.params.user_id,
        user: null,
        messages: []
      }
    },
    components: { UserAvatar },
    created: function () {
      this.fetch()
    },
    methods: {
      fetch: function () {
        this.$http.get(`conversation/with-user/${this.userId}`).then(({body}) => {
          console.log(body)
        }).catch(console.log).finally(() => {
          this.title = `Conversation with user ${this.userId}`
          this.messages = [
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
              author: {
                id: 1,
                username: 'John',
                type: 'human'
              }
            },
            { text: 'nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conse',
              author: {
                id: 1,
                username: 'John',
                type: 'human'
              }},
            { text: 'atis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam ',
              author: {
                id: 1,
                username: 'John',
                type: 'human'
              }}
          ]
        })
      },
      send: function () {
        console.log('sending')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .message {
    display: flex;
  }
  .speech-bubble
  {
    background: #efefef;
    display: block;
    padding: 15px;
    position: relative;
    min-width:100px;
    margin: 5px;
  }
  .speech-bubble:before
  {
    content: '';
    position: absolute;
    left: -15px;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    border-top: 7px solid transparent;
    border-right: 15px solid #efefef;
    border-bottom: 7px solid transparent;
  }
  .create-message {
    display: flex;
  }
</style>
