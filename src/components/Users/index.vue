<template>
  <div id="users">
    <div v-for="contact in contacts">
      <User v-bind:user="contact"/>
    </div>
  </div>
</template>

<script>
  import User from './User'

  export default {
    name: 'users',
    data: function () {
      return {
        contacts: []
      }
    },
    created: function () {
      this.$http.get('chat/userlist').then(({body}) => {
        this.contacts = body
      }).catch(console.log)
    },
    components: { User }
  }
</script>
