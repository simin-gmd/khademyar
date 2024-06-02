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
                    <h2 class="text-center !cursor-default font-bold text-green-800">
                      بسم الله الرحمان الرحیم
                    </h2>
                    <div class="form-holder">
                      <FormKit
                        type="form"
                        :incomplete-message="false"
                        :actions="false"
                        dir="rtl"
                      >
                        <v-row class="items-center justify-center">
                          <v-col cols="12">
                            <formsTextInput
                              name="username"
                              id="username"
                              label="نام کاربری"
                              placeholder=""
                              validationMessages="nameValidationMessages"
                            />
                          </v-col>
                          <v-col cols="12">
                            <FormKit
                              type="password"
                              name="password"
                              value=" رمز عبور جدید" 
                              label=" رمز عبور جدید"
                              validation="required"
                              messages-class="form-text text-red"
                            />
                          </v-col>
                          <v-col cols="12">
                            <FormKit
                              type="password"
                              name="passwordR"
                              value="تکرار رمز عبور" 
                              label="تکرار رمز عبور"
                              validation="required"
                              messages-class="form-text text-red"
                            />
                          </v-col>
                        </v-row>
                      </FormKit>
                      <NuxtLink to="/master">
                        <button class="submit-btn">ورود</button>
                      </NuxtLink>
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
                    
                    <NuxtLink to="/login" class="text-base text-sky-500">
                      صفحه ورود
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
const nameValidationMessages = ref({ required: "فیلد نام کاربری الزامیست" });
</script>
