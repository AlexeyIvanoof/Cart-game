/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   difficultPage: () => (/* binding */ difficultPage),
/* harmony export */   game: () => (/* binding */ game),
/* harmony export */   setGameTime: () => (/* binding */ setGameTime),
/* harmony export */   setMaxTime: () => (/* binding */ setMaxTime)
/* harmony export */ });
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./levels */ "./levels.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./style.css");




/* TODO */
var game = {
    time: "00:00",
    maxTimeInSeconds: 0,
};
/* TODO */
function setGameTime(newTime) {
    game.time = newTime;
}
/* TODO */
function setMaxTime(maxTime) {
    game.maxTimeInSeconds = maxTime;
}
function difficultPage() {
    var pageElement = document.getElementById("app");
    var pageDifficultHtml = " <div id = \"game-cart\" class=\"game-cart\">\n    <div class=\"game-menu center\" >\n       <h2 class=\"game-set\">\u0412\u044B\u0431\u0435\u0440\u0438<br>\u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C</h2>\n       <div class=\"game-difficult\">\n          <label class=\"game-difficult-numb\"><input class=\"point\" id=\"level-easy\"   type=\"radio\" name=\"level\" value=\"1\" checked><span>1</span></label>\n          <label class=\"game-difficult-numb\"><input class=\"point\" id=\"level-medium\" type=\"radio\" name=\"level\" value=\"2\"><span>2</span></label>\n          <label class=\"game-difficult-numb\"><input class=\"point\" id=\"level-hard\"   type=\"radio\" name=\"level\" value=\"3\"><span>3</span></label>\n        </div>\n         <form>\n            <button id=\"start-game\" class=\"game-button\">\u0421\u0442\u0430\u0440\u0442</button>\n         </form>\n      </div>   \n   </div>";
    pageElement.innerHTML = pageDifficultHtml;
    var form = document.querySelector("form");
    var pageDifficult = document.getElementById("game-cart");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("submit");
        var levelDifficult = document.querySelector('input[name = "level"]:checked');
        if (levelDifficult) {
            var difficulty = levelDifficult.value;
            if (difficulty === "1") {
                console.log("Первый уровень сложности 6 карт");
                pageDifficult.style.display = "none";
                (0,_levels__WEBPACK_IMPORTED_MODULE_0__.renderEasyCard)();
            }
            else if (difficulty === "2") {
                console.log("Второй уровень сложности 12 карт");
                pageDifficult.style.display = "none";
                (0,_levels__WEBPACK_IMPORTED_MODULE_0__.renderMediumCard)();
            }
            else if (difficulty === "3") {
                console.log("Третий уровень сложности 18 карт");
                pageDifficult.style.display = "none";
                (0,_levels__WEBPACK_IMPORTED_MODULE_0__.renderHardCard)();
            }
        }
        else {
            alert("Выбирите уровень сложности");
        }
    });
}
difficultPage();


/***/ }),

/***/ "./levels.ts":
/*!*******************!*\
  !*** ./levels.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderEasyCard: () => (/* binding */ renderEasyCard),
/* harmony export */   renderHardCard: () => (/* binding */ renderHardCard),
/* harmony export */   renderMediumCard: () => (/* binding */ renderMediumCard)
/* harmony export */ });
/* harmony import */ var _result_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result-game */ "./result-game.ts");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ "./timer.ts");


