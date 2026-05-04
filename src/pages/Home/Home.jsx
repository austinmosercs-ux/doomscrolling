import Navigation from '../../components/Navigation/Navigation'
import Hero from '../../components/Hero/Hero'
import ScrollBackdrop from '../../components/ScrollBackdrop/ScrollBackdrop'
import Button from '../../components/Button/Button'
import './Home.css'

export default function Home() {
  return (
    <div className="page-home">
      <Navigation activePage="home" />

      <Hero title="doomscrolling" intro="You know it wastes your time. Here is how much." />

      <div className="research-wrap">
        <ScrollBackdrop />

        <div className="research">

          <section className="stat-section">
            <h2 className="stat-heading">2 hours, 23 minutes.</h2>
            <p className="stat-body">
              That is how long the average person spends on social media every day. Over a year, that adds up to <strong>36 full days</strong> of your life. Scrolling.
            </p>
            <a className="stat-source" href="https://datareportal.com/reports/digital-2024-global-overview-report" target="_blank">
              DataReportal — Digital 2024
            </a>
          </section>

          <section className="stat-section">
            <h2 className="stat-heading">Your brain is being hacked.</h2>
            <p className="stat-body">
              Social media platforms are engineered by teams of psychologists to keep you scrolling. Infinite scroll, autoplay, notifications — <strong>none of it is accidental</strong>.
            </p>
            <a className="stat-source" href="https://www.health.harvard.edu/mind-and-mood/doomscrolling-dangers" target="_blank">
              Harvard Health — 2024
            </a>
          </section>

          <section className="stat-section">
            <h2 className="stat-heading">You already knew it was bad. You kept scrolling anyway.</h2>
            <p className="stat-body">
              That is not weakness — that is by design. The same <strong>dopamine loop</strong> that drives gambling addiction drives your feed.
            </p>
            <a className="stat-source" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10074257/" target="_blank">
              NIH — 2022
            </a>
          </section>

          <section className="stat-section">
            <h2 className="stat-heading">The news isn't making you informed. It's making you anxious.</h2>
            <p className="stat-body">
              Studies show the more you consume, the worse you feel — yet the algorithm keeps serving you <strong>more of exactly what's hurting you</strong>.
            </p>
            <a className="stat-source" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9580444/" target="_blank">
              Applied Research in Quality of Life — 2023
            </a>
          </section>

          <div className="bottom-cta">
            <p className="cta-label">want to hear a personal take on this?</p>
            <Button to="/opinion">read my opinion →</Button>
          </div>

        </div>
      </div>
    </div>
  )
}
