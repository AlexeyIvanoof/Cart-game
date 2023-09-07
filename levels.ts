import { resultWin } from "./result-game";
import {timeGame} from "./timer";


// Легкий уровень игры
export function renderEasyCard() {
  /* TODO */
  const cardElement = document.getElementById("area") as HTMLElement;
  const cardHtml = `<div id="cart-area" class="game-cart-area">
  <div class="game-header">
  <div class="game-timer">
    <div class="time-set">
       <h4 class="timer-definition">min</h4>
       <h4 class="timer-definition">sek</h4>
    </div>
    <p id="timer" class="timer">0.00</p>
  </div>
  <p id ="text-timer" class="text-timer">Запомни карты!<p/>
  <div  id="game-button" class="game-button">Начать заново</div>
    </div>
    <div class="game-area">
  
    <div class="card" data-framework="туз пики">
       <img class="front-face" src="./static/img/туз пики.jpg" alt="Card">
       <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="./static/img/туз пики.jpg" alt="Card">
    </div>
  
    <div class="card"  data-framework="10 черви">
       <img class="front-face" src="./static/img/10 черви.jpg" alt="Card">
       <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="./static/img/10 черви.jpg" alt="Card">
    </div>
  
   <div class="card"  data-framework="дама бубны">
      <img class="front-face" src="./static/img/дама бубны.jpg" alt="Card">
      <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="./static/img/дама бубны.jpg" alt="Card">
   </div>
  
   <div class="card"  data-framework="туз пики">
      <img class="front-face" src="./static/img/туз пики.jpg" alt="Card">
      <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="./static/img/туз пики.jpg" alt="Card">
    </div>
  
   <div class="card"  data-framework="дама бубны">
       <img class="front-face" src="./static/img/дама бубны.jpg" alt="Card">
       <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="./static/img/дама бубны.jpg" alt="Card">
   </div>
  
   <div class="card"  data-framework="10 черви">
      <img class="front-face" src="./static/img/10 черви.jpg" alt="Card">
      <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="./static/img/10 черви.jpg" alt="Card">
   </div>
    </div>
    `;

  cardElement.innerHTML = cardHtml;

  setTimeout(function () {
    const rule =  document.getElementById("text-timer") as HTMLElement;
    const elems = document.querySelectorAll(
      ".demo-face",
    ) as NodeListOf<HTMLImageElement>;
    for (let i = 0; i < elems.length; i++) elems[i].style.display = "none";
    rule.style.display = "none";
  }, 3000);

  /* TODO */
  const cards: NodeListOf<HTMLElement> = document.querySelectorAll(".card");

  let hasFlippedCard = false;
  let lockBoard = false;
  /* TODO */
  let firstCard: HTMLElement;
  /* TODO */
  let secondCard: HTMLElement;

  /* TODO */
  function flipCard(this: HTMLElement) {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      firstCard = this;
      return;
    }

    //вы выйграли!
    const element = document.querySelectorAll(".card.flip");
    element.length;
    const arr = element.length;
    if (arr === 6) {
      resultWin();
      cardElement.style.display = "none";
    }

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    secondCard = this;
    lockBoard = true;

    checkForMatch();
  }

  function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      disableCards();
      console.log("Карты совпали!");
      return;
    }

    unflipCards();
  }

  function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
  }

  function unflipCards() {
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      console.log("Нет совпадения!");
      resetBoard();
    }, 1500);
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    
  }

  (function shuffle() {
    cards.forEach((card: HTMLElement) => {
      const ramdomPos = Math.floor(Math.random() * 6);
      /* TODO */
      // card.style.order = ramdomPos.toString();
      card.style.order = String(ramdomPos);
    });
  })();

  cards.forEach((card) => card.addEventListener("click", flipCard));

  /* TODO */
  const buttonGame = document.getElementById(
    "game-button",
  ) as HTMLButtonElement;
  buttonGame.addEventListener("click", () => {
    renderEasyCard();
  });

  timeGame(30);
  
}

