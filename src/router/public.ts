import publicModule from "../modules/auth/routes/public";

export default {
  path: "/",
  name: "public",
  redirect: { name: "landing-page" },
  children: publicModule,
  component: () => import("@/components/layouts/PublicLayout.vue"),
};
