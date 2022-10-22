import { createRouter, createWebHistory } from "vue-router";
import PublicPage from "../pages/PublicPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "public-page",
      component: PublicPage,
    },
    {
      path: "/weather",
      name: "weather-page",
      component: () => import("../pages/WeatherPage.vue"),
    },
    // # Redirect user to home/landing page when accessing unknown route
    {
      path: "/:pathMatch(.*)",
      redirect: "/",
    },
  ],
});

export default router;
