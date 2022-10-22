import dashboardModule from "../modules/dashboard/routes/user";
import weatherModule from "../modules/weather/routes/user";

export default {
  path: "/user",
  name: "user",
  redirect: { name: "home-page" },
  children: [dashboardModule, weatherModule],
  component: () => import("@/components/layouts/UserLayout.vue"),
};
