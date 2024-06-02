<template>
    <div>
        <client-only>
          <!-- <date-picker></date-picker> -->
          <!-- <component :is="datePicker" /> -->
          <date-picker v-model="date" />
        </client-only>
        <h3>bejfkenfl</h3>
    </div>
</template>

<script lang="js">
import VuePersianDatetimePicker from 'vue-persian-datetime-picker'
export default {
  data(){
    return {
      date: ''
    }
  },
  components: {
    datePicker: VuePersianDatetimePicker
  }
}
</script>
