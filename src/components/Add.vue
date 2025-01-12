<script setup>
import { useModalsStore } from '../pinia/modalsStore'
const modalsStore = useModalsStore()

</script>

<template>
    <div :class="modalsStore.addForm ? 'rotate-[45deg]' : ''" class="w-[42px] h-[42px] duration-[1s] bg-transparent">
        <svg width="100%" height="100%" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.0002 17.333V34.6663M17.3335 25.9997H34.6668M47.6668 25.9997C47.6668 37.9658 37.9663 47.6663 26.0002 47.6663C14.034 47.6663 4.3335 37.9658 4.3335 25.9997C4.3335 14.0335 14.034 4.33301 26.0002 4.33301C37.9663 4.33301 47.6668 14.0335 47.6668 25.9997Z" stroke="url(#paint0_linear_40_18304)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <defs>
        <linearGradient id="paint0_linear_40_18304" x1="4.3335" y1="10.1251" x2="49.6462" y2="45.102" gradientUnits="userSpaceOnUse">
        <stop :stop-color="modalsStore.addForm ? '#D33B3E' : '#42B8A2'"/>
        <stop offset="1" :stop-color="modalsStore.addForm ? '#FFD700' : '#DC44D9'"/>
        </linearGradient>
        </defs>
        </svg>
    </div>
</template>

<style scoped>

</style>