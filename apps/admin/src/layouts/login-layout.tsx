import { useContext } from 'react'
import { AuthContext } from '@/providers/auth-provider'
import { Navigate, Outlet } from 'react-router-dom'

export const LoginLayout = () => {
  const { token } = useContext(AuthContext)

  if (token) {
    return <Navigate to={'/dashboard'} />
  }
  return (
    <div className="h-screen w-full overflow-hidden flex">
      <div className="login-page-background"></div>
      <main className="overflow-y-auto z-10 overflow-x-hidden w-full scrollbar--native">
        <div className="page-container w-full h-full max-w-5xl pl-12 ">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
