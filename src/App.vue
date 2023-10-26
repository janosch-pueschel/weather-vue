<script setup lang="ts">
import { ref } from 'vue'

import CurrentWeatherCard from './components/CurrentWeatherCard.vue'
import SearchInput from './components/SearchInput.vue'
import WeatherForecastTable from './components/WeatherForecastTable.vue'

interface WeatherForecast {
  date: string
  temp_c: string
  temp_f: string
  icon: string
}

const currentWeatherData = ref({
  location: '',
  temp_c: '',
  temp_f: '',
  icon: '',
  forecast: <WeatherForecast[]>[]
})

function getWeatherData(weatherLocation: string) {
  fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=b3d01e05915d4c66b0f155101230508&q=${weatherLocation}&days=3`
  )
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      currentWeatherData.value = {
        location: response.location.name,
        temp_c: response.current.temp_c,
        temp_f: response.current.temp_f,
        icon: response.current.condition.icon,
        forecast: response.forecast.forecastday.map((item, index: number) => {
          return {
            key: index,
            date: item.date,
            temp_c: item.day.maxtemp_c,
            temp_f: item.day.maxtemp_f,
            icon: item.day.condition.icon
          }
        })
      }
    })
    .catch(() => {
      alert('Location not found. Try again.')
    })
  locationSearchResults.value = []
}

interface Location {
  name: string
  region: string
  country: string
}
const locationSearchResults = ref<Location[]>([])

function searchWeatherLocation(weatherLocation: string) {
  fetch(
    `http://api.weatherapi.com/v1/search.json?key=b3d01e05915d4c66b0f155101230508&q=${weatherLocation}`
  )
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      locationSearchResults.value = response.map((item: any) => ({
        location: `${item.name}, ${item.country}`,
        coordinates: `${item.lat},${item.lon}`
      }))
    })
    .catch(() => {
      return
    })
}
</script>

<template>
  <SearchInput
    @get-weather-data="getWeatherData"
    @search-weather-location="searchWeatherLocation"
    :location-search-results="locationSearchResults"
  />
  <CurrentWeatherCard
    :current-weather-data="currentWeatherData"
    v-if="currentWeatherData.location !== ''"
  />
  <WeatherForecastTable :weather-forecast="currentWeatherData.forecast"/>
</template>
