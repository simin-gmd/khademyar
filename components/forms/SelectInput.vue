<template>
  <div>
    <FormKit
      v-bind="{
        id,
        name,
        label,
        placeholder,
        options,
        validationMessages,
      }"
      label-class="form-label"
      input-class="form-control"
      validation="required"
      
      messages-class="form-text text-red"
      type="select"
      name="small_country"
      validation-visibility="dirty"
    />
  </div>
</template>
<script setup>
const props = defineProps({
  id: { type: String, required: true },
  name: { type: String, required: true },
  label: { type: String, required: true },
  placeholder: { type: String, required: true },
  options: { type: Array, required: true },
  validationMessages: { type: Object, required: true },
});
const { id, name, label, placeholder, options, validationMessages } = props;
</script>
<style></style>
