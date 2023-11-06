<script setup lang="ts">
defineProps(['temperatureUnit'])
</script>

<template>
  <div class="flex">
    <label class="swap">
      <input type="checkbox" @click="$emit('toggleTemperatureUnit')" />
      <div class="swap-on"><span class="text-neutral-700">°C /</span> °F</div>
      <div class="swap-off">°C <span class="text-neutral-700">/ °F</span></div>
    </label>
  </div>
</template>
