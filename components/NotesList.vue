<template>
  <div class="notes--container">
    <div
      v-for="({ id, text, checked }, index) in props.list"
      :key="index"
      class="note"
    >
      <div class="note__left--wrapper">
        <div class="note__left">
          <CText>
            {{ id }}
          </CText>
          <CCheckbox
            :initial="Boolean(checked)"
            :value="String(id)"
            @click-checkbox="checkNote"
          />
        </div>
      </div>
      <div class="note__right">
        <CText
          :class="{ 'c-text__through': checked }"
          style="width: 90%;"
        >
          {{ text }}
        </CText>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NoteEl } from '../stores/notes'

const props = defineProps<{
  list: Array<NoteEl> | undefined
}>()

const notesStore = useNotesStore()

function checkNote(id: string | undefined) {
  if (typeof id === 'string') {
    notesStore.checkNote(id)
  }
}
</script>

<style lang="scss">
  .notes--container {
    overflow-y: scroll;
    height: calc(100vh - 209px);

    :last-child {
      border-bottom: none;
    }
  }

  .v-theme--light {
    .note {
      border-bottom: 1px solid $border-color--light;
    }
    .note__left--wrapper {
      border-right: 1px solid $border-color--light;
    }
  }

  .v-theme--dark {
    .note {
      border-bottom: 1px solid $border-color--dark;
    }
    .note__left--wrapper {
      border-right: 1px solid $border-color--dark;
    }
  }

  .notes--container > :last-child {
    border-bottom: none;
  }
  // .notes--container {
  //   :last-child {
  //     border-bottom: 1px solid red;
  //   }
  // }

  .note {
    display: flex;
    padding-right: 15vw;
  }

  .note__left--wrapper {
    min-width: 20%;
    width: 20%;
  }

  .note__left {
    padding: 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .note__right {
    padding: 15px;
    display: flex;
    align-items: center;
  }
</style>
