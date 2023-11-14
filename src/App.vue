<script setup lang="ts">
import { ref, watch } from 'vue'

import CurrentWeatherCard from './components/CurrentWeatherCard.vue'
import SearchInput from './components/SearchInput.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import UnitToggle from './components/UnitToggle.vue'
import WeatherForecastTable from './components/WeatherForecastTable.vue'

interface WeatherForecast {
  date: string
  weekday: string
  avgtemp_c: number
  maxtemp_c: number
  mintemp_c: number
  avgtemp_f: number
  maxtemp_f: number
  mintemp_f: number
  icon: string
}

const weatherData = ref({
  location: '',
  country: '',
  temp_c: '',
  temp_f: '',
  feelslike_c: '',
  feelslike_f: '',
  condition: '',
  wind_kph: '',
  wind_mph: '',
  precip_mm: '',
  precip_in: '',
  forecast: <WeatherForecast[]>[]
})

function getWeatherData(weatherLocation: string) {
  fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=b3d01e05915d4c66b0f155101230508&q=${weatherLocation}&days=3 `
  )
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      const { name, country } = response.location
      const { temp_c, temp_f, feelslike_c, feelslike_f, wind_kph, wind_mph, precip_mm, precip_in } =
        response.current
      weatherData.value = {
        location: name,
        country: country,
        temp_c: temp_c,
        temp_f: temp_f,
        feelslike_c: feelslike_c,
        feelslike_f: feelslike_f,
        condition: response.current.condition.text,
        wind_kph: wind_kph,
        wind_mph: wind_mph,
        precip_mm: precip_mm,
        precip_in: precip_in,
        forecast: response.forecast.forecastday.map((item, index: number) => {
          return {
            key: index,
            date: item.date,
            weekday: getDayOfWeek(item.date),
            avgtemp_c: item.day.avgtemp_c,
            maxtemp_c: Math.round(item.day.maxtemp_c),
            mintemp_c: Math.round(item.day.mintemp_c),
            avgtemp_f: item.day.avgtemp_f,
            maxtemp_f: Math.round(item.day.maxtemp_f),
            mintemp_f: Math.round(item.day.mintemp_f),
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

function getDayOfWeek(date: string) {
  const dayOfWeek = new Date(date).toLocaleString('en-us', { weekday: 'short' })
  const today = new Date().toLocaleString('en-us', { weekday: 'short' })
  return dayOfWeek === today ? 'Today' : dayOfWeek
}

interface Location {
  name: string
  region: string
  country: string
}
const locationSearchResults = ref<Location[]>([])

function searchWeatherLocation(weatherLocation?: string) {
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

const temperatureUnitCelsius = ref(true)
function toggleTemperatureUnit() {
  temperatureUnitCelsius.value = !temperatureUnitCelsius.value
}

const initTheme = localStorage.getItem('darkMode')
const darkMode = ref(initTheme ? JSON.parse(initTheme) : false)
function toggleTheme() {
  darkMode.value = !darkMode.value
}

watch(darkMode, (darkMode) => {
  localStorage.setItem('darkMode', JSON.stringify(darkMode))
})
</script>

<template>
  <div :data-theme="darkMode ? 'dark' : 'light'">
    <header>
      <SearchInput
        @get-weather-data="getWeatherData"
        @search-weather-location="searchWeatherLocation"
        :location-search-results="locationSearchResults"
      />
    </header>
    <main class="h-screen">
      <CurrentWeatherCard
        :weather-data="weatherData"
        :temperature-unit-celsius="temperatureUnitCelsius"
        v-if="weatherData.location !== ''"
      />
      <WeatherForecastTable
        :weather-forecast="weatherData.forecast"
        :temperature-unit-celsius="temperatureUnitCelsius"
        :dark-mode="darkMode"
      /> 
    </main>
    <footer class="w-full h-16 fixed flex justify-center items-center bottom-0 bg-base-200">
      <div class="w-11/12">
        <ThemeToggle :dark-mode="darkMode" @toggle-theme="toggleTheme" />
        <UnitToggle
          :temperature-unit="temperatureUnitCelsius"
          @toggle-temperature-unit="toggleTemperatureUnit"
        />
      </div>
    </footer>
  </div>
</template>
