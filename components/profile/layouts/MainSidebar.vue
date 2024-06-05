<template>
  <v-card class="h-screen" width="312">
    <v-layout class="h-screen">
      <v-navigation-drawer rail permanent class="overflow-hidden">
        <v-card
          class="h-100 p-0 pt-3 !flex flex-col justify-between !items-center overflow-y-auto"
        >
          <div class="flex flex-col justify-between h-full">
            <div class="flex flex-col gap-y-3">
              <div
                v-for="(item, i) in routesList"
                :key="i"
                class="flex gap-y-3 flex-col items-center"
              >
                <nuxt-link
                  :to="item.link"
                  class="menu-item my-0 rounded-lg"
                  :class="{ active: $route.path.includes(item.activeRute) }"
                >
                  <v-tooltip activator="parent" location="bottom">{{
                    item.title
                  }}</v-tooltip>
                  <v-icon class="menu-icon p-5 rounded-lg">
                    {{ item.icon }}
                  </v-icon>
                </nuxt-link>
              </div>
            </div>

            <div v-if="selectedRole=='master'" class="flex flex-col">
              <div class="menu-item">
                <nuxt-link :to="`/${selectedRole}/dashboard/keramat/settings`">
                  <v-btn :ripple="false" class="menu-icon !rounded-xl" flat icon>
                    <v-icon>mdi-cog-outline</v-icon>
                  </v-btn>
                </nuxt-link>
              </div>
              <v-spacer class="w-5"></v-spacer>

            </div>
          </div>
        </v-card>
      </v-navigation-drawer>

      <v-navigation-drawer permanent class="overflow-hidden">
        <v-card class="h-100 p-0 pt-3 !flex flex-col justify-between overflow-y-auto">
          <div
            class="flex-col"
            v-for="(item, i) in routesList"
            :key="i"
            :class="{
              hidden: !$route.path.includes(item.activeRute),
              flex: $route.path.includes(item.activeRute),
            }"
          >
            <div
              class="p-2 items-center"
              :class="{
                hidden: !$route.path.includes(item.activeRute),
                flex: $route.path.includes(item.activeRute),
              }"
            >
              <v-icon class="menu-icon p-5 rounded-lg">
                <!-- mdi-pencil-outline -->
                {{ item.icon }}
              </v-icon>
              <span> {{ item.title }}</span>
            </div>
            <hr />
            <div v-if="item.child.length > 0">
              <v-list
                class="pl-3 pr-1 !py-1"
                v-for="(children, index) in item.child"
                :key="index"
              >
                <div v-if="children.child">
                  <!-- <div v-for="(listGroup, ind) in children.child" :key="ind"> -->
                  <ProfileLayoutsListGroup
                    :activator="{
                      status: true,
                      title: children.title,
                      icon: children.icon,
                      value: 'SubmitManage',
                    }"
                    :subGroup="children.child"
                  />

                  <!-- </div> -->
                </div>
                <nuxt-link
                  v-else
                  :to="children?.link"
                  class="my-0 rounded-lg cursor-pointer"
                >
                  <v-list-item
                    :prepend-icon="children.icon"
                    :title="children.title"
                    class="!p-0 !pr-3 sidebar-item"
                    :class="{
                      active: $route.path.includes(children.activeRute),
                    }"
                  ></v-list-item>
                </nuxt-link>
              </v-list>
            </div>
          </div>
        </v-card>
      </v-navigation-drawer>

      <!-- <v-main style="height: 300px"></v-main> -->
    </v-layout>
  </v-card>
</template>
<script setup>
const tab = ref("option-1");
const selectedRole = useCookie("selectedRole");

const currentPath = useRoute();
const activeTab = ref();
const open = [];
// console.log(currentPath);
const data = {
  open: ["Users"],
  admins: [
    ["Management", "mdi-account-multiple-outline"],
    ["Settings", "mdi-cog-outline"],
  ],
  cruds: [
    ["Create", "mdi-plus-outline"],
    ["Read", "mdi-file-outline"],
    ["Update", "mdi-update"],
    ["Delete", "mdi-delete"],
  ],
};

// const routesList = usePageLocation('user')
const route = useRoute();
const routesList = usePageLocation("master");
</script>
