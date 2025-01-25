<script setup>
import GoToSearch from '../components/GoToSearch.vue'
import Pin from '../components/Pin.vue'
import Hero from '../components/Hero.vue'
import Footer from '../components/Footer.vue'
import Beta from '../components/Beta.vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref } from 'vue';
import { router } from '../router'
import {RouterLink} from 'vue-router'

const goToSearch = () => {
    router.push('/search')
}


let animate = ref(false)
gsap.registerPlugin(ScrollTrigger);


onMounted(() => {
    const jumpElements = document.querySelectorAll('.jump');

    // Loop through each element so it works in mobile too - when elements reach the view at different times
    jumpElements.forEach((element) => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: "top center",
                onEnter: () => animate.value = true,
                onLeaveBack: () => animate.value = false,
                onEnterBack: () => animate.value = true,
                onLeave: () => animate.value = false
            }
        });
    });
})



</script>

<template>
<div class="w-full h-fit min-h-screen bg-base bg-kc-map bg-center bg-contain p-4 flex flex-col gap-4">
    <div class="w-full flex justify-end cursor-pointer">
        <GoToSearch/>
    </div>
    <div class="md:w-[500px] md:h-[500px] h-[70dvh] md:h-[90dvh] m-auto flex flex-col justify-center items-center">
        <Hero :inFooter="false"/>
        <div class="w-[200px] h-[50px] relative md:left-[200px] top-[-10dvh] left-[30vw] md:top-[-20vh]"><Beta/></div>
        <div class="w-fit h-[40vh]">
        <button 
        @click="goToSearch" 
        class="m-auto w-[150px] h-[40px] rounded-full text-white font-bold italic bg-secondary-yellow/70 duration-[1s] hover:bg-layer1 hover:shadow-[0px_0px_30px_#FFD700]"
        >
        <p class="w-[140px] h-[32px] flex justify-center items-center bg-layer2 rounded-full m-auto">
        Search
        </p>
        </button>
        </div>
    </div>
    <div class="w-full h-fit flex md:flex-row gap-12 justify-center items-center flex-col font-body pb-[70px] md:pb-[200px]">
        <div class="w-full h-fit flex gap-2 flex-col justify-center items-center">
            <div class="jump" :class="animate ? 'animate-bounce' : ''"><Pin/></div>
            <div class="bg-layer2/60 w-full max-w-[400px] rounded-xl backdrop-blur-sm p-6 gap-4 flex flex-col">
                <h2 class="text-3xl font-bold text-primary-green font-secondary">What</h2>
                <p class="text-md leading-8">
                <span class="font-bold italic">Search Real KC Beta</span> is the first step toward a project I've had in mind for a long time.<br/> 
                In the Search page, users can add, remove, and search for small, locally-owned businesses in the Kansas City area.<br/>
                The beta version is intentionally simple, serving as a foundation for a more advanced and feature-rich platform in the future.
                </p>
            </div>
        </div>
        <div class="w-full h-fit md:mt-[100px] flex gap-2 flex-col justify-center items-center">
            <div class="jump" :class="animate ? 'animate-bounce' : ''"><Pin/></div>
            <div class="bg-layer2/60 w-full max-w-[400px] rounded-xl backdrop-blur-sm p-6 gap-4 flex flex-col">
                <h2 class="text-3xl font-bold text-primary-green font-secondary">Why</h2>
               <p class="text-md leading-8">
                When I moved to America, one of the biggest cultural shocks was the difficulty of finding family-owned and locally-owned businesses.<br/>
                Commerces that populate streets in many parts of the world, like small fruit and vegetable stores, are rare here.<br/>
                I created this project because I want to put my money where my morals are, and help others do the same.
                </p>
            </div>
        </div>
        <div class="w-full h-fit flex gap-2 flex-col justify-center items-center">
            <div class="jump" :class="animate ? 'animate-bounce' : ''"><Pin/></div>
            <div class="bg-layer2/60 w-full max-w-[400px] rounded-xl backdrop-blur-sm p-6 gap-4 flex flex-col">
                <h2 class="text-3xl font-bold text-primary-green font-secondary">How</h2>
                <p class="text-md leading-8">
                Browse businesses, filter them by type, and locate them on the map by clicking the pin icon on their card.<br/>
                When adding or deleting a business, please remember that this is crowd-sourced information. 
                Add only small, locally-owned businesses, and don't remove a business unless it no longer exists or doesn’t meet the criteria.<br/>
                <span class="italic text-sm">Since this project avoids relying on big businesses (like Google), the address field in the Add Form may require some patience.</span>

                </p>
            </div>
        </div>
    </div>
</div>
<div class="w-full bg-base h-[190px]">
    <Footer/>
</div>
</template>

<style scoped>

</style>