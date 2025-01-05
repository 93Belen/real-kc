<script setup>
import { router } from '../router'
import {RouterLink} from 'vue-router'

const goToSearch = () => {
    router.push('/search')
}

</script>

<template>
<div class="w-full h-full">
<h1 class="text-white">Home</h1>
<button @click="goToSearch">Go To Search</button>
</div>
</template>

<style scoped>

</style>
