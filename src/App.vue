<script setup lang="ts">
import { ref } from 'vue'

const weatherLocation = ref('')
const weatherData = ref()

function getWeatherData() {
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=b3d01e05915d4c66b0f155101230508&q=${weatherLocation.value}`
  )
    .then((response) => {
      return response.json()
    })
    .then((response) => (weatherData.value = response))
}
</script>

<template>
  <input type="text" v-model="weatherLocation" class="border" />
  <button @click="getWeatherData">Search</button>
  <p>{{ weatherData }}</p>
</template>
