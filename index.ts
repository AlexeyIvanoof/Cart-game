import { renderEasyCard } from "./levels";
import { renderMediumCard } from "./levels";
import { renderHardCard } from "./levels";
import "./style.css"


type Game = {
  time: string;
  maxTimeInSeconds: number;
};

/* TODO */
export const game: Game = {
  time: "00:00",
  maxTimeInSeconds: 0,
};

/* TODO */
export function setGameTime(newTime: string): void {
  game.time = newTime;
}
/* TODO */
export function setMaxTime(maxTime: number): void {
  game.maxTimeInSeconds = maxTime;
}



export function difficultPage() {
  const pageElement = document.getElementById("app") as HTMLElement;
  const pageDifficultHtml = ` <div id = "game-cart" class="game-cart">
    <div class="game-menu center" >
       <h2 class="game-set">Выбери<br>сложность</h2>
       <div class="game-difficult">
          <label class="game-difficult-numb"><input class="point" id="level-easy"   type="radio" name="level" value="1" checked><span>1</span></label>
          <label class="game-difficult-numb"><input class="point" id="level-medium" type="radio" name="level" value="2"><span>2</span></label>
          <label class="game-difficult-numb"><input class="point" id="level-hard"   type="radio" name="level" value="3"><span>3</span></label>
        </div>
         <form>
            <button id="start-game" class="game-button">Старт</button>
         </form>
      </div>   
   </div>`;
  pageElement.innerHTML = pageDifficultHtml;

  const form = document.querySelector("form") as HTMLElement;
  const pageDifficult = document.getElementById("game-cart") as HTMLElement;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submit");

    const levelDifficult = document.querySelector(
      'input[name = "level"]:checked',
    ) as HTMLInputElement;

    if (levelDifficult) {
      const difficulty = levelDifficult.value;

      if (difficulty === "1") {
        console.log("Первый уровень сложности 6 карт");
        pageDifficult.style.display = "none";
        renderEasyCard();
      } else if (difficulty === "2") {
        console.log("Второй уровень сложности 12 карт");
        pageDifficult.style.display = "none";
        renderMediumCard();
      } else if (difficulty === "3") {
        console.log("Третий уровень сложности 18 карт");
        pageDifficult.style.display = "none";
        renderHardCard();
      }
    } else {
      alert("Выбирите уровень сложности");
    }
  });
}

difficultPage();
