import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ComponentUseReducer from './ComponentUseReducer.jsx'
import Parent from './Parent.jsx'
import Blog from './Blog.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <ComponentUseReducer/>

    {/* useContext */}
    <Parent/>

    {/* Custom hook */}
    <Blog/>
  </>,
)