// https://nuxt.com/docs/api/configuration/nuxt-config
// import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({

  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      API_URL: 'http://django:8000',
      LOCAL_URL: 'http://localhost:3000',
    }
  },

  // routeRules: {
  //   "/api/*": { cache: { maxAge: 60 * 60 }, cors: false },
  //   '/master/**': { ssr: false },
  //   '/user/**': { ssr: false },
  // },
  build: {
    transpile: ["vuetify"],

  },
  plugins: [
    { src: "~/plugins/apex-chart.js", mode: "client" },
    { src: "~/plugins/vuetify.js", mode: "client" },
    { src: "~/plugins/sweet-alert2", mode: "client" },
  ],

  css: [
    // SCSS file in the project
    "~/assets/styles/scss/main.scss",
    "~/assets/styles/css/main.css",
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  modules: [
    "@vueuse/nuxt",
    '@nuxt-alt/proxy',

    // 'nuxt-swiper',
    // 'nuxt-sweetalert2',
    "@formkit/nuxt",
    "@pinia/nuxt",
  ],
  //   proxy: {
  //     proxies: {
  //         '/api': {
  //             target: process.env.API_BASE_URL,
  //             changeOrigin: true,
  //             rewrite: (path: string) => path.replace(/^\/api/, ''),
  //         },
  //     },
  // },
  pinia: {
    storesDirs: ["./stores/**"],
  },

  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true,
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
