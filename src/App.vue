<script setup lang="ts">
import { ref } from 'vue'

import CurrentWeatherCard from './components/CurrentWeatherCard.vue'

const weatherLocation = ref('')
const currentWeatherData = ref({
  location: '',
  temp_c: '',
  temp_f: '',
  icon: ''
})

function getWeatherData() {
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=b3d01e05915d4c66b0f155101230508&q=${weatherLocation.value}`
  )
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      currentWeatherData.value = {
        location: response.location.name,
        temp_c: response.current.temp_c,
        temp_f: response.current.temp_f,
        icon: response.current.condition.icon
      }
    })
    .catch(() => {
      alert('Location not found. Try again.')
    })
}
</script>

<template>
  <input type="text" v-model="weatherLocation" class="border" />
  <button @click="getWeatherData">Search</button>
  <CurrentWeatherCard
    :current-weather-data="currentWeatherData"
    v-if="currentWeatherData.location !== ''"
  />
</template>
