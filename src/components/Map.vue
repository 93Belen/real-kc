<script setup>
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import { onMounted } from "vue";

onMounted(() => {
  const map = L.map('map-div').setView([39.0997, -94.5786], 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
})

</script>

<template>
    <div id="map-div" class="w-screen h-screen bg-base grayscale invert contrast-[.70] saturate-0"></div>
</template>

<style scoped>

</style>