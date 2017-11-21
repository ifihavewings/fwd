// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Axios from 'axios';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import './js/rem.js';
import './css/style.css';
import { DatetimePicker } from 'mint-ui';
Vue.component(DatetimePicker.name, DatetimePicker);


Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

