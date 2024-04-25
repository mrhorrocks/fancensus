// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  sourcemap: true,
  modules: ["nuxt-primevue", "@nuxtjs/tailwindcss"],
  primevue: {
    /* Options */
  },
  css: ['primevue/resources/themes/aura-light-blue/theme.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Fancensus',
      meta: [{ name: 'Fancensus', content: 'Data driven dashboard' }],
    }
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  tailwindcss: {
    viewer: false
    // viewer: { endpoint: '/_tailwind', exportViewer: true }
  }
})