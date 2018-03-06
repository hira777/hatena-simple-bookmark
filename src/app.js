import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import Items from './components/Items.vue';
import CategoryNav from './components/CategoryNav.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/hotentry/',
      components: {
        items: Items,
        categoryNav: CategoryNav,
      },
    },
    {
      path: '/hotentry/:category',
      components: {
        items: Items,
        categoryNav: CategoryNav,
      },
    },
    {
      path: '*',
      redirect: '/hotentry/',
    },
  ],
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
