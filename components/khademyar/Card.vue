<template>
  <nuxt-link
    v-if="$props.type == 'history'"
    :to="$route.fullPath + '/history/' + $props.item.id"
  >
    <div
      ref="hoverable"
      class="c-releaseItem__templateItem"
      :class="`${isHovered ? 'c-releaseItem__templateItem--hovered' : ''}`"
    >
      <div class="c-releaseItem__templateHeader">
        <!---->
        <v-icon
          v-if="$props.item.accept_status == 1"
          icon="mdi-checkbox-marked-circle-outline"
          class="c-releaseItem__official c-releaseItem__official--item--image bg-green-600 text-white rounded-lg"
          size="large"
        >
        </v-icon>
        <v-icon
          v-if="$props.item.accept_status == 0"
          icon="mdi-close-circle-outline"
          class="c-releaseItem__official c-releaseItem__official--item--image bg-red-600 text-white rounded-lg"
          size="large"
        >
        </v-icon>
        <!-- <img
        src="https://s3.ir-thr-at1.arvanstorage.ir/caas-api/helm/icons/airflow.svg" alt=""
        class="c-releaseItem__official c-releaseItem__official--item--image"> -->
        <div class="c-releaseItem__templateName pr-2">
          <div class="c-releaseItem__templateTitle">
            عنوان:<span> {{ $props.item.exam.title }} </span>
          </div>
          <div class="c-releaseItem__generalInfo">
            <div class="c-releaseItem__info">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#0172B4"
              >
                <path
                  d="M6 6H18"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M8 3H16"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 21H5C3.895 21 3 20.105 3 19V11C3 9.895 3.895 9 5 9H19C20.105 9 21 9.895 21 11V19C21 20.105 20.105 21 19 21Z"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <div class="c-releaseItem__infoSpan c-releaseItem__infoSpan--repo">
                <span> {{ $props.item.exam.start_date }} </span>
              </div>
            </div>
            <!-- <div class="c-releaseItem__info">
            
          </div> -->
          </div>
          <div class="c-releaseItem__lastUpdate">
            <span>کل نمره:</span> <span>{{ $props.item.exam.score }}</span>
          </div>
          <div class="c-releaseItem__templateVersion">
            <span> نمره قبولی:</span> <span>{{ $props.item.exam.accept_score }}</span>
          </div>
          <div class="c-releaseItem__templateVersion">
            <span> نمره کسب شده: </span> <span>{{ $props.item.score }}</span>
          </div>
        </div>
      </div>
      <hr />
      <div class="c-releaseItem__templateDescription">
        {{ $props.item.exam.descriptions }}
      </div>
      <div class="c-releaseItem__buttonWrapper">
        <button class="v3:ar-button v3:ar-button--md v3:ar-button--secondary">
          <span class="v3:ar-button__container"
            ><span class="v3:ar-button__content"
              ><!----><span class="v3:ar-button__text"> جزییات </span
              ><!----></span
            ><!----></span
          >
        </button>
      </div>
    </div>
  </nuxt-link>
  <nuxt-link
    v-if="$props.type == 'current'"
    :to="$route.fullPath + '/current/' + $props.item.id"
  >
    <div
      ref="hoverable"
      class="c-releaseItem__templateItem"
      :class="`${isHovered ? 'c-releaseItem__templateItem--hovered' : ''}`"
    >
      <div class="c-releaseItem__templateHeader">
        <!---->
        <v-icon
          v-if="$props.item.accept_status == 1"
          icon="mdi-checkbox-marked-circle-outline"
          class="c-releaseItem__official c-releaseItem__official--item--image bg-green-600 text-white rounded-lg"
          size="large"
        >
        </v-icon>
        <v-icon
          v-if="$props.item.accept_status == 0"
          icon="mdi-close-circle-outline"
          class="c-releaseItem__official c-releaseItem__official--item--image bg-red-600 text-white rounded-lg"
          size="large"
        >
        </v-icon>
        <!-- <img
        src="https://s3.ir-thr-at1.arvanstorage.ir/caas-api/helm/icons/airflow.svg" alt=""
        class="c-releaseItem__official c-releaseItem__official--item--image"> -->
        <div class="c-releaseItem__templateName pr-2">
          <div class="c-releaseItem__templateTitle">
            عنوان:<span> {{ $props.item.title }} </span>
          </div>
          <div class="c-releaseItem__generalInfo">
            <div class="c-releaseItem__info">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#0172B4"
              >
                <path
                  d="M6 6H18"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M8 3H16"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 21H5C3.895 21 3 20.105 3 19V11C3 9.895 3.895 9 5 9H19C20.105 9 21 9.895 21 11V19C21 20.105 20.105 21 19 21Z"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <div class="c-releaseItem__infoSpan c-releaseItem__infoSpan--repo">
                <span> {{ $props.item.start_date }} </span>
              </div>
            </div>
            <!-- <div class="c-releaseItem__info">
            
          </div> -->
          </div>
          <div class="c-releaseItem__lastUpdate">
            <span>کل نمره:</span> <span>{{ $props.item.score }}</span>
          </div>
          <div class="c-releaseItem__templateVersion">
            <span> نمره قبولی:</span> <span>{{ $props.item.accept_score }}</span>
          </div>
        </div>
      </div>
      <hr />
      <div class="c-releaseItem__templateDescription">
        {{ $props.item.descriptions }}
      </div>
      <div class="c-releaseItem__buttonWrapper">
        <button class="v3:ar-button v3:ar-button--md v3:ar-button--secondary">
          <span class="v3:ar-button__container"
            ><span class="v3:ar-button__content"
              ><!----><span class="v3:ar-button__text"> جزییات </span
              ><!----></span
            ><!----></span
          >
        </button>
      </div>
    </div>
  </nuxt-link>
  <!-- </v-hover> -->
</template>
<script setup>
const props = defineProps(["item", "type"]);
// const isHover = ref(false)
const hoverable = ref();
const isHovered = useElementHover(hoverable);
</script>
<style>
/* width: 390px;
    left: calc(50% - 12.75rem);
    max-height: 39.75rem;
    height: calc(100% - 5rem);
    margin-top: 2.3rem;
    border-radius: .5rem;
    border: .125rem solid rgba(0, 0, 0, .1); */
</style>
