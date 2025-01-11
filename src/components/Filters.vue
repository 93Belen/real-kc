<script setup>
import FilterChip from './FilterChip.vue'
import { useFilterStore } from '../pinia/filterStore'
const filterStore = useFilterStore()
const filters = filterStore.filters
</script>

<template>
    <div class="flex gap-6 min-w-full pr-[20px] md:pr-[400px] overflow-x-scroll">
        <div class="w-[20px] md:w-[50px]"></div>
        <FilterChip @click="filterStore.select(filter.name)" v-for="(filter, index) in filters" v-bind:key="index" :filter="filter" />
    </div>
</template>

<style scoped>
</style>