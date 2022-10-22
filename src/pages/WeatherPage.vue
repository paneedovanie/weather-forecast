<script setup lang="ts">
import type { AxiosError } from "axios";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getWeather } from "../lib/weatherApi";
import Loader from "../components/Loader.vue";
import { format } from 'date-fns'

const router = useRouter();
const route = useRoute();
const data = ref<any>();
const isLoading = ref(false);

onMounted(async () => {
  isLoading.value = true;
  const city = route.query.q as string;
  if (!city || city === "") {
    alert("Please provide a city");
    router.push("/");
    return
  }

  try {
    data.value = await getWeather(city);
  } catch (error) {
    const message = (error as AxiosError<{ cod: number; message: string }>)
      ?.response?.data?.message;
    alert(message);
    router.push("/");
  }
  isLoading.value = false;
});
</script>

<template>
  <main class="main">
    <div class="main__inner">
      <Loader v-if="isLoading" />
      <template v-else>
        <template v-if="data">
          <table class="table">
            <thead class="thead table__thead">
              <tr class="tr thead__tr">
                <th class="th tr__th">Date</th>
                <th class="th tr__th"></th>
                <th class="th tr__th th_sm_hide"></th>
                <th class="th tr__th th_sm_hide"></th>
                <th class="th tr__th th_sm_hide"></th>
                <th class="th tr__th th_sm_hide"></th>
              </tr>
              <tr class="tr thead__tr">
                <th class="th tr__th">(mm/dd/yyyy)</th>
                <th class="th tr__th">Temp(F)</th>
                <th class="th tr__th th_sm_hide">Description</th>
                <th class="th tr__th th_sm_hide">Main</th>
                <th class="th tr__th th_sm_hide">Pressure</th>
                <th class="th tr__th th_sm_hide">Humidity</th>
              </tr>
            </thead>
            <tbody class="tbody table__tbody">
              <tr class="tr tbody_tr">
                <td class="td tr__td">{{ format(new Date(data.dt), 'MM/dd/Y') }}</td>
                <td class="td tr__td">{{ data.main.temp }}</td>
                <td class="td tr__td td_sm_hide">{{ data.weather[0].description }}</td>
                <td class="td tr__td td_sm_hide">{{ data.weather[0].main }}</td>
                <td class="td tr__td td_sm_hide">{{ data.main.pressure }}</td>
                <td class="td tr__td td_sm_hide">{{ data.main.humidity }}</td>
              </tr>
            </tbody>
          </table>
          <div class="actions">
            <button class="button actions__button" @click="router.push('/')">Back</button>
          </div>
        </template>
        <div v-else>No Data</div>
      </template>
    </div>
  </main>
</template>

<style scoped>
.main__inner {
  max-width: 1024px;
  margin-inline: auto;
  padding: 8px;
  margin-top: 64px;
}
.table {
  width: 100%;
  border-collapse: collapse;
  border: 2px solid black;
  margin-bottom: 72px;
}
.table__thead {
  text-align: left;
}
.tr__td {
  text-transform: capitalize;
}
.tr__th,
.tr__td {
  border-left: 2px solid black;
  padding: 4px;
}
.tr__th:last-child,
.tr__td:last-child {
  border-right: 2px solid black;
}
.actions {
  display: flex;
  justify-content: right;
}
@media screen and (max-width: 480px) {
  .th_sm_hide, .td_sm_hide {
    display: none;
  }
} 
</style>
