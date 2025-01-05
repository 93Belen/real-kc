<script setup>
import { router } from '../router'
import {RouterLink} from 'vue-router'
import Map from '../components/Map.vue'

const goToHome = () => {
    router.push('/')
}

</script>

<template>
<div class="h-[100dvh] p-6 overflow-hidden box-border">
    <div class="absolute top-0 left-0 z-[1] h-full p-6 overflow-hidden">
    <h1 class="text-white">Search</h1>
    <button @click="goToHome">Go back home</button>
</div>
<div class="absolute top-0 left-0 w-full h-[100dvh] z-0 overflow-hidden">
    <Map/>
</div>
</div>
</template>

<style scoped>

</style>
