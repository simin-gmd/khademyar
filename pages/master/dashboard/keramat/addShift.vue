<template>
  <PublicPageTitle title="شیفت ها" />
  <PublicPageInfo text="اینجا شما میتوانید شیفت ایجاد کنید" />

  <CardSection>
    <v-card>
      <v-card-title>
        <div class="flex justify-between items-center">
          <span><v-icon>mdi-home-outline</v-icon> افزودن شیفت </span>
        </div>
      </v-card-title>
      <v-card-text>
        <div elevation="0" title="ورود اطلاعات" flat class="">
          <FormKit
            type="form"
            id="handleCreate"
            @submit="handleCreate"
            :incomplete-message="false"
            :actions="false"
          >
            <v-container class="!border !border-gray-100 !rounded-xl">
              <v-row class="items-center justify-center">
                <v-col cols="12" md="4">
                  <FormKit
                    type="text"
                    name="name"
                    v-model="inputRef.name"
                    id="name"
                    label="نام شیفت"
                    placeholder=""
                    :validation-messages="nameValidationMessages"
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <FormKit
                    type="number"
                    v-model="inputRef.num_male_needed"
                    name="num_male_needed"
                    id="num_male_needed"
                    label="تعداد مرد ها"
                    placeholder=""
                  />
                </v-col>
                <v-col cols="12" md="4">
                  <FormKit
                    type="number"
                    name="num_female_needed"
                    v-model="inputRef.num_female_needed"
                    id="num_female_needed"
                    label="تعداد زن ها"
                    placeholder=""
                  />
                </v-col>
                <v-col cols="12" md="4">
                  <FormKit
                    type="text"
                    v-model="inputRef.occasion"
                    name="occasion"
                    id="occasion"
                    label="موضوع شیفت"
                    placeholder=""
                    :validation-messages="nameValidationMessages"
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <span>تاریخ شروع:</span>
                  <DatePicker v-model="date" type="datetime" />
                </v-col>
                <v-col cols="12" md="4">
                  <FormKit
                    type="textarea"
                    v-model="inputRef.description"
                    name="description"
                    id="description"
                    label="توضیحات"
                    placeholder=""
                  />
                </v-col>
              </v-row>
              <v-row class="justify-end">
                <FormsButton type="btn" variant="primary" title="ذخیره">
                  <!-- <template #append>
                              <v-icon>mdi-plus</v-icon>
                            </template> -->
                </FormsButton>
              </v-row>
            </v-container>
          </FormKit>
        </div>
      </v-card-text>

      <v-divider></v-divider>
    </v-card>
  </CardSection>
</template>
<script setup>
import axios from "axios";
import { reset } from "@formkit/core";
const { $swal } = useNuxtApp();

// states
const date = ref(new Date());

//params for inputs
const nameValidationMessages = ref({ required: "فیلد عنوان الزامیست" });

const inputRef = ref({
  name: "",
  description: "",
  num_male_needed: "",
  num_female_needed: "",
});
const handleCreate = async (formData) => {
  const response = await axios.post("/api/shifts/add", {
    ...formData,
    start: new Date(date.value).toISOString(),
  });
  if (response.data.status) {
    inputRef.value = {
      name: "",
      description: "",
      num_male_needed: "",
      num_female_needed: "",
    };
    date.value = new Date();
    reset("handleCreate");
    $swal.fire("شیفت با موفقیت ایجاد شد", "", "success");
  } else {
    $swal.fire("مشکلی پیش آمده است", "", "error");
  }
};
</script>
