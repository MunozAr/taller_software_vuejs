import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import VueJwtDecode from "vue-jwt-decode";

Vue.use(VueJwtDecode);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;
const token = localStorage.getItem('access_token')
const userid = localStorage.getItem('id')
if (token && userid) {
  axios.defaults.headers.common['Authorization'] = token
}

console.log(token);
console.log(userid);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
