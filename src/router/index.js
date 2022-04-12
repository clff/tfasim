
import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '@/Pages/Home';
import Dashboard from '@/Pages/Dashboard';
import Fees from '@/Pages/Forms/Fees';
import PowerOfAttorney from '@/Pages/Forms/PowerOfAttorney';

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
  },
  {
    path: '/forms/fees',
    name: 'fees',
    component: Fees
  },
  {
    path: '/forms/power-of-attorney',
    name: 'powerOfAttorney',
    component: PowerOfAttorney
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
});

export default router;
