<template>
  <v-app>
    <v-card class="w-full h-full">
      <ProfileUserlayoutsDashboardAppBar>
        <PublicPageTitle title="صفحه اصلی" />
        <!-- page content -->
        <div class="w-full h-full">
          <CardSection>
            <div class="mb-4">
              <publicPageTitle title="وضعیت کلی شیفت ها" />
            </div>
            <div v-if="dashboardInfo" class="grid  grid-cols-12 gap-5 justify-between md:justify-start p-5">

              <div  class=" col-span-12 md:col-span-6 lg:col-span-4">

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
              <!-- <div class=" col-span-12 md:col-span-6 lg:col-span-4">

                <UtilitiesStats variant="primary">
                  <template v-slot:icon>
                    <v-icon>mdi-home</v-icon>
                  </template>
                  <template v-slot:title>تعداد ظرفیت باقی مانده</template>
                  <template v-slot:value> 12 </template>
                </UtilitiesStats>
              </div> -->
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

          
        </div>


      </ProfileUserlayoutsDashboardAppBar>
    </v-card>
  </v-app>
</template>
<script setup>
const username = ref(null);
const setUserData = useAsyncData("userData", () => $fetch("/api/auth/info"));
watch(setUserData.data, () => {
  username.value = setUserData.data.value.data.username;
  // console.log(username.value  ,"ihbgufhdjwskomknbfgvhuji");
});
const dashboardInfo=ref(null)

onMounted(async() => {
  
  const shiftInfo = await $fetch(`/api/users/shift_dashboard`);
  if (shiftInfo.status) {
    dashboardInfo.value = shiftInfo.data
  }
});
</script>
