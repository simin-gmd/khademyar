<template>
  <v-app-bar :elevation="0" class="border border-gray-100 dashboard-appbar">
    <template v-slot:prepend>
      <div class="md:hidden flex items-center">
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
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
                  <v-badge color="error" dot>
                    <v-icon>mdi-bell-outline</v-icon>
                  </v-badge>
                </v-btn>
              </div>
            </v-btn>
          </template>
          <v-card>
            <v-card-text>
              <div class="mx-auto text-center">
                <h3 class="block text-sm text-gray-900 dark:text-white mb-3">اعلان ها</h3>
                <hr />
                <div class="text-caption my-3">درخواست آمادگی برای شیفت 7 رد شد</div>
                <hr />
                <div class="text-caption my-3">درخواست آمادگی برای شیفت 1 قبول شد</div>
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
              <v-btn
                @click.prevent="handleChange"
                class="ma-2 w-100 mx-auto text-center"
                color="primary"
              >
                <v-icon class="ml-3" icon="mdi-exit-to-app"></v-icon>
                انتخاب حساب
              </v-btn>
              <v-btn
                @click.prevent="handleLogout"
                class="ma-2 w-100 mx-auto text-center"
                color="red"
              >
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
      <v-navigation-drawer v-model="drawer" location="right" temporary>
        <ProfileUserlayoutsDashboardSidebar />
      </v-navigation-drawer>
    </div>
    <div class="hidden md:block">
      <ProfileUserlayoutsDashboardSidebar />
    </div>
    <div class="pt-[60px] w-full bg-gray-100 h-screen overflow-y-auto">
      <slot />
    </div>
  </div>
</template>
<script setup>
const authStore = useAuthStore();
function handleChange() {
  const selectedRole = useCookie("selectedRole");
  selectedRole.value = "multiple";
  reloadNuxtApp();
}
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
    console.log(error);
  }
}
const drawer = ref(false);
</script>
