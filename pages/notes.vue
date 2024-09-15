<template>
  <div class="notes-page">
    <iframe
      :src="runtimeConfig.public.apiNotes"
      class="notes-page__container"
    />
  </div>
</template>

<script setup lang="ts">
import type { RuntimeConfig } from 'nuxt/schema'

const runtimeConfig: RuntimeConfig = useRuntimeConfig()
</script>

<style lang="scss">
.notes-page {
  width: 100%;
  height: calc(100vh - 64px);
  overflow: hidden;

  &__container {
    width: 100%;
    height: 100%;
    border: none;
  }
}
</style>
