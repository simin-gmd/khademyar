<template>
    <div class=" text-white rounded-lg px-3 py-2 border">
        <div class="flex justify-around gap-x-4 ">
            <div class="flex gap-x-2">
                <div class=" bg-white">
                    <!-- <slot name="icon"></slot> -->
                    <v-skeleton-loader type="avatar"></v-skeleton-loader>

                </div>

                <v-divider :vertical="true" color="primary"></v-divider>
            </div>
            <div class=" w-full">
                <v-skeleton-loader type="list-item-two-line"></v-skeleton-loader>
            </div>
        </div>
    </div>
</template>
