<template>
  <div
    class="flex justify-between py-3 border-b !border-b-gray-300"
    :class="{ 'border-b': !isData }"
  >
    <div class="font-bold text-base pr-5">
      <slot name="title" />
      <div class="mt-2 text-muted font-extralight text-sm">
        <p class="mr-2">
          <slot name="subtitle" />
        </p>
      </div>
    </div>
    <div class="pl-5" v-if="$props.action">
      <FormsButton @click="$emit('click')" variant="primary" title="افزودن">
        <template #prepend>
          <v-icon>mdi-plus</v-icon>
        </template>
      </FormsButton>
    </div>
  </div>
  <div class="p-5" v-if="!isData">
    <div
      class="bg-emerald-50 rounded-lg min-h-[120px] mt-3 flex flex-col items-center gap-y-3"
    >
      <div class="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="189.348"
          height="183.649"
          viewBox="0 0 189.348 183.649"
          class="c-noContent__empty"
        >
          <g transform="translate(0 1)">
            <ellipse
              cx="82.484"
              cy="23.056"
              rx="82.484"
              ry="23.056"
              transform="translate(0 136.54) rotate(-0.69)"
              fill="#e4e9f0"
            ></ellipse>
            <path
              d="M-192.96,124.32v41.756l16.849-16.849q12.847-4.51,23.3-8.18Q-192.962,124.322-192.96,124.32Z"
              transform="translate(291.401 -45.203)"
              fill="#fff"
              stroke="#00baba"
              stroke-width="2"
              fill-rule="evenodd"
            ></path>
            <path
              d="M-192.96,124.32v41.756l16.849-16.849q12.847-4.51,23.3-8.18Q-192.962,124.322-192.96,124.32Z"
              transform="translate(291.401 -45.203)"
              fill="#d2faf9"
              fill-rule="evenodd"
            ></path>
            <path
              d="M-163.1,166.076V124.32l-44.4,16.022,23.158,8.885,13.186,24.907Z"
              transform="translate(261.546 -45.203)"
              fill="#fff"
              stroke="#00baba"
              stroke-width="2"
              fill-rule="evenodd"
            ></path>
            <path
              d="M-163.1,166.076V124.32l-44.4,16.022,23.158,8.885,13.186,24.907Z"
              transform="translate(261.546 -45.203)"
              fill="#d2faf9"
              fill-rule="evenodd"
            ></path>
            <path
              d="M-216.24,178.139V132.72l63,24.175,69.594-24.175v45.419l-70.326,24.175Z"
              transform="translate(243.622 -27.964)"
              fill="#fff"
              stroke="#00baba"
              stroke-miterlimit="2.613"
              stroke-width="2"
              fill-rule="evenodd"
            ></path>
            <path
              d="M-130.4,135.649l-71.059,25.64-21.977-17.581,70.326-24.907Z"
              transform="translate(228.846 -56.532)"
              fill="#fff"
              stroke="#00baba"
              stroke-miterlimit="2.613"
              stroke-width="2"
              fill-rule="evenodd"
            ></path>
            <path
              d="M-207.374,149.467l63,24.175-13.186-24.907-63-24.175Z"
              transform="translate(234.756 -44.711)"
              fill="#fff"
              stroke="#00baba"
              stroke-miterlimit="2.613"
              stroke-width="2"
              fill-rule="evenodd"
            ></path>
            <path
              d="M-131.425,159.811l-61.535-25.64,27.1-14.651,61.535,24.175Z"
              transform="translate(291.401 -55.055)"
              fill="#fff"
              stroke="#00baba"
              stroke-miterlimit="2.613"
              stroke-width="2"
              fill-rule="evenodd"
            ></path>
            <line
              y2="41.778"
              transform="translate(98.438 79.118)"
              fill="none"
              stroke="#00baba"
              stroke-miterlimit="2.613"
              stroke-width="2"
            ></line>
            <path
              d="M-195.107,140.64q-.733,45.419-.732,45.419"
              transform="translate(285.49 -11.709)"
              fill="none"
              stroke="#00baba"
              stroke-miterlimit="2.613"
              stroke-width="2"
              fill-rule="evenodd"
            ></path>
            <path
              d="M-126.006,149.467-195.6,173.642l24.907-24.907,68.861-24.175Z"
              transform="translate(285.983 -44.711)"
              fill="#fff"
              stroke="#00baba"
              stroke-miterlimit="2.613"
              stroke-width="2"
              fill-rule="evenodd"
            ></path>
            <path
              d="M-200.312,142.9c-.754,2.356-3.3,3.593-6.257,3.034a8.809,8.809,0,0,1-6.55-5.439"
              transform="translate(250.026 -12.009)"
              fill="none"
              stroke="#00baba"
              stroke-miterlimit="2.613"
              stroke-width="2"
              fill-rule="evenodd"
            ></path>
            <path
              d="M-192.119,145.574c-.754,2.356-3.3,3.593-6.257,3.034a8.817,8.817,0,0,1-6.553-5.442"
              transform="translate(266.835 -6.525)"
              fill="none"
              stroke="#00baba"
              stroke-miterlimit="2.613"
              stroke-width="2"
              fill-rule="evenodd"
            ></path>
            <ellipse
              cx="1.099"
              cy="1.099"
              rx="1.099"
              ry="1.099"
              transform="translate(43.502 52.013)"
              fill="none"
              stroke="#00baba"
              stroke-miterlimit="2.613"
              stroke-width="2"
            ></ellipse>
            <path
              d="M-200.236,103.528a2.57,2.57,0,0,0,2.564-2.564,2.568,2.568,0,0,0-2.564-2.564,2.57,2.57,0,0,0-2.564,2.564A2.572,2.572,0,0,0-200.236,103.528Z"
              transform="translate(271.206 -98.4)"
              fill="none"
              stroke="#00baba"
              stroke-miterlimit="2.613"
              stroke-width="2"
              fill-rule="evenodd"
            ></path>
            <ellipse
              cx="1.099"
              cy="1.099"
              rx="1.099"
              ry="1.099"
              transform="translate(84.524 37.36)"
              fill="none"
              stroke="#00baba"
              stroke-miterlimit="2.613"
              stroke-width="2"
            ></ellipse>
            <ellipse
              cx="1.099"
              cy="1.099"
              rx="1.099"
              ry="1.099"
              transform="translate(120.419 29.302)"
              fill="none"
              stroke="#00baba"
              stroke-miterlimit="2.613"
              stroke-width="2"
            ></ellipse>
            <ellipse
              cx="1.465"
              cy="1.465"
              rx="1.465"
              ry="1.465"
              transform="translate(171.701 49.813)"
              fill="none"
              stroke="#00baba"
              stroke-miterlimit="2.613"
              stroke-width="2"
            ></ellipse>
            <path
              d="M-188.337,125.166a3.67,3.67,0,0,0,3.663-3.663,3.67,3.67,0,0,0-3.663-3.663A3.67,3.67,0,0,0-192,121.5,3.67,3.67,0,0,0-188.337,125.166Z"
              transform="translate(293.371 -58.502)"
              fill="none"
              stroke="#00baba"
              stroke-miterlimit="2.613"
              stroke-width="2"
              fill-rule="evenodd"
            ></path>
          </g>
        </svg>
      </div>

      <div class="text-base font-medium p-5">
        <slot name="content" />
      </div>
      <div class="my-2 p-5" v-if="$props.action">
        <FormsButton @click="emit('click')" variant="primary" title="افزودن">
          <template #append>
            <v-icon>mdi-plus</v-icon>
          </template>
        </FormsButton>
      </div>
    </div>
  </div>
  <div v-else class="p-5">
    <slot name="tableData" />
  </div>
</template>
<script setup>
const props = defineProps({
  isData: {
    type: Boolean,
    default: () => false,
  },
  action: {
    type: Boolean,
    default: () => true,
  },
});
const { isData } = props;

const emit = defineEmits(["click"]);
</script>
