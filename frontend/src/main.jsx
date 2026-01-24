import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import PainelProcesso from './pages/painelProcesso.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PainelProcesso />
  </StrictMode>,
)
