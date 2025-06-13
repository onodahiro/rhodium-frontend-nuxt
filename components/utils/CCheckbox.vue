<template>
  <div>
    <v-checkbox
      v-model="chekboxValue"
      :label="props.label"
      :hide-details="props.hideDetails"
      :density="props.density"
      @click.prevent="emit('clickCheckbox', props.value)"
    />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  value: string | undefined
  initial: boolean | undefined
  label?: string
  density?: 'default' | 'comfortable' | 'compact'
  hideDetails?: boolean
}>(), {
  label: '',
  density: 'compact',
  hideDetails: true,
})

const emit = defineEmits<{
  (e: 'clickCheckbox', value: string | undefined): void
}>()

const chekboxValue = computed(() => props.initial)
</script>
