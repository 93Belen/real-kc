<script setup>
const props = defineProps(['filter'])
let { name } = props.filter
</script>

<template>
    <div class="bg-gradient-to-br box-border from-primary-pink to-primary-green w-[130px] max-w-[130px] min-w-[130px] py-[5px] h-[35px] text-center rounded-full">
        <div :class="props.filter.selected ? '':'bg-layer1'" class="boder-2 m-auto rounded-full w-[90%] h-full flex justify-center items-center">
            <p>{{name}}</p>
        </div>
    </div>
</template>