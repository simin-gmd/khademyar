<template>
  <PublicPageTitle title="لیست شیفت های گذشته" />

  <CardSection>
   
    <formsDataTable :search="studentSearch" @change="handleSearchItems">
      <template #table>
        <v-infinite-scroll
          color="secondary"
          :height="420"
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
            <template v-slot:item.stock="{ item }">
              <div class="text-center">
                <v-dialog transition="dialog-bottom-transition" max-width="800">
                  <template v-slot:activator="{ props: activatorProps }">
                    <v-btn
                      v-bind="activatorProps"
                      class="rounded-lg !text-blue-500"
                      block
                      variant="text"
                    >
                      <v-icon> mdi-eye-plus </v-icon></v-btn
                    >
                  </template>

                  <template v-slot:default="{ isActive }">
                    <v-card>
                      <v-toolbar :title="item.shiftName"></v-toolbar>

                      <v-card-text class="p-5">
                        <v-container-fluid>
                          <v-row class="items-center justify-center">
                            <v-col cols="6" md="4">
                              <v-card
                                class="mx-auto text-base !bg-slate-100 !py-1"
                              >
                                <template v-slot:title> مناسبت </template>
                                <v-card-text> {{ item.name }} </v-card-text>
                              </v-card>
                            </v-col>
                            <v-col cols="6" md="4">
                              <v-card
                                class="mx-auto text-base !bg-slate-100 !py-1"
                              >
                                <template v-slot:title> تاریخ </template>
                                <v-card-text> {{ item.date }} </v-card-text>
                              </v-card>
                            </v-col>
                            <v-col cols="6" md="4">
                              <v-card
                                class="mx-auto text-base !bg-slate-100 !py-1"
                              >
                                <template v-slot:title> ساعت شروع </template>
                                <v-card-text> {{ item.time }} </v-card-text>
                              </v-card>
                            </v-col>
                            <v-col cols="6" md="4">
                              <v-card
                                class="mx-auto text-base !bg-slate-100 !py-1"
                              >
                                <template v-slot:title>
                                  تعداد افراد مورد نیاز زن
                                </template>
                                <v-card-text>
                                  {{ item.number.woman }}
                                </v-card-text>
                              </v-card>
                            </v-col>
                            <v-col cols="6" md="4">
                              <v-card
                                class="mx-auto text-base !bg-slate-100 !py-1"
                              >
                                <template v-slot:title>
                                  تعداد افراد مورد نیاز مرد
                                </template>
                                <v-card-text>
                                  {{ item.number.man }}
                                </v-card-text>
                              </v-card>
                            </v-col>
                            <v-col cols="6" md="4">
                              <v-card
                                class="mx-auto text-base !bg-slate-100 !py-1"
                              >
                                <template v-slot:title>
                                  تعداد اعلام آمادگی زن
                                </template>
                                <v-card-text>
                                  {{ item.people.woman }}
                                </v-card-text>
                              </v-card>
                            </v-col>
                            <v-col cols="6" md="4">
                              <v-card
                                class="mx-auto text-base !bg-slate-100 !py-1"
                              >
                                <template v-slot:title>
                                  تعداد اعلام آمادگی مرد
                                </template>
                                <v-card-text>
                                  {{ item.people.man }}
                                </v-card-text>
                              </v-card>
                            </v-col>
                            <v-col cols="12" class="flex ga-3">
                              <v-btn
                                class="mx-auto text-base !bg-teal-800 !text-white !py-1"
                              >
                                <v-icon> mdi-download-box </v-icon>
                                خروجی
                              </v-btn>

                              <v-btn
                                class="mx-auto text-base !bg-teal-700 !text-white !py-1"
                              >
                                <v-icon> mdi-printer </v-icon>
                                پرینت
                              </v-btn>
                            </v-col>
                            <v-col cols="6" md="4"> </v-col>
                          </v-row>
                        </v-container-fluid>
                      </v-card-text>

                      <v-card-actions class="justify-end">
                        <v-btn
                          text="بستن"
                          @click="isActive.value = false"
                        ></v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </div>
            </template>

            <template v-slot:item.number="{ item }">
              <div class="text-center">
                <div class="flex items-center justify-center gap-x-2">
                  <span> {{ item.number.man }}: مرد </span>
                  <span> {{ item.number.woman }}: زن </span>
                </div>
              </div>
            </template>
            <template v-slot:item.people="{ item }">
              <div class="text-center">
                <div class="flex items-center justify-center gap-x-2">
                  <span> {{ item.people.man }}: مرد </span>
                  <span> {{ item.people.woman }}: زن </span>
                </div>
              </div>
            </template>

            <template v-slot:bottom>
              <div class="text-center pt-2">
                <!-- <v-pagination v-model="page" :length="pageCount"></v-pagination> -->
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


