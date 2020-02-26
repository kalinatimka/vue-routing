import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: true,
    },
    {
      path: '/destination/:slug',
      name: 'DestinationDetails',
      component: () => import(/* webpackChunkName: "DestinationDetails" */'./views/DestinationDetails'),
      props: true,
      children: [
        {
          path: ':experienceSlug',
          name: 'experienceDetails',
          props: true,
          component: () => import(/* webpackChunkName: "experienceDetails */'./views/ExperienceDetails'),
        },
      ],
    }
  ],
});