<script setup>
const props = defineProps(['filter'])
let { name } = props.filter
</script>

<template>
    <div class="bg-gradient-to-br from-primary-pink to-primary-green p-[5px] w-[130px] h-[35px] text-center rounded-full">
        <div :class="props.filter.selected ? '':'bg-layer1'" class="boder-2 rounded-full w-[100px] h-full flex justify-center items-center">
            <p>{{name}}</p>
        </div>
    </div>
</template>