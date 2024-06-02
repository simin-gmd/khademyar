// plugins/vuetify.js
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { VCalendar } from 'vuetify/labs/VCalendar'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,

    components: {
      VCalendar,
      ...components,
    },
    directives,
  });

  nuxtApp.vueApp.use(vuetify);
});
