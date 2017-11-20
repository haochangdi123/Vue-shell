import Vue from 'vue';
import Router from 'vue-router';
import Goods from '../view/Goods';
import Assess from '../view/Assess';
import Store from '../view/Store';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/assess',
      name: 'Assess',
      component: Assess
    },
    {
      path: '/store',
      name: 'Store',
      component: Store
    },
    {
      path: '/',
      redirect: '/goods'
    }
  ]
});
