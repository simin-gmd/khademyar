/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      color: {
        // light_green: "#31a0a4",
        green: { 50: "31a0a4", 100: "" },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
