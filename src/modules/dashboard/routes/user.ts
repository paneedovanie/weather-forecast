export default {
  path: "dashboard",
  name: "dashboard",
  redirect: { name: "home-page" },
  component: () => import("../Module.vue"),
  children: [
    {
      path: "",
      name: "home-page",
      component: () => import("../views/HomePage.vue"),
    },
  ],
};
