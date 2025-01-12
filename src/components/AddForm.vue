<script setup>
import FilterChip from './FilterChip.vue'
import { useFilterStore } from '../pinia/filterStore'
import { useDbStore } from '../pinia/dbStore'
import { ref, onUpdated } from 'vue'

const filterStore = useFilterStore()
const filters = filterStore.filters

const dbStore = useDbStore()
let content = ref({
    name: '',
    description: '',
    address: '',
    type: []
})
const toggleType = (selectedType) => {
    if(content.value.type.includes(selectedType)){
        const index = content.value.type.indexOf(selectedType)
        content.value.type.splice(index, 1)
    }
    else {
        if(content.value.type.length < 2){
            content.value.type.push(selectedType)
        }
    }
}





</script>

<template>
    <div class="h-[87dvh] w-screen font-body md:px-12 bg-layer3 rounded-t-xl md:rounded-b-xl md:w-[60vw] md:h-[80vh] md:m-auto md:bg-layer3/60 backdrop-blur-sm flex flex-col justify-around p-4">
        <input v-model="content.name" class="border-b-2 border-white bg-transparent outline-none" maxlength="20" type="text" placeholder="Business name">
        <textarea v-model="content.description" class="border-b-2 border-white bg-transparent outline-none" maxlength="60" placeholder="description" name="" id="" cols="30" rows="1"></textarea>
        <input v-model="content.address" class="border-b-2 border-white bg-transparent outline-none" type="text" placeholder="Address">
        <div class="flex gap-6 min-w-full pr-[20px] overflow-x-scroll">
            <FilterChip @click="toggleType(filter.name)" v-for="(filter, index) in filters" v-bind:key="index" :filter="{name: filter.name, selected: content.type.includes(filter.name)}" />
        </div>
        <button @click="dbStore.updateAddForm(content)" class="underline">Save</button>
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