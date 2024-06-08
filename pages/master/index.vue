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
            <div v-if="dashboardInfo" class="grid  grid-cols-12 gap-5 justify-between md:justify-start p-5">

              <div class=" col-span-12 md:col-span-6 lg:col-span-4">

                <UtilitiesStats variant="error">
                  <template v-slot:icon>
                    <v-icon>mdi-home</v-icon>
                  </template>
                  <template v-slot:title> تعدادشیفت های موجود</template>
                  <template v-slot:value>
                    {{ dashboardInfo.available_shifts }}
                  </template>
                </UtilitiesStats>
              </div>
             
              <div class=" col-span-12 md:col-span-6 lg:col-span-4">

                <UtilitiesStats variant="warning">
                  <template v-slot:icon>
                    <v-icon>mdi-home</v-icon>
                  </template>
                  <template v-slot:title> تعداد درخواست های در انتظار </template>
                  <template v-slot:value>
                    {{ dashboardInfo.pending_shift_requests }}
                  </template>
                </UtilitiesStats>
              </div>
              <div class=" col-span-12 md:col-span-6 lg:col-span-4">

                <UtilitiesStats variant="success">
                  <template v-slot:icon>
                    <v-icon>mdi-home</v-icon>
                  </template>
                  <template v-slot:title> تعداد شیفت های انجام شده </template>
                  <template v-slot:value>
                    {{ dashboardInfo.done_shifts }}
                  </template>
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

const loading = ref(true)

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
const username = ref(null);
const setUserData = useAsyncData("userData", () => $fetch("/api/auth/info"));
watch(setUserData.data, () => {
  username.value = setUserData.data.value.data.username;
  // console.log(username.value  ,"ihbgufhdjwskomknbfgvhuji");
});

const dashboardInfo = ref(null)

onMounted(async () => {

  const response = await $fetch(`/api/users/user_dashboard`);
  if (response.status) {
    dashboardInfo.value = response.data
  }
});
//  data table data
const selectedValue = ref([]);
const studentSearch = ref("");
const handleSearchItems = (value) => {
  studentSearch.value = value;
};

definePageMeta({
  layout: false,
});
</script>
