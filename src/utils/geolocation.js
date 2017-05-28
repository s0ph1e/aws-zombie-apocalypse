import Vue from 'vue'

if (navigator.geolocation) {
  console.log('Geolocation is supported!')
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError)
} else {
  console.log('Geolocation is not supported for this Browser/OS version yet.')
}

function geoSuccess (geo) {
  const {latitude, longitude} = geo.coords
  const location = {latitude, longitude}
  localStorage.setItem('location', JSON.stringify(location))
  Vue.http.post('geolocation', {location}).then(console.log).catch(console.log)
}

function geoError (error) {
  console.log('Geolocation Error occurred. Error code: ' + error.code)
}
