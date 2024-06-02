
<template>
    <div class="bg-white border-b border-gray-100">
        <div class="p-4  flex flex-col">
            <h1 class="  ">{{ props.title }}</h1>
            <!-- <span class="w-full bg-[#e0f7f7] h-1 my-2  rounded-tl-full rounded-br-full  "></span> -->
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    title: ''
})
</script>