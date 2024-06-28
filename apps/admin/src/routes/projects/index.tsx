import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Projects,CreateProjectPage,EditProjectPage } from './routes'

export const ProjectsApp = () => {
  return (
    <Routes>
      <Route path='' element={<Projects/>} />

      <Route path='create' element={<CreateProjectPage/>} />

      <Route path='edit/:id' element={<EditProjectPage/>} />
    </Routes>
  )
}
