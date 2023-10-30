<script setup lang="ts">
defineProps(['weatherForecast', 'temperatureUnitCelsius'])
</script>

<template>
  <div v-for="weather in weatherForecast" :key="weather.index" class="grid grid-cols-3">
    <div class="flex justify-center items-center">
      <p>{{ weather.weekday }}</p>
    </div>
    <div class="flex justify-center items-center">
      <img :src="weather.icon" />
    </div>
    <div class="flex justify-center items-center">
      <span class="mr-1">{{
        temperatureUnitCelsius ? `${weather.mintemp_c}°` : `${weather.mintemp_f}°`
      }}</span>
      -
      <span class="mr-1">{{
        temperatureUnitCelsius ? `${weather.maxtemp_c}°` : `${weather.maxtemp_f}°`
      }}</span>
    </div>
  </div>
</template>
