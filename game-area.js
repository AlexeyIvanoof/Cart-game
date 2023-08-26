export const renderPage = () => {
  const pageElement = document.getElementById("app");
  const cartAreaHtml = ` <div id="cart-area" class="game-cart-area">
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
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
        <img class="card" src="img/рубашка.jpg" alt="карты">
    </div>
</div>`;

  pageElement.innerHTML = cartAreaHtml;
};
