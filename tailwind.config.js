/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(100, 255, 218)",
        secondary: "rgb(168, 178, 209)",
        tertiary: "rgb(204, 214, 246)"
      }
    },
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xlg: "1366px",
      xl: "1920px",
    }
  },
  plugins: [],
}
