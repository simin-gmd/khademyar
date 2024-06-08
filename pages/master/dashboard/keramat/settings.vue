<template>
  <PublicPageTitle title="تنظیمات" />
  <PublicPageInfo text="شما در صفحه تنظیمات میتوانید حداقل یا حداکثر اعداد خادمیاران را تنظیم کنید." />

  <CardSection>
    <PublicPageContent @click="handleAddModal" :isData="true">
      <template v-slot:title> افزودن ظرفیت جدید </template>
      <template v-slot:image>
        <img src="/Omidlogo.png" />
      </template>
      <template v-slot:content>
        هم اکنون ظرفیت جدیدی وجود ندارد برای ایجاد روی دکمه افزودن کلیک کنید.
      </template>
      <template v-slot:action> ایجاد ظرفیت جدید </template>
      <template v-slot:tableData>
        <div class="p-4 border rounded-lg">
          <formsDataTable title="" search @change="handleSearchItems">
            <template #table>
              <v-data-table :loading="loading" loading-text="لطفا صبر کنید!..." no-data-text="داده ای موجود نیست"
                fixed-header :search="search" :items="orderedData" :headers="headers">
                <!-- <template v-slot:item.status="{ item }">
                  <div class="text-center">
                    <v-chip :color="item.status == 'فعال' ? 'green' : 'red'" :text="item.status"
                      class="text-uppercase w-full" label size="small"></v-chip>
                  </div>
                </template> -->

                <template v-slot:item.options="{ item }">
                  <div class="flex items-center text-start gap-x-2">
                    <v-btn @click="handleOpenEditModal(item)" variant="tonal" size="small" color="blue"
                      :text="'ویرایش'">
                    </v-btn>
                    <v-btn variant="tonal" @click="handleDeleteItem(item.id)" size="small" color="red" :text="'حذف'">
                    </v-btn>
                  </div>
                </template>

                <template v-slot:bottom>
                  <div class="text-center pt-2"></div>
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
            <span><v-icon>mdi-home-outline</v-icon> افزودن ظرفیت جدید </span>
            <v-btn variant="flat" icon="mdi-close" @click="openAddSchool = false"></v-btn>
          </div>
        </v-card-title>
        <v-card-text>
          <div elevation="0" title="ورود اطلاعات" flat class="">
            <FormKit @submit="handleCreate" type="form" :incomplete-message="false" :actions="false">
              <div elevation="0" class="rounded-lg">
                <div elevation="0" title="ورود اطلاعات" flat class="">
                  <v-container class="!border !border-gray-100 !rounded-xl">
                    <v-row class="items-center justify-center">
                      <v-col cols="12" md="6">
                        <formsNumberInput name="min_capacity_shift_female" id="min_capacity_shift_female"
                          label="پیش فرض حداقل تعداد شیفت های یک خادمیار زن" :value="1"
                          :validation-messages="numberValidationMessages" />
                      </v-col>
                      <v-col cols="12" md="6">
                        <formsNumberInput name="max_capacity_shift_female" id="max_capacity_shift_female"
                          label="پیش فرض حداکثر تعداد شیفت های یک خادمیار زن" :value="1"
                          :validation-messages="numberValidationMessages" />
                      </v-col>
                      <v-col cols="12" md="6">
                        <formsNumberInput name="min_capacity_shift_male" id="min_capacity_shift_male"
                          label="پیش فرض حداقل تعداد شیفت های یک خادمیار مرد" :value="1"
                          :validation-messages="numberValidationMessages" />
                      </v-col>
                      <v-col cols="12" md="6">
                        <formsNumberInput name="max_capacity_shift_male" id="max_capacity_shift_male"
                          label="پیش فرض حداکثر تعداد شیفت های یک خادمیار مرد" :value="1"
                          :validation-messages="numberValidationMessages" />
                      </v-col>
                      <v-col cols="12" md="6">
                        <formsTextareaInput name="description" id="description" placeholder="توضیحات" />
                      </v-col>
                    </v-row>
                  </v-container>
                </div>
              </div>
              <v-row class="my-3">
                <v-spacer></v-spacer>

                <v-btn text="بستن" variant="plain" @click="handleAddModal"></v-btn>

                <FormsButton type="submit" variant="primary" title="افزودن">
                </FormsButton>
              </v-row>
            </FormKit>
          </div>
        </v-card-text>

        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </div>

  <!--  -->
  <div v-if="selectedItem" class="pa-4 text-center">
    <v-dialog v-model="openEditModal" max-width="900">
      <v-card>
        <v-card-title>
          <div class="flex justify-between items-center">
            <span><v-icon>mdi-home-outline</v-icon> ویرایش 0ظرفیت </span>
            <v-btn variant="flat" icon="mdi-close" @click="handleCloseEditModal"></v-btn>
          </div>
        </v-card-title>
        <v-card-text>
          <div elevation="0" title="ویرایش اطلاعات" flat class="">
            <FormKit @submit="handleEdit" type="form" :incomplete-message="false" :actions="false">
              <div elevation="0" class="rounded-lg">
                <div elevation="0" title="ورود اطلاعات" flat class="">
                  <v-container class="!border !border-gray-100 !rounded-xl">
                    <v-row class="items-center justify-center">
                      <v-col cols="12" md="6">
                        <FormKit dir="rtl" type="number" step="1" label-class="form-label" input-class="form-control"
                          messages-class="form-text text-red" validation="required"
                          v-model:model-value="selectedItem.minCapacityShiftFemale" name="min_capacity_shift_female"
                          id="min_capacity_shift_female" label="پیش فرض حداقل تعداد شیفت های یک خادمیار زن"
                          :validation-messages="numberValidationMessages"></FormKit>
                      </v-col>
                      <v-col cols="12" md="6">
                        <FormKit dir="rtl" type="number" step="1" label-class="form-label" input-class="form-control"
                          messages-class="form-text text-red" validation="required"
                          v-model:model-value="selectedItem.maxCapacityShiftFemale" name="max_capacity_shift_female"
                          id="max_capacity_shift_female" label="پیش فرض حداکثر تعداد شیفت های یک خادمیار زن"
                          :validation-messages="numberValidationMessages"></FormKit>
                      </v-col>
                      <v-col cols="12" md="6">
                        <FormKit dir="rtl" type="number" step="1" label-class="form-label" input-class="form-control"
                          messages-class="form-text text-red" validation="required"
                          v-model:model-value="selectedItem.minCapacityShiftMale" name="min_capacity_shift_male"
                          id="min_capacity_shift_male" label="پیش فرض حداقل تعداد شیفت های یک خادمیار مرد"
                          :validation-messages="numberValidationMessages"></FormKit>
                      </v-col>
                      <v-col cols="12" md="6">
                        <FormKit dir="rtl" type="number" step="1" label-class="form-label" input-class="form-control"
                          messages-class="form-text text-red" validation="required"
                          v-model:model-value="selectedItem.maxCapacityShiftMale" name="max_capacity_shift_male"
                          id="max_capacity_shift_male" label="پیش فرض حداکثر تعداد شیفت های یک خادمیار مرد"
                          :validation-messages="numberValidationMessages"></FormKit>
                      </v-col>
                      <v-col cols="12" md="6">
                        <FormKit type="textarea" label-class="form-label" input-class="form-control"
                          messages-class="form-text text-red" validation="required"
                          v-model:model-value="selectedItem.desc" name="description" id="description"
                          placeholder="توضیحات"></FormKit>
                      </v-col>
                    </v-row>
                  </v-container>
                </div>
              </div>
              <v-row class="my-3">
                <v-spacer></v-spacer>

                <v-btn text="بستن" variant="plain" @click="handleCloseEditModal"></v-btn>

                <FormsButton type="submit" variant="primary" title="ویرایش">
                </FormsButton>
              </v-row>
            </FormKit>
          </div>
        </v-card-text>

        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </div>

