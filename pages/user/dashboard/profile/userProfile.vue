<template>
  <PublicPageTitle title="نمایش پروفایل" />
  <!-- v-if="selectedItem" -->
  <!-- v-if="userInfo" -->
  <CardSection >
    <div class="gap-5 justify-between md:justify-start p-5">
      <FormKit
        @submit="handleEdit"
        type="form"
        id="handleEdit"
        :incomplete-message="false"
        :actions="false"
      >
        <v-container class="!border !border-gray-100 !rounded-xl">
          <v-row class="items-center justify-center">
            <v-col cols="12" class="py-4 justify-center flex">
              <label
                for="editImgProfile"
                class="relative flex flex-col avatarProf"
              >
                <div>
                  <v-icon
                    icon="mdi-pencil-plus-outline "
                    class="editProf"
                    color="gray"
                  ></v-icon>
                  <!-- v-if="selectedItem.image == null" -->
                  <v-avatar
                    variant="flat"
                    class="!shadow-xl"
                    color="blue"
                    size="80"
                  >
                    <span class="text-h5">
                      <!-- {{
                        userInfo.first_name.substring(0, 1) +
                        " " +
                        userInfo.last_name.substring(0, 1)
                      }} -->
                    </span>
                  </v-avatar>
                  <!-- <v-avatar v-else class="!shadow-xl" color="blue" size="80">
                    <v-img
                      contain
                      :src="$config.public.API_URL + selectedItem.image"
                    />
                  </v-avatar> -->
                </div>
                <!-- <input type="file" class="imageUploader" id="editImgProfile" /> -->
              </label>
            </v-col>
            <v-col cols="12" md="6">
              <!-- v-model:model-value="userInfo.first_name" -->
              <FormKit
                disabled
                placeholder=""
                name="firstname"
                id="firstname"
                label="نام  "
                label-class="form-label"
                input-class="form-control"
                messages-class="form-text text-red"
                type="text"
              />
            </v-col>
            <v-col cols="12" md="6">
              <!-- v-model:model-value="userInfo.last_name" -->
              <FormKit
                disabled
                placeholder=""
                name="lastname"
                id="lastname"
                label="نام خانوادگی "
                label-class="form-label"
                input-class="form-control"
                messages-class="form-text text-red"
                type="text"
              />
            </v-col>
            <v-col cols="12" md="6">
              <!-- v-model:model-value="userInfo.email" -->
              <FormKit
                disabled
                placeholder=""
                name="email"
                id="email"
                label="ایمیل"
                type="email"
                validation="required|email|ends_with:.com"
                :validation-messages="{
                  required: 'فیلد ایمیل الزامیست',
                  email: 'فیلد ایمیل معتبر نمیباشد',
                }"
                messages-class="form-text text-red"
              />
            </v-col>
            <v-col cols="12" md="6">
              <!-- v-model:model-value="userInfo.username" -->
              <FormKit
                disabled
                id="mobile"
                name="mobile"
                label="نام کاربری"
                type="text"
                label-class="form-label"
                input-class="form-control"
                :validation="[['required']]"
                :validation-messages="{
                  required: 'فیلد موبایل الزامیست',
                }"
                messages-class="form-text text-red"
                placeholder=""
              />
            </v-col>

            <!-- <v-col cols="12" md="6">
              <FormKit
              v-model:model-value="userInfo.username"
                disabled
                name="national_code"
                id="national_code"
                label="کد ملی"
                placeholder="'12333'"
                label-class="form-label"
                input-class="form-control"
                messages-class="form-text text-red"
                type="text"
              />
            </v-col> -->
          </v-row>
          <!-- <v-row class="justify-center pb-3">
            <FormsButton type="submit" variant="primary" title="ذخیره" disabled> 
              <template #append>
                <v-icon>mdi-pencil</v-icon>
              </template>
            </FormsButton>
          </v-row> -->
        </v-container>
      </FormKit>
    </div>
  </CardSection>

 
</template>
<script setup>
// import { useAuthStore } from '/stores/auth.js'
import { reactive } from 'vue'
  import { useVuelidate } from '@vuelidate/core'
  import { email, required } from '@vuelidate/validators'

  const initialState = {
    name: '',
    email: '',
    select: null,
    checkbox: null,
  }

  const state = reactive({
    ...initialState,
  })

  const items = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
  ]

  const rules = {
    name: { required },
    email: { required, email },
    select: { required },
    items: { required },
    checkbox: { required },
  }

  const v$ = useVuelidate(rules, state)

  function clear () {
    v$.value.$reset()

    for (const [key, value] of Object.entries(initialState)) {
      state[key] = value
    }
  }
import axios from "axios";
const { $swal } = useNuxtApp();
const editImage = ref(null);
// const userInfo = ref(null);
// const setUserData = useAsyncData("userData", () => $fetch("/api/auth/info"));
// watch(setUserData.data, () => {
//   userInfo.value = setUserData.data.value.data;
// });
</script>
