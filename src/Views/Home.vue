<script setup>
import GoToSearch from '../components/GoToSearch.vue'

</script>

<template>
<div class="w-full min-h-screen bg-base bg-kc-map bg-center bg-contain p-4 flex flex-col gap-4">
    <div class="w-full flex justify-between">
        <GoToSearch/>
        <GoToSearch/>
    </div>
    <div class="w-full h-[70vh] flex justify-center items-center">
        <div class="w-[97%] min-h-fit max-h-[300px] md:max-h-[600px] h-[40dvh] md:p-0 md:w-[600px] md:h-[400px] bg-layer2/60 rounded-xl backdrop-blur-sm text-center flex flex-col justify-center items-center">
            <div class="bg-gradient-to-r from-secondary-red to-secondary-yellow font-black w-fit bg-clip-text text-transparent text-[50px] md:text-[96px] font-h1">
                <p class="">Search</p>
                <h1 class="mt-[-30px] md:mt-[-65px]">Real KC</h1>
            </div>
            <button class="italic text-[20px] md:text-[32px] font-body font-bold bg-gradient-to-r from-primary-green to-primary-pink w-[70%] md:w-[50%] flex justify-stretch p-2 rounded-full"><span class="shadow-inner shadow-sm w-full h-full rounded-full">Search</span></button>
        </div>
    </div>
</div>
</template>

<style scoped>

</style>