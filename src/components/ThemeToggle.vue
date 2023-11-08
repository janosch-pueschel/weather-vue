<script setup lang="ts"></script>

<template>
  <div>
    <span></span>
    <input type="checkbox" id="check" class="hidden peer" />
    <label
      for="check"
      class="bg-zinc-900 peer-checked:bg-zinc-100 inline-block w-11.5 h-6 rounded-full relative cursor-pointer before:z-10 before:absolute before:top-px before:left-px before:w-5.5 before:h-5.5 before:bg-zinc-700 before:rounded-full before:transition-transform before:ease-linear peer-checked:before:translate-x-full after:absolute after:content-lightModeIcon after:top-0.5 after:right-0.5 peer-checked:after:content-darkModeIcon peer-checked:after:left-0.5"
    >
    </label>
  </div>
</template>
