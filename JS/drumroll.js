// Music to be used
const drumroll = new Audio('./assets/music/Drum_Roll.mp3');
const winner = new Audio('./assets/music/You_Win.mp3');

//Play and Pause
function playDrumroll() {
    document.getElementById("curtain-L").style.transform = "translateX(0)";
    document.getElementById("curtain-R").style.transform = "translateX(0)";
    // start music
    if (drumroll.paused) {
        drumroll.play();
    } else {
        // pause music
        drumroll.pause();
    }
}

function playWinner() {
    document.getElementById("curtain-L").style.transform = "translateX(-100%)";
    document.getElementById("curtain-R").style.transform = "translateX(100%)";

    // start music
    if (winner.paused) {
        winner.play();
    } else {
        // pause music
        winner.pause();
    }
}