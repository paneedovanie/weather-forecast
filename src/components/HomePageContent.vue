<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const { user } = useAuth0();
const router = useRouter();
const city = ref("");
const showWeather = () => {
  router.push(`/weather?q=${city.value}`);
};
</script>

<template>
  <div class="content">
    <div class="user content__user">
      <h3 class="name user__name">
        {{ user?.name !== "" ? user.name : user.nickname }}
      </h3>
      <a :href="`https://github.com/${user.nickname}`" target="__blank"
        >https://github.com/{{ user.nickname }}</a
      >
    </div>
    <div class="search content__search">
      <div class="input search__input">
        <input placeholder="City" v-model="city" />
      </div>
      <button class="button button_primary" @click="showWeather">Display Weather</button>
    </div>
  </div>
</template>

<style scoped>
.content {
  margin-top: 64px;
  max-width: 512px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content__user {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 64px;
}
.user__name {
  text-transform: capitalize;
  margin: 0;
}
.content__search {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
</style>
