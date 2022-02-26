const music = new Audio('./Music/You\'re A Mean One, Mr. Grinch 2003.mp3');
const pButton = document.getElementById('pButton'); // id for pause/play button

//Play and Pause
function play() {
    // start music
    if (music.paused) {
        music.play();
        // remove play and then add pause
        pButton.classList.remove("video-play-button");
        pButton.classList.add("video-pause-button");
    } else {
        // pause music
        music.pause();
        // remove pause and then add play
        pButton.classList.remove("video-pause-button");
        pButton.classList.add("video-play-button");
    }
}
