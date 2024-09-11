<template>
  <span
    :style="props.styles"
    :class="'c-text-gradient'"
  ><slot /></span>
</template>

<script setup lang="ts">
interface Props {
  styles?: string | undefined
  withGradient?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  withGradient: false,
})
</script>
