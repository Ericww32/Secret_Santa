const music = new Audio('./Music/VintageChristmas.mp3');
const pButton = document.getElementById('pButton'); // id for pause/play button

//Play and Pause
function play() {
    // start music
    if (music.paused) {
        music.play();
        // remove play and then add pause
        pButton.classList.remove("fa fa-play-circle");
        pButton.classList.add("fa fa-pause-circle");
    } else {
        // pause music
        music.pause();
        // remove pause and then add play
        pButton.classList.remove("fa fa-pause-circle");
        pButton.classList.add("fa fa-play-circle");
    }
}
