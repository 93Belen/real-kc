<script setup>
import { useDbStore } from '../pinia/dbStore'
import Edit from './Edit.vue'
import Trash from './Trash.vue'
import ShowLocation from './ShowLocation.vue'

const props = defineProps(['data'])
let { name, description, address, type, id, lat, lon } = props.data


</script>

<template>
    <div :id="id" class="w-[300px] h-[170px] font-extralight flex flex-col justify-around p-4 bg-layer2 rounded-xl font-body text-white text-[14px]">
        <h2 class="font-medium">{{name}}</h2>
       <a target="_blank" class="underline decoration-secondary-yellow underline-offset-1" :href="'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(address)">{{ address }}</a>
        <p class="">{{description}}</p>
        <div class="w-full flex justify-between gap-4">
            <p class="">{{type[0]}}<span v-if="type.length === 2" class="text-primary-green"> | </span><span v-if="type.length === 2">{{type[1]}}</span></p>
            <div class="w-fit gap-4 flex items-end">
                <!-- <Edit/> -->
                <Trash :businessId="id" />
                <ShowLocation :lat="lat" :lon="lon" :id="id" />
            </div>
        </div>
    </div>
</template>