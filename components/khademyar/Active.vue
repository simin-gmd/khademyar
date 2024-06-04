<!-- import type loginPost from '~/server/api/auth/login.post'; -->
<template>
  <CardSection>
    <PublicPageContent :isData="!isData" :action="false" @click="handleAddModal">
      <template v-slot:title>لیست خادم یاران تایید شده</template>
      <template v-slot:content>
        هم اکنون خادم یار ای وجود ندارد برای ایجاد روی دکمه افزودن کلیک کنید.
      </template>
      <template v-slot:tableData>
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

                <template v-slot:item.image="{ item }">
                  <v-card class="my-2" elevation="2" rounded>
                    <v-img
                      :src="`https://cdn.vuetifyjs.com/docs/images/graphics/gpus/${item.image}`"
                      height="64"
                      cover
                    ></v-img>
                  </v-card>
                </template>

                <template v-slot:item.is_superuser="{ item }">
                  <div class="text-center">
                    <v-chip
                      :color="item.is_superuser ? 'green' : 'blue'"
                      :text="item.is_superuser ? 'مدیر' : 'کاربر'"
                      class="text-uppercase"
                      label
                      size="small"
                    ></v-chip>
                  </div>
                </template>

                <template v-slot:item.people="{ item }">
                  <div class="text-center">
                    <v-chip
                      :color="item.people ? 'green' : 'red'"
                      class="text-uppercase"
                      label
                      size="small"
                    >
                      <v-icon v-if="item.people"> mdi-check-circle-outline </v-icon>
                      <v-icon v-else> mdi-close-circle-outline </v-icon>
                    </v-chip>
                  </div>
                </template>
                <template v-slot:item.number="{ item }">
                  <div class="text-center">
                    <v-chip
                      :color="item.number ? 'green' : 'red'"
                      class="text-uppercase"
                      label
                      size="small"
                    >
                      <v-icon v-if="item.number"> mdi-check-circle-outline </v-icon>
                      <v-icon v-else> mdi-close-circle-outline </v-icon>
                    </v-chip>
                  </div>
                </template>

                <template v-slot:item.select="{ item }">
                  <div class="text-center">
                    <v-chip class="text-uppercase" label size="">
                      <div class="d-flex gap-x-2">
                        <v-btn class="bg-green" @click="acceptShift(item)">قبول</v-btn>
                        <v-btn class="bg-red" @click="rejectShift(item)">رد</v-btn>
                      </div>
                    </v-chip>
                  </div>
                </template>

                <template v-slot:item.options="{ item }">
                  <div class="flex items-center text-center gap-x-2">
                    <v-btn
                      variant="tonal"
                      size="small"
                      @click="handleDelete(item)"
                      color="red"
                      :text="'غیر فعال'"
                    >
                    </v-btn>
                    <v-btn
                      variant="tonal"
                      size="small"
                      @click="handleOpenDetail(item)"
                      color="blue"
                      :text="'جزییات'"
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
      </template>
    </PublicPageContent>
  </CardSection>

  <div class="pa-4 text-center">
    <v-dialog v-model="openAddSchool" max-width="900">
      <v-card>
        <v-card-title>
          <div class="flex justify-between items-center">
            <span><v-icon>mdi-home-outline</v-icon> افزودن خادم یار </span>
            <v-btn variant="flat" icon="mdi-close" @click="openAddSchool = false"></v-btn>
          </div>
        </v-card-title>
        <v-card-text>
          <div elevation="0" title="ورود اطلاعات" flat class="">
            <FormKit type="form" :incomplete-message="false" :actions="false">
              <div elevation="0" class="rounded-lg">
                <v-stepper
                  elevation="0"
                  prev-text="برگشت"
                  next-text="تایید و گام بعد"
                  alt-labels
                  flat
                  editable
                  :items="['اطلاعات پایه', 'قوانین']"
                >
                  <template v-slot:item.1>
                    <div elevation="0" title="اطلاعات پایه" flat class="">
                      <v-container class="!border !border-gray-100 !rounded-xl">
                        <v-row class="items-center justify-center">
                          <v-col cols="12" md="6">
                            <formsTextInput
                              name="name"
                              id="name"
                              label="نام خادم یار"
                              placeholder=""
                              :validation-messages="nameValidationMessages"
                            />
                          </v-col>
                          <v-col cols="12" md="6" dir="ltr">
                            <FormKit
                              type="file"
                              label="عکس"
                              accept=".png,.jpg,.webp"
                              value="'انتخاب عکس'"
                              messages-class="form-text text-red"
                            />
                          </v-col>
                          <v-col cols="12" md="6">
                            <formsDateInput
                              name="date"
                              id="date"
                              label="تاریخ تولد"
                              value="1999-01-01"
                            />
                          </v-col>

                          <v-col cols="12" md="6">
                            <formsSelectInput
                              id="jensiat"
                              name="jensiat"
                              :options="jensiat"
                              label="جنسیت"
                              placeholder="انتخاب کنید"
                              :validation-messages="jensiatValidationMessages"
                            />
                          </v-col>
                          <v-col cols="12" md="6">
                            <formsTextInput
                              name="deputyname"
                              id="deputyname"
                              label="کد ملی"
                              placeholder=""
                              :validation-messages="nameValidationMessages"
                            />
                          </v-col>
                          <v-col cols="12" md="6">
                            <formsTextInput
                              name="jobname"
                              id="jobname"
                              label="نام شغل"
                              placeholder=""
                              :validation-messages="nameValidationMessages"
                            />
                          </v-col>
                          <v-col cols="12" md="6">
                            <formsTelInput
                              id="cellphone3"
                              name="cellphone3"
                              label="تلفن "
                            />
                          </v-col>
                          <v-col cols="12" md="6">
                            <formsEmailInput id="email" name="email" label="ایمیل" />
                          </v-col>
                          <v-col cols="12" md="6">
                            <formsTextareaInput
                              name="schooladdr"
                              id="schooladdr"
                              label="آدرس"
                              placeholder=""
                              :validation-messages="addrValidationMessages"
                            />
                          </v-col>
                        </v-row>
                      </v-container>
                    </div>
                  </template>

                  <template v-slot:item.2>
                    <div elevation="0" title="قوانین" flat class="">
                      <v-container class="!border !border-gray-100 !rounded-xl">
                        <v-row class="items-center justify-center">
                          <v-col cols="12" md="12">
                            <div class="col">
                              <ul>
                                <li
                                  v-for="description in descriptions"
                                  :key="description.id"
                                  class="marker text-xs p-2"
                                >
                                  {{ description.text }}
                                </li>
                              </ul>
                            </div>
                          </v-col>
                          <v-col cols="12" md="6">
                            <formsCheckBoxInput
                              label="با قوانین موافقم"
                              id="terms"
                              name="terms"
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
                    </div>
                  </template>
                </v-stepper>
              </div>
            </FormKit>
          </div>
        </v-card-text>

        <v-divider></v-divider>
      </v-card>
    </v-dialog>
    <v-dialog v-model="openUserServices" max-width="900">
      <v-card>
        <v-card-title>
          <div class="flex justify-between items-center">
            <span><v-icon>mdi-home-outline</v-icon> لیست خدمت </span>
            <v-btn variant="flat" icon="mdi-close" @click="handleCloseDetail"></v-btn>
          </div>
        </v-card-title>
        <v-card-text>
          <v-data-table
            fixed-header
            no-data-text="داده ای موجود نیست"
            :search="studentSearch"
            :items="userServiceDetail"
            :headers="detailHeaders"
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
                  @click="handleOpenDesc(item)"
                  :text="'نمایش توضیحات'"
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
        </v-card-text>

        <v-divider></v-divider>
      </v-card>
    </v-dialog>
    <div v-if="userServiceDecriptions">
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
  </div>
