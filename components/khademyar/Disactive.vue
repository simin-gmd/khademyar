import type loginPost from '~/server/api/auth/login.post';
<template>
  <CardSection>
    <PublicPageContent :isData="!isData" :action="false" @click="handleAddModal">
      <template v-slot:title>لیست خادم یاران تایید نشده </template>
      <template v-slot:content>
        هم اکنون خادم یار ای وجود ندارد برای ایجاد روی دکمه افزودن کلیک کنید.
      </template>
      <template v-slot:tableData>
        <div class="p-4 border rounded-lg">
          <formsDataTable title="" search @change="handleSearchItems">
            <template #table>
              <v-data-table
                fixed-header
                :search="studentSearch"
                no-data-text="داده ای موجود نیست"
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
                  <div class="text-center flex gap-x-2">
                    <v-btn
                      variant="tonal"
                      size="small"
                      @click="acceptUser(item)"
                      color="secondary"
                      :text="'تایید کاربر'"
                    >
                    </v-btn>
                    <v-btn
                      variant="tonal"
                      size="small"
                      @click="handleDelete(item)"
                      color="red"
                      :text="'حذف'"
                    >
                    </v-btn>
                  </div>
                </template>

                <template v-slot:item.options="{ item }">
                  <div class="flex items-center text-center gap-x-2">
                    <v-btn variant="tonal" size="small" color="blue" :text="'ویرایش'">
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
  </div>
</template>
<script setup>
const trigger = useState("userTrigger", () => false);
// load data functions

async function getInitialData() {
  return await $fetch("/api/users/list?is_active=false");
}

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
  { title: "گزینه ها", align: "center", key: "select" },
];
const khademLists = useAsyncData("getDiactiveKhademsList", () => getInitialData());
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

// onMounted()
import Swal from "sweetalert2";

const acceptUser = (item) => {
  // console.log(item);
  Swal.fire({
    title: "از تایید کاربر مورد نظر اطمینان دارید؟",
    showCancelButton: true,
    confirmButtonText: "بله",
    cancelButtonText: "خیر",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const response = await $fetch(`/api/users/activate?username=${item.username}`);
      if (response.status) {
        const data = await getInitialData();
        dataListState.value = data.data.results;
        trigger.value = !trigger.value;
        Swal.fire("کاربر مورد نظر تایید شد.", "", "success");
      } else {
        Swal.fire("مشکلی پیش آمده است.", "", "error");
      }
    }
  });
};
const handleDelete = (item) => {
  Swal.fire({
    title: "از حذف کاربر مورد نظر اطمینان دارید؟",
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
        Swal.fire("کاربر مورد نظر حذف شد.", "", "success");
      } else {
        Swal.fire("مشکلی پیش آمده است.", "", "error");
      }
    }
  });
};
onUpdated(async () => {
  useAsyncData("getDiactiveKhademsList", () => getInitialData());
});
onMounted(() => {
  useAsyncData("getDiactiveKhademsList", () => getInitialData());
});
//  load inital data table
watch(khademLists.data, async () => {
  dataListState.value = khademLists.data.value.data.results;
});
</script>
<style>
.swal2-container {
  z-index: 20000 !important;
}
</style>
