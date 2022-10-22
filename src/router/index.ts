import { createRouter, createWebHistory } from "vue-router";
import publicRoutes from './public'
import userRoutes from './user'
import errorRoutes from './error'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [publicRoutes, userRoutes, errorRoutes]
});

export default router;
