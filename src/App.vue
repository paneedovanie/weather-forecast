<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import { RouterView } from "vue-router";
import Loader from "./components/Loader.vue";
const { isLoading } = useAuth0();
</script>

<template>
  <Loader v-if="isLoading" />
  <template v-else>
    <RouterView />
  </template>
</template>

<style scoped></style>
