<template>
    <div class=" text-white rounded-lg px-3 py-2" v-bind="{
        class: {
            'bg-slate-500': props.variant == 'primary',
            'bg-rose-500': props.variant == 'error',
            'bg-green-500': props.variant == 'success',
            'bg-cyan-500': props.variant == 'warning'
        }
    }">
        <div class="flex justify-around gap-x-4 ">
            <div class="flex gap-x-2">
                <div v-bind="{
                    class: {
                        'bg-slate-400': props.variant == 'primary',
                        'bg-rose-400': props.variant == 'error',
                        'bg-green-400': props.variant == 'success',
                        'bg-cyan-400': props.variant == 'warning'

                    }
                }" class="p-3  rounded-lg">
                    <slot name="icon"></slot>
                </div>

                <v-divider :vertical="true" color="primary"></v-divider>
            </div>
            <div class=" flex flex-col flex-grow items-center">
                <h2 class="text-base   font-medium text-neutral-50">
                    <slot name="title" />

                </h2>
                <p class=" text-end pt-3   text-neutral-100   text-xs">
                    <slot name="value" />
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>

const props = defineProps({
    variant: 'primary'

})
</script>