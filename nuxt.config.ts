// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  nitro: {
    preset: "netlify-edge",
  },
  compatibilityDate: "2024-08-08",
});
