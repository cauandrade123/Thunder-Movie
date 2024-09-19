import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navigation from './router.jsx'
import './index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navigation />
  </StrictMode>
)
