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
            <div class="grid  grid-cols-12 gap-5 justify-between md:justify-start p-5">

              <div class=" col-span-12 md:col-span-6 lg:col-span-3">

                <UtilitiesStats variant="error">
                  <template v-slot:icon>
                    <v-icon>mdi-home</v-icon>
                  </template>
                  <template v-slot:title> تعدادشیفت های تایید شده</template>
                  <template v-slot:value> 7 </template>
                </UtilitiesStats>
              </div>
              <div class=" col-span-12 md:col-span-6 lg:col-span-3">

                <UtilitiesStats variant="primary">
                  <template v-slot:icon>
                    <v-icon>mdi-home</v-icon>
                  </template>
                  <template v-slot:title>تعداد ظرفیت باقی مانده</template>
                  <template v-slot:value> 12 </template>
                </UtilitiesStats>
              </div>
              <div class=" col-span-12 md:col-span-6 lg:col-span-3">

                <UtilitiesStats variant="warning">
                  <template v-slot:icon>
                    <v-icon>mdi-home</v-icon>
                  </template>
                  <template v-slot:title> حداکثر ظرفیت شیفت </template>
                  <template v-slot:value> 20 </template>
                </UtilitiesStats>
              </div>
              <div class=" col-span-12 md:col-span-6 lg:col-span-3">

                <UtilitiesStats variant="success">
                  <template v-slot:icon>
                    <v-icon>mdi-home</v-icon>
                  </template>
                  <template v-slot:title> حداقل ظرفیت شیفت </template>
                  <template v-slot:value> 10 </template>
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

</script>
