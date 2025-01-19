<script setup>
const props = defineProps(['filter'])
let { name } = props.filter
</script>

<template>
    <div class="cursor-pointer bg-primary-green box-border w-[130px] max-w-[130px] min-w-[130px] py-[5px] h-[35px] text-center rounded-full">
        <div :class="props.filter.selected ? '':'bg-layer1'" class="boder-2 duration-[1s] m-auto rounded-full w-[90%] h-full flex justify-center items-center">
            <p>{{name}}</p>
        </div>
    </div>
</template>