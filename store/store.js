import Vue from "vue";
import Vuex from "vuex";
import actions from './actions';
import getters from './getters';
import mutations from './mutations'
import persistedState from 'vuex-persistedstate'
/* import modules from './module' */



Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    personalInfo: {
      islogin:false,
      user: {}
    }
  },
  actions,
  mutations,
  getters,
  /*  modules */
  plugins: [
  persistedState({ storage: window.sessionStorage })
  ]
});
