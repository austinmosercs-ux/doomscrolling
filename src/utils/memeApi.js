// grabs memes from the meme-api.com Reddit wrapper
// and stores them in a queue so the feed can pull from it.

const sfwSubreddits = ['wholesomememes', 'memes', 'me_irl']

// queue of memes ready to be shown
let memeQueue = []
// flag so we don't fetch a million times in a row
let memeFetching = false

// fetch a batch of memes from a random subreddit
export function fetchMemes() {
  if (memeFetching) return
  memeFetching = true

  // pick a random subreddit
  const sub = sfwSubreddits[Math.floor(Math.random() * sfwSubreddits.length)]
  const url = 'https://meme-api.com/gimme/' + sub + '/10'

  fetch(url)
    .then(function (res) {
      return res.json()
    })
    .then(function (data) {
      if (data.memes) {
        // add each safe meme to the queue
        for (let i = 0; i < data.memes.length; i++) {
          const m = data.memes[i]
          if (!m.nsfw && !m.spoiler && m.url) {
            memeQueue.push({
              url: m.url,
              title: m.title,
              author: m.author,
              ups: m.ups
            })
          }
        }
      }
      memeFetching = false
    })
    .catch(function () {
      // if it failed, just unset the flag so we can try again later
      memeFetching = false
    })
}

// grab the next meme from the queue.
// also kicks off a new fetch if we're getting low.
export function getMemeImage() {
  if (memeQueue.length < 4) {
    fetchMemes()
  }
  if (memeQueue.length > 0) {
    return memeQueue.shift()
  }
  return null
}

// fetch some memes when the file first loads so the queue isn't empty
fetchMemes()
