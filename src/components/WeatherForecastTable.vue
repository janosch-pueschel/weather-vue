<script setup lang="ts">
defineProps(['weatherForecast'])
</script>

<template>
    <div v-for="weather in weatherForecast">
        <p>{{ weather.date }}</p>
        <p>{{ weather.temp_c }}</p>
        <p>{{ weather.temp_f}}</p>
        <p>{{ weather.icon }}</p>
    </div>
</template>
