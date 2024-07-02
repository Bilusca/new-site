// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-swiper",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@formkit/nuxt",
  ],
  googleFonts: {
    families: {
      Archivo: [600, 700, 800],
      "Tenor Sans": true,
    },
    download: true,
    overwriting: true,
  },
});
