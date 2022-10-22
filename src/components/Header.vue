<script setup lang="ts">
import { config } from "@/constant/config";
import { useAuth0 } from "@auth0/auth0-vue";
import { RouterLink } from "vue-router";
const { isAuthenticated, logout } = useAuth0();
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <RouterLink class="logo nav__logo" to="/">
        <img
          alt="Vue logo"
          class="image logo__image"
          src="@/assets/logo.svg"
          width="60"
          height="60"
        />
        <h3 class="title logo__title">{{ config.title }}</h3>
      </RouterLink>

      <nav class="nav nav_sm_hide">
        <RouterLink class="link nav__link" to="/">Home</RouterLink>
      </nav>

      <template v-if="isAuthenticated">
        <button class="button button_secondary" @click="logout({ returnTo: config.baseUrl })">Logout</button>
      </template>
    </div>
  </header>
</template>

<style scoped>
.header {
  box-shadow: 0 3px 5px var(--color-shadow);
}
.header__inner {
  display: flex;
  align-items: center;
  gap: 24px;
  max-width: 1024px;
  margin-inline: auto;
  padding: 8px;
}
.nav {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
}
.nav__logo {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
}
.nav__link {
  text-decoration: none;
  color: var(--color-secondary);
}
.logo__title {
  color: var(--color-primary);
}
@media screen and (max-width: 480px) {
  .nav_sm_hide {
    display: none;
  }
}
</style>
