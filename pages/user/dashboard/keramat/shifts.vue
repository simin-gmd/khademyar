<template>
  <PublicPageTitle title="شیفت های شرکت کرده" />

  <CardSection>
    <!-- <div>
      <publicPageTitle title="لیست همه شیفت های شرکت کرده" />
    </div> -->

    <div class="p-4 border rounded-lg">
      <formsDataTable title="" search @change="handleSearchItems">
        <template #table>
          <v-data-table
            fixed-header
            no-data-text="داده ای موجود نیست"
            :search="studentSearch"
            :items="dataListState"
            :headers="headers"
          >
            <!-- data tabel headers -->

            <template v-slot:item.accepted="{ item }">
              <div class="text-center">
                <v-chip
                  :color="item.accepted ? 'green' : 'red'"
                  class="text-uppercase"
                  label
                  size="small"
                >
                  <v-icon v-if="item.accepted"> mdi-check-circle-outline </v-icon>
                  <v-icon v-else> mdi-close-circle-outline </v-icon>
                </v-chip>
              </div>
            </template>
            <template v-slot:item.approved="{ item }">
              <div class="text-center">
                <v-chip
                  :color="
                    item.approved == null ? 'yellow' : item.approved ? 'green' : 'red'
                  "
                  class="text-uppercase"
                  label
                  size="small"
                >
                  <span v-if="item.approved == true">تایید شده </span>
                  <span v-else-if="item.approved == false">تایید نشده</span>
                  <span v-else>در حال انتظار</span>
                </v-chip>
              </div>
            </template>

            <template v-slot:item.select="{ item }">
              <div class="text-center">
                <v-chip class="text-uppercase" label size="">
                  <div class="d-flex gap-x-2">
                    <v-btn
                      size="small"
                      :disabled="item.accepted == null ? false : true"
                      class="bg-green"
                      @click="acceptShift(item)"
                      >قبول</v-btn
                    >
                    <v-btn
                      size="small"
                      :disabled="item.accepted == null ? false : true"
                      class="bg-red"
                      @click="rejectShift(item)"
                      >رد</v-btn
                    >
                  </div>
                </v-chip>
              </div>
            </template>

            <template v-slot:item.options="{ item }">
              <div class="flex items-center text-center gap-x-2">
                <v-btn
                  variant="tonal"
                  size="small"
                  :disabled="
                    item.approved == null || item.approved == false ? true : false
                  "
                  color="blue"
                  @click="handleOpenAddDesc(item)"
                  :text="'افزودن توضیحات'"
                >
                </v-btn>
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
    </div>
  </CardSection>

  <div v-if="selectedItem" class="pa-4 text-center">
    <v-dialog v-model="discriptionModal" maxWidth="450">
      <v-card>
        <v-card-title>
          <div class="flex justify-between items-center">
            <span><v-icon>mdi-home-outline</v-icon> افزودن شیفت </span>
            <v-btn variant="text" rounded @click="handleOpenAddDesc(null)"
              ><v-icon color="black" size="large">mdi-close</v-icon></v-btn
            >
          </div>
        </v-card-title>
        <v-card-text>
          <div elevation="0" title="ورود اطلاعات" flat class="">
            <FormKit
              type="form"
              id="handleAddDesc"
              @submit="handleAddDesc"
              :incomplete-message="false"
              :actions="false"
            >
              <v-container class="!border !border-gray-100 !rounded-xl">
                <v-row class="items-center justify-center">
                  <v-col cols="12">
                    <FormKit
                      type="textarea"
                      name="user_description"
                      disabled="true"
                      v-model="selectedItem.admin_description"
                      label="توضیحات مدیر"
                      placeholder=""
                    />
                  </v-col>
                  <v-col cols="12">
                    <FormKit
                      type="textarea"
                      name="user_description"
                      v-model="selectedItem.user_description"
                      label="توضیحات کاربر"
                      placeholder=""
                    />
                  </v-col>
                </v-row>
                <v-row class="justify-end">
                  <FormsButton type="submit" variant="primary" title="ذخیره">
                    <!-- <template #append>
                              <v-icon>mdi-plus</v-icon>
                            </template> -->
                  </FormsButton>
                </v-row>
              </v-container>
            </FormKit>
          </div>
        </v-card-text>

        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
