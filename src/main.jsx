import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// global styles + animation files
import './styles/shared.css'
import './styles/animations/fade-in-up.css'
import './styles/animations/scroll-bounce.css'
import './styles/animations/crossfade-zoom.css'
import './styles/animations/dot-grow.css'

// mount the React app onto the #root element in index.html
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
