import Navigation from '../../components/Navigation/Navigation'
import Hero from '../../components/Hero/Hero'
import ScrollBackdrop from '../../components/ScrollBackdrop/ScrollBackdrop'
import Button from '../../components/Button/Button'
import './Opinion.css'

// my opinion page. just my own paragraphs about doomscrolling.
export default function Opinion() {
  return (
    <div className="page-opinion">
      <Navigation activePage="opinion" />

      <Hero
        title="my opinion"
        intro="Just going to check my phone real quick..."
      >
      </Hero>

      <div className="essay-wrap">
        <ScrollBackdrop />

        <div className="essay">
          <section className="essay-section">
            <p className="essay-body">
              I honestly think doomscrolling is just a huge waste of time. You can start anywhere. In class, laying in bed, waiting for something, or just checking your phone for a second. Then somehow an hour is gone and you do not even know how it happened. Most of the time you do not notice it starting. It just kind of pulls you in. To me, doomscrolling is constantly looking through negative or dramatic stuff online, even when you know it is not really helping you. It is not always intentional either. Sometimes you are bored. Sometimes you are avoiding something. Sometimes it is just automatic.
            </p>
          </section>

          <section className="essay-section">
            <p className="essay-body">
              It feels addicting because apps are built to keep you there. TikTok, Instagram, Twitter, YouTube, they all have endless feeds. And now even apps that did not used to have that kind of layout are adding it. There is no real stopping point. The next post just loads. The next video just plays. You do not even have to press anything. On top of that, there is always that feeling like you might miss something if you stop. Even if it is not important, it feels important in the moment. That mix of endless content and curiosity makes it really easy to just keep going.
            </p>
          </section>

          <section className="essay-section">
            <p className="essay-body">
              For me, doomscrolling usually ends with regret. I tell myself I am just taking a quick break from homework, but that &quot;quick&quot; break turns into something way longer. At first it feels fine. Maybe even relaxing. But then it shifts. I start feeling stressed or annoyed at myself for wasting time. It goes from fun to frustrating without me really noticing when it changed. And I feel like a lot of people probably relate to that switch.
            </p>
          </section>

          <section className="essay-section">
            <p className="essay-body">
              It definitely messes with my productivity. Even when the content is not that interesting, I keep scrolling because maybe the next thing will be better. It completely breaks my focus. Then when I finally stop, it feels like my brain needs a minute to reset before I can actually get back into working mode. And if that keeps happening every day, it adds up. A &quot;few minutes&quot; here and there turns into hours over time.
            </p>
          </section>

          <section className="essay-section">
            <p className="essay-body">
              Not everyone doomscrolls the same way. Some people get pulled into dramatic or negative content faster, especially if they are already stressed. Other people can just close the app and move on. For me it kind of depends on how I am feeling that day. Sometimes I can stop easily. Other times I just keep going. So I do not think it is only about the apps. It is also about how you are feeling when you open them.
            </p>
          </section>

          <section className="essay-section">
            <p className="essay-body">
              It is hard to stop because everything feels personalized. The app learns what you like and keeps showing you more of it. So right when you are about to close it, something catches your attention again. It almost feels automatic after a while. There is no real ending, no final page, nothing that signals you are done. The feed just keeps going. And because of that, it always feels like there is one more thing worth seeing.
            </p>
          </section>

          <section className="essay-section">
            <p className="essay-body">
              Doomscrolling feels like a cycle. You start because you are bored or avoiding something. You stay because it is entertaining. You stop feeling guilty. Then the next day you do it again. It repeats, but it always feels slightly different because the posts and images change. That is what makes it tricky. It feels new every time, but it is really the same behavior over and over again.
            </p>
          </section>

          {/* button at the bottom to take you to the scroll test */}
          <div className="bottom-cta">
            <p className="cta-label">ready to scroll intentionally?</p>
            <Button to="/doomscrolling">try the scroll test →</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
