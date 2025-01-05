<script setup>
import { router } from '../router'
import {RouterLink} from 'vue-router'
import Map from '../components/Map.vue'

const goToHome = () => {
    router.push('/')
}

</script>

<template>
<div class="">
    <h1 class="text-white">Search</h1>
    <button @click="goToHome">Go back home</button>
</div>
<div>
    <Map/>
</div>
</template>

<style scoped>

</style>
