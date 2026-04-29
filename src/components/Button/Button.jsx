import { Link } from 'react-router-dom'
import './Button.css'

// reusable button. if you pass a "to" prop it becomes a router link,
// otherwise it's a normal <button>
function Button(props) {
  const { to, onClick, children, className, type } = props

  let classes = 'btn'
  if (className) {
    classes = classes + ' ' + className
  }

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type || 'button'} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

export default Button
