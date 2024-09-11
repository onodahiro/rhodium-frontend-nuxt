<template>
  <v-app-bar
    class="app-bar px-5"
    :elevation="2"
  >
    <template #prepend>
      <v-app-bar-title @click="toggleNavigate('/')">
        Abmer
      </v-app-bar-title>
      <v-btn @click="toggleNavigate('/about')">
        Home
      </v-btn>
    </template>

    <template #append>
      <v-btn icon="mdi-heart" />

      <v-btn
        v-if="theme.global.name.value === 'light'"
        icon="mdi-white-balance-sunny"
        @click="toggleTheme"
      />

      <v-btn
        v-if="theme.global.name.value === 'dark'"
        icon="mdi-moon-waxing-crescent"
        @click="toggleTheme"
      />
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()
const savedTheme = useCookie('theme')

function toggleTheme() {
  const currentTheme = theme.global.current.value.dark ? 'light' : 'dark'
  theme.global.name.value = currentTheme
  savedTheme.value = currentTheme
}

async function toggleNavigate(route: string) {
  await navigateTo(route)
}
</script>

<style lang="scss">
  .app-bar {
    // padding: 0 20px;
    cursor: pointer;
  }
</style>
