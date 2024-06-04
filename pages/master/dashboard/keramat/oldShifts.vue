<template>
  <PublicPageTitle title="لیست شیفت های گذشته" />

  <CardSection>

    <formsDataTable :search="studentSearch" @change="handleSearchItems">
      <template #table>

        <v-data-table no-data-text="لطفا کمی صبر کنید..." :search="studentSearch" :items="items" :headers="headers">
          <!-- data tabel headers -->
          <template v-slot:item.stock="{ item }">
            <div class="text-center">
              <v-dialog transition="dialog-bottom-transition" max-width="800">
                <template v-slot:activator="{ props: activatorProps }">
                  <v-btn v-bind="activatorProps" class="rounded-lg !text-blue-500" block variant="text">
                    <v-icon> mdi-eye-plus </v-icon></v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                  <v-card>
                    <v-toolbar :title="item.shiftName"></v-toolbar>

                    <v-card-text class="p-5">
                      <v-container-fluid>
                        <v-row class="items-center justify-center">
                          <v-col cols="6" md="4">
                            <v-card class="mx-auto text-base !bg-slate-100 !py-1">
                              <template v-slot:title> مناسبت </template>
                              <v-card-text> {{ item.name }} </v-card-text>
                            </v-card>
                          </v-col>
                          <v-col cols="6" md="4">
                            <v-card class="mx-auto text-base !bg-slate-100 !py-1">
                              <template v-slot:title> تاریخ </template>
                              <v-card-text> {{ item.date }} </v-card-text>
                            </v-card>
                          </v-col>
                          <v-col cols="6" md="4">
                            <v-card class="mx-auto text-base !bg-slate-100 !py-1">
                              <template v-slot:title> ساعت شروع </template>
                              <v-card-text> {{ item.time }} </v-card-text>
                            </v-card>
                          </v-col>
                          <v-col cols="6" md="4">
                            <v-card class="mx-auto text-base !bg-slate-100 !py-1">
                              <template v-slot:title>
                                تعداد افراد مورد نیاز زن
                              </template>
                              <v-card-text>
                                {{ item.needed.woman }}
                              </v-card-text>
                            </v-card>
                          </v-col>
                          <v-col cols="6" md="4">
                            <v-card class="mx-auto text-base !bg-slate-100 !py-1">
                              <template v-slot:title>
                                تعداد افراد مورد نیاز مرد
                              </template>
                              <v-card-text>
                                {{ item.needed.man }}
                              </v-card-text>
                            </v-card>
                          </v-col>
                          <v-col cols="6" md="4">
                            <v-card class="mx-auto text-base !bg-slate-100 !py-1">
                              <template v-slot:title>
                                تعداد اعلام آمادگی زن
                              </template>
                              <v-card-text>
                                {{ item.requested.woman }}
                              </v-card-text>
                            </v-card>
                          </v-col>
                          <v-col cols="6" md="4">
                            <v-card class="mx-auto text-base !bg-slate-100 !py-1">
                              <template v-slot:title>
                                تعداد اعلام آمادگی مرد
                              </template>
                              <v-card-text>
                                {{ item.requested.man }}
                              </v-card-text>
                            </v-card>
                          </v-col>
                          <!-- <v-col cols="12" class="flex ga-3">
                            <v-btn class="mx-auto text-base !bg-teal-800 !text-white !py-1">
                              <v-icon> mdi-download-box </v-icon>
                              خروجی
                            </v-btn>

                            <v-btn class="mx-auto text-base !bg-teal-700 !text-white !py-1">
                              <v-icon> mdi-printer </v-icon>
                              پرینت
                            </v-btn>
                          </v-col> -->
                          <v-col cols="6" md="4"> </v-col>
                        </v-row>
                      </v-container-fluid>
                    </v-card-text>

                    <v-card-actions class="justify-end">
                      <v-btn text="بستن" @click="isActive.value = false"></v-btn>
                    </v-card-actions>
                  </v-card>
                </template> 
              </v-dialog>
            </div>
          </template>

          <template v-slot:item.needed="{ item }">
            <div class="text-center">
              <div class="flex items-center justify-center gap-x-2">
                <span> {{ item.needed.man }}: مرد </span>
                <span> {{ item.needed.woman }}: زن </span>
              </div>
            </div>
          </template>
          <template v-slot:item.requested="{ item }">
            <div class="text-center">
              <div class="flex items-center justify-center gap-x-2">
                <span> {{ item.requested.man }}: مرد </span>
                <span> {{ item.requested.woman }}: زن </span>
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

const doneShifts = useAsyncData("doneShifts", () => $fetch("/api/shifts/done_shifts"));

// {
//     shiftName: "شیفت 5",
//     name: " میلاد امان زمان",
//     date: "1403/06/13",
//     time: "17:30",
//     stock: true,
//     requested: {
//       man: "12",
//       woman: "14",
//     },
//     needed: {
//       man: "12",
//       woman: "14",
//     },
//   },

//handel modal script
const openAddSchool = ref(false);
const handleAddModal = () => {
  openAddSchool.value = !openAddSchool.value;
};

function splitDateTimeBeforeT(datetime) {
  const parts = datetime.split('T');
  if (parts.length === 2) {
    return {
      date: parts[0],
      time: parts[1]
    };
  } else {
    return null; // return null if the input string is not in the expected format
  }
} 
const studentSearch = useState("search", () => "");
const handleSearchItems = (value) => {
  studentSearch.value = value;
};
const headers = [
  { title: "نام شیفت", align: "center", key: "name" },
  { title: "مناسبت", align: "center", key: "occasion" },
  { title: "تاریخ", align: "center", key: "date" },
  // { title: "ساعت", align: "center", key: "time" },
  // { title: "نام خانوادگی", align: "center", key: "familyName" },
  { title: "تعداد افراد مورد نیاز", align: "center", key: "needed" },
  { title: "تعداد اعلام آمادگی ها", align: "center", key: "requested" },
  // { title: "توضیحات کاربر", align: "center", key: "descUser" },
  // { title: "قبول/ رد", align: "center", key: "select" },
  { title: "مشاهده اطلاعات", align: "center", key: "stock" },
];

//  load inital data table
const createRows = (item) => {
  return {
    id: item.id,
    name: item.name,
    occasion: item.occasion,
    date: splitDateTimeBeforeT(item.start).date ,
    time: splitDateTimeBeforeT(item.start).time ,
    requested: {
      man: item.num_male_requested,
      woman: item.num_female_requested,
    },
    needed: {
      man: item.num_male_needed,
      woman: item.num_female_needed,
    },
    num_female_needed: item.num_female_needed,
    num_male_needed: item.num_male_needed,
  };

  //  load inital data table

};
const items = ref([
]);
watch(doneShifts.data, () => {
  console.log(doneShifts.data.value?.data, "done");
  if (doneShifts.data.value?.data.length) {
    items.value = doneShifts.data.value?.data.map((i) => createRows(i));
  }
});
</script>
