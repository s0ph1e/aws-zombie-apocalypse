<template>
  <div id="app">
    <b-navbar toggleable type="inverse" variant="success">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-link class="navbar-brand" to="/">
    <span class="logo">SURVIVE</span>
    </b-link>

    <b-collapse is-nav id="nav_collapse">

    <b-nav is-nav-bar>
    <b-nav-item>Support</b-nav-item>
    <b-nav-item>Docs</b-nav-item>
    <b-nav-item>Contact Us</b-nav-item>
    </b-nav>

    <b-nav is-nav-bar class="ml-auto">
    <b-nav-item-dropdown right>
    <!-- Using text slot -->
    <template slot="text">
    <span style="font-weight: bold;">User</span>
    </template>

    <b-dropdown-item to="#">Profile</b-dropdown-item>
    <b-dropdown-item to="#">Signout</b-dropdown-item>
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
  export default {
    name: 'app'
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
