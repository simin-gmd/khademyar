<template>
  <PublicPageTitle title="رویداد ها" />
  <div ref="elFS" class="w-full h-full flex flex-col bg-white overflow-auto">
    <!-- :class="`bg_${bgColor ? bgColor : 'slate'}`" -->
    <!--  -->
    <div class="flex justify-end p-5 z-[50]">
      <v-avatar
        @click="toggle"
        variant="flat"
        color="white"
        class="!rounded-full !p-0 cursor-pointer"
      >
        <v-icon size="small" color="black"
          >mdi-{{ isFullscreen ? "fullscreen-exit" : "fullscreen" }}</v-icon
        >
      </v-avatar>
    </div>
    <div class="p-4 mt-5 flex-grow">
      <!-- quiz history data -->
      <CardSection>
        <div class="p-3" v-if="isData">
          <ClientOnly>
            <FullCalendar
              ref="fullCalendar"
              shadow
              v-bind="{ options: calendarOptions }"
              :events="orderedData"
            >
              <template v-slot:eventContent="arg">
                <div
                  class="w-full flex flex-row justify-between px-3 relative"
                  style="white-space: break-spaces"
                >
                  <span class="min-w-[40px] overflow-ellipsis">{{
                    arg.event._def.title
                  }}</span>
                </div>
              </template>
              <template v-slot:dayCellContent="arg">
                <div
                  :aria-disabled="arg.isPast"
                  class="flex w-full cursor-pointer justify-between items-center"
                >
                  <span class="pr-3" v-if="arg.isToday"> امروز </span>
                  <span v-else>
                    {{ arg.dayNumberText }}
                  </span>
                </div>
              </template>
            </FullCalendar>
          </ClientOnly>
        </div>
      </CardSection>
    </div>
  </div>
</template>
<script setup>
import { useEventListener } from "#imports";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";
// initial data
const elFS = ref(null);
const { isFullscreen, toggle } = useFullscreen(elFS);
const config = useRuntimeConfig();
const { $swal } = useNuxtApp();
const eventList = ref({ status: false, data: [] });
const updateEventDATA = async () => {
  return await $fetch(`/api/shifts/list?limit=100000`);
};
// states
const orderedData = ref([]);
const selcetedType = ref(1);
const openModal = ref(false);
const selectedEvent = ref(null);
const endTime = ref("00:00");
const startTime = ref("00:00");
const openEditModal = ref(false);
const isData = ref(false);
const selectedDate = ref(new Date());
const selectedPermissions = ref([]);
//static types
const eventTypes = [
  { value: 1, label: "المپیاد", color: "#00897B" },
  { value: 2, label: "جشن ", color: "#6007D8" },
  { value: 3, label: "مسابقه", color: "#FF6839" },
  { value: 4, label: "آزمون", color: "#3F51B5" },
];
const permissionsList = [
  { label: "معلم", value: "teacher" },
  { label: "والدین", value: "parent" },
  { label: "پشتیبان", value: "adviser" },
  { label: "مدیر مدرسه", value: "admin" },
  { label: "مدیران", value: "master" },
  { label: "دانش آموز", value: "student" },
  { label: "کادر اداری", value: "partner" },
];

// validatonbs
const typesValidationMessages = ref({
  required: "فیلد انتخاب نوع آزمون الزامیست",
});
const years = ref(["1401-1402", "1400-1401"]);
const yearValidationMessages = ref({
  required: "فیلد  سال تحصیلی الزامیست",
});

const handleDateClick = function (arg) {
  const date = moment(arg.dateStr).locale("fa").format("YYYY-MM-DD");
};

const { getRndColor, colorRef } = useRndColor();
// create event list data
const createEvent = (item) => {
  getRndColor();
  return {
    id: item.id,
    title: item.name,
    start: item.start,
    end: item.start,
    // backgroundColor: eventTypes.find((x) => x.value == item.type)?.color,
    classNames: [`c-${colorRef.value}`],
  };
};

// calendar options
const calendarOptions = ref({});

watch(eventList, () => {
  if (eventList.value.status) {
    orderedData.value = eventList.value.data.map((item) => createEvent(item));
    // console.log(orderedData.value);
    calendarOptions.value = {
      plugins: [dayGridPlugin, interactionPlugin],
      locale: "fa",
      direction: "rtl",
      initialView: "dayGridMonth",
      selectable: false,
      weekends: true,
      nowIndicator: true,
      firstDay: 6,
      editable: false,
      showNonCurrentDates: false,
      dateClick: handleDateClick,
      titleFormat: { year: "numeric", month: "long" },
      buttonText: {
        today: "برو به امروز",
        month: "ماه",
        week: "هفته",
        day: "روز",
      },

      initialEvents: [],
      events: orderedData.value,
    };
  }
  isData.value = true;
});

onMounted(async () => {
  calendarOptions.value = {
    plugins: [dayGridPlugin, interactionPlugin],
    locale: "fa",
    direction: "rtl",
    initialView: "dayGridMonth",
    selectable: false,
    weekends: true,
    nowIndicator: true,
    firstDay: 6,
    editable: false,
    showNonCurrentDates: false,
    dateClick: handleDateClick,
    titleFormat: { year: "numeric", month: "long" },
    buttonText: {
      today: "برو به امروز",
      month: "ماه",
      week: "هفته",
      day: "روز",
    },

    initialEvents: [],
    events: [],
  };
  eventList.value = await updateEventDATA();
  // console.log(eventList.value);
});
</script>
<style>
.c-blue {
  background-color: rgba(58, 122, 211, 0.639) !important;
  color: #fff;
}
.c-red {
  background-color: rgba(218, 91, 23, 0.58) !important;
  color: #fff;
}
.c-green {
  background-color: rgba(15, 135, 87, 0.555) !important;
  color: #fff;
}
.c-yellow {
  background-color: rgba(163, 160, 26, 0.582) !important;
  color: #fff;
}
</style>