// Легкий уровень игры
function renderEasyCard() {
    /* TODO */
    var cardElement = document.getElementById("area");
    var cardHtml = "<div id=\"cart-area\" class=\"game-cart-area\">\n  <div class=\"game-header\">\n  <div class=\"game-timer\">\n    <div class=\"time-set\">\n       <h4 class=\"timer-definition\">min</h4>\n       <h4 class=\"timer-definition\">sek</h4>\n    </div>\n    <p id=\"timer\" class=\"timer\">0.00</p>\n  </div>\n  <p id =\"text-timer\" class=\"text-timer\">\u0417\u0430\u043F\u043E\u043C\u043D\u0438 \u043A\u0430\u0440\u0442\u044B!<p/>\n  <div  id=\"game-button\" class=\"game-button\">\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E</div>\n    </div>\n    <div class=\"game-area\">\n  \n    <div class=\"card\" data-framework=\"\u0442\u0443\u0437 \u043F\u0438\u043A\u0438\">\n       <img class=\"front-face\" src=\"./static/img/\u0442\u0443\u0437 \u043F\u0438\u043A\u0438.jpg\" alt=\"Card\">\n       <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n       <img class=\"demo-face\" src=\"./static/img/\u0442\u0443\u0437 \u043F\u0438\u043A\u0438.jpg\" alt=\"Card\">\n    </div>\n  \n    <div class=\"card\"  data-framework=\"10 \u0447\u0435\u0440\u0432\u0438\">\n       <img class=\"front-face\" src=\"./static/img/10 \u0447\u0435\u0440\u0432\u0438.jpg\" alt=\"Card\">\n       <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n       <img class=\"demo-face\" src=\"./static/img/10 \u0447\u0435\u0440\u0432\u0438.jpg\" alt=\"Card\">\n    </div>\n  \n   <div class=\"card\"  data-framework=\"\u0434\u0430\u043C\u0430 \u0431\u0443\u0431\u043D\u044B\">\n      <img class=\"front-face\" src=\"./static/img/\u0434\u0430\u043C\u0430 \u0431\u0443\u0431\u043D\u044B.jpg\" alt=\"Card\">\n      <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n      <img class=\"demo-face\" src=\"./static/img/\u0434\u0430\u043C\u0430 \u0431\u0443\u0431\u043D\u044B.jpg\" alt=\"Card\">\n   </div>\n  \n   <div class=\"card\"  data-framework=\"\u0442\u0443\u0437 \u043F\u0438\u043A\u0438\">\n      <img class=\"front-face\" src=\"./static/img/\u0442\u0443\u0437 \u043F\u0438\u043A\u0438.jpg\" alt=\"Card\">\n      <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n      <img class=\"demo-face\" src=\"./static/img/\u0442\u0443\u0437 \u043F\u0438\u043A\u0438.jpg\" alt=\"Card\">\n    </div>\n  \n   <div class=\"card\"  data-framework=\"\u0434\u0430\u043C\u0430 \u0431\u0443\u0431\u043D\u044B\">\n       <img class=\"front-face\" src=\"./static/img/\u0434\u0430\u043C\u0430 \u0431\u0443\u0431\u043D\u044B.jpg\" alt=\"Card\">\n       <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n       <img class=\"demo-face\" src=\"./static/img/\u0434\u0430\u043C\u0430 \u0431\u0443\u0431\u043D\u044B.jpg\" alt=\"Card\">\n   </div>\n  \n   <div class=\"card\"  data-framework=\"10 \u0447\u0435\u0440\u0432\u0438\">\n      <img class=\"front-face\" src=\"./static/img/10 \u0447\u0435\u0440\u0432\u0438.jpg\" alt=\"Card\">\n      <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n      <img class=\"demo-face\" src=\"./static/img/10 \u0447\u0435\u0440\u0432\u0438.jpg\" alt=\"Card\">\n   </div>\n    </div>\n    ";
    cardElement.innerHTML = cardHtml;
    setTimeout(function () {
        var rule = document.getElementById("text-timer");
        var elems = document.querySelectorAll(".demo-face");
        for (var i = 0; i < elems.length; i++)
            elems[i].style.display = "none";
        rule.style.display = "none";
    }, 3000);
    /* TODO */
    var cards = document.querySelectorAll(".card");
    var hasFlippedCard = false;
    var lockBoard = false;
    /* TODO */
    var firstCard;
    /* TODO */
    var secondCard;
    /* TODO */
    function flipCard() {
        if (lockBoard)
            return;
        if (this === firstCard)
            return;
        this.classList.add("flip");
        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }
        //вы выйграли!
        var element = document.querySelectorAll(".card.flip");
        element.length;
        var arr = element.length;
        if (arr === 6) {
            (0,_result_game__WEBPACK_IMPORTED_MODULE_0__.resultWin)();
            cardElement.style.display = "none";
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
        setTimeout(function () {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
            console.log("Нет совпадения!");
            resetBoard();
        }, 1500);
    }
    function resetBoard() {
        var _a;
        _a = [false, false], hasFlippedCard = _a[0], lockBoard = _a[1];
    }
    (function shuffle() {
        cards.forEach(function (card) {
            var ramdomPos = Math.floor(Math.random() * 6);
            /* TODO */
            // card.style.order = ramdomPos.toString();
            card.style.order = String(ramdomPos);
        });
    })();
    cards.forEach(function (card) { return card.addEventListener("click", flipCard); });
    /* TODO */
    var buttonGame = document.getElementById("game-button");
    buttonGame.addEventListener("click", function () {
        renderEasyCard();
    });
    (0,_timer__WEBPACK_IMPORTED_MODULE_1__.timeGame)(30);
}
//Средний уровень игры
function renderMediumCard() {
    var cardElement = document.getElementById("area");
    var cardHtml = "\n    <div id=\"cart-area\" class=\"game-cart-area\">\n    <div class=\"game-header\">\n  <div class=\"game-timer\">\n    <div class=\"time-set\">\n       <h4 class=\"timer-definition\">min</h4>\n       <h4 class=\"timer-definition\">sek</h4>\n    </div>\n    <p id=\"timer\" class=\"timer\">0.00</p>\n  </div>\n  <p id =\"text-timer\" class=\"text-timer\">\u0417\u0430\u043F\u043E\u043C\u043D\u0438 \u043A\u0430\u0440\u0442\u044B!<p/>\n  <div id=\"game-button\" class=\"game-button\">\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E</div>\n    </div>\n    <div class=\"game-area\">\n  \n    <div class=\"card\" data-framework=\"\u0442\u0443\u0437 \u043F\u0438\u043A\u0438\">\n       <img class=\"front-face\" src=\"./static/img/\u0442\u0443\u0437 \u043F\u0438\u043A\u0438.jpg\" alt=\"Card\">\n       <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n       <img class=\"demo-face\" src=\"./static/img/\u0442\u0443\u0437 \u043F\u0438\u043A\u0438.jpg\" alt=\"Card\">\n    </div>\n  \n    <div class=\"card\"  data-framework=\"10 \u0447\u0435\u0440\u0432\u0438\">\n       <img class=\"front-face\" src=\"./static/img/10 \u0447\u0435\u0440\u0432\u0438.jpg\" alt=\"Card\">\n       <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n       <img class=\"demo-face\" src=\"./static/img/10 \u0447\u0435\u0440\u0432\u0438.jpg\" alt=\"Card\">\n    </div>\n  \n   <div class=\"card\"  data-framework=\"\u0434\u0430\u043C\u0430 \u0431\u0443\u0431\u043D\u044B\">\n      <img class=\"front-face\" src=\"./static/img/\u0434\u0430\u043C\u0430 \u0431\u0443\u0431\u043D\u044B.jpg\" alt=\"Card\">\n      <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n      <img class=\"demo-face\" src=\"./static/img/\u0434\u0430\u043C\u0430 \u0431\u0443\u0431\u043D\u044B.jpg\" alt=\"Card\">\n   </div>\n  \n   <div class=\"card\"  data-framework=\"\u0442\u0443\u0437 \u043F\u0438\u043A\u0438\">\n      <img class=\"front-face\" src=\"./static/img/\u0442\u0443\u0437 \u043F\u0438\u043A\u0438.jpg\" alt=\"Card\">\n      <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n      <img class=\"demo-face\" src=\"./static/img/\u0442\u0443\u0437 \u043F\u0438\u043A\u0438.jpg\" alt=\"Card\">\n    </div>\n  \n   <div class=\"card\"  data-framework=\"\u0434\u0430\u043C\u0430 \u0431\u0443\u0431\u043D\u044B\">\n       <img class=\"front-face\" src=\"./static/img/\u0434\u0430\u043C\u0430 \u0431\u0443\u0431\u043D\u044B.jpg\" alt=\"Card\">\n       <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n       <img class=\"demo-face\" src=\"./static/img/\u0434\u0430\u043C\u0430 \u0431\u0443\u0431\u043D\u044B.jpg\" alt=\"Card\">\n   </div>\n  \n   <div class=\"card\"  data-framework=\"10 \u0447\u0435\u0440\u0432\u0438\">\n      <img class=\"front-face\" src=\"./static/img/10 \u0447\u0435\u0440\u0432\u0438.jpg\" alt=\"Card\">\n      <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n      <img class=\"demo-face\" src=\"./static/img/10 \u0447\u0435\u0440\u0432\u0438.jpg\" alt=\"Card\">\n   </div>\n  \n   <div class=\"card\" data-framework=\"\u0434\u0430\u043C\u0430 \u0447\u0435\u0440\u0432\u0438\">\n       <img class=\"front-face\" src=\"./static/img/\u0434\u0430\u043C\u0430 \u0447\u0435\u0440\u0432\u0438.jpg\" alt=\"Card\">\n       <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n       <img class=\"demo-face\" src=\"./static/img/\u0434\u0430\u043C\u0430 \u0447\u0435\u0440\u0432\u0438.jpg\" alt=\"Card\">\n    </div>\n  \n    <div class=\"card\"  data-framework=\"\u0434\u0430\u043C\u0430 \u0447\u0435\u0440\u0432\u0438\">\n       <img class=\"front-face\" src=\"./static/img/\u0434\u0430\u043C\u0430 \u0447\u0435\u0440\u0432\u0438.jpg\" alt=\"Card\">\n       <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n       <img class=\"demo-face\" src=\"./static/img/\u0434\u0430\u043C\u0430 \u0447\u0435\u0440\u0432\u0438.jpg\" alt=\"Card\">\n    </div>\n  \n   <div class=\"card\"  data-framework=\"\u043A\u043E\u0440\u043E\u043B\u044C \u043A\u0440\u0435\u0441\u0442\u0438\">\n      <img class=\"front-face\" src=\"./static/img/\u043A\u043E\u0440\u043E\u043B\u044C \u043A\u0440\u0435\u0441\u0442\u0438.jpg\" alt=\"Card\">\n      <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n      <img class=\"demo-face\"src=\"./static/img/\u043A\u043E\u0440\u043E\u043B\u044C \u043A\u0440\u0435\u0441\u0442\u0438.jpg\" alt=\"Card\">\n   </div>\n  \n   <div class=\"card\"  data-framework=\"\u043A\u043E\u0440\u043E\u043B\u044C \u043A\u0440\u0435\u0441\u0442\u0438\">\n      <img class=\"front-face\" src=\"./static/img/\u043A\u043E\u0440\u043E\u043B\u044C \u043A\u0440\u0435\u0441\u0442\u0438.jpg\" alt=\"Card\">\n      <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n      <img class=\"demo-face\" src=\"./static/img/\u043A\u043E\u0440\u043E\u043B\u044C \u043A\u0440\u0435\u0441\u0442\u0438.jpg\" alt=\"Card\">\n    </div>\n  \n   <div class=\"card\"  data-framework=\"7 \u043A\u0440\u0435\u0441\u0442\u0438\">\n       <img class=\"front-face\" src=\"./static/img/7 \u043A\u0440\u0435\u0441\u0442\u0438.jpg\" alt=\"Card\">\n       <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n       <img class=\"demo-face\" src=\"./static/img/7 \u043A\u0440\u0435\u0441\u0442\u0438.jpg\" alt=\"Card\">\n   </div>\n  \n   <div class=\"card\"  data-framework=\"7 \u043A\u0440\u0435\u0441\u0442\u0438\">\n      <img class=\"front-face\" src=\"./static/img/7 \u043A\u0440\u0435\u0441\u0442\u0438.jpg\" alt=\"Card\">\n      <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n      <img class=\"demo-face\" src=\"./static/img/7 \u043A\u0440\u0435\u0441\u0442\u0438.jpg\" alt=\"Card\">\n   </div>\n   \n    </div>\n    ";
    cardElement.innerHTML = cardHtml;
    setTimeout(function () {
        var rule = document.getElementById("text-timer");
        var elems = document.querySelectorAll(".demo-face");
        for (var i = 0; i < elems.length; i++)
            elems[i].style.display = "none";
        rule.style.display = "none";
    }, 5000);
    var cards = document.querySelectorAll(".card");
    var hasFlippedCard = false;
    var lockBoard = false;
    var firstCard;
    var secondCard;
    function flipCard() {
        if (lockBoard)
            return;
        if (this === firstCard)
            return;
        this.classList.add("flip");
        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }
        //вы выйграли! 
        var element = document.querySelectorAll(".card.flip");
        element.length;
        var arr = element.length;
        if (arr === 12) {
            (0,_result_game__WEBPACK_IMPORTED_MODULE_0__.resultWin)();
            cardElement.style.display = "none";
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
        setTimeout(function () {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
            console.log("Нет совпадения!");
            resetBoard();
        }, 1500);
    }
    function resetBoard() {
        var _a;
        _a = [false, false], hasFlippedCard = _a[0], lockBoard = _a[1];
    }
    (function shuffle() {
        cards.forEach(function (card) {
            var ramdomPos = Math.floor(Math.random() * 12);
            card.style.order = String(ramdomPos);
        });
    })();
    cards.forEach(function (card) { return card.addEventListener("click", flipCard); });
    var buttonGame = document.getElementById("game-button");
    ;
    buttonGame.addEventListener("click", function () {
        renderMediumCard();
    });
    (0,_timer__WEBPACK_IMPORTED_MODULE_1__.timeGame)(90);
}
//Тяжелый уровень игры
function renderHardCard() {
    var cardElement = document.getElementById("area");
    var cardHtml = "\n    <div id=\"cart-area\" class=\"game-cart-area\">\n    <div class=\"game-header\">\n  <div class=\"game-timer\">\n    <div class=\"time-set\">\n       <h4 class=\"timer-definition\">min</h4>\n       <h4 class=\"timer-definition\">sek</h4>\n    </div>\n    <p id=\"timer\" class=\"timer\">0.00</p>\n  </div>\n  <p id =\"text-timer\" class=\"text-timer\">\u0417\u0430\u043F\u043E\u043C\u043D\u0438 \u043A\u0430\u0440\u0442\u044B!<p/>\n  <div id=\"game-button\" class=\"game-button\">\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E</div>\n    </div>\n    <div class=\"game-area\">\n  \n    <div class=\"card\" data-framework=\"\u0442\u0443\u0437 \u043F\u0438\u043A\u0438\">\n       <img class=\"front-face\" src=\"./static/img/\u0442\u0443\u0437 \u043F\u0438\u043A\u0438.jpg\" alt=\"Card\">\n       <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n       <img class=\"demo-face\" src=\"./static/img/\u0442\u0443\u0437 \u043F\u0438\u043A\u0438.jpg\" alt=\"Card\">\n    </div>\n  \n    <div class=\"card\"  data-framework=\"10 \u0447\u0435\u0440\u0432\u0438\">\n       <img class=\"front-face\" src=\"./static/img/10 \u0447\u0435\u0440\u0432\u0438.jpg\" alt=\"Card\">\n       <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n       <img class=\"demo-face\" src=\"./static/img/10 \u0447\u0435\u0440\u0432\u0438.jpg\" alt=\"Card\">\n    </div>\n  \n   <div class=\"card\"  data-framework=\"\u0434\u0430\u043C\u0430 \u0431\u0443\u0431\u043D\u044B\">\n      <img class=\"front-face\" src=\"./static/img/\u0434\u0430\u043C\u0430 \u0431\u0443\u0431\u043D\u044B.jpg\" alt=\"Card\">\n      <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n      <img class=\"demo-face\" src=\"./static/img/\u0434\u0430\u043C\u0430 \u0431\u0443\u0431\u043D\u044B.jpg\" alt=\"Card\">\n   </div>\n  \n   <div class=\"card\"  data-framework=\"\u0442\u0443\u0437 \u043F\u0438\u043A\u0438\">\n      <img class=\"front-face\" src=\"./static/img/\u0442\u0443\u0437 \u043F\u0438\u043A\u0438.jpg\" alt=\"Card\">\n      <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n      <img class=\"demo-face\" src=\"./static/img/\u0442\u0443\u0437 \u043F\u0438\u043A\u0438.jpg\" alt=\"Card\">\n    </div>\n  \n   <div class=\"card\"  data-framework=\"\u0434\u0430\u043C\u0430 \u0431\u0443\u0431\u043D\u044B\">\n       <img class=\"front-face\" src=\"./static/img/\u0434\u0430\u043C\u0430 \u0431\u0443\u0431\u043D\u044B.jpg\" alt=\"Card\">\n       <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n       <img class=\"demo-face\" src=\"./static/img/\u0434\u0430\u043C\u0430 \u0431\u0443\u0431\u043D\u044B.jpg\" alt=\"Card\">\n   </div>\n  \n   <div class=\"card\"  data-framework=\"10 \u0447\u0435\u0440\u0432\u0438\">\n      <img class=\"front-face\" src=\"./static/img/10 \u0447\u0435\u0440\u0432\u0438.jpg\" alt=\"Card\">\n      <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n      <img class=\"demo-face\" src=\"./static/img/10 \u0447\u0435\u0440\u0432\u0438.jpg\" alt=\"Card\">\n   </div>\n  \n   <div class=\"card\" data-framework=\"\u0434\u0430\u043C\u0430 \u0447\u0435\u0440\u0432\u0438\">\n       <img class=\"front-face\" src=\"./static/img/\u0434\u0430\u043C\u0430 \u0447\u0435\u0440\u0432\u0438.jpg\" alt=\"Card\">\n       <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n       <img class=\"demo-face\" src=\"./static/img/\u0434\u0430\u043C\u0430 \u0447\u0435\u0440\u0432\u0438.jpg\" alt=\"Card\">\n    </div>\n  \n    <div class=\"card\"  data-framework=\"\u0434\u0430\u043C\u0430 \u0447\u0435\u0440\u0432\u0438\">\n       <img class=\"front-face\" src=\"./static/img/\u0434\u0430\u043C\u0430 \u0447\u0435\u0440\u0432\u0438.jpg\" alt=\"Card\">\n       <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n       <img class=\"demo-face\" src=\"./static/img/\u0434\u0430\u043C\u0430 \u0447\u0435\u0440\u0432\u0438.jpg\" alt=\"Card\">\n    </div>\n  \n   <div class=\"card\"  data-framework=\"\u043A\u043E\u0440\u043E\u043B\u044C \u043A\u0440\u0435\u0441\u0442\u0438\">\n      <img class=\"front-face\" src=\"./static/img/\u043A\u043E\u0440\u043E\u043B\u044C \u043A\u0440\u0435\u0441\u0442\u0438.jpg\" alt=\"Card\">\n      <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n      <img class=\"demo-face\"src=\"./static/img/\u043A\u043E\u0440\u043E\u043B\u044C \u043A\u0440\u0435\u0441\u0442\u0438.jpg\" alt=\"Card\">\n   </div>\n  \n   <div class=\"card\"  data-framework=\"\u043A\u043E\u0440\u043E\u043B\u044C \u043A\u0440\u0435\u0441\u0442\u0438\">\n      <img class=\"front-face\" src=\"./static/img/\u043A\u043E\u0440\u043E\u043B\u044C \u043A\u0440\u0435\u0441\u0442\u0438.jpg\" alt=\"Card\">\n      <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n      <img class=\"demo-face\" src=\"./static/img/\u043A\u043E\u0440\u043E\u043B\u044C \u043A\u0440\u0435\u0441\u0442\u0438.jpg\" alt=\"Card\">\n    </div>\n  \n   <div class=\"card\"  data-framework=\"7 \u043A\u0440\u0435\u0441\u0442\u0438\">\n       <img class=\"front-face\" src=\"./static/img/7 \u043A\u0440\u0435\u0441\u0442\u0438.jpg\" alt=\"Card\">\n       <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n       <img class=\"demo-face\" src=\"./static/img/7 \u043A\u0440\u0435\u0441\u0442\u0438.jpg\" alt=\"Card\">\n   </div>\n  \n   <div class=\"card\"  data-framework=\"7 \u043A\u0440\u0435\u0441\u0442\u0438\">\n      <img class=\"front-face\" src=\"./static/img/7 \u043A\u0440\u0435\u0441\u0442\u0438.jpg\" alt=\"Card\">\n      <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n      <img class=\"demo-face\" src=\"./static/img/7 \u043A\u0440\u0435\u0441\u0442\u0438.jpg\" alt=\"Card\">\n   </div>\n  \n   <div class=\"card\" data-framework=\"8 \u043F\u0438\u043A\u0438\">\n       <img class=\"front-face\" src=\"./static/img/8 \u043F\u0438\u043A\u0438.jpg\" alt=\"Card\">\n       <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n       <img class=\"demo-face\" src=\"./static/img/8 \u043F\u0438\u043A\u0438.jpg\" alt=\"Card\">\n    </div>\n  \n    <div class=\"card\"  data-framework=\"8 \u043F\u0438\u043A\u0438\">\n       <img class=\"front-face\" src=\"./static/img/8 \u043F\u0438\u043A\u0438.jpg\" alt=\"Card\">\n       <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n       <img class=\"demo-face\" src=\"./static/img/8 \u043F\u0438\u043A\u0438.jpg\" alt=\"Card\">\n    </div>\n  \n   <div class=\"card\"  data-framework=\"\u0432\u0430\u043B\u0435\u0442 \u0447\u0435\u0440\u0432\u0438\">\n      <img class=\"front-face\" src=\"./static/img/\u0432\u0430\u043B\u0435\u0442 \u0447\u0435\u0440\u0432\u0438.jpg\" alt=\"Card\">\n      <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n      <img class=\"demo-face\" src=\"./static/img/\u0432\u0430\u043B\u0435\u0442 \u0447\u0435\u0440\u0432\u0438.jpg\" alt=\"Card\">\n   </div>\n  \n   <div class=\"card\"  data-framework=\"\u0432\u0430\u043B\u0435\u0442 \u0447\u0435\u0440\u0432\u0438\">\n      <img class=\"front-face\" src=\"./static/img/\u0432\u0430\u043B\u0435\u0442 \u0447\u0435\u0440\u0432\u0438.jpg\" alt=\"Card\">\n      <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n      <img class=\"demo-face\" src=\"./static/img/\u0432\u0430\u043B\u0435\u0442 \u0447\u0435\u0440\u0432\u0438.jpg\" alt=\"Card\">\n    </div>\n  \n   <div class=\"card\"  data-framework=\"\u0442\u0443\u0437 \u0431\u0443\u0431\u043D\u044B\">\n       <img class=\"front-face\" src=\"./static/img/\u0442\u0443\u0437 \u0431\u0443\u0431\u043D\u044B.jpg\" alt=\"Card\">\n       <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n       <img class=\"demo-face\" src=\"./static/img/\u0442\u0443\u0437 \u0431\u0443\u0431\u043D\u044B.jpg\" alt=\"Card\">\n   </div>\n  \n   <div class=\"card\"  data-framework=\"\u0442\u0443\u0437 \u0431\u0443\u0431\u043D\u044B\">\n      <img class=\"front-face\" src=\"./static/img/\u0442\u0443\u0437 \u0431\u0443\u0431\u043D\u044B.jpg\" alt=\"Card\">\n      <img class=\"back-face\"  src=\"./static/img/\u0440\u0443\u0431\u0430\u0448\u043A\u0430.jpg\" alt=\"Card\">\n      <img class=\"demo-face\" src=\"./static/img/\u0442\u0443\u0437 \u0431\u0443\u0431\u043D\u044B.jpg\" alt=\"Card\">\n   </div>\n  \n    </div>\n    ";
    cardElement.innerHTML = cardHtml;
    setTimeout(function () {
        var rule = document.getElementById("text-timer");
        var elems = document.querySelectorAll(".demo-face");
        for (var i = 0; i < elems.length; i++)
            elems[i].style.display = "none";
        rule.style.display = "none";
    }, 5000);
    var cards = document.querySelectorAll(".card");
    var hasFlippedCard = false;
    var lockBoard = false;
    var firstCard;
    var secondCard;
    function flipCard() {
        if (lockBoard)
            return;
        if (this === firstCard)
            return;
        this.classList.add("flip");
        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }
        //вы выйграли! 
        var element = document.querySelectorAll(".card.flip");
        element.length;
        var arr = element.length;
        if (arr === 18) {
            (0,_result_game__WEBPACK_IMPORTED_MODULE_0__.resultWin)();
            cardElement.style.display = "none";
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
        setTimeout(function () {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
            console.log("Нет совпадения!");
            resetBoard();
        }, 1500);
    }
    function resetBoard() {
        var _a;
        _a = [false, false], hasFlippedCard = _a[0], lockBoard = _a[1];
    }
    (function shuffle() {
        cards.forEach(function (card) {
            var ramdomPos = Math.floor(Math.random() * 18);
            card.style.order = String(ramdomPos);
        });
    })();
    cards.forEach(function (card) { return card.addEventListener("click", flipCard); });
    var buttonGame = document.getElementById("game-button");
    ;
    buttonGame.addEventListener("click", function () {
        renderHardCard();
    });
    (0,_timer__WEBPACK_IMPORTED_MODULE_1__.timeGame)(150);
}


