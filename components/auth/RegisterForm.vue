<template>
  <div class="login-body">
    <div class="login-container">
      <div class="form-container grid grid-cols-12" dir="ltr">
        <div class="lg:col-span-6 col-span-12 flex items-center justify-center">
          <div class="form-structor">
            <div class="otp-container">
              <div class="login">
                <div class="p-5">
                  <div class="center">
                    <nuxt-link to="/">
                      <img src="/rezaLogo.png" class="max-h-16 mx-auto pt-5" />
                    </nuxt-link>
                    <h2
                      class="text-center !cursor-default font-bold text-green-800"
                    >
                      بسم الله الرحمان الرحیم
                    </h2>
                    <div class="form-holder">
                      <FormKit
                        @submit="register"
                        #default="{ value }"
                        type="form"
                        id="register"
                        :incomplete-message="false"
                        :actions="false"
                        dir="rtl"
                      >
                        <v-row class="items-center justify-center">
                          <v-col cols="12" md="6">
                            <FormKit
                              label-class="form-label"
                              input-class="form-control"
                              validation="required"
                              messages-class="form-text text-red"
                              type="text"
                              name="first_name"
                              id="first_name"
                              label="نام خادم یار"
                              placeholder=""
                              validation-messages="لطفا نام خود را وارد کنید"
                            />
                          </v-col>
                          <v-col cols="12" md="6">
                            <FormKit
                              label-class="form-label"
                              input-class="form-control"
                              validation="required"
                              messages-class="form-text text-red"
                              type="text"
                              name="last_name"
                              id="last_name"
                              label="فامیل خادم یار"
                              placeholder=""
                              validation-messages="لطفا فامیل خود را وارد کنید"
                            />
                          </v-col>
                          <v-col cols="12" md="6">
                            <FormKit
                              label-class="form-label"
                              input-class="form-control"
                              validation="required"
                              messages-class="form-text text-red"
                              type="text"
                              name="national_code"
                              id="national_code"
                              label="کد ملی"
                              placeholder=""
                              validation-messages="کد ملی خود را وارد کنید"
                            />
                          </v-col>
                          <v-col cols="12" md="6">
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
                              :validation-messages="{
                                required: 'لطفا یک نام کاربری برای خود وارد کنید',
                              }"
                            />
                          </v-col>
                          <v-col cols="12" md="6">
                            <FormKit
                              label-class="form-label"
                              input-class="form-control"
                              messages-class="form-text text-red"
                              type="password"
                              name="password"
                              id="password"
                              value="super-secret"
                              label="رمز عبور"
                              validation="required"
                              :validation-messages="{
                                required: 'فیلد رمز عبور الزامیست',
                              }"
                            />
                          </v-col>
                          <v-col cols="12" md="6">
                            <FormKit
                              label-class="form-label"
                              input-class="form-control"
                              messages-class="form-text text-red"
                              type="password"
                              name="password_confirm"
                              label="تکرار رمز عبور"
                              validation="required|confirm"
                              :validation-messages="{
                                required: 'فیلد رمز عبور الزامیست',
                                confirm: 'فیلد رمز عبور تطابق ندارد',
                              }"
                              validation-label="Password confirmation"
                            />
                          </v-col>
                          <v-col cols="12" md="6">
                            <FormKit
                              type="tel"
                              label-class="form-label"
                              input-class="form-control"
                              messages-class="form-text text-red"
                              :validation="[
                                ['required'],
                                ['matches', /^(\+98|0)?9\d{9}$/],
                              ]"
                              :validation-messages="{
                                required: 'فیلد شماره تماس الزامیست',
                                matches: 'فیلد شماره تماس معتبر نمیباشد',
                              }"
                              placeholder=""
                              validation-visibility="dirty"
                              id="mobile"
                              name="mobile"
                              label="تلفن "
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
                          ثبت نام
                        </button>
                        <span class="text-red-500">{{ errorMsg }}</span>
                      </FormKit>
                    </div>
                    <div class="text-xs text-center">
                      برای ورود
                      <NuxtLink to="/login" class="text-base text-sky-500">
                        کلیک
                      </NuxtLink>
                      کنید
                    </div>
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
import axios from "axios";
import { reset } from "@formkit/core";
const {$swal} = useNuxtApp()
const loading = ref(false);
const errorMsg = ref("");
const router = useRouter()

async function register(formData) {
  // console.log(formData);
  try {
    loading.value = true;
    const data = await axios.post("/api/auth/signup", formData);
    // console.log(data.data);
    if (data.data.status) {
      reset("register");
      $swal.fire("اطلاعات با موفقیت ارسال شد!","", "success");
      router.replace("/login");
    } else {
      errorMsg.value = "لطفا اطلاعات را بدرستی وارد کنید";
    }
  } catch (error) {
    $swal.fire("خطا در دریافت اطلاعات!", "", "error");
    // console.log(error);
  } finally {
    loading.value = false;
  }
}
//handel modal script
const openAddSchool = ref(false);
const handleAddModal = () => {
  openAddSchool.value = !openAddSchool.value;
};
const changeBirthDate = (value) => {
  birthDate.value = new Date(value);
};

// const studentSearch = useState("search", () => "");
// const handleSearchItems = (value) => {
//   studentSearch.value = value;
// };
//params for descriptions
const descriptions = ref([
  {
    text: "قوانین1",
    id: 1,
  },
  {
    text: "قوانین2",

    id: 2,
  },
  {
    text: "قوانین3",

    id: 3,
  },
  {
    text: "قوانین4",

    id: 4,
  },
  {
    text: "قوانین5",

    id: 5,
  },

  {
    text: "قوانین6",

    id: 6,
  },
]);
</script>
