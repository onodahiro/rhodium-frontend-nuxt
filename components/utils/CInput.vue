<template>
  <v-text-field
    v-model="value"
    :name="value"
    :label="isLabel ? '' : props.label"
    :class="props.className"
    :density="props.density"
    :hide-details="props.hideDetails"
    :rounded="false"
    @focus="focused = true"
    @blur="focused = false"
    @keydown.enter.prevent="emit('enter')"
  />
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  label?: string
  className?: string | undefined
  hideDetails?: boolean
  density?: 'default' | 'comfortable' | 'compact'
}>(), {
  label: 'label',
  className: '',
  hideDetails: false,
  density: 'compact',
})

const emit = defineEmits<{
  (e: 'enter'): void
}>()

const value = defineModel<string>()
const focused = ref<boolean>()

const isLabel = computed((): boolean => {
  return Boolean(focused.value) || Boolean(value.value)
})
</script>
