<template>
  <div id="users-list">
    <div v-for="contact in contacts">
      <User v-bind:user="contact"/>
    </div>
  </div>
</template>


<script>
  import User from './User'

  export default {
    name: 'users-list',
    props: ['contacts'],
    components: { User }
  }
</script>

