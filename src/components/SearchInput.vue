<script setup lang="ts">
import { ref } from 'vue'

defineProps(['locationSearchResults'])

const weatherLocation = ref('')
let userInput = ''

function clearWeatherLocation() {
  weatherLocation.value = ''
}
function setWeatherLocation(location: string) {
  userInput = weatherLocation.value
  weatherLocation.value = location
}
</script>

<template>
  <div class="form-control flex items-center">
    <div class="input-group w-11/12">
      <input
        type="text"
        placeholder="Search…"
        class="input input-bordered w-full"
        v-model="weatherLocation"
        @keydown.enter="
          () => {
            $emit('getWeatherData', weatherLocation)
            clearWeatherLocation()
          }
        "
        @keydown="$emit('searchWeatherLocation', weatherLocation)"
      />
      <button
        class="btn btn-square"
        @click="
          () => {
            $emit('getWeatherData', weatherLocation)
            clearWeatherLocation()
          }
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
    <div
      class="absolute top-14 py-2 w-11/12 z-20 h-full bg-base-100"
      :class="{ hidden: locationSearchResults.length === 0 }"
    >
      <ul>
        <li
          v-for="result in locationSearchResults"
          :key="result.coordinates"
          class="px-4 py-3 hover:cursor-pointer hover:bg-gray-800"
          @click="
            () => {
              $emit('getWeatherData', result.coordinates)
              clearWeatherLocation()
            }
          "
          @mouseover="setWeatherLocation(result.location)"
          @mouseleave="setWeatherLocation(userInput)"
        >
          {{ result.location }}
        </li>
      </ul>
    </div>
  </div>
</template>
