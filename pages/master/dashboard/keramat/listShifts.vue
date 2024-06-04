<template>
  <PublicPageTitle title="لیست شیفت های موجود" />
  <PublicPageInfo text="لیست شیفت های موجود" />

  <CardSection>
    <formsDataTable :search="studentSearch" @change="handleSearchItems">
      <template #table>
        <v-data-table :search="studentSearch" :items="items" :headers="headers">
          <!-- data tabel headers -->
          <template v-slot:item.options="{ item }">
            <div class="flex justify-center gap-x-3 text-center">
              <div>
                <v-dialog transition="dialog-bottom-transition" max-width="800">
                  <template v-slot:activator="{ props: activatorProps }">
                    <v-btn
                      v-bind="activatorProps"
                      class="rounded-lg !text-blue-500"
                      block
                      variant="tonal"
                    >
                      <v-icon> mdi-eye-plus </v-icon></v-btn
                    >
                  </template>

                  <template v-slot:default="{ isActive }">
                    <v-card>
                      <v-toolbar :title="item.name"></v-toolbar>

                      <!-- <v-card-text class="p-5">
                        <v-container-fluid>
                          <v-card class="mx-auto text-base !bg-slate-100 !py-1 mb-4">
                            <v-card-text>تاریخ: {{ item.date }} </v-card-text>
                          </v-card>
                        </v-container-fluid>
                      </v-card-text> -->
                      <v-card-text class="p-5">
                        <v-container-fluid>
                          <v-card class="mx-auto text-base !bg-slate-100 !py-1 mb-4">
                            <v-card-text>لیست اعلام آمادگی</v-card-text>
                          </v-card>
                          <v-table height="300px" fixed-header>
                            <thead>
                              <tr>
                                <th class="">نام</th>
                                <th class="">نام خانوادگی</th>
                                <th class="">موبایل</th>
                                <th class="">وضعیت</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="item in desserts" :key="item.name">
                                <td>{{ item.name }}</td>
                                <td>{{ item.Lname }}</td>
                                <td>{{ item.mobile }}</td>
                                <td>
                                  <div
                                    class="d-flex gap-x-2"
                                    v-if="!item.stock.isSelected"
                                  >
                                    <v-btn
                                      class="bg-green"
                                      @click="acceptShift(item.id)"
                                      :disabled="item.stock.accept"
                                      >قبول
                                    </v-btn>
                                    <v-btn
                                      class="bg-red"
                                      @click="rejectShift(item.id)"
                                      :disabled="item.stock.reject"
                                      >رد</v-btn
                                    >
                                  </div>
                                  <div class="d-flex gap-x-2" v-else>
                                    <v-btn
                                      v-if="item.stock.status == 'reject'"
                                      class="bg-green"
                                      @click="acceptShift(item.id)"
                                      :disabled="item.stock.accept"
                                      >تغییر وضعیت
                                    </v-btn>
                                    <v-chip
                                      v-if="item.stock.status == 'reject'"
                                      color="error"
                                      >رد شده</v-chip
                                    >

                                    <v-btn
                                      v-if="item.stock.status == 'accept'"
                                      class="bg-red"
                                      @click="rejectShift(item.id)"
                                      :disabled="item.stock.reject"
                                      >تغییر وضعیت</v-btn
                                    >
                                    <v-chip
                                      v-if="item.stock.status == 'accept'"
                                      color="success"
                                      >قبول شده</v-chip
                                    >
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </v-table>
                          <v-col cols="12" class="flex ga-3">
                            <v-btn
                              class="mx-auto text-base !bg-teal-800 !text-white !py-1"
                            >
                              <v-icon> mdi-download-box </v-icon>
                              خروجی همه نتایج
                            </v-btn>

                            <v-btn
                              class="mx-auto text-base !bg-teal-700 !text-white !py-1"
                            >
                              <v-icon> mdi-printer </v-icon>
                              پرینت تایید شده ها
                            </v-btn>
                          </v-col>
                        </v-container-fluid>
                      </v-card-text>
                      <v-card-actions class="justify-end">
                        <v-btn text="بستن" @click="isActive.value = false"></v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </div>
              <div>
                <v-btn @click="handleDeleteItem(item.id)" variant="flat" color="error"
                  ><v-icon>mdi-delete</v-icon></v-btn
                >
              </div>
            </div>
          </template>

          <template v-slot:item.num_male_needed="{ item }">
            <div class="text-center">
              <div class="flex items-center justify-center gap-x-2">
                <span> {{ item.num_male_needed }} </span>
              </div>
            </div>
          </template>
          <template v-slot:item.num_female_needed="{ item }">
            <div class="text-center">
              <div class="flex items-center justify-center gap-x-2">
                <span> {{ item.num_female_needed }} </span>
              </div>
            </div>
          </template>

          <template v-slot:bottom>
            <div class="text-center pt-2">
              <!-- <v-pagination v-model="page" :length="pageCount"></v-pagination> -->
            </div>
          </template>
        </v-data-table>
      </template>
    </formsDataTable>
  </CardSection>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";
// Define a reactive variable to manage dialog visibility
const dialog = ref(false); // Initially set to false
const { $swal } = useNuxtApp();

