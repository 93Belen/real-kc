<script setup>
import FilterChip from './FilterChip.vue'
import { useFilterStore } from '../pinia/filterStore'
import { useDbStore } from '../pinia/dbStore'
const dbStore = useDbStore()
const filterStore = useFilterStore()
const filters = filterStore.filters

const select = (filter) => {
    filterStore.select(filter.name)
    filterStore.deselectAll(filter.name)
    if(filter.selected){
        dbStore.setDisplay(filter.name)
    }
    else {
        dbStore.setDisplay('all')
    }
}

</script>

<template>
    <div class="flex gap-6 min-w-full pr-[20px] md:pr-[400px] overflow-x-scroll">
        <div class="w-[20px] md:w-[50px]"></div>
        <FilterChip @click="select(filter)" v-for="(filter, index) in filters" v-bind:key="index" :filter="filter" />
    </div>
</template>

<style scoped>
</style>