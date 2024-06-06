import { config } from '@/config'
import { useAuthStore } from '@/stores/auth/auth.store'
import axios from 'axios'

const developerApi = axios.create({
  baseURL: config.apiUri
})

developerApi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export { developerApi }
