<template>
  <div id="users-map">
    <gmap-map
      :center="center"
      :zoom="4"
      map-type-id="terrain"
      class="map"
    >
      <gmap-marker
        v-for="m in markers"
        :position="m.position"
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
    computed: {
      center: getUserLocation,
      markers: function () {
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

<style lang="scss">
  .map { width: 500px; height: 500px; margin: 0 auto; }
  @media (min-width: 960px) { .map { width: 900px; height: 900px; } }
</style>
