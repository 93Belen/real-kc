<script setup>
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import { onMounted } from "vue";

onMounted(() => {
    const map = L.map('map-div', { 
        zoomControl: false
    }).setView([39.0997, -94.5786], 11);

    // Define bounds for Kansas City
    const corner1 = L.latLng(38.837, -94.325); // Southwest corner
    const corner2 = L.latLng(39.198, -94.896); // Northeast corner
    const bounds = L.latLngBounds(corner1, corner2);

    map.setMaxBounds(bounds)

    // Open Street map
    // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     maxZoom: 17,
    //     minZoom: 11,
    //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    //     }).addTo(map);

    //  Simpler Tile style
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 17,
    minZoom: 10,
    }).addTo(map);


})

</script>

<template>
    <div id="map-div" class="w-screen h-screen bg-base grayscale invert contrast-[.7] saturate-[0]"></div>
</template>

<style scoped>

</style>