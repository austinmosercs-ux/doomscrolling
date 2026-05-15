import { useLocation } from 'react-router-dom'
import Navigation from '../../components/Navigation/Navigation'
import ScrollBackdrop from '../../components/ScrollBackdrop/ScrollBackdrop'
import Hero from '../../components/Hero/Hero'
import './Conclusion.css'

export default function Conclusion() {
  const location = useLocation()
  const time = location.state?.time || '--:--'
  const posts = location.state?.posts || '--'

  return (
    <>
      <Navigation activePage="conclusion" />

      <div className="conclusion-wrapper">
        <ScrollBackdrop />

        <Hero title="conclusion" intro="You already knew it was bad. You kept scrolling anyway." />

        <div className="conclusion-page">

        <section className="conclusion-section">
          <span className="section-label">the point</span>
          <h2 className="section-heading">This site was built to make you feel the time you waste scrolling.</h2>
          <p className="section-body">Reading a stat is one thing. Watching your own timer tick while you keep scrolling anyway is the experience itself. It is an infinite feed that calls you out the longer you stay in it.</p>
        </section>

        <section className="conclusion-section">
          <span className="section-label">your session</span>
          <h2 className="section-heading">here is what this site is.</h2>
          <div className="session-stats">
            <div className="stat">
              <span className="stat-value">{time}</span>
              <span className="stat-label">time spent</span>
            </div>
            <div className="stat">
              <span className="stat-value">{posts}</span>
              <span className="stat-label">posts seen</span>
            </div>
          </div>
          <p className="section-body">The home page shows the data. The opinion page is a personal take. The scrolling page is the experience itself. It is an infinite feed that calls you out the longer you stay in it.</p>
        </section>

        <section className="conclusion-section">
          <span className="section-label">what the research said</span>
          <h2 className="section-heading">You were not imagining it.</h2>
          <ul className="research-list">
            <li>2h 23min a day or 36 full days a year.</li>
            <li>Your brain is being hacked and none of it is accidental.</li>
            <li>The same dopamine loop that drives gambling drives your feed.</li>
            <li>The news is not making you informed. It is making you anxious.</li>
          </ul>
        </section>

        <section className="conclusion-section">
          <span className="section-label">what i said</span>
          <h2 className="section-heading">It starts as a quick break. It never ends that way.</h2>
          <p className="section-body">Doomscrolling is a loop: you start because you are bored, you stay because it is entertaining, you stop feeling guilty, and the next day you do it again. The posts change. The behavior does not.</p>
        </section>

        <section className="conclusion-final">
          <h2 className="final-heading">now close the tab.</h2>
          <p className="final-body">You already knew all of this. The hard part is not knowing. It is doing something about it.</p>
        </section>

      </div>

      </div>
    </>
  )
}
