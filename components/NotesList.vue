<template>
  <div>
    <ol
      v-for="({ text }, index) in list"
      :key="index"
    >
      <li>
        {{ text }}
      </li>
    </ol>
    {{ notes }}
  </div>
</template>

<script setup lang="ts">
type NoteEl = {
  id: number
  text: 'string'
  checked: number
  tags: Array<{
    id: number
    text: string
  }>
  date_created: string
}

interface props {
  list: Array<NoteEl> | undefined
}

const notes = useNotes()
const { list } = defineProps<props>()
</script>
