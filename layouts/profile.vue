<template>
  <v-app>
    <v-card class="w-full h-full">
      <ProfileLayoutsAppBar>
        <utilitiesLoading v-if="loading"> </utilitiesLoading>

        <slot v-else class="!mt-5" />
      </ProfileLayoutsAppBar>
    </v-card>
  </v-app>
</template>
<script setup>
const loading = ref(true);
const authStore = useAuthStore();
onMounted(async () => {
  await authStore.setUserData();
  loading.value = false;
});
</script>
