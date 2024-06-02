<template>
  <v-app>
    <v-card class="w-full h-full">
      <ProfileLayoutsDashboardAppBar>
        <PublicPageTitle title="صفحه اصلی" />
        <!-- page content -->
        <div class="w-full h-full">
          <CardSection>
            <div class="mb-4">
              <publicPageTitle title="وضعیت کلی کاربران " />
            </div>

            <div class="grid  grid-cols-6 gap-5 justify-between md:justify-start p-5">

              <div class=" col-span-12 md:col-span-6 lg:col-span-3">

                <UtilitiesStats variant="error">
                  <template v-slot:icon>
                    <v-icon>mdi-home</v-icon>
                  </template>
                  <template v-slot:title>تعداد کاربران زن</template>
                  <template v-slot:value> 7 </template>
                </UtilitiesStats>
              </div>
              <div class=" col-span-12 md:col-span-6 lg:col-span-3">

                <UtilitiesStats variant="primary">
                  <template v-slot:icon>
                    <v-icon>mdi-home</v-icon>
                  </template>
                  <template v-slot:title>تعداد کاربران مرد</template>
                  <template v-slot:value> 12 </template>
                </UtilitiesStats>
              </div>
             
            </div>

           

          </CardSection>
          <CardSection>
            <div class="mb-4">
              <publicPageTitle title="وضعیت کلی شیفت ها" />
            </div>

       

            <div class="grid  grid-cols-6 gap-5 justify-between md:justify-start p-5">

             
              <div class=" col-span-12 md:col-span-6 lg:col-span-3">

                <UtilitiesStats variant="warning">
                  <template v-slot:icon>
                    <v-icon>mdi-home</v-icon>
                  </template>
                  <template v-slot:title>تعداد شیفت های انجام شده</template>
                  <template v-slot:value> 20 </template>
                </UtilitiesStats>
              </div>
              <div class=" col-span-12 md:col-span-6 lg:col-span-3">

                <UtilitiesStats variant="success">
                  <template v-slot:icon>
                    <v-icon>mdi-home</v-icon>
                  </template>
                  <template v-slot:title>تعداد شیفت های موجود</template>
                  <template v-slot:value> 10 </template>
                </UtilitiesStats>
              </div>
            </div>


          </CardSection>

<!-- <FormsPersianDate/> -->
          
        </div>


      </ProfileLayoutsDashboardAppBar>
    </v-card>
  </v-app>
</template>
<script setup>
// date picker data
import { useDate } from "vuetify";

const today = new Date("2019-01-08");
const weekday = [1, 2, 3, 4, 5, 6, 0];
const loading = ref(true)
const days = currentWeek()
const events = [
  {
    title: "المپیاد ریاضی",
    start: new Date("2019-01-07 09:00"),
    end: new Date("2024-03-18 10:00"),
    color: "primary",
  },
  {
    title: "آزمون ثبت نام",
    start: new Date("2019-01-10"),
    end: new Date("2019-01-10"),
    allDay: true,
  },
  {
    title: "آزمون ورودی",
    start: new Date("2019-01-09 12:30"),
    end: new Date("2019-01-09 15:30"),
    color: "green",
  },
];
const colors = [
  "blue",
  "indigo",
  "deep-purple",
  "cyan",
  "green",
  "orange",
  "grey darken-1",
];
const titles = [
  "Meeting",
  "Holiday",
  "PTO",
  "Travel",
  "Event",
  "Birthday",
  "Conference",
  "Party",
];
const slide = [
  { id: 0, src: "/images/slider/slider4.png", alt: "slider-img" },
  { id: 1, src: "/images/slider/slider5.png", alt: "slider-img" },
];
function getEvents({ start, end }) {
  const localEvents = [];
  const min = start;
  const max = end;
  const days = (max.getTime() - min.getTime()) / 86400000;
  const eventCount = rnd(days, days + 20);

  for (let i = 0; i < eventCount; i++) {
    const allDay = rnd(0, 3) === 0;
    const firstTimestamp = rnd(min.getTime(), max.getTime());
    const first = new Date(firstTimestamp - (firstTimestamp % 900000));
    const secondTimestamp = rnd(2, allDay ? 288 : 8) * 900000;
    const second = new Date(first.getTime() + secondTimestamp);
    localEvents.push({
      title: titles[rnd(0, titles.length - 1)],
      start: first,
      end: second,
      color: colors[rnd(0, colors.length - 1)],
      allDay: !allDay,
    });
  }

  events = localEvents;
}

function getEventColor(event) {
  return event.color;
}
function rnd(a, b) {
  return Math.floor((b - a + 1) * Math.random()) + a;
}

onMounted(() => {
  const adapter = useDate();
  setTimeout(() => {
    loading.value = !loading.value
  }, 3000)
  // getEvents({
  //   start: adapter.startOfDay(adapter.startOfMonth(new Date())),
  //   end: adapter.endOfDay(adapter.endOfMonth(new Date())),
  // });
});
//  data table data
const selectedValue = ref([]);
const studentSearch = ref("");
const handleSearchItems = (value) => {
  studentSearch.value = value;
};
const headers = [
  { title: "تصویر", align: "center", key: "image" },
  { title: "نام", align: "center", key: "title" },
  { title: "معدل", align: "center", key: "rating" },
  { title: "وضعیت", align: "center", key: "stock" },
  { title: "گزینه ها", align: "center", key: "options" },
];
const items = [
  {
    image: "1.png",
    title: "علی غفاری",
    rating: 15,
    stock: true,
  },
  {
    image: "2.png",
    title: "سعید ملا وردی",
    price: 799.99,
    rating: 12,
    stock: false,
  },
  {
    image: "3.png",
    title: "احسان اکبری",
    price: 649.99,
    rating: 19.5,
    stock: true,
  },
  {
    image: "4.png",
    title: "غلام حسین اسماعیل زهی",
    price: 1499.99,
    rating: 14,
    stock: true,
  },
  {
    image: "5.png",
    title: "شیلا خداداد",
    price: 299.99,
    rating: 18,
    stock: false,
  },
];

const loadItems = ({ done }) => {
  done("empty");
};
definePageMeta({
  layout: false,
});
</script>
