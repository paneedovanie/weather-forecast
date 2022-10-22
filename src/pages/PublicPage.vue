<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import LandingPageContent from "../components/public-content/LandingPageContent.vue";
import HomePageContent from "../components/public-content/HomePageContent.vue";
const { isAuthenticated } = useAuth0();
</script>

<template>
  <main class="main">
    <div class="main__inner">
      <HomePageContent v-if="isAuthenticated" />
      <LandingPageContent v-else />
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
</style>
