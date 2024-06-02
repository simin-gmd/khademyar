<template>
  <PublicPageTitle title="تنظیمات" />
  <CardSection>
    <v-card-text>
    <div elevation="0" title="ورود اطلاعات" flat class="">
      <FormKit type="form" :incomplete-message="false" :actions="false">
        <div elevation="0" class="rounded-lg">
          <div elevation="0" title="ورود اطلاعات" flat class="">
            <v-container class="!border !border-gray-100 !rounded-xl">
              <v-row class="items-center justify-center">
                <v-col cols="12" md="6">
                  <formsNumberInput
                    name="numberman"
                    id="numberman"
                    label="پیش فرض حداقل تعداد شیفت های یک کاربر"
                    :value="5"
                    :validation-messages="numberValidationMessages"
                  />
                </v-col>
                <v-col class="justify-end">
                  <FormsButton type="submit" @click="acceptChanges" variant="primary" title="ذخیره">
                    <!-- <template #append>
                              <v-icon>mdi-plus</v-icon>
                            </template> -->
                  </FormsButton>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
      </FormKit>
    </div>
  </v-card-text>

  <v-card-text>
    <div elevation="0" title="ورود اطلاعات" flat class="">
      <FormKit type="form" :incomplete-message="false" :actions="false">
        <div elevation="0" class="rounded-lg">
          <div elevation="0" title="ورود اطلاعات" flat class="">
            <v-container class="!border !border-gray-100 !rounded-xl">
              <v-row class="items-center justify-center">
                <v-col cols="12" md="6">
                  <formsNumberInput
                    name="numberman"
                    id="numberman"
                    label="پیش فرض حداکثر تعداد شیفت های یک کاربر"
                    :value="35"
                    :validation-messages="numberValidationMessages"
                  />
                </v-col>
                <v-col class="justify-end">
                  <FormsButton type="submit" @click="acceptChanges" variant="primary" title="ذخیره">
                    <!-- <template #append>
                              <v-icon>mdi-plus</v-icon>
                            </template> -->
                  </FormsButton>
                </v-col>
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
const numberValidationMessages = ref({ required: "فیلد تعداد الزامیست" });
import Swal from 'sweetalert2'
const acceptChanges = () =>{
  Swal.fire({
  position: "center",
  title: "",
  icon: "success",
  text: "تغییرات با موفقیت برای شما ثبت شد",
  showConfirmButton: false,
  timer: 3000
});
}
</script>
