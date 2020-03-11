import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Profile from '../views/Profile.vue'
import Liquid from '../views/Liquid.vue'
import Calorie from '../views/Calorie.vue'
import Routine from '../views/Routine.vue'

import Test from '../views/Test.vue'

import { CurrentUser } from '../models/Users'
Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/login', name: 'Login', component: Login},
  {path: '/signup', name: 'Signup', component: Signup},
  {path: '/profile', name: 'Profile', component: Profile, meta: { isSecret: true }},
  {path: '/liquid', name: 'Liquid', component: Liquid, meta: { isSecret: true }},
  {path: '/calorie', name: 'Calorie', component: Calorie, meta: { isSecret: true }},
  {path: '/routine', name: 'Rountine', component: Routine, meta: { isSecret: true }},
  {path: '/test', name: 'Test', component: Test},
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
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
