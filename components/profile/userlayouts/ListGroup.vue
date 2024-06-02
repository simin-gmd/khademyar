<template>
  <v-list-group :value="activator?.value">
    <template v-slot:activator="{ isOpen, props }">
      <!-- <nuxt-link> -->
      <v-list-item
        v-bind="props"
        :title="activator?.title"
        :prepend-icon="activator?.icon"
        class="rounded-lg sidebar-item"
      ></v-list-item>
      <!-- </nuxt-link> -->
    </template>
    <template v-if="subGroup?.length">
      <nuxt-link
        v-for="(listItem, i) in subGroup"
        :key="i"
        :to="listItem?.link"
        class="my-0 rounded-lg"
      >
        <v-list-item
          style="padding-inline-start: 15px !important"
          :prepend-icon="listItem?.icon"
          :title="listItem?.title"
          :class="{ active: $route.path.includes(listItem?.link) }"
          class="!p-0 sidebar-item"
        ></v-list-item>
      </nuxt-link>
    </template>
  </v-list-group>
</template>
<script setup>
const props = defineProps({
  activator: { type: Object, required: true },
  subGroup: { type: Array, required: true },
});
const { activator, subGroup } = props;
</script>
<style>
.v-list-group__items{
  padding-inline-start: 25px;
}</style>