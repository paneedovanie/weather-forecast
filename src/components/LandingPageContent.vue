<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
const { loginWithRedirect } = useAuth0();
</script>

<template>
  <div class="content">
    <p class="text content__text">
      Welcome to the weather forecast web application. Please login with your
      Github user to use the application and view the weather in your city
    </p>

    <button class="button content__button" @click="loginWithRedirect">
      Login
    </button>
  </div>
</template>

<style scoped>
.content {
  margin-top: 64px;
  max-width: 512px;
  margin-inline: auto;
}
.content__text {
  margin-bottom: 32px;
}
</style>
