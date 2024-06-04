<template>
  <div class="login-body">
    <div class="login-container">
      <div class="form-container grid grid-cols-12" dir="ltr">
        <div class="lg:col-span-6 col-span-12 flex items-center justify-center">
          <div class="form-structor">
            <div class="otp-container">
              <div class="login">
                <div class="center col justify-between">
                  <div>
                    <nuxt-link to="/">
                      <img src="/rezaLogo.png" class="max-h-16 mx-auto" />
                    </nuxt-link>
                    <h2
                      class="text-center !cursor-default font-bold text-green-800"
                    >
                      بسم الله الرحمان الرحیم
                    </h2>
                    <div class="form-holder">
                      <FormKit
                        @submit="login"
                        id="login"
                        #default="{ value }"
                        type="form"
                        :incomplete-message="false"
                        :actions="false"
                        dir="rtl"
                      >
                        <v-row class="items-center justify-center">
                          <v-col cols="12">
                            <FormKit
                              label-class="form-label"
                              input-class="form-control"
                              validation="required"
                              messages-class="form-text text-red"
                              type="text"
                              name="username"
                              id="username"
                              label="نام کاربری"
                              placeholder=""
                              validationMessages="فیلد نام کاربری الزامیست"
                            />
                          </v-col>
                          <v-col cols="12">
                            <FormKit
                              type="password"
                              name="password"
                              value="رمز عبور"
                              label="رمز عبور"
                              validation="required"
                              messages-class="form-text text-red"
                            />
                          </v-col>
                        </v-row>
                        <button class="submit-btn" type="submit">
                          <v-progress-circular
                            v-if="loading"
                            :white="3"
                            color="secondary"
                            indeterminate
                          ></v-progress-circular>
                          ورود
                        </button>
                        <span class=" text-red-500">{{ errorMsg }}</span>

                      </FormKit>
                    </div>
                  </div>
                  <div class="text-xs text-center">
                    برای ثبت نام
                    <NuxtLink to="/register" class="text-base text-sky-500">
                      کلیک
                    </NuxtLink>
                    کنید
                  </div>
                  <div class="text-xs text-center">
                    <NuxtLink to="/forgetPass" class="text-base text-sky-500">
                      فراموشی رمز؟
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-6 flex items-center justify-center">
          <div class="bg-container"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from 'axios';

const loading = ref(false);
const errorMsg = ref('')

async function login(formData) {
  // console.log(formData , "fffffff");
  try {
    loading.value = true; 
    const data = await axios.postForm("/api/auth/login", 
    formData 
    );
    // console.log(data.data);
    if (data.data.status) {
      reloadNuxtApp();
    } else {
      errorMsg.value = " نام کاربری یا رمز عبور نا معتبر است";
    }
  } catch (error) {
    // console.log(error);
  } finally {
    loading.value = false;
  }
}
</script>
