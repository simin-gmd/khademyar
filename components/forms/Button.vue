<template>
  <button
    @click="handleClick"
    :disabled="props.disabled"
    :type="props.type"
    :class="props.customClass"
    v-bind:class="'btn-' + props.variant"
    class="max-w-28 flex justify-center items-center gap-x-2"
  >
    <span v-if="!props.loading" class=" flex items-center justify-center w-5 h-5 pl-2">
      <slot name="append" />
    </span>
    <span>
      {{ props.title }}
    </span>
    <span v-if="!props.loading" class="flex items-center justify-center  w-5 h-5 pr-2">
      <slot name="prepend" />
    </span>
    <span v-else class="w-5 h-5"> لطفا صبر کنید </span>
  </button>
</template>

<script setup>
const props = defineProps({
  type: "submit" || "button",
  variant: "primary" || "secondary" || "error" || "success",
  customClass: "",
  title: "",
  disabled: false,
  loading: false,
});
const emit = defineEmits(["onClick"]);
const handleClick = () => {
  emit("onClick");
};
// func SharedArrayBuffer({
//     variant: 'primary' || 'secondary' || 'sdasda' || "dadasd"
// })
</script>
<style>
.btn-emerald {
  background-color: rgb(236 253 245);
  border-radius: 15px;
}
</style>
