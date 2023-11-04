<script setup lang="ts">
const props = defineProps(['weather', 'temperatureUnitCelsius'])

const tempMarkerPosition = (minTemp: number, maxTemp: number, avgTemp: number) => {
  const totalTempRange = maxTemp - minTemp
  const averageTempRange = avgTemp - minTemp
  const tempMarkerPosition = (100 / totalTempRange) * averageTempRange + '%'
  console.log(tempMarkerPosition)
  return tempMarkerPosition
}

const tempColorGradient = (minTemp: number, maxTemp: number) => {
  let tempColorGradient = []
  for (let i = minTemp; i <= maxTemp; i++) {
    switch (true) {
      case i < 0:
        tempColorGradient.push('#2563eb')
        break
      case i < 16:
        tempColorGradient.push('#22d3ee')
        break
      case i < 21:
        tempColorGradient.push('#34d399')
        break
      case i < 26:
        tempColorGradient.push('#fde047')
        break
      case i < 31:
        tempColorGradient.push('#fb923c')
        break
      case i > 30:
        tempColorGradient.push('#ef4444')
        break
    }
  }
  return `linear-gradient(to right, ${tempColorGradient.toString()})`
}
</script>

<template>
  <div
    class="h-2 w-20 pr-2 rounded"
    :style="{
      backgroundImage: tempColorGradient(props.weather.mintemp_c, props.weather.maxtemp_c)
    }"
  >
    <div
      class="h-0 w-0 p-1 rounded bg-neutral-600 relative"
      :style="{
        left: tempMarkerPosition(
          temperatureUnitCelsius ? props.weather.mintemp_c : props.weather.mintemp_f,
          temperatureUnitCelsius ? props.weather.maxtemp_c : props.weather.maxtemp_f,
          temperatureUnitCelsius ? props.weather.avgtemp_c : props.weather.avgtemp_f
        )
      }"
    ></div>
  </div>
</template>
