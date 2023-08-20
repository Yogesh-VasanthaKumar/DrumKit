function playSound(soundID) {
    const audio = document.getElementById(soundID);
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
}
