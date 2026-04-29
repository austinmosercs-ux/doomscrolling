import './Hero.css'

// hero banner that shows up at the top of every page
function Hero(props) {
  // pull out the props
  var title = props.title
  var intro = props.intro
  var children = props.children

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        {intro ? <p className="hero-intro">{intro}</p> : null}
        {children}
      </div>
    </div>
  )
}

export default Hero
