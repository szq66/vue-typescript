import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/views/Layout.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import NotFound from '@/views/NotFound.vue';
import BookTable from '@/views/bookAdmin/BookTable.vue';
import Index from '@/views/indexPage/Index.vue';
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/404',
      name: '找不到页面',
      component: NotFound,
    },
    {
      path: '/login',
      name: '登录',
      component: Login,
    },
    {
      path: '/register',
      name: '注册',
      component: Register,
    },
    {
      path: '/',
      component: Layout,
      redirect: { path: '/login'},
      children: [
        {
          path: '/index',
          name: '首页',
          meta: { requiresAuth: true },
          component: Index
        },
        {
          path: '/book/index',
          name: '图书管理',
          meta: { requiresAuth: true },
          component: BookTable
        },
      ]
    },
    {
      path: '/*',
      redirect: {path: '/404'}
    }
  ],
});
