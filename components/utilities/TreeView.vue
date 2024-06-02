<template>
  <v-container class="rounded-lg bg-gray-200">
    <v-container>
      <tree :config="config" :nodes="nodes">
        <template #after-input="props" >
          <div class="flex gap-x-4 justify-end flex-grow items-center ">
            <span class="after text-muted"> {{ props.node.creator}} </span>
            <span class="after text-muted"> {{ props.node.date}} </span>
            <NuxtLink :to="props.node.src" >
              <v-icon>mdi-download</v-icon>
              <v-tooltip activator="parent" location="bottom">دانلود</v-tooltip>
            </NuxtLink>
            <!-- <span class="after"> {{ props.node.src}} </span> -->
          </div>
        </template>
      </tree>
    </v-container>
  </v-container>
</template>

<script>
import treeview from "vue3-treeview";
import "vue3-treeview/dist/style.css";

export default {
  components: {
    tree: treeview,
  },
  data: function () {
    return {
      modeBool: false,
      config: {
        roots: ["id1", "math"],
        openedIcon: {
          type: "class",
          class:
            "mdi-minus-box mdi v-icon notranslate !text-yellow-400 v-icon--size-default",
        },
        closedIcon: {
          type: "class",
          class:
            "mdi-plus-box mdi v-icon notranslate !text-yellow-400 v-icon--size-default",
        },
        keyboardNavigation: false,
        dragAndDrop: false,
        checkboxes: false,
        editable: true,
        disabled: false,
      },
      nodes: {
        id1: {
          date:"06/07/76",
          src:"test.png",
          creator:"سیمین گمشادی",
          text: "ریاضی1",
          children: ["id11"],
        },
        id11: {
          date:"06/07/76",
          src:"test.png",
          creator:"سیمین گمشادی",
          text: "ریاضی11",
          children: ["id111", "id112", "id113"],
        },
        id111: {
          date:"06/07/76",
          src:"test.png",
          creator:"سیمین گمشادی",
          text: "ریاضی111",
        },
        id112: {
          date:"06/07/76",
          src:"test.png",
          creator:"سیمین گمشادی",
          text: "ریاضی112",
        },
        id113: {
          date:"06/07/76",
          src:"test.png",
          creator:"سیمین گمشادی",
          text: "ریاضی113",
        },

        math: {
          date:"06/07/76",
          src:"test.png",
          creator:"سیمین گمشادی",
          text: "ریاضی عمومی",
          children: ["math2", "math1", "math6"],
        },
        math1: {
          date:"06/07/76",
          src:"test.png",
          creator:"سیمین گمشادی",
          text: "ریاضی1",
        },
        math2: {
          date:"06/07/76",
          src:"test.png",
          creator:"سیمین گمشادی",
          text: "ریاضی2",
        },
        math6: {
          date:"06/07/76",
          src:"test.png",
          creator:"سیمین گمشادی",
          text: "ریاضی6",
        },
      },
    };
  },
  methods: {
    changeMode() {
      this.modeBool = !this.modeBool;
      this.config.checkMode = this.modeBool ? 0 : 1;
    },
  },
};
</script>
<style lang="scss">

.node-wrapper {
  transition: all 0.17s ease-in !important;
  padding: 5px;
  border-radius: 5px;

  &:hover {
    background-color: #b5b5b5 !important;
  }
  &:focus {
    background-color: #cbcbcb !important;
  }
  
}
.tree-level{
  padding-right: 16px !important;
  padding-left: 0px  !important;
  }
.node-text {
  font-family: "Iransans" !important;
}
.after{
  font-family: "Iransans" !important;
}
</style>
