const body = document.querySelector("body");

addEventListener("click", startOrStopSound);

function startOrStopSound(){
    const controlPlay = document.querySelector("#audioPlayer");

    if(controlPlay.paused) controlPlay.play();
    else controlPlay.pause();
}