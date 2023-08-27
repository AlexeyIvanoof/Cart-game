export const renderFaceUppage = () => {
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
        <./static/img class="card" src="./static/img/туз пики.jpg" alt="карты">
        <./static/img class="card" src="./static/img/король пики.jpg" alt="карты">
        <./static/img class="card" src="./static/img/дама пики.jpg" alt="карты">
        <./static/img class="card" src="./static/img/валет пики.jpg" alt="карты">
        <./static/img class="card" src="./static/img/10 пики.jpg" alt="карты">
        <./static/img class="card" src="./static/img/9 пики.jpg" alt="карты">
        <./static/img class="card" src="./static/img/8 пики.jpg" alt="карты">
        <./static/img class="card" src="./static/img/7 пики.jpg" alt="карты">
        <./static/img class="card" src="./static/img/6 пики.jpg" alt="карты">
        <./static/img class="card" src="./static/img/туз черви.jpg" alt="карты">
        <./static/img class="card" src="./static/img/король черви.jpg" alt="карты">
        <./static/img class="card" src="./static/img/дама черви.jpg" alt="карты">
        <./static/img class="card" src="./static/img/валет черви.jpg" alt="карты">
        <./static/img class="card" src="./static/img/10 черви.jpg" alt="карты">
        <./static/img class="card" src="./static/img/9 черви.jpg" alt="карты">
        <./static/img class="card" src="./static/img/8 черви.jpg" alt="карты">
        <./static/img class="card" src="./static/img/7 черви.jpg" alt="карты">
        <./static/img class="card" src="./static/img/6 черви.jpg" alt="карты">
        <./static/img class="card" src="./static/img/туз бубны.jpg" alt="карты">
        <./static/img class="card" src="./static/img/король бубны.jpg" alt="карты">
        <./static/img class="card" src="./static/img/дама бубны.jpg" alt="карты">
        <./static/img class="card" src="./static/img/валет бубны.jpg" alt="карты">
        <./static/img class="card" src="./static/img/10 бубны.jpg" alt="карты">
        <./static/img class="card" src="./static/img/9 бубны.jpg" alt="карты">
        <./static/img class="card" src="./static/img/8 бубны.jpg" alt="карты">
        <./static/img class="card" src="./static/img/7 бубны.jpg" alt="карты">
        <./static/img class="card" src="./static/img/6 бубны.jpg" alt="карты">
        <./static/img class="card" src="./static/img/туз крести.jpg" alt="карты">
        <./static/img class="card" src="./static/img/король крести.jpg" alt="карты">
        <./static/img class="card" src="./static/img/дама крести.jpg" alt="карты">
        <./static/img class="card" src="./static/img/валет крести.jpg" alt="карты">
        <./static/img class="card" src="./static/img/10 крести.jpg" alt="карты">
        <./static/img class="card" src="./static/img/9 крести.jpg" alt="карты">
        <./static/img class="card" src="./static/img/8 крести.jpg" alt="карты">
        <./static/img class="card" src="./static/img/7 крести.jpg" alt="карты">
        <./static/img class="card" src="./static/img/6 крести.jpg" alt="карты">
    </div>
</div>`;

  pageElement.innerHTML = cartAreaHtml;
};
