import { difficultPage } from ".";
import { game } from "./index";
import { getSecondsDifference } from "./timer";




  export function resultWin() {
  const resultElement = document.getElementById("app") as HTMLElement;

  const differenceInSeconds = getSecondsDifference(
    game.maxTimeInSeconds,
    game.time,
  );

  const winHtml = `<div id="win" class="box-result" center>
    <div class="game-positiveResult" center>
        <img class="win" src="static/img/celebration.png" alt="">
        <h3 class="win-text">Вы выиграли!</h3>
        <p class="elapsed-time-text">Затраченное время:</p>
        <p id="timer" class="elapsed-time">${differenceInSeconds} сек</p>
        <button  id="game-button" class="game-button">Играть снова</button>
    </div>
    </div>
    `;
  resultElement.innerHTML = winHtml;
  const pageWin = document.getElementById("win") as HTMLElement;
  const buttonGame = document.getElementById(
    "game-button",
  ) as HTMLButtonElement;

  buttonGame.addEventListener("click", () => {
    pageWin.style.display = "none";
    difficultPage();
  });
}




export function resultLose() {
  const resultElement = document.getElementById("area") as HTMLElement;
  //1   const resultElement = document.getElementById("area")!;
  //2   const resultElement: HTMLElement | null = document.getElementById("area") as HTMLElement;
  // но тогда нужно проверить переменную на null
  const differenceInSeconds = getSecondsDifference(
    game.maxTimeInSeconds,
    game.time,
  );

  const winHtml = `<div id="lose" class="box-result" center>
    <div class="game-positiveResult" center>
        <img class="win" src="static/img/Image.png" alt="">
        <h3 class="win-text">Вы проиграли!</h3>
        <p class="elapsed-time-text">Затраченное время:</p>
        <p class="elapsed-time">${differenceInSeconds} сек</p>
        <button id="game-button" class="game-button">Играть снова</button>
    </div>
</div> `;
  resultElement.innerHTML = winHtml;

  const pageLose = document.getElementById("lose") as HTMLElement;

  const buttonGame = document.getElementById(
    "game-button",
  ) as HTMLButtonElement;

  buttonGame.addEventListener("click", () => {
    pageLose.style.display = "none";
    difficultPage();
  });
}
