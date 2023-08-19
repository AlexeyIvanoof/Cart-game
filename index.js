//import { renderPage } from "./game-area";

export function difficultPage() {
    const  pageElement = document.getElementById("app")
    const pageDifficultHtml = 
    ` <form class="game-cart" name="test"  action="game-area.html">
    <div class="game-menu center" >
       <h2 class="game-set">Выбери<br>сложность</h2>
       <div class="game-difficult">
          <label class="game-difficult-numb"><input class="point" id="level-easy"   type="radio" name="level" value="1"><span>1</span></label>
          <label class="game-difficult-numb"><input class="point" id="level-medium" type="radio" name="level" value="2"><span>2</span></label>
          <label class="game-difficult-numb"><input class="point" id="level-hard"   type="radio" name="level" value="3"><span>3</span></label>
        </div>
         <p>
            <input type="submit" id="start-game" class="game-button" value="Старт">
         </p>
      </div>   
   </form>`
pageElement.innerHTML = pageDifficultHtml;


const easyGame = document.getElementById("level-easy");
const mediumGame = document.getElementById("level-medium");
const hardGame = document.getElementById("level-hard");
const startGame = document.getElementById("start-game");

easyGame.addEventListener("click", () => {
    alert ("Вы выбрали Легкий уровень игры, нажмите Старт для продолжения ")
})

mediumGame.addEventListener("click", () => {
    alert ("Вы выбрали Средний уровень игры, нажмите Старт для продолжения ")
})

hardGame.addEventListener("click", () => {
    alert ("Вы выбрали Тяжелый уровень игры, нажмите Старт для продолжения ")
})

startGame.addEventListener("click", () => {
    alert("Удачи!")
    //return  renderPage();
})
   
};

difficultPage();