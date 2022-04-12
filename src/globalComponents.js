import MainLayout from '@/layout/MainLayout.vue';

const GlobalComponents = {
  install (app) {
    app.component('MainLayout', MainLayout);
  }
};

export default GlobalComponents;
