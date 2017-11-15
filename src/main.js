import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Message from './Message.vue'
import Users from './Users.vue'
import Home from './Home.vue'
import Exercise from './Exercise.vue'

Vue.use(VueRouter);
Vue.component('app-message', Message);

const routes = [
  { path: '/users/:teamId', component : Users},
  { path: '/', component : Home },
  { path: '/Exercise', component : Exercise }
];

const router = new VueRouter( {
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router : router,
  render: h => h(App)
})
