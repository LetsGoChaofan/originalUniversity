import Vue from 'vue';
import Router from 'vue-router';
import Main from './components/Main.vue';
import DocumentForm from './components/DocumentForm.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
    },
      {
      path: '/Document',
      component: DocumentForm,
    },
      ],
});
