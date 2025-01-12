<script setup>
import Map from '../components/Map.vue'
import GoBack from '../components/GoBack.vue'
import Add from '../components/Add.vue'
import Filters from '../components/Filters.vue'
import CardFeed from '../components/CardFeed.vue'
import { gsap } from "gsap"; 
import { Draggable } from "gsap/Draggable";
import { onMounted } from 'vue'

gsap.registerPlugin(Draggable);

onMounted(() => {
    const mobile = window.innerWidth < 768
    if(mobile){
            Draggable.create(".draggable", {
            type: "y",
            handle: '.handle',
            zIndexBoost:false,
            allowNativeTouchScrolling: true,
            bounds: {
                minY: 0,
                maxY: 150,
            },
            dragResistance: 0.1,
        });
    }
})


</script>

<template>
<div class="h-[100dvh] p-6 overflow-hidden box-border">
    <!-- Overlaying elements -->
    <div class="absolute top-0 left-0 z-[1] h-fit p-2 md:p-6 flex flex-col gap-2 md:gap-6">
        <GoBack/>
        <Add/>
    </div>
    <div class="absolute draggable bottom-[190px] md:bottom-[30px] left-0 z-[1] w-[99vw] overflow-x-hidden">
        <Filters/>
    </div>
    <div class="absolute draggable handle ml-[-21px] md:ml-0 bottom-[10px] md:top-0 md:right-[15px] w-[99vw] md:w-fit md:h-[99dvh] z-[2] overflow-y-hidden md:overflow-y-auto md:overflow-x-hidden">
        <CardFeed/>
    </div>
    <!-- Map -->
    <div class="absolute top-0 left-0 w-full h-[100dvh] z-0 overflow-hidden">
        <Map/>
    </div>
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
