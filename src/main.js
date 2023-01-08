import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
// method 1 to zh-cn
// import zh from 'vee-validate/dist/locale/zh_CN';
import App from './App.vue';
import router from './router';
import store from './store';
// method 2 to zh-cn
import './local';

Vue.config.productionTip = false;

Vue.use(VeeValidate);

// method 1 to zh-cn
// Validator.localize('zh-CN', zh);

const validator = new Validator();
validator.localize('zh-CN');

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