</template>
<script setup>
import axios from "axios";
import { reset } from "@formkit/core";
const trigger = useState("userTrigger", () => false);
// load data functions
async function getInitialData() {
  return await $fetch("/api/users/list?is_active=true");
}
const khademLists = useAsyncData("getActiveKhademsList", () => getInitialData());
//params for inputs

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
  { title: "نام کاربری", align: "center", key: "username" },
  { title: "نام", align: "center", key: "first_name" },
  { title: "نام خانوادگی", align: "center", key: "last_name" },
  { title: "کدملی", align: "center", key: "national_code" },
  { title: "شماره همراه ", align: "center", key: "mobile" },
  { title: "نوع حساب کاربری", align: "center", key: "is_superuser" },
  { title: "گزینه ها", align: "center", key: "options" },
];

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

//  load inital data table
onUpdated(async () => {
  useAsyncData("getActiveKhademsList", () => getInitialData());
});
onMounted(() => {
  useAsyncData("getActiveKhademsList", () => getInitialData());
});
onBeforeRouteUpdate(async () => {
  useAsyncData("getActiveKhademsList", () => getInitialData());
});
watch(trigger, async () => {
  useAsyncData("getActiveKhademsList", () => getInitialData());
});
watch(khademLists.data, async () => {
  dataListState.value = khademLists.data.value.data.results;
});
const getUserServiceDetail = async (id) => {
  return await $fetch(`/api/shifts/requests/list?created_by=${id}`);
};

