import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { VueSpinners } from '@saeris/vue-spinners'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueSpinners)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
