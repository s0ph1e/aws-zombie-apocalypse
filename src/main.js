import Vue from 'vue'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Landing from './Main.vue'
import router from './router'

const apiRoot = 'https://v64xoy3f86.execute-api.eu-west-1.amazonaws.com/dev'

Vue.use(VueResource)
Vue.use(BootstrapVue)

Vue.config.productionTip = false
Vue.http.options.root = apiRoot

Vue.http.interceptors.push(function (request, next) {
  const token = localStorage.getItem('token')
  if (token) {
    request.headers.set('Authorization', token)
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Landing/>',
  components: { Landing }
})

