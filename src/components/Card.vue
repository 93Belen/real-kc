<script setup>
import Edit from './Edit.vue'
import Trash from './Trash.vue'

</script>

<template>
    <div class="w-[300px] h-[170px] flex flex-col justify-around p-4 bg-layer2 rounded-xl font-body text-white text-[14px]">
        <h2 class="font-bold">Baba's Pantry</h2>
        <a href="">6913 W 123rd Terrace Apt 714, 6609, Overland Park</a>
        <p>Palestinian restaurant. Falafel, Shawarman... Try the french fries!</p>
        <div class="w-full flex justify-between gap-4">
            <p>Restaurant <span>|</span> Bakery</p>
            <div class="w-fit gap-2 flex">
                <Edit/>
                <Trash/>
            </div>
        </div>
    </div>
</template>