import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../public/assets/css/styles.css"
import App from './App.jsx'
import { Provider } from 'react-redux'
import MyStore from './redux/store.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={MyStore}>
    <App />
  </Provider>
)