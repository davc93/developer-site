import { developerApi } from '@/apis/developer.api'
import type { LoginResponse } from '../models/auth.model'
import type { User } from '../models/user.model'
import { AxiosError } from 'axios'

type ProfileResponse = User

class AuthService {
  async login(email: string, password: string): Promise<LoginResponse> {
    try {
      const { data } = await developerApi.post<LoginResponse>('/auth/login', {
        email,
        password
      })
      return data
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data as string)
      }
      throw new Error('No se pudo hacer login correctamente')
    }
  }

  async getProfile(token: string): Promise<ProfileResponse> {
    try {
      const { data } = await developerApi.get<ProfileResponse>('/auth/profile',{headers:{Authorization:`Bearer ${token}`}})
      return data
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data as string)
      }
      throw new Error('No se pudo obtener informacion del usuario')
    }
  }
}

const authService = new AuthService()
export { authService }
