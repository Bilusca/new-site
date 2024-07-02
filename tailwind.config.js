/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,ts,js,jsx,tsx}",
    "./layouts/**/*.{vue,ts,js,jsx,tsx}",
    "./modules/**/*.{vue,ts,js,jsx,tsx}",
    "./pages/**/*.{vue,ts,js,jsx,tsx}",
    "./composables/**/*.{vue,ts,js,jsx,tsx}",
    "./app.vue",
    "./formkit.config.{js,vue,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        archivo: "var(--archivo)",
        "tenor-sans": "var(--tenor-sans)",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 50s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
