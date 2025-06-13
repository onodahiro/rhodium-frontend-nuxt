<template>
  <div class="d-flex">
    <v-pagination
      v-model="page"
      :length="props.pageCount"
      :total-visible="props.totalVisible"
      :variant="props.variant"
      :rounded="props.rounded"
      :density="props.density"
    />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  pageCount: number | undefined
  totalVisible?: number
  density?: 'default' | 'comfortable' | 'compact'
  variant?: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'
  rounded?: string
}>(), {
  totalVisible: 5,
  density: 'comfortable',
  variant: 'outlined',
  rounded: '0',
})

const emit = defineEmits<{
  (e: 'clickPage', page: number): void
}>()

const page = ref(1)

watch(page, async (newPage) => {
  emit('clickPage', newPage)
})
</script>
