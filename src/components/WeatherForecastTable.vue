<script setup lang="ts">
import WeatherBar from './WeatherBar.vue'

defineProps(['weatherForecast', 'temperatureUnitCelsius', 'darkMode'])
</script>

<template>
  <section class="flex justify-center">
    <div
      class="w-11/12 my-8 p-3 bg-opacity-10 rounded-lg"
      :class="{ 'bg-black': !darkMode, 'bg-white': darkMode }"
    >
      <div
        v-for="weather in weatherForecast"
        :key="weather.index"
        class="m-auto grid grid-cols-table gap-5 py-3 border-b-2 border-gray-700 last:border-0"
      >
        <div class="flex items-center">
          <p>{{ weather.weekday }}</p>
        </div>
        <div class="flex justify-center items-center">
          <img :src="weather.icon" class="w-10" />
        </div>
        <div class="flex justify-between items-center">
          <div class="w-20">
            <p>
              {{ temperatureUnitCelsius ? `${weather.mintemp_c}°` : `${weather.mintemp_f}°` }}
            </p>
          </div>
          <WeatherBar
            :weather="weather"
            :temperature-unit-celsius="temperatureUnitCelsius"
            class="w-full"
          />
          <div class="w-20 text-right">
            {{ temperatureUnitCelsius ? `${weather.maxtemp_c}°` : `${weather.maxtemp_f}°` }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
