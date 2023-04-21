import { createRouter, createWebHistory } from 'vue-router'
import RuView from "../views/RuView.vue";
import EsView from "../views/EsView.vue";
import ruApiView from "../views/RuApiView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'ru',
    },
    {
      path: '/ru',
      name: 'ru',
      component: RuView
    },
    {
      path: '/es',
      name: 'es',
      component: EsView
    },
    {
      path: '/ru/api',
      name: 'ru_api',
      component: ruApiView,
      props: {locale: 'ru'}
    },
    {
      path: '/es/api',
      name: 'es_api',
      component: EsView
    },
  ]
})

export default router
