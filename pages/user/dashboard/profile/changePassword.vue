<template>
  <PublicPageTitle title="نمایش پروفایل" />
  <!-- v-if="selectedItem" -->
  <!-- v-if="userInfo" -->

    <CardSection>
    <div class="gap-5 justify-between md:justify-start p-5">
      <FormKit
        @submit="handleChangePass"
        type="form"
        :actions="false"
        #default="{ value }"
        :incomplete-message="false"
        dir="rtl"
      >
        <v-row>
          <v-col cols="12" md="6">
            <FormKit
              label-class="form-label"
              input-class="form-control"
              messages-class="form-text text-red"
              type="password"
              name="old_password"
              id="password"
              value="super-secret"
              label="رمز عبور قبلی"
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
              name="password"
              id="password"
             
              label=" رمز عبور جدید"
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
          <div class="flex flex-row justify-center items-center">
            <FormsButton class="me-4" type="submit" variant="primary" title="ثبت">
            </FormsButton>
          </div>
        </v-row>
      </FormKit>

      <!-- <v-select
          v-model="state.select"
          :error-messages="v$.select.$errors.map(e => e.$message)"
          :items="items"
          label="Item"
          required
          @blur="v$.select.$touch"
          @change="v$.select.$touch"
        ></v-select> -->

      <!-- <v-checkbox
          v-model="state.checkbox"
          :error-messages="v$.checkbox.$errors.map(e => e.$message)"
          label="Do you agree?"
          required
          @blur="v$.checkbox.$touch"
          @change="v$.checkbox.$touch"
        ></v-checkbox> -->
    </div>
  </CardSection>

</template>
<script setup>
// import { useAuthStore } from '/stores/auth.js'
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";
const authStore = useAuthStore();
console.log(authStore.userData);
const initialState = {
  name: "",
  email: "",
  select: null,
  checkbox: null,
};

const state = reactive({
  ...initialState,
});

const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

const rules = {
  name: { required },
  email: { required, email },
  select: { required },
  items: { required },
  checkbox: { required },
};

const v$ = useVuelidate(rules, state);

const handleChangePass = async (formData) => {
  console.log(authStore.userData.username);
  const res = await axios.post("/api/auth/changePass", {
    ...formData,
    username: authStore.userData.username,
  });
  if (res.data.status) {
    Swal.fire("رمز عبور با موفقیت تغییر کرد", "", "success");
  } else {
    Swal.fire(res.data.data, "", "error");
  }
};
function clear() {
  v$.value.$reset();

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value;
  }
}
import axios from "axios";
import Swal from "sweetalert2";
const { $swal } = useNuxtApp();
const editImage = ref(null);
// const userInfo = ref(null);
// const setUserData = useAsyncData("userData", () => $fetch("/api/auth/info"));
// watch(setUserData.data, () => {
//   userInfo.value = setUserData.data.value.data;
// });
</script>
