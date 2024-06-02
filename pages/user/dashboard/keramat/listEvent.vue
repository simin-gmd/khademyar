<template>
  <PublicPageTitle title="تقویم شیفت ها" />

  <CardSection>
    <div class="container md:px-2 lg:px-72 shadow rounded-lg mt-10">
      <div class="wrapper bg-white rounded-lg shadow w-full">
        <div class="header flex justify-between border-b p-2">
          <span class="text-lg font-bold">
            {{
              new Intl.DateTimeFormat("fa-IR", {
                month: "long",
                year: "numeric",
              }).format(new Date().setMonth(monthIndex))
            }}
          </span>
          <div class="buttons">
            <button class="p-1" @click="handlePrevMonth">
              <svg
                width="1em"
                fill="gray"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-arrow-right-circle"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"
                />
                <path
                  fill-rule="evenodd"
                  d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
            <button class="p-1" @click="handleNextMonth">
              <svg
                width="1em"
                fill="gray"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-arrow-left-circle"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fill-rule="evenodd"
                  d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
                />
                <path
                  fill-rule="evenodd"
                  d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
                />
              </svg>
            </button>
          </div>
        </div>
        <table class="w-full">
          <thead>
            <tr>
              <th
                class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
              >
                <span class="xl:block lg:block md:block sm:block hidden">شنبه</span>
                <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Sun</span>
              </th>
              <th
                class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
              >
                <span class="xl:block lg:block md:block sm:block hidden">یکشنبه</span>
                <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Wed</span>
              </th>
              <th
                class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
              >
                <span class="xl:block lg:block md:block sm:block hidden">دوشنبه</span>
                <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Thu</span>
              </th>
              <th
                class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
              >
                <span class="xl:block lg:block md:block sm:block hidden">سه شنبه</span>
                <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Fri</span>
              </th>
              <th
                class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
              >
                <span class="xl:block lg:block md:block sm:block hidden">چهار شنبه</span>
                <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Sat</span>
              </th>
              <th
                class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
              >
                <span class="xl:block lg:block md:block sm:block hidden">پنجشنبه</span>
                <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Mon</span>
              </th>
              <th
                class="p-2 border-r text-red-600 h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
              >
                <span class="xl:block lg:block md:block sm:block hidden">جمعه</span>
                <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Tue</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(day, index) in days" :key="index" class="text-center h-20">
              <td
                v-for="(item, i) in day"
                :key="i"
                class="border !h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto text-gray-500 last-of-type:bg-red-400 last-of-type:text-white"
              >
                <div
                  v-if="item.DayLabel == '-'"
                  class="flex flex-col h-20 text-gray-500 w-full overflow-hidden p-3 bg-slate-300"
                >
                  <div class="top h-5 w-full flex-grow">
                    <span class="">{{ item.DayLabel }}</span>
                  </div>
                </div>
                <div v-else class="flex flex-col h-20 w-full overflow-hidden p-3">
                  <div class="top flex flex-col h-5 w-full flex-grow">
                    <span class="">{{ item.DayLabel }}</span>
                    <!-- <ul class="flex-grow space-y-3 text-gray-600">
                      <template v-for="event in events" :key="event.id">
                        <li
                          v-if="
                            `${event.date.getFullYear()}/${event.date.getMonth()}/${event.date.getDay()}` ==
                            `${item.date.year}/${item.date.month}/${item.date.day}`
                          "
                          class="flex items-center gap-x-3 text-white rounded p-1"
                          :class="{
                            'bg-green-500': event.type == 2,
                            'bg-sky-500': event.type == 1,
                          }"
                        >
                          <p>
                            {{ event.title }}
                          </p>
                        </li>
                      </template>
                    </ul> -->
                  </div>
                  <div class="flex justify-end" v-for="event in events" :key="event.id">
                    <button
                      v-if="
                        `${event.date.getFullYear()}/${event.date.getMonth()}/${event.date.getDay()}` ==
                        `${item.date.year}/${item.date.month}/${item.date.day}`
                      "
                      @click="handleModalOpen(item.date)"
                      class="rounded-full p-1 text-red-600 hover:text-red-500 border transition duration-500 ease"
                    >
                      <!-- {{ `${event.date.getFullYear()}/${event.date.getMonth()}/${event.date.getDay()}`}} -->
                      <v-icon>mdi-plus</v-icon>
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="pa-4 text-center">
        <v-dialog v-model="openModal" max-width="900">
          <v-card>
            <v-card-title>
              <div class="flex justify-between items-center">
                <span><v-icon>mdi-home-outline</v-icon> شیفت های امروز </span>
                <v-btn variant="flat" icon="mdi-close" @click="openModal = false"></v-btn>
              </div>
            </v-card-title>
            <v-card-text>
              <CardSection>
                <formsDataTable :search="studentSearch" @change="handleSearchItems">
                  <template #table>
                    <v-infinite-scroll
                      color="secondary"
                      :height="400"
                      :items="items"
                      @load="loadItems"
                      width="100%"
                      direction="vertical"
                      tag="div"
                    >
                      <v-data-table
                        :search="studentSearch"
                        :items="items"
                        :headers="headers"
                      >
                        <!-- data tabel headers -->

                        <!-- <template v-slot:item.masterDesc="{ item }">
                          <div class="text-center">
                            <div
                              class="flex items-center justify-center gap-x-2"
                            >
                              {{ item.masterDesc }}
                            </div>
                          </div>
                        </template> -->

                        <template v-slot:bottom>
                          <div class="text-center pt-2">
                            <!-- <v-pagination v-model="page" :length="pageCount"></v-pagination> -->
                          </div>
                        </template>

                        <!-- <template v-slot:item.stock="{ item }">
              <div class="text-center">
                <v-chip
                  :color="item.stock ? 'green' : 'red'"
                  :text="item.stock ? 'قبول' : 'رد'"
                  class="text-uppercase"
                  label
                  size="small"
                ></v-chip>
              </div>
            </template> -->

                        <template v-slot:item.stock="{ item }">
                          <div class="text-center">
                            <v-chip class="text-uppercase" label size="">
                              <div class="d-flex gap-x-2">
                                <v-btn class="bg-green" @click="acceptShift"
                                  >قبول میکنم</v-btn
                                >
                                <!-- <v-btn class="bg-red">رد</v-btn> -->
                              </div>
                            </v-chip>
                          </div>
                        </template>
                      </v-data-table>
                      <template v-slot:empty>
                        <div></div>
                      </template>
                      <template v-slot:error="{ props }">
                        <v-alert type="error">
                          <div class="d-flex justify-space-between align-center">
                            مشکلی در برقراری ارتباط پیش امده است...
                            <v-btn
                              color="white"
                              size="small"
                              variant="outlined"
                              v-bind="props"
                            >
                              تلاش دوباره
                            </v-btn>
                          </div>
                        </v-alert>
                        <!-- <v-alert  variant="error">مشکلی در برقراری ارتباط پیش امده است</v-alert> -->
                      </template>
                    </v-infinite-scroll>
                  </template>
                </formsDataTable>
              </CardSection>
            </v-card-text>

            <v-divider></v-divider>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </CardSection>

  <div class="pa-4 text-center"></div>
