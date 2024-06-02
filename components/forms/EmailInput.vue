<template>
  <div>
    <FormKit
      v-bind="{
        id,
        name,
        label,
      }"
      type="email"
      validation="required|email|ends_with:.com"
      :validation-messages="{
        required: 'فیلد ایمیل الزامیست',
        email: 'فیلد ایمیل معتبر نمیباشد',
      }"
      messages-class="form-text text-red"
      placeholder=""
      :class="error && 'text-red-400 bg-rose-50'"
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
const error = ref(false);
</script>
<style></style>
