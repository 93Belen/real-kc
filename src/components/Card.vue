<script setup>
import Edit from './Edit.vue'
import Trash from './Trash.vue'

</script>

<template>
    <div class="w-[300px] h-[170px] font-extralight flex flex-col justify-around p-4 bg-layer2 rounded-xl font-body text-white text-[14px]">
        <h2 class="font-medium">Baba's Pantry</h2>
        <a class="underline decoration-primary-pink" href="">6913 W 123rd Terrace Apt 714, 6609, Overland Park</a>
        <p class="">Palestinian restaurant. Falafel, Shawarman... Try the french fries!</p>
        <div class="w-full flex justify-between gap-4">
            <p class="">Restaurant <span class="text-primary-green">|</span> Bakery</p>
            <div class="w-fit gap-2 flex">
                <Edit/>
                <Trash/>
            </div>
        </div>
    </div>
</template>