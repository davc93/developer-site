import { Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom'
import { Layout } from '@/Layout'
import { LoginPage } from '@/routes/login'
import { ProfilePage } from '@/routes/profile'
import { useContext, useEffect } from 'react'
import { AuthContext } from '@/context/AuthContext'
import { DashboardPage } from '@/routes/dashboard'
import { ProjectsPage } from '@/routes/projects'
import { CreateProjectPage } from '@/routes/project-create'
import { EditProjectPage } from '@/routes/project-edit'
import { ContactPage } from './contact'
import { LabelApp } from './labels'

export const PublicRoutes = (): JSX.Element => {
  const { token } = useContext(AuthContext)
  const navigate = useNavigate()
  useEffect(() => {
    if (token) {
      navigate('/dashboard')
    }
  }, [])
  return (
    <Routes>
      <Route element={<LoginPage />} path="/login" />
    </Routes>
  )
}

export const PrivateRoutes = (): JSX.Element => {
  const { token } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [])

  return (
    <Routes>
      <Route element={<DashboardPage />} path="/dashboard" />
      <Route element={<ProfilePage />} path="/profile" />
      <Route element={<ProjectsPage />} path="/projects" />
      <Route element={<CreateProjectPage />} path="/project/create" />
      <Route element={<EditProjectPage />} path="/project/edit/:id" />
      <Route element={<ContactPage />} path="/contact" /> */
      <Route element={<LabelApp />} path='/labels/*'/>
    </Routes>
  )
}

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Layout>
        <PrivateRoutes />
        <PublicRoutes />
      </Layout>
    </BrowserRouter>
  )
}
