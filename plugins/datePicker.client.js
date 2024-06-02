import Vue3PersianDatetimePicker from "vue3-persian-datetime-picker";

export default defineNuxtPlugin((nuxtApp) => {
  const nuxtApp1 = useNuxtApp();
  const app = nuxtApp1.vueApp;
  app.component("DatePicker", Vue3PersianDatetimePicker);
  app.mount("#app");
});
