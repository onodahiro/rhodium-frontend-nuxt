<template>
  <v-app>
    <div class="app-container">
      <AppHeader />
      <div class="page-container">
        <NuxtPage />
      </div>
    </div>
  </v-app>
</template>

<script setup lang="ts">
useHead({
  title: 'Amber Rhodium',
  meta: [
    { name: 'Amber Rhodium', content: 'My amazing site.' },
  ],
})
</script>

<style>
  html {
    overflow-y: auto;
  }

  .page-container {
    padding-top: 64px;
  }
</style>
