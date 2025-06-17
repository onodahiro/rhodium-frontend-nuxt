<template>
  <div class="notes-page">
    <div class="notes-controll">
      <CInput
        v-model="noteText"
        label="Note text"
        hide-details
        @enter="saveNote"
      />
      <Cbtn
        text="Save"
        @click="saveNote"
      />
    </div>
    <NotesList
      :list="notesStore.notesData"
    />
    <div class="notes-paginate">
      <CPaginate
        :page-count="notesStore.notesMeta.last_page"
        @click-page="selectPage"
      />
    </div>
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

function selectPage(page: number) {
  notesStore.getNotes(page)
}
</script>
