import Vue from 'vue'
import Router from 'vue-router'
import store from './store';

const Login = () => import('./views/Login.vue');
const Dashboard = () => import('./views/Dashboard.vue');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter(to, from, next) {
        if (store.state.user === null) {
          next({name: 'login'});
        } else {
          next();
        }
      }
    }
  ]
})
