import Vue from 'vue'
import Router from 'vue-router'
import NewsList from './views/NewsList.vue'
Vue.use(Router);
export default new Router({
  routes: [
    //错误路由匹配
    {
      path: '/*',
      redirect: '/news/newsList'
    },
  ]
})
