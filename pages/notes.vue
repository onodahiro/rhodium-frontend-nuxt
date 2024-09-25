<template>
  <div class="notes-page">
    <CInput
      v-model="noteText"
    />
    <Cbtn
      text="Save"
    />
    <NotesList :list="notesStore.data" />
  </div>
</template>

<script setup lang="ts">
const noteText = ref('')
const notesStore = useNotesStore()
notesStore.getNotes()
</script>

<style lang="scss">
.notes-page {
  width: 100%;
  height: calc(100vh - 64px);
  overflow: hidden;

  &__container {
    width: 100%;
    height: 100%;
    border: none;
  }
}
</style>
