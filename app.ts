const adviceWrapper = document.querySelector('#advice-wrapper');
const adviceId = document.querySelector('#advice-id');
const adviceBox = document.querySelector('#advice-box');

const initialHeight = 200;

interface Advice {
    id: number,
    advice: string
}

let advice: Advice;

function initialAdvice(): void {
    fetch('https://api.adviceslip.com/advice', {cache: "no-store"}).then(response => {
        return response.json();
    }).then(adviceData => {
        advice = adviceData.slip;
        adviceWrapper.innerHTML = `<p>“${advice.advice}”</p>`;
        adviceId.textContent = '#' + String(advice.id)
    }).catch(error => {
        console.log(error);
    });
}


function getAdvice(): void {
    adviceBox.classList.add('reveal')
    fetch('https://api.adviceslip.com/advice', {cache: "no-store"}).then(response => {
        return response.json();
    }).then(adviceData => {
        adviceWrapper.style.color = 'hsl(217, 19%, 24%)'
        advice = adviceData.slip;
        setTimeout(colorAnimation, 1000);
    }).catch(error => {
        console.log(error);
    });
}

const colorAnimation = () => {
    adviceWrapper.style.color = 'hsl(193, 38%, 86%)'
    adviceWrapper.innerHTML = `<p>“${advice.advice}”</p>`;
    adviceId.textContent = '#' + String(advice.id)
    adviceBox.classList.remove('reveal')
}
window.onload = () => {
    initialAdvice()
}

// console.log(advice());
