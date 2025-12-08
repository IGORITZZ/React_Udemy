import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CounterContexProvider } from './context/CounterContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterContexProvider>
      <App />
    </CounterContexProvider>
  </StrictMode>,
)
