// import { AuthContext } from '@/providers/auth-provider'
import { useAuthStore } from '@/stores/auth/auth.store'
// import { useContext } from 'react'

export const useAuth = () => {
  // const { token, setToken, deleteToken } = useContext(AuthContext)
  
  const token = useAuthStore(state=>state.token)
  const setToken = useAuthStore(state => state.setToken)
  const logout = useAuthStore(state => state.logout)
  return {
    token,
    setToken,
    logout,
  }
}
