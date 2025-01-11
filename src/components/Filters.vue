<script setup>
import FilterChip from './FilterChip.vue'
import { useFilterStore } from '../pinia/filterStore'
const filterStore = useFilterStore()
const filters = filterStore.filters
</script>

<template>
    <div class="flex gap-6 min-w-full overflow-x-scroll">
        <div class="w-[20px] md:w-[50px]"></div>
        <FilterChip @click="filterStore.select(filter.name)" v-for="(filter, index) in filters" v-bind:key="index" :filter="filter" />
    </div>
</template>

<style scoped>
/* Hide page scrollbar */
* {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

*::-webkit-scrollbar,
*::-webkit-scrollbar-button {
  display: none; /* Chrome */
}
/* End hide page scrollbar */
</style>