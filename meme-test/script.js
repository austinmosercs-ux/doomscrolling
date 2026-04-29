// script.js
// loads memes from meme-api.com and adds them to the page when you scroll down
// TODO: maybe add a loading spinner at some point

// the div on the page where the memes will go
var container = document.getElementById("memeContainer");

// flag so we dont run two fetches at the same time
let loading = false;

// only pull from these subreddits so things stay school appropriate
var safeSubs = ["wholesomememes", "memes", "me_irl"];

// how many memes to grab each time
const BATCH = 30;

// how close to the bottom we have to be before loading more (in pixels)
const SCROLL_PAD = 500;

async function loadMemes() {
    // already loading? bail out
    if (loading == true) return;
    loading = true;

    try {
        // pick a random safe subreddit to grab memes from
        var sub = safeSubs[Math.floor(Math.random() * safeSubs.length)];
        var url = "https://meme-api.com/gimme/" + sub + "/" + BATCH;
        // console.log("loading from", url);

        const response = await fetch(url);
        const data = await response.json();

        // loop through every meme they sent back
        for (let i = 0; i < data.memes.length; i++) {
            var meme = data.memes[i];

            // skip anything nsfw or marked as a spoiler just in case
            if (meme.nsfw === true) continue;
            if (meme.spoiler === true) continue;
            if (!meme.url) continue;

            // build the little card for this meme
            var memeBox = document.createElement("div");
            memeBox.className = "meme";

            var pic = document.createElement("img");
            pic.src = meme.url;
            pic.alt = meme.title;

            var username = document.createElement("p");
            username.textContent = "Posted by u/" + meme.author;

            memeBox.append(pic, username);
            container.append(memeBox);
        }
    } catch (error) {
        // if it broke just log it so i can see in the console
        console.log("Error:", error);
    }

    loading = false;
}

// runs every time the page scrolls. if we are near the bottom, load more.
function checkScroll() {
    var scrolled = window.innerHeight + window.scrollY;
    var pageHeight = document.documentElement.scrollHeight;
    var nearBottom = scrolled >= pageHeight - SCROLL_PAD;

    if (nearBottom == true && loading == false) {
        loadMemes();
    }
}

// load some memes right away so the page isnt empty
await loadMemes();

// then listen for scroll so we can keep loading more
window.addEventListener("scroll", checkScroll);
