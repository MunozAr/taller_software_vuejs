import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  accessToken: localStorage.getItem('access_token') || null,
  currentUser: {}
  },
  mutations: {},
  actions: {},
  getters:{
    loggedIn(state){
      return state.accessToken != null
    }
  }
});
