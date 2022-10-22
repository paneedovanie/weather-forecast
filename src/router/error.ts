export default {
  path: "/:pathMatch(.*)",
  name: "error",
  redirect: { name: "public" },
};
