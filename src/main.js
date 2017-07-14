// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import lodash from 'lodash'
import VueLodash from 'vue-lodash/dist/vue-lodash.min'
Vue.use(VueLodash, lodash)

// A css UI Library
import Buefy from 'buefy'
//import 'buefy/lib/buefy.css'
Vue.use(Buefy)

// Setup vuefire for Firebase
import VueFire from 'vuefire'
Vue.use(VueFire)

import App from './App'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
