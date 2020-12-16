const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const symbolsEl = document.getElementById('symbols');
const numbersEl = document.getElementById('numbers');
const generateEl = document.getElementById('generate');
const allFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbols
};

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbols = symbolsEl.checked;
    resultEl.innerText = generatedPassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbols,
        length
    );
});

function generatedPassword(lower, upper, number,symbols, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbols;
    console.log('typesCount', typesCount);
    const typesArr = [{ lower }, { upper }, { number }, { symbols }].filter
        (
        item => Object.values(item)[0]
        );
    
    if (typesCount === 0) {
        return 'please select a input value';
    }
    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generate += allFunc[funcName]();
        });
    }
    
}


function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function getRandomSymbols() {
    const symbols = '!@#$%^&*';
    return symbols[Math.floor(Math.random() * symbols.length)];
}