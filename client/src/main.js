import Vue from 'vue'
import Buefy from 'buefy'
import App from './App.vue'
import router from './router'

import 'bulma'
import '@fortawesome/fontawesome-free/css/all.css'
import 'buefy/dist/buefy.css'
import 'axios'

Vue.config.productionTip = false

Vue.use(Buefy)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