/***/ }),

/***/ "./result-game.ts":
/*!************************!*\
  !*** ./result-game.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resultLose: () => (/* binding */ resultLose),
/* harmony export */   resultWin: () => (/* binding */ resultWin)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./index.ts");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ "./timer.ts");



function resultWin() {
    var resultElement = document.getElementById("app");
    var differenceInSeconds = (0,_timer__WEBPACK_IMPORTED_MODULE_1__.getSecondsDifference)(___WEBPACK_IMPORTED_MODULE_0__.game.maxTimeInSeconds, ___WEBPACK_IMPORTED_MODULE_0__.game.time);
    var winHtml = "<div id=\"win\" class=\"box-result\" center>\n    <div class=\"game-positiveResult\" center>\n        <img class=\"win\" src=\"static/img/celebration.png\" alt=\"\">\n        <h3 class=\"win-text\">\u0412\u044B \u0432\u044B\u0438\u0433\u0440\u0430\u043B\u0438!</h3>\n        <p class=\"elapsed-time-text\">\u0417\u0430\u0442\u0440\u0430\u0447\u0435\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F:</p>\n        <p id=\"timer\" class=\"elapsed-time\">".concat(differenceInSeconds, " \u0441\u0435\u043A</p>\n        <button  id=\"game-button\" class=\"game-button\">\u0418\u0433\u0440\u0430\u0442\u044C \u0441\u043D\u043E\u0432\u0430</button>\n    </div>\n    </div>\n    ");
    resultElement.innerHTML = winHtml;
    var pageWin = document.getElementById("win");
    var buttonGame = document.getElementById("game-button");
    buttonGame.addEventListener("click", function () {
        pageWin.style.display = "none";
        (0,___WEBPACK_IMPORTED_MODULE_0__.difficultPage)();
    });
}
function resultLose() {
    var resultElement = document.getElementById("area");
    //1   const resultElement = document.getElementById("area")!;
    //2   const resultElement: HTMLElement | null = document.getElementById("area") as HTMLElement;
    // но тогда нужно проверить переменную на null
    var differenceInSeconds = (0,_timer__WEBPACK_IMPORTED_MODULE_1__.getSecondsDifference)(___WEBPACK_IMPORTED_MODULE_0__.game.maxTimeInSeconds, ___WEBPACK_IMPORTED_MODULE_0__.game.time);
    var winHtml = "<div id=\"lose\" class=\"box-result\" center>\n    <div class=\"game-positiveResult\" center>\n        <img class=\"win\" src=\"static/img/image.png\" alt=\"\">\n        <h3 class=\"win-text\">\u0412\u044B \u043F\u0440\u043E\u0438\u0433\u0440\u0430\u043B\u0438!</h3>\n        <p class=\"elapsed-time-text\">\u0417\u0430\u0442\u0440\u0430\u0447\u0435\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F:</p>\n        <p class=\"elapsed-time\">".concat(differenceInSeconds, " \u0441\u0435\u043A</p>\n        <button id=\"game-button\" class=\"game-button\">\u0418\u0433\u0440\u0430\u0442\u044C \u0441\u043D\u043E\u0432\u0430</button>\n    </div>\n</div> ");
    resultElement.innerHTML = winHtml;
    var pageLose = document.getElementById("lose");
    var buttonGame = document.getElementById("game-button");
    buttonGame.addEventListener("click", function () {
        pageLose.style.display = "none";
        (0,___WEBPACK_IMPORTED_MODULE_0__.difficultPage)();
    });
}


