import { resultLose } from "./result-game";
import { setGameTime, setMaxTime } from "./index";


export function getSecondsDifference(
  firstTime: number,
  secondTime: string,
): number {
  // Split the second time string into minutes and seconds
  const [minutes, seconds] = secondTime.split(":");

  // Convert the minutes and seconds to numbers
  const secondTimeInSeconds = Number(minutes) * 60 + parseInt(seconds);

  // Calculate the difference in seconds
  const differenceInSeconds = firstTime - secondTimeInSeconds;

  return differenceInSeconds;
}



export function timeGame(time: number) {
  setMaxTime(time);
  const timerDownEl = document.getElementById("timer") as HTMLElement;
  let timer = setInterval(function () {
    const minutes = Math.floor(time / 60);
    
    let seconds: string | number = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    setGameTime(`${minutes}:${seconds}`);
    timerDownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (time < 0) {
      clearInterval(timer);
      resultLose();
    }
  }, 1000);
}




