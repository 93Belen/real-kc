<script setup>
import FilterChip from './FilterChip.vue'
import { useFilterStore } from '../pinia/filterStore'
import { useDbStore } from '../pinia/dbStore'
import { useModalsStore } from '../pinia/modalsStore'
import { ref, onUpdated } from 'vue'

const modalsStore = useModalsStore()

const filterStore = useFilterStore()
const filters = filterStore.filters

const dbStore = useDbStore()
let content = ref({
    name: '',
    description: '',
    address: '',
    type: []
})
let missingName = ref(false)
let missingDescription = ref(false)
let missingAddress = ref(false)
let missingBusinessType = ref(false)




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

    if(content.value.type.length > 0 ){
        missingBusinessType.value = false
    }
}

const validateAndSave = () => {
    if(content.value.name.length > 0){
        missingName.value = false
        if(content.value.description.length > 0){
            missingDescription.value = false
            if(content.value.address.length > 0){
                missingAddress.value = false
                if(content.value.type.length > 0){
                    missingBusinessType.value = false
                    dbStore.updateAddForm(content.value)
                }
                else {
                    missingBusinessType.value = true
                }
            }
            else {
                missingAddress.value = true
            }
        }
        else {
            missingDescription.value = true
        }
    }
    else {
        missingName.value = true
    }
}

</script>

<template>
    <div class="h-[87dvh] w-screen font-body md:px-12 bg-layer3 rounded-t-xl md:rounded-b-xl md:w-[60vw] md:h-[80vh] md:m-auto md:bg-layer3/60 backdrop-blur-sm flex flex-col justify-around p-4">
        <input :class="missingName ? 'border-red' : 'border-white'" required v-model="content.name" class="border-b-2 border-white bg-transparent outline-none" maxlength="20" type="text" placeholder="Business name">
        <textarea :class="missingDescription ? 'border-red' : 'border-white'"  required v-model="content.description" class="border-b-2 border-white bg-transparent outline-none" maxlength="60" placeholder="description" name="" id="" cols="30" rows="1"></textarea>
        <input :class="missingAddress ? 'border-red' : 'border-white'"  required v-model="content.address" class="border-b-2 border-white bg-transparent outline-none" type="text" placeholder="Address">
        <div class="flex flex-col gap-2">
            <label :class="missingBusinessType ? 'text-red' : ''" class="text-white" for="type">Select max 2 business type</label>
            <div id="type" class="flex gap-6 min-w-full pr-[20px] overflow-x-scroll">
                <FilterChip @click="toggleType(filter.name)" v-for="(filter, index) in filters" v-bind:key="index" :filter="{name: filter.name, selected: content.type.includes(filter.name)}" />
            </div>
        </div>
        <button @click="validateAndSave" class="underline w-fit">Save</button>
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