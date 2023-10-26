<script setup lang="ts">
defineProps(['weatherForecast'])
</script>

<template>
  <div v-for="weather in weatherForecast" :key="weather.index" class="grid grid-cols-3">
    <div class="flex justify-center items-center">
      <p>{{ weather.date }}</p>
    </div>
    <div class="flex justify-center items-center">
      <img :src="weather.icon">
    </div>
    <div class="flex justify-center items-center">
      <p>{{ weather.temp_c }} °C</p>
      <p>{{ weather.temp_f }} °F</p>
    </div>
  </div>
</template>
