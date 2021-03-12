import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles.css";
import Vuelidate from "vuelidate";
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(VueCookies);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
