import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currRouterName:'首页',
    photoPath: "http://10.67.72.212/baseinfo/pic/",
    
  },
  mutations: {
    setCurrRouterName(state,val){
      state.currRouterName = val
    }
  },
  actions: {

  }
})
