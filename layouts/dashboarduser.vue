<template>
  <v-app>
    <!-- <div class=""> -->
    <v-card class="w-full h-full">
      <ProfileUserlayoutsDashboardAppBar>
        <utilitiesLoading v-if="loading"> </utilitiesLoading>
        <slot v-else />
      </ProfileUserlayoutsDashboardAppBar>
      <!-- <ProfileLayoutsSidebar /> -->
      <!-- <v-treeview
     :items = "items"></v-treeview> -->
      <!-- <Test /> -->

      <!-- </div> -->
    </v-card>
  </v-app>
</template>
<script setup>
const loading = ref(true);
const authStore = useAuthStore();     
onMounted(async () => {
  loading.value = false;
  await authStore.setUserData();
});
</script>
