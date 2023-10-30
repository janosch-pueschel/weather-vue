<script setup lang="ts">
/* import UnitToggle from './UnitToggle.vue' */

defineProps(['currentWeatherData', 'temperatureUnitCelsius'])
</script>

<template>
  <div class="flex flex-col items-center py-5">
    <img :src="currentWeatherData.icon" />
    <h1>{{ currentWeatherData.location }}</h1>
    <div>
      <!-- <UnitToggle :current-weather-data="currentWeatherData" /> -->
      <span class="mr-1">{{
        temperatureUnitCelsius
          ? `${currentWeatherData.temp_c} °C`
          : `${currentWeatherData.temp_f} °F`
      }}</span>
    </div>
  </div>
</template>
