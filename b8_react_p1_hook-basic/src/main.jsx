import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ComponentUseReducer from './ComponentUseReducer.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <ComponentUseReducer/>
  </>,
)