<template>
  <span
    :style="props.styles"
    :class="props.className"
  >{{ text }}</span>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  text?: string | number | undefined
  styles?: string | undefined
  className?: string | undefined
  withGradient?: boolean
}>(), {
  text: 'text',
  withGradient: false,
})
</script>
