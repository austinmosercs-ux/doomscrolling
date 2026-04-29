import './Hero.css'

// hero banner shown at the top of every page
function Hero(props) {
  const title = props.title
  const intro = props.intro
  const children = props.children

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
