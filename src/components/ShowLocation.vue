<script setup>
import { ref } from 'vue'
import { useMapStore } from '../pinia/mapStore'
import { watch } from 'vue'

const mapStore = useMapStore()
const props = defineProps(['id'])
let id = props.id


const getPin = () => {
    const prevPin = document.getElementsByClassName(`hue-rotate-[-100deg]`);
    if (prevPin.length > 0) {
        prevPin[0].classList.remove('filter', 'hue-rotate-[-100deg]', 'saturate-[2]', 'brightness-[1.3]');
    }

    const pin = document.getElementsByClassName(`pin-id-${id}`);
    mapStore.selectCard(id)
    pin[0].classList.add('filter', 'hue-rotate-[-100deg]', 'saturate-[2]', 'brightness-[1.3]');
    mapStore.selectPin(id)
};


</script>

<template>
    <div :id="'show-location-'+id" @click="getPin" class="w-[20px] h-[20px] active:animate-ping">
        <svg width="100%" height="100%" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M38 20C38 34 20 46 20 46C20 46 2 34 2 20C2 15.2261 3.89642 10.6477 7.27208 7.27208C10.6477 3.89642 15.2261 2 20 2C24.7739 2 29.3523 3.89642 32.7279 7.27208C36.1036 10.6477 38 15.2261 38 20Z" stroke="#42B8A2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 26C23.3137 26 26 23.3137 26 20C26 16.6863 23.3137 14 20 14C16.6863 14 14 16.6863 14 20C14 23.3137 16.6863 26 20 26Z" stroke="#42B8A2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
</template>