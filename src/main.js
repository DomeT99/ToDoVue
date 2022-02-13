import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import global from './assets/global.scss'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  global,
  render: h => h(App)
}).$mount('#app')
