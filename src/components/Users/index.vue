<template>
  <div id="users">
    <div><b-form-select :options="filterOptions" v-model="filterSelected" class="mb-3"></b-form-select></div>

    <router-view v-bind:contacts="sortedContacts"/>
  </div>
</template>

<script>
  import UsersList from './UsersList'

  export default {
    name: 'users',
    data: function () {
      return {
        contacts: [],
        filterSelected: 'all',
        filterOptions: [
          {value: 'all', text: 'Show all contacts'},
          {value: 'humans', text: 'Show only humans'},
          {value: 'humans-unknown', text: 'Show not zombies'},
          {value: 'unknown', text: 'Show suspicious'},
          {value: 'zombies', text: 'Show zombies'}
        ]
      }
    },
    computed: {
      filteredContacts: function () {
        switch (this.filterSelected) {
          case 'all':
            return this.contacts
          case 'humans':
            return this.contacts.filter((c) => c.userType === 'human')
          case 'humans-unknown':
            return this.contacts.filter((c) => c.userType === 'human' || c.userType !== 'zombie')
          case 'unknown':
            return this.contacts.filter((c) => c.userType !== 'human' && c.userType !== 'zombie')
          case 'zombies':
            return this.contacts.filter((c) => c.userType === 'zombie')
        }
      },
      sortedContacts: function () {
        return this.filteredContacts.sort(function (a, b) {
          return a.distance - b.distance
        })
      }
    },
    created: function () {
      const userLocation = localStorage.getItem('location')
      const currentLocation = userLocation && JSON.parse(userLocation)

      this.$http.get('chat/userlist').then(({body}) => {
        if (Array.isArray(body)) {
          this.contacts = body
          this.contacts.forEach((fc) => {
            if (fc.locations) {
              fc.lastLocation = fc.locations[fc.locations.length - 1].location

              fc.distance = calculateDistance(
                currentLocation.latitude, currentLocation.longitude,
                fc.lastLocation.latitude, fc.lastLocation.longitude, 'K')
            } else {
              fc.distance = Infinity
            }
          })
        } else {
          console.log('something went wrong')
        }
      }).catch(console.log)
    },
    components: { UsersList }
  }

  function calculateDistance (lat1, lon1, lat2, lon2, unit) {
    const radlat1 = Math.PI * lat1 / 180
    const radlat2 = Math.PI * lat2 / 180
    const theta = lon1 - lon2
    const radtheta = Math.PI * theta / 180
    let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180 / Math.PI
    dist = dist * 60 * 1.1515
    if (unit === 'K') { dist = dist * 1.609344 }
    if (unit === 'N') { dist = dist * 0.8684 }
    return dist
  }
</script>

<style lang="scss">
</style>
