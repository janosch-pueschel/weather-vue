<script setup lang="ts">
defineProps(['darkMode'])
</script>

<template>
  <div>
    <span></span>
    <input
      type="checkbox"
      id="check"
      class="hidden peer"
      @click="$emit('toggleTheme')"
      :checked="darkMode ? true : false"
    />
    <label
      for="check"
      class="bg-zinc-700 peer-checked:bg-zinc-100 inline-block w-11.5 h-6 rounded-full relative cursor-pointer before:z-10 before:absolute before:top-px before:left-px before:w-5.5 before:h-5.5 before:bg-zinc-600 before:rounded-full before:transition-transform before:ease-linear peer-checked:before:translate-x-full after:absolute after:content-lightModeIcon after:top-0.5 after:right-0.5 peer-checked:after:content-darkModeIcon peer-checked:after:left-0.5"
    >
    </label>
  </div>
</template>
