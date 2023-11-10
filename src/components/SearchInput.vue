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

const showModal = ref(false)
</script>

<template>
  <div class="bg-base-200">
    <div
      class="bg-base-300 bg-opacity-90 h-screen w-screen z-10 fixed"
      :class="{ block: showModal, hidden: !showModal }"
      @click="showModal = !showModal"
    ></div>
    <div class="w-full py-7 form-control flex items-center">
      <form
        class="w-11/12 join z-20"
        @submit.prevent.stop="
          () => {
            $emit('getWeatherData', weatherLocation)
            clearWeatherLocation()
            $emit('searchWeatherLocation')
            showModal ? (showModal = !showModal) : ''
          }
        "
      >
        <input
          type="text"
          placeholder="Search Location..."
          class="input border-gray-600 join-item w-full"
          v-model="weatherLocation"
          @keydown="
            () => {
              showModal ? '' : (showModal = !showModal)
              $emit('searchWeatherLocation', weatherLocation)
            }
          "
          @keydown.enter="$emit('searchWeatherLocation')"
          @click="showModal ? '' : (showModal = !showModal)"
        />
        <button class="btn border-gray-600 join-item" type="submit">
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
      </form>
      <div
        class="absolute top-20 py-2 w-11/12 z-20"
        :class="{ hidden: locationSearchResults.length === 0 }"
      >
        <ul>
          <li
            v-for="result in locationSearchResults"
            :key="result.coordinates"
            class="px-4 py-3 hover:cursor-pointer"
            @click="
              () => {
                $emit('getWeatherData', result.coordinates)
                clearWeatherLocation()
                showModal = !showModal
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
  </div>
</template>
