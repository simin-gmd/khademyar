<template>
  <div>
    <FormKit
      v-bind="{
        id,
        name,
        label,
      }"
      type="time"
      value="23:15"
      validation="required"
      validation-messages="زمان را وارد کنید"
      label-class="form-label"
      input-class="form-control"
      messages-class="form-text text-red"
    />
  </div>
</template>
<script setup>
const props = defineProps({
  id: { type: String, required: true },
  name: { type: String, required: true },
  label: { type: String, required: true },

});
const { id, name, label } = props;
</script>
<style></style>
