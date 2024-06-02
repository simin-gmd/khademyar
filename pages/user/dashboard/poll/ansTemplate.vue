<template>
  <PublicPageTitle title="قالب های پاسخ " />

  <CardSection>
    <PublicPageContent @click="handleAddModal">
      <template v-slot:title> افزودن قالب نظر سنجی </template>
      <template v-slot:image>
        <img src="/Omidlogo.png" />
      </template>
      <template v-slot:content>
        هم اکنون  قالبی وجود ندارد برای ایجاد روی دکمه افزودن کلیک کنید.
      </template>
      <template v-slot:action> ایجاد  قالب جدید </template>
    </PublicPageContent>
  </CardSection>

  <div class="pa-4 text-center">
    <v-dialog v-model="openAddSchool" max-width="900">
      <v-card>
        <v-card-title>
          <div class="flex justify-between items-center">
            <span><v-icon>mdi-home-outline</v-icon> افزودن قالب جدید </span>
            <v-btn
              variant="flat"
              icon="mdi-close"
              @click="openAddSchool = false"
            ></v-btn>
          </div>
        </v-card-title>
        <v-card-text>
          <div elevation="0" title="ورود اطلاعات" flat class="">
            <FormKit type="form" :incomplete-message="false" :actions="false">
              <div elevation="0" class="rounded-lg">
                <div elevation="0" title="ورود اطلاعات" flat class="">
                  <v-container class="!border !border-gray-100 !rounded-xl">
                    <v-row class="items-center justify-center">
                      <v-col cols="12" md="6">
                        <formsSelectInput
                          id="year"
                          name="year"
                          :options="years"
                          label="سال تحصیلی"
                          placeholder=""
                          :validation-messages="yearValidationMessages"
                        />
                      </v-col>
                      <v-col cols="12" md="6">
                        <formsTextInput
                          name="name"
                          id="name"
                          label="نام ترم تحصیلی"
                          placeholder=""
                          :validation-messages="nameValidationMessages"
                        />
                      </v-col>
                      <v-col cols="12" md="6">
                        <formsDateInput
                          name="startdate"
                          id="startdate"
                          label="تاریخ شروع ترم"
                          value="1999-01-01"
                        />
                      </v-col>
                      <v-col cols="12" md="6">
                        <formsDateInput
                          name="endtdate"
                          id="endtdate"
                          label="تاریخ پایان ترم"
                          value="1999-01-01"
                        />
                      </v-col>
                      <v-col cols="12" md="6">
                        <formsTextareaInput
                          name="academicdesc"
                          id="academicdesc"
                          label="توضیحات"
                          placeholder=""
                          :validation-messages="descValidationMessages"
                        />
                      </v-col>
                    </v-row>
                  </v-container>
                </div>
              </div>
            </FormKit>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="بستن" variant="plain" @click="handleAddModal"></v-btn>

          <FormsButton type="submit" variant="primary" title="افزودن">
          </FormsButton>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
//params for inputs
const years = ref(["1401-1402", "1400-1401"]);
const yearValidationMessages = ref({
  required: "فیلد  سال تحصیلی الزامیست",
});

const nameValidationMessages = ref({ required: "فیلد عنوان الزامیست" });
const descValidationMessages = ref({ required: "فیلد توضیحات الزامیست" });

//handel modal script
// const dialog = ref(false);
const openAddSchool = ref(false);
const handleAddModal = () => {
  openAddSchool.value = !openAddSchool.value;
};
</script>
