// the div on the page where memes will go
const container = document.getElementById("memeContainer");
// flag so we don't run two fetches at the same time
let loading = false;

// only pull from these subreddits so things stay school appropriate
const safeSubs = ["wholesomememes", "memes", "me_irl"];

async function loadMemes() {
    if (loading) return;
    loading = true;

    try {
        // pick a random safe subreddit to grab memes from
        const sub = safeSubs[Math.floor(Math.random() * safeSubs.length)];
        const response = await fetch("https://meme-api.com/gimme/" + sub + "/30");
        const data = await response.json();

        for (const meme of data.memes) {
            // skip anything nsfw or marked as a spoiler just in case
            if (meme.nsfw === true) continue;
            if (meme.spoiler === true) continue;
            if (!meme.url) continue;

            const memeBox = document.createElement("div");
            memeBox.className = "meme";

            const pic = document.createElement("img");
            pic.src = meme.url;
            pic.alt = meme.title;

            const username = document.createElement("p");
            username.textContent = "Posted by u/" + meme.author;

            memeBox.append(pic, username);
            container.append(memeBox);
        }
    } catch (error) {
        console.log("Error:", error);
    }

    loading = false;
}

function checkScroll() {
    const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 500;
    if (nearBottom && !loading) loadMemes();
}

await loadMemes();
window.addEventListener("scroll", checkScroll);
