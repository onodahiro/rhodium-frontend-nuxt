<template>
  <div class="notes--container">
    <div
      v-for="({ id, text, checked }, index) in props.list"
      :key="index"
      class="note"
    >
      <div class="note__left--wrapper">
        <div class="note__left">
          <CText :text="id" />
          <CCheckbox
            :initial="Boolean(checked)"
            :value="String(id)"
            @click-checkbox="checkNote"
          />
        </div>
      </div>
      <div class="note__right">
        <CText
          :text="text"
          :class="{ 'c-text__through': checked }"
          style="width: 90%;"
        />
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
@use "../assets/styles/_breakpoints";

  .notes--container {
    overflow-y: auto;
    height: calc(100vh - 209px);

    @media (max-width: breakpoints.$md) {
      height: calc(100vh - 264px);
    }

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

  .note {
    min-height: 74px;
    display: flex;
    padding-right: 15vw;

    @media (max-width: breakpoints.$md) {
      min-height: 68px;
    }
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

    @media (max-width: breakpoints.$md) {
      padding: 10px;
    }
  }

  .note__right {
    width: 100%;
    padding: 15px;
    display: flex;
    align-items: center;

    @media (max-width: breakpoints.$md) {
      padding: 10px;
    }
  }
</style>
