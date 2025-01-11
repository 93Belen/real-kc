<script setup>
import Map from '../components/Map.vue'
import GoBack from '../components/GoBack.vue'
import Add from '../components/Add.vue'
import Filters from '../components/Filters.vue'

</script>

<template>
<div class="h-[100dvh] p-6 overflow-hidden box-border">
    <!-- Overlaying elements -->
    <div class="absolute top-0 left-0 z-[1] h-fit p-6 flex flex-col gap-6">
        <GoBack/>
        <Add/>
    </div>
    <div class="absolute bottom-[50px] left-0 z-[1] w-[99vw] overflow-x-hidden">
        <Filters/>
    </div>
    <!-- Map -->
    <div class="absolute top-0 left-0 w-full h-[100dvh] z-0 overflow-hidden">
        <Map/>
    </div>
</div>
</template>

<style scoped>
</style>
