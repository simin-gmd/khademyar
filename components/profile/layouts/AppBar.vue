<template>
  <v-app-bar :elevation="0" class="border border-gray-100 main-appbar">
    <template v-slot:prepend>
      <div class="md:hidden flex items-center">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>سامانه خادمیاران</v-toolbar-title>
      </div>
    </template>

    <template v-slot:append>
      <div class="hidden md:flex">
        <div class="menu-item">
          <v-btn :ripple="false" class="menu-icon !rounded-xl" flat icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </div>
        <v-spacer class="w-5"></v-spacer>

        <v-menu min-width="200px" rounded>
          <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props">
              <div class="menu-item">
                <v-btn :ripple="false" class="menu-icon !rounded-xl" flat icon>
                  <v-badge v-if="notify" color="error" dot >
                    <v-icon>mdi-bell-outline</v-icon>
                  </v-badge>
                  <div v-else  >
                    <v-icon>mdi-bell-outline</v-icon>
                  </div>
                </v-btn>
              </div>
            </v-btn>
          </template>
          <v-card>
            <v-card-text>
              <div class="mx-auto text-center">
                <h3 class="block text-sm text-gray-900 dark:text-white mb-3">
                  اعلان ها
                </h3>
                <div v-if="notify" v-for="(notif , i) in notify" key="i">
                  <hr />
                  <div class="text-caption my-3">{{ notif.name }}</div>
                </div>
                <div v-else>
                  <span class="text-caption my-3">
                    اعلانی وجود ندارد
                  </span>
                </div>
                <v-divider class="my-2"></v-divider>
              </div>
            </v-card-text>
          </v-card>
        </v-menu>
        <v-spacer class="w-5"></v-spacer>

        <div class="menu-item">
          <v-btn :ripple="false" class="menu-icon !rounded-xl" flat icon>
            <v-icon>mdi-headset</v-icon>
          </v-btn>
        </div>
      </div>
      <v-spacer class="w-5"></v-spacer>
      <v-menu min-width="200px" rounded>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props" class="!text-gray-900">
            <v-avatar size="large">
              <v-icon> mdi-account-circle </v-icon>

              <!-- <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img> -->
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <h3 class="block text-sm text-gray-900 dark:text-white">
                {{ authStore.userData.username }}
              </h3>
              <p class="text-caption mt-1">{{ authStore.userData.email }}</p>
              <v-divider class="my-2"></v-divider>

              <hr />
              <v-btn @click.prevent="handleChange" class="ma-2 w-100 mx-auto text-center" color="primary">
                <v-icon class="ml-3" icon="mdi-exit-to-app"></v-icon>
                انتخاب حساب
              </v-btn>

              <v-btn @click.prevent="handleLogout" class="ma-2 w-100 mx-auto text-center" color="red">
                <v-icon class="ml-3" icon="mdi-exit-to-app"></v-icon>
                خروج
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
    </template>
  </v-app-bar>

  <div class="flex">
    <div class="md:hidden">
      <v-navigation-drawer v-model="drawer" location="right" class="!overflow-hidden" temporary width="100%">
        <ProfileLayoutsMainSidebar />
      </v-navigation-drawer>
    </div>
    <div class="hidden md:block">
      <ProfileLayoutsMainSidebar />
    </div>
    <div class="pt-16 w-full bg-gray-100 h-screen overflow-y-auto">
      <slot />
    </div>
  </div>
</template>
<script setup>
const authStore = useAuthStore()
// logout handler
async function handleLogout() {
  try {
    const response = await $fetch("/api/auth/logout");
    if (response) {
      reloadNuxtApp();
    } else {
      return false;
    }
  } catch (error) {
    // console.log(error);
  }
}

function handleChange() {
  const selectedRole = useCookie("selectedRole");
  selectedRole.value = "multiple";
  reloadNuxtApp()
}
const drawer = ref(false);
const notify = ref(null);

onMounted(async () => {
  const response = await $fetch(`/api/users/notify`);
  // console.log(response.data.length, "lengh");
  if (response.status && response.data.length > 0) {
    console.log(response, "response notify");
    notify.value = response.data
  }
})

</script>
<style module>
.v-navigation-drawer__content {
  overflow: hidden !important;
}
</style>
