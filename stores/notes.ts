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

type Meta = {
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
  meta: Meta
}

export type { NoteEl, Meta }
export const useNotesStore = defineStore('notesStore', {
  state: () => ({
    data: [] as Array<NoteEl>,
    meta: {} as Meta,
  }),

  getters: {
    notesData(state) {
      return state.data
    },
    notesMeta(state) {
      return state.meta
    },
    lastPage(state) {
      return state.meta.last_page
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
        .then(() => {
          this.getNotes()
        })
    },

    async checkNote(id: string) {
      await useNotesApi<{ id: string }>(`/check?id=${id}`)
        .then((res) => {
          const target = this.data.find(el => el.id === +res.id)
          if (target?.checked) {
            target.checked = 0
          }
          else if (target?.checked === 0) {
            target.checked = 1
          }
        })
    },
  },
})
