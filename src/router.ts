import Vue from 'vue';
import VueRouter, { Route } from 'vue-router';
import { RouterOptions } from 'vue-router/types/router';
import Index from './pages/index.vue';

Vue.use(VueRouter);

const options: RouterOptions = {
  mode: 'history',
  routes: [
    {
      name: 'index',
      path: '/',
      component: Index,
    },
  ],
};

const router = new VueRouter(options);
router.beforeEach(async (to: Route, from: Route, next) => {
  next();
});

export default router;
