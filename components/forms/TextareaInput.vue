<template>
  <div>
    <FormKit
  
      v-bind="{
        id,
        name,
        label,
        placeholder,
        validationMessages,
      }"
      type="textarea"
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
  placeholder: { type: String, required: true },
  validationMessages: { type: Object, required: true },
});
const { id, name, label, placeholder, validationMessages } = props;
</script>
<style></style>
