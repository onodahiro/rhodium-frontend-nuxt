import type { RuntimeConfig } from 'nuxt/schema'

interface Params {
  method: 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | undefined
  body?: object
}

export const useNotesApi = async <T>(path: string, params?: Params): Promise<T> => {
  const runtimeConfig: RuntimeConfig = useRuntimeConfig()
  return await $fetch(`${runtimeConfig.public.notesUrl}${path}`, params)
}
