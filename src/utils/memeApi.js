const sfwSubreddits = ['wholesomememes', 'memes', 'me_irl']

let memeQueue = []
let memeFetching = false

export function fetchMemes() {
  if (memeFetching) return
  memeFetching = true

  const sub = sfwSubreddits[Math.floor(Math.random() * sfwSubreddits.length)]
  const url = 'https://meme-api.com/gimme/' + sub + '/10'

  fetch(url)
    .then(function (res) {
      return res.json()
    })
    .then(function (data) {
      if (data.memes) {
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
      memeFetching = false
    })
}

export function getMemeImage() {
  if (memeQueue.length < 4) {
    fetchMemes()
  }
  if (memeQueue.length > 0) {
    return memeQueue.shift()
  }
  return null
}

fetchMemes()
