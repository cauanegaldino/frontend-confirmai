import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import PainelProcesso from './pages/painelProcesso.jsx'
import PainelAdm from './pages/painelAdm.jsx'
import PainelNovoForm from './pages/painelNovoForm.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PainelNovoForm />
  </StrictMode>,
)
