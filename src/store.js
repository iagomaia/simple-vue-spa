import Vue from 'vue'
import Vuex from 'vuex'

import persistedState from 'vuex-persistedstate';
import axios from './axios-auth';
import router from './router';

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [persistedState()],

  state: {
    token: '',
    user: null,
    users: [],
  },
  mutations: {
    authUser(state, token) {
      state.token = token;
      axios.defaults.headers.get['Authorization'] = 'Bearer '+token;
      axios.defaults.headers.post['Authorization'] = 'Bearer '+token;
    },
    setUser(state, user) {
      state.user = user;
      router.push({name: 'dashboard'});
    },
    logout(state) {
      state.token = '';
      state.user = null;
      axios.defaults.headers.get['Authorization'] = '';
      axios.defaults.headers.post['Authorization'] = '';
      router.push({name: 'login'});
    },
    setUsers(state, users) {
      state.users = users;
    }
  },
  actions: {
    register({},data) {
      axios.post('/auth/register', data);
    },
    login({commit, dispatch}, data) {
      axios.post('/auth/login', data)
      .then((resp) => {
        commit('authUser', resp.data.token);
        dispatch('fetchAuthUser');
      })
    },
    fetchAuthUser({commit}) {
      axios.get('/auth/current')
      .then((resp) => {
        commit('setUser', resp.data);
      })
    },
    fetchUsers({commit}) {
      axios.get('/users')
      .then((resp) => {
        commit('setUsers', resp.data);
      });
    }
  }
})
