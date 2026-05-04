const sfwSubreddits = ['wholesomememes', 'memes', 'me_irl']

let memeQueue = []
let memeFetching = false
let memeFetchPromise = null

function pickRandomSubreddit() {
  return sfwSubreddits[Math.floor(Math.random() * sfwSubreddits.length)]
}

function enqueueMemes(data) {
  if (!data.memes) return

  for (const meme of data.memes) {
    if (!meme.nsfw && !meme.spoiler && meme.url) {
      memeQueue.push({
        url: meme.url,
        title: meme.title,
        author: meme.author,
        ups: meme.ups
      })
    }
  }
}

export function fetchMemes() {
  if (memeFetchPromise) return memeFetchPromise

  memeFetching = true
  memeFetchPromise = (async function () {
    try {
      const sub = pickRandomSubreddit()
      const url = 'https://meme-api.com/gimme/' + sub + '/10'
      const res = await fetch(url)
      const data = await res.json()
      enqueueMemes(data)
    } catch (error) {
      console.log('Error:', error)
    } finally {
      memeFetching = false
      memeFetchPromise = null
    }
  })()

  return memeFetchPromise
}

export function getMemeImage() {
  if (memeQueue.length < 4) {
    void fetchMemes()
  }
  if (memeQueue.length > 0) {
    return memeQueue.shift()
  }
  return null
}

function createMemeCard(meme) {
  const memeBox = document.createElement('div')
  memeBox.className = 'meme'

  const pic = document.createElement('img')
  pic.src = meme.url
  pic.alt = meme.title

  const username = document.createElement('p')
  username.textContent = 'Posted by u/' + meme.author

  memeBox.append(pic, username)
  return memeBox
}

export function initMemeFeed(container = document.getElementById('memeContainer')) {
  if (!container) return () => {}

  let loading = false

  async function loadMemes() {
    if (loading) return
    loading = true

    try {
      await fetchMemes()

      let meme = getMemeImage()
      while (meme) {
        container.append(createMemeCard(meme))
        meme = getMemeImage()
      }
    } catch (error) {
      console.log('Error:', error)
    } finally {
      loading = false
    }
  }

  function checkScroll() {
    const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 500
    if (nearBottom && !loading) loadMemes()
  }

  void loadMemes()
  window.addEventListener('scroll', checkScroll)

  return function cleanup() {
    window.removeEventListener('scroll', checkScroll)
  }
}

void fetchMemes()
