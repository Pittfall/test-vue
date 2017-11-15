import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Users from '../components/Users.vue'
import Exercise from '../components/Exercise.vue'

Vue.use(Router);

const routes = [
    { path: '/', component : Home },
    { path: '/users/:teamId', component : Users},
    { path: '/Exercise', component : Exercise }
  ];

export default new Router({
    routes,
    mode: 'history'
})