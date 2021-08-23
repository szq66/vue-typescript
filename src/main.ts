import Vue from 'vue';
import App from '@/App.vue';
import router from './router';
import store from './store';
import ElementUI, { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

router.beforeEach((to: any, from, next) => {
  if (to.meta.requiresAuth) {
    if (sessionStorage.getItem('token')) {
      next();
    } else {
      Message.error('请先登录！');
      next({ path: '/login' });
    }
  } else { next(); }
});

