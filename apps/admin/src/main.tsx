import 'ui-styles/src/variables.css'
import 'ui-styles/src/animations.css'
import 'ui-styles/src/base.css'
import './style.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { handleColorSchemeChange } from '@/utils'

handleColorSchemeChange(window.matchMedia('(prefers-color-scheme: dark)'))

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', handleColorSchemeChange)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
)
