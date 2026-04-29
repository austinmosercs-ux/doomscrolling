import { Link } from 'react-router-dom'
import './Button.css'

// reusable button. if you pass a "to" prop it turns into a router link,
// if not its just a normal <button>
function Button(props) {
  // pull all the props out
  var to = props.to
  var onClick = props.onClick
  var children = props.children
  var className = props.className
  var type = props.type

  // start with the base class
  let classes = "btn"
  if (className) {
    classes = classes + " " + className
  }

  // if there is a "to" prop then return a Link instead of a button
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  // default = normal button
  return (
    <button type={type || "button"} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

export default Button
