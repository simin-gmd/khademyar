<template>
  <PublicPageTitle title="شیفت ها" />

  <CardSection>
    <!-- <div>
      <publicPageTitle title="لیست همه شیفت ها" />
    </div> -->

    <div class="p-4 border rounded-lg">
      <formsDataTable title="" search @change="handleSearchItems">
        <template #table>
          <v-data-table
            fixed-header
            no-data-text="داده ای موجود نیست"
            :search="studentSearch"
            :items="khademLists.data"
            :headers="headers"
          >
            <!-- data tabel headers -->
            <template v-slot:item.accepted="{ item }">
              <div class="text-center">
                <v-chip
                  :color="
                    item.accepted == null ? 'yellow' : item.accepted ? 'green' : 'red'
                  "
                  class="text-uppercase"
                  label
                  size="small"
                >
                  <span v-if="item.accepted == true">قبول شده </span>
                  <span v-else-if="item.accepted == false">رد شده</span>
                  <span v-else>در حال انتظار</span>
                </v-chip>
              </div>
            </template>
            <template v-slot:item.approved="{ item }">
              <div class="text-center">
                <v-chip
                  :color="
                    item.approved
                      ? 'green'
                      : item.approved == null
                      ? item.accepted
                        ? 'yellow'
                        : 'red'
                      : 'red'
                  "
                  class="text-uppercase"
                  label
                  size="small"
                >
                  <span v-if="item.approved">تایید شده </span>
                  <span v-else-if="item.approved == false">تایید نشده</span>
                  <span v-else
                    ><span v-if="item.accepted"> در حال انتظار</span>
                    <span v-else> رد شده توسط کاربر </span>
                  </span>
                </v-chip>
              </div>
            </template>

            <template v-slot:item.select="{ item }">
              <div class="text-center">
                <v-chip class="text-uppercase" label size="">
                  <div class="d-flex gap-x-2">
                    <v-btn
                      size="small"
                      :disabled="item.accepted == (null || false) ? false : true"
                      class="bg-green"
                      @click="acceptShift(item)"
                      >قبول</v-btn
                    >
                    <v-btn
                      size="small"
                      :disabled="item.accepted == (null || true) ? false : true"
                      class="bg-red"
                      @click="rejectShift(item)"
                      >رد</v-btn
                    >
                    <v-btn
                      variant="tonal"
                      size="small"
                      @click="handleOpenAddDesc(item)"
                      color="blue"
                      :text="'توضیحات'"
                    >
                    </v-btn>
                  </div>
                </v-chip>
              </div>
            </template>

            <template v-slot:item.options="{ item }">
              <div class="flex items-center text-center gap-x-2">
                <v-btn
                  variant="tonal"
                  size="small"
                  :disabled="item.approved && item.accepted ? true : false"
                  color="red"
                  @click="handleDelete(item)"
                  :text="'حذف'"
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
                      v-model="selectedItem.user_description"
                      label="توضیحات کاربر"
                      placeholder=""
                    />
                  </v-col>
                  <v-col cols="12">
                    <FormKit
                      type="textarea"
                      :disabled="true"
                      name="admin_description"
                      v-model="selectedItem.user_description"
                      label="توضیحات مدیر"
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
  <div v-if="selectedItem">
    <v-dialog v-model="discriptionModal" maxWidth="450">
      <v-card>
        <v-card-title>
          <div class="flex justify-between items-center">
            <span><v-icon>mdi-home-outline</v-icon> توضیحات شیفت </span>
            <v-btn variant="text" rounded @click="handleOpenDesc(null)"
              ><v-icon color="black" size="large">mdi-close</v-icon></v-btn
            >
          </div>
        </v-card-title>
        <v-card-text>
          <div elevation="0" title="ورود اطلاعات" flat class="">
            <FormKit
              id="handleAddDesc"
              type="form"
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
                      v-model="userServiceDecriptions.admin_description"
                      label="توضیحات مدیر"
                      placeholder=""
                    />
                  </v-col>
                  <v-col cols="12">
                    <FormKit
                      type="textarea"
                      name="user_description"
                      disabled="true"
                      v-model="userServiceDecriptions.user_description"
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
const trigger = useState("userTrigger", () => false);
// load data functions

async function getInitialData() {
  return await $fetch("/api/shifts/requests/list");
}
const discriptionModal = ref(false);
const selectedItem = ref(null);
//params for inputs
const handleOpenAddDesc = async (item) => {
  if (item) {
    const res = await axios.get(`/api/shifts/requests/single?id=${item.id}`);
    selectedItem.value = res.data.data;
  console.log(selectedItem.value,item)

  }
  discriptionModal.value = !discriptionModal.value;
};

const headers = [
  { title: "نام شیفت", align: "center", key: "shift" },
  { title: "مناسبت شیفت", align: "center", key: "shift" },
  // { title: "تاریخ شیفت", align: "center", key: "time" },
  { title: "وضعیت درخواست", align: "center", key: "accepted" },
  // { title: "وضعیت شیفت", align: "center", key: "approved" },
  { title: "انتخاب شیفت ", align: "center", key: "select" },
  // { title: "گزینه ها", align: "center", key: "options" },
];
const khademLists = useState("getShiftsLit", () => ({
  status: false,
  data: [],
}));
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
        khademLists.value = await getInitialData();
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
        khademLists.value = await getInitialData();
        Swal.fire("شیفت مورد نظر رد شد.", "", "success");
      } else {
        Swal.fire("مشکلی پیش آمده است.", "", "error");
      }
    }
  });
};
const handleDelete = (item) => {
  Swal.fire({
    title: "از حذف درخواست اطمینان دارید؟",
    showCancelButton: true,
    confirmButtonText: "بله",
    cancelButtonText: "خیر",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const response = await axios.get(
        `/api/shifts/requests/single/delete?id=${item.id}`
      );
      if (response.data.status) {
        khademLists.value = await getInitialData();

        Swal.fire("شیفت مورد نظر حذف شد.", "", "success");
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
    khademLists.value = await getInitialData();

    handleOpenAddDesc(null);
    reset("handleAddDesc");
    Swal.fire("توضیحات ارسال شد.", "", "success");
  } else {
    Swal.fire("مشکلی پیش آمده است.", "", "error");
  }
};

onUpdated(async () => {
  khademLists.value = await getInitialData();
});
onMounted(async () => {
  khademLists.value = await getInitialData();
});
//  load inital data table
</script>
