// https://nuxt.com/docs/api/configuration/nuxt-config
const PRESET = "netlify-edge";
export default defineNuxtConfig({
  srcDir: "src/",
  devtools: { enabled: true },
  compatibilityDate: "2024-08-08",
  nitro: {
    preset: PRESET,
  },
  runtimeConfig:{
    preset: PRESET,

  }
});
