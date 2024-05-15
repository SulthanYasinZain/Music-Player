let active = false;
const audio = new Audio("sofia.weba");
audio.volume = 0.1;

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  const button = document.getElementById("button");
  const img = document.getElementById("img");
  slider.value = 0;

  button.addEventListener("click", () => {
    if (!active) {
      img.src = "pause.png";
      active = true;
      audio.play();
    } else {
      img.src = "play.png";
      active = false;
      audio.pause();
    }
  });

  audio.addEventListener("timeupdate", () => {
    const currentTime = audio.currentTime;
    slider.value = currentTime;
  });

  slider.addEventListener("input", () => {
    const seekTime = slider.value;
    audio.currentTime = seekTime;
  });
});
