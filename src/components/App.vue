<template>
  <div id="app">
    <b-navbar toggleable type="inverse" variant="success">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-link class="navbar-brand" to="/app">
    <span class="logo">SURVIVE</span>
    </b-link>

    <b-collapse is-nav id="nav_collapse">

    <b-nav is-nav-bar>
    <b-nav-item to="/app/contacts">Contacts</b-nav-item>
    <b-nav-item to="/app/chats">Chats</b-nav-item>
    </b-nav>

    <b-nav is-nav-bar class="ml-auto">
    <b-nav-item-dropdown right>
    <!-- Using text slot -->
    <template slot="text">
    <span style="font-weight: bold;">User</span>
    </template>

    <b-dropdown-item to="#">Profile</b-dropdown-item>
    <b-dropdown-item v-on:click="logout">Log out</b-dropdown-item>
    </b-nav-item-dropdown>

    </b-nav>
    </b-collapse>
    </b-navbar>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import notificationSubscriptionService from '../utils/notificationSubscription'
  import registerNotificationsWorker from '../utils/registerNotificationsWorker'

  export default {
    name: 'app',
    created: function () {
      const isLoggedIn = localStorage.getItem('token')
      if (!isLoggedIn) {
        this.$router.push('/')
      } else {
        registerNotificationsWorker(notificationSubscriptionService)
      }
    },
    methods: {
      logout: function () {
        localStorage.removeItem('token')
        window.dispatchEvent(new Event('logout'))
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .logo {
    font-weight: bold;
  }
  .container {
    padding-top: 20px;
    max-width: 960px;
  }
</style>
