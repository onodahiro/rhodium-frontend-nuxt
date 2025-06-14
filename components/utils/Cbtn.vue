<template>
  <v-btn
    :text="props.text"
    :variant="props.variant"
    :min-width="props.minWidth"
    :min-height="props.minHeight"
    :rounded="props.rounded"
    :class="`c-btn-${props.className}`"
    @click="emit('click')"
  />
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  text?: string
  className?: string | undefined
  variant?: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'
  minWidth?: string
  minHeight?: string
  rounded?: string
}>(), {
  text: 'button',
  className: 'primary',
  variant: 'outlined',
  minWidth: '175',
  minHeight: '40',
  rounded: '0',
})

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>
