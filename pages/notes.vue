<template>
  <div class="notes-container">
    <iframe
      :src="runtimeConfig.apiNotes"
    />
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
</script>

<style>
body {
      margin: 0;
  }
</style>
