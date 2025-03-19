import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CallApiAxios from './CallApiAxios.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <CallApiAxios/>
  </StrictMode>,
)