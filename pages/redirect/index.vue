<style scoped>
body {
  background: #fff !important;
}
</style>
<template>
  <div class="" style="">
    <!-- <utilitiesLoading v-if="loading" :loading="loading"></utilitiesLoading> -->
    <div class="container">
      <div class="mx-auto pt-10 flex col items-start justify-center w-fit">
        <!-- <v-overlay
          v-model:model-value="menu"
          class="align-center justify-center"
          open-delay="300"
          contained
          scroll-strategy="block"
        >
        -->
        <v-card rounded class="flex mx-auto flex-col position-absolute"
          append-avatar="https://cdn.vuetifyjs.com/images/john.jpg" color="secondary" elevation="2" title="ادمین"
          subtitle="حساب کاربری خود را انتخاب کنید" min-width="350" min-height="300">
          <v-list  class="border-t">
            <v-list-item  value="master" @click="handleRole('master')" color="primary">
              <v-list-item-title>
                <v-icon class="bg-gray-200 rounded-lg text-gray-700 p-3 !text-base">
                  mdi-account-tie-voice-outline
                </v-icon>
                ورود به حساب مدیر
              </v-list-item-title>
            </v-list-item>
            <v-list-item  value="user" @click="handleRole('user')" color="primary">
              <v-list-item-title>
                <v-icon class="bg-gray-200 rounded-lg text-gray-700 p-3 !text-base">
                  mdi-account-tie-voice-outline
                </v-icon>
                ورود به حساب کاربر
              </v-list-item-title>
            </v-list-item>
           
          </v-list>
        </v-card>
       
        <!-- </v-overlay> -->
      </div>
      <!-- </v-menu> -->
    </div>
    <img src="/images/loginBg.png" class="w-100 h-100" />
  </div>
</template>
<script setup>
// locale states
const loading = ref(true);
const menu = ref(true);
const selectedRole = useCookie("selectedRole");
// const accessibilityType = useLocalStorage("accessibilityType");
// const fiteredTypes = ref({ status: null, data: [] });
const userRef = ref(null);
const router = useRouter();
const step = ref(1);
// use user data store

// const store = useAuthStore();
// const { data } = useAsyncData("userData", () => store.setUserData());
// select user role
const handleRole = async (value) => {
  selectedRole.value = value;

  switch (value) {
    case "master":
      await router.replace("/master");
      break;
    case "user":
      // fiteredTypes.value = {
      //   status: "user",
      //   data: Object.entries(userRef.value).find(
      //     (item) => item[0] == "user_access"
      //   )[1],
      // };
      await router.replace("/user");
      break;
    default:
      break;
  }
};

// watch(data, async () => {
//   if (!data?.value.user) {
//     navigateTo("/");
//   } else {
//     userRef.value = data.value.user;
//     loading.value = false;
//     console.log(userRef.value);
//   }
// });
// onMounted(() => {
//   useAsyncData("userData", () => store.setUserData());
// })
</script>
