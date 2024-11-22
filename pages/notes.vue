<template>
  <div class="notes-page">
    <CInput
      v-model="noteText"
    />
    <Cbtn
      text="Save"
      @click="saveNote"
    />
    <NotesList
      :list="notesStore.notesData"
      @check="checkNote"
    />
  </div>
</template>

<script setup lang="ts">
const noteText = ref('')
const notesStore = useNotesStore()

notesStore.getNotes()

function saveNote() {
  notesStore.saveNote(noteText.value.trim())
  noteText.value = ''
}

function checkNote(id: number) {
  notesStore.checkNote(id)
}
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
