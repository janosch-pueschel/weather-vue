<script setup lang="ts">
defineProps(['currentWeatherData'])
</script>

<template>
  <div>
    <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" />
    <h1>{{ currentWeatherData.location }}</h1>
    <p>{{ currentWeatherData.temp_c }}</p>
    <button>Toggle Celsius-Fahrenheit</button>
  </div>
</template>
