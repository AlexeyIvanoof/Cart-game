import { renderPage } from "./game-area";

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
    return renderPage
})