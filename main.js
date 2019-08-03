// function timer(seconds) {
//   const now = Date.now();
//   const then = now + seconds * 1000;
//   displayTimeleft(seconds);

//   countdown = setInterval(() => {
//     const secondsLeft = Math.round((then - Date.now()) / 1000);

//     if (secondsLeft <= 0) {
//       clearInterval(countdown);
//       return;
//     }

//     displayTimeleft(secondsLeft);
//   }, 1000);
// }

// function displayTimeleft(seconds) {
//   const minutes = Math.floor(seconds / 60);
//   const remainderSeconds = seconds % 60;
//   const display = `${minutes}:${remainderSeconds}`;
//   console.log(display);

//   document.querySelector("#timer").innerHTML.value = display;
// }

// document.getElementById("timer").innerHTML = setTimer;

document.querySelector("#startButton").addEventListener("click", () => {
  const settedTime = document.querySelector("#minutes").value * 60 * 1000;
  const oldTime = Date.now();

  const timerId = setInterval(() => {
    const currentTime = Date.now();
    const diff = currentTime - oldTime;

    const remainderMSec = settedTime - diff;

    const seconds = Math.ceil((remainderMSec / 1000) % 60);

    const min = Math.floor(remainderMSec / 1000 / 60);

    let display = `${min}:${seconds < 10 ? "0" : ""}${seconds}`;

    if (remainderMSec <= 0) {
      clearInterval(timerId);

      display = "0";
    }

    document.querySelector("#timer").innerHTML = display;
  }, 1000);
});
