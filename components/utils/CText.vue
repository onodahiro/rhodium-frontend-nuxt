<template>
  <span
    :style="props.styles"
    :class="props.className"
  ><slot /></span>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  styles?: string | undefined
  className?: string | undefined
  withGradient?: boolean
}>(), {
  withGradient: false,
})
</script>
