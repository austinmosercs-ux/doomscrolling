import './Hero.css'

// import all the social media logos
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import tiktok from '../../assets/tiktok.png'
import twitter from '../../assets/twitter.png'
import x from '../../assets/x.png'
import youtube from '../../assets/youtube.png'

// put the logos in an array so we can loop through them
const images = [facebook, instagram, tiktok, twitter, x, youtube]

function Hero({ title, intro, children }) {
  return (
    <div className="hero">
      {/* slideshow that fades through each logo one at a time */}
      <div className="hero-slideshow">
        {images.map((src) => (
          <img key={src} src={src} alt="" />
        ))}
      </div>

      <div className="hero-content">
        <h1>{title}</h1>
        {intro && <p className="hero-intro">{intro}</p>}
        {children}
      </div>
    </div>
  )
}

export default Hero
