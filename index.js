export function difficultPage() {
    const  pageElement = document.getElementById("app")
    const pageDifficultHtml = 
    ` <form class="game-cart" name="test"  action="game-area.html">
    <div class="game-menu center" >
       <h2 class="game-set">Выбери<br>сложность</h2>
       <div class="game-difficult">
          <label class="game-difficult-numb"><input class="point" id="level-easy"   type="radio" name="level" value="1" checked><span>1</span></label>
          <label class="game-difficult-numb"><input class="point" id="level-medium" type="radio" name="level" value="2"><span>2</span></label>
          <label class="game-difficult-numb"><input class="point" id="level-hard"   type="radio" name="level" value="3"><span>3</span></label>
        </div>
         <div>
            <button id="start-game" class="game-button">Старт</button>
         </div>
      </div>   
   </form>`
pageElement.innerHTML = pageDifficultHtml;


//const easyGame = document.getElementById("level-easy");
//const mediumGame = document.getElementById("level-medium");
//const hardGame = document.getElementById("level-hard");
const startGame = document.getElementById("start-game");
//const form = document.querySelector('.form')



/*/ //первый вариант

easyGame.addEventListener("click", () => {
    alert ("Вы выбрали Легкий уровень игры, нажмите Старт для продолжения ")
})

mediumGame.addEventListener("click", () => {
    alert ("Вы выбрали Средний уровень игры, нажмите Старт для продолжения ")
})

hardGame.addEventListener("click", () => {
    alert ("Вы выбрали Тяжелый уровень игры, нажмите Старт для продолжения ")
})/*/
 


// второй вариант

startGame.addEventListener("click", () => {

const levelDifficult = document.querySelector('input[name = "level"]:checked');
const difficulty = levelDifficult.value;   

if(difficulty === '1'){
console.log("Первый уровень сложности 6 карт")
}
else if(difficulty === '2'){
    console.log("Второй уровень сложности 12 карт")
}
else if(difficulty === '3'){
    console.log("Третий уровень сложности 18 карт")
}
else{
    alert("Выбирите уровень сложности")
}

    
})
   
};

difficultPage();