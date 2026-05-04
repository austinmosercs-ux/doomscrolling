// random helper functions

// pick one random item from an array
export function randomPick(arr) {
  const i = Math.floor(Math.random() * arr.length)
  return arr[i]
}

// random integer between min and max (both inclusive)
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// pick "count" unique items from an array (no duplicates)
export function pickUnique(arr, count) {
  // copy the array so we don't mess with the original
  const pool = arr.slice()
  const result = []

  // can't pick more than there are
  let take = count
  if (take > pool.length) take = pool.length

  for (let i = 0; i < take; i++) {
    const idx = Math.floor(Math.random() * pool.length)
    result.push(pool[idx])
    pool.splice(idx, 1)
  }
  return result
}

// turn 12345 into "12.3k"
export function formatLikes(n) {
  if (n >= 1000) {
    return (n / 1000).toFixed(1) + 'k'
  }
  return String(n)
}

// fake usernames used for the comments
export const usernamesArr = [
  '@scrollqueen', '@notaddicttho', '@justonemore_fr', '@brainrot.exe',
  '@5moremin', '@cantputitdown', '@sendhelp_lol', '@touchgrass.never',
  '@procrastinator99', '@itsfineiswear', '@feedme.content', '@doomscroll.daily',
  '@nothingimportant', '@justchecking_', '@phonebrain2024', '@ugh.anyway'
]

// labels for how long ago a post was made
export const timeLabels = [
  'now', '1m', '2m', '4m', '7m', '12m', '23m', '38m',
  '1h', '2h', '4h', '8h', '14h', '21h',
  '1d', '2d', '3d', '5d', '1w', '2w'
]

// (kept around in case I want to use it for something else later)
export const sentencesArr = [
  'I honestly think doomscrolling is just a huge waste of time.',
  'You can start anywhere.',
  'In class, laying in bed, waiting for something, or just checking your phone for a second.',
  'Then somehow an hour is gone and you do not even know how it happened.',
  'Most of the time you do not notice it starting.',
  'It just kind of pulls you in.',
  'To me, doomscrolling is constantly looking through negative or dramatic stuff online, even when you know it is not really helping you.',
  'It is not always intentional either.',
  'Sometimes you are bored.',
  'Sometimes you are avoiding something.',
  'Sometimes it is just automatic.',
  'It feels addicting because apps are built to keep you there.',
  'TikTok, Instagram, Twitter, YouTube, they all have endless feeds.',
  'And now even apps that did not used to have that kind of layout are adding it.',
  'There is no real stopping point.',
  'The next post just loads.',
  'The next video just plays.',
  'You do not even have to press anything.',
  'On top of that, there is always that feeling like you might miss something if you stop.',
  'Even if it is not important, it feels important in the moment.',
  'That mix of endless content and curiosity makes it really easy to just keep going.',
  'For me, doomscrolling usually ends with regret.',
  'I tell myself I am just taking a quick break from homework, but that quick break turns into something way longer.',
  'At first it feels fine.',
  'Maybe even relaxing.',
  'But then it shifts.',
  'I start feeling stressed or annoyed at myself for wasting time.',
  'It goes from fun to frustrating without me really noticing when it changed.',
  'And I feel like a lot of people probably relate to that switch.',
  'It definitely messes with my productivity.',
  'Even when the content is not that interesting, I keep scrolling because maybe the next thing will be better.',
  'It completely breaks my focus.',
  'Then when I finally stop, it feels like my brain needs a minute to reset before I can actually get back into working mode.',
  'And if that keeps happening every day, it adds up.',
  'A few minutes here and there turns into hours over time.',
  'Not everyone doomscrolls the same way.',
  'Some people get pulled into dramatic or negative content faster, especially if they are already stressed.',
  'Other people can just close the app and move on.',
  'For me it kind of depends on how I am feeling that day.',
  'Sometimes I can stop easily.',
  'Other times I just keep going.',
  'So I do not think it is only about the apps.',
  'It is also about how you are feeling when you open them.',
  'It is hard to stop because everything feels personalized.',
  'The app learns what you like and keeps showing you more of it.',
  'So right when you are about to close it, something catches your attention again.',
  'It almost feels automatic after a while.',
  'There is no real ending, no final page, nothing that signals you are done.',
  'The feed just keeps going.',
  'And because of that, it always feels like there is one more thing worth seeing.',
  'Doomscrolling feels like a cycle.',
  'You start because you are bored or avoiding something.',
  'You stay because it is entertaining.',
  'You stop feeling guilty.',
  'Then the next day you do it again.',
  'It repeats, but it always feels slightly different because the posts and images change.',
  'That is what makes it tricky.',
  'It feels new every time, but it is really the same behavior over and over again.'
]

// a bunch of fake comments to randomly drop on posts
export const randomCommentsArr = [
  'no way this is real lmaooo',
  'bro think he him 💀',
  'this is the content i signed up for',
  'why is this so accurate though',
  'im literally crying rn',
  'someone come get their mans',
  'i showed this to my mom and she blocked me',
  'this lives in my head rent free',
  'not me watching this for the 5th time',
  'the way i just spit out my coffee',
  'tag someone who needs to see this',
  'i feel personally attacked',
  'this has no business being this funny',
  'POV: you found the best post on the internet',
  'why does nobody talk about this',
  'ok but like actually though',
  'i cant unsee this now thanks',
  'this is criminally underrated',
  'adding this to my collection',
  'its giving main character energy',
  'the algorithm really said here you go',
  'i was today years old when i found out',
  'somebody explain this to me like im five',
  'bruh moment of the century',
  'this is peak internet right here',
  'how did i end up on this side of the feed',
  'im supposed to be sleeping rn',
  'one more post then im done i swear',
  'this hit different at 3am',
  'the fact that this exists is wild',
  'im not even gonna ask how you found this',
  'real ones know',
  'who gave you permission to post this',
  'this is so unhinged i love it',
  'putting my phone down after this... jk no im not',
  'the internet remains undefeated',
  'screenshotted and sent to the group chat',
  'this is my roman empire',
  'tell me why i just watched this 8 times',
  'honestly same',
  'touch grass immediately',
  'go outside challenge: impossible for you',
  'your screen time report is crying rn',
  'tell me you have no hobbies without telling me',
  'this is why nobody texts you back',
  'bro has never seen sunlight',
  'least chronically online person',
  'you posted this and thought it was a W?',
  'ratio + you fell off + go outside',
  'imagine having this much free time',
  'this is what zero social interaction does to someone',
  'log off. take a walk. drink water.',
  'your phone called. it wants a break from you.',
  'seek help immediately',
  'this aint the flex you think it is',
  'nobody asked but ok',
  'you really sat down and typed this huh',
  'the wifi password is go outside',
  'your ancestors didnt survive for this',
  'congrats this is the worst take ive seen today'
]

