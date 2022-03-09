import Vue from "vue";
import App from "./App.vue";
import Vue2TouchEvents from "vue2-touch-events";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";
import global from "./assets/global.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  Vue2TouchEvents,
  vuetify,
  global,
  render: (h) => h(App),
}).$mount("#app");
