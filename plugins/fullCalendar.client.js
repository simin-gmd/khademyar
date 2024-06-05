import FullCalendar from "@fullcalendar/vue3";
// Vue.use();
export default defineNuxtPlugin((nuxtApp) => {
  const nuxtApp1 = useNuxtApp();
  //   nuxtApp1.provide("moment", moment);
  const app = nuxtApp1.vueApp;
  //   app.use(moment);
  app.use(FullCalendar);
  app.component("FullCalendar", FullCalendar);
});