</template>
<script setup>

const errorMsg = ref("")
const loading = ref(false)
const isData = ref(false);
const selectedItem = ref(null);
const openEditModal = ref(false);
const numberValidationMessages = ref({ required: "فیلد تعداد الزامیست" });
import axios from 'axios';
import $swal from 'sweetalert2'
const capacityList = useAsyncData("capacityList", () => ({ status: false, data: [] }));
const orderedData = ref([]);
const openAddSchool = ref(false);

// list data headers
const headers = [
  { title: "حداقل ظرفیت اقایان", align: "center", key: "minCapacityShiftMale" },
  { title: "حداکثر ظرفیت آقایان", align: "center", key: "maxCapacityShiftMale" },
  { title: "حداقل ظرفیت بانوان", align: "center", key: "minCapacityShiftFemale" },
  { title: "حداکثر ظرفیت بانوان", align: "center", key: "maxCapacityShiftFemale" },
  { title: "توضیحات", align: "center", key: "desc" },
  { title: "گزینه ها", align: "center", key: "options" },
];
// a callback function to order data based on headers
function createRows(item) {
  return {
    id: item.id,
    minCapacityShiftMale: item.min_capacity_shift_male,
    maxCapacityShiftMale: item.max_capacity_shift_male,
    minCapacityShiftFemale: item.min_capacity_shift_female,
    maxCapacityShiftFemale: item.max_capacity_shift_female,
    desc: item.description,
  };
}

