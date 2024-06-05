<template>
  <PublicPageTitle title="لیست شیفت های موجود" />

  <CardSection>
    <formsDataTable :search="studentSearch" @change="handleSearchItems">
      <template #table>
        <v-data-table :search="studentSearch" :items="items" :headers="headers">
          <!-- data tabel headers -->
          <template v-slot:item.options="{ item }">
            <div class="flex justify-center gap-x-3 text-center">
              <div>
                <v-btn
                  @click="$router.push($route.fullPath + '/' + item.id)"
                  class="rounded-lg !text-blue-500"
                  block
                  variant="tonal"
                >
                  <v-icon> mdi-eye-plus </v-icon></v-btn
                >
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

const items = ref([]);

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
const decListItem = ref(null);
const openDecModal = ref(false);

const handleOpenDecList = async (id) => {
  decListItem.value = await $fetch(`/api/shifts/declaration/list?id=${id}`);
  console.log(decListItem.value);
  openDecModal.value = true;
};
const handleCloseDeclist = async (id) => {
  decListItem.value = null;
  openDecModal.value = false;
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
