import { Link } from 'react-router-dom'
import './Button.css'

function Button({ to, onClick, children, className, type }) {
  const classes = className ? `btn ${className}` : 'btn'

  // if a "to" prop is passed render a link, otherwise render a button
  if (to) {
    return <Link to={to} className={classes}>{children}</Link>
  }

  return (
    <button type={type || 'button'} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

export default Button
