import { Sidebar } from '@/components/Sidebar'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

export const DashboardLayout = () => {
  const { token } = useAuth()

  if (!token) {
    return <Navigate to={'/login'} />
  }
  return (
    <div className="h-screen w-full overflow-hidden flex">
      <Sidebar />
      <div className="login-page-background"></div>
      <main className="overflow-y-auto z-10 overflow-x-hidden w-full scrollbar--native">
        <div className="page-container w-full h-full pl-1 ">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