import Swal from "sweetalert2";
const acceptShift = (item) => {
  Swal.fire({
    position: "center",
    title: "قبول درخواست",
    icon: "success",
    text: "قبول درخواست خادمیار با موفقیت برای شما ثبت شد",
    showConfirmButton: false,
    timer: 3000,
  });
};

const handleDelete = (item) => {
  Swal.fire({
    title: "از غیرفعال کردن کاربر مورد نظر اطمینان دارید؟",
    showCancelButton: true,
    confirmButtonText: "بله",
    cancelButtonText: "خیر",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const response = await $fetch(`/api/users/delete?username=${item.username}`);
      if (response.status) {
        const data = await getInitialData();
        dataListState.value = data.data.results;
        trigger.value = !trigger.value;
        Swal.fire("کاربر مورد نظر غیر فعال شد.", "", "success");
      } else {
        Swal.fire("مشکلی پیش آمده است.", "", "error");
      }
    }
  });
};

const detailHeaders = [
  { title: "عنوان شیفت", align: "center", key: "shift" },
  { title: "ایجاد کننده ", align: "center", key: "created_by" },
  { title: "وضعیت درخواست", align: "center", key: "accepted" },
  { title: "وضعیت شیفت", align: "center", key: "approved" },
  // { title: "انتخاب شیفت ", align: "center", key: "select" },
  { title: "گزینه ها ", align: "center", key: "options" },
];
const userServiceDetail = useState("userServiceDetail", () => []);
const userServiceDecriptions = useState("userServiceDecriptions", () => null);
const discriptionModal = ref(false);
const openUserServices = ref(false);
const handleOpenDetail = async (item) => {
  const userDetail = await getUserServiceDetail(item.id);
  userServiceDetail.value = userDetail.status ? userDetail.data : [];
  openUserServices.value = true;
};
const handleCloseDetail = async (item) => {
  userServiceDetail.value = [];
  openUserServices.value = false;
};
const handleOpenDesc = async (item) => {
  if (item) {
    const res = await axios.get(`/api/shifts/requests/single?id=${item.id}`);
    userServiceDecriptions.value = res.data.data;
  }
  discriptionModal.value = !discriptionModal.value;
};
const handleAddDesc = async (formData) => {
  const response = await axios.post("/api/shifts/requests/approve", {
    ...formData,
    approved: userServiceDecriptions.value.approved,
    id: userServiceDecriptions.value.id,
  });
  if (response.data.status) {
    handleOpenDesc(null);
    reset("handleAddDesc");
    Swal.fire("توضیحات ارسال شد.", "", "success");
  } else {
    Swal.fire("مشکلی پیش آمده است.", "", "error");
  }
};
const rejectShift = () => {
  Swal.fire({
    position: "center",
    title: "رد درخواست",
    icon: "error",
    text: "رد درخواست خادمیار با موفقیت برای شما ثبت شد",
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
