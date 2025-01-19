<script setup>
import GoToSearch from '../components/GoToSearch.vue'
import Pin from '../components/Pin.vue'
import Hero from '../components/Hero.vue'
import Footer from '../components/Footer.vue'
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
        <div class="w-fit h-[40vh]">
        <button 
        @click="goToSearch" 
        class="m-auto w-[150px] h-[40px] rounded-full hover:text-white font-bold italic bg-secondary-yellow/80 transition-all duration-[2000ms] text-black hover:bg-secondary-red/70"
        >
        <p class="w-[140px] h-[32px] border-[3px] flex justify-center items-center border-black rounded-full m-auto">
        Search
        </p>
        </button>
        </div>
    </div>
    <div class="w-full h-fit flex md:flex-row gap-12 justify-center items-center flex-col font-body pb-[70px] md:pb-[200px]">
        <div class="w-full h-fit flex gap-2 flex-col justify-center items-center">
            <div class="jump" :class="animate ? 'animate-bounce' : ''"><Pin/></div>
            <div class="bg-layer2/60 w-full max-w-[400px] rounded-xl backdrop-blur-sm p-6 gap-8 flex flex-col">
                <h2 class="text-3xl font-bold">What</h2>
                <p class="text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec finibus arcu.
                Nam et fringilla tortor. Suspendisse sed lectus lacus.
                In at felis nisi. In varius vehicula velit ac elementum.
                In ut tempor dui, vitae laoreet tellus. Maecenas ut aliquam magna.
                Ut sed lectus consequat, varius est eu, ultricies ipsum. Ut quis erat vitae sapien feugiat dignissim vel ut metus.
                Sed aliquam justo metus, at elementum est 
                Nam et fringilla tortor. Suspendisse sed lectus lacus.
                In at felis nisi. In varius vehicula velit ac elementum.
                In at felis nisi. In varius vehicula velit ac elementum.
                </p>
            </div>
        </div>
        <div class="w-full h-fit md:mt-[100px] flex gap-2 flex-col justify-center items-center">
            <div class="jump" :class="animate ? 'animate-bounce' : ''"><Pin/></div>
            <div class="bg-layer2/60 w-full max-w-[400px] rounded-xl backdrop-blur-sm p-6 gap-8 flex flex-col">
                <h2 class="text-3xl font-bold">Why</h2>
                <p class="text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec finibus arcu.
                Nam et fringilla tortor. Suspendisse sed lectus lacus.
                In at felis nisi. In varius vehicula velit ac elementum.
                In ut tempor dui, vitae laoreet tellus. Maecenas ut aliquam magna.
                Ut sed lectus consequat, varius est eu, ultricies ipsum. Ut quis erat vitae sapien feugiat dignissim vel ut metus.
                Sed aliquam justo metus, at elementum est 
                Nam et fringilla tortor. Suspendisse sed lectus lacus.
                In at felis nisi. In varius vehicula velit ac elementum.
                In at felis nisi. In varius vehicula velit ac elementum.
                </p>
            </div>
        </div>
        <div class="w-full h-fit flex gap-2 flex-col justify-center items-center">
            <div class="jump" :class="animate ? 'animate-bounce' : ''"><Pin/></div>
            <div class="bg-layer2/60 w-full max-w-[400px] rounded-xl backdrop-blur-sm p-6 gap-8 flex flex-col">
                <h2 class="text-3xl font-bold">How</h2>
                <p class="text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec finibus arcu.
                Nam et fringilla tortor. Suspendisse sed lectus lacus.
                In at felis nisi. In varius vehicula velit ac elementum.
                In ut tempor dui, vitae laoreet tellus. Maecenas ut aliquam magna.
                Ut sed lectus consequat, varius est eu, ultricies ipsum. Ut quis erat vitae sapien feugiat dignissim vel ut metus.
                Sed aliquam justo metus, at elementum est 
                Nam et fringilla tortor. Suspendisse sed lectus lacus.
                In at felis nisi. In varius vehicula velit ac elementum.
                In at felis nisi. In varius vehicula velit ac elementum.

                </p>
            </div>
        </div>
    </div>
</div>
<div class="w-full bg-base h-[220px] md:h-[200px]">
    <Footer/>
</div>
</template>

<style scoped>

</style>