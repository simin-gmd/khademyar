<template>
  <PublicPageTitle title="نمایش پروفایل" />
  <!-- v-if="selectedItem" -->
  <!-- v-if="userInfo" -->

<!-- 

  
 -->
  <CardSection >
    <div class="gap-5 justify-between md:justify-start p-5">
    
      <form>
        <div class="flex flex-row gap-4">

          <v-text-field
            v-model="state.name"
            :counter="10"
            :error-messages="v$.name.$errors.map(e => e.$message)"
            label="نام"
            required
            @blur="v$.name.$touch"
            @input="v$.name.$touch"
          ></v-text-field>
      
          <v-text-field
            v-model="state.email"
            :error-messages="v$.email.$errors.map(e => e.$message)"
            label="ایمیل"
            required
            @blur="v$.email.$touch"
            @input="v$.email.$touch"
          ></v-text-field>
        </div>
        <div class="flex flex-row gap-4">

          <v-text-field
            v-model="state.name"
            :counter="10"
            :error-messages="v$.name.$errors.map(e => e.$message)"
            label="سن"
            required
            @blur="v$.name.$touch"
            @input="v$.name.$touch"
          ></v-text-field>
      
          <v-text-field
            v-model="state.email"
            :error-messages="v$.email.$errors.map(e => e.$message)"
            label="کدپستی"
            required
            @blur="v$.email.$touch"
            @input="v$.email.$touch"
          ></v-text-field>
        </div>
        <div class="flex flex-row gap-4">

          <v-text-field
            v-model="state.name"
            :counter="10"
            :error-messages="v$.name.$errors.map(e => e.$message)"
            label="کد ملی"
            required
            @blur="v$.name.$touch"
            @input="v$.name.$touch"
          ></v-text-field>
      
          <v-text-field
            v-model="state.email"
            :error-messages="v$.email.$errors.map(e => e.$message)"
            label="شماره"
            required
            @blur="v$.email.$touch"
            @input="v$.email.$touch"
          ></v-text-field>
        </div>
    
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
    <div class="flex flex-row justify-end">

      <v-btn
        class="me-4"
        @click="v$.$validate"
      >
        ثبت
      </v-btn>
     
    </div>
      </form>
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
