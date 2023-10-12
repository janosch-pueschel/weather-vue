<script setup lang="ts">
import { ref } from 'vue'

defineProps(['currentWeatherData'])

const temperatureUnitCelsius = ref(true)
function toggleTemperatureUnit() {
  temperatureUnitCelsius.value = !temperatureUnitCelsius.value
}
</script>

<template>
  <div class="flex">
    <span class="mr-1">{{
      temperatureUnitCelsius ? currentWeatherData.temp_c : currentWeatherData.temp_f
    }}</span>
    <label class="swap">
      <input type="checkbox" @click="toggleTemperatureUnit" />
      <div class="swap-on">°F <span class="text-neutral-700">/ °C</span></div>
      <div class="swap-off">°C <span class="text-neutral-700">/ °F</span></div>
    </label>
  </div>
</template>
