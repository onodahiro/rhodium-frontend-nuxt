<template>
  <v-app-bar :elevation="2">
    <template #prepend>
      <v-app-bar-nav-icon />
      <v-app-bar-title>Application Bar</v-app-bar-title>
      <NuxtLink
        to="/"
        class="n-link-base"
      >
        <v-btn>
          Home
        </v-btn>
      </NuxtLink>
      <NuxtLink
        to="/notes"
        class="n-link-base"
      >
        <v-btn>
          Notes
        </v-btn>
      </NuxtLink>
      <NuxtLink
        to="/about"
        class="n-link-base"
      >
        <v-btn>
          About
        </v-btn>
      </NuxtLink>
    </template>

    <template #append>
      <v-btn icon="mdi-heart" />

      <v-btn
        v-if="theme === 'light'"
        icon="mdi-white-balance-sunny"
        @click="changeTheme('dark')"
      />

      <v-btn
        v-if="theme === 'dark'"
        icon="mdi-moon-waxing-crescent"
        @click="changeTheme('light')"
      />
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
const theme = ref('light')

function changeTheme(newTheme: string) {
  theme.value = newTheme
}
</script>

<style>
</style>
