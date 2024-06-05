<template>
  <PublicPageTitle title="تنظیمات" />
  <PublicPageInfo text="شما در صفحه تنظیمات میتوانید حداقل یا حداکثر اعداد خادمیاران را تنظیم کنید." />
  <CardSection>
    <v-card-text>
      <div elevation="0" title="ورود اطلاعات" flat class="">
        <FormKit @submit="acceptChanges" #default="{ value }" type="form" :incomplete-message="false" :actions="false">
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
                  <v-col class="justify-end">

                    <FormsButton type="submit" :disabled="loading" variant="primary" title="ذخیره">
                      <!-- <template #append>
                              <v-icon>mdi-plus</v-icon>
                            </template> -->
                    </FormsButton>
                  </v-col>

                </v-row>
                <v-row>
                  <div color="text-red text-center"> {{ errorMsg }}</div>
                </v-row>
              </v-container>
            </div>
          </div>
        </FormKit>
      </div>
    </v-card-text>

  </CardSection>


</template>
<script setup>
const errorMsg = ref("")
const loading = ref(false)
const numberValidationMessages = ref({ required: "فیلد تعداد الزامیست" });
import axios from 'axios';
import $swal from 'sweetalert2'
async function acceptChanges(formData) {
  //console.log(formData);
  try {
    loading.value = true;
    const data = await axios.post("/api/shifts/setting", formData);
   // console.log(data.data, "بخقئیشفش");
    if (data.data.status) {
      $swal.fire("تنظیمات با موفقیت ارسال شد!", "", "success");
    } else {
    $swal.fire("خطا در دریافت اطلاعات!", "", "error");
      // errorMsg.value = "لطفا اطلاعات را بدرستی وارد کنید";
    }
  } catch (error) {
    $swal.fire("خطا در دریافت اطلاعات!", "", "error");
    //console.log(error);
  } finally {
    loading.value = false;
  }
}

</script>