import { reset } from "@formkit/core";
// load data functions
const authStore = useAuthStore();
async function getInitialData() {
  return await $fetch(`/api/shifts/requests/list?accepted=true`);
}
const discriptionModal = ref(false);
const selectedItem = ref(null);
//params for inputs
const handleOpenAddDesc = async (item) => {
  if (item) {
    const res = await axios.get(`/api/shifts/requests/single?id=${item.id}`);
    selectedItem.value = res.data.data;
  }
  discriptionModal.value = !discriptionModal.value;
};
const jensiat = ref(["مرد", "زن "]);
const jensiatValidationMessages = ref({
  required: "فیلد انتخاب جنسیت الزامیست",
});

const branchs = ref(["سجاد", "هنرستان", "هفت تیر", "خیام"]);
const branchsValidationMessages = ref({
  required: "فیلد انتخاب شعبه الزامیست",
});
const nameValidationMessages = ref({ required: "فیلد عنوان الزامیست" });
const addrValidationMessages = ref({ required: "فیلد آدرس الزامیست" });
const numberValidationMessages = ref({ required: "فیلد تعداد الزامیست" });

const headers = [
  { title: "عنوان شیفت", align: "center", key: "shift" },
  // { title: "ایجاد کننده ", align: "center", key: "created_by" },
  { title: "وضعیت درخواست", align: "center", key: "accepted" },
  { title: "وضعیت شیفت", align: "center", key: "approved" },
  // { title: "انتخاب شیفت ", align: "center", key: "select" },
  // { title: "گزینه ها ", align: "center", key: "options" },
];
const khademLists = useAsyncData("getShiftAcceptedRequests", () => getInitialData());
const dataListState = ref([]);
const isData = computed(() => (dataListState.value.length > 0 ? true : false));

//handel modal script
const openAddSchool = ref(false);
const handleAddModal = () => {
  openAddSchool.value = !openAddSchool.value;
};

const studentSearch = useState("search", () => "");
const handleSearchItems = (value) => {
  studentSearch.value = value;
};
//params for descriptions
const descriptions = ref([
  {
    text: "قوانین1",
    id: 1,
  },
  {
    text: "قوانین2",

    id: 2,
  },
  {
    text: "قوانین3",

    id: 3,
  },
  {
    text: "قوانین4",

    id: 4,
  },
  {
    text: "قوانین5",

    id: 5,
  },

  {
    text: "قوانین6",

    id: 6,
  },
]);

import axios from "axios";
// onMounted()
import Swal from "sweetalert2";

const acceptShift = async (item) => {
  Swal.fire({
    title: "از قبول درخواست اطمینان دارید؟",
    showCancelButton: true,
    confirmButtonText: "بله",
    cancelButtonText: "خیر",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const response = await axios.post(`/api/shifts/requests/single/accept`, {
        ...item,
        accepted: true,
      });
      if (response.data.status) {
        const data = await getInitialData();
        dataListState.value = data.data;
        Swal.fire("شیفت مورد نظر قبول شد.", "", "success");
      } else {
        Swal.fire("مشکلی پیش آمده است.", "", "error");
      }
    }
  });
};
const rejectShift = async (item) => {
  Swal.fire({
    title: "از رد درخواست اطمینان دارید؟",
    showCancelButton: true,
    confirmButtonText: "بله",
    cancelButtonText: "خیر",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const response = await axios.post(`/api/shifts/requests/single/accept`, {
        ...item,
        accepted: false,
      });
      if (response.data.status) {
        const data = await getInitialData();
        dataListState.value = data.data;
        Swal.fire("شیفت مورد نظر رد شد.", "", "success");
      } else {
        Swal.fire("مشکلی پیش آمده است.", "", "error");
      }
    }
  });
};

const handleAddDesc = async (formData) => {
  const response = await axios.post("/api/shifts/requests/description", {
    ...formData,
    shift: selectedItem.value.id,
  });
  if (response.data.status) {
    const data = await getInitialData();
    dataListState.value = data.data;
    handleOpenAddDesc(null);
    reset("handleAddDesc");
    Swal.fire("توضیحات ارسال شد.", "", "success");
  } else {
    Swal.fire("مشکلی پیش آمده است.", "", "error");
  }
};

onUpdated(async () => {
  useAsyncData("getShiftAcceptedRequests", () => getInitialData());
  // await authStore.setUserData();
});
onMounted(async () => {
  useAsyncData("getShiftAcceptedRequests", () => getInitialData());
  // await authStore.setUserData();ح
});
//  load inital data table
watch(khademLists.data, async () => {
  dataListState.value = khademLists.data.value.data;
});
</script>
