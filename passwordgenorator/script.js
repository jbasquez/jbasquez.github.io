const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const symbolEl = document.getElementById('symbol');
const numberEl = document.getElementById('numbers');
const generateEl = document.getElementById('generate');
const allFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbol
};
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolEl.checked;
    passwordEl.innerText = generatePassword(hasLower,hasUpper, hasNumber, hasSymbol);
});
function generatePassword(lower, upper, number,symbol, length) {
    let generatePassword = "";
    const typesCount = lower + upper + number + symbol;
    
}


function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function getRandomSymbol() {
    const symbols = '`~!@#$%^&*()_-+={}[]|\:;,.<>?/';
    return symbols[Math.floor(Math.random() * symbols.length)];
}
