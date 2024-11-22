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

type MetaEl = {
  current_page: number
  from: number
  last_page: number
  path: string
  per_page: number
  to: number
  total: number
  links: Array<{
    url: string
    label: string
    active: boolean
  }>
}

type Notes = {
  data: Array<NoteEl>
  meta: Array<MetaEl>
}

export type { NoteEl }

export const useNotesStore = defineStore('notesStore', {
  state: () => ({
    data: [] as Array<NoteEl>,
    meta: [] as Array<MetaEl>,
  }),

  getters: {
    notesData(state) {
      return state.data
    },
  },

  actions: {
    async getNotes(page: number = 1) {
      const { data, meta } = await useNotesApi<Notes>(`?page=${page}`)
      this.data = data
      this.meta = meta
    },

    async saveNote(text: string) {
      await useNotesApi<Notes>(`/save`, {
        method: 'POST',
        body: { text },
      })
        .then((res) => {
          if (res.data) {
            this.getNotes()
          }
        })
    },

    async checkNote(id: number) {
      await useNotesApi<{ id: string }>(`/check?id=${id}`)
        .then((res) => {
          if (res) {
            const target = this.data.find(el => el.id === Number(res.id))
            if (target?.checked === 1) {
              target.checked = 0
            }
            else if (target?.checked === 0) {
              target.checked = 1
            }
            else {
              throw new Error('Note not found')
            }
          }
        })
    },
  },
})
