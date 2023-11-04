<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiThermometer, mdiWeatherPouring, mdiWeatherWindy } from '@mdi/js'

defineProps(['weatherData', 'temperatureUnitCelsius'])
</script>

<template>
  <div class="flex flex-col items-center py-5">
    <p class="text-sm">{{ weatherData.location }}, {{ weatherData.country }}</p>
    <p class="text-6xl flex my-2">
      {{ temperatureUnitCelsius ? weatherData.temp_c : weatherData.temp_f }}
      <span class="text-2xl font-light">{{ temperatureUnitCelsius ? '°C' : '°F' }}</span>
    </p>
    <p class="capitalize">{{ weatherData.condition }}</p>
  </div>
  <div class="flex justify-center my-5">
    <div class="w-40 flex justify-center items-center border-r-2 border-gray-700">
      <svg-icon type="mdi" :path="mdiThermometer" size="35" class="mr-2"></svg-icon>
      <p class="text-md">
        <span class="text-sm">Feels like</span><br />
        {{ temperatureUnitCelsius ? weatherData.feelslike_c : weatherData.feelslike_f }}°
      </p>
    </div>
    <div class="w-40 flex justify-center items-center border-r-2 border-gray-700">
      <svg-icon type="mdi" :path="mdiWeatherWindy" size="35" class="mr-2"></svg-icon>
      <p class="text-md">
        <span class="text-sm">Wind</span><br />
        {{ temperatureUnitCelsius ? weatherData.wind_kph : weatherData.wind_mph }}
        <span class="text-sm">{{ temperatureUnitCelsius ? 'km/h' : 'mi/h' }}</span>
      </p>
    </div>
    <div class="w-40 flex justify-center items-center">
      <svg-icon type="mdi" :path="mdiWeatherPouring" size="35" class="mr-2"></svg-icon>
      <p class="text-md">
        <span class="text-sm">Precip</span><br />
        {{ temperatureUnitCelsius ? `${weatherData.precip_mm}` : `${weatherData.precip_in}` }}
        <span class="text-sm">{{ temperatureUnitCelsius ? 'mm' : 'inch' }}</span>
      </p>
    </div>
  </div>
</template>
