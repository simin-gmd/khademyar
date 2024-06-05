<template>
  <PublicPageTitle title="خادمیاران" />
  <PublicPageInfo text="در این صفحه شما میتوانید مامی خادمیاران را با اطلاعات آنها مشاهده نمایید و هم چنین میتوانید آنها را حذف و یا تایید نهایی بزنید..." />

  <div class="bg-white rounded-md h-screen p-5">
    <v-sheet class="mx-auto">
      <v-slide-group v-model="model">
        <v-slide-group-item v-for="n in tabs" :key="n" v-slot="{ isSelected, toggle }">
          <v-btn
            :color="isSelected ? 'secondary' : undefined"
            class="ma-2"
            rounded
            elevation="3"
            :disabled="isSelected"
            @click="toggle"
          >
            {{ n.label }}
          </v-btn>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
    <div v-show="model == 1">
      <KhademyarActive />
    </div>
    <div v-show="model == 0">
      <KhademyarDisactive />
    </div>
  </div>
</template>
<script setup>
const tabs = [
  {
    id: 1,
    label: "تایید نشده",
  },
  {
    id: 2,
    label: "تایید شده",
  },
];
const model = ref(0);
definePageMeta({
  keepalive: true,
});
</script>
<style>
.swal2-container {
  z-index: 20000 !important;
}
</style>
