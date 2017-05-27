import Vue from 'vue'

export default {
  createSubscription: function (subscription) {
    console.log('creating subscription')
    Vue.http.post('subscriptions', {subscription}).then(console.log).catch(console.log)
  },
  removeSubscription: function () { console.log('removing subscription') }
}
