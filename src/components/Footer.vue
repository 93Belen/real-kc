<script setup>
import Hero from './Hero.vue'
</script>


<template>
    <div class="w-full h-full flex flex-col md:flex-row justify-between p-6 text-lg md:items-end">
        <div class="flex flex-col gap-6">
            <p>Report a bug</p>
            <p>Donate</p>
            <p>Contact</p>
        </div>
        <div class="hidden md:block h-full w-auto">
            <Hero :inFooter="true" />
        </div>
        <div class="self-end">
            <p>Search Real KC</p>
        </div>
    </div>
</template>