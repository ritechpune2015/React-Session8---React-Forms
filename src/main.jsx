import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { MultipleInputForm } from './components/MultipleInputForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MultipleInputForm />
  </StrictMode>,
)
