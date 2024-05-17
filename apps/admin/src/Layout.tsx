import { useContext, type ReactNode } from 'react'
import { Sidebar } from '@/components/Sidebar'
import { AuthContext } from '@/context/AuthContext'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { token } = useContext(AuthContext)

  return (
    <div className="h-screen w-full overflow-hidden flex">
      {token && <Sidebar />}
      <div
        className="login-page-background"
      ></div>
      <main className="overflow-y-auto z-10 overflow-x-hidden w-full scrollbar--native">
        <div className="page-container w-full h-full max-w-5xl pl-12 ">
          {children}
        </div>
      </main>
    </div>
  )
}
