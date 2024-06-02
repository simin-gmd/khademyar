<template>
  <div>
    <FormKit
      v-bind="{
        id,
        name,
        label,
      }"
      type="tel"
      label-class="form-label"
      input-class="form-control"
      :validation="[['required'], ['matches', /^(\+98|0)?9\d{9}$/]]"
      :validation-messages="{
        required: 'فیلد شماره تماس الزامیست',
        matches: 'فیلد شماره تماس معتبر نمیباشد',
      }"
      messages-class="form-text text-red"
      placeholder=""
      validation-visibility="dirty"
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
