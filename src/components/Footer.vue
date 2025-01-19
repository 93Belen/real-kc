<script setup>
import Hero from './Hero.vue'
import Heart from './Heart.vue'
import { router } from '../router'
import {RouterLink} from 'vue-router'

const goToSearch = () => {
    router.push('/search')
}
</script>


<template>
    <div class="w-full h-full flex flex-col md:flex-row justify-between p-6 md:p-8 text-lg gap-6 md:gap-0 md:items-end">
        <div class="flex text-md font-thin flex-col gap-4 md:w-[30vw] md:self-end">
            <button @click="goToSearch" class="cursor-pointer w-fit hover:underline underline-offset-1 hover:underline-offset-4 hover:text-primary-green duration-1000 decoration-primary-white hover:decoration-secondary-yellow">Search</button>
            <a href="" class="w-fit hover:underline underline-offset-1 hover:underline-offset-4 hover:text-primary-green duration-1000 decoration-primary-white hover:decoration-secondary-yellow">Report a bug</a>
            <p class="w-fit hover:underline underline-offset-1 hover:underline-offset-4 hover:text-primary-green duration-1000 decoration-primary-white hover:decoration-secondary-yellow">Search Real KC | 2025</p>
        </div>
        <div class="hidden md:block h-full w-auto">
            <Hero :inFooter="true" />
        </div>
        <div class="md:self-end flex md:items-end md:justify-end md:w-[30vw]">
            <a class="hover:underline underline-offset-1 hover:underline-offset-4 hover:text-primary-green duration-1000 decoration-white hover:decoration-secondary-yellow flex gap-2 justify-center items-center text-sm italic font-thin" target="_blank" href="https://clever-raindrop-40359f.netlify.app/">Made with <span><Heart/></span> by Belencita</a>
        </div>
    </div>
</template>