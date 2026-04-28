import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Prevent browser from restoring previous scroll position on page load
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
