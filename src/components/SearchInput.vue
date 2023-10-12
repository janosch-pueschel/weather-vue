<script setup lang="ts">
import { ref } from 'vue'

const weatherLocation = ref('')
</script>

<template>
  <div class="form-control flex items-center">
    <div class="input-group w-11/12">
      <input
        type="text"
        placeholder="Search…"
        class="input input-bordered w-full"
        v-model="weatherLocation"
        @keydown.enter="$emit('getWeatherData', weatherLocation)"
      />
      <button class="btn btn-square" @click="$emit('getWeatherData', weatherLocation)">
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
  </div>
</template>
