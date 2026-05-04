import { useEffect, useRef, useState } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Hero from '../../components/Hero/Hero'
import PostCard from '../../components/PostCard/PostCard'
import { getMemeImage } from '../../utils/memeApi'
import './Doomscrolling.css'
import {
  randomPick,
  getRandomInt,
  pickUnique,
  usernamesArr,
  timeLabels,
  randomCommentsArr,
  brandsArr,
  commentarySubtle,
  commentaryAware,
  commentaryAggressive
} from '../../utils/helpers'

// the actual scrolling page. shows an endless feed of memes,
// fake ads, and commentary "warnings" that get more aggressive
// the longer you scroll.
export default function Doomscrolling() {
  // list of post objects we render to the screen
  const [posts, setPosts] = useState([])
  // how long the user has been scrolling (in seconds)
  const [scrollTime, setScrollTime] = useState(0)
  // whether to show the "stop scrolling" button at the bottom
  const [showStopBtn, setShowStopBtn] = useState(false)

  // refs are used for stuff that should NOT trigger a re-render
  const sentinelRef = useRef(null)
  const totalPostsRef = useRef(0)
  const postsSinceCommentaryRef = useRef(0)
  const nextCommentaryRef = useRef(getRandomInt(4, 6))
  const loadingRef = useRef(false)
  const timerStartRef = useRef(Date.now())

  // build a normal feed post from a meme image
  function makeRegularPost() {
    const meme = getMemeImage()
    if (!meme) return null

    const time = randomPick(timeLabels)
    const commentCount = getRandomInt(10, 8000)
    const username = '@' + meme.author
    const likes = meme.ups

    // pick a few unique random comments to show under the post
    const n = getRandomInt(2, 5)
    const usernames = pickUnique(usernamesArr, n)
    const texts = pickUnique(randomCommentsArr, n)
    const commentList = []
    for (let i = 0; i < usernames.length; i++) {
      commentList.push({ username: usernames[i], text: texts[i] })
    }

    return {
      id: 'post-' + totalPostsRef.current + '-' + Date.now(),
      type: 'regular',
      username: username,
      time: time,
      commentCount: commentCount,
      likes: likes,
      imageUrl: meme.url,
      imageCaption: meme.title || randomPick(randomCommentsArr),
      avatar: username.charAt(1).toUpperCase(),
      commentList: commentList
    }
  }

  // build a sponsored / fake ad post
  function makeSponsoredPost() {
    const brand = randomPick(brandsArr)
    return {
      id: 'sponsored-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8),
      type: 'sponsored',
      brandName: brand.name,
      avatar: brand.initials,
      tagline: brand.tagline,
      url: brand.url
    }
  }

  // build the gray warning lines that appear between posts.
  // they get more aggressive the longer you have scrolled.
  function makeCommentary(postCount) {
    const minutes = Math.floor((Date.now() - timerStartRef.current) / 60000)

    let template
    let warning = false

    if (postCount <= 15) {
      template = randomPick(commentarySubtle)
    } else if (postCount <= 35) {
      template = randomPick(commentaryAware)
    } else {
      template = randomPick(commentaryAggressive)
      warning = true
    }

    // replace the {n} and {t} placeholders in the template
    let text = template.replace('{n}', String(postCount))
    text = text.replace('{t}', String(minutes || 1))

    let finalText = text
    if (!warning) {
      finalText = '━━━ ' + text + ' ━━━'
    }

    return {
      id: 'commentary-' + totalPostsRef.current + '-' + Date.now(),
      type: 'commentary',
      text: finalText,
      warning: warning
    }
  }

  // generate a batch of new posts and add them to the feed
  function generateBatch() {
    if (loadingRef.current) return
    loadingRef.current = true

    const batchSize = getRandomInt(5, 8)
    const newPosts = []

    for (let i = 0; i < batchSize; i++) {
      // sometimes drop in a commentary divider
      if (postsSinceCommentaryRef.current >= nextCommentaryRef.current) {
        newPosts.push(makeCommentary(totalPostsRef.current))
        postsSinceCommentaryRef.current = 0
        nextCommentaryRef.current = getRandomInt(4, 6)
      }

      // 10% chance the post is a sponsored ad
      if (Math.random() < 0.1) {
        newPosts.push(makeSponsoredPost())
      } else {
        const post = makeRegularPost()
        if (post) {
          newPosts.push(post)
          totalPostsRef.current = totalPostsRef.current + 1
          postsSinceCommentaryRef.current = postsSinceCommentaryRef.current + 1
        }
      }

      // every 20 posts show the stop button
      if (totalPostsRef.current % 20 === 0) {
        setShowStopBtn(true)
      }
    }

    setPosts(function (prev) {
      return [...prev, ...newPosts]
    })
    loadingRef.current = false
  }

  // infinite scroll: when the sentinel div comes into view, load more posts
  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        generateBatch()
      }
    }, { rootMargin: '200px' })

    observer.observe(sentinel)

    // try to render the first post right away.
    // sometimes the meme list isn't ready yet, in which case the
    // observer above will fire generateBatch a moment later
    const first = makeRegularPost()
    if (first) {
      setPosts([first])
      totalPostsRef.current = 1
    }

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // timer that counts seconds since the page loaded
  useEffect(() => {
    const timer = setInterval(function () {
      const elapsed = Math.floor((Date.now() - timerStartRef.current) / 1000)
      setScrollTime(elapsed)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // helper to format seconds as MM:SS
  function formatTime(seconds) {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0')
    const secs = String(seconds % 60).padStart(2, '0')
    return mins + ':' + secs
  }

  // change the timer color depending on how long you've been scrolling
  function getTimerClass() {
    if (scrollTime >= 300) return 'scroll-timer danger'
    if (scrollTime >= 120) return 'scroll-timer warn'
    return 'scroll-timer'
  }

  // show an alert with how long the user scrolled
  function handleStopScrolling() {
    const time = formatTime(scrollTime)
    const mins = Math.floor(scrollTime / 60)
    alert('You scrolled for ' + time + '. That\'s ' + mins + ' minutes of your life. 😅')
  }

  return (
    <>
      <Navigation activePage="doomscrolling" />

      <Hero title="trending now" intro="See how long you last before you stop yourself." />

      <div className={getTimerClass()}>
        {formatTime(scrollTime)}
      </div>

      <div className="feed">
        {posts.map(function (post) {
          return <PostCard key={post.id} post={post} />
        })}
      </div>

      {/* invisible div at the bottom — when it scrolls into view, more posts load */}
      <div className="sentinel" ref={sentinelRef} />

      {showStopBtn ? (
        <button className="stop-scrolling" onClick={handleStopScrolling}>
          stop scrolling
        </button>
      ) : null}
    </>
  )
}
