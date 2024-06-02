<template>
  <div class="">
    <div class="h-screen overflow-y-auto border border-gray-100" dir="ltr">
      <v-card
        class="h-100 p-0 pl-3 pt-3 !flex flex-col justify-between !items-center md:w-[220px]"
        dir="rtl"
      >
        <div class="flex flex-col justify-between h-full w-full">
          <div class="flex gap-y-3 flex-col items-start w-full">
            <div v-for="(item, i) in routesList" :key="i">
              <nuxt-link
                :to="item.link"
                class="menu-item flex items-center gap-x-2 my-0 rounded-lg w-full mr-2"
                :class="{ active: item.title == 'صفحه اصلی' }"
              >
                <v-icon class="menu-icon p-5 rounded-lg">
                  {{ item.icon }}
                </v-icon>
                <span> {{ item.title }}</span>
              </nuxt-link>
            </div>
          </div>
          <div class="flex flex-col pb-5">
            <div class="flex justify-center gap-x-2">
              <div class="menu-item">
                <nuxt-link :to="`/${selectedRole}/dashboard/keramat/settings`">
                  <v-btn :ripple="false" class="menu-icon !rounded-xl" flat icon>
                    <v-icon>mdi-cog-outline</v-icon>
                  </v-btn>
                </nuxt-link>
              </div>

              <div class="menu-item">
                <v-btn :ripple="false" class="menu-icon !rounded-xl" flat icon>
                  <v-icon>mdi-bell-outline</v-icon>
                </v-btn>
              </div>

              <div class="menu-item">
                <v-btn :ripple="false" class="menu-icon !rounded-xl" flat icon>
                  <v-icon>mdi-headset</v-icon>
                </v-btn>
              </div>
            </div>
            <div>
              <img src="/rezaLogo.png" class="w-16 h-16 object-center mx-auto" />
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>
<script setup>
const currentPath = useRoute();
const selectedRole = useCookie("selectedRole");
const routesList = usePageLocation("user");
</script>
