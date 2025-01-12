<script setup>
import { router } from '../router'
import { useModalsStore } from '../pinia/modalsStore'
const modalsStore = useModalsStore()

const goToHome = () => {
    router.push('/')
}
</script>

<template>
    <div :class="modalsStore.addForm ? 'w-0 h-0 opacity-0' : 'w-[40px] h-[40px] opacity-1'" @click="goToHome" class="duration-[1s]">
        <svg width="100%" height="100%" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="22.5" stroke="url(#paint0_linear_40_18301)" stroke-width="5"/>
        <path d="M30.0315 15.5613L16.4866 25.0325C15.9018 25.4415 15.9212 26.3137 16.5236 26.6962L30.4758 35.5564" stroke="url(#paint1_linear_40_18301)" stroke-width="4" stroke-linecap="round"/>
        <defs>
        <linearGradient id="paint0_linear_40_18301" x1="6.75995e-07" y1="6.68317" x2="52.2839" y2="47.0412" gradientUnits="userSpaceOnUse">
        <stop stop-color="#42B8A2"/>
        <stop offset="1" stop-color="#DC44D9"/>
        </linearGradient>
        <linearGradient id="paint1_linear_40_18301" x1="17.4839" y1="35.8451" x2="33.8001" y2="19.2715" gradientUnits="userSpaceOnUse">
        <stop stop-color="#42B8A2"/>
        <stop offset="1" stop-color="#DC44D9"/>
        </linearGradient>
        </defs>
        </svg>
    </div>
</template>

<style scoped>

</style>