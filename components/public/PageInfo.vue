<template>
    <div class="!container p-5">
        <v-alert v-model="alert" border="start" close-label="Close Alert" type="info" color="info" title="راهنما"
            variant="tonal" closable>
            {{ props.text }}
        </v-alert>

        <div v-if="!alert" class="text-end">
            <v-chip class="!rounded-full" color="info" @click="alert = true">
                <v-icon>mdi-information-outline</v-icon>
                <v-tooltip activator="parent" location="end">اطلاعات بیشتر...</v-tooltip>
            </v-chip>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    text: ''
})
const alert = ref(false)
</script>