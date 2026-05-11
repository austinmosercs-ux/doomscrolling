import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// global styles + the animation files
import './styles/base.css'

// mount the React app onto the #root element from index.html
const rootEl = document.getElementById('root')
const root = ReactDOM.createRoot(rootEl)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
