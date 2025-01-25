<script setup>
import FilterChip from './FilterChip.vue'
import { useFilterStore } from '../pinia/filterStore'
import { useDbStore } from '../pinia/dbStore'
import { useModalsStore } from '../pinia/modalsStore'
import { useMapStore } from '../pinia/mapStore'
import { ref } from 'vue'
import { debounce } from 'lodash'
import VueSelect from "vue3-select-component";

const modalsStore = useModalsStore()
const filterStore = useFilterStore()
const dbStore = useDbStore()
const mapStore = useMapStore()


// For checkboxes
const filters = filterStore.filters
// Searchin
const searching = ref('')
// For DB
const content = ref({
    name: '',
    description: '',
    address: '',
    type: [],
    lat: null,
    lon: null
})
//  For validation
const missingName = ref(false)
const missingDescription = ref(false)
const missingAddress = ref(false)
const missingBusinessType = ref(false)

const debouncedFetchSuggestions = debounce((address) => {
        // mapStore.clearSuggestions()
        mapStore.fetchSuggestions(address)
}, 1000)


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

// Form Validation and Send to Pinia - send to DB
const validateAndSave = () => {
    if(content.value.name.length > 0){
        missingName.value = false
        if(content.value.description.length > 0){
            missingDescription.value = false
            if(content.value.address.length > 0){
                missingAddress.value = false
                if(content.value.type.length > 0){
                    missingBusinessType.value = false
                    dbStore.checkForDuplicated(content.value)
                    dbStore.updateAddForm(content.value)
                    content.value = {
                        name: '',
                        description: '',
                        address: '',
                        type: []
                    }
                    mapStore.clearSuggestions()
                    modalsStore.toggleAddForm()
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
        <input :class="missingName ? 'border-red' : 'border-white'" required v-model="content.name" class="border-b-2 bg-transparent outline-none" maxlength="35" type="text" placeholder="Business name">
        <textarea :class="missingDescription ? 'border-red' : 'border-white'"  required v-model="content.description" class="border-b-2 bg-transparent outline-none" maxlength="70" placeholder="description" name="" id="" cols="30" rows="2"></textarea>
        <div class="flex flex-col gap-2">
            <label for="address">Search Address</label>
            <VueSelect
                id="address"
                placeholder=""
                v-model="searching"
                @search="(search) => {
                    const normalizedSearch = search.toLowerCase().trim().replace(/,+/g, ' ');
                    debouncedFetchSuggestions(normalizedSearch)
                }"
                :options="[{text: content.address, lat: null, lon: null}]"
                :displayedOptions="mapStore.suggestions"
                :get-option-label="(option) => `${option.text}`"
                @option-selected="(option) => {
                    content.address = option.text;
                    content.lat = option.lat;
                    content.lon = option.lon;
                }"
                @option-deselected="(option) => {
                    content.address = '';
                    content.lat = null;
                    content.lon = null;
                }"
            />
        </div>
        <div class="flex flex-col gap-2">
            <label :class="missingBusinessType ? 'text-red' : 'text-white'" class="" for="type">Select max 2 business type</label>
            <div id="type" class="flex gap-6 min-w-full pr-[20px] overflow-x-scroll">
                <FilterChip @click="toggleType(filter.name)" v-for="(filter, index) in filters" v-bind:key="index" :filter="{name: filter.name, selected: content.type.includes(filter.name)}" />
            </div>
        </div>
        <button @touchstart="validateAndSave" @click="validateAndSave" class="underline w-fit">Save</button>
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