import Navigation from '../../components/Navigation/Navigation'
import Hero from '../../components/Hero/Hero'
import ScrollBackdrop from '../../components/ScrollBackdrop/ScrollBackdrop'
import Button from '../../components/Button/Button'
import './Conclusion.css'

export default function Purpose() {
  return (
    <>
      <Navigation activePage="purpose" />

      <Hero title="why this exists" intro="The purpose behind this project" />

      <div className="purpose-wrap">
        <ScrollBackdrop />

        <div className="purpose-content">
          <h2>What is this?</h2>
          <p>
            This is a project built to make the invisible visible. Doomscrolling isn&apos;t always something people consciously think about — it&apos;s more something that happens to them.
          </p>

          <h2>Why?</h2>
          <p>
            Because the costs are real. We spend hours of our lives on social media — time that compounds into weeks, months, and years. And for what? To feel more informed? To feel better? Usually neither.
          </p>

          <h2>What&apos;s the point?</h2>
          <p>
            This isn&apos;t about demonizing social media. It&apos;s about awareness. If you know how much time you&apos;re actually spending, you can make a real choice about whether that&apos;s how you want to spend it.
          </p>

          <p>
            And if you decide you do want to scroll? At least you&apos;ll do it on purpose.
          </p>

          <Button to="/">← Back to start</Button>
        </div>
      </div>
    </>
  )
}