</template>
<script setup>
//  data table data
const studentSearch = ref("");
const handleSearchItems = (value) => {
  studentSearch.value = value;
};
const headers = [
  { title: "نام شیفت", align: "center", key: "shiftName" },
  { title: "مناسبت", align: "center", key: "name" },
  // { title: "تاریخ", align: "center", key: "date" },
  // { title: "ساعت", align: "center", key: "time" },
  { title: "تعداد افراد مورد نیاز مرد", align: "center", key: "people" },
  { title: "تعداد افراد مورد نیاز زن ", align: "center", key: "number" },
  // {
  //   title: "توضیحات مدیر",
  //   align: "center",
  //   key: "masterDesc",
  // },
  // { title: "توضیحات کاربر", align: "center", key: "descUser" },
  { title: "وضعیت", align: "center", key: "stock" },
  // { title: "آمادگی/ عدم آمادگی", align: "center", key: "stock" },
];

const items = [
  {
    shiftName: "شیفت 7  ",
    name: "شهادت امام رضا",
    date: "1403/06/13",
    time: "17:30",
    people: "20",
    number: "4",
    masterDesc: "-",
    stock: true,
    descUser: "-",
  },
  {
    shiftName: "شیفت 1",
    name: " میلاد امان زمان",
    date: "1403/06/13",
    time: "17:30",
    people: "30",
    number: "10",
    masterDesc: "همراه با پذیرایی",
    stock: true,
    descUser: "-",
  },
];
//params for inputs
const years = ref(["1401-1402", "1400-1401"]);
const yearValidationMessages = ref({
  required: "فیلد  سال تحصیلی الزامیست",
});

const monthIndex = ref(new Date().getMonth());
const days = ref([]);
const selectedDate = ref(new Date());
const events = ref([
  {
    id: 0,
    // date: new Date("2024/2/24"),
    date: new Date("2024-1-20"),
    title: "نیمه شعبان",
    type: "1",
    description: "dasdasda",
  },
  {
    id: 1,

    date: new Date("2024-4-24"),
    title: "شهادت امام رضا",
    type: "2",
    description: "dasdasda",
  },
  {
    id: 2,

    date: new Date("2024-4-29"),
    title: "تولد امام رضا",
    type: "2",
    description: "dasdasda",
  },
]);
// const openAddSchool = ref(false);
const handlePrevMonth = () => {
  monthIndex.value--;
  days.value = getDates("month", monthIndex.value);
};
const handleNextMonth = () => {
  monthIndex.value++;
  days.value = getDates("month", monthIndex.value);
};

const openModal = ref(false);
const handleModalOpen = (date) => {
  selectedDate.value = new Date(`${date.year}-${date.month}-${date.day}`);
  openModal.value = !openModal.value;
};
const typesValidationMessages = ref({
  required: "فیلد انتخاب نوع آزمون الزامیست",
});

onMounted(() => {
  days.value = getDates("month", monthIndex.value);
});

const loadItems = ({ done }) => {
  done("empty");
};

import Swal from "sweetalert2";
const acceptShift = () => {
  Swal.fire({
    position: "center",
    title: "انتخاب شیفت",
    icon: "success",
    text: "شیفت با موفقیت برای شما ثبت شد",
    showConfirmButton: false,
    timer: 3000,
  });
};
</script>
<style>
.swal2-container {
  z-index: 20000 !important;
}
</style>
