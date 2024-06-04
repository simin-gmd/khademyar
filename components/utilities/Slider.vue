<template>
  <div class="owl-carousel w-full " style="">
    <client-only>
      <swiper :slides-per-view="1" :space-between="10" :loop="true" :modules="modules" navigation pagination>
        <swiper-slide v-for="slide in items" :key="slide.id">
          <div class=" overflow-hidden">
            <div class="card-img-top position-relative h-[200px] md:h-full lg:h-[400px]">
              <img :src=slide.src class="w-100 h-100 rounded-lg" :alt="slide.alt" />
            </div>
          </div>
        </swiper-slide>

      </swiper>
    </client-only>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data: () => ({
    loading: true,
    items: [
      { id: 1, src: "/images/slider/slider2.jpg", alt: "slider-img" },
      { id: 0, src: "/images/slider/Slider1.jpg", alt: "slider-img" },
      { id: 2, src: "/images/slider/Slider3.jpg", alt: "slider-img" },
      
    ]
  }),
  setup() {
    const onSwiper = (swiper) => {
      // console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log('slide change');
    };
    const modules = [Navigation, Pagination]
    return {
      onSwiper,
      onSlideChange,
      modules
    };
  },
};
</script>
<!-- <script setup>

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

const modules = [Navigation];

</script> -->

<style>
.v-skeleton-loader__image {
  height: 100% !important;
}
</style>