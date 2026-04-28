import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import MyOpinion from './pages/MyOpinion'
import Example from './pages/Example'
import Results from './pages/Results'
import './App.css'

function App() {
  return (
    <>
      <nav className="site-nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/my-opinion">My Opinion</NavLink>
        <NavLink to="/example">Example</NavLink>
        <NavLink to="/results">Results</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-opinion" element={<MyOpinion />} />
        <Route path="/example" element={<Example />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </>
  )
}

export default App
