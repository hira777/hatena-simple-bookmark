import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';

import { createRouter } from './router';

Vue.use(Router);

new Vue({
  el: '#app',
  router: createRouter(Router),
  render: h => h(App),
});
