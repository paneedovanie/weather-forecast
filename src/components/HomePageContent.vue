<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
import { toRefs } from 'vue';
</script>

<template>
  <div class="content">
    Home
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
