<template>
  <div class="w-full flex gap-x-4">
    <div class="w-full rounded-lg p-5">
      <span class="marker text-xs"> همه ی کلاس ها </span>
      <v-table class="h-full">
        <thead>
          <tr>
            <th class="text-center">نام کلاس</th>
            <th class="text-center">نام درس</th>
          </tr>
        </thead>
        <draggable
          :list="list1"
          group="people"
          tag="tbody"
          @start="drag = true"
          @end="drag = false"
          class="list-group h-full"
          ghost-class="ghost"
          @change="log"
          item-key="id"
        >
          <template #item="{ element }">
            <tr class="cursor-grab text-center">
              <td>{{ element.className }}</td>
              <td>{{ element.courseName }}</td>
            </tr>
          </template>
        </draggable>
      </v-table>
    </div>
    <div class="flex flex-col gap-y-2 items-center justify-center">
      <div class="space-y-2">
        <v-btn variant="tonal">
          <v-icon>mdi-arrow-u-left-top-bold</v-icon>
        </v-btn>
        <v-btn variant="tonal">
          <v-icon>mdi-arrow-u-right-top-bold</v-icon>
        </v-btn>
      </div>
    </div>
    <div class="w-full rounded-lg p-5">
      <span class="marker text-xs"> کلاس های انتخاب شده </span>
      <v-table class="h-full">
        <thead>
          <tr>
            <th class="text-center">نام کلاس</th>
            <th class="text-center">نام درس</th>
          </tr>
        </thead>
        <draggable
          :list="list2"
          group="people"
          tag="tbody"
          @start="drag = true"
          @end="drag = false"
          class="list-group h-full"
          ghost-class="ghost"
          @change="log"
          item-key="id"
        >
          <template #item="{ element }">
            <tr class="cursor-grab text-center">
              <td>{{ element.className }}</td>
              <td>{{ element.courseName }}</td>
            </tr>
          </template>
        </draggable>
      </v-table>
    </div>
  </div>
</template>
<script setup lang="js">
const drag = ref(false);
function log(e) {
  console.log(e);
}
const list1 = ref([
  { className: "اول",courseName: "قرآن", id: 1 },
  { className: "دوم",courseName: "فارسی", id: 2 },
  { className: "سوم",courseName: "هدیه", id: 3 },
  { className: "پنجم",courseName: "علوم پنجم", id: 4 },
]);
const list2 =ref([
]);
</script>
<style>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
