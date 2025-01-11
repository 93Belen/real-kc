<script setup>
const props = defineProps(['name'])
</script>

<template>
    <div class="bg-gradient-to-br from-primary-pink to-primary-green p-[5px] w-[150px] h-[40px] text-center rounded-full">
        <div class="bg-layer1 boder-2 rounded-full w-[140px] h-full flex justify-center items-center">
            <p>{{props.name}}</p>
        </div>
    </div>
</template>