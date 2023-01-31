import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import App from './App.vue';
import router from './router';
import store from './store';
import './local';
import axios from 'axios';

Vue.use(VeeValidate);

const validator = new Validator();
validator.localize('zh-CN');

Vue.config.productionTip = false;

axios.defaults.baseURL =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3000/api'
    : 'http://domain:port/api';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
