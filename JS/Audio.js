var music = document.getElementById('music'); // id for audio element
var pButton = document.getElementById('pButton'); // play button

//Play and Pause
function play() {
    // start music
    if (music.paused) {
        music.play();
        // remove play, add pause
        pButton.className = "";
        pButton.className = "fa fa-pause-circle";
    } else {
        // pause music
        music.pause();
        // remove pause, add play
        pButton.className = "";
        pButton.className = "fa fa-play-circle";
    }
}
