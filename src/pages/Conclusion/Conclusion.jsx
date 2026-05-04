import Navigation from '../../components/Navigation/Navigation'
import Hero from '../../components/Hero/Hero'
import ScrollBackdrop from '../../components/ScrollBackdrop/ScrollBackdrop'
import Button from '../../components/Button/Button'
import './Purpose.css'

// purpose page. explains why I made this project
export default function Purpose() {
  // i used inline styles here because i didn't want to make a whole css file just for this
  const wrapStyle = {
    position: 'relative',
    zIndex: 1,
    maxWidth: '700px',
    margin: '0 auto',
    padding: '60px 20px',
    color: '#fff',
    lineHeight: '1.8'
  }
  const headingStyle = { marginBottom: '20px' }
  const headingStyleTop = { marginBottom: '20px', marginTop: '40px' }
  const paraStyle = { marginBottom: '20px' }
  const lastParaStyle = { marginBottom: '40px' }

  return (
    <>
      <Navigation activePage="purpose" />

      <Hero title="why this exists" intro="The purpose behind this project" />

      <div className="purpose-wrap">
        <ScrollBackdrop />

        <div style={wrapStyle}>
          <h2 style={headingStyle}>What is this?</h2>
          <p style={paraStyle}>
            This is a project built to make the invisible visible. Doomscrolling isn&apos;t always something people consciously think about — it&apos;s more something that happens to them.
          </p>

          <h2 style={headingStyleTop}>Why?</h2>
          <p style={paraStyle}>
            Because the costs are real. We spend hours of our lives on social media — time that compounds into weeks, months, and years. And for what? To feel more informed? To feel better? Usually neither.
          </p>

          <h2 style={headingStyleTop}>What&apos;s the point?</h2>
          <p style={paraStyle}>
            This isn&apos;t about demonizing social media. It&apos;s about awareness. If you know how much time you&apos;re actually spending, you can make a real choice about whether that&apos;s how you want to spend it.
          </p>

          <p style={lastParaStyle}>
            And if you decide you do want to scroll? At least you&apos;ll do it on purpose.
          </p>

          <Button to="/">← Back to start</Button>
        </div>
      </div>
    </>
  )
}
