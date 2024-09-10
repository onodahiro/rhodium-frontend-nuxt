<template>
  <div class="notes-container">
    <iframe
      :src="runtimeConfig.public.apiNotes"
    />
  </div>
</template>

<script setup lang="ts">
import type { RuntimeConfig } from 'nuxt/schema'

const runtimeConfig: RuntimeConfig = useRuntimeConfig()
</script>

<style>
body {
      margin: 0;
  }
</style>
