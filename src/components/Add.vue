<script setup>
import { useModalsStore } from '../pinia/modalsStore'
const modalsStore = useModalsStore()

</script>

<template>
    <div :class="modalsStore.addForm ? 'rotate-[45deg]' : ''" class="w-[42px] h-[42px] duration-[1s] bg-transparent">
        <svg width="100%" height="100%" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.9999 17.3335V34.6668M17.3333 26.0002H34.6666M47.6666 26.0002C47.6666 37.9663 37.9661 47.6668 25.9999 47.6668C14.0337 47.6668 4.33325 37.9663 4.33325 26.0002C4.33325 14.034 14.0337 4.3335 25.9999 4.3335C37.9661 4.3335 47.6666 14.034 47.6666 26.0002Z" stroke="#42B8A2" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
</template>

<style scoped>

</style>