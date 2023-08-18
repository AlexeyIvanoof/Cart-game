import { renderPage } from "./game-area";

export function difficultPage() {
    const  pageElement = document.getElementById("app")
    const pageDifficult = 
    `<div  class="game-cart">
    <div class="game-menu center" >
<h2 class="game-set">Выбери<br>сложность</h2>
<div class="game-difficult">
    <button class="game-difficult-numb" id="level-easy">1</button>
    <button class="game-difficult-numb" id="level-medium">2</button>
    <button class="game-difficult-numb" id="level-hard">3</button>
</div>
<button id="start-game" class="game-button">Старт</button>
    </div>
</div>`
pageElement.innerHTML = pageDifficult.Html;


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
    alert("Старт!")
    return  renderPage();
})
   
};

difficultPage();