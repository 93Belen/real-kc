<script setup>
import Card from './Card.vue'
import { useDbStore } from '../pinia/dbStore'
const dbStore = useDbStore()

</script>

<template>
    <div class="flex md:flex-col gap-6 min-w-full w-fit md:min-h-full md:h-fit overflow-x-scroll md:overflow-y-scroll md:min-w-none md:pb-20">
        <div class="md:h-[5px] w-[1px]"></div>
        <Card v-bind:key="business.id" v-for="business in dbStore.businesses" :data="business" />
        <div class="md:hidden w-[1px]"></div>
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