import './Hero.css'

function Hero({ title, intro, children }) {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        {intro && <p className="hero-intro">{intro}</p>}
        {children}
      </div>
    </div>
  )
}

export default Hero
