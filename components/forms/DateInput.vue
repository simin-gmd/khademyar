<template>
  <div>
    <FormKit
      v-bind="{
        id,
        name,
        label,
        value,
      }"
      type="date"
      value="1999-01-01"
      validation="required|date_before:2010-01-01"
      validation-messages="تاریخ را وارد کنید"
      label-class="form-label"
      input-class="form-control"
      messages-class="form-text text-red"
    />
    <!-- <date-picker></date-picker> -->
    <date-picker id="birthday" mode="single">
      <template #before>
        <label for="date"> تاریخ تولد: </label>
      </template>
    </date-picker>

    <!-- <date-picker :column="1" mode="single" label="تاریخ:"></date-picker> -->

    <!-- <div v-text="$PersianDate.toString()"></div>
    <div>{{ $PersianDate.toString() }}</div> -->
  </div>
</template>
<script setup>
// import datePicker from "@alireza-ab/vue-persian-datepicker";
// import datePicker from '@alireza-ab/persian-datepicker/'
// new Vue({
//     components: { datePicker },
//     el: "#app",
// });
// onMounted(() => {
//   this.date = this.$PersianDate.clone().month(5).toString();
// });

// mounted() {
// }
const props = defineProps({
  id: { type: String, required: true },
  name: { type: String, required: true },
  label: { type: String, required: true },
  value: { type: String, required: true },
});
const { id, name, label, value } = props;
</script>
<style></style>
