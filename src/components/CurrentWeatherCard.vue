<script setup lang="ts">
/* import UnitToggle from './UnitToggle.vue' */

defineProps(['currentWeatherData', 'temperatureUnitCelsius'])
</script>

<template>
  <div class="flex flex-col items-center py-5">
    <p class="text-lg">{{ currentWeatherData.location }}</p>
    <div>
      <!-- <UnitToggle :current-weather-data="currentWeatherData" /> -->
      <span class="text-6xl"
        >{{ temperatureUnitCelsius ? currentWeatherData.temp_c : currentWeatherData.temp_f }}°</span
      >
    </div>
  </div>
</template>
