<template>
  <div>
    <h4>{{title}}</h4>
    <div class="messages-container">
      <div v-for="message in messages" class="message">
        <UserAvatar v-bind:user="message.author" />
        <div class="speech-bubble">{{message.text}}</div>
      </div>
    </div>

    <div class="create-message">
      <b-form-input textarea :rows="3" v-model="message" placeholder="Type your message here.." class="rounded-0"></b-form-input>
      <b-button variant="success" @click="send" class="rounded-0">Send</b-button>
    </div>
  </div>
</template>

<script>
  import UserAvatar from '../Users/UserAvatar.vue'
  let stopFetch;

  export default {
    name: 'conversation',
    data: function () {
      return {
       // lastMessageTime: null,
        conversationId: null,
        userId: this.$route.params.user_id,
        user: null,
        title: '',
        messages: [],
        message: ''
      }
    },
    components: { UserAvatar },
    created: function () {
      this.fetch()
      stopFetch = setInterval(this.fetch, 5000)
    },
    beforeDestroy: function () {
      clearInterval(stopFetch)
    },
    methods: {
      fetchById: function () {
        let url = `chat/${this.conversationId}`
//        if (this.lastMessageTime) {
//          // url = `${url}?lastMessageTime=${this.lastMessageTime}`
//        }

        this.$http.get(url).then(({body}) => {
//          if (this.lastMessageTime) {
//            this.messages = body
//          } else {
//            this.messages = body
//          }
          this.messages = body

 //         this.lastMessageTime = this.messages[this.messages.length - 1].timestamp
        })
      },
      fetch: function () {
        if (this.conversationId) {
          return this.fetchById()
        }

        return this.$http.get(`chat/with-user/${this.userId}`).then(({body}) => {
          this.title = body.title
          this.conversationId = body.id

          this.fetchById()
        }).catch(console.log)
      },
      send: function () {
        this.$http.post(`chat/${this.conversationId}`, {message: this.message}).then(() => {
          this.message = ''
          this.fetch()
        })
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
