
import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '@/Pages/Home';
import Dashboard from '@/Pages/Dashboard';

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
});

export default router;
