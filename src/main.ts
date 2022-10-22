import { createApp } from "vue";
import { createPinia } from "pinia";
import { createAuth0 } from "@auth0/auth0-vue";
import { config } from "./constant/config";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(
  createAuth0(
    config.oauth
  )
);
app.use(router);
app.mount("#app");