//Средний уровень игры
export function renderMediumCard() {
  const cardElement = document.getElementById("area") as HTMLElement;
  const cardHtml = `
    <div id="cart-area" class="game-cart-area">
    <div class="game-header">
  <div class="game-timer">
    <div class="time-set">
       <h4 class="timer-definition">min</h4>
       <h4 class="timer-definition">sek</h4>
    </div>
    <p id="timer" class="timer">0.00</p>
  </div>
  <p id ="text-timer" class="text-timer">Запомни карты!<p/>
  <div id="game-button" class="game-button">Начать заново</div>
    </div>
    <div class="game-area">
  
    <div class="card" data-framework="туз пики">
       <img class="front-face" src="./static/img/туз пики.jpg" alt="Card">
       <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="./static/img/туз пики.jpg" alt="Card">
    </div>
  
    <div class="card"  data-framework="10 черви">
       <img class="front-face" src="./static/img/10 черви.jpg" alt="Card">
       <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="./static/img/10 черви.jpg" alt="Card">
    </div>
  
   <div class="card"  data-framework="дама бубны">
      <img class="front-face" src="./static/img/дама бубны.jpg" alt="Card">
      <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="./static/img/дама бубны.jpg" alt="Card">
   </div>
  
   <div class="card"  data-framework="туз пики">
      <img class="front-face" src="./static/img/туз пики.jpg" alt="Card">
      <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="./static/img/туз пики.jpg" alt="Card">
    </div>
  
   <div class="card"  data-framework="дама бубны">
       <img class="front-face" src="./static/img/дама бубны.jpg" alt="Card">
       <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="./static/img/дама бубны.jpg" alt="Card">
   </div>
  
   <div class="card"  data-framework="10 черви">
      <img class="front-face" src="./static/img/10 черви.jpg" alt="Card">
      <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="./static/img/10 черви.jpg" alt="Card">
   </div>
  
   <div class="card" data-framework="дама черви">
       <img class="front-face" src="./static/img/дама черви.jpg" alt="Card">
       <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="./static/img/дама черви.jpg" alt="Card">
    </div>
  
    <div class="card"  data-framework="дама черви">
       <img class="front-face" src="./static/img/дама черви.jpg" alt="Card">
       <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="./static/img/дама черви.jpg" alt="Card">
    </div>
  
   <div class="card"  data-framework="король крести">
      <img class="front-face" src="./static/img/король крести.jpg" alt="Card">
      <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
      <img class="demo-face"src="./static/img/король крести.jpg" alt="Card">
   </div>
  
   <div class="card"  data-framework="король крести">
      <img class="front-face" src="./static/img/король крести.jpg" alt="Card">
      <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="./static/img/король крести.jpg" alt="Card">
    </div>
  
   <div class="card"  data-framework="7 крести">
       <img class="front-face" src="./static/img/7 крести.jpg" alt="Card">
       <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="./static/img/7 крести.jpg" alt="Card">
   </div>
  
   <div class="card"  data-framework="7 крести">
      <img class="front-face" src="./static/img/7 крести.jpg" alt="Card">
      <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="./static/img/7 крести.jpg" alt="Card">
   </div>
   
    </div>
    `;
  cardElement.innerHTML = cardHtml;

  setTimeout(function () {
    const rule =  document.getElementById("text-timer") as HTMLElement;
    const elems = document.querySelectorAll(
      ".demo-face",
    ) as NodeListOf<HTMLImageElement>;
    for (let i = 0; i < elems.length; i++) elems[i].style.display = "none";
    rule.style.display = "none";
  }, 5000);

  const cards: NodeListOf<HTMLElement> = document.querySelectorAll(".card");

  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard: HTMLElement;
  let secondCard: HTMLElement;
 

  function flipCard(this: HTMLElement) {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      firstCard = this;
      return;
    }

     //вы выйграли! 
  const element = document.querySelectorAll(".card.flip")
    element.length;
  const arr =  element.length;
  if(arr === 12){
   resultWin();
   cardElement.style.display = "none";
  }

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    secondCard = this;
    lockBoard = true;

    checkForMatch();
  }

  function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      disableCards();
      console.log("Карты совпали!");
      return;
    }

    unflipCards();
  }

  function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
  }

  function unflipCards() {
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      console.log("Нет совпадения!");
      resetBoard();
    }, 1500);
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
   
  }

  (function shuffle() {
    cards.forEach((card) => {
      const ramdomPos = Math.floor(Math.random() * 12);
      card.style.order = String(ramdomPos);
    });
  })();

  cards.forEach((card) => card.addEventListener("click", flipCard));

  const buttonGame = document.getElementById("game-button") as HTMLButtonElement;
  buttonGame.addEventListener("click", () => {
    renderMediumCard();
  });

  timeGame(90);
 
}

