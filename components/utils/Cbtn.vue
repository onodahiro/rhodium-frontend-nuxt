<template>
  <div>
    <v-btn
      :text="text"
      @click="emit('click')"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  text?: string
}

const emit = defineEmits<{
  click: []
}>()

const {
  text,
} = defineProps<Props>()
</script>
