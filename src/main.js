import { createApp } from 'vue';
import 'freewindcss';
import 'css-tooltip/dist/css-tooltip.min.css';

import App from './App';
import router from './router';
import plugins from './plugins';
import filters from './filters';
import GlobalComponents from './globalComponents';

const appInstance = createApp(App);
appInstance.use(router);
appInstance.use(plugins);
appInstance.use(filters);
appInstance.use(GlobalComponents);

appInstance.mount('#app');
