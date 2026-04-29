import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'

// main app component. just sets up the router + routes.
// TODO: add the doomscrolling and purpose pages once they are built
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
