<script setup>
import GoToSearch from '../components/GoToSearch.vue'
import Pin from '../components/Pin.vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from 'vue';


gsap.registerPlugin(ScrollTrigger);



onMounted(() => {
    gsap.to('.jump', {
        y: -40,
        scrollTrigger: {
            trigger: "#card-div",
            start: "top center",
        }
    });
})

</script>

<template>
<div class="w-full h-fit min-h-screen bg-base bg-kc-map bg-center bg-contain p-4 flex flex-col gap-4 pb-[200px]">
    <div class="w-full flex justify-end">
        <GoToSearch/>
    </div>
    <div class="w-full h-[90dvh] flex justify-center items-center">
        <div class="w-[97%] min-h-fit max-h-[300px] md:max-h-[600px] h-[40vh] md:p-0 md:w-[600px] md:h-[400px] bg-layer2/60 rounded-xl backdrop-blur-sm text-center flex flex-col justify-center items-center">
            <div class="bg-gradient-to-r from-secondary-red to-secondary-yellow font-black w-fit bg-clip-text text-transparent text-[50px] md:text-[96px] font-h1">
                <p class="">Search</p>
                <h1 class="mt-[-30px] md:mt-[-65px]">Real KC</h1>
            </div>
            <button class="italic text-[20px] md:text-[32px] font-body font-bold bg-gradient-to-r from-primary-green to-primary-pink w-[70%] md:w-[50%] flex justify-stretch p-2 rounded-full"><span class="shadow-inner shadow-sm w-full h-full rounded-full">Search</span></button>
        </div>
    </div>
    <div id="card-div" class="w-full h-fit flex md:flex-row gap-12 justify-center items-center flex-col">
        <div class="w-[90%] h-fit md:w-full flex gap-2 flex-col justify-center items-center">
            <div class="jump md:duration-[0.5s]"><Pin/></div>
            <div class="bg-gradient-to-br from-primary-green/60 to-primary-pink/60 w-full max-w-[400px] h-[500px] rounded-xl backdrop-blur-sm">

            </div>
        </div>
        <div class="w-[90%] h-fit md:mt-[100px] md:w-full flex gap-2 flex-col justify-center items-center">
            <div class="jump md:delay-[0.4s] md:duration-[0.5s]"><Pin/></div>
            <div class="bg-gradient-to-br from-primary-green/60 to-primary-pink/60 w-full max-w-[400px] h-[500px] rounded-xl backdrop-blur-sm">

            </div>
        </div>
        <div class="w-[90%] h-fit md:w-full flex gap-2 flex-col justify-center items-center">
            <div class="jump md:delay-[0.2s] md:duration-[0.5s]"><Pin/></div>
            <div class="bg-gradient-to-br from-primary-green/60 to-primary-pink/60 w-full max-w-[400px] h-[500px] rounded-xl backdrop-blur-sm">

            </div>
        </div>
    </div>
</div>
</template>

<style scoped>

</style>