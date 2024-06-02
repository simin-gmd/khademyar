<template>
  <div>
    <FormKit
    dir="ltr"
      v-bind="{
        id,
        name,
        label,
        value,
        validationMessages,
      }"
      type="number"
      step="1"
      label-class="form-label"
      input-class="form-control"
      messages-class="form-text text-red"
      validation="required"
    />
  </div>
</template>
<script setup>
const props = defineProps({
  id: { type: String, required: true },
  name: { type: String, required: true },
  label: { type: String, required: true },
  value: { type: Number, required: true },
  validationMessages: { type: Object, required: true },
});
const { id, name, label, value, validationMessages } = props;
</script>
<style></style>
