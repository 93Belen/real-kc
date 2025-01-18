<script setup>
import Hero from './Hero.vue'
import Heart from './Heart.vue'
</script>


<template>
    <div class="w-full h-full flex flex-col md:flex-row justify-between p-6 text-lg md:items-end">
        <div class="flex flex-col gap-6 md:w-[30vw]">
            <a href="" class="hover:underline underline-offset-1 hover:underline-offset-4 hover:text-primary-green duration-1000 decoration-primary-white hover:decoration-primary-pink">Donate</a>
            <a href="" class="hover:underline underline-offset-1 hover:underline-offset-4 hover:text-primary-green duration-1000 decoration-primary-white hover:decoration-primary-pink">Contact</a>
            <a href="" class="hover:underline underline-offset-1 hover:underline-offset-4 hover:text-primary-green duration-1000 decoration-primary-white hover:decoration-primary-pink">Report a bug</a>
        </div>
        <div class="hidden md:block h-full w-auto">
            <Hero :inFooter="true" />
        </div>
        <div class="self-end flex items-end justify-end md:w-[30vw]">
            <a class="hover:underline underline-offset-1 hover:underline-offset-4 hover:text-primary-green duration-1000 decoration-white hover:decoration-primary-pink flex gap-2 justify-center items-center text-sm italic font-thin" target="_blank" href="https://clever-raindrop-40359f.netlify.app/">Made with <span><Heart/></span> by Belencita</a>
        </div>
    </div>
</template>