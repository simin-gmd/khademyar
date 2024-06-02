<template>
    <div>
        <FormKit messages-class="form-text text-red" type="radio" v-bind="{
            id,
            name,
            label,
        }" validation="required" :validation-messages="{
    required: 'یک مورد را انتخاب کنید',

}" :options="options" />
    </div>
</template>
<script setup>
const props = defineProps({
    id: { type: String, required: true },
    name: { type: String, required: true },
    label: { type: String, required: true },

    options: {
        type: Array,
        required: true
    }
});

const { id, name, label, options } = props;

</script>
<style></style>
  