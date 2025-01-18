<script setup>
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import { onMounted } from "vue";
import { useDbStore } from '../pinia/dbStore'

onMounted(() => {
    const dbStore = useDbStore()
    const map = L.map('map-div', { 
        zoomControl: false,
    }).setView([39.0997, -94.5786], 11);

    // Define bounds for Kansas City
    const corner1 = L.latLng(38.837, -94.325); // Southwest corner
    const corner2 = L.latLng(39.198, -94.896); // Northeast corner
    const bounds = L.latLngBounds(corner1, corner2);

    map.setMaxBounds(bounds)


    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 20,
    minZoom: 10,
    className: 'grayscale invert contrast-[.7] saturate-[0]'
    }).addTo(map);

     // Define the custom pin icon
    const customPinIcon = L.icon({
        iconUrl: './pin.svg',
        iconSize: [30, 30],
        className: 'grayscale-0 invert-0 contrast-100 saturate-100'
    });

  // Add markers for each business
  dbStore.businesses.forEach((business) => {
    L.marker([business.lat, business.lon], { icon: customPinIcon }).addTo(map);
  });

})

</script>

<template>
    <div id="map-div" class="w-screen h-screen bg-base"></div>
</template>

<style scoped>

</style>