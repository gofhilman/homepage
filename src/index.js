import introTyping from "./modules/intro-typing";
import "./styles.css";

const typing = document.querySelector("#typing");
const cursor = document.querySelector("#cursor");

setInterval(() => {
  introTyping.type();
  typing.textContent = introTyping.typedString;
  cursor.textContent = introTyping.cursor;
}, 100);

// Load YouTube IFrame API
const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

const players = [];
const videoData = [
  { id: "cvgen", videoId: "xHkCBpyH3W8" },
  { id: "battleship", videoId: "Lc8rXUNvyvE" },
  { id: "weather-app", videoId: "gdUczWykRzM" },
  { id: "todo-list", videoId: "vFe7MQMd6aE" },
];

window.onYouTubeIframeAPIReady = () => {
  console.log("YouTube API is ready!");
  videoData.forEach((data, index) => {
    // eslint-disable-next-line no-undef
    players[index] = new YT.Player(data.id, {
      height: "100%",
      width: "100%",
      videoId: data.videoId,
      playerVars: {
        autoplay: 0,
        mute: 1,
        loop: 1,
        playlist: data.videoId,
      },
    });
  });
};

// Scroll detection
window.addEventListener("scroll", () => {
  videoData.forEach((data, index) => {
    const el = document.getElementById(data.id);
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    const player = players[index];

    if (isVisible && player?.playVideo) {
      player.playVideo();
    } else if (player?.pauseVideo) {
      player.pauseVideo();
    }
  });
});
