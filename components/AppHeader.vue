<template>
  <v-app-bar
    class="app-bar px-5"
    :elevation="2"
  >
    <template #prepend>
      <div class="d-flex align-center ga-3">
        <v-app-bar-title @click="toggleNavigate('/')">
          Abmer
        </v-app-bar-title>
        <v-btn @click="toggleNavigate('/notes')">
          Notes
        </v-btn>
        <v-btn @click="toggleNavigate('/about')">
          About
        </v-btn>
      </div>
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
  const newTheme = theme.global.current.value.dark ? 'light' : 'dark'
  theme.global.name.value = newTheme
  savedTheme.value = newTheme
}

async function toggleNavigate(route: string) {
  await navigateTo(route)
}
</script>

<style lang="scss">
  .app-bar {
    cursor: pointer;
  }
</style>