</template>
<script setup>
//params for inputs
const degrees = ref(["ابتدایی", "متوسطه اول", "متوسطه دوم"]);
const degreesValidationMessages = ref({
  required: "فیلد انتخاب مقطع الزامیست",
});

const branchs = ref(["سجاد", "هنرستان", "هفت تیر", "خیام"]);
const branchsValidationMessages = ref({
  required: "فیلد انتخاب شعبه الزامیست",
});
const nameValidationMessages = ref({ required: "فیلد عنوان الزامیست" });
const addrValidationMessages = ref({ required: "فیلد آدرس الزامیست" });
const numberValidationMessages = ref({ required: "فیلد تعداد الزامیست" });

const headers = [
  { title: "نام شیفت", align: "center", key: "shiftName" },
  { title: "مناسبت", align: "center", key: "name" },
  { title: "تاریخ", align: "center", key: "date" },
  { title: "ساعت", align: "center", key: "time" },
  // { title: "نام خانوادگی", align: "center", key: "familyName" },
  { title: "تعداد افراد مورد نیاز", align: "center", key: "number" },
  { title: "تعداد اعلام آمادگی ها", align: "center", key: "people" },
  // { title: "توضیحات کاربر", align: "center", key: "descUser" },
  // { title: "قبول/ رد", align: "center", key: "select" },
  { title: "مشاهده اطلاعات", align: "center", key: "stock" },
];

// const dataListState = useState("dataList", () => []);
// const isData = computed(() => (dataListState.value.length ? true : false));

//handel modal script
const openAddSchool = ref(false);
const handleAddModal = () => {
  openAddSchool.value = !openAddSchool.value;
};

const studentSearch = useState("search", () => "");
const handleSearchItems = (value) => {
  studentSearch.value = value;
};

//  load inital data table

let items = [
  {
    shiftName: "شیفت 5",
    name: " میلاد امان زمان",
    date: "1403/06/13",
    time: "17:30",
    stock: true,
    people: {
      man: "12",
      woman: "14",
    },
    number: {
      man: "12",
      woman: "14",
    },
  },

  {
    shiftName: "شیفت 7  ",
    name: "شهادت امام رضا",
    date: "1403/06/13",
    time: "17:30",
    stock: true,
    people: {
      man: "12",
      woman: "14",
    },
    number: {
      man: "12",
      woman: "14",
    },
  },
  {
    shiftName: "شیفت 1",
    name: " میلاد امان زمان",
    date: "1403/06/13",
    time: "17:30",
    stock: true,
    people: {
      man: "12",
      woman: "14",
    },
    number: {
      man: "12",
      woman: "14",
    },
  },
  {
    shiftName: "شیفت 7",
    name: "  نیمه شعبان",
    date: "1403/06/13",
    time: "17:30",
    stock: true,
    people: {
      man: "12",
      woman: "14",
    },
    number: {
      man: "12",
      woman: "14",
    },
  },
  {
    shiftName: "شیفت 7  ",
    name: "شهادت امام رضا",
    date: "1403/06/13",
    time: "17:30",
    stock: true,
    people: {
      man: "12",
      woman: "14",
    },
    number: {
      man: "12",
      woman: "14",
    },
  },
  {
    shiftName: "شیفت 1",
    name: " میلاد امان زمان",
    date: "1403/06/13",
    time: "17:30",
    stock: true,
    people: {
      man: "12",
      woman: "14",
    },
    number: {
      man: "12",
      woman: "14",
    },
  },
  {
    shiftName: "شیفت 7",
    name: "  نیمه شعبان",
    date: "1403/06/13",
    time: "17:30",
    stock: true,
    people: {
      man: "12",
      woman: "14",
    },
    number: {
      man: "12",
      woman: "14",
    },
  },
  {
    shiftName: "شیفت 7  ",
    name: "شهادت امام رضا",
    date: "1403/06/13",
    time: "17:30",
    stock: true,
    people: {
      man: "12",
      woman: "14",
    },
    number: {
      man: "12",
      woman: "14",
    },
  },
  {
    shiftName: "شیفت 1",
    name: " میلاد امان زمان",
    date: "1403/06/13",
    time: "17:30",
    stock: true,
    people: {
      man: "12",
      woman: "14",
    },
    number: {
      man: "12",
      woman: "14",
    },
  },
  {
    shiftName: "شیفت 7",
    name: "  نیمه شعبان",
    date: "1403/06/13",
    time: "17:30",
    stock: true,
    people: {
      man: "12",
      woman: "14",
    },
    number: {
      man: "12",
      woman: "14",
    },
  },
];

const loadItems = ({ done }) => {
  done("empty");
};
</script>
