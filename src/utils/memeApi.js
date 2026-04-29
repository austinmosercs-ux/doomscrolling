// memeApi.js
// this file gets memes from meme-api.com (its a free reddit wrapper)
// and saves them in a list so the feed can grab them later

// list of safe subreddits to pull from
// (i picked these because they are mostly sfw)
var sfwSubreddits = ['wholesomememes', 'memes', 'me_irl']

// the memes that are ready to show
let memeQueue = []

// flag so we dont fetch a million times in a row
let memeFetching = false

// how many memes to ask for at once
const BATCH_SIZE = 10

// fetch a batch of memes from a random subreddit
export function fetchMemes() {
  // already fetching? just bail out
  if (memeFetching === true) {
    return
  }
  memeFetching = true

  // pick a random subreddit from the list
  var sub = sfwSubreddits[Math.floor(Math.random() * sfwSubreddits.length)]
  var url = "https://meme-api.com/gimme/" + sub + "/" + BATCH_SIZE
  // console.log("fetching from", url)

  fetch(url)
    .then(function (res) {
      return res.json()
    })
    .then(function (data) {
      if (data && data.memes) {
        // loop through every meme they sent back
        for (let i = 0; i < data.memes.length; i++) {
          var m = data.memes[i]
          // skip nsfw and spoiler ones just in case
          if (m.nsfw === true) continue
          if (m.spoiler === true) continue
          if (!m.url) continue

          memeQueue.push({
            url: m.url,
            title: m.title,
            author: m.author,
            ups: m.ups
          })
        }
      }
      memeFetching = false
    })
    .catch(function (err) {
      // if it broke just turn off the flag so we can try again later
      // console.log("meme fetch failed", err)
      memeFetching = false
    })
}

// grab the next meme from the queue.
// also kicks off a new fetch if we are running low.
export function getMemeImage() {
  // if we are getting low, go grab more
  if (memeQueue.length < 4) {
    fetchMemes()
  }

  if (memeQueue.length > 0) {
    return memeQueue.shift()
  }
  // queue is empty, nothing to give back
  return null
}

// fetch some memes when this file first loads so the queue is not empty
fetchMemes()
