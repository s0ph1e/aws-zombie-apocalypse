<template>
  <div id="users-list">
    <h1>Map here</h1>
    <gmap-map
      :center="center"
      :zoom="4"
      map-type-id="terrain"
      style="width: 500px; height: 500px"
    >
      <gmap-marker
        v-for="m in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        :icon="m.icon"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>


<script>
  const zombieIcon = '/static/zombie-marker.png'

  export default {
    name: 'users-map',
    props: ['contacts'],
    data () {
      return {
        center: getUserLocation(),
        markers: this.getMarkers()
      }
    },
    methods: {
      getMarkers: function () {
        const markers = this.contacts.filter((c) => c.lastLocation).map((c) => {
          const marker = c.lastLocation && {
            position: transform(c.lastLocation)
          }
          if (c.userType === 'zombie') {
            marker.icon = zombieIcon
          }
          return marker
        })
        return markers
      }
    }
  }

  function getUserLocation () {
    const loc = JSON.parse(localStorage.getItem('location'))
    return transform(loc)
  }

  function transform (location) {
    return {lat: location.latitude, lng: location.longitude}
  }
</script>
