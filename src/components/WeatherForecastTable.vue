<script setup lang="ts">
defineProps(['weatherForecast', 'temperatureUnitCelsius'])
</script>

<template>
  <div v-for="weather in weatherForecast" :key="weather.index" class="grid grid-cols-3">
    <div class="flex justify-center items-center">
      <p>{{ weather.date }}</p>
    </div>
    <div class="flex justify-center items-center">
      <img :src="weather.icon" />
    </div>
    <div class="flex justify-center items-center">
      <span class="mr-1">{{
        temperatureUnitCelsius ? `${weather.temp_c} °C` : `${weather.temp_f} °F`
      }}</span>
    </div>
  </div>
</template>
