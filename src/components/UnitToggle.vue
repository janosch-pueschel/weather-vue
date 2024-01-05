<script setup lang="ts">
const props = defineProps(['temperatureUnit'])
</script>

<template>
  <div class="flex">
    <label class="swap">
      <input
        type="checkbox"
        @click="$emit('toggleTemperatureUnit')"
        :checked="props.temperatureUnit ? false : true"
      />
      <div class="swap-on font-medium"><span class="text-neutral-700 font-thin">°C /</span> °F</div>
      <div class="swap-off font-medium">
        °C <span class="text-neutral-700 font-thin">/ °F</span>
      </div>
    </label>
  </div>
</template>