const userInfo = useAsyncData("userInfo", () => $fetch("/api/auth/info"));

const uuid = ref("");
const shiftList = useAsyncData("shifitList", () => $fetch("/api/shifts/list"));

const headers = [
  { title: "نام شیفت", align: "center", key: "name" },
  { title: "مناسبت", align: "center", key: "occasion" },
  {
    title: " تعداد افراد مورد نیاز زن",
    align: "center",
    key: "num_female_needed",
  },
  {
    title: " تعداد افراد مورد نیاز مرد",
    align: "center",
    key: "num_male_needed",
  },
  { title: "گزینه ها ", align: "center", key: "options" },
];

const studentSearch = useState("search", () => "");
const handleSearchItems = (value) => {
  studentSearch.value = value;
};

const handleDeleteItem = async (id) => {
  Swal.fire({
    title: "از حذف درخواست اطمینان دارید؟",
    showCancelButton: true,
    confirmButtonText: "بله",
    cancelButtonText: "خیر",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const response = await axios.get(`/api/shifts/delete?shiftID=${id}`);
      if (response.data.status) {
        useAsyncData("shifitList", () => $fetch("/api/shifts/list"));
        Swal.fire("شیفت مورد نظر حذف شد.", "", "success");
      } else {
        Swal.fire("مشکلی پیش آمده است.", "", "error");
      }
    }
  });
};
//  load inital data table
const createRows = (item) => {
  return {
    id: item.id,
    name: item.name,
    occasion: item.occasion,
    date: item.start,
    num_female_needed: item.num_female_needed,
    num_male_needed: item.num_male_needed,
  };
};

const items = ref([
  {
    name: "sads",
    date: "sad",
    people: {
      man: "12",
      woman: "14",
    },
    number: {
      man: "12",
      woman: "14",
    },
  },
]);

let desserts = [
  {
    id: 14,
    name: "احمد",
    Lname: "قادری",
    mobile: "09137976592",
    stock: {
      isSelected: false,
      status: "undefined",
    },
  },
  {
    id: 10,
    name: "محمد",
    Lname: "رجایی",
    mobile: "09137976592",
    stock: {
      isSelected: false,
      status: "undefined",
    },
  },
  {
    id: 6,
    name: "الهه",
    Lname: "احمدی",
    mobile: "09137976592",
    stock: {
      isSelected: false,
      status: "undefined",
    },
  },
  {
    id: 7,
    name: "معصومه",
    Lname: "بهاری",
    mobile: "09137976592",
    stock: {
      isSelected: false,
      status: "undefined",
    },
  },
  {
    id: 8,
    name: "امید",
    Lname: "حسینی",
    mobile: "09137976592",
    stock: {
      isSelected: false,
      status: "undefined",
    },
  },
  {
    id: 9,
    name: "جلال",
    Lname: "حسینی",
    mobile: "09137976592",
    stock: {
      isSelected: false,
      status: "undefined",
    },
  },
  {
    id: 1,
    name: "آدین",
    Lname: "بهرامی",
    mobile: "09137976592",
    stock: {
      isSelected: false,
      status: "undefined",
    },
  },
  {
    id: 2,
    name: "قاصدک",
    Lname: "رضایی",
    mobile: "09137976592",
    stock: {
      isSelected: false,
      status: "undefined",
    },
  },
  {
    id: 4,
    name: "منا",
    Lname: "نیرومد",
    mobile: "09137976592",
    stock: {
      isSelected: false,
      status: "undefined",
    },
  },
];
import Swal from "sweetalert2";
const acceptShift = (id) => {
  Swal.fire({
    position: "center",
    title: "انتخاب خادمیار",
    icon: "question",
    text: "برای تایید روی دکمه ثبت کلیک کنید",
    showConfirmButton: true,
    showCancelButton: true,
    cancelButtonText: "رد",
    cancelButtonColor: "red",
    confirmButtonText: "ثبت",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      const selected = desserts.find((item) => item.id == id);
      selected.stock.status = "accept";
      selected.stock.isSelected = true;
      Swal.fire("ثبت درخواست با موفقیت برای شما ثبت شد", "", "success");
    } else if (result.isDenied) {
      return;
    }
  });
};
const rejectShift = (id) => {
  Swal.fire({
    position: "center",
    title: "انتخاب حادمیار",
    icon: "question",
    text: "برای تایید روی دکمه ثبت کلیک کنید",
    showConfirmButton: true,
    showCancelButton: true,
    cancelButtonText: "رد",
    cancelButtonColor: "red",
    confirmButtonText: "ثبت",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      const selected = desserts.find((item) => item.id == id);
      selected.stock.status = "reject";
      selected.stock.isSelected = true;
      Swal.fire("رد درخواست با موفقیت برای شما ثبت شد", "", "success");
    } else if (result.isDenied) {
      return;
    }
  });
};
watch(userInfo.data, async () => {
  const profile = userInfo.data.value?.data.profile;
  const indexofProf = profile.toString().lastIndexOf("profiles");
  uuid.value = profile.slice(indexofProf, profile.length).split("/")[1];
});
watch(shiftList.data, () => {
  if (shiftList.data.value?.data.length) {
    items.value = shiftList.data.value?.data.map((i) => createRows(i));
  }
});
</script>
