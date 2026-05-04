import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation({ activePage }) {
  // returns "nav-link active" if this is the current page, otherwise just "nav-link"
  function getClass(page) {
    if (page == activePage) {
      return 'nav-link active'
    }
    return 'nav-link'
  }

  return (
    <nav className="top-nav">
      <Link to="/" className={getClass('home')}>home</Link>
      <Link to="/opinion" className={getClass('opinion')}>my opinion</Link>
      <Link to="/doomscrolling" className={getClass('doomscrolling')}>start scrolling</Link>
      <Link to="/purpose" className={getClass('purpose')}>purpose</Link>
    </nav>
  )
}

export default Navigation
