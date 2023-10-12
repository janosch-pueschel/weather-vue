<script setup lang="ts">
import { ref } from 'vue'
defineProps(['currentWeatherData'])

const temperatureUnitCelsius = ref(true)
function toggleTemperatureUnit() {
  temperatureUnitCelsius.value = !temperatureUnitCelsius.value
}
</script>

<template>
  <div class="flex flex-col items-center py-5">
    <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" />
    <h1>{{ currentWeatherData.location }}</h1>
    <p>
      {{
        temperatureUnitCelsius
          ? `${currentWeatherData.temp_c} °C`
          : `${currentWeatherData.temp_f} °F`
      }}
    </p>
    <button @click="toggleTemperatureUnit">Toggle Celsius-Fahrenheit</button>
  </div>
</template>