// open edit modal handler
function handleOpenEditModal(item) {
  // store edit value item id
  selectedItem.value = item;

  // itemStatus.value = item.status == "فعال" ? true : false;
  openEditModal.value = true;
}
// close edit modal handler
function handleCloseEditModal() {
  // store edit value item id
  openEditModal.value = false;
  selectedItem.value = null;
}

// add mew item modal handler
const handleAddModal = () => {
  openAddSchool.value = !openAddSchool.value;
};


async function handleCreate(formData) {
  //console.log(formData);
  try {
    loading.value = true;
    const data = await axios.post("/api/shifts/capacity/add", formData);
    // console.log(data.data, "بخقئیشفش");
    if (data.data.status) {

      $swal.fire("تنظیمات با موفقیت انجام شد!", "", "success");
      useAsyncData("capacityList", () =>
            $fetch(
              `/api/shifts/capacity/list`
            )
          );
    } else {
      $swal.fire("خطا در دریافت اطلاعات!", "", "error");
      // errorMsg.value = "لطفا اطلاعات را بظرفیت جدیدتی وارد کنید";
    }
  } catch (error) {
    $swal.fire("خطا در دریافت اطلاعات!", "", "error");
    //console.log(error);
  } finally {
    loading.value = false;
  }
}

async function handleEdit(formData) {
  try {
    loading.value = true;
    const data = await axios.post("/api/shifts/capacity/update", {...formData,id:selectedItem.value.id});
    // console.log(data.data, "بخقئیشفش");
    if (data.data.status) {

      $swal.fire("تنظیمات با موفقیت ارسال شد!", "", "success");
      useAsyncData("capacityList", () =>
            $fetch(
              `/api/shifts/capacity/list`
            )
          );
    } else {
      $swal.fire("خطا در دریافت اطلاعات!", "", "error");
      // errorMsg.value = "لطفا اطلاعات را بظرفیت جدیدتی وارد کنید";
    }
  } catch (error) {
    $swal.fire("خطا در دریافت اطلاعات!", "", "error");
    //console.log(error);
  } finally {
    loading.value = false;
  }
}
// delete item handler
async function handleDeleteItem(id) {
  $swal
    .fire({
      title: "از حذف آیتم مورد نظر اطمینان دارید؟",
      showCancelButton: true,
      confirmButtonText: "بله",
      cancelButtonText: "خیر",
    })
    .then(async (result) => {
      if (result.isConfirmed) {
        const response = await $fetch(
          `/api/shifts/capacity/delete?capacityID=${id}`
        );
        if (response.status) {
          useAsyncData("capacityList", () =>
            $fetch(
              `/api/shifts/capacity/list`
            )
          );
          $swal.fire("آیتم مورد نظر حذف شد.", "", "success");
        } else {
          $swal.fire("مشکلی پیش آمده است.", "", "error");
        }
      }
    });
}

// initial data fetching and chack values
watch(capacityList.data, () => {
  if (capacityList.data.value.status) {
    isData.value = true;
    loading.value = false;
    orderedData.value = capacityList.data.value.data.map((item) =>
      createRows(item)
    );
  } else {
    isData.value = false;
    loading.value = false;
  }
});

onMounted(() => {
  useAsyncData("capacityList", () =>
    $fetch(`/api/shifts/capacity/list`)
  );
});
</script>
