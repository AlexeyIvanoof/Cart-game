export function resultWin() {
    const resultElement = document.getElementById("area");
    const winHtml = `<div class="box-result" center>
    <div class="game-positiveResult" center>
        <img class="win" src="static/img/celebration.jpg" alt="">
        <h3 class="win-text">Вы выиграли!</h3>
        <p class="elapsed-time-text">Затраченное время:</p>
        <p class="elapsed-time">01.20</p>
        <button class="game-button">Играть снова</button>
    </div>
    </div>
    `
    resultElement.innerHTML = winHtml;
}

export function resultLose() {
    const resultElement = document.getElementById("area");
    const winHtml = `<div class="box-result" center>
    <div class="game-positiveResult" center>
        <img class="win" src="static/img/dead.jpg" alt="">
        <h3 class="win-text">Вы проиграли!</h3>
        <p class="elapsed-time-text">Затраченное время:</p>
        <p class="elapsed-time">01.20</p>
        <button class="game-button">Играть снова</button>
    </div>
</div> `
    resultElement.innerHTML = winHtml;
}