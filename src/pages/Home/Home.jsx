import Navigation from '../../components/Navigation/Navigation'
import Hero from '../../components/Hero/Hero'
import ScrollBackdrop from '../../components/ScrollBackdrop/ScrollBackdrop'
import Button from '../../components/Button/Button'
import './Home.css'

// list of stat sections shown on the home page
// each one has a heading, a body paragraph, and a link to the source
const stats = [
  {
    id: 'time',
    heading: '2 hours, 23 minutes.',
    body: (
      <>
        That is how long the average person spends on social media every day. Over a year, that adds up to <strong>36 full days</strong> of your life. Scrolling.
      </>
    ),
    sourceUrl: 'https://datareportal.com/reports/digital-2024-global-overview-report',
    sourceLabel: 'DataReportal — Digital 2024'
  },
  {
    id: 'hacked',
    heading: 'Your brain is being hacked.',
    body: (
      <>
        Social media platforms are engineered by teams of psychologists to keep you scrolling. Infinite scroll, autoplay, notifications — <strong>none of it is accidental</strong>.
      </>
    ),
    sourceUrl: 'https://www.health.harvard.edu/mind-and-mood/doomscrolling-dangers',
    sourceLabel: 'Harvard Health — 2024'
  },
  {
    id: 'dopamine',
    heading: 'You already knew it was bad. You kept scrolling anyway.',
    body: (
      <>
        That is not weakness — that is by design. The same <strong>dopamine loop</strong> that drives gambling addiction drives your feed.
      </>
    ),
    sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10074257/',
    sourceLabel: 'NIH — 2022'
  },
  {
    id: 'anxious',
    heading: "The news isn't making you informed. It's making you anxious.",
    body: (
      <>
        Studies show the more you consume, the worse you feel — yet the algorithm keeps serving you <strong>more of exactly what's hurting you</strong>.
      </>
    ),
    sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9580444/',
    sourceLabel: 'Applied Research in Quality of Life — 2023'
  }
]

export default function Home() {
  return (
    <div className="page-home">
      <Navigation activePage="home" />

      <Hero title="doomscrolling" intro="You know it wastes your time. Here is how much." />

      <div className="research-wrap">
        <ScrollBackdrop />

        <div className="research">
          {/* go through every stat in the array and show it */}
          {stats.map(function (stat) {
            return (
              <section key={stat.id} className="stat-section">
                <h2 className="stat-heading">{stat.heading}</h2>
                <p className="stat-body">{stat.body}</p>
                <a
                  className="stat-source"
                  href={stat.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {stat.sourceLabel}
                </a>
              </section>
            )
          })}

          {/* button at the bottom that takes you to my opinion page */}
          <div className="bottom-cta">
            <p className="cta-label">want to hear a personal take on this?</p>
            <Button to="/opinion">read my opinion →</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
