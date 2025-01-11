<script setup>
import GoToSearch from '../components/GoToSearch.vue'
import Pin from '../components/Pin.vue'


</script>

<template>
<div class="w-full h-fit min-h-screen bg-base bg-kc-map bg-center bg-contain p-4 flex flex-col gap-4">
    <div class="w-full flex justify-end">
        <GoToSearch/>
    </div>
    <div class="w-full h-fit flex md:flex-row gap-12 justify-center items-center flex-col font-body">
        <div class="w-full h-fit flex gap-2 flex-col justify-center items-center">
            <div class="md:animate-bounce"><Pin/></div>
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
            <div class="md:animate-bounce"><Pin/></div>
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
            <div class="md:animate-bounce"><Pin/></div>
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