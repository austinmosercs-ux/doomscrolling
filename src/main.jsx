import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// global styles + the animation files
import './styles/shared.css'
import './styles/animations/fade-in-up.css'
import './styles/animations/scroll-bounce.css'
import './styles/animations/crossfade-zoom.css'
import './styles/animations/dot-grow.css'

// mount the React app onto the #root element from index.html
const rootEl = document.getElementById('root')
const root = ReactDOM.createRoot(rootEl)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
