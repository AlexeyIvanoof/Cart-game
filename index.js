//import { renderEasyCard } from "./levels"; 
//import { renderMediumCard } from "./levels";
//import { renderHardCard } from "./levels";




 // Легкий уровень игры
 function renderEasyCard() {
    const cardElement = document.getElementById("area");
    const cardHtml = `
    <div id="cart-area" class="game-cart-area">
    <div class="game-header">
  <div class="game-timer">
    <div class="time-set">
       <h4 class="timer-definition">min</h4>
       <h4 class="timer-definition">sek</h4>
    </div>
    <h1 class="timer">00.00</h1>
  </div>
  <div  id="game-button" class="game-button">Начать заново</div>
    </div>
    <div class="game-area">
  
    <div class="card" data-framework="туз пики">
       <img class="front-face" src="img/туз пики.jpg" alt="Card">
       <img class="back-face"  src="img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="img/туз пики.jpg" alt="Card">
    </div>
  
    <div class="card"  data-framework="10 черви">
       <img class="front-face" src="img/10 черви.jpg" alt="Card">
       <img class="back-face"  src="img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="img/10 черви.jpg" alt="Card">
    </div>
  
   <div class="card"  data-framework="дама бубны">
      <img class="front-face" src="img/дама бубны.jpg" alt="Card">
      <img class="back-face"  src="img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="img/дама бубны.jpg" alt="Card">
   </div>
  
   <div class="card"  data-framework="туз пики">
      <img class="front-face" src="img/туз пики.jpg" alt="Card">
      <img class="back-face"  src="img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="img/туз пики.jpg" alt="Card">
    </div>
  
   <div class="card"  data-framework="дама бубны">
       <img class="front-face" src="img/дама бубны.jpg" alt="Card">
       <img class="back-face"  src="img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="img/дама бубны.jpg" alt="Card">
   </div>
  
   <div class="card"  data-framework="10 черви">
      <img class="front-face" src="img/10 черви.jpg" alt="Card">
      <img class="back-face"  src="img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="img/10 черви.jpg" alt="Card">
   </div>
    </div>
    `;
    cardElement.innerHTML = cardHtml;
  
    
    setTimeout(function(){
    let elems = document.querySelectorAll(".demo-face");
  for(let i=0; i<elems.length; i++)elems[i].style.display='none';
      }, 5000 );
  
    const cards = document.querySelectorAll('.card');
  
  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;
  
  function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  
  this.classList.add('flip');
  
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  
  secondCard = this;
  lockBoard = true;
  
  checkForMatch();
  }
  
  function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      disableCards();
      console.log('Карты совпали!')
      return;
      
    }
  
    unflipCards();
  }
  
  function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  
  resetBoard();
  }
  
  function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    console.log('Нет совпадения!')
    resetBoard();
  }, 1500);
  }
  
  function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
  }
  
  (function shuffle() {
  cards.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * 6);
    card.style.order = ramdomPos;
  });
  })();
  
  cards.forEach(card => card.addEventListener('click', flipCard));

  const buttonGame = document.getElementById("game-button");
