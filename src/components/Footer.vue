<script setup>
import Hero from './Hero.vue'
import Heart from './Heart.vue'
</script>


<template>
    <div class="w-full h-full flex flex-col md:flex-row justify-between p-6 text-lg md:items-end">
        <div class="flex flex-col gap-6 md:w-[30vw]">
            <p>Donate</p>
            <p>Contact</p>
            <p>Report a bug</p>
        </div>
        <div class="hidden md:block h-full w-auto">
            <Hero :inFooter="true" />
        </div>
        <div class="self-end flex items-end justify-end md:w-[30vw]">
            <p class="flex gap-2 justify-center items-center text-sm italic font-thin">Made with <span><Heart/></span> by <a target="_blank" href="https://clever-raindrop-40359f.netlify.app/">Belencita</a></p>
        </div>
    </div>
</template>