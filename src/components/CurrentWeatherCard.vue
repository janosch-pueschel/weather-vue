<script setup lang="ts">
import UnitToggle from './UnitToggle.vue'

defineProps(['currentWeatherData'])
</script>

<template>
  <div class="flex flex-col items-center py-5">
    <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" />
    <h1>{{ currentWeatherData.location }}</h1>
    <div>
      <UnitToggle :current-weather-data="currentWeatherData" />
    </div>
  </div>
</template>