buttonGame.addEventListener("click", () => {
    renderEasyCard();
})
  }
  
  
  //Средний уровень игры
  function renderMediumCard() {
    const cardElement = document.getElementById("area");
    const cardHtml = `
    <div id="cart-area" class="game-cart-area">
    <div class="game-header">
  <div class="game-timer">
    <div class="time-set">
       <h4 class="timer-definition">min</h4>
       <h4 class="timer-definition">sek</h4>
    </div>
    <h1 class="timer">00.00</h1>
  </div>
  <div id="game-button" class="game-button">Начать заново</div>
    </div>
    <div class="game-area">
  
    <div class="card" data-framework="туз пики">
       <img class="front-face" src="img/туз пики.jpg" alt="Card">
       <img class="back-face"  src="img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="img/туз пики.jpg" alt="Card">
    </div>
  
    <div class="card"  data-framework="10 черви">
       <img class="front-face" src="img/10 черви.jpg" alt="Card">
       <img class="back-face"  src="img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="img/10 черви.jpg" alt="Card">
    </div>
  
   <div class="card"  data-framework="дама бубны">
      <img class="front-face" src="img/дама бубны.jpg" alt="Card">
      <img class="back-face"  src="img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="img/дама бубны.jpg" alt="Card">
   </div>
  
   <div class="card"  data-framework="туз пики">
      <img class="front-face" src="img/туз пики.jpg" alt="Card">
      <img class="back-face"  src="img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="img/туз пики.jpg" alt="Card">
    </div>
  
   <div class="card"  data-framework="дама бубны">
       <img class="front-face" src="img/дама бубны.jpg" alt="Card">
       <img class="back-face"  src="img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="img/дама бубны.jpg" alt="Card">
   </div>
  
   <div class="card"  data-framework="10 черви">
      <img class="front-face" src="img/10 черви.jpg" alt="Card">
      <img class="back-face"  src="img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="img/10 черви.jpg" alt="Card">
   </div>
  
   <div class="card" data-framework="дама черви">
       <img class="front-face" src="img/дама черви.jpg" alt="Card">
       <img class="back-face"  src="img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="img/дама черви.jpg" alt="Card">
    </div>
  
    <div class="card"  data-framework="дама черви">
       <img class="front-face" src="img/дама черви.jpg" alt="Card">
       <img class="back-face"  src="img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="img/дама черви.jpg" alt="Card">
    </div>
  
   <div class="card"  data-framework="король крести">
      <img class="front-face" src="img/король крести.jpg" alt="Card">
      <img class="back-face"  src="img/рубашка.jpg" alt="Card">
      <img class="demo-face"src="img/король крести.jpg" alt="Card">
   </div>
  
   <div class="card"  data-framework="король крести">
      <img class="front-face" src="img/король крести.jpg" alt="Card">
      <img class="back-face"  src="img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="img/король крести.jpg" alt="Card">
    </div>
  
   <div class="card"  data-framework="7 крести">
       <img class="front-face" src="img/7 крести.jpg" alt="Card">
       <img class="back-face"  src="img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="img/7 крести.jpg" alt="Card">
   </div>
  
   <div class="card"  data-framework="7 крести">
      <img class="front-face" src="img/7 крести.jpg" alt="Card">
      <img class="back-face"  src="img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="img/7 крести.jpg" alt="Card">
   </div>
    </div>
    `;
    cardElement.innerHTML = cardHtml;
  
    
    setTimeout(function(){
    let elems = document.querySelectorAll(".demo-face");
  for(let i=0; i<elems.length; i++)elems[i].style.display='none';
      }, 5000 );
  
    const cards = document.querySelectorAll('.card');
  
  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;
  
  function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  
  this.classList.add('flip');
  
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  
  secondCard = this;
  lockBoard = true;
  
  checkForMatch();
  }
  
  function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      disableCards();
      console.log('Карты совпали!')
      return;
      
    }
  
    unflipCards();
  }
  
  function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  
  resetBoard();
  }
  
  function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    console.log('Нет совпадения!')
    resetBoard();
  }, 1500);
  }
  
  function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
  }
  
  (function shuffle() {
  cards.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * 12);
    card.style.order = ramdomPos;
  });
  })();
  
  cards.forEach(card => card.addEventListener('click', flipCard));

  const buttonGame = document.getElementById("game-button");
  buttonGame.addEventListener("click", () => {
      renderMediumCard();
  })

  }
  
  //Тяжелый уровень игры
  function renderHardCard() {
    const cardElement = document.getElementById("area");
    const cardHtml = `
    <div id="cart-area" class="game-cart-area">
    <div class="game-header">
  <div class="game-timer">
    <div class="time-set">
       <h4 class="timer-definition">min</h4>
       <h4 class="timer-definition">sek</h4>
    </div>
    <h1 class="timer">00.00</h1>
  </div>
  <div id="game-button" class="game-button">Начать заново</div>
    </div>
    <div class="game-area">
  
    <div class="card" data-framework="туз пики">
       <img class="front-face" src="img/туз пики.jpg" alt="Card">
       <img class="back-face"  src="img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="img/туз пики.jpg" alt="Card">
    </div>
  
    <div class="card"  data-framework="10 черви">
       <img class="front-face" src="img/10 черви.jpg" alt="Card">
       <img class="back-face"  src="img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="img/10 черви.jpg" alt="Card">
    </div>
  
   <div class="card"  data-framework="дама бубны">
      <img class="front-face" src="img/дама бубны.jpg" alt="Card">
      <img class="back-face"  src="img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="img/дама бубны.jpg" alt="Card">
   </div>
  
   <div class="card"  data-framework="туз пики">
      <img class="front-face" src="img/туз пики.jpg" alt="Card">
      <img class="back-face"  src="img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="img/туз пики.jpg" alt="Card">
    </div>
  
   <div class="card"  data-framework="дама бубны">
       <img class="front-face" src="img/дама бубны.jpg" alt="Card">
       <img class="back-face"  src="img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="img/дама бубны.jpg" alt="Card">
   </div>
  
   <div class="card"  data-framework="10 черви">
      <img class="front-face" src="img/10 черви.jpg" alt="Card">
      <img class="back-face"  src="img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="img/10 черви.jpg" alt="Card">
   </div>
  
   <div class="card" data-framework="дама черви">
       <img class="front-face" src="img/дама черви.jpg" alt="Card">
       <img class="back-face"  src="img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="img/дама черви.jpg" alt="Card">
    </div>
  
    <div class="card"  data-framework="дама черви">
       <img class="front-face" src="img/дама черви.jpg" alt="Card">
       <img class="back-face"  src="img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="img/дама черви.jpg" alt="Card">
    </div>
  
   <div class="card"  data-framework="король крести">
      <img class="front-face" src="img/король крести.jpg" alt="Card">
      <img class="back-face"  src="img/рубашка.jpg" alt="Card">
      <img class="demo-face"src="img/король крести.jpg" alt="Card">
   </div>
  
   <div class="card"  data-framework="король крести">
      <img class="front-face" src="img/король крести.jpg" alt="Card">
      <img class="back-face"  src="img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="img/король крести.jpg" alt="Card">
    </div>
  
   <div class="card"  data-framework="7 крести">
       <img class="front-face" src="img/7 крести.jpg" alt="Card">
       <img class="back-face"  src="img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="img/7 крести.jpg" alt="Card">
   </div>
  
   <div class="card"  data-framework="7 крести">
      <img class="front-face" src="img/7 крести.jpg" alt="Card">
      <img class="back-face"  src="img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="img/7 крести.jpg" alt="Card">
   </div>
  
   <div class="card" data-framework="8 пики">
       <img class="front-face" src="img/8 пики.jpg" alt="Card">
       <img class="back-face"  src="img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="img/8 пики.jpg" alt="Card">
    </div>
  
    <div class="card"  data-framework="8 пики">
       <img class="front-face" src="img/8 пики.jpg" alt="Card">
       <img class="back-face"  src="img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="img/8 пики.jpg" alt="Card">
    </div>
  
   <div class="card"  data-framework="валет черви">
      <img class="front-face" src="img/валет черви.jpg" alt="Card">
      <img class="back-face"  src="img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="img/валет черви.jpg" alt="Card">
   </div>
  
   <div class="card"  data-framework="валет черви">
      <img class="front-face" src="img/валет черви.jpg" alt="Card">
      <img class="back-face"  src="img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="img/валет черви.jpg" alt="Card">
    </div>
  
   <div class="card"  data-framework="туз бубны">
       <img class="front-face" src="img/туз бубны.jpg" alt="Card">
       <img class="back-face"  src="img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="img/туз бубны.jpg" alt="Card">
   </div>
  
   <div class="card"  data-framework="туз бубны">
      <img class="front-face" src="img/туз бубны.jpg" alt="Card">
      <img class="back-face"  src="img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="img/туз бубны.jpg" alt="Card">
   </div>
  
    </div>
    `;
    cardElement.innerHTML = cardHtml;
  
    
    setTimeout(function(){
    let elems = document.querySelectorAll(".demo-face");
  for(let i=0; i<elems.length; i++)elems[i].style.display='none';
      }, 5000 );
  
    const cards = document.querySelectorAll('.card');
  
  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;
  
  function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  
  this.classList.add('flip');
  
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  
  secondCard = this;
  lockBoard = true;
  
  checkForMatch();
  }
  
  function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      disableCards();
      console.log('Карты совпали!')
      return;
      
    }
  
    unflipCards();
  }
  
  function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  
  resetBoard();
  }
  
  function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    console.log('Нет совпадения!')
    resetBoard();
  }, 1500);
  }
  
  function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
  }
  
  (function shuffle() {
  cards.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * 18);
    card.style.order = ramdomPos;
  });
  })();
  
  cards.forEach(card => card.addEventListener('click', flipCard));

  const buttonGame = document.getElementById("game-button");
  buttonGame.addEventListener("click", () => {
      renderHardCard();
  })

  }





    function difficultPage() {
    const  pageElement = document.getElementById("app")
    const pageDifficultHtml = 
    ` <div id = "game-cart" class="game-cart">
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
   </div>`
pageElement.innerHTML = pageDifficultHtml;


const form = document.querySelector('form');
const pageDifficult = document.getElementById("game-cart");


form.addEventListener('submit', (event)=>{
event.preventDefault();
console.log("submit");

const levelDifficult = document.querySelector('input[name = "level"]:checked');

if(levelDifficult){
    const difficulty = levelDifficult.value; 

if(difficulty === '1'){
console.log("Первый уровень сложности 6 карт")
pageDifficult.style.display = 'none';
renderEasyCard();
}
else if(difficulty === '2'){
    console.log("Второй уровень сложности 12 карт")
    pageDifficult.style.display = 'none';
    renderMediumCard();
}
else if(difficulty === '3'){
    console.log("Третий уровень сложности 18 карт")
    pageDifficult.style.display = 'none';
    renderHardCard();
}

}else{
    alert("Выбирите уровень сложности")
}
 
})

   
};

difficultPage();
