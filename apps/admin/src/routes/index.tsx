import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import { LoginPage } from '@/routes/login'
import { ProfilePage } from '@/routes/profile'
import { DashboardPage } from '@/routes/dashboard'

import { ContactPage } from './contact'
import { LabelApp } from './labels'
import { TasksApp } from './tasks'
import { RegisterApp } from './register'
import { DashboardLayout } from '@/layouts'
import { LoginLayout } from '@/layouts/login-layout'
import { DesignApp } from './design'
import { DesignSystemLayout } from '@/layouts/design-system-layout'
import { ProjectsApp } from './projects'

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route element={<DashboardPage />} path="" />
          <Route element={<ProfilePage />} path="profile" />
          <Route element={<ContactPage />} path="contact" /> */
          <Route element={<ProjectsApp />} path="projects/*" />
          <Route element={<LabelApp />} path="labels/*" />
          <Route element={<TasksApp />} path="tasks/*" />
          <Route element={<RegisterApp />} path="register/*" />
          <Route element={<DesignSystemLayout />} path="design-system">
            <Route path="" element={<Navigate to={'introduction'} />} />
            <Route path="*" element={<DesignApp />} />
          </Route>
        </Route>
        <Route path="login" element={<LoginLayout />}>
          <Route element={<LoginPage />} path="" />
        </Route>
          <Route path="design-system" element={<DesignSystemLayout />}>
            <Route path="" element={<Navigate to={'introduction'} />} />
            <Route path="*" element={<DesignApp />} />
          </Route>
        <Route path="/*" element={<Navigate to="login" />} />
      </Routes>
    </BrowserRouter>
  )
}
