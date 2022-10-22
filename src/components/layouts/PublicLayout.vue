<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import { onMounted } from "vue";
import { RouterView, useRouter } from "vue-router";
import Header from "../Header.vue";
import Loader from '../Loader.vue'

const router = useRouter();

const { isAuthenticated, isLoading } = useAuth0();

onMounted(() => {
  if (isAuthenticated.value) return router.push("/user");
});
</script>

<template>
  <Loader v-if="isLoading" />
  <template v-else-if="isAuthenticated">Authenticated</template>
  <template v-else>
    <Header />
    <RouterView />
  </template>
</template>