/***/ }),

/***/ "./timer.ts":
/*!******************!*\
  !*** ./timer.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSecondsDifference: () => (/* binding */ getSecondsDifference),
/* harmony export */   timeGame: () => (/* binding */ timeGame)
/* harmony export */ });
/* harmony import */ var _result_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result-game */ "./result-game.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./index.ts");


function getSecondsDifference(firstTime, secondTime) {
    // Split the second time string into minutes and seconds
    var _a = secondTime.split(":"), minutes = _a[0], seconds = _a[1];
    // Convert the minutes and seconds to numbers
    var secondTimeInSeconds = Number(minutes) * 60 + parseInt(seconds);
    // Calculate the difference in seconds
    var differenceInSeconds = firstTime - secondTimeInSeconds;
    return differenceInSeconds;
}
function timeGame(time) {
    (0,_index__WEBPACK_IMPORTED_MODULE_1__.setMaxTime)(time);
    var timerDownEl = document.getElementById("timer");
    var timer = setInterval(function () {
        var minutes = Math.floor(time / 60);
        var seconds = time % 60;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        (0,_index__WEBPACK_IMPORTED_MODULE_1__.setGameTime)("".concat(minutes, ":").concat(seconds));
        timerDownEl.innerHTML = "".concat(minutes, ":").concat(seconds);
        time--;
        if (time < 0) {
            clearInterval(timer);
            (0,_result_game__WEBPACK_IMPORTED_MODULE_0__.resultLose)();
        }
    }, 1000);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map