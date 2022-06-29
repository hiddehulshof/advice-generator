var adviceWrapper = document.querySelector('#advice-wrapper');
var adviceId = document.querySelector('#advice-id');
var adviceBox = document.querySelector('#advice-box');
var initialHeight = 200;
var advice;
function initialAdvice() {
    fetch('https://api.adviceslip.com/advice', { cache: "no-store" }).then(function (response) {
        return response.json();
    }).then(function (adviceData) {
        advice = adviceData.slip;
        adviceWrapper.innerHTML = "<p>\u201C".concat(advice.advice, "\u201D</p>");
        adviceId.textContent = '#' + String(advice.id);
    })["catch"](function (error) {
        console.log(error);
    });
}
function getAdvice() {
    adviceBox.classList.add('reveal');
    fetch('https://api.adviceslip.com/advice', { cache: "no-store" }).then(function (response) {
        return response.json();
    }).then(function (adviceData) {
        adviceWrapper.style.color = 'hsl(217, 19%, 24%)';
        advice = adviceData.slip;
        setTimeout(colorAnimation, 1000);
    })["catch"](function (error) {
        console.log(error);
    });
}
var colorAnimation = function () {
    adviceWrapper.style.color = 'hsl(193, 38%, 86%)';
    adviceWrapper.innerHTML = "<p>\u201C".concat(advice.advice, "\u201D</p>");
    adviceId.textContent = '#' + String(advice.id);
    adviceBox.classList.remove('reveal');
};
window.onload = function () {
    initialAdvice();
};
// console.log(advice());