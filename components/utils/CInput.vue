<template>
  <div>
    <v-text-field
      :name="noteText"
      label="lool"
    />
  </div>
</template>

<script setup lang="ts">
const noteText = defineModel<string>()
</script>
