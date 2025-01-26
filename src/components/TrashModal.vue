<script setup>
import { useModalsStore} from '../pinia/modalsStore'
import { useDbStore } from '../pinia/dbStore'

const dbStore = useDbStore()
const modalsStore = useModalsStore()
const deleteAndClose = () => {
    dbStore.deleteBusiness()
    modalsStore.toggleTrashModal()
}

</script>

<template>
    <div v-if="modalsStore.trashModal" class="h-[87dvh] flex flex-col left-0 w-screen font-body md:px-12 bg-layer3/70 rounded-t-xl md:rounded-b-xl md:w-[50vw] md:h-[40vh] md:m-auto md:bg-layer3/60 backdrop-blur-sm flex flex-col justify-around p-4">
    <h2 class="text-lg font-medium">Are you sure you want to delete this business?</h2>
    <p class="text-md font-light">Keep in mind that all the information in this site is crowd-source. Please, be respectful and responsible, delete this business only if it doesn't exists, it isn't a small locally owned commerce, or you are going to add it with updated information</p>
    <div class="flex justify-around">
        <button @click="deleteAndClose" class="border-4 border-red bg-layer2 rounded-full w-[100px] md:w-[120px] h-[35px]">Delete</button>
        <button @click="modalsStore.toggleTrashModal(null)" class="border-4 border-primary-green bg-layer2 rounded-full w-[100px] md:w-[120px] h-[35px]">Cancel</button>
    </div>  
    </div>
</template>