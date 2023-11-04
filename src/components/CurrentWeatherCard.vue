<script setup lang="ts">
/* import UnitToggle from './UnitToggle.vue' */

defineProps(['weatherData', 'temperatureUnitCelsius'])
</script>

<template>
  <div class="flex flex-col items-center py-5">
    <p class="text-lg">{{ weatherData.location }}</p>
    <div>
      <span class="text-6xl"
        >{{ temperatureUnitCelsius ? weatherData.temp_c : weatherData.temp_f }}°</span
      >
    </div>
  </div>
</template>
