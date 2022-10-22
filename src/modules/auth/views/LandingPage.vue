<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
const { loginWithRedirect } = useAuth0();
</script>

<template>
  <main class="main">
    <div class="main__inner">
      <div class="content">
        <p class="heading content__heading">
          Welcome to the weather forecast web application.
        </p>
        <p class="description content__description">
          Please login with your Github user to use the application and view the
          weather in your city
        </p>

        <button
          class="button button_primary content__button"
          @click="loginWithRedirect"
        >
          Login
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main {
  background-image: linear-gradient(to left, #aaa, #aaa),
    url("/src/assets/images/clouds.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: overlay;
  min-height: 400px;
  background-position: center;
}
.main__inner {
  max-width: 1024px;
  margin-inline: auto;
  padding: 8px;
}
.content {
  margin-top: 64px;
  max-width: 512px;
  margin-inline: auto;
}
.content__heading {
  font-size: 24px;
  font-weight: bold;
  color: var(--color-primary);
}
.content__description {
  font-size: 12px;
  margin-bottom: 32px;
  color: var(--color-secondary);
}
</style>
