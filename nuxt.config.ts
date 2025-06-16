import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
      // @ts-expect-error disable config error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "./assets/styles/_vars.scss" as *;',
        },
      },
    },
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.css',
    './assets/styles/global.scss',
  ],
  build: {
    transpile: ['vuetify'],
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  eslint: {
    checker: true,
    config: {
      stylistic: true,
    },
  },
  runtimeConfig: {
    public: {
      // notesUrl: 'https://amber-rhodium.ru/api/notes',
      notesUrl: 'http://89.104.66.177:81/api/notes',
      // notesUrl: 'http://127.0.0.1:8000/api/notes',
    },
  },
})
