export default {
  path: "weather",
  name: "weather",
  redirect: { name: "weather-page" },
  component: () => import("../Module.vue"),
  children: [
    {
      path: "",
      name: "weather-page",
      component: () => import("../views/WeatherPage.vue"),
    },
  ],
};
