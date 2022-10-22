import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home-page",
      component: HomePage,
    },
    {
      path: "/weather",
      name: "weather-page",
      component: () => import("../pages/WeatherPage.vue"),
    },
  ],
});

export default router;
