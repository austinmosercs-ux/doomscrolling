// the div on the page where memes will go
const container = document.getElementById("memeContainer");
// flag so we don't run two fetches at the same time
let loading = false;

async function loadMemes() {
    if (loading) return;
    loading = true;

    try {
        const response = await fetch("https://meme-api.com/gimme/30");
        const data = await response.json();

        for (const meme of data.memes) {
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
        console.log("Something went wrong:", error);
    }

    loading = false;
}

function checkScroll() {
    const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 500;
    if (nearBottom && !loading) loadMemes();
}

await loadMemes();
window.addEventListener("scroll", checkScroll);
