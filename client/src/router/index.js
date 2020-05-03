import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Profile from '../views/Profile.vue'
import Routine from '../views/Routine.vue'

import { CurrentUser } from '../models/Users'
Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/about', name: 'About', component: About},
  {path: '/login', name: 'Login', component: Login},
  {path: '/signup', name: 'Signup', component: Signup},
  {path: '/profile', name: 'Profile', component: Profile, meta: { isSecret: true }},
  {path: '/routine', name: 'Rountine', component: Routine, meta: { isSecret: true }},
  
  {path: '/liquid', name: 'Liquid', component: () => import(/* webpackChunkName: "about" */ '../views/Liquid.vue'), meta: { isSecret: true }},
  {path: '/calorie', name: 'Calorie', component: () => import(/* webpackChunkName: "about" */ '../views/Calorie.vue'), meta: { isSecret: true }},
  {path: '/cardio', name: 'Cardio', component: () => import(/* webpackChunkName: "about" */ '../views/Cardio.vue'), meta: { isSecret: true }},
  {path: '/social', name: 'Social', component: () => import(/* webpackChunkName: "about" */ '../views/Social.vue'), meta: { isSecret: true }}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach( (to, from, next) => {
  if(to.meta.isSecret && !CurrentUser) next('/login');
  else next();
});

export default router
