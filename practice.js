const videoContainer = document.getElementById("jsVideoPlayer");
const playBtn = document.getElementById("jsPlayButton");
const videoPlayer = document.querySelector("#jsVideoPlayer video");

const handlePlayClick () {
    if (videoPlayer.paused) {
        videoPlayer.play()
        playBtn.innerHTML = ``;
    } else {
        videoPlayer.pause();
    }
}

const init(){
    playBtn.addEventListener("click", handlePlayClick)
}
if (videoContainer){
    init()
}