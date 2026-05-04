import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Opinion from './pages/Opinion/Opinion'
import Doomscrolling from './pages/Doomscrolling/Doomscrolling'
import Conclusion from './pages/Conclusion/Conclusion'

// main app component. just sets up the router + routes.
// TODO: add the doomscrolling and purpose pages once they are built
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/opinion" element={<Opinion />} />
        <Route path="/doomscrolling" element={<Doomscrolling />} />
        <Route path="/conclusion" element={<Conclusion />} />
      </Routes>
    </BrowserRouter>
  )
}
