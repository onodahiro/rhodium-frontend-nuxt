import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', (_options, nuxt) => {
    nuxt.hooks.hook('vite:extendConfig', (config) => {
      // @ts-expect-error disable config error
      config.plugins.push(vuetify({ autoImport: true }))
    })
  }],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.css',
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
      apiNotes: '',
    },
  },
})
