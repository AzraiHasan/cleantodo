// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia-plugin-persistedstate/nuxt", ["@pinia/nuxt",
    {autoImports: ["defineStore", "acceptHMRUpdate", "storeToRefs"],},
  ], "@nuxtjs/supabase"],
  supabase: {
    redirect: false,
  },
})