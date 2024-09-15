import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((nuxtApp) => {
  const savedTheme = useCookie('theme')
  if (!savedTheme.value) savedTheme.value = 'light'
  const defaultTheme: string | undefined = savedTheme.value ? savedTheme.value : undefined
  const vuetify = createVuetify({
    ssr: true,
    icons: {
      defaultSet: 'mdi',

    },
    theme: {
      defaultTheme,
    },
  })
  nuxtApp.vueApp.use(vuetify)
})
