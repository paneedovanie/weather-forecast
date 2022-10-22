<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import MagnifyingGlass from "./icons/MagnifyingGlass.vue";
const { user } = useAuth0();
const router = useRouter();
const city = ref("");
const error = ref<string>();
const showWeather = () => {
  const value = city.value.trim();
  if (value === "") {
    error.value = "The city is required";
    return;
  }
  router.push(`/weather?q=${value}`);
};
</script>

<template>
  <div class="content">
    <div class="user content__user user_sm_hide">
      <h3 class="name user__name">
        {{ user?.name !== "" ? user.name : user.nickname }}
      </h3>
      <a :href="`https://github.com/${user.nickname}`" target="__blank"
        >https://github.com/{{ user.nickname }}</a
      >
    </div>
    <div class="search content__search">
      <div class="input search__input">
        <MagnifyingGlass />
        <input placeholder="City" v-model="city" class="field input_field" />
      </div>
      <div v-if="error" class="error">{{ error }}</div>
      <button class="button button_primary" @click="showWeather">
        Display Weather
      </button>
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
  color: var(--color-primary);
}
.content__search {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.search__input {
  background-color: var(--color-white);
  display: flex;
  border-radius: 8px;
  align-items: center;
  box-shadow: 0 3px 5px var(--color-shadow);
  padding-inline: 8px;
}
.input_field {
  background-color: none;
  border: 0;
  padding: 8px;
}
@media screen and (max-width: 480px) {
  .user_sm_hide {
    display: none;
  }
}
</style>
