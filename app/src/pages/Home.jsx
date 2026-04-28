import { Link } from 'react-router-dom'
import './Home.css'

const stats = [
  {
    headline: '2 hours, 23 minutes.',
    body: 'That is how long the average person spends on social media every day. Over a year, that adds up to 36 full days of your life. Scrolling.',
    source: 'DataReportal — Digital 2024',
  },
  {
    headline: 'Your brain is being hacked.',
    body: 'Social media platforms are engineered by teams of psychologists to keep you scrolling. Infinite scroll, autoplay, notifications, and none of it is accidental.',
    source: 'Harvard Health — 2024',
  },
  {
    headline: 'You already knew it was bad. You kept scrolling anyway.',
    body: 'That is not weakness, and that is by design. The same dopamine loop that drives gambling addiction drives your feed.',
    source: 'NIH — 2022',
  },
  {
    headline: "The news isn't making you informed. It's making you anxious.",
    body: "Studies show the more you consume, the worse you feel and yet the algorithm keeps serving you more of exactly what's hurting you.",
    source: 'Applied Research in Quality of Life — 2023',
  },
]

function Home() {
  return (
    <div className="home">
      <section className="home-hero">
        <h1>doomscrolling</h1>
        <p>You know it wastes your time. Here is how much.</p>
      </section>

      <section className="home-stats">
        {stats.map((stat) => (
          <article className="stat" key={stat.headline}>
            <h2>{stat.headline}</h2>
            <p>{stat.body}</p>
            <cite className="source">{stat.source}</cite>
          </article>
        ))}
      </section>

      <section className="home-cta">
        <p>want to hear a personal take on this?</p>
        <Link className="home-cta-button" to="/my-opinion">
          read my opinion →
        </Link>
      </section>
    </div>
  )
}

export default Home
