// Легкий уровень игры
export function renderEasyCard() {
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
<div class="game-button">Начать заново</div>
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
    let elems = document.querySelectorAll(".demo-face");
    for (let i = 0; i < elems.length; i++) elems[i].style.display = "none";
  }, 5000);

  const cards = document.querySelectorAll(".card");

  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;

  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

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
    [firstCard, secondCard] = [null, null];
  }

  (function shuffle() {
    cards.forEach((card) => {
      let ramdomPos = Math.floor(Math.random() * 6);
      card.style.order = ramdomPos;
    });
  })();

  cards.forEach((card) => card.addEventListener("click", flipCard));
}

//Средний уровень игры
export function renderMediumCard() {
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
<div class="game-button">Начать заново</div>
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
    let elems = document.querySelectorAll(".demo-face");
    for (let i = 0; i < elems.length; i++) elems[i].style.display = "none";
  }, 5000);

  const cards = document.querySelectorAll(".card");

  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;

  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

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
    [firstCard, secondCard] = [null, null];
  }

  (function shuffle() {
    cards.forEach((card) => {
      let ramdomPos = Math.floor(Math.random() * 12);
      card.style.order = ramdomPos;
    });
  })();

  cards.forEach((card) => card.addEventListener("click", flipCard));
}

//Тяжелый уровень игры
export function renderHardCard() {
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
<div class="game-button">Начать заново</div>
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
    let elems = document.querySelectorAll(".demo-face");
    for (let i = 0; i < elems.length; i++) elems[i].style.display = "none";
  }, 5000);

  const cards = document.querySelectorAll(".card");

  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;

  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

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
    [firstCard, secondCard] = [null, null];
  }

  (function shuffle() {
    cards.forEach((card) => {
      let ramdomPos = Math.floor(Math.random() * 18);
      card.style.order = ramdomPos;
    });
  })();

  cards.forEach((card) => card.addEventListener("click", flipCard));
}
