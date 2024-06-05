<template>
  <PublicPageTitle title="اعلام آمادگی شیفت" />
  <PublicPageInfo text="در اینجا شما میتوانید کاربر های شیفت مورد نر فیلتر کرده و جزییات شیفت را ببینید" />
  <CardSection>
    <div class="bg-white rounded-md h-screen p-5">
      <v-sheet class="mx-auto">
        <v-slide-group v-model="model">
          <v-slide-group-item v-for="n in tabs" :key="n" v-slot="{ isSelected, toggle }">
            <v-btn :color="isSelected ? 'secondary' : undefined" class="ma-2" rounded elevation="3"
              :disabled="isSelected" @click="toggle">
              {{ n.label }}
            </v-btn>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
      <div class="my-5" v-show="model == 0">
        <div class="p-3 mb-3 font-bold text-medium  text-medium-emphasis  rounded-md shadow ">
          <div class="mb-3 border-b p-3">
            <h1>لیست همه درخواست ها :</h1>
          </div>
          <div v-if="DATA.all.length > 0" v-for="item in DATA.all" :key="item">
            <v-card class="mx-auto" max-width="344" :subtitle="item.created_by" title="درخواست کننده"></v-card>
          </div>
          <div class="text-center p-3" v-else>
            داده ای موجود نیست
          </div>
        </div>

      </div>
      <div class="my-5" v-show="model == 1">
        <div class="p-3 mb-3 font-bold text-medium  text-medium-emphasis  rounded-md shadow ">
          <div class="mb-3 border-b p-3">
            <h1>بانوان :</h1>
          </div>
          <div v-if="DATA.exceeded.exceeded_female_requests.length > 0"
            v-for="item in DATA.exceeded.exceeded_female_requests" :key="item">
            <v-card class="mx-auto" max-width="344" :subtitle="item.created_by" title="درخواست کننده"></v-card>
          </div>
          <div class="text-center p-3" v-else>
            داده ای موجود نیست
          </div>
        </div>
        <div class="p-3 mb-3 font-bold text-medium  text-medium-emphasis  rounded-md shadow ">
          <div class="mb-3 border-b p-3">
            <h1>آقایان :</h1>
          </div>
          <div v-if="DATA.exceeded.exceeded_male_requests.length > 0"
            v-for="item in DATA.exceeded.exceeded_male_requests" :key="item">
            <v-card class="mx-auto" max-width="344" :subtitle="item.created_by" title="درخواست کننده"></v-card>
          </div>
          <div class="text-center p-3" v-else>
            داده ای موجود نیست
          </div>
        </div>
      </div>
      <div class="my-5" v-show="model == 2">
        <div class="p-3 mb-3 font-bold text-medium  text-medium-emphasis  rounded-md shadow ">
          <div class="mb-3 border-b p-3">
            <h1>بانوان :</h1>
          </div>
          <div v-if="DATA.nonExceeded.female_requests.length > 0" v-for="item in DATA.nonExceeded.female_requests"
            :key="item">
            <v-card class="mx-auto" max-width="344" :subtitle="item.created_by" title="درخواست کننده"></v-card>
          </div>
          <div class="text-center p-3" v-else>
            داده ای موجود نیست
          </div>
        </div>
        <div class="p-3 mb-3 font-bold text-medium  text-medium-emphasis  rounded-md shadow ">
          <div class="mb-3 border-b p-3">
            <h1>آقایان :</h1>
          </div>
          <div v-if="DATA.nonExceeded.male_requests.length > 0" v-for="item in DATA.nonExceeded.male_requests"
            :key="item">
            <v-card class="mx-auto" max-width="344" :subtitle="item.created_by" title="درخواست کننده"></v-card>
          </div>
          <div class="text-center p-3" v-else>
            داده ای موجود نیست
          </div>
        </div>
      </div>
    </div>
  </CardSection>
</template>
<script setup>
import axios from 'axios';
const DATA = ref([]);
const model = ref(0);
const tabs = [
  {
    id: 1,
    label: "همه درخواست ها",
  },
  {
    id: 2,
    label: "درخواست های عادی",
  },
  {
    id: 3,
    label: "درخواست های بیش از ظرفیت",
  },
];

const route = useRoute()
const getDATA = async () => {
  const Exeeded = await $fetch(`/api/shifts/declaration/Exeeded?id=${route.params.id}`);
  const nonExeeded = await $fetch(`/api/shifts/declaration/nonExeeded?id=${route.params.id}`);
  const allReqs = await $fetch(`/api/shifts/declaration/allReqs?id=${route.params.id}`);
  return {
    exceeded: Exeeded.data,
    nonExceeded: nonExeeded.data,
    all: allReqs.data,
  }
}
DATA.value = await getDATA();
console.log(DATA);
</script>
