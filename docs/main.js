var timerId;

function startTimer(duration) {
  var start = Date.now(),
    diff,
    minutes,
    seconds;
  var duration = document.querySelector("#minutes").value * 60;

  function timer() {
    diff = duration - (((Date.now() - start) / 1000) | 0);

    minutes = (diff / 60) | 0;
    seconds = diff % 60 | 0;

    let display = `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
    document.title = display;

    if (diff <= 0) {
      clearInterval(timerId);

      display = "00:00";
      document.title = "00:00";
    }

    document.querySelector("#timer").innerHTML = display;
  }
  timer();
  timerId = setInterval(timer, 1000);
}

document.querySelector("#startButton").addEventListener("click", () => {
  startTimer();
  document.getElementById("startButton").style.display = "none";
});

document.querySelector("#stopButton").addEventListener("click", () => {
  clearInterval(timerId);
  document.querySelector("#timer").innerHTML = "00:00";
  document.title = "00:00";
  document.getElementById("startButton").style.display = "inline-block";
});
