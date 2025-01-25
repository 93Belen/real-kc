<script setup>
import Card from './Card.vue'
import { useDbStore } from '../pinia/dbStore'
import { useMapStore } from '../pinia/mapStore'
import { watch } from 'vue'

const mapStore = useMapStore()
const dbStore = useDbStore()



watch(() => mapStore.cardSelected, (id) => {
  const card = document.getElementById(id)
  if(card){
  card.scrollIntoView({ behavior: 'smooth', block: 'center' })

  const prevPin = document.getElementsByClassName(`hue-rotate-[-100deg]`);
    if (prevPin.length > 0) {
        prevPin[0].classList.remove('filter', 'hue-rotate-[-100deg]', 'saturate-[2]', 'brightness-[1.3]');
    }

  const pin = document.getElementsByClassName(`pin-id-${id}`);
  pin[0].classList.add('filter', 'hue-rotate-[-100deg]', 'saturate-[2]', 'brightness-[1.3]');
  }
})

</script>

<template>
    <div class="flex md:flex-col gap-6 min-w-full w-fit md:min-h-full md:h-fit overflow-x-scroll md:overflow-y-scroll md:min-w-none md:pb-20">
        <div class="md:h-[5px] w-[1px]"></div>
        <Card v-bind:key="business.id" v-for="business in dbStore.display" :data="business" />
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