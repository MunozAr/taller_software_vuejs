import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueJwtDecode from 'vue-jwt-decode';


    
Vue.use(VueAxios, axios);
Vue.use(VueJwtDecode)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
