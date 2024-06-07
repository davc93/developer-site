import { Route, Routes } from 'react-router-dom'
import { AccordionPage } from './routes/accordion'
import { Alert } from './routes/alert'

export const DesignApp = () => {
  return (
    <Routes>
      <Route path="accordion" element={<AccordionPage />} />
      <Route path="alert" element={<Alert />} />
    </Routes>
  )
}
