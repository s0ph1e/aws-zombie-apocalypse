<template>
  <div id="users">
    <div v-for="contact in contacts">
      <User v-bind:user="contact"/>
    </div>
  </div>
</template>

<script>
  import contacts from './users.json'
  import User from './user'

  export default {
    name: 'users',
    data: function () {
      return {
        contacts
      }
    },
    components: { User }
  }
</script>
