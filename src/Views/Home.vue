<script setup>
import GoToSearch from '../components/GoToSearch.vue'
import Pin from '../components/Pin.vue'
import Hero from '../components/Hero.vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from 'vue';
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
    document.querySelectorAll('.jump').forEach( el => {
        gsap.fromTo(
            el,
            { y: 0 },
            {
                scrollTrigger: {
                    trigger: el,
                    start: "top center",
                },
                onEnter: () => el.classList.add('animate-bounce'),
                // onLeave: () => el.classList.remove('animate-bounce'),
                onEnterBack: () => el.classList.add('animate-bounce'),
                // onLeaveBack: () => el.classList.remove('animate-bounce')
            }
        );
    });
});



</script>

<template>
<div class="w-full h-fit min-h-screen bg-base bg-kc-map bg-center bg-contain p-4 flex flex-col gap-4">
    <div class="w-full flex justify-end">
        <GoToSearch/>
    </div>
    <div class="md:w-[500px] md:h-[500px] h-[70dvh] md:h-[90dvh] m-auto">
        <Hero/>
    </div>
    <div class="w-full h-fit flex md:flex-row gap-12 justify-center items-center flex-col font-body">
        <div class="w-full h-fit flex gap-2 flex-col justify-center items-center">
            <div class="jump"><Pin/></div>
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
            <div class="jump"><Pin/></div>
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
            <div class="jump"><Pin/></div>
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
</template>

<style scoped>

</style>