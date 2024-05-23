import { Routes, Route } from 'react-router-dom'
import { CreateLabelPage, EditLabelPage, HomePage } from './routes'
export const LabelApp = () => {
  return (
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="create" element={<CreateLabelPage />} />
        <Route path="edit/:id" element={<EditLabelPage />} />
      </Routes>
  )
}
