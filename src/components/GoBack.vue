<script setup>
import { router } from '../router'
import { useModalsStore } from '../pinia/modalsStore'
const modalsStore = useModalsStore()

const goToHome = () => {
    router.push('/')
}
</script>

<template>
    <div :class="modalsStore.addForm ? 'w-0 h-0 opacity-0' : 'w-[40px] h-[40px] opacity-1'" @click="goToHome" class="duration-[1s] m-auto">
        <svg width="100%" height="100%" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="22.5" stroke="#42B8A2" stroke-width="5"/>
        <path d="M30.0317 15.5613L16.4869 25.0325C15.9021 25.4415 15.9214 26.3137 16.5238 26.6962L30.476 35.5564" stroke="#42B8A2" stroke-width="4" stroke-linecap="round"/>
        </svg>
    </div>
</template>

<style scoped>

</style>