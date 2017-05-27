<template>
  <div>
    <p>Search profile</p>
    <!--<v-text-field-->
      <!--label="Search profile"-->
      <!--prepend-icon="phone"-->
      <!--v-model="searchInput"-->
      <!--v-on:input="search"-->
    <!--&gt;</v-text-field>-->
    <input type="search" v-model="searchInput" v-on:input="search" />

    <p v-if="searching">Searching...</p>

    <div v-if="searchResults.total_count > 0">
      <p>Count: {{searchResults.total_count}}</p>
      <ul>
        <li v-for="user in searchResults.items">{{user.login}}</li>
      </ul>
    </div>
  </div>

</template>

<script src="./profile.js"></script>
