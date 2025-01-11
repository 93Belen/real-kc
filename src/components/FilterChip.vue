<script setup>
const props = defineProps(['filter'])
let { name } = props.filter
</script>

<template>
    <div class="bg-gradient-to-br from-primary-pink to-primary-green p-[5px] w-[150px] h-[40px] text-center rounded-full">
        <div :class="props.filter.selected ? '':'bg-layer1'" class="boder-2 rounded-full w-[140px] h-full flex justify-center items-center">
            <p>{{name}}</p>
        </div>
    </div>
</template>