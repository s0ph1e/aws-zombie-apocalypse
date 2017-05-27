import Vue from 'vue'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Landing from './Main.vue'
import router from './router'

Vue.use(VueResource)
Vue.use(BootstrapVue)

Vue.config.productionTip = false
Vue.http.options.root = 'https://v64xoy3f86.execute-api.eu-west-1.amazonaws.com/dev'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Landing/>',
  components: { Landing }
})
