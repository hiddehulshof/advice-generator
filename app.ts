const adviceWrapper: HTMLElement = document.querySelector('#advice-wrapper');
const adviceId: HTMLElement = document.querySelector('#advice-id');
const adviceBox: HTMLElement = document.querySelector('#advice-box');

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
        setAdviceHtml()
    }).catch(error => {
        console.log(error);
    });
}

function getAdvice(): void {
    adviceWrapper.style.color = 'hsl(217, 19%, 24%)'

    adviceBox.classList.add('reveal')
    fetch('https://api.adviceslip.com/advice', {cache: "no-store"}).then(response => {
        return response.json();
    }).then(adviceData => {
        advice = adviceData.slip;
        setTimeout(colorAnimation, 1000);
    }).catch(error => {
        console.log(error);
    });
}

const setAdviceHtml = (): void => {
    adviceWrapper.innerHTML = `<p>“${advice.advice}”</p>`;
    adviceId.textContent = '#' + String(advice.id)
}

const colorAnimation = () => {
    adviceWrapper.style.color = 'hsl(193, 38%, 86%)'
    setAdviceHtml()
    adviceBox.classList.remove('reveal')
}

window.onload = () => {
    initialAdvice()
}
