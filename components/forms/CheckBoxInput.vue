<template>
  <div v-if="!multiple">
    <FormKit v-bind="{
      id,
      name,
      label,
    }" label-class="form-label" input-class="form-control" messages-class="form-text text-red" type="checkbox"
      validation-visibility="dirty" :value="true" validation="accepted" />
  </div>
  <div v-else>
    <FormKit :options="options" v-bind="{
      id,
      name,
      label,
    }" label-class="form-label" input-class="form-control" messages-class="form-text text-red" type="checkbox"
      validation-visibility="dirty" :value="true" validation="required|min:1" />
  </div>
</template>
<script setup>
const props = defineProps({
  id: { type: String, required: true },
  name: { type: String, required: true },
  label: { type: String, required: true },
  multiple: {
    type: Boolean,
    required: false,
  },
  options: {
    type: Array,
    required: false
  }
});
const multipeItems = ref([])
const { id, name, label, multiple, options } = props;
onMounted(() => {
  multiple ? multipeItems.value = options : multipeItems.value = []
})
</script>
<style></style>
