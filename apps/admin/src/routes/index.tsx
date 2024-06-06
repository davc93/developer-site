import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import { LoginPage } from '@/routes/login'
import { ProfilePage } from '@/routes/profile'
import { DashboardPage } from '@/routes/dashboard'
import { ProjectsPage } from '@/routes/projects'
import { CreateProjectPage } from '@/routes/project-create'
import { EditProjectPage } from '@/routes/project-edit'
import { ContactPage } from './contact'
import { LabelApp } from './labels'
import { TasksApp } from './tasks'
import { RegisterApp } from './register'
import { DashboardLayout } from '@/layouts'
import { LoginLayout } from '@/layouts/login-layout'

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route element={<DashboardPage />} path="" />
          <Route element={<ProfilePage />} path="profile" />
          <Route element={<ProjectsPage />} path="projects" />
          <Route element={<CreateProjectPage />} path="project/create" />
          <Route element={<EditProjectPage />} path="project/edit/:id" />
          <Route element={<ContactPage />} path="contact" /> */
          <Route element={<LabelApp />} path="labels/*" />
          <Route element={<TasksApp />} path="tasks/*" />
          <Route element={<RegisterApp />} path="register/*" />
        </Route>
        <Route path="login" element={<LoginLayout />}>
          <Route element={<LoginPage />} path="" />
        </Route>
        <Route path="/*" element={<Navigate to="login" />} />
      </Routes>
    </BrowserRouter>
  )
}
