import './Hero.css'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import tiktok from '../../assets/tiktok.png'
import twitter from '../../assets/twitter.png'
import x from '../../assets/x.png'
import youtube from '../../assets/youtube.png'

const slideshowImages = [facebook, instagram, tiktok, twitter, x, youtube]

function Hero({ title, intro, children }) {
  return (
    <div className="hero">
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <filter
          id="hero-fill-holes"
          x="-25%"
          y="-25%"
          width="150%"
          height="150%"
          colorInterpolationFilters="sRGB"
        >
          <feComponentTransfer in="SourceAlpha" result="alphaBinary">
            <feFuncA type="discrete" tableValues="0 1" />
          </feComponentTransfer>
          <feMorphology in="alphaBinary" operator="dilate" radius="120" result="dilated" />
          <feMorphology in="dilated" operator="erode" radius="120" result="closed" />
          <feMorphology in="closed" operator="erode" radius="4" result="closedTrimmed" />
          <feComposite in="closedTrimmed" in2="alphaBinary" operator="out" result="holes" />
          <feFlood floodColor="#555555" result="white" />
          <feComposite in="white" in2="holes" operator="in" />
        </filter>
      </svg>
      <div className="hero-slideshow" aria-hidden="true">
        {slideshowImages.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            style={{ animationDelay: `${i * 3}s` }}
          />
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
