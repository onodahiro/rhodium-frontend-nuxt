<template>
  <v-btn
    :text="props.text"
    variant="outlined"
    min-width="175"
    min-height="40"
    rounded="0"
    :class="`c-btn-${props.className}`"
    @click="emit('click')"
  />
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  text?: string
  className?: string | undefined
  withGradient?: boolean
}>(), {
  text: 'button',
  className: 'primary',
})

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>
