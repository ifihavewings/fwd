import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const routes = [];
import RouteGAR from '../page/getheringAndReceipt/route.js';
Array.prototype.push.apply(routes, RouteGAR);


export default new Router({
  routes
});
