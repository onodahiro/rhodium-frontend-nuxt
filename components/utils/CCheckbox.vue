<template>
  <div>
    <v-checkbox
      v-model="chekboxValue"
      :label="label"
      density="compact"
      hide-details
      @click.prevent="emit('clickCheckbox', props.value)"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  value: string | undefined
  initial: boolean | undefined
  label?: string | undefined
}>()

const emit = defineEmits<{
  (e: 'clickCheckbox', value: string | undefined): void
}>()

const chekboxValue = computed(() => props.initial)
</script>
