import type { RuntimeConfig } from 'nuxt/schema'

type Notes = {
  data: Array<NoteEl>
  meta: Array<{
    current_page: number
    from: number
    last_page: number
    links: Array<{
      url: string
      label: string
      active: boolean
    }>
    path: string
    per_page: number
    to: number
    total: number
  }>
}

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

export const useNotesStore = defineStore('notesStore', {
  state: () => ({
    data: [] as Array<NoteEl>,
    description: '',
  }),

  actions: {
    async getNotes() {
      const runtimeConfig: RuntimeConfig = useRuntimeConfig()
      const { data } = await $fetch<Notes>(runtimeConfig.public.apiNotes)
      this.data = data
    },
  },
})
