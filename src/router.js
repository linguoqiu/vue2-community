import Vue from 'vue';
import Router from 'vue-router';

const Login = () => import(/* webpackChunkName: 'Login' */ './views/Login.vue');
const Reg = () => import(/* webpackChunkName: 'Reg' */ './views/Reg.vue');
const Forget = () => import(/* webpackChunkName: 'Forget' */ './views/Forget.vue');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg,
    },
    {
      path: '/forget',
      name: 'Forget',
      component: Forget,
    },
  ],
});