//Тяжелый уровень игры
export function renderHardCard() {
  const cardElement = document.getElementById("area") as HTMLElement;
  const cardHtml = `
    <div id="cart-area" class="game-cart-area">
    <div class="game-header">
  <div class="game-timer">
    <div class="time-set">
       <h4 class="timer-definition">min</h4>
       <h4 class="timer-definition">sek</h4>
    </div>
    <p id="timer" class="timer">0.00</p>
  </div>
  <p id ="text-timer" class="text-timer">Запомни карты!<p/>
  <div id="game-button" class="game-button">Начать заново</div>
    </div>
    <div class="game-area">
  
    <div class="card" data-framework="туз пики">
       <img class="front-face" src="./static/img/туз пики.jpg" alt="Card">
       <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="./static/img/туз пики.jpg" alt="Card">
    </div>
  
    <div class="card"  data-framework="10 черви">
       <img class="front-face" src="./static/img/10 черви.jpg" alt="Card">
       <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="./static/img/10 черви.jpg" alt="Card">
    </div>
  
   <div class="card"  data-framework="дама бубны">
      <img class="front-face" src="./static/img/дама бубны.jpg" alt="Card">
      <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="./static/img/дама бубны.jpg" alt="Card">
   </div>
  
   <div class="card"  data-framework="туз пики">
      <img class="front-face" src="./static/img/туз пики.jpg" alt="Card">
      <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="./static/img/туз пики.jpg" alt="Card">
    </div>
  
   <div class="card"  data-framework="дама бубны">
       <img class="front-face" src="./static/img/дама бубны.jpg" alt="Card">
       <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="./static/img/дама бубны.jpg" alt="Card">
   </div>
  
   <div class="card"  data-framework="10 черви">
      <img class="front-face" src="./static/img/10 черви.jpg" alt="Card">
      <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="./static/img/10 черви.jpg" alt="Card">
   </div>
  
   <div class="card" data-framework="дама черви">
       <img class="front-face" src="./static/img/дама черви.jpg" alt="Card">
       <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="./static/img/дама черви.jpg" alt="Card">
    </div>
  
    <div class="card"  data-framework="дама черви">
       <img class="front-face" src="./static/img/дама черви.jpg" alt="Card">
       <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="./static/img/дама черви.jpg" alt="Card">
    </div>
  
   <div class="card"  data-framework="король крести">
      <img class="front-face" src="./static/img/король крести.jpg" alt="Card">
      <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
      <img class="demo-face"src="./static/img/король крести.jpg" alt="Card">
   </div>
  
   <div class="card"  data-framework="король крести">
      <img class="front-face" src="./static/img/король крести.jpg" alt="Card">
      <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="./static/img/король крести.jpg" alt="Card">
    </div>
  
   <div class="card"  data-framework="7 крести">
       <img class="front-face" src="./static/img/7 крести.jpg" alt="Card">
       <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="./static/img/7 крести.jpg" alt="Card">
   </div>
  
   <div class="card"  data-framework="7 крести">
      <img class="front-face" src="./static/img/7 крести.jpg" alt="Card">
      <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="./static/img/7 крести.jpg" alt="Card">
   </div>
  
   <div class="card" data-framework="8 пики">
       <img class="front-face" src="./static/img/8 пики.jpg" alt="Card">
       <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="./static/img/8 пики.jpg" alt="Card">
    </div>
  
    <div class="card"  data-framework="8 пики">
       <img class="front-face" src="./static/img/8 пики.jpg" alt="Card">
       <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="./static/img/8 пики.jpg" alt="Card">
    </div>
  
   <div class="card"  data-framework="валет черви">
      <img class="front-face" src="./static/img/валет черви.jpg" alt="Card">
      <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="./static/img/валет черви.jpg" alt="Card">
   </div>
  
   <div class="card"  data-framework="валет черви">
      <img class="front-face" src="./static/img/валет черви.jpg" alt="Card">
      <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="./static/img/валет черви.jpg" alt="Card">
    </div>
  
   <div class="card"  data-framework="туз бубны">
       <img class="front-face" src="./static/img/туз бубны.jpg" alt="Card">
       <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
       <img class="demo-face" src="./static/img/туз бубны.jpg" alt="Card">
   </div>
  
   <div class="card"  data-framework="туз бубны">
      <img class="front-face" src="./static/img/туз бубны.jpg" alt="Card">
      <img class="back-face"  src="./static/img/рубашка.jpg" alt="Card">
      <img class="demo-face" src="./static/img/туз бубны.jpg" alt="Card">
   </div>
  
    </div>
    `;
  cardElement.innerHTML = cardHtml;

 setTimeout(function () {
    const rule =  document.getElementById("text-timer") as HTMLElement;
    const elems = document.querySelectorAll(
      ".demo-face",
    ) as NodeListOf<HTMLImageElement>;
    for (let i = 0; i < elems.length; i++) elems[i].style.display = "none";
    rule.style.display = "none";
  }, 5000);

  const cards: NodeListOf<HTMLElement> = document.querySelectorAll(".card");

  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard: HTMLElement;
  let secondCard: HTMLElement;
 

  function flipCard(this: HTMLElement) {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      firstCard = this;
      return;
    }

     //вы выйграли! 
  const element = document.querySelectorAll(".card.flip")
    element.length;
  const arr =  element.length;
  if(arr === 18){
   resultWin();
   cardElement.style.display = "none";
  }

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    secondCard = this;
    lockBoard = true;

    checkForMatch();
  }

  function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      disableCards();
      console.log("Карты совпали!");
      return;
    }

    unflipCards();
  }

  function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
  }

  function unflipCards() {
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      console.log("Нет совпадения!");
      resetBoard();
    }, 1500);
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    
  }

  (function shuffle() {
    cards.forEach((card) => {
      const ramdomPos = Math.floor(Math.random() * 18);
      card.style.order = String(ramdomPos);
    });
  })();

  cards.forEach((card) => card.addEventListener("click", flipCard));

  const buttonGame = document.getElementById("game-button") as HTMLButtonElement;
  buttonGame.addEventListener("click", () => {
    renderHardCard();
  });


  timeGame(150);
  
}