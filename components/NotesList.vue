<template>
  <div>
    <ol
      v-for="({ id, text, checked }, index) in list"
      :key="index"
    >
      <li>
        {{ id }}
        <input
          type="checkbox"
          :checked="Boolean(checked)"
          @click.prevent="emit('check', id)"
        >
        {{ text }}
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import type { NoteEl } from '../stores/notes'

const emit = defineEmits<{
  (e: 'check', id: number): void
}>()

interface props {
  list: Array<NoteEl> | undefined
}

const { list } = defineProps<props>()
</script>
