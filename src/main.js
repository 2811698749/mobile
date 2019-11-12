
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/host.css';
import './assets/css/common.less';
import  { initMint }  from './plugins/mint';
import  { initDirective }  from './plugins/initDirective';
Vue.config.productionTip = false;
//初始化mint
initMint(Vue);
initDirective(Vue);
//设置全局守卫
const routerMap = {

}
router.beforeEach((to, from, next) => {
  let currName = to.name;
    store.commit('setCurrRouterName', routerMap[currName]);
    next();
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
